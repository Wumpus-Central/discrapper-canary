n.d(t, { Z: () => _ });
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
    m = {};
function y(e) {
    let t = !1;
    return (
        e.forEach((e) => {
            t = !1 !== N(e) || t;
        }),
        t
    );
}
function O(e) {
    let t = m[e];
    if (null == t) return !1;
    let n = t.gameId;
    return (
        null != h[n] && ((h = p({}, h)), delete h[n][e], 0 === Object.values(h[n]).length && delete h[n]),
        (m = p({}, m)),
        delete m[e],
        !0
    );
}
function N(e) {
    let { user: t, activities: n } = e;
    if (null == t) return !1;
    let i = n.filter((e) => e.type !== u.IIU.CUSTOM_STATUS);
    if (0 === i.length) return O(t.id);
    let r = !1;
    return (
        i.forEach((e) => {
            (function (e, t) {
                var n, i;
                let r = (0, s.Z)(e);
                if (null == r) return O(t.id);
                let l = m[t.id];
                null != l && l.gameId !== r && O(t.id);
                let a = null != (i = null == (n = e.timestamps) ? void 0 : n.start) ? i : Date.now(),
                    o = {
                        userId: t.id,
                        activity: e,
                        startedPlaying: a,
                    };
                return (
                    (h = f(p({}, h), { [r]: f(p({}, h[r]), { [o.userId]: o }) })),
                    (m = f(p({}, m), {
                        [o.userId]: {
                            gameId: r,
                            startedPlaying: o.startedPlaying,
                        },
                    })),
                    !0
                );
            })(e, t) && (r = !0);
        }),
        r
    );
}
function b() {
    let e,
        t = !1;
    return (
        a.Z.shouldFetch() ||
            g ||
            ((h = {}),
            (m = {}),
            (e = !1),
            o.Z.getUserIds().forEach((t) => {
                let n = c.default.getUser(t);
                null != n &&
                    (e =
                        N({
                            user: n,
                            activities: o.Z.getActivities(t),
                        }) || e);
            }),
            (t = e)),
        (g = !a.Z.shouldFetch()),
        t
    );
}
class v extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(a.Z), this.syncWith([a.Z], b);
    }
    get games() {
        return h;
    }
    get usersPlaying() {
        return m;
    }
    get gameIds() {
        return Object.keys(h);
    }
    getNowPlaying(e) {
        return h[e];
    }
    getUserGame(e) {
        return m[e];
    }
}
d(v, "displayName", "NowPlayingStore");
let _ = new v(l.Z, {
    CONNECTION_OPEN: function () {
        (h = {}), (m = {});
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
        (h = {}), (m = {});
    },
    PRESENCE_UPDATES: function (e) {
        let { updates: t } = e;
        return t.map((e) => N(e)).some((e) => e);
    },
    PRESENCES_REPLACE: function (e) {
        let { presences: t } = e;
        return y(t);
    },
});
