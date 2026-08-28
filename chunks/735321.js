"use strict";
n.d(t, {
    AD: () => G,
    BF: () => O,
    FM: () => g,
    L: () => m,
    N5: () => U,
    R_: () => B,
    Un: () => H,
    XW: () => M,
    XX: () => $,
    Y5: () => D,
    cv: () => C,
    ef: () => j,
    ew: () => V,
    g1: () => K,
    mC: () => w,
    mI: () => P,
    mS: () => N,
    oc: () => F,
    qA: () => v,
    s1: () => x,
    tg: () => k,
    uA: () => W,
    y9: () => S,
});
var i = n(926675),
    r = n(761915),
    a = n(540185),
    s = n(554146),
    l = n(501592),
    o = n(826673),
    d = n(569926),
    c = n(287809),
    u = n(646976),
    _ = n(289173),
    E = n(210598),
    A = n(321191),
    h = n(958805),
    I = n(61881),
    f = n(229231),
    p = n(49999);
n(600253);
var T = n(375708);
function m(e) {
    return f.Ok[e.type](e);
}
function g(e, t) {
    let { showEditingControls: n } = t,
        r = e.games.length > 0;
    if (n && r)
        return 1 === i.u[e.type] ? T.intl.string(T.t.wiXdEa) : T.intl.format(T.t["zR1+0/"], { numGames: i.u[e.type] });
}
function S(e) {
    return f._u.includes(e);
}
function N(e) {
    return f.gk.includes(e);
}
function C(e) {
    return e in i.u ? i.u[e] : 0;
}
function O() {
    let e = c.default.getCurrentUser(),
        t = null != e ? A.A.getUserProfile(e.id) : null;
    return t?.widgets ?? [];
}
function R() {
    return I.A.hasPendingChanges() ? (I.A.getPendingWidgets() ?? []) : O();
}
function L(e) {
    return (
        R()
            .filter(_.fu)
            .find((t) => t.type === e) ?? null
    );
}
function y(e) {
    let t = R(),
        n = t.findIndex((t) => t.getUniqueKey() === e.getUniqueKey());
    if (-1 === n) return [e, ...t];
    {
        let i = [...t];
        return (i[n] = e), i;
    }
}
function D(e) {
    let t = R();
    null == t.find((t) => t.getUniqueKey() === e.getUniqueKey()) &&
        (e.type === a.x.PERSONAL &&
            ((0, o.Dr)(s.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK, { dismissAction: p.i.INDIRECT_ACTION }),
            (0, o.Dr)(s.M.USER_PROFILE_PERSONAL_WIDGET_NEW_BADGE, { dismissAction: p.i.INDIRECT_ACTION })),
        h.A.setPendingWidgets([e, ...t]));
}
function v(e) {
    let t = R().filter((t) => t.getUniqueKey() !== e.getUniqueKey());
    h.A.setPendingWidgets(t);
}
function b() {
    return R().find((e) => e instanceof u.k) ?? null;
}
function M(e) {
    let t = b(),
        n = t?.clips ?? [];
    if (n.length >= 4) return;
    let i = new u.k({ id: t?.id, clips: [...n, e] });
    h.A.setPendingWidgets(y(i));
}
function P(e, t) {
    let n = b();
    if (null == n) return;
    let i = t.trim(),
        r = new u.k({ id: n.id, clips: n.clips.map((t) => (t.id === e ? { ...t, title: "" === i ? void 0 : i } : t)) });
    h.A.setPendingWidgets(y(r));
}
function U(e, t) {
    let n = b();
    if (null == n || e === t) return;
    let i = [...n.clips];
    if (e < 0 || e >= i.length || t < 0 || t >= i.length) return;
    let [r] = i.splice(e, 1);
    i.splice(t, 0, r);
    let a = new u.k({ id: n.id, clips: i });
    h.A.setPendingWidgets(y(a));
}
function w(e) {
    let t = b();
    if (null == t) return;
    let n = new u.k({ id: t.id, clips: t.clips.filter((t) => t.id !== e) });
    h.A.setPendingWidgets(y(n));
}
function G(e) {
    let t = y(e(R().find((e) => e instanceof E.Tu) ?? null ?? (0, E.g0)()));
    h.A.setPendingWidgets(t);
}
function x(e, t, n) {
    let i = Object.values(r.X).length;
    if (n.length > i) return;
    let a = L(e);
    if (null == a) return;
    let s = a.games.find((e) => e.gameId === t);
    if (null == s) return;
    let l = { ...s, tags: n },
        o = a.games.map((e) => (e.gameId === t ? l : e)),
        d = y(new _.Yy({ ...a, games: o }));
    h.A.setPendingWidgets(d);
}
function k(e, t, n) {
    let i = L(e);
    if (null == i) return;
    let r = i.games.find((e) => e.gameId === t);
    if (null == r || null == r.tags || 0 === r.tags.length) return;
    let a = r.tags.filter((e) => e !== n);
    x(i.type, t, a.length > 0 ? a : []);
}
function F(e, t, n) {
    let i = L(e);
    if (null == i) return;
    let r = i.games.find((e) => e.gameId === t);
    if (null == r || n === r.comment) return;
    let a = { ...r, comment: n },
        s = i.games.map((e) => (e.gameId === t ? a : e)),
        l = y(new _.Yy({ ...i, games: s }));
    h.A.setPendingWidgets(l);
}
function V(e) {
    let t,
        { widgetType: n, game: i, ignoreMaxGames: r = !1 } = e,
        a = L(n),
        s = C(n);
    if (null != a) {
        let e = a.games?.length ?? 0;
        if ((!r && e >= s) || (a.games ?? []).some((e) => e.gameId === i.gameId)) return;
    }
    let l = { gameId: i.gameId, comment: i.comment, tags: i.tags };
    t = null != a ? [l, ...(a.games ?? [])] : [l];
    let o = y(new _.Yy({ ...(a ?? { type: n }), games: t }));
    h.A.setPendingWidgets(o), d.I.fetchMany([i.gameId]);
}
function B(e, t) {
    if (e === t) return;
    let n = R();
    if (e < 0 || e >= n.length || t < 0 || t >= n.length) return;
    let i = [...n],
        [r] = i.splice(e, 1);
    i.splice(t, 0, r), h.A.setPendingWidgets(i);
}
function H(e, t, n) {
    let i = L(e);
    if (null == i || null == i.games || t === n) return;
    let r = [...i.games];
    if (t < 0 || t >= r.length || n < 0 || n >= r.length) return;
    let [a] = r.splice(t, 1);
    r.splice(n, 0, a);
    let s = y(new _.Yy({ ...i, games: r }));
    h.A.setPendingWidgets(s);
}
function j(e, t) {
    let n = L(e);
    if (null == n) return;
    let i = (null != n.games ? n.games : []).filter((e) => e.gameId !== t),
        r = y(new _.Yy({ ...n, games: i }));
    h.A.setPendingWidgets(r);
}
function W(e) {
    let t = C(e.type);
    return e.games.length >= t;
}
function Y(e) {
    return null == e || "" === e || (Array.isArray(e) && 0 === e.length) ? null : e;
}
function K(e, t, n) {
    return (
        e.length === t.length &&
        e.every((e, i) =>
            (function (e, t, n) {
                if (e.gameId !== t.gameId || (S(n) && Y(e.comment) !== Y(t.comment))) return !1;
                if (N(n)) {
                    let n = Y(e.tags),
                        i = Y(t.tags);
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
function $(e) {
    return !(0, l.K)(e.contentClassification) && !i.Z.has(e.id);
}
