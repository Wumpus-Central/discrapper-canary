"use strict";
n.d(t, { R: () => d });
var r = n(64700),
    i = n(172218),
    s = n(323889),
    a = n(311907),
    o = n(475743),
    l = n(531685),
    u = n(266569),
    c = n(971649);
n(23766);
let d = r.memo(function (e) {
    let t,
        n,
        d,
        { focused: _, focusedChanged: f } =
            ((t = (0, a.bG)([l.A], () => l.A.isFocused())),
            (n = (0, o.A)(t)),
            (d = t !== n),
            { focused: t, focusedChanged: d }),
        {
            visible: p,
            visibleChanged: h,
            reference: E,
        } = ((e) => {
            let [t, n] = r.useState(!1),
                s = e ?? t,
                a = s !== (0, o.A)(s);
            return { visible: s, visibleChanged: a, reference: (0, i.K)((e) => n(e), 0.5) };
        })(e.overrideVisibility),
        { key: m, adContentIds: g } = (0, c.RC)(e),
        A = { ...e, focused: _, focusedChanged: f, visible: p, visibleChanged: h, reference: E };
    return "questOrQuests" in e
        ? (0, r.createElement)(u.xs, { ...A, key: m, adContentIds: g, adCreativeType: s.p.QUEST })
        : (0, r.createElement)(u.xs, { ...A, key: m, adContentIds: g, adCreativeType: e.adCreativeType });
});
