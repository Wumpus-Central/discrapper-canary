n.d(t, {
    A: () => x,
});
var r,
    i = n(284009),
    a = n.n(i),
    s = n(735438),
    o = n.n(s),
    l = n(311907),
    c = n(803805),
    u = n(873298),
    d = n(335871),
    f = n(73153),
    p = n(405892),
    _ = n(761821),
    h = n(355097);

function m(e, t, n) {
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

function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
let E = {
        ProtoClass: u.nT,
        proto: u.nT.create(),
        lazyLoaded: !1,
        editInfo: (0, h.O9)(),
    },
    b = {
        ProtoClass: c.aw,
        proto: c.aw.create(),
        lazyLoaded: !0,
        editInfo: (0, h.O9)(),
    },
    y = {
        [h.oD.PRELOADED_USER_SETTINGS]: E,
        [h.oD.FRECENCY_AND_FAVORITES_SETTINGS]: b,
    },
    O = !1;

function A(e) {
    let { userSettingsProto: t } = e;
    null != t && ((E.proto = t), a()("string" != typeof E.proto, "UserSettingsProto cannot be a string"));
    let { proto: n, isDirty: r, cleanupFuncs: i } = (0, _.vI)(E.proto, p.A[h.oD.PRELOADED_USER_SETTINGS]);
    r && T(E),
        (E.proto = n),
        a()("string" != typeof E.proto, "UserSettingsProto cannot be a string"),
        (E.editInfo.triggeredMigrations = r),
        (E.editInfo.cleanupFuncs = i),
        (E.editInfo.loaded = !0),
        Object.values(y).forEach((e) => {
            e.lazyLoaded && ((e.editInfo.loaded = !1), (e.editInfo.loading = !1));
        }),
        I();
}

function v() {
    I();
}

function S() {
    I(),
        Object.values(y).forEach((e) => {
            (e.proto = e.ProtoClass.create()), (e.editInfo = (0, h.O9)());
        });
}

function I() {
    Object.values(y).forEach((e) => {
        if (null != e.editInfo.timeout) {
            var t, n;
            clearTimeout(e.editInfo.timeout),
                (e.editInfo.timeout = void 0),
                (e.editInfo.timeoutDelay = Number.MAX_SAFE_INTEGER),
                (e.editInfo.rateLimited = !1),
                (e.editInfo.offlineEditDataVersion =
                    null != (t = null == (n = e.proto.versions) ? void 0 : n.dataVersion) ? t : 0);
        }
    });
}

function T(e) {
    null != e.editInfo.timeout && clearTimeout(e.editInfo.timeout), (e.editInfo = (0, h.O9)());
}

function C(e) {
    let { userSettingsProto: t } = e;
    (E.proto = (0, _.Gd)(t)), a()("string" != typeof E.proto, "UserSettingsProto cannot be a string");
}

function N(e) {
    let {
        settings: { proto: t, type: n },
        partial: r,
        resetEditInfo: i,
        local: s,
    } = e;
    O = !s;
    let o = y[n];
    i && T(o),
        r
            ? ((o.proto = (0, _.RK)(o.ProtoClass, o.proto, t)),
              a()("string" != typeof o.proto, "UserSettingsProto cannot be a string"))
            : ((o.proto = t),
              a()("string" != typeof o.proto, "UserSettingsProto cannot be a string"),
              (o.editInfo.loaded = !0),
              (o.editInfo.loading = !1));
}

function R(e) {
    let {
        settings: { type: t, changes: n },
    } = e;
    a()(!__OVERLAY__, "this cannot run in the overlay");
    let r = y[t];
    return (r.editInfo = g({}, r.editInfo, n)), !1;
}

function w(e) {
    let { userSettings: t } = e;
    P(t);
}

function P(e) {
    null != e &&
        o().forEach(y, (t, n) => {
            var r, i;
            let s = e[Number(n)];
            if (null == s) return;
            let o = null != (r = null == s ? void 0 : s.proto) ? r : "",
                l = (0, _.ii)(t.ProtoClass, o);
            if (null == l) return;
            (t.proto = l), a()("string" != typeof t.proto, "UserSettingsProto cannot be a string");
            let c = null != (i = null == s ? void 0 : s.protoToSave) ? i : null;
            if (null == c || null == s.offlineEditDataVersion) return;
            let u = (0, _.ii)(t.ProtoClass, c);
            null != u && ((t.editInfo.protoToSave = u), (t.editInfo.offlineEditDataVersion = s.offlineEditDataVersion));
        });
}
class D extends (r = l.Ay.PersistedStore) {
    initialize(e) {
        P(e);
    }
    getState() {
        return this.computeState();
    }
    computeState() {
        return o().mapValues(y, (e) => {
            let t = {
                proto: (0, _.ob)(e.ProtoClass, e.proto),
            };
            return (
                null != e.editInfo.offlineEditDataVersion &&
                    null != e.editInfo.protoToSave &&
                    ((t.protoToSave = (0, _.ob)(e.ProtoClass, e.editInfo.protoToSave)),
                    (t.offlineEditDataVersion = e.editInfo.offlineEditDataVersion)),
                t
            );
        });
    }
    hasLoaded(e) {
        return y[e].editInfo.loaded;
    }
    get settings() {
        return E.proto;
    }
    get frecencyWithoutFetchingLatest() {
        return b.proto;
    }
    get wasMostRecentUpdateFromServer() {
        return O;
    }
    getFullState() {
        return y;
    }
    getGuildFolders() {
        var e;
        let t = null == (e = E.proto.guildFolders) ? void 0 : e.folders;
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
        return null == r ? 0 : d.D.toDate(r).getTime();
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
        return null != (e = null == (t = this.settings.guilds) ? void 0 : t.guilds) ? e : null;
    }
}
m(D, "displayName", "UserSettingsProtoStore"), m(D, "persistKey", "UserSettingsProtoStore-Cache");
let x = new D(f.h, {
    CACHE_LOADED: w,
    USER_SETTINGS_PROTO_UPDATE: N,
    USER_SETTINGS_PROTO_ENQUEUE_UPDATE: N,
    USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: R,
    CONNECTION_OPEN: A,
    CONNECTION_CLOSED: v,
    CONNECTION_RESUMED: v,
    OVERLAY_INITIALIZE: C,
    LOGOUT: S,
});
