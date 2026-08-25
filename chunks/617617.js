"use strict";
n.d(t, { A: () => O });
var i = n(284009),
    r = n.n(i),
    a = n(435558),
    s = n.n(a),
    l = n(17928),
    o = n(803805),
    d = n(873298),
    c = n(335871),
    u = n(228366),
    _ = n(350503),
    E = n(405892),
    A = n(761821),
    h = n(355097);
let I = { ProtoClass: d.nT, proto: d.nT.create(), lazyLoaded: !1, editInfo: (0, h.O9)() },
    f = { ProtoClass: o.aw, proto: o.aw.create(), lazyLoaded: !0, editInfo: (0, h.O9)() },
    p = { [h.oD.PRELOADED_USER_SETTINGS]: I, [h.oD.FRECENCY_AND_FAVORITES_SETTINGS]: f },
    T = !1;
function m() {
    g();
}
function g() {
    Object.values(p).forEach((e) => {
        null != e.editInfo.timeout &&
            (clearTimeout(e.editInfo.timeout),
            (e.editInfo.timeout = void 0),
            (e.editInfo.timeoutDelay = Number.MAX_SAFE_INTEGER),
            (e.editInfo.rateLimited = !1),
            (e.editInfo.offlineEditDataVersion = e.proto.versions?.dataVersion ?? 0));
    });
}
function S(e) {
    null != e.editInfo.timeout && clearTimeout(e.editInfo.timeout), (e.editInfo = (0, h.O9)());
}
function N(e) {
    let {
        settings: { proto: t, type: n },
        partial: i,
        resetEditInfo: a,
        local: s,
    } = e;
    T = !s;
    let l = p[n];
    a && S(l),
        i
            ? ((l.proto = (0, A.RK)(l.ProtoClass, l.proto, t)),
              r()("string" != typeof l.proto, "UserSettingsProto cannot be a string"))
            : ((l.proto = t),
              r()("string" != typeof l.proto, "UserSettingsProto cannot be a string"),
              (l.editInfo.loaded = !0),
              (l.editInfo.loading = !1));
}
function C(e) {
    null != e &&
        s().forEach(p, (t, n) => {
            let i = e[Number(n)];
            if (null == i) return;
            let a = i?.proto ?? "",
                s = (0, A.ii)(t.ProtoClass, a);
            if (null == s) return;
            (t.proto = s), r()("string" != typeof t.proto, "UserSettingsProto cannot be a string");
            let l = i?.protoToSave ?? null;
            if (null == l || null == i.offlineEditDataVersion) return;
            let o = (0, A.ii)(t.ProtoClass, l);
            null != o && ((t.editInfo.protoToSave = o), (t.editInfo.offlineEditDataVersion = i.offlineEditDataVersion));
        });
}
class R extends l.Ay.PersistedStore {
    static displayName = "UserSettingsProtoStore";
    static persistKey = "UserSettingsProtoStore-Cache";
    initialize(e) {
        C(e);
    }
    getState() {
        return this.computeState();
    }
    computeState() {
        return s().mapValues(p, (e) => {
            let t = { proto: (0, A.ob)(e.ProtoClass, e.proto) };
            return (
                null != e.editInfo.offlineEditDataVersion &&
                    null != e.editInfo.protoToSave &&
                    ((t.protoToSave = (0, A.ob)(e.ProtoClass, e.editInfo.protoToSave)),
                    (t.offlineEditDataVersion = e.editInfo.offlineEditDataVersion)),
                t
            );
        });
    }
    hasLoaded(e) {
        return p[e].editInfo.loaded;
    }
    get settings() {
        return I.proto;
    }
    get frecencyWithoutFetchingLatest() {
        return f.proto;
    }
    get wasMostRecentUpdateFromServer() {
        return T;
    }
    getFullState() {
        return p;
    }
    getGuildFolders() {
        let e = I.proto.guildFolders?.folders;
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
    getDefaultGuildThemePreference() {
        return this.settings.appearance?.defaultGuildThemePreference ?? d.tI.UNSPECIFIED;
    }
    getGuildThemeSourcePreferenceOverride(e) {
        return null == e
            ? d.tI.UNSPECIFIED
            : (this.settings.guilds?.guilds?.[e]?.guildThemeSourcePreference ?? d.tI.UNSPECIFIED);
    }
    resolveGuildThemeSourcePreference(e) {
        return (0, _.p)(this.getGuildThemeSourcePreferenceOverride(e), this.getDefaultGuildThemePreference());
    }
}
let O = new R(u.h, {
    CACHE_LOADED: function (e) {
        let { userSettings: t } = e;
        C(t);
    },
    USER_SETTINGS_PROTO_UPDATE: N,
    USER_SETTINGS_PROTO_ENQUEUE_UPDATE: N,
    USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: function (e) {
        let {
            settings: { type: t, changes: n },
        } = e;
        r()(!__OVERLAY__, "this cannot run in the overlay");
        let i = p[t];
        return (i.editInfo = { ...i.editInfo, ...n }), !1;
    },
    CONNECTION_OPEN: function (e) {
        let { userSettingsProto: t } = e;
        null != t && ((I.proto = t), r()("string" != typeof I.proto, "UserSettingsProto cannot be a string"));
        let { proto: n, isDirty: i, cleanupFuncs: a } = (0, A.vI)(I.proto, E.A[h.oD.PRELOADED_USER_SETTINGS]);
        i && S(I),
            (I.proto = n),
            r()("string" != typeof I.proto, "UserSettingsProto cannot be a string"),
            (I.editInfo.triggeredMigrations = i),
            (I.editInfo.cleanupFuncs = a),
            (I.editInfo.loaded = !0),
            Object.values(p).forEach((e) => {
                e.lazyLoaded && ((e.editInfo.loaded = !1), (e.editInfo.loading = !1));
            }),
            g();
    },
    CONNECTION_CLOSED: m,
    CONNECTION_RESUMED: m,
    OVERLAY_INITIALIZE: function (e) {
        let { userSettingsProto: t } = e;
        (I.proto = (0, A.Gd)(t)), r()("string" != typeof I.proto, "UserSettingsProto cannot be a string");
    },
    LOGOUT: function () {
        g(),
            Object.values(p).forEach((e) => {
                (e.proto = e.ProtoClass.create()), (e.editInfo = (0, h.O9)());
            });
    },
});
