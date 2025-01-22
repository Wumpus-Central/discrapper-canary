var i,
    a = r(512722),
    o = r.n(a),
    s = r(392711),
    l = r.n(s),
    u = r(442837),
    c = r(377108),
    d = r(524437),
    f = r(835913),
    p = r(570140),
    h = r(262847),
    _ = r(48481),
    m = r(526761);
function g(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let E = {
        ProtoClass: d.o8,
        proto: d.o8.create(),
        lazyLoaded: !1,
        editInfo: (0, m.JC)()
    },
    v = {
        ProtoClass: c.ji,
        proto: c.ji.create(),
        lazyLoaded: !0,
        editInfo: (0, m.JC)()
    },
    y = {
        [m.yP.PRELOADED_USER_SETTINGS]: E,
        [m.yP.FRECENCY_AND_FAVORITES_SETTINGS]: v
    },
    b = !1;
function I(e) {
    let { userSettingsProto: n } = e;
    null != n && ((E.proto = n), o()('string' != typeof E.proto, 'UserSettingsProto cannot be a string'));
    let { proto: r, isDirty: i, cleanupFuncs: a } = (0, _.xt)(E.proto, h.Z[m.yP.PRELOADED_USER_SETTINGS]);
    i && C(E),
        (E.proto = r),
        o()('string' != typeof E.proto, 'UserSettingsProto cannot be a string'),
        (E.editInfo.triggeredMigrations = i),
        (E.editInfo.cleanupFuncs = a),
        (E.editInfo.loaded = !0),
        Object.values(y).forEach((e) => {
            e.lazyLoaded && ((e.editInfo.loaded = !1), (e.editInfo.loading = !1));
        }),
        A();
}
function T() {
    A();
}
function S() {
    A(),
        Object.values(y).forEach((e) => {
            (e.proto = e.ProtoClass.create()), (e.editInfo = (0, m.JC)());
        });
}
function A() {
    Object.values(y).forEach((e) => {
        if (null != e.editInfo.timeout) {
            var n, r;
            clearTimeout(e.editInfo.timeout), (e.editInfo.timeout = void 0), (e.editInfo.timeoutDelay = Number.MAX_SAFE_INTEGER), (e.editInfo.rateLimited = !1), (e.editInfo.offlineEditDataVersion = null !== (r = null === (n = e.proto.versions) || void 0 === n ? void 0 : n.dataVersion) && void 0 !== r ? r : 0);
        }
    });
}
function C(e) {
    null != e.editInfo.timeout && clearTimeout(e.editInfo.timeout), (e.editInfo = (0, m.JC)());
}
function N(e) {
    let { userSettingsProto: n } = e;
    (E.proto = (0, _.ac)(n)), o()('string' != typeof E.proto, 'UserSettingsProto cannot be a string');
}
function R(e) {
    let {
        settings: { proto: n, type: r },
        partial: i,
        resetEditInfo: a,
        local: s
    } = e;
    b = !s;
    let l = y[r];
    a && C(l), i ? ((l.proto = (0, _.re)(l.ProtoClass, l.proto, n)), o()('string' != typeof l.proto, 'UserSettingsProto cannot be a string')) : ((l.proto = n), o()('string' != typeof l.proto, 'UserSettingsProto cannot be a string'), (l.editInfo.loaded = !0), (l.editInfo.loading = !1));
}
function O(e) {
    let {
        settings: { type: n, changes: r }
    } = e;
    o()(!__OVERLAY__, 'this cannot run in the overlay');
    let i = y[n];
    return (
        (i.editInfo = {
            ...i.editInfo,
            ...r
        }),
        !1
    );
}
function D(e) {
    let { userSettings: n } = e;
    L(n);
}
function L(e) {
    null != e &&
        l().forEach(y, (n, r) => {
            var i, a;
            let s = e[Number(r)];
            if (null == s) return;
            let l = null !== (i = null == s ? void 0 : s.proto) && void 0 !== i ? i : '',
                u = (0, _.d5)(n.ProtoClass, l);
            if (null == u) return;
            (n.proto = u), o()('string' != typeof n.proto, 'UserSettingsProto cannot be a string');
            let c = null !== (a = null == s ? void 0 : s.protoToSave) && void 0 !== a ? a : null;
            if (null == c || null == s.offlineEditDataVersion) return;
            let d = (0, _.d5)(n.ProtoClass, c);
            null != d && ((n.editInfo.protoToSave = d), (n.editInfo.offlineEditDataVersion = s.offlineEditDataVersion));
        });
}
class x extends (i = u.ZP.PersistedStore) {
    initialize(e) {
        L(e);
    }
    getState() {
        return this.computeState();
    }
    computeState() {
        return l().mapValues(y, (e) => {
            let n = { proto: (0, _.xU)(e.ProtoClass, e.proto) };
            return null != e.editInfo.offlineEditDataVersion && null != e.editInfo.protoToSave && ((n.protoToSave = (0, _.xU)(e.ProtoClass, e.editInfo.protoToSave)), (n.offlineEditDataVersion = e.editInfo.offlineEditDataVersion)), n;
        });
    }
    hasLoaded(e) {
        return y[e].editInfo.loaded;
    }
    get settings() {
        return E.proto;
    }
    get frecencyWithoutFetchingLatest() {
        return v.proto;
    }
    get wasMostRecentUpdateFromServer() {
        return b;
    }
    getFullState() {
        return y;
    }
    getGuildFolders() {
        var e;
        let n = null === (e = E.proto.guildFolders) || void 0 === e ? void 0 : e.folders;
        return null == n
            ? null
            : n.map((e) => {
                  var n, r, i;
                  let a = null === (n = e.id) || void 0 === n ? void 0 : n.value,
                      o = null === (r = e.color) || void 0 === r ? void 0 : r.value;
                  return {
                      guildIds: e.guildIds,
                      folderId: null == a ? void 0 : Number(a),
                      folderName: null === (i = e.name) || void 0 === i ? void 0 : i.value,
                      folderColor: null == o ? void 0 : Number(o)
                  };
              });
    }
    getGuildRecentsDismissedAt(e) {
        var n, r;
        if (null == e) return 0;
        let i = null === (r = this.settings.guilds) || void 0 === r ? void 0 : null === (n = r.guilds[e]) || void 0 === n ? void 0 : n.guildRecentsDismissedAt;
        return null == i ? 0 : f.E.toDate(i).getTime();
    }
    getDismissedGuildContent(e) {
        var n, r, i;
        return null == e ? null : null === (i = this.settings.guilds) || void 0 === i ? void 0 : null === (r = i.guilds) || void 0 === r ? void 0 : null === (n = r[e]) || void 0 === n ? void 0 : n.dismissedGuildContent;
    }
    getGuildsProto() {
        var e, n;
        return null !== (n = null === (e = this.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== n ? n : null;
    }
}
g(x, 'displayName', 'UserSettingsProtoStore'),
    g(x, 'persistKey', 'UserSettingsProtoStore-Cache'),
    (n.Z = new x(p.Z, {
        CACHE_LOADED: D,
        USER_SETTINGS_PROTO_UPDATE: R,
        USER_SETTINGS_PROTO_ENQUEUE_UPDATE: R,
        USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: O,
        CONNECTION_OPEN: I,
        CONNECTION_CLOSED: T,
        CONNECTION_RESUMED: T,
        OVERLAY_INITIALIZE: N,
        LOGOUT: S
    }));
