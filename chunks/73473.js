r.d(t, { R: () => o });
var s = r(64700),
    i = r(172218),
    a = r(323889),
    n = r(17928),
    d = r(475743),
    u = r(531685),
    c = r(954243),
    p = r(971649);
r(23766);
let o = s.memo(function (e) {
    let t,
        r,
        o,
        { focused: C, focusedChanged: k } =
            ((t = (0, n.bG)([u.A], () => u.A.isFocused())),
            (r = (0, d.A)(t)),
            (o = t !== r),
            { focused: t, focusedChanged: o }),
        {
            visible: l,
            visibleChanged: y,
            reference: h,
        } = (function (e) {
            let [t, r] = s.useState(!1),
                a = e ?? t,
                n = a !== (0, d.A)(a);
            return { visible: a, visibleChanged: n, reference: (0, i.K)((e) => r(e), 0.5) };
        })(e.overrideVisibility),
        { key: v, adContentIds: b } = (0, p.RC)(e),
        m = { ...e, focused: C, focusedChanged: k, visible: l, visibleChanged: y, reference: h };
    return "questOrQuests" in e
        ? (0, s.createElement)(c.xs, { ...m, key: v, adContentIds: b, adCreativeType: a.p.QUEST })
        : (0, s.createElement)(c.xs, { ...m, key: v, adContentIds: b, adCreativeType: e.adCreativeType });
});
ativeType;
})})
