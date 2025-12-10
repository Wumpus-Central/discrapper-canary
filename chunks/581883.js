n.d(t, { Z: () => G });
var r,
    i = n(512722),
    a = n.n(i),
    o = n(392711),
    s = n.n(o),
    l = n(442837),
    c = n(377108),
    u = n(524437),
    d = n(835913),
    f = n(570140),
    p = n(710845),
    _ = n(930133),
    m = n(262847),
    h = n(48481),
    g = n(526761);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
let y = {
        ProtoClass: u.o8,
        proto: u.o8.create(),
        lazyLoaded: !1,
        editInfo: (0, g.JC)(),
    },
    O = {
        ProtoClass: c.ji,
        proto: c.ji.create(),
        lazyLoaded: !0,
        editInfo: (0, g.JC)(),
    },
    v = {
        [g.yP.PRELOADED_USER_SETTINGS]: y,
        [g.yP.FRECENCY_AND_FAVORITES_SETTINGS]: O,
    },
    S = !1,
    I = new p.Z("UserSettingsProtoStore"),
    T = new _.Z("UserSettingsProtoStore");
function C(e) {
    let { userSettingsProto: t } = e;
    null != t && ((y.proto = t), a()("string" != typeof y.proto, "UserSettingsProto cannot be a string"));
    let { proto: n, isDirty: r, cleanupFuncs: i } = (0, h.xt)(y.proto, m.Z[g.yP.PRELOADED_USER_SETTINGS]);
    r && R(y),
        (y.proto = n),
        a()("string" != typeof y.proto, "UserSettingsProto cannot be a string"),
        (y.editInfo.triggeredMigrations = r),
        (y.editInfo.cleanupFuncs = i),
        (y.editInfo.loaded = !0),
        Object.values(v).forEach((e) => {
            e.lazyLoaded && ((e.editInfo.loaded = !1), (e.editInfo.loading = !1));
        }),
        P();
}
function A() {
    P();
}
function N() {
    P(),
        Object.values(v).forEach((e) => {
            (e.proto = e.ProtoClass.create()), (e.editInfo = (0, g.JC)());
        });
}
function P() {
    Object.values(v).forEach((e) => {
        if (null != e.editInfo.timeout) {
            var t, n;
            clearTimeout(e.editInfo.timeout),
                (e.editInfo.timeout = void 0),
                (e.editInfo.timeoutDelay = Number.MAX_SAFE_INTEGER),
                (e.editInfo.rateLimited = !1),
                (e.editInfo.offlineEditDataVersion =
                    null != (n = null == (t = e.proto.versions) ? void 0 : t.dataVersion) ? n : 0);
        }
    });
}
function R(e) {
    null != e.editInfo.timeout && clearTimeout(e.editInfo.timeout), (e.editInfo = (0, g.JC)());
}
function D(e) {
    let { userSettingsProto: t } = e;
    (y.proto = (0, h.ac)(t)), a()("string" != typeof y.proto, "UserSettingsProto cannot be a string");
}
function w(e) {
    let {
        settings: { proto: t, type: n },
        partial: r,
        resetEditInfo: i,
        local: o,
    } = e;
    S = !o;
    let s = v[n];
    i && R(s),
        r
            ? ((s.proto = (0, h.re)(s.ProtoClass, s.proto, t)),
              a()("string" != typeof s.proto, "UserSettingsProto cannot be a string"))
            : ((s.proto = t),
              a()("string" != typeof s.proto, "UserSettingsProto cannot be a string"),
              (s.editInfo.loaded = !0),
              (s.editInfo.loading = !1));
}
function x(e) {
    let {
        settings: { type: t, changes: n },
    } = e;
    a()(!__OVERLAY__, "this cannot run in the overlay");
    let r = v[t];
    return (r.editInfo = b({}, r.editInfo, n)), !1;
}
function L(e) {
    let { userSettings: t } = e;
    j(t);
}
function j(e) {
    null != e &&
        s().forEach(v, (t, n) => {
            let r = Number(n),
                i = e[r];
            null != i &&
                M(t, r, i) &&
                (a()("string" != typeof t.proto, "UserSettingsProto cannot be a string"), k(t, r, i));
        });
}
function M(e, t, n) {
    var r;
    let i = null != (r = null == n ? void 0 : n.proto) ? r : "";
    if ("" === i) return !0;
    let a = T.readParsedProto(t, i);
    if (null != a) return (e.proto = a), !0;
    let o = (0, h.d5)(e.ProtoClass, i);
    return null == o
        ? (I.warn("b64ToProto returned null", {
              type: t,
              b64: i,
          }),
          !1)
        : ((e.proto = o), T.writeParsedProto(t, i, e.proto), !0);
}
function k(e, t, n) {
    var r;
    let i = null != (r = null == n ? void 0 : n.protoToSave) ? r : null,
        a = n.offlineEditDataVersion;
    if (null == i || null == a) return;
    let o = T.readProtoToSave(t, i, a);
    if (null != o) {
        (e.editInfo.protoToSave = o), (e.editInfo.offlineEditDataVersion = a);
        return;
    }
    let s = (0, h.d5)(e.ProtoClass, i);
    if (null == s)
        return void I.warn("b64ToProto returned null for protoToSave", {
            type: t,
            protoToSaveB64: i,
        });
    (e.editInfo.protoToSave = s),
        (e.editInfo.offlineEditDataVersion = a),
        T.writeProtoToSave(t, i, a, e.editInfo.protoToSave);
}
class U extends (r = l.ZP.PersistedStore) {
    initialize(e) {
        j(e);
    }
    getState() {
        return this.computeState();
    }
    computeState() {
        return s().mapValues(v, (e, t) => {
            var n;
            let r = Number(t),
                i = { proto: (0, h.xU)(e.ProtoClass, e.proto) };
            return (
                T.writeParsedProto(r, null != (n = i.proto) ? n : "", e.proto),
                null != e.editInfo.offlineEditDataVersion &&
                    null != e.editInfo.protoToSave &&
                    ((i.protoToSave = (0, h.xU)(e.ProtoClass, e.editInfo.protoToSave)),
                    (i.offlineEditDataVersion = e.editInfo.offlineEditDataVersion),
                    T.writeProtoToSave(r, i.protoToSave, i.offlineEditDataVersion, e.editInfo.protoToSave)),
                i
            );
        });
    }
    hasLoaded(e) {
        return v[e].editInfo.loaded;
    }
    get settings() {
        return y.proto;
    }
    get frecencyWithoutFetchingLatest() {
        return O.proto;
    }
    get wasMostRecentUpdateFromServer() {
        return S;
    }
    getFullState() {
        return v;
    }
    getGuildFolders() {
        var e;
        let t = null == (e = y.proto.guildFolders) ? void 0 : e.folders;
        return null == t
            ? null
            : t.map((e) => {
                  var t, n, r;
                  let i = null == (t = e.id) ? void 0 : t.value,
                      a = null == (n = e.color) ? void 0 : n.value;
                  return {
                      guildIds: e.guildIds,
                      folderId: null == i ? void 0 : Number(i),
                      folderName: null == (r = e.name) ? void 0 : r.value,
                      folderColor: null == a ? void 0 : Number(a),
                  };
              });
    }
    getGuildRecentsDismissedAt(e) {
        var t, n;
        if (null == e) return 0;
        let r = null == (n = this.settings.guilds) || null == (t = n.guilds[e]) ? void 0 : t.guildRecentsDismissedAt;
        return null == r ? 0 : d.E.toDate(r).getTime();
    }
    getDismissedGuildContent(e) {
        var t, n, r;
        return null == e
            ? null
            : null == (r = this.settings.guilds) || null == (n = r.guilds) || null == (t = n[e])
              ? void 0
              : t.dismissedGuildContent;
    }
    getGuildDismissedContentState(e) {
        var t, n, r;
        return null == (r = this.settings.guilds) || null == (n = r.guilds) || null == (t = n[e])
            ? void 0
            : t.guildDismissibleContentStates;
    }
    getGuildsProto() {
        var e, t;
        return null != (t = null == (e = this.settings.guilds) ? void 0 : e.guilds) ? t : null;
    }
}
E(U, "displayName", "UserSettingsProtoStore"), E(U, "persistKey", "UserSettingsProtoStore-Cache");
let G = new U(f.Z, {
    CACHE_LOADED: L,
    USER_SETTINGS_PROTO_UPDATE: w,
    USER_SETTINGS_PROTO_ENQUEUE_UPDATE: w,
    USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: x,
    CONNECTION_OPEN: C,
    CONNECTION_CLOSED: A,
    CONNECTION_RESUMED: A,
    OVERLAY_INITIALIZE: D,
    LOGOUT: N,
});
