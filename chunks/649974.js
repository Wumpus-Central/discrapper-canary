n.d(t, { Z: () => b });
var i,
    r = n(442837),
    l = n(570140),
    a = n(656063),
    o = n(814443),
    s = n(158776),
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
function g(e) {
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
let f = !1,
    N = {},
    m = {};
function h(e) {
    let t = !1;
    return (
        e.forEach((e) => {
            t = !1 !== O(e) || t;
        }),
        t
    );
}
function y(e) {
    let t = m[e];
    if (null == t) return !1;
    let n = t.gameId;
    return null != N[n] && ((N = g({}, N)), delete N[n][e], 0 === Object.values(N[n]).length && delete N[n]), (m = g({}, m)), delete m[e], !0;
}
function O(e) {
    let { user: t, activities: n } = e;
    if (null == t) return !1;
    let i = n.filter((e) => e.type !== u.IIU.CUSTOM_STATUS);
    if (0 === i.length) return y(t.id);
    let r = !1;
    return (
        i.forEach((e) => {
            (function (e, t) {
                var n, i;
                let r = (0, a.Z)(e);
                if (null == r) return y(t.id);
                let l = m[t.id];
                null != l && l.gameId !== r && y(t.id);
                let o = null != (i = null == (n = e.timestamps) ? void 0 : n.start) ? i : Date.now(),
                    s = {
                        userId: t.id,
                        activity: e,
                        startedPlaying: o
                    };
                return (
                    (N = p(g({}, N), { [r]: p(g({}, N[r]), { [s.userId]: s }) })),
                    (m = p(g({}, m), {
                        [s.userId]: {
                            gameId: r,
                            startedPlaying: s.startedPlaying
                        }
                    })),
                    !0
                );
            })(e, t) && (r = !0);
        }),
        r
    );
}
function v() {
    let e,
        t = !1;
    return (
        o.Z.needsRefresh() ||
            f ||
            ((N = {}),
            (m = {}),
            (e = !1),
            s.Z.getUserIds().forEach((t) => {
                let n = c.default.getUser(t);
                null != n &&
                    (e =
                        O({
                            user: n,
                            activities: s.Z.getActivities(t)
                        }) || e);
            }),
            (t = e)),
        (f = !o.Z.needsRefresh()),
        t
    );
}
class S extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(o.Z), this.syncWith([o.Z], v);
    }
    get games() {
        return N;
    }
    get usersPlaying() {
        return m;
    }
    get gameIds() {
        return Object.keys(N);
    }
    getNowPlaying(e) {
        return N[e];
    }
    getUserGame(e) {
        return m[e];
    }
}
d(S, 'displayName', 'NowPlayingStore');
let b = new S(l.Z, {
    CONNECTION_OPEN: function () {
        (N = {}), (m = {});
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
        (N = {}), (m = {});
    },
    PRESENCE_UPDATES: function (e) {
        let { updates: t } = e;
        return t.map((e) => O(e)).some((e) => e);
    },
    PRESENCES_REPLACE: function (e) {
        let { presences: t } = e;
        return h(t);
    }
});
