"use strict";
n.d(t, { R: () => u });
var i = n(64700),
    r = n(172218),
    s = n(323889),
    a = n(17928),
    o = n(475743),
    l = n(531685),
    d = n(954243),
    _ = n(971649);
n(23766);
let u = i.memo(function (e) {
    let t,
        n,
        u,
        { focused: c, focusedChanged: E } =
            ((t = (0, a.bG)([l.A], () => l.A.isFocused())),
            (n = (0, o.A)(t)),
            (u = t !== n),
            { focused: t, focusedChanged: u }),
        {
            visible: h,
            visibleChanged: m,
            reference: f,
        } = ((e) => {
            let [t, n] = i.useState(!1),
                s = e ?? t,
                a = s !== (0, o.A)(s);
            return { visible: s, visibleChanged: a, reference: (0, r.K)((e) => n(e), 0.5) };
        })(e.overrideVisibility),
        { key: g, adContentIds: p } = (0, _.RC)(e),
        A = { ...e, focused: c, focusedChanged: E, visible: h, visibleChanged: m, reference: f };
    return "questOrQuests" in e
        ? (0, i.createElement)(d.xs, { ...A, key: g, adContentIds: p, adCreativeType: s.p.QUEST })
        : (0, i.createElement)(d.xs, { ...A, key: g, adContentIds: p, adCreativeType: e.adCreativeType });
});
