"use strict";
n.d(t, {
    BF: () => g,
    FM: () => f,
    L: () => I,
    R_: () => b,
    Un: () => M,
    XX: () => x,
    Y5: () => O,
    cv: () => m,
    ef: () => P,
    ew: () => v,
    g1: () => G,
    mS: () => T,
    oc: () => y,
    qA: () => R,
    s1: () => L,
    tg: () => D,
    uA: () => U,
    y9: () => p,
});
var i = n(822963),
    r = n(381438),
    a = n(926675),
    s = n(761915),
    l = n(223273),
    o = n(569926),
    d = n(287809),
    c = n(289173),
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
        i = e.games.length > 0;
    if (n && i)
        return 1 === a.u[e.type] ? h.intl.string(h.t.wiXdEa) : h.intl.format(h.t["zR1+0/"], { numGames: a.u[e.type] });
}
function p(e) {
    return A._u.includes(e);
}
function T(e) {
    return A.gk.includes(e);
}
function m(e) {
    return e in a.u ? a.u[e] : 0;
}
function g() {
    let e = d.default.getCurrentUser(),
        t = null != e ? u.A.getUserProfile(e.id) : null;
    return t?.widgets ?? [];
}
function S() {
    return E.A.hasPendingChanges() ? (E.A.getPendingWidgets() ?? []) : g();
}
function N(e) {
    return (
        S()
            .filter(c.fu)
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
function L(e, t, n) {
    let i = Object.values(s.X).length;
    if (n.length > i) return;
    let r = N(e);
    if (null == r) return;
    let a = r.games.find((e) => e.applicationId === t);
    if (null == a) return;
    let l = { ...a, tags: n },
        o = r.games.map((e) => (e.applicationId === t ? l : e)),
        d = C(new c.Yy({ ...r, games: o }));
    _.A.setPendingWidgets(d);
}
function D(e, t, n) {
    let i = N(e);
    if (null == i) return;
    let r = i.games.find((e) => e.applicationId === t);
    if (null == r || null == r.tags || 0 === r.tags.length) return;
    let a = r.tags.filter((e) => e !== n);
    L(i.type, t, a.length > 0 ? a : []);
}
function y(e, t, n) {
    let i = N(e);
    if (null == i) return;
    let r = i.games.find((e) => e.applicationId === t);
    if (null == r || n === r.comment) return;
    let a = { ...r, comment: n },
        s = i.games.map((e) => (e.applicationId === t ? a : e)),
        l = C(new c.Yy({ ...i, games: s }));
    _.A.setPendingWidgets(l);
}
function v(e) {
    let t,
        { widgetType: n, game: i, ignoreMaxGames: r = !1 } = e,
        a = N(n),
        s = m(n);
    if (null != a) {
        let e = a.games?.length ?? 0;
        if ((!r && e >= s) || (a.games ?? []).some((e) => e.applicationId === i.applicationId)) return;
    }
    let l = { applicationId: i.applicationId, comment: i.comment, tags: i.tags };
    t = null != a ? [l, ...(a.games ?? [])] : [l];
    let d = C(new c.Yy({ ...(a ?? { type: n }), games: t }));
    _.A.setPendingWidgets(d), o.I.fetchMany([i.applicationId]);
}
function b(e, t) {
    if (e === t) return;
    let n = S();
    if (e < 0 || e >= n.length || t < 0 || t >= n.length) return;
    let i = [...n],
        [r] = i.splice(e, 1);
    i.splice(t, 0, r), _.A.setPendingWidgets(i);
}
function M(e, t, n) {
    let i = N(e);
    if (null == i || null == i.games || t === n) return;
    let r = [...i.games];
    if (t < 0 || t >= r.length || n < 0 || n >= r.length) return;
    let [a] = r.splice(t, 1);
    r.splice(n, 0, a);
    let s = C(new c.Yy({ ...i, games: r }));
    _.A.setPendingWidgets(s);
}
function P(e, t) {
    let n = N(e);
    if (null == n) return;
    let i = (null != n.games ? n.games : []).filter((e) => e.applicationId !== t),
        r = C(new c.Yy({ ...n, games: i }));
    _.A.setPendingWidgets(r);
}
function U(e) {
    let t = m(e.type);
    return e.games.length >= t;
}
function w(e) {
    return null == e || "" === e || (Array.isArray(e) && 0 === e.length) ? null : e;
}
function G(e, t, n) {
    return (
        e.length === t.length &&
        e.every((e, i) =>
            (function (e, t, n) {
                if (e.applicationId !== t.applicationId || (p(n) && w(e.comment) !== w(t.comment))) return !1;
                if (T(n)) {
                    let n = w(e.tags),
                        i = w(t.tags);
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
function x(e) {
    return (
        !(e?.themes != null && e.themes.includes(l.q0.EROTIC)) &&
        (null == e.content_classification ||
            (0, i.U1)({ type: i.fS.MINIMAL, data: e.content_classification }) !== r.Y.ADULT) &&
        !a.Z.has(e.id)
    );
}
