"use strict";
n.d(t, {
    BF: () => m,
    FM: () => I,
    L: () => h,
    R_: () => b,
    Un: () => M,
    XW: () => R,
    XX: () => x,
    Y5: () => C,
    cv: () => T,
    ef: () => P,
    ew: () => v,
    g1: () => G,
    mS: () => p,
    oc: () => y,
    qA: () => O,
    s1: () => L,
    tg: () => D,
    uA: () => U,
    y9: () => f,
}),
    n(157992);
var i = n(926675),
    r = n(761915),
    a = n(501592),
    s = n(569926),
    l = n(287809),
    o = n(646976),
    d = n(289173);
n(590630);
var c = n(321191),
    u = n(958805),
    _ = n(61881),
    E = n(229231),
    A = n(375708);
function h(e) {
    return E.Ok[e.type](e);
}
function I(e, t) {
    let { showEditingControls: n } = t,
        r = e.games.length > 0;
    if (n && r)
        return 1 === i.u[e.type] ? A.intl.string(A.t.wiXdEa) : A.intl.format(A.t["zR1+0/"], { numGames: i.u[e.type] });
}
function f(e) {
    return E._u.includes(e);
}
function p(e) {
    return E.gk.includes(e);
}
function T(e) {
    return e in i.u ? i.u[e] : 0;
}
function m() {
    let e = l.default.getCurrentUser(),
        t = null != e ? c.A.getUserProfile(e.id) : null;
    return t?.widgets ?? [];
}
function g() {
    return _.A.hasPendingChanges() ? (_.A.getPendingWidgets() ?? []) : m();
}
function S(e) {
    return (
        g()
            .filter(d.fu)
            .find((t) => t.type === e) ?? null
    );
}
function N(e) {
    let t = g(),
        n = t.findIndex((t) => t.getUniqueKey() === e.getUniqueKey());
    if (-1 === n) return [e, ...t];
    {
        let i = [...t];
        return (i[n] = e), i;
    }
}
function C(e) {
    let t = g();
    null == t.find((t) => t.getUniqueKey() === e.getUniqueKey()) && u.A.setPendingWidgets([e, ...t]);
}
function O(e) {
    let t = g().filter((t) => t.getUniqueKey() !== e.getUniqueKey());
    u.A.setPendingWidgets(t);
}
function R(e) {
    let t = g().find((e) => e instanceof o.k) ?? null,
        n = t?.clips ?? [];
    if (n.length >= 4) return;
    let i = new o.k({ id: t?.id, clips: [...n, e] });
    u.A.setPendingWidgets(N(i));
}
function L(e, t, n) {
    let i = Object.values(r.X).length;
    if (n.length > i) return;
    let a = S(e);
    if (null == a) return;
    let s = a.games.find((e) => e.applicationId === t);
    if (null == s) return;
    let l = { ...s, tags: n },
        o = a.games.map((e) => (e.applicationId === t ? l : e)),
        c = N(new d.Yy({ ...a, games: o }));
    u.A.setPendingWidgets(c);
}
function D(e, t, n) {
    let i = S(e);
    if (null == i) return;
    let r = i.games.find((e) => e.applicationId === t);
    if (null == r || null == r.tags || 0 === r.tags.length) return;
    let a = r.tags.filter((e) => e !== n);
    L(i.type, t, a.length > 0 ? a : []);
}
function y(e, t, n) {
    let i = S(e);
    if (null == i) return;
    let r = i.games.find((e) => e.applicationId === t);
    if (null == r || n === r.comment) return;
    let a = { ...r, comment: n },
        s = i.games.map((e) => (e.applicationId === t ? a : e)),
        l = N(new d.Yy({ ...i, games: s }));
    u.A.setPendingWidgets(l);
}
function v(e) {
    let t,
        { widgetType: n, game: i, ignoreMaxGames: r = !1 } = e,
        a = S(n),
        l = T(n);
    if (null != a) {
        let e = a.games?.length ?? 0;
        if ((!r && e >= l) || (a.games ?? []).some((e) => e.applicationId === i.applicationId)) return;
    }
    let o = { applicationId: i.applicationId, comment: i.comment, tags: i.tags };
    t = null != a ? [o, ...(a.games ?? [])] : [o];
    let c = N(new d.Yy({ ...(a ?? { type: n }), games: t }));
    u.A.setPendingWidgets(c), s.I.fetchMany([i.applicationId]);
}
function b(e, t) {
    if (e === t) return;
    let n = g();
    if (e < 0 || e >= n.length || t < 0 || t >= n.length) return;
    let i = [...n],
        [r] = i.splice(e, 1);
    i.splice(t, 0, r), u.A.setPendingWidgets(i);
}
function M(e, t, n) {
    let i = S(e);
    if (null == i || null == i.games || t === n) return;
    let r = [...i.games];
    if (t < 0 || t >= r.length || n < 0 || n >= r.length) return;
    let [a] = r.splice(t, 1);
    r.splice(n, 0, a);
    let s = N(new d.Yy({ ...i, games: r }));
    u.A.setPendingWidgets(s);
}
function P(e, t) {
    let n = S(e);
    if (null == n) return;
    let i = (null != n.games ? n.games : []).filter((e) => e.applicationId !== t),
        r = N(new d.Yy({ ...n, games: i }));
    u.A.setPendingWidgets(r);
}
function U(e) {
    let t = T(e.type);
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
                if (e.applicationId !== t.applicationId || (f(n) && w(e.comment) !== w(t.comment))) return !1;
                if (p(n)) {
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
    return !(0, a.K)(e.contentClassification) && !i.Z.has(e.id);
}
