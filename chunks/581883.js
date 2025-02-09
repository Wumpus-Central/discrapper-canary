n.d(t, { Z: () => x });
var i,
    r = n(512722),
    a = n.n(r),
    s = n(392711),
    o = n.n(s),
    l = n(442837),
    u = n(377108),
    c = n(524437),
    d = n(835913),
    f = n(570140),
    _ = n(262847),
    p = n(48481),
    h = n(526761);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let g = {
        ProtoClass: c.o8,
        proto: c.o8.create(),
        lazyLoaded: !1,
        editInfo: (0, h.JC)()
    },
    E = {
        ProtoClass: u.ji,
        proto: u.ji.create(),
        lazyLoaded: !0,
        editInfo: (0, h.JC)()
    },
    v = {
        [h.yP.PRELOADED_USER_SETTINGS]: g,
        [h.yP.FRECENCY_AND_FAVORITES_SETTINGS]: E
    },
    y = !1;
function I(e) {
    let { userSettingsProto: t } = e;
    null != t && ((g.proto = t), a()('string' != typeof g.proto, 'UserSettingsProto cannot be a string'));
    let { proto: n, isDirty: i, cleanupFuncs: r } = (0, p.xt)(g.proto, _.Z[h.yP.PRELOADED_USER_SETTINGS]);
    i && A(g),
        (g.proto = n),
        a()('string' != typeof g.proto, 'UserSettingsProto cannot be a string'),
        (g.editInfo.triggeredMigrations = i),
        (g.editInfo.cleanupFuncs = r),
        (g.editInfo.loaded = !0),
        Object.values(v).forEach((e) => {
            e.lazyLoaded && ((e.editInfo.loaded = !1), (e.editInfo.loading = !1));
        }),
        S();
}
function T() {
    S();
}
function b() {
    S(),
        Object.values(v).forEach((e) => {
            (e.proto = e.ProtoClass.create()), (e.editInfo = (0, h.JC)());
        });
}
function S() {
    Object.values(v).forEach((e) => {
        if (null != e.editInfo.timeout) {
            var t, n;
            clearTimeout(e.editInfo.timeout), (e.editInfo.timeout = void 0), (e.editInfo.timeoutDelay = Number.MAX_SAFE_INTEGER), (e.editInfo.rateLimited = !1), (e.editInfo.offlineEditDataVersion = null !== (n = null === (t = e.proto.versions) || void 0 === t ? void 0 : t.dataVersion) && void 0 !== n ? n : 0);
        }
    });
}
function A(e) {
    null != e.editInfo.timeout && clearTimeout(e.editInfo.timeout), (e.editInfo = (0, h.JC)());
}
function N(e) {
    let { userSettingsProto: t } = e;
    (g.proto = (0, p.ac)(t)), a()('string' != typeof g.proto, 'UserSettingsProto cannot be a string');
}
function C(e) {
    let {
        settings: { proto: t, type: n },
        partial: i,
        resetEditInfo: r,
        local: s
    } = e;
    y = !s;
    let o = v[n];
    r && A(o), i ? ((o.proto = (0, p.re)(o.ProtoClass, o.proto, t)), a()('string' != typeof o.proto, 'UserSettingsProto cannot be a string')) : ((o.proto = t), a()('string' != typeof o.proto, 'UserSettingsProto cannot be a string'), (o.editInfo.loaded = !0), (o.editInfo.loading = !1));
}
function R(e) {
    let {
        settings: { type: t, changes: n }
    } = e;
    a()(!__OVERLAY__, 'this cannot run in the overlay');
    let i = v[t];
    return (
        (i.editInfo = {
            ...i.editInfo,
            ...n
        }),
        !1
    );
}
function O(e) {
    let { userSettings: t } = e;
    D(t);
}
function D(e) {
    null != e &&
        o().forEach(v, (t, n) => {
            var i, r;
            let s = e[Number(n)];
            if (null == s) return;
            let o = null !== (i = null == s ? void 0 : s.proto) && void 0 !== i ? i : '',
                l = (0, p.d5)(t.ProtoClass, o);
            if (null == l) return;
            (t.proto = l), a()('string' != typeof t.proto, 'UserSettingsProto cannot be a string');
            let u = null !== (r = null == s ? void 0 : s.protoToSave) && void 0 !== r ? r : null;
            if (null == u || null == s.offlineEditDataVersion) return;
            let c = (0, p.d5)(t.ProtoClass, u);
            null != c && ((t.editInfo.protoToSave = c), (t.editInfo.offlineEditDataVersion = s.offlineEditDataVersion));
        });
}
class L extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        D(e);
    }
    getState() {
        return this.computeState();
    }
    computeState() {
        return o().mapValues(v, (e) => {
            let t = { proto: (0, p.xU)(e.ProtoClass, e.proto) };
            return null != e.editInfo.offlineEditDataVersion && null != e.editInfo.protoToSave && ((t.protoToSave = (0, p.xU)(e.ProtoClass, e.editInfo.protoToSave)), (t.offlineEditDataVersion = e.editInfo.offlineEditDataVersion)), t;
        });
    }
    hasLoaded(e) {
        return v[e].editInfo.loaded;
    }
    get settings() {
        return g.proto;
    }
    get frecencyWithoutFetchingLatest() {
        return E.proto;
    }
    get wasMostRecentUpdateFromServer() {
        return y;
    }
    getFullState() {
        return v;
    }
    getGuildFolders() {
        var e;
        let t = null === (e = g.proto.guildFolders) || void 0 === e ? void 0 : e.folders;
        return null == t
            ? null
            : t.map((e) => {
                  var t, n, i;
                  let r = null === (t = e.id) || void 0 === t ? void 0 : t.value,
                      a = null === (n = e.color) || void 0 === n ? void 0 : n.value;
                  return {
                      guildIds: e.guildIds,
                      folderId: null == r ? void 0 : Number(r),
                      folderName: null === (i = e.name) || void 0 === i ? void 0 : i.value,
                      folderColor: null == a ? void 0 : Number(a)
                  };
              });
    }
    getGuildRecentsDismissedAt(e) {
        var t, n;
        if (null == e) return 0;
        let i = null === (n = this.settings.guilds) || void 0 === n ? void 0 : null === (t = n.guilds[e]) || void 0 === t ? void 0 : t.guildRecentsDismissedAt;
        return null == i ? 0 : d.E.toDate(i).getTime();
    }
    getDismissedGuildContent(e) {
        var t, n, i;
        return null == e ? null : null === (i = this.settings.guilds) || void 0 === i ? void 0 : null === (n = i.guilds) || void 0 === n ? void 0 : null === (t = n[e]) || void 0 === t ? void 0 : t.dismissedGuildContent;
    }
    getGuildsProto() {
        var e, t;
        return null !== (t = null === (e = this.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== t ? t : null;
    }
}
m(L, 'displayName', 'UserSettingsProtoStore'), m(L, 'persistKey', 'UserSettingsProtoStore-Cache');
let x = new L(f.Z, {
    CACHE_LOADED: O,
    USER_SETTINGS_PROTO_UPDATE: C,
    USER_SETTINGS_PROTO_ENQUEUE_UPDATE: C,
    USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: R,
    CONNECTION_OPEN: I,
    CONNECTION_CLOSED: T,
    CONNECTION_RESUMED: T,
    OVERLAY_INITIALIZE: N,
    LOGOUT: b
});
