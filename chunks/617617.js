"use strict";
n.d(t, { A: () => v });
var i = n(284009),
    r = n.n(i),
    s = n(735438),
    a = n.n(s),
    o = n(17928),
    l = n(803805),
    u = n(873298),
    c = n(335871),
    d = n(228366),
    _ = n(350503),
    f = n(405892),
    h = n(761821),
    p = n(355097);
let E = { ProtoClass: u.nT, proto: u.nT.create(), lazyLoaded: !1, editInfo: (0, p.O9)() },
    m = { ProtoClass: l.aw, proto: l.aw.create(), lazyLoaded: !0, editInfo: (0, p.O9)() },
    g = { [p.oD.PRELOADED_USER_SETTINGS]: E, [p.oD.FRECENCY_AND_FAVORITES_SETTINGS]: m },
    A = !1;
function I() {
    T();
}
function T() {
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
function N(e) {
    let {
        settings: { proto: t, type: n },
        partial: i,
        resetEditInfo: s,
        local: a,
    } = e;
    A = !a;
    let o = g[n];
    s && S(o),
        i
            ? ((o.proto = (0, h.RK)(o.ProtoClass, o.proto, t)),
              r()("string" != typeof o.proto, "UserSettingsProto cannot be a string"))
            : ((o.proto = t),
              r()("string" != typeof o.proto, "UserSettingsProto cannot be a string"),
              (o.editInfo.loaded = !0),
              (o.editInfo.loading = !1));
}
function y(e) {
    null != e &&
        a().forEach(g, (t, n) => {
            let i = e[Number(n)];
            if (null == i) return;
            let s = i?.proto ?? "",
                a = (0, h.ii)(t.ProtoClass, s);
            if (null == a) return;
            (t.proto = a), r()("string" != typeof t.proto, "UserSettingsProto cannot be a string");
            let o = i?.protoToSave ?? null;
            if (null == o || null == i.offlineEditDataVersion) return;
            let l = (0, h.ii)(t.ProtoClass, o);
            null != l && ((t.editInfo.protoToSave = l), (t.editInfo.offlineEditDataVersion = i.offlineEditDataVersion));
        });
}
class C extends o.Ay.PersistedStore {
    static displayName = "UserSettingsProtoStore";
    static persistKey = "UserSettingsProtoStore-Cache";
    initialize(e) {
        y(e);
    }
    getState() {
        return this.computeState();
    }
    computeState() {
        return a().mapValues(g, (e) => {
            let t = { proto: (0, h.ob)(e.ProtoClass, e.proto) };
            return (
                null != e.editInfo.offlineEditDataVersion &&
                    null != e.editInfo.protoToSave &&
                    ((t.protoToSave = (0, h.ob)(e.ProtoClass, e.editInfo.protoToSave)),
                    (t.offlineEditDataVersion = e.editInfo.offlineEditDataVersion)),
                t
            );
        });
    }
    hasLoaded(e) {
        return g[e].editInfo.loaded;
    }
    get settings() {
        return E.proto;
    }
    get frecencyWithoutFetchingLatest() {
        return m.proto;
    }
    get wasMostRecentUpdateFromServer() {
        return A;
    }
    getFullState() {
        return g;
    }
    getGuildFolders() {
        let e = E.proto.guildFolders?.folders;
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
        return this.settings.appearance?.defaultGuildThemePreference ?? u.tI.UNSPECIFIED;
    }
    getGuildThemeSourcePreferenceOverride(e) {
        return null == e
            ? u.tI.UNSPECIFIED
            : (this.settings.guilds?.guilds?.[e]?.guildThemeSourcePreference ?? u.tI.UNSPECIFIED);
    }
    resolveGuildThemeSourcePreference(e) {
        return (0, _.p)(this.getGuildThemeSourcePreferenceOverride(e), this.getDefaultGuildThemePreference());
    }
}
let v = new C(d.h, {
    CACHE_LOADED: function (e) {
        let { userSettings: t } = e;
        y(t);
    },
    USER_SETTINGS_PROTO_UPDATE: N,
    USER_SETTINGS_PROTO_ENQUEUE_UPDATE: N,
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
        null != t && ((E.proto = t), r()("string" != typeof E.proto, "UserSettingsProto cannot be a string"));
        let { proto: n, isDirty: i, cleanupFuncs: s } = (0, h.vI)(E.proto, f.A[p.oD.PRELOADED_USER_SETTINGS]);
        i && S(E),
            (E.proto = n),
            r()("string" != typeof E.proto, "UserSettingsProto cannot be a string"),
            (E.editInfo.triggeredMigrations = i),
            (E.editInfo.cleanupFuncs = s),
            (E.editInfo.loaded = !0),
            Object.values(g).forEach((e) => {
                e.lazyLoaded && ((e.editInfo.loaded = !1), (e.editInfo.loading = !1));
            }),
            T();
    },
    CONNECTION_CLOSED: I,
    CONNECTION_RESUMED: I,
    OVERLAY_INITIALIZE: function (e) {
        let { userSettingsProto: t } = e;
        (E.proto = (0, h.Gd)(t)), r()("string" != typeof E.proto, "UserSettingsProto cannot be a string");
    },
    LOGOUT: function () {
        T(),
            Object.values(g).forEach((e) => {
                (e.proto = e.ProtoClass.create()), (e.editInfo = (0, p.O9)());
            });
    },
});
