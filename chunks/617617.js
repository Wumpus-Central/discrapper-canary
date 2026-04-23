"use strict";
n.d(t, { A: () => v });
var r = n(284009),
    i = n.n(r),
    s = n(735438),
    a = n.n(s),
    o = n(311907),
    l = n(803805),
    u = n(873298),
    c = n(335871),
    d = n(73153),
    _ = n(405892),
    f = n(761821),
    p = n(355097);
let h = { ProtoClass: u.nT, proto: u.nT.create(), lazyLoaded: !1, editInfo: (0, p.O9)() },
    E = { ProtoClass: l.aw, proto: l.aw.create(), lazyLoaded: !0, editInfo: (0, p.O9)() },
    m = { [p.oD.PRELOADED_USER_SETTINGS]: h, [p.oD.FRECENCY_AND_FAVORITES_SETTINGS]: E },
    g = !1;
function A() {
    I();
}
function I() {
    Object.values(m).forEach((e) => {
        null != e.editInfo.timeout &&
            (clearTimeout(e.editInfo.timeout),
            (e.editInfo.timeout = void 0),
            (e.editInfo.timeoutDelay = Number.MAX_SAFE_INTEGER),
            (e.editInfo.rateLimited = !1),
            (e.editInfo.offlineEditDataVersion = e.proto.versions?.dataVersion ?? 0));
    });
}
function T(e) {
    null != e.editInfo.timeout && clearTimeout(e.editInfo.timeout), (e.editInfo = (0, p.O9)());
}
function S(e) {
    let {
        settings: { proto: t, type: n },
        partial: r,
        resetEditInfo: s,
        local: a,
    } = e;
    g = !a;
    let o = m[n];
    s && T(o),
        r
            ? ((o.proto = (0, f.RK)(o.ProtoClass, o.proto, t)),
              i()("string" != typeof o.proto, "UserSettingsProto cannot be a string"))
            : ((o.proto = t),
              i()("string" != typeof o.proto, "UserSettingsProto cannot be a string"),
              (o.editInfo.loaded = !0),
              (o.editInfo.loading = !1));
}
function y(e) {
    null != e &&
        a().forEach(m, (t, n) => {
            let r = e[Number(n)];
            if (null == r) return;
            let s = r?.proto ?? "",
                a = (0, f.ii)(t.ProtoClass, s);
            if (null == a) return;
            (t.proto = a), i()("string" != typeof t.proto, "UserSettingsProto cannot be a string");
            let o = r?.protoToSave ?? null;
            if (null == o || null == r.offlineEditDataVersion) return;
            let l = (0, f.ii)(t.ProtoClass, o);
            null != l && ((t.editInfo.protoToSave = l), (t.editInfo.offlineEditDataVersion = r.offlineEditDataVersion));
        });
}
class N extends o.Ay.PersistedStore {
    static displayName = "UserSettingsProtoStore";
    static persistKey = "UserSettingsProtoStore-Cache";
    initialize(e) {
        y(e);
    }
    getState() {
        return this.computeState();
    }
    computeState() {
        return a().mapValues(m, (e) => {
            let t = { proto: (0, f.ob)(e.ProtoClass, e.proto) };
            return (
                null != e.editInfo.offlineEditDataVersion &&
                    null != e.editInfo.protoToSave &&
                    ((t.protoToSave = (0, f.ob)(e.ProtoClass, e.editInfo.protoToSave)),
                    (t.offlineEditDataVersion = e.editInfo.offlineEditDataVersion)),
                t
            );
        });
    }
    hasLoaded(e) {
        return m[e].editInfo.loaded;
    }
    get settings() {
        return h.proto;
    }
    get frecencyWithoutFetchingLatest() {
        return E.proto;
    }
    get wasMostRecentUpdateFromServer() {
        return g;
    }
    getFullState() {
        return m;
    }
    getGuildFolders() {
        let e = h.proto.guildFolders?.folders;
        return null == e
            ? null
            : e.map((e) => {
                  let t = e.id?.value,
                      n = e.color?.value;
                  return {
                      guildIds: e.guildIds,
                      folderId: null == t ? void 0 : Number(t),
                      folderName: e.name?.value,
                      folderColor: null == n ? void 0 : Number(n),
                  };
              });
    }
    getGuildRecentsDismissedAt(e) {
        if (null == e) return 0;
        let t = this.settings.guilds?.guilds[e]?.guildRecentsDismissedAt;
        return null == t ? 0 : c.D.toDate(t).getTime();
    }
    getDismissedGuildContent(e) {
        return null == e ? null : this.settings.guilds?.guilds?.[e]?.dismissedGuildContent;
    }
    getGuildDismissedContentState(e) {
        return this.settings.guilds?.guilds?.[e]?.guildDismissibleContentStates;
    }
    getGuildsProto() {
        return this.settings.guilds?.guilds ?? null;
    }
}
let v = new N(d.h, {
    CACHE_LOADED: function (e) {
        let { userSettings: t } = e;
        y(t);
    },
    USER_SETTINGS_PROTO_UPDATE: S,
    USER_SETTINGS_PROTO_ENQUEUE_UPDATE: S,
    USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: function (e) {
        let {
            settings: { type: t, changes: n },
        } = e;
        i()(!__OVERLAY__, "this cannot run in the overlay");
        let r = m[t];
        return (r.editInfo = { ...r.editInfo, ...n }), !1;
    },
    CONNECTION_OPEN: function (e) {
        let { userSettingsProto: t } = e;
        null != t && ((h.proto = t), i()("string" != typeof h.proto, "UserSettingsProto cannot be a string"));
        let { proto: n, isDirty: r, cleanupFuncs: s } = (0, f.vI)(h.proto, _.A[p.oD.PRELOADED_USER_SETTINGS]);
        r && T(h),
            (h.proto = n),
            i()("string" != typeof h.proto, "UserSettingsProto cannot be a string"),
            (h.editInfo.triggeredMigrations = r),
            (h.editInfo.cleanupFuncs = s),
            (h.editInfo.loaded = !0),
            Object.values(m).forEach((e) => {
                e.lazyLoaded && ((e.editInfo.loaded = !1), (e.editInfo.loading = !1));
            }),
            I();
    },
    CONNECTION_CLOSED: A,
    CONNECTION_RESUMED: A,
    OVERLAY_INITIALIZE: function (e) {
        let { userSettingsProto: t } = e;
        (h.proto = (0, f.Gd)(t)), i()("string" != typeof h.proto, "UserSettingsProto cannot be a string");
    },
    LOGOUT: function () {
        I(),
            Object.values(m).forEach((e) => {
                (e.proto = e.ProtoClass.create()), (e.editInfo = (0, p.O9)());
            });
    },
});
