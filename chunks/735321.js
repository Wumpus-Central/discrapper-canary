n.d(t, {
    FM: () => b,
    L: () => E,
    R_: () => L,
    Un: () => j,
    XX: () => B,
    Y5: () => N,
    cv: () => v,
    ef: () => M,
    ew: () => x,
    g1: () => V,
    mS: () => A,
    nS: () => F,
    oc: () => D,
    qA: () => R,
    s1: () => w,
    tg: () => P,
    uA: () => k,
    y9: () => O,
    yy: () => y,
}),
    n(896048),
    n(638769);
var r = n(926675),
    i = n(761915),
    a = n(544420),
    s = n(223273),
    o = n(287809),
    l = n(289173),
    c = n(622543),
    u = n(958805),
    d = n(61881),
    f = n(229231),
    p = n(985018);

function _(e, t, n) {
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

function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}

function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = (e) => f.Ok[e.type](e);

function b(e, t) {
    let { isCurrentUser: n } = t,
        i = e.games.length > 0;
    if (n && i)
        return 1 === r.um[e.type]
            ? p.intl.string(p.t.wiXdEa)
            : p.intl.format(p.t["zR1+0/"], {
                  numGames: r.um[e.type],
              });
}

function y(e) {
    var t;
    return (null == e || null == (t = e.widgets) ? void 0 : t.some(l.fu)) === !0;
}

function O(e) {
    return f._u.includes(e);
}

function A(e) {
    return f.gk.includes(e);
}

function v(e) {
    return e in r.um ? r.um[e] : 0;
}

function S() {
    var e;
    let t = o.default.getCurrentUser(),
        n = null != t ? c.A.getUserProfile(t.id) : null;
    return null != (e = null == n ? void 0 : n.widgets) ? e : [];
}

function I() {
    var e;
    return d.A.hasPendingChanges() ? (null != (e = d.A.getPendingWidgets()) ? e : []) : S();
}

function T(e) {
    var t;
    return null !=
        (t = I()
            .filter(l.fu)
            .find((t) => t.type === e))
        ? t
        : null;
}

function C(e) {
    let t = I(),
        n = t.findIndex((t) => t.getUniqueKey() === e.getUniqueKey());
    if (-1 === n) return [e, ...t];
    {
        let r = [...t];
        return (r[n] = e), r;
    }
}

function N(e) {
    let t = I();
    null == t.find((t) => t.getUniqueKey() === e.getUniqueKey()) && u.A.setPendingWidgets([e, ...t]);
}

function R(e) {
    let t = I().filter((t) => t.getUniqueKey() !== e.getUniqueKey());
    u.A.setPendingWidgets(t);
}

function w(e, t, n) {
    let r = Object.values(i.X).length;
    if (n.length > r) return;
    let a = T(e);
    if (null == a) return;
    let s = a.games.find((e) => e.applicationId === t);
    if (null == s) return;
    let o = g(h({}, s), {
            tags: n,
        }),
        c = a.games.map((e) => (e.applicationId === t ? o : e)),
        d = C(
            new l.Yy(
                g(h({}, a), {
                    games: c,
                }),
            ),
        );
    u.A.setPendingWidgets(d);
}

function P(e, t, n) {
    let r = T(e);
    if (null == r) return;
    let i = r.games.find((e) => e.applicationId === t);
    if (null == i || null == i.tags || 0 === i.tags.length) return;
    let a = i.tags.filter((e) => e !== n);
    w(r.type, t, a.length > 0 ? a : []);
}

function D(e, t, n) {
    let r = T(e);
    if (null == r) return;
    let i = r.games.find((e) => e.applicationId === t);
    if (null == i || n === i.comment) return;
    let a = g(h({}, i), {
            comment: n,
        }),
        s = r.games.map((e) => (e.applicationId === t ? a : e)),
        o = C(
            new l.Yy(
                g(h({}, r), {
                    games: s,
                }),
            ),
        );
    u.A.setPendingWidgets(o);
}

function x(e) {
    var t, n, r, i;
    let s,
        { widgetType: o, game: c, ignoreMaxGames: d = !1 } = e,
        f = T(o),
        p = v(o);
    if (null != f) {
        let e = null != (t = null == (r = f.games) ? void 0 : r.length) ? t : 0;
        if ((!d && e >= p) || (null != (n = f.games) ? n : []).some((e) => e.applicationId === c.applicationId)) return;
    }
    let _ = {
        applicationId: c.applicationId,
        comment: c.comment,
        tags: c.tags,
    };
    s = null != f ? [_, ...(null != (i = f.games) ? i : [])] : [_];
    let m = C(
        new l.Yy(
            g(
                h(
                    {},
                    null != f
                        ? f
                        : {
                              type: o,
                          },
                ),
                {
                    games: s,
                },
            ),
        ),
    );
    u.A.setPendingWidgets(m), a.A.getDetectableGamesSupplemental([c.applicationId]);
}

function L(e, t) {
    if (e === t) return;
    let n = I();
    if (e < 0 || e >= n.length || t < 0 || t >= n.length) return;
    let r = [...n],
        [i] = r.splice(e, 1);
    r.splice(t, 0, i), u.A.setPendingWidgets(r);
}

function j(e, t, n) {
    let r = T(e);
    if (null == r || null == r.games || t === n) return;
    let i = [...r.games];
    if (t < 0 || t >= i.length || n < 0 || n >= i.length) return;
    let [a] = i.splice(t, 1);
    i.splice(n, 0, a);
    let s = C(
        new l.Yy(
            g(h({}, r), {
                games: i,
            }),
        ),
    );
    u.A.setPendingWidgets(s);
}

function M(e, t) {
    let n = T(e);
    if (null == n) return;
    let r = (null != n.games ? n.games : []).filter((e) => e.applicationId !== t),
        i = C(
            new l.Yy(
                g(h({}, n), {
                    games: r,
                }),
            ),
        );
    u.A.setPendingWidgets(i);
}

function k(e) {
    let t = v(e.type);
    return e.games.length >= t;
}

function U(e) {
    return null == e || "" === e || (Array.isArray(e) && 0 === e.length) ? null : e;
}

function G(e, t, n) {
    if (e.applicationId !== t.applicationId || (O(n) && U(e.comment) !== U(t.comment))) return !1;
    if (A(n)) {
        let n = U(e.tags),
            r = U(t.tags);
        if (
            (null === n) != (null === r) ||
            (null !== n && null !== r && (n.length !== r.length || !n.every((e, t) => e === r[t])))
        )
            return !1;
    }
    return !0;
}

function V(e, t, n) {
    return e.length === t.length && e.every((e, r) => G(e, t[r], n));
}

function F(e) {
    return (null == e ? void 0 : e.themes) != null && e.themes.includes(s.q0.EROTIC);
}

function B(e) {
    return !F(e) && !r.Zk.has(e.id);
}
