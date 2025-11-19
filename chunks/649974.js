n.d(t, { Z: () => y });
var r,
    i = n(442837),
    l = n(570140),
    s = n(656063),
    o = n(752048),
    a = n(158776),
    u = n(594174),
    c = n(981631);
function d(e, t, n) {
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
function p(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let f = !1,
    h = {},
    O = {};
function m(e) {
    let t = !1;
    return (
        e.forEach((e) => {
            t = !1 !== I(e) || t;
        }),
        t
    );
}
function E(e) {
    let t = O[e];
    if (null == t) return !1;
    let n = t.gameId;
    return (
        null != h[n] && ((h = p({}, h)), delete h[n][e], 0 === Object.values(h[n]).length && delete h[n]),
        (O = p({}, O)),
        delete O[e],
        !0
    );
}
function I(e) {
    let { user: t, activities: n } = e;
    if (null == t) return !1;
    let r = n.filter((e) => e.type !== c.IIU.CUSTOM_STATUS);
    if (0 === r.length) return E(t.id);
    let i = !1;
    return (
        r.forEach((e) => {
            (function (e, t) {
                var n, r;
                let i = (0, s.Z)(e);
                if (null == i) return E(t.id);
                let l = O[t.id];
                null != l && l.gameId !== i && E(t.id);
                let o = null != (r = null == (n = e.timestamps) ? void 0 : n.start) ? r : Date.now(),
                    a = {
                        userId: t.id,
                        activity: e,
                        startedPlaying: o,
                    };
                return (
                    (h = g(p({}, h), { [i]: g(p({}, h[i]), { [a.userId]: a }) })),
                    (O = g(p({}, O), {
                        [a.userId]: {
                            gameId: i,
                            startedPlaying: a.startedPlaying,
                        },
                    })),
                    !0
                );
            })(e, t) && (i = !0);
        }),
        i
    );
}
function S() {
    let e,
        t = !1;
    return (
        o.Z.shouldFetch() ||
            f ||
            ((h = {}),
            (O = {}),
            (e = !1),
            a.Z.getUserIds().forEach((t) => {
                let n = u.default.getUser(t);
                null != n &&
                    (e =
                        I({
                            user: n,
                            activities: a.Z.getActivities(t),
                        }) || e);
            }),
            (t = e)),
        (f = !o.Z.shouldFetch()),
        t
    );
}
class N extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(a.Z, o.Z, u.default), this.syncWith([o.Z], S);
    }
    get games() {
        return h;
    }
    get usersPlaying() {
        return O;
    }
    get gameIds() {
        return Object.keys(h);
    }
    getNowPlaying(e) {
        return h[e];
    }
    getUserGame(e) {
        return O[e];
    }
}
d(N, "displayName", "NowPlayingStore");
let y = new N(l.Z, {
    CONNECTION_OPEN: function () {
        (h = {}), (O = {});
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let { guilds: t, presences: n } = e,
            r = !1;
        return (
            t.forEach((e) => {
                m(e.presences) && (r = !0);
            }),
            m(n) && (r = !0),
            r
        );
    },
    LOGOUT: function () {
        (h = {}), (O = {});
    },
    PRESENCE_UPDATES: function (e) {
        let { updates: t } = e;
        return t.map((e) => I(e)).some((e) => e);
    },
    PRESENCES_REPLACE: function (e) {
        let { presences: t } = e;
        return m(t);
    },
});
