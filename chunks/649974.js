n.d(t, { Z: () => N });
var i,
    l,
    r,
    a = n(442837),
    s = n(570140),
    o = n(656063),
    c = n(814443),
    d = n(158776),
    u = n(594174),
    h = n(981631);
let m = !1,
    p = {},
    g = {};
function _(e) {
    let t = !1;
    return (
        e.forEach((e) => {
            t = !1 !== E(e) || t;
        }),
        t
    );
}
function f(e) {
    let t = g[e];
    if (null == t) return !1;
    let n = t.gameId;
    return null != p[n] && ((p = { ...p }), delete p[n][e], 0 === Object.values(p[n]).length && delete p[n]), (g = { ...g }), delete g[e], !0;
}
function E(e) {
    let { user: t, activities: n } = e;
    if (null == t) return !1;
    let i = n.filter((e) => e.type !== h.IIU.CUSTOM_STATUS);
    if (0 === i.length) return f(t.id);
    let l = !1;
    return (
        i.forEach((e) => {
            (function (e, t) {
                var n, i;
                let l = (0, o.Z)(e);
                if (null == l) return f(t.id);
                let r = g[t.id];
                null != r && r.gameId !== l && f(t.id);
                let a = null !== (i = null === (n = e.timestamps) || void 0 === n ? void 0 : n.start) && void 0 !== i ? i : Date.now(),
                    s = {
                        userId: t.id,
                        activity: e,
                        startedPlaying: a
                    };
                return (
                    (p = {
                        ...p,
                        [l]: {
                            ...p[l],
                            [s.userId]: s
                        }
                    }),
                    (g = {
                        ...g,
                        [s.userId]: {
                            gameId: l,
                            startedPlaying: s.startedPlaying
                        }
                    }),
                    !0
                );
            })(e, t) && (l = !0);
        }),
        l
    );
}
function I() {
    let e = !1;
    if (!c.Z.needsRefresh() && !m) {
        let t;
        (p = {}),
            (g = {}),
            (t = !1),
            d.Z.getUserIds().forEach((e) => {
                let n = u.default.getUser(e);
                null != n &&
                    (t =
                        E({
                            user: n,
                            activities: d.Z.getActivities(e)
                        }) || t);
            }),
            (e = t);
    }
    return (m = !c.Z.needsRefresh()), e;
}
class C extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(c.Z), this.syncWith([c.Z], I);
    }
    get games() {
        return p;
    }
    get usersPlaying() {
        return g;
    }
    get gameIds() {
        return Object.keys(p);
    }
    getNowPlaying(e) {
        return p[e];
    }
    getUserGame(e) {
        return g[e];
    }
}
(l = 'NowPlayingStore'),
    (i = 'displayName') in C
        ? Object.defineProperty(C, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (C[i] = l);
let N = new C(s.Z, {
    CONNECTION_OPEN: function () {
        (p = {}), (g = {});
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let { guilds: t, presences: n } = e,
            i = !1;
        return (
            t.forEach((e) => {
                _(e.presences) && (i = !0);
            }),
            _(n) && (i = !0),
            i
        );
    },
    LOGOUT: function () {
        (p = {}), (g = {});
    },
    PRESENCE_UPDATES: function (e) {
        let { updates: t } = e;
        return t.map((e) => E(e)).some((e) => e);
    },
    PRESENCES_REPLACE: function (e) {
        let { presences: t } = e;
        return _(t);
    }
});
