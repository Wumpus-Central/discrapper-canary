a.d(t, { R: () => u });
var r = a(64700),
    n = a(172218),
    i = a(323889),
    l = a(17928),
    o = a(475743),
    s = a(531685),
    d = a(954243),
    c = a(971649);
a(23766);
let u = r.memo(function (e) {
    let t,
        a,
        u,
        { focused: p, focusedChanged: m } =
            ((t = (0, l.bG)([s.A], () => s.A.isFocused())),
            (a = (0, o.A)(t)),
            (u = t !== a),
            { focused: t, focusedChanged: u }),
        {
            visible: h,
            visibleChanged: v,
            reference: g,
        } = ((e) => {
            let [t, a] = r.useState(!1),
                i = e ?? t,
                l = i !== (0, o.A)(i);
            return { visible: i, visibleChanged: l, reference: (0, n.K)((e) => a(e), 0.5) };
        })(e.overrideVisibility),
        { key: _, adContentIds: f } = (0, c.RC)(e),
        x = { ...e, focused: p, focusedChanged: m, visible: h, visibleChanged: v, reference: g };
    return "questOrQuests" in e
        ? (0, r.createElement)(d.xs, { ...x, key: _, adContentIds: f, adCreativeType: i.p.QUEST })
        : (0, r.createElement)(d.xs, { ...x, key: _, adContentIds: f, adCreativeType: e.adCreativeType });
});
