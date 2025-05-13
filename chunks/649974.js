n.d(t, { Z: () => v });
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
    E = {},
    O = {};
function N(e) {
    let t = !1;
    return (
        e.forEach((e) => {
            t = !1 !== y(e) || t;
        }),
        t
    );
}
function m(e) {
    let t = O[e];
    if (null == t) return !1;
    let n = t.gameId;
    return null != E[n] && ((E = f({}, E)), delete E[n][e], 0 === Object.values(E[n]).length && delete E[n]), (O = f({}, O)), delete O[e], !0;
}
function y(e) {
    let { user: t, activities: n } = e;
    if (null == t) return !1;
    let i = n.filter((e) => e.type !== u.IIU.CUSTOM_STATUS);
    if (0 === i.length) return m(t.id);
    let r = !1;
    return (
        i.forEach((e) => {
            (function (e, t) {
                var n, i;
                let r = (0, s.Z)(e);
                if (null == r) return m(t.id);
                let l = O[t.id];
                null != l && l.gameId !== r && m(t.id);
                let a = null != (i = null == (n = e.timestamps) ? void 0 : n.start) ? i : Date.now(),
                    o = {
                        userId: t.id,
                        activity: e,
                        startedPlaying: a
                    };
                return (
                    (E = p(f({}, E), { [r]: p(f({}, E[r]), { [o.userId]: o }) })),
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
function S() {
    let e,
        t = !1;
    return (
        a.Z.needsRefresh() ||
            g ||
            ((E = {}),
            (O = {}),
            (e = !1),
            o.Z.getUserIds().forEach((t) => {
                let n = c.default.getUser(t);
                null != n &&
                    (e =
                        y({
                            user: n,
                            activities: o.Z.getActivities(t)
                        }) || e);
            }),
            (t = e)),
        (g = !a.Z.needsRefresh()),
        t
    );
}
class h extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(a.Z), this.syncWith([a.Z], S);
    }
    get games() {
        return E;
    }
    get usersPlaying() {
        return O;
    }
    get gameIds() {
        return Object.keys(E);
    }
    getNowPlaying(e) {
        return E[e];
    }
    getUserGame(e) {
        return O[e];
    }
}
d(h, 'displayName', 'NowPlayingStore');
let v = new h(l.Z, {
    CONNECTION_OPEN: function () {
        (E = {}), (O = {});
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let { guilds: t, presences: n } = e,
            i = !1;
        return (
            t.forEach((e) => {
                N(e.presences) && (i = !0);
            }),
            N(n) && (i = !0),
            i
        );
    },
    LOGOUT: function () {
        (E = {}), (O = {});
    },
    PRESENCE_UPDATES: function (e) {
        let { updates: t } = e;
        return t.map((e) => y(e)).some((e) => e);
    },
    PRESENCES_REPLACE: function (e) {
        let { presences: t } = e;
        return N(t);
    }
});
