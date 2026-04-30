"use strict";
n.d(t, { R: () => d });
var i = n(64700),
    r = n(172218),
    s = n(323889),
    a = n(17928),
    o = n(475743),
    l = n(531685),
    u = n(954243),
    c = n(971649);
n(23766);
let d = i.memo(function (e) {
    let t,
        n,
        d,
        { focused: _, focusedChanged: f } =
            ((t = (0, a.bG)([l.A], () => l.A.isFocused())),
            (n = (0, o.A)(t)),
            (d = t !== n),
            { focused: t, focusedChanged: d }),
        {
            visible: h,
            visibleChanged: p,
            reference: E,
        } = ((e) => {
            let [t, n] = i.useState(!1),
                s = e ?? t,
                a = s !== (0, o.A)(s);
            return { visible: s, visibleChanged: a, reference: (0, r.K)((e) => n(e), 0.5) };
        })(e.overrideVisibility),
        { key: m, adContentIds: g } = (0, c.RC)(e),
        A = { ...e, focused: _, focusedChanged: f, visible: h, visibleChanged: p, reference: E };
    return "questOrQuests" in e
        ? (0, i.createElement)(u.xs, { ...A, key: m, adContentIds: g, adCreativeType: s.p.QUEST })
        : (0, i.createElement)(u.xs, { ...A, key: m, adContentIds: g, adCreativeType: e.adCreativeType });
});
