"use strict";
n.d(t, {
    BF: () => T,
    FM: () => m,
    L: () => E,
    R_: () => L,
    Un: () => w,
    XX: () => U,
    Y5: () => v,
    cv: () => I,
    ef: () => M,
    ew: () => D,
    g1: () => k,
    mS: () => A,
    oc: () => b,
    qA: () => C,
    s1: () => O,
    tg: () => R,
    uA: () => P,
    y9: () => g,
});
var r = n(425927),
    i = n(381438),
    s = n(926675),
    a = n(761915),
    o = n(223273),
    l = n(454908),
    u = n(287809),
    c = n(289173),
    d = n(622543),
    _ = n(958805),
    f = n(61881),
    p = n(229231),
    h = n(985018);
let E = (e) => p.Ok[e.type](e);
function m(e, t) {
    let { isCurrentUser: n } = t,
        r = e.games.length > 0;
    if (n && r)
        return 1 === s.u[e.type] ? h.intl.string(h.t.wiXdEa) : h.intl.format(h.t["zR1+0/"], { numGames: s.u[e.type] });
}
function g(e) {
    return p._u.includes(e);
}
function A(e) {
    return p.gk.includes(e);
}
function I(e) {
    return e in s.u ? s.u[e] : 0;
}
function T() {
    let e = u.default.getCurrentUser(),
        t = null != e ? d.A.getUserProfile(e.id) : null;
    return t?.widgets ?? [];
}
function S() {
    return f.A.hasPendingChanges() ? (f.A.getPendingWidgets() ?? []) : T();
}
function y(e) {
    return (
        S()
            .filter(c.fu)
            .find((t) => t.type === e) ?? null
    );
}
function N(e) {
    let t = S(),
        n = t.findIndex((t) => t.getUniqueKey() === e.getUniqueKey());
    if (-1 === n) return [e, ...t];
    {
        let r = [...t];
        return (r[n] = e), r;
    }
}
function v(e) {
    let t = S();
    null == t.find((t) => t.getUniqueKey() === e.getUniqueKey()) && _.A.setPendingWidgets([e, ...t]);
}
function C(e) {
    let t = S().filter((t) => t.getUniqueKey() !== e.getUniqueKey());
    _.A.setPendingWidgets(t);
}
function O(e, t, n) {
    let r = Object.values(a.X).length;
    if (n.length > r) return;
    let i = y(e);
    if (null == i) return;
    let s = i.games.find((e) => e.applicationId === t);
    if (null == s) return;
    let o = { ...s, tags: n },
        l = i.games.map((e) => (e.applicationId === t ? o : e)),
        u = N(new c.Yy({ ...i, games: l }));
    _.A.setPendingWidgets(u);
}
function R(e, t, n) {
    let r = y(e);
    if (null == r) return;
    let i = r.games.find((e) => e.applicationId === t);
    if (null == i || null == i.tags || 0 === i.tags.length) return;
    let s = i.tags.filter((e) => e !== n);
    O(r.type, t, s.length > 0 ? s : []);
}
function b(e, t, n) {
    let r = y(e);
    if (null == r) return;
    let i = r.games.find((e) => e.applicationId === t);
    if (null == i || n === i.comment) return;
    let s = { ...i, comment: n },
        a = r.games.map((e) => (e.applicationId === t ? s : e)),
        o = N(new c.Yy({ ...r, games: a }));
    _.A.setPendingWidgets(o);
}
function D(e) {
    let t,
        { widgetType: n, game: r, ignoreMaxGames: i = !1 } = e,
        s = y(n),
        a = I(n);
    if (null != s) {
        let e = s.games?.length ?? 0;
        if ((!i && e >= a) || (s.games ?? []).some((e) => e.applicationId === r.applicationId)) return;
    }
    let o = { applicationId: r.applicationId, comment: r.comment, tags: r.tags };
    t = null != s ? [o, ...(s.games ?? [])] : [o];
    let u = N(new c.Yy({ ...(s ?? { type: n }), games: t }));
    _.A.setPendingWidgets(u), l.I.fetchMany([r.applicationId]);
}
function L(e, t) {
    if (e === t) return;
    let n = S();
    if (e < 0 || e >= n.length || t < 0 || t >= n.length) return;
    let r = [...n],
        [i] = r.splice(e, 1);
    r.splice(t, 0, i), _.A.setPendingWidgets(r);
}
function w(e, t, n) {
    let r = y(e);
    if (null == r || null == r.games || t === n) return;
    let i = [...r.games];
    if (t < 0 || t >= i.length || n < 0 || n >= i.length) return;
    let [s] = i.splice(t, 1);
    i.splice(n, 0, s);
    let a = N(new c.Yy({ ...r, games: i }));
    _.A.setPendingWidgets(a);
}
function M(e, t) {
    let n = y(e);
    if (null == n) return;
    let r = (null != n.games ? n.games : []).filter((e) => e.applicationId !== t),
        i = N(new c.Yy({ ...n, games: r }));
    _.A.setPendingWidgets(i);
}
function P(e) {
    let t = I(e.type);
    return e.games.length >= t;
}
function x(e) {
    return null == e || "" === e || (Array.isArray(e) && 0 === e.length) ? null : e;
}
function k(e, t, n) {
    return (
        e.length === t.length &&
        e.every((e, r) =>
            (function (e, t, n) {
                if (e.applicationId !== t.applicationId || (g(n) && x(e.comment) !== x(t.comment))) return !1;
                if (A(n)) {
                    let n = x(e.tags),
                        r = x(t.tags);
                    if (
                        (null === n) != (null === r) ||
                        (null !== n && null !== r && (n.length !== r.length || !n.every((e, t) => e === r[t])))
                    )
                        return !1;
                }
                return !0;
            })(e, t[r], n),
        )
    );
}
function U(e) {
    return (
        !(e?.themes != null && e.themes.includes(o.q0.EROTIC)) &&
        (null == e.content_classification ||
            (0, r.U1)({ type: r.fS.MINIMAL, data: e.content_classification }) !== i.Y.ADULT) &&
        !s.Z.has(e.id)
    );
}
