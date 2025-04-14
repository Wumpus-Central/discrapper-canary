n.d(t, { Z: () => b });
var i,
    r = n(442837),
    l = n(570140),
    s = n(656063),
    a = n(814443),
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
function f(e, t) {
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
    h = {};
function O(e) {
    let t = !1;
    return (
        e.forEach((e) => {
            t = !1 !== m(e) || t;
        }),
        t
    );
}
function y(e) {
    let t = h[e];
    if (null == t) return !1;
    let n = t.gameId;
    return null != N[n] && ((N = p({}, N)), delete N[n][e], 0 === Object.values(N[n]).length && delete N[n]), (h = p({}, h)), delete h[e], !0;
}
function m(e) {
    let { user: t, activities: n } = e;
    if (null == t) return !1;
    let i = n.filter((e) => e.type !== u.IIU.CUSTOM_STATUS);
    if (0 === i.length) return y(t.id);
    let r = !1;
    return (
        i.forEach((e) => {
            (function (e, t) {
                var n, i;
                let r = (0, s.Z)(e);
                if (null == r) return y(t.id);
                let l = h[t.id];
                null != l && l.gameId !== r && y(t.id);
                let a = null != (i = null == (n = e.timestamps) ? void 0 : n.start) ? i : Date.now(),
                    o = {
                        userId: t.id,
                        activity: e,
                        startedPlaying: a
                    };
                return (
                    (N = f(p({}, N), { [r]: f(p({}, N[r]), { [o.userId]: o }) })),
                    (h = f(p({}, h), {
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
function S() {
    let e,
        t = !1;
    return (
        a.Z.needsRefresh() ||
            g ||
            ((N = {}),
            (h = {}),
            (e = !1),
            o.Z.getUserIds().forEach((t) => {
                let n = c.default.getUser(t);
                null != n &&
                    (e =
                        m({
                            user: n,
                            activities: o.Z.getActivities(t)
                        }) || e);
            }),
            (t = e)),
        (g = !a.Z.needsRefresh()),
        t
    );
}
class I extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(a.Z), this.syncWith([a.Z], S);
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
d(I, 'displayName', 'NowPlayingStore');
let b = new I(l.Z, {
    CONNECTION_OPEN: function () {
        (N = {}), (h = {});
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let { guilds: t, presences: n } = e,
            i = !1;
        return (
            t.forEach((e) => {
                O(e.presences) && (i = !0);
            }),
            O(n) && (i = !0),
            i
        );
    },
    LOGOUT: function () {
        (N = {}), (h = {});
    },
    PRESENCE_UPDATES: function (e) {
        let { updates: t } = e;
        return t.map((e) => m(e)).some((e) => e);
    },
    PRESENCES_REPLACE: function (e) {
        let { presences: t } = e;
        return O(t);
    }
});
