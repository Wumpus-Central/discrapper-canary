n.d(t, { Z: () => b });
var i,
    r = n(442837),
    l = n(570140),
    s = n(656063),
    o = n(814443),
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
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
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let p = !1,
    O = {},
    y = {};
function h(e) {
    let t = !1;
    return (
        e.forEach((e) => {
            t = !1 !== m(e) || t;
        }),
        t
    );
}
function v(e) {
    let t = y[e];
    if (null == t) return !1;
    let n = t.gameId;
    return null != O[n] && ((O = f({}, O)), delete O[n][e], 0 === Object.values(O[n]).length && delete O[n]), (y = f({}, y)), delete y[e], !0;
}
function m(e) {
    let { user: t, activities: n } = e;
    if (null == t) return !1;
    let i = n.filter((e) => e.type !== c.IIU.CUSTOM_STATUS);
    if (0 === i.length) return v(t.id);
    let r = !1;
    return (
        i.forEach((e) => {
            (function (e, t) {
                var n, i;
                let r = (0, s.Z)(e);
                if (null == r) return v(t.id);
                let l = y[t.id];
                null != l && l.gameId !== r && v(t.id);
                let o = null != (i = null == (n = e.timestamps) ? void 0 : n.start) ? i : Date.now(),
                    a = {
                        userId: t.id,
                        activity: e,
                        startedPlaying: o
                    };
                return (
                    (O = g(f({}, O), { [r]: g(f({}, O[r]), { [a.userId]: a }) })),
                    (y = g(f({}, y), {
                        [a.userId]: {
                            gameId: r,
                            startedPlaying: a.startedPlaying
                        }
                    })),
                    !0
                );
            })(e, t) && (r = !0);
        }),
        r
    );
}
function N() {
    let e,
        t = !1;
    return (
        o.Z.needsRefresh() ||
            p ||
            ((O = {}),
            (y = {}),
            (e = !1),
            a.Z.getUserIds().forEach((t) => {
                let n = u.default.getUser(t);
                null != n &&
                    (e =
                        m({
                            user: n,
                            activities: a.Z.getActivities(t)
                        }) || e);
            }),
            (t = e)),
        (p = !o.Z.needsRefresh()),
        t
    );
}
class S extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(o.Z), this.syncWith([o.Z], N);
    }
    get games() {
        return O;
    }
    get usersPlaying() {
        return y;
    }
    get gameIds() {
        return Object.keys(O);
    }
    getNowPlaying(e) {
        return O[e];
    }
    getUserGame(e) {
        return y[e];
    }
}
d(S, 'displayName', 'NowPlayingStore');
let b = new S(l.Z, {
    CONNECTION_OPEN: function () {
        (O = {}), (y = {});
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let { guilds: t, presences: n } = e,
            i = !1;
        return (
            t.forEach((e) => {
                h(e.presences) && (i = !0);
            }),
            h(n) && (i = !0),
            i
        );
    },
    LOGOUT: function () {
        (O = {}), (y = {});
    },
    PRESENCE_UPDATES: function (e) {
        let { updates: t } = e;
        return t.map((e) => m(e)).some((e) => e);
    },
    PRESENCES_REPLACE: function (e) {
        let { presences: t } = e;
        return h(t);
    }
});
