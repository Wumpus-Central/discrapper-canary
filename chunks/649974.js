n.d(t, { Z: () => v });
var r,
    i = n(442837),
    l = n(570140),
    o = n(656063),
    a = n(814443),
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
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
let g = !1,
    f = {},
    m = {};
function b(e) {
    let t = !1;
    return (
        e.forEach((e) => {
            t = !1 !== E(e) || t;
        }),
        t
    );
}
function _(e) {
    let t = m[e];
    if (null == t) return !1;
    let n = t.gameId;
    return null != f[n] && ((f = p({}, f)), delete f[n][e], 0 === Object.values(f[n]).length && delete f[n]), (m = p({}, m)), delete m[e], !0;
}
function E(e) {
    let { user: t, activities: n } = e;
    if (null == t) return !1;
    let r = n.filter((e) => e.type !== u.IIU.CUSTOM_STATUS);
    if (0 === r.length) return _(t.id);
    let i = !1;
    return (
        r.forEach((e) => {
            (function (e, t) {
                var n, r;
                let i = (0, o.Z)(e);
                if (null == i) return _(t.id);
                let l = m[t.id];
                null != l && l.gameId !== i && _(t.id);
                let a = null !== (r = null === (n = e.timestamps) || void 0 === n ? void 0 : n.start) && void 0 !== r ? r : Date.now(),
                    s = {
                        userId: t.id,
                        activity: e,
                        startedPlaying: a
                    };
                return (
                    (f = h(p({}, f), { [i]: h(p({}, f[i]), { [s.userId]: s }) })),
                    (m = h(p({}, m), {
                        [s.userId]: {
                            gameId: i,
                            startedPlaying: s.startedPlaying
                        }
                    })),
                    !0
                );
            })(e, t) && (i = !0);
        }),
        i
    );
}
function O() {
    let e = !1;
    if (!a.Z.needsRefresh() && !g) {
        let t;
        (f = {}),
            (m = {}),
            (t = !1),
            s.Z.getUserIds().forEach((e) => {
                let n = c.default.getUser(e);
                null != n &&
                    (t =
                        E({
                            user: n,
                            activities: s.Z.getActivities(e)
                        }) || t);
            }),
            (e = t);
    }
    return (g = !a.Z.needsRefresh()), e;
}
class N extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(a.Z), this.syncWith([a.Z], O);
    }
    get games() {
        return f;
    }
    get usersPlaying() {
        return m;
    }
    get gameIds() {
        return Object.keys(f);
    }
    getNowPlaying(e) {
        return f[e];
    }
    getUserGame(e) {
        return m[e];
    }
}
d(N, 'displayName', 'NowPlayingStore');
let v = new N(l.Z, {
    CONNECTION_OPEN: function () {
        (f = {}), (m = {});
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let { guilds: t, presences: n } = e,
            r = !1;
        return (
            t.forEach((e) => {
                b(e.presences) && (r = !0);
            }),
            b(n) && (r = !0),
            r
        );
    },
    LOGOUT: function () {
        (f = {}), (m = {});
    },
    PRESENCE_UPDATES: function (e) {
        let { updates: t } = e;
        return t.map((e) => E(e)).some((e) => e);
    },
    PRESENCES_REPLACE: function (e) {
        let { presences: t } = e;
        return b(t);
    }
});
