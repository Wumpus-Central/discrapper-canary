"use strict";
n.d(t, {
    BF: () => T,
    FM: () => m,
    L: () => E,
    R_: () => L,
    Un: () => w,
    XX: () => F,
    Y5: () => N,
    cv: () => I,
    ef: () => M,
    ew: () => D,
    g1: () => k,
    jg: () => G,
    mS: () => A,
    nS: () => U,
    oc: () => b,
    qA: () => v,
    s1: () => R,
    tg: () => O,
    uA: () => P,
    y9: () => g,
});
var i = n(853811),
    r = n(381438),
    s = n(926675),
    a = n(761915),
    o = n(223273),
    l = n(569926),
    u = n(287809),
    c = n(289173),
    d = n(841595),
    _ = n(958805),
    h = n(61881),
    f = n(229231),
    p = n(375708);
function E(e) {
    return f.Ok[e.type](e);
}
function m(e, t) {
    let { showEditingControls: n } = t,
        i = e.games.length > 0;
    if (n && i)
        return 1 === s.u[e.type] ? p.intl.string(p.t.wiXdEa) : p.intl.format(p.t["zR1+0/"], { numGames: s.u[e.type] });
}
function g(e) {
    return f._u.includes(e);
}
function A(e) {
    return f.gk.includes(e);
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
    return h.A.hasPendingChanges() ? (h.A.getPendingWidgets() ?? []) : T();
}
function y(e) {
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
function N(e) {
    let t = S();
    null == t.find((t) => t.getUniqueKey() === e.getUniqueKey()) && _.A.setPendingWidgets([e, ...t]);
}
function v(e) {
    let t = S().filter((t) => t.getUniqueKey() !== e.getUniqueKey());
    _.A.setPendingWidgets(t);
}
function R(e, t, n) {
    let i = Object.values(a.X).length;
    if (n.length > i) return;
    let r = y(e);
    if (null == r) return;
    let s = r.games.find((e) => e.applicationId === t);
    if (null == s) return;
    let o = { ...s, tags: n },
        l = r.games.map((e) => (e.applicationId === t ? o : e)),
        u = C(new c.Yy({ ...r, games: l }));
    _.A.setPendingWidgets(u);
}
function O(e, t, n) {
    let i = y(e);
    if (null == i) return;
    let r = i.games.find((e) => e.applicationId === t);
    if (null == r || null == r.tags || 0 === r.tags.length) return;
    let s = r.tags.filter((e) => e !== n);
    R(i.type, t, s.length > 0 ? s : []);
}
function b(e, t, n) {
    let i = y(e);
    if (null == i) return;
    let r = i.games.find((e) => e.applicationId === t);
    if (null == r || n === r.comment) return;
    let s = { ...r, comment: n },
        a = i.games.map((e) => (e.applicationId === t ? s : e)),
        o = C(new c.Yy({ ...i, games: a }));
    _.A.setPendingWidgets(o);
}
function D(e) {
    let t,
        { widgetType: n, game: i, ignoreMaxGames: r = !1 } = e,
        s = y(n),
        a = I(n);
    if (null != s) {
        let e = s.games?.length ?? 0;
        if ((!r && e >= a) || (s.games ?? []).some((e) => e.applicationId === i.applicationId)) return;
    }
    let o = { applicationId: i.applicationId, comment: i.comment, tags: i.tags };
    t = null != s ? [o, ...(s.games ?? [])] : [o];
    let u = C(new c.Yy({ ...(s ?? { type: n }), games: t }));
    _.A.setPendingWidgets(u), l.I.fetchMany([i.applicationId]);
}
function L(e, t) {
    if (e === t) return;
    let n = S();
    if (e < 0 || e >= n.length || t < 0 || t >= n.length) return;
    let i = [...n],
        [r] = i.splice(e, 1);
    i.splice(t, 0, r), _.A.setPendingWidgets(i);
}
function w(e, t, n) {
    let i = y(e);
    if (null == i || null == i.games || t === n) return;
    let r = [...i.games];
    if (t < 0 || t >= r.length || n < 0 || n >= r.length) return;
    let [s] = r.splice(t, 1);
    r.splice(n, 0, s);
    let a = C(new c.Yy({ ...i, games: r }));
    _.A.setPendingWidgets(a);
}
function M(e, t) {
    let n = y(e);
    if (null == n) return;
    let i = (null != n.games ? n.games : []).filter((e) => e.applicationId !== t),
        r = C(new c.Yy({ ...n, games: i }));
    _.A.setPendingWidgets(r);
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
        e.every((e, i) =>
            (function (e, t, n) {
                if (e.applicationId !== t.applicationId || (g(n) && x(e.comment) !== x(t.comment))) return !1;
                if (A(n)) {
                    let n = x(e.tags),
                        i = x(t.tags);
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
function U(e) {
    return e?.themes != null && e.themes.includes(o.q0.EROTIC);
}
function G(e) {
    return (
        null != e.content_classification &&
        (0, i.U1)({ type: i.fS.MINIMAL, data: e.content_classification }) === r.Y.ADULT
    );
}
function F(e) {
    return !U(e) && !G(e) && !s.Z.has(e.id);
}
