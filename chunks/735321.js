"use strict";
n.d(t, {
    BF: () => T,
    FM: () => h,
    L: () => A,
    R_: () => D,
    Un: () => v,
    XX: () => w,
    Y5: () => N,
    cv: () => p,
    ef: () => b,
    ew: () => y,
    g1: () => U,
    mS: () => f,
    oc: () => L,
    qA: () => C,
    s1: () => O,
    tg: () => R,
    uA: () => M,
    y9: () => I,
});
var i = n(926675),
    r = n(761915),
    a = n(501592),
    s = n(569926),
    l = n(287809),
    o = n(289173);
n(210598);
var d = n(321191),
    c = n(958805),
    u = n(61881),
    _ = n(229231),
    E = n(375708);
function A(e) {
    return _.Ok[e.type](e);
}
function h(e, t) {
    let { showEditingControls: n } = t,
        r = e.games.length > 0;
    if (n && r)
        return 1 === i.u[e.type] ? E.intl.string(E.t.wiXdEa) : E.intl.format(E.t["zR1+0/"], { numGames: i.u[e.type] });
}
function I(e) {
    return _._u.includes(e);
}
function f(e) {
    return _.gk.includes(e);
}
function p(e) {
    return e in i.u ? i.u[e] : 0;
}
function T() {
    let e = l.default.getCurrentUser(),
        t = null != e ? d.A.getUserProfile(e.id) : null;
    return t?.widgets ?? [];
}
function m() {
    return u.A.hasPendingChanges() ? (u.A.getPendingWidgets() ?? []) : T();
}
function g(e) {
    return (
        m()
            .filter(o.fu)
            .find((t) => t.type === e) ?? null
    );
}
function S(e) {
    let t = m(),
        n = t.findIndex((t) => t.getUniqueKey() === e.getUniqueKey());
    if (-1 === n) return [e, ...t];
    {
        let i = [...t];
        return (i[n] = e), i;
    }
}
function N(e) {
    let t = m();
    null == t.find((t) => t.getUniqueKey() === e.getUniqueKey()) && c.A.setPendingWidgets([e, ...t]);
}
function C(e) {
    let t = m().filter((t) => t.getUniqueKey() !== e.getUniqueKey());
    c.A.setPendingWidgets(t);
}
function O(e, t, n) {
    let i = Object.values(r.X).length;
    if (n.length > i) return;
    let a = g(e);
    if (null == a) return;
    let s = a.games.find((e) => e.applicationId === t);
    if (null == s) return;
    let l = { ...s, tags: n },
        d = a.games.map((e) => (e.applicationId === t ? l : e)),
        u = S(new o.Yy({ ...a, games: d }));
    c.A.setPendingWidgets(u);
}
function R(e, t, n) {
    let i = g(e);
    if (null == i) return;
    let r = i.games.find((e) => e.applicationId === t);
    if (null == r || null == r.tags || 0 === r.tags.length) return;
    let a = r.tags.filter((e) => e !== n);
    O(i.type, t, a.length > 0 ? a : []);
}
function L(e, t, n) {
    let i = g(e);
    if (null == i) return;
    let r = i.games.find((e) => e.applicationId === t);
    if (null == r || n === r.comment) return;
    let a = { ...r, comment: n },
        s = i.games.map((e) => (e.applicationId === t ? a : e)),
        l = S(new o.Yy({ ...i, games: s }));
    c.A.setPendingWidgets(l);
}
function y(e) {
    let t,
        { widgetType: n, game: i, ignoreMaxGames: r = !1 } = e,
        a = g(n),
        l = p(n);
    if (null != a) {
        let e = a.games?.length ?? 0;
        if ((!r && e >= l) || (a.games ?? []).some((e) => e.applicationId === i.applicationId)) return;
    }
    let d = { applicationId: i.applicationId, comment: i.comment, tags: i.tags };
    t = null != a ? [d, ...(a.games ?? [])] : [d];
    let u = S(new o.Yy({ ...(a ?? { type: n }), games: t }));
    c.A.setPendingWidgets(u), s.I.fetchMany([i.applicationId]);
}
function D(e, t) {
    if (e === t) return;
    let n = m();
    if (e < 0 || e >= n.length || t < 0 || t >= n.length) return;
    let i = [...n],
        [r] = i.splice(e, 1);
    i.splice(t, 0, r), c.A.setPendingWidgets(i);
}
function v(e, t, n) {
    let i = g(e);
    if (null == i || null == i.games || t === n) return;
    let r = [...i.games];
    if (t < 0 || t >= r.length || n < 0 || n >= r.length) return;
    let [a] = r.splice(t, 1);
    r.splice(n, 0, a);
    let s = S(new o.Yy({ ...i, games: r }));
    c.A.setPendingWidgets(s);
}
function b(e, t) {
    let n = g(e);
    if (null == n) return;
    let i = (null != n.games ? n.games : []).filter((e) => e.applicationId !== t),
        r = S(new o.Yy({ ...n, games: i }));
    c.A.setPendingWidgets(r);
}
function M(e) {
    let t = p(e.type);
    return e.games.length >= t;
}
function P(e) {
    return null == e || "" === e || (Array.isArray(e) && 0 === e.length) ? null : e;
}
function U(e, t, n) {
    return (
        e.length === t.length &&
        e.every((e, i) =>
            (function (e, t, n) {
                if (e.applicationId !== t.applicationId || (I(n) && P(e.comment) !== P(t.comment))) return !1;
                if (f(n)) {
                    let n = P(e.tags),
                        i = P(t.tags);
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
function w(e) {
    return !(0, a.K)(e.contentClassification) && !i.Z.has(e.id);
}
