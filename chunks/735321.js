"use strict";
n.d(t, {
    AD: () => v,
    BF: () => g,
    FM: () => f,
    L: () => I,
    R_: () => w,
    Un: () => G,
    XW: () => D,
    XX: () => B,
    Y5: () => O,
    cv: () => m,
    ef: () => x,
    ew: () => U,
    g1: () => V,
    mC: () => y,
    mS: () => T,
    oc: () => P,
    qA: () => R,
    s1: () => b,
    tg: () => M,
    uA: () => k,
    y9: () => p,
}),
    n(157992);
var i = n(926675),
    r = n(761915),
    a = n(501592),
    s = n(569926),
    l = n(287809),
    o = n(646976),
    d = n(289173),
    c = n(210598),
    u = n(321191),
    _ = n(958805),
    E = n(61881),
    A = n(229231),
    h = n(375708);
function I(e) {
    return A.Ok[e.type](e);
}
function f(e, t) {
    let { showEditingControls: n } = t,
        r = e.games.length > 0;
    if (n && r)
        return 1 === i.u[e.type] ? h.intl.string(h.t.wiXdEa) : h.intl.format(h.t["zR1+0/"], { numGames: i.u[e.type] });
}
function p(e) {
    return A._u.includes(e);
}
function T(e) {
    return A.gk.includes(e);
}
function m(e) {
    return e in i.u ? i.u[e] : 0;
}
function g() {
    let e = l.default.getCurrentUser(),
        t = null != e ? u.A.getUserProfile(e.id) : null;
    return t?.widgets ?? [];
}
function S() {
    return E.A.hasPendingChanges() ? (E.A.getPendingWidgets() ?? []) : g();
}
function N(e) {
    return (
        S()
            .filter(d.fu)
            .find((t) => t.type === e) ?? null
    );
}
function C(e) {
    let t = S(),
        n = t.findIndex((t) => t.getUniqueKey() === e.getUniqueKey());
    if (-1 === n) return [e, ...t];
    {
        let i = [...t];
        return (i[n] = e), i;
    }
}
function O(e) {
    let t = S();
    null == t.find((t) => t.getUniqueKey() === e.getUniqueKey()) && _.A.setPendingWidgets([e, ...t]);
}
function R(e) {
    let t = S().filter((t) => t.getUniqueKey() !== e.getUniqueKey());
    _.A.setPendingWidgets(t);
}
function L() {
    return S().find((e) => e instanceof o.k) ?? null;
}
function D(e) {
    let t = L(),
        n = t?.clips ?? [];
    if (n.length >= 4) return;
    let i = new o.k({ id: t?.id, clips: [...n, e] });
    _.A.setPendingWidgets(C(i));
}
function y(e) {
    let t = L();
    if (null == t) return;
    let n = new o.k({ id: t.id, clips: t.clips.filter((t) => t.id !== e) });
    _.A.setPendingWidgets(C(n));
}
function v(e) {
    let t = C(e(S().find((e) => e instanceof c.Tu) ?? null ?? (0, c.g0)()));
    _.A.setPendingWidgets(t);
}
function b(e, t, n) {
    let i = Object.values(r.X).length;
    if (n.length > i) return;
    let a = N(e);
    if (null == a) return;
    let s = a.games.find((e) => e.gameId === t);
    if (null == s) return;
    let l = { ...s, tags: n },
        o = a.games.map((e) => (e.gameId === t ? l : e)),
        c = C(new d.Yy({ ...a, games: o }));
    _.A.setPendingWidgets(c);
}
function M(e, t, n) {
    let i = N(e);
    if (null == i) return;
    let r = i.games.find((e) => e.gameId === t);
    if (null == r || null == r.tags || 0 === r.tags.length) return;
    let a = r.tags.filter((e) => e !== n);
    b(i.type, t, a.length > 0 ? a : []);
}
function P(e, t, n) {
    let i = N(e);
    if (null == i) return;
    let r = i.games.find((e) => e.gameId === t);
    if (null == r || n === r.comment) return;
    let a = { ...r, comment: n },
        s = i.games.map((e) => (e.gameId === t ? a : e)),
        l = C(new d.Yy({ ...i, games: s }));
    _.A.setPendingWidgets(l);
}
function U(e) {
    let t,
        { widgetType: n, game: i, ignoreMaxGames: r = !1 } = e,
        a = N(n),
        l = m(n);
    if (null != a) {
        let e = a.games?.length ?? 0;
        if ((!r && e >= l) || (a.games ?? []).some((e) => e.gameId === i.gameId)) return;
    }
    let o = { gameId: i.gameId, comment: i.comment, tags: i.tags };
    t = null != a ? [o, ...(a.games ?? [])] : [o];
    let c = C(new d.Yy({ ...(a ?? { type: n }), games: t }));
    _.A.setPendingWidgets(c), s.I.fetchMany([i.gameId]);
}
function w(e, t) {
    if (e === t) return;
    let n = S();
    if (e < 0 || e >= n.length || t < 0 || t >= n.length) return;
    let i = [...n],
        [r] = i.splice(e, 1);
    i.splice(t, 0, r), _.A.setPendingWidgets(i);
}
function G(e, t, n) {
    let i = N(e);
    if (null == i || null == i.games || t === n) return;
    let r = [...i.games];
    if (t < 0 || t >= r.length || n < 0 || n >= r.length) return;
    let [a] = r.splice(t, 1);
    r.splice(n, 0, a);
    let s = C(new d.Yy({ ...i, games: r }));
    _.A.setPendingWidgets(s);
}
function x(e, t) {
    let n = N(e);
    if (null == n) return;
    let i = (null != n.games ? n.games : []).filter((e) => e.gameId !== t),
        r = C(new d.Yy({ ...n, games: i }));
    _.A.setPendingWidgets(r);
}
function k(e) {
    let t = m(e.type);
    return e.games.length >= t;
}
function F(e) {
    return null == e || "" === e || (Array.isArray(e) && 0 === e.length) ? null : e;
}
function V(e, t, n) {
    return (
        e.length === t.length &&
        e.every((e, i) =>
            (function (e, t, n) {
                if (e.gameId !== t.gameId || (p(n) && F(e.comment) !== F(t.comment))) return !1;
                if (T(n)) {
                    let n = F(e.tags),
                        i = F(t.tags);
                    if (
                        (null === n) != (null === i) ||
                        (null !== n && null !== i && (n.length !== i.length || !n.every((e, t) => e === i[t])))
                    )
                        return !1;
                }
                return !0;
            })(e, t[i], n),
        )
    );
}
function B(e) {
    return !(0, a.K)(e.contentClassification) && !i.Z.has(e.id);
}
