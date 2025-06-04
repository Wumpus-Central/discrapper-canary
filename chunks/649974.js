n.d(t, { Z: () => I });
var i,
    r = n(442837),
    l = n(570140),
    s = n(656063),
    a = n(752048),
    o = n(158776),
    c = n(594174),
    u = n(981631);
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
function p(e, t) {
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
let g = !1,
    N = {},
    O = {};
function h(e) {
    let t = !1;
    return (
        e.forEach((e) => {
            t = !1 !== S(e) || t;
        }),
        t
    );
}
function E(e) {
    let t = O[e];
    if (null == t) return !1;
    let n = t.gameId;
    return null != N[n] && ((N = f({}, N)), delete N[n][e], 0 === Object.values(N[n]).length && delete N[n]), (O = f({}, O)), delete O[e], !0;
}
function S(e) {
    let { user: t, activities: n } = e;
    if (null == t) return !1;
    let i = n.filter((e) => e.type !== u.IIU.CUSTOM_STATUS);
    if (0 === i.length) return E(t.id);
    let r = !1;
    return (
        i.forEach((e) => {
            (function (e, t) {
                var n, i;
                let r = (0, s.Z)(e);
                if (null == r) return E(t.id);
                let l = O[t.id];
                null != l && l.gameId !== r && E(t.id);
                let a = null != (i = null == (n = e.timestamps) ? void 0 : n.start) ? i : Date.now(),
                    o = {
                        userId: t.id,
                        activity: e,
                        startedPlaying: a
                    };
                return (
                    (N = p(f({}, N), { [r]: p(f({}, N[r]), { [o.userId]: o }) })),
                    (O = p(f({}, O), {
                        [o.userId]: {
                            gameId: r,
                            startedPlaying: o.startedPlaying
                        }
                    })),
                    !0
                );
            })(e, t) && (r = !0);
        }),
        r
    );
}
function y() {
    let e,
        t = !1;
    return (
        a.Z.shouldFetch() ||
            g ||
            ((N = {}),
            (O = {}),
            (e = !1),
            o.Z.getUserIds().forEach((t) => {
                let n = c.default.getUser(t);
                null != n &&
                    (e =
                        S({
                            user: n,
                            activities: o.Z.getActivities(t)
                        }) || e);
            }),
            (t = e)),
        (g = !a.Z.shouldFetch()),
        t
    );
}
class m extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(a.Z), this.syncWith([a.Z], y);
    }
    get games() {
        return N;
    }
    get usersPlaying() {
        return O;
    }
    get gameIds() {
        return Object.keys(N);
    }
    getNowPlaying(e) {
        return N[e];
    }
    getUserGame(e) {
        return O[e];
    }
}
d(m, 'displayName', 'NowPlayingStore');
let I = new m(l.Z, {
    CONNECTION_OPEN: function () {
        (N = {}), (O = {});
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
        (N = {}), (O = {});
    },
    PRESENCE_UPDATES: function (e) {
        let { updates: t } = e;
        return t.map((e) => S(e)).some((e) => e);
    },
    PRESENCES_REPLACE: function (e) {
        let { presences: t } = e;
        return h(t);
    }
});
