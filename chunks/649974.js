n.d(t, { Z: () => I });
var i,
    r = n(442837),
    l = n(570140),
    o = n(656063),
    s = n(814443),
    a = n(158776),
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
function p(e) {
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
let f = !1,
    N = {},
    h = {};
function y(e) {
    let t = !1;
    return (
        e.forEach((e) => {
            t = !1 !== O(e) || t;
        }),
        t
    );
}
function m(e) {
    let t = h[e];
    if (null == t) return !1;
    let n = t.gameId;
    return null != N[n] && ((N = p({}, N)), delete N[n][e], 0 === Object.values(N[n]).length && delete N[n]), (h = p({}, h)), delete h[e], !0;
}
function O(e) {
    let { user: t, activities: n } = e;
    if (null == t) return !1;
    let i = n.filter((e) => e.type !== u.IIU.CUSTOM_STATUS);
    if (0 === i.length) return m(t.id);
    let r = !1;
    return (
        i.forEach((e) => {
            (function (e, t) {
                var n, i;
                let r = (0, o.Z)(e);
                if (null == r) return m(t.id);
                let l = h[t.id];
                null != l && l.gameId !== r && m(t.id);
                let s = null != (i = null == (n = e.timestamps) ? void 0 : n.start) ? i : Date.now(),
                    a = {
                        userId: t.id,
                        activity: e,
                        startedPlaying: s
                    };
                return (
                    (N = g(p({}, N), { [r]: g(p({}, N[r]), { [a.userId]: a }) })),
                    (h = g(p({}, h), {
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
function S() {
    let e,
        t = !1;
    return (
        s.Z.needsRefresh() ||
            f ||
            ((N = {}),
            (h = {}),
            (e = !1),
            a.Z.getUserIds().forEach((t) => {
                let n = c.default.getUser(t);
                null != n &&
                    (e =
                        O({
                            user: n,
                            activities: a.Z.getActivities(t)
                        }) || e);
            }),
            (t = e)),
        (f = !s.Z.needsRefresh()),
        t
    );
}
class b extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(s.Z), this.syncWith([s.Z], S);
    }
    get games() {
        return N;
    }
    get usersPlaying() {
        return h;
    }
    get gameIds() {
        return Object.keys(N);
    }
    getNowPlaying(e) {
        return N[e];
    }
    getUserGame(e) {
        return h[e];
    }
}
d(b, 'displayName', 'NowPlayingStore');
let I = new b(l.Z, {
    CONNECTION_OPEN: function () {
        (N = {}), (h = {});
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let { guilds: t, presences: n } = e,
            i = !1;
        return (
            t.forEach((e) => {
                y(e.presences) && (i = !0);
            }),
            y(n) && (i = !0),
            i
        );
    },
    LOGOUT: function () {
        (N = {}), (h = {});
    },
    PRESENCE_UPDATES: function (e) {
        let { updates: t } = e;
        return t.map((e) => O(e)).some((e) => e);
    },
    PRESENCES_REPLACE: function (e) {
        let { presences: t } = e;
        return y(t);
    }
});
