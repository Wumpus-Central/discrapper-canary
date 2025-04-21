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
    h = {},
    O = {};
function y(e) {
    let t = !1;
    return (
        e.forEach((e) => {
            t = !1 !== m(e) || t;
        }),
        t
    );
}
function N(e) {
    let t = O[e];
    if (null == t) return !1;
    let n = t.gameId;
    return null != h[n] && ((h = p({}, h)), delete h[n][e], 0 === Object.values(h[n]).length && delete h[n]), (O = p({}, O)), delete O[e], !0;
}
function m(e) {
    let { user: t, activities: n } = e;
    if (null == t) return !1;
    let i = n.filter((e) => e.type !== u.IIU.CUSTOM_STATUS);
    if (0 === i.length) return N(t.id);
    let r = !1;
    return (
        i.forEach((e) => {
            (function (e, t) {
                var n, i;
                let r = (0, s.Z)(e);
                if (null == r) return N(t.id);
                let l = O[t.id];
                null != l && l.gameId !== r && N(t.id);
                let a = null != (i = null == (n = e.timestamps) ? void 0 : n.start) ? i : Date.now(),
                    o = {
                        userId: t.id,
                        activity: e,
                        startedPlaying: a
                    };
                return (
                    (h = f(p({}, h), { [r]: f(p({}, h[r]), { [o.userId]: o }) })),
                    (O = f(p({}, O), {
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
            ((h = {}),
            (O = {}),
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
d(I, 'displayName', 'NowPlayingStore');
let b = new I(l.Z, {
    CONNECTION_OPEN: function () {
        (h = {}), (O = {});
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
        (h = {}), (O = {});
    },
    PRESENCE_UPDATES: function (e) {
        let { updates: t } = e;
        return t.map((e) => m(e)).some((e) => e);
    },
    PRESENCES_REPLACE: function (e) {
        let { presences: t } = e;
        return y(t);
    }
});
