n.d(t, { R: () => C, Z: () => k });
var r = n(477900),
    s = n(582128),
    i = n(172218),
    a = n(323889),
    u = n(17928),
    d = n(475743),
    c = n(531685),
    o = n(266569),
    p = n(971649);
n(23766);
let y = s.memo(function (e) {
    let t,
        n,
        r,
        { focused: y, focusedChanged: C } =
            ((t = (0, u.bG)([c.A], () => c.A.isFocused())),
            (n = (0, d.Ay)(t)),
            (r = t !== n),
            { focused: t, focusedChanged: r }),
        {
            visible: k,
            visibleChanged: l,
            reference: f,
        } = (function (e) {
            let [t, n] = s.useState(!1),
                r = e ?? t,
                a = r !== (0, d.Ay)(r);
            return { visible: r, visibleChanged: a, reference: (0, i.K)((e) => n(e), 0.5) };
        })(e.overrideVisibility),
        { key: h, adContentIds: v } = (0, p.RC)(e),
        b = { ...e, focused: y, focusedChanged: C, visible: k, visibleChanged: l, reference: f };
    return "questOrQuests" in e
        ? (0, s.createElement)(o.xs, { ...b, key: h, adContentIds: v, adCreativeType: a.p.QUEST })
        : (0, s.createElement)(o.xs, { ...b, key: h, adContentIds: v, adCreativeType: e.adCreativeType });
});
function C(e) {
    return (0, r.jsx)(y, { ...e });
}
function k(e) {
    return (0, r.jsx)(y, { ...e });
}
