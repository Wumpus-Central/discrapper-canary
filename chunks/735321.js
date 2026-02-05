"use strict";
n.d(t, {
    FM: () => h,
    L: () => p,
    R_: () => D,
    Un: () => L,
    XX: () => G,
    Y5: () => v,
    cv: () => A,
    ef: () => w,
    ew: () => O,
    g1: () => k,
    mS: () => E,
    nS: () => U,
    oc: () => R,
    qA: () => C,
    s1: () => b,
    tg: () => N,
    uA: () => x,
    y9: () => g,
    yy: () => m,
});
var r = n(926675),
    i = n(761915),
    a = n(544420),
    s = n(223273),
    o = n(287809),
    l = n(289173),
    u = n(622543),
    c = n(958805),
    d = n(61881),
    _ = n(229231),
    f = n(985018);
let p = (e) => _.Ok[e.type](e);
function h(e, t) {
    let { isCurrentUser: n } = t,
        i = e.games.length > 0;
    if (n && i)
        return 1 === r.u[e.type] ? f.intl.string(f.t.wiXdEa) : f.intl.format(f.t["zR1+0/"], { numGames: r.u[e.type] });
}
function m(e) {
    return e?.widgets?.some(l.fu) === !0;
}
function g(e) {
    return _._u.includes(e);
}
function E(e) {
    return _.gk.includes(e);
}
function A(e) {
    return e in r.u ? r.u[e] : 0;
}
function I() {
    let e = o.default.getCurrentUser(),
        t = null != e ? u.A.getUserProfile(e.id) : null;
    return t?.widgets ?? [];
}
function T() {
    return d.A.hasPendingChanges() ? (d.A.getPendingWidgets() ?? []) : I();
}
function y(e) {
    return (
        T()
            .filter(l.fu)
            .find((t) => t.type === e) ?? null
    );
}
function S(e) {
    let t = T(),
        n = t.findIndex((t) => t.getUniqueKey() === e.getUniqueKey());
    if (-1 === n) return [e, ...t];
    {
        let r = [...t];
        return (r[n] = e), r;
    }
}
function v(e) {
    let t = T();
    null == t.find((t) => t.getUniqueKey() === e.getUniqueKey()) && c.A.setPendingWidgets([e, ...t]);
}
function C(e) {
    let t = T().filter((t) => t.getUniqueKey() !== e.getUniqueKey());
    c.A.setPendingWidgets(t);
}
function b(e, t, n) {
    let r = Object.values(i.X).length;
    if (n.length > r) return;
    let a = y(e);
    if (null == a) return;
    let s = a.games.find((e) => e.applicationId === t);
    if (null == s) return;
    let o = { ...s, tags: n },
        u = a.games.map((e) => (e.applicationId === t ? o : e)),
        d = S(new l.Yy({ ...a, games: u }));
    c.A.setPendingWidgets(d);
}
function N(e, t, n) {
    let r = y(e);
    if (null == r) return;
    let i = r.games.find((e) => e.applicationId === t);
    if (null == i || null == i.tags || 0 === i.tags.length) return;
    let a = i.tags.filter((e) => e !== n);
    b(r.type, t, a.length > 0 ? a : []);
}
function R(e, t, n) {
    let r = y(e);
    if (null == r) return;
    let i = r.games.find((e) => e.applicationId === t);
    if (null == i || n === i.comment) return;
    let a = { ...i, comment: n },
        s = r.games.map((e) => (e.applicationId === t ? a : e)),
        o = S(new l.Yy({ ...r, games: s }));
    c.A.setPendingWidgets(o);
}
function O(e) {
    let t,
        { widgetType: n, game: r, ignoreMaxGames: i = !1 } = e,
        s = y(n),
        o = A(n);
    if (null != s) {
        let e = s.games?.length ?? 0;
        if ((!i && e >= o) || (s.games ?? []).some((e) => e.applicationId === r.applicationId)) return;
    }
    let u = { applicationId: r.applicationId, comment: r.comment, tags: r.tags };
    t = null != s ? [u, ...(s.games ?? [])] : [u];
    let d = S(new l.Yy({ ...(s ?? { type: n }), games: t }));
    c.A.setPendingWidgets(d), a.A.getDetectableGamesSupplemental([r.applicationId]);
}
function D(e, t) {
    if (e === t) return;
    let n = T();
    if (e < 0 || e >= n.length || t < 0 || t >= n.length) return;
    let r = [...n],
        [i] = r.splice(e, 1);
    r.splice(t, 0, i), c.A.setPendingWidgets(r);
}
function L(e, t, n) {
    let r = y(e);
    if (null == r || null == r.games || t === n) return;
    let i = [...r.games];
    if (t < 0 || t >= i.length || n < 0 || n >= i.length) return;
    let [a] = i.splice(t, 1);
    i.splice(n, 0, a);
    let s = S(new l.Yy({ ...r, games: i }));
    c.A.setPendingWidgets(s);
}
function w(e, t) {
    let n = y(e);
    if (null == n) return;
    let r = (null != n.games ? n.games : []).filter((e) => e.applicationId !== t),
        i = S(new l.Yy({ ...n, games: r }));
    c.A.setPendingWidgets(i);
}
function x(e) {
    let t = A(e.type);
    return e.games.length >= t;
}
function P(e) {
    return null == e || "" === e || (Array.isArray(e) && 0 === e.length) ? null : e;
}
function M(e, t, n) {
    if (e.applicationId !== t.applicationId || (g(n) && P(e.comment) !== P(t.comment))) return !1;
    if (E(n)) {
        let n = P(e.tags),
            r = P(t.tags);
        if (
            (null === n) != (null === r) ||
            (null !== n && null !== r && (n.length !== r.length || !n.every((e, t) => e === r[t])))
        )
            return !1;
    }
    return !0;
}
function k(e, t, n) {
    return e.length === t.length && e.every((e, r) => M(e, t[r], n));
}
function U(e) {
    return e?.themes != null && e.themes.includes(s.q0.EROTIC);
}
function G(e) {
    return !U(e) && !r.Z.has(e.id);
}
