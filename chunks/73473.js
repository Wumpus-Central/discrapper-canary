"use strict";
n.d(t, { R: () => E, Z: () => A });
var i = n(477900),
    r = n(582128),
    a = n(172218),
    s = n(323889),
    l = n(17928),
    o = n(475743),
    d = n(531685),
    c = n(266569),
    u = n(971649);
n(23766);
let _ = r.memo(function (e) {
    let t,
        n,
        i,
        { focused: _, focusedChanged: E } =
            ((t = (0, l.bG)([d.A], () => d.A.isFocused())),
            (n = (0, o.A)(t)),
            (i = t !== n),
            { focused: t, focusedChanged: i }),
        {
            visible: A,
            visibleChanged: h,
            reference: I,
        } = (function (e) {
            let [t, n] = r.useState(!1),
                i = e ?? t,
                s = i !== (0, o.A)(i);
            return { visible: i, visibleChanged: s, reference: (0, a.K)((e) => n(e), 0.5) };
        })(e.overrideVisibility),
        { key: f, adContentIds: p } = (0, u.RC)(e),
        T = { ...e, focused: _, focusedChanged: E, visible: A, visibleChanged: h, reference: I };
    return "questOrQuests" in e
        ? (0, r.createElement)(c.xs, { ...T, key: f, adContentIds: p, adCreativeType: s.p.QUEST })
        : (0, r.createElement)(c.xs, { ...T, key: f, adContentIds: p, adCreativeType: e.adCreativeType });
});
function E(e) {
    return (0, i.jsx)(_, { ...e });
}
function A(e) {
    return (0, i.jsx)(_, { ...e });
}
