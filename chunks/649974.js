n.d(t, { Z: () => b });
var i,
    l = n(442837),
    r = n(570140),
    o = n(656063),
    s = n(814443),
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
    h = {},
    y = {};
function O(e) {
    let t = !1;
    return (
        e.forEach((e) => {
            t = !1 !== v(e) || t;
        }),
        t
    );
}
function N(e) {
    let t = y[e];
    if (null == t) return !1;
    let n = t.gameId;
    return null != h[n] && ((h = f({}, h)), delete h[n][e], 0 === Object.values(h[n]).length && delete h[n]), (y = f({}, y)), delete y[e], !0;
}
function v(e) {
    let { user: t, activities: n } = e;
    if (null == t) return !1;
    let i = n.filter((e) => e.type !== c.IIU.CUSTOM_STATUS);
    if (0 === i.length) return N(t.id);
    let l = !1;
    return (
        i.forEach((e) => {
            (function (e, t) {
                var n, i;
                let l = (0, o.Z)(e);
                if (null == l) return N(t.id);
                let r = y[t.id];
                null != r && r.gameId !== l && N(t.id);
                let s = null != (i = null == (n = e.timestamps) ? void 0 : n.start) ? i : Date.now(),
                    a = {
                        userId: t.id,
                        activity: e,
                        startedPlaying: s
                    };
                return (
                    (h = g(f({}, h), { [l]: g(f({}, h[l]), { [a.userId]: a }) })),
                    (y = g(f({}, y), {
                        [a.userId]: {
                            gameId: l,
                            startedPlaying: a.startedPlaying
                        }
                    })),
                    !0
                );
            })(e, t) && (l = !0);
        }),
        l
    );
}
function m() {
    let e,
        t = !1;
    return (
        s.Z.needsRefresh() ||
            p ||
            ((h = {}),
            (y = {}),
            (e = !1),
            a.Z.getUserIds().forEach((t) => {
                let n = u.default.getUser(t);
                null != n &&
                    (e =
                        v({
                            user: n,
                            activities: a.Z.getActivities(t)
                        }) || e);
            }),
            (t = e)),
        (p = !s.Z.needsRefresh()),
        t
    );
}
class S extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(s.Z), this.syncWith([s.Z], m);
    }
    get games() {
        return h;
    }
    get usersPlaying() {
        return y;
    }
    get gameIds() {
        return Object.keys(h);
    }
    getNowPlaying(e) {
        return h[e];
    }
    getUserGame(e) {
        return y[e];
    }
}
d(S, 'displayName', 'NowPlayingStore');
let b = new S(r.Z, {
    CONNECTION_OPEN: function () {
        (h = {}), (y = {});
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
        (h = {}), (y = {});
    },
    PRESENCE_UPDATES: function (e) {
        let { updates: t } = e;
        return t.map((e) => v(e)).some((e) => e);
    },
    PRESENCES_REPLACE: function (e) {
        let { presences: t } = e;
        return O(t);
    }
});
