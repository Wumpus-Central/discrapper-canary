"use strict";
n.d(t, { A: () => R });
var i = n(284009),
    r = n.n(i),
    s = n(735438),
    a = n.n(s),
    o = n(17928),
    l = n(803805),
    d = n(873298),
    _ = n(335871),
    u = n(228366),
    c = n(405892),
    E = n(761821),
    h = n(355097);
let m = { ProtoClass: d.nT, proto: d.nT.create(), lazyLoaded: !1, editInfo: (0, h.O9)() },
    f = { ProtoClass: l.aw, proto: l.aw.create(), lazyLoaded: !0, editInfo: (0, h.O9)() },
    g = { [h.oD.PRELOADED_USER_SETTINGS]: m, [h.oD.FRECENCY_AND_FAVORITES_SETTINGS]: f },
    p = !1;
function A() {
    I();
}
function I() {
    Object.values(g).forEach((e) => {
        null != e.editInfo.timeout &&
            (clearTimeout(e.editInfo.timeout),
            (e.editInfo.timeout = void 0),
            (e.editInfo.timeoutDelay = Number.MAX_SAFE_INTEGER),
            (e.editInfo.rateLimited = !1),
            (e.editInfo.offlineEditDataVersion = e.proto.versions?.dataVersion ?? 0));
    });
}
function T(e) {
    null != e.editInfo.timeout && clearTimeout(e.editInfo.timeout), (e.editInfo = (0, h.O9)());
}
function S(e) {
    let {
        settings: { proto: t, type: n },
        partial: i,
        resetEditInfo: s,
        local: a,
    } = e;
    p = !a;
    let o = g[n];
    s && T(o),
        i
            ? ((o.proto = (0, E.RK)(o.ProtoClass, o.proto, t)),
              r()("string" != typeof o.proto, "UserSettingsProto cannot be a string"))
            : ((o.proto = t),
              r()("string" != typeof o.proto, "UserSettingsProto cannot be a string"),
              (o.editInfo.loaded = !0),
              (o.editInfo.loading = !1));
}
function N(e) {
    null != e &&
        a().forEach(g, (t, n) => {
            let i = e[Number(n)];
            if (null == i) return;
            let s = i?.proto ?? "",
                a = (0, E.ii)(t.ProtoClass, s);
            if (null == a) return;
            (t.proto = a), r()("string" != typeof t.proto, "UserSettingsProto cannot be a string");
            let o = i?.protoToSave ?? null;
            if (null == o || null == i.offlineEditDataVersion) return;
            let l = (0, E.ii)(t.ProtoClass, o);
            null != l && ((t.editInfo.protoToSave = l), (t.editInfo.offlineEditDataVersion = i.offlineEditDataVersion));
        });
}
class C extends o.Ay.PersistedStore {
    static displayName = "UserSettingsProtoStore";
    static persistKey = "UserSettingsProtoStore-Cache";
    initialize(e) {
        N(e);
    }
    getState() {
        return this.computeState();
    }
    computeState() {
        return a().mapValues(g, (e) => {
            let t = { proto: (0, E.ob)(e.ProtoClass, e.proto) };
            return (
                null != e.editInfo.offlineEditDataVersion &&
                    null != e.editInfo.protoToSave &&
                    ((t.protoToSave = (0, E.ob)(e.ProtoClass, e.editInfo.protoToSave)),
                    (t.offlineEditDataVersion = e.editInfo.offlineEditDataVersion)),
                t
            );
        });
    }
    hasLoaded(e) {
        return g[e].editInfo.loaded;
    }
    get settings() {
        return m.proto;
    }
    get frecencyWithoutFetchingLatest() {
        return f.proto;
    }
    get wasMostRecentUpdateFromServer() {
        return p;
    }
    getFullState() {
        return g;
    }
    getGuildFolders() {
        let e = m.proto.guildFolders?.folders;
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
        return null == t ? 0 : _.D.toDate(t).getTime();
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
let R = new C(u.h, {
    CACHE_LOADED: function (e) {
        let { userSettings: t } = e;
        N(t);
    },
    USER_SETTINGS_PROTO_UPDATE: S,
    USER_SETTINGS_PROTO_ENQUEUE_UPDATE: S,
    USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: function (e) {
        let {
            settings: { type: t, changes: n },
        } = e;
        r()(!__OVERLAY__, "this cannot run in the overlay");
        let i = g[t];
        return (i.editInfo = { ...i.editInfo, ...n }), !1;
    },
    CONNECTION_OPEN: function (e) {
        let { userSettingsProto: t } = e;
        null != t && ((m.proto = t), r()("string" != typeof m.proto, "UserSettingsProto cannot be a string"));
        let { proto: n, isDirty: i, cleanupFuncs: s } = (0, E.vI)(m.proto, c.A[h.oD.PRELOADED_USER_SETTINGS]);
        i && T(m),
            (m.proto = n),
            r()("string" != typeof m.proto, "UserSettingsProto cannot be a string"),
            (m.editInfo.triggeredMigrations = i),
            (m.editInfo.cleanupFuncs = s),
            (m.editInfo.loaded = !0),
            Object.values(g).forEach((e) => {
                e.lazyLoaded && ((e.editInfo.loaded = !1), (e.editInfo.loading = !1));
            }),
            I();
    },
    CONNECTION_CLOSED: A,
    CONNECTION_RESUMED: A,
    OVERLAY_INITIALIZE: function (e) {
        let { userSettingsProto: t } = e;
        (m.proto = (0, E.Gd)(t)), r()("string" != typeof m.proto, "UserSettingsProto cannot be a string");
    },
    LOGOUT: function () {
        I(),
            Object.values(g).forEach((e) => {
                (e.proto = e.ProtoClass.create()), (e.editInfo = (0, h.O9)());
            });
    },
});
