n.d(t, {
    BI: () => y,
    KM: () => _,
    NI: () => g,
    Pb: () => p,
    Rc: () => b,
    Rt: () => h,
    VB: () => E,
}),
    n(388685);
var r = n(820827),
    i = n(319245),
    a = n(258609),
    o = n(102172),
    s = n(430824),
    l = n(496675),
    c = n(979651),
    u = n(937797),
    d = n(254579),
    f = n(324805);
function p(e) {
    if (!(0, u.CD)("QuestUtils") || null == e) return !1;
    let t = (0, d.vj)(e);
    return null != t && t.length > 1;
}
function _(e) {
    return (0, d.Mo)(e) === f.Ts;
}
function m(e, t) {
    return new Set(e.config.features).has(t);
}
function h(e) {
    return ((0, d.Vl)(e) || (0, d.pO)(e)) && e.config.features.includes(f.S7.START_QUEST_CTA);
}
function g(e, t) {
    let n = new Map();
    for (let [r, i] of e)
        if (!(p(i) || m(i, f.S7.NON_GAMING_PLAY_QUEST))) {
            for (let e of (0, d.ge)(i))
                if (t.has(e)) {
                    n.set(r, i);
                    break;
                }
        }
    return n;
}
function E(e) {
    return e.sharePolicy !== r.X.NOT_SHAREABLE;
}
function b(e, t) {
    return null != e && null != t && (0, o.p9)(t, c.Z, s.Z, l.Z, a.default)[0];
}
function y(e) {
    return (0, d.q8)({ config: e }) ? i.W.VIDEO : i.W.GAMEPLAY;
}
