n.d(t, {
    BI: () => b,
    KM: () => p,
    NI: () => h,
    P9: () => y,
    Pb: () => f,
    Rc: () => E,
    Rt: () => m,
    VB: () => g,
}),
    n(388685);
var r = n(820827),
    i = n(319245),
    a = n(258609),
    o = n(102172),
    s = n(430824),
    l = n(496675),
    c = n(979651),
    u = n(254579),
    d = n(324805);
function f(e) {
    if (null == e) return !1;
    let t = (0, u.vj)(e);
    return null != t && t.length > 1;
}
function p(e) {
    return (0, u.Mo)(e) === d.Ts;
}
function _(e, t) {
    return new Set(e.config.features).has(t);
}
function m(e) {
    return ((0, u.Vl)(e) || (0, u.pO)(e)) && e.config.features.includes(d.S7.START_QUEST_CTA);
}
function h(e, t) {
    let n = new Map();
    for (let [r, i] of e)
        if (!(f(i) || _(i, d.S7.NON_GAMING_PLAY_QUEST))) {
            for (let e of (0, u.ge)(i))
                if (t.has(e)) {
                    n.set(r, i);
                    break;
                }
        }
    return n;
}
function g(e) {
    return e.sharePolicy !== r.X.NOT_SHAREABLE;
}
function E(e, t) {
    return null != e && null != t && (0, o.p9)(t, c.Z, s.Z, l.Z, a.default)[0];
}
function b(e) {
    return (0, u.q8)({ config: e }) ? i.W.VIDEO : i.W.GAMEPLAY;
}
function y(e, t) {
    return e.ctaQuests.some((e) => e.questId === t);
}
