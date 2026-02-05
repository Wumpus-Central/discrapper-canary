"use strict";
n.d(t, { A: () => D });
var r = n(284009),
    i = n.n(r),
    a = n(735438),
    s = n.n(a),
    o = n(311907),
    l = n(803805),
    u = n(873298),
    c = n(335871),
    d = n(73153),
    _ = n(405892),
    f = n(761821),
    p = n(355097);
let h = { ProtoClass: u.nT, proto: u.nT.create(), lazyLoaded: !1, editInfo: (0, p.O9)() },
    m = { ProtoClass: l.aw, proto: l.aw.create(), lazyLoaded: !0, editInfo: (0, p.O9)() },
    g = { [p.oD.PRELOADED_USER_SETTINGS]: h, [p.oD.FRECENCY_AND_FAVORITES_SETTINGS]: m },
    E = !1;
function A(e) {
    let { userSettingsProto: t } = e;
    null != t && ((h.proto = t), i()("string" != typeof h.proto, "UserSettingsProto cannot be a string"));
    let { proto: n, isDirty: r, cleanupFuncs: a } = (0, f.vI)(h.proto, _.A[p.oD.PRELOADED_USER_SETTINGS]);
    r && S(h),
        (h.proto = n),
        i()("string" != typeof h.proto, "UserSettingsProto cannot be a string"),
        (h.editInfo.triggeredMigrations = r),
        (h.editInfo.cleanupFuncs = a),
        (h.editInfo.loaded = !0),
        Object.values(g).forEach((e) => {
            e.lazyLoaded && ((e.editInfo.loaded = !1), (e.editInfo.loading = !1));
        }),
        y();
}
function I() {
    y();
}
function T() {
    y(),
        Object.values(g).forEach((e) => {
            (e.proto = e.ProtoClass.create()), (e.editInfo = (0, p.O9)());
        });
}
function y() {
    Object.values(g).forEach((e) => {
        null != e.editInfo.timeout &&
            (clearTimeout(e.editInfo.timeout),
            (e.editInfo.timeout = void 0),
            (e.editInfo.timeoutDelay = Number.MAX_SAFE_INTEGER),
            (e.editInfo.rateLimited = !1),
            (e.editInfo.offlineEditDataVersion = e.proto.versions?.dataVersion ?? 0));
    });
}
function S(e) {
    null != e.editInfo.timeout && clearTimeout(e.editInfo.timeout), (e.editInfo = (0, p.O9)());
}
function v(e) {
    let { userSettingsProto: t } = e;
    (h.proto = (0, f.Gd)(t)), i()("string" != typeof h.proto, "UserSettingsProto cannot be a string");
}
function C(e) {
    let {
        settings: { proto: t, type: n },
        partial: r,
        resetEditInfo: a,
        local: s,
    } = e;
    E = !s;
    let o = g[n];
    a && S(o),
        r
            ? ((o.proto = (0, f.RK)(o.ProtoClass, o.proto, t)),
              i()("string" != typeof o.proto, "UserSettingsProto cannot be a string"))
            : ((o.proto = t),
              i()("string" != typeof o.proto, "UserSettingsProto cannot be a string"),
              (o.editInfo.loaded = !0),
              (o.editInfo.loading = !1));
}
function b(e) {
    let {
        settings: { type: t, changes: n },
    } = e;
    i()(!__OVERLAY__, "this cannot run in the overlay");
    let r = g[t];
    return (r.editInfo = { ...r.editInfo, ...n }), !1;
}
function N(e) {
    let { userSettings: t } = e;
    R(t);
}
function R(e) {
    null != e &&
        s().forEach(g, (t, n) => {
            let r = e[Number(n)];
            if (null == r) return;
            let a = r?.proto ?? "",
                s = (0, f.ii)(t.ProtoClass, a);
            if (null == s) return;
            (t.proto = s), i()("string" != typeof t.proto, "UserSettingsProto cannot be a string");
            let o = r?.protoToSave ?? null;
            if (null == o || null == r.offlineEditDataVersion) return;
            let l = (0, f.ii)(t.ProtoClass, o);
            null != l && ((t.editInfo.protoToSave = l), (t.editInfo.offlineEditDataVersion = r.offlineEditDataVersion));
        });
}
class O extends o.Ay.PersistedStore {
    static displayName = "UserSettingsProtoStore";
    static persistKey = "UserSettingsProtoStore-Cache";
    initialize(e) {
        R(e);
    }
    getState() {
        return this.computeState();
    }
    computeState() {
        return s().mapValues(g, (e) => {
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
        return g[e].editInfo.loaded;
    }
    get settings() {
        return h.proto;
    }
    get frecencyWithoutFetchingLatest() {
        return m.proto;
    }
    get wasMostRecentUpdateFromServer() {
        return E;
    }
    getFullState() {
        return g;
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
let D = new O(d.h, {
    CACHE_LOADED: N,
    USER_SETTINGS_PROTO_UPDATE: C,
    USER_SETTINGS_PROTO_ENQUEUE_UPDATE: C,
    USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: b,
    CONNECTION_OPEN: A,
    CONNECTION_CLOSED: I,
    CONNECTION_RESUMED: I,
    OVERLAY_INITIALIZE: v,
    LOGOUT: T,
});
