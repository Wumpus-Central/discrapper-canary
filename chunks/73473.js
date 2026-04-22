a.d(t, { R: () => u });
var n = a(64700),
    r = a(172218),
    i = a(323889),
    l = a(311907),
    o = a(475743),
    s = a(531685),
    d = a(266569),
    c = a(971649);
a(23766);
let u = n.memo(function (e) {
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
            reference: _,
        } = ((e) => {
            let [t, a] = n.useState(!1),
                i = e ?? t,
                l = i !== (0, o.A)(i);
            return { visible: i, visibleChanged: l, reference: (0, r.K)((e) => a(e), 0.5) };
        })(e.overrideVisibility),
        { key: g, adContentIds: f } = (0, c.RC)(e),
        b = { ...e, focused: p, focusedChanged: m, visible: h, visibleChanged: v, reference: _ };
    return "questOrQuests" in e
        ? (0, n.createElement)(d.xs, { ...b, key: g, adContentIds: f, adCreativeType: i.p.QUEST })
        : (0, n.createElement)(d.xs, { ...b, key: g, adContentIds: f, adCreativeType: e.adCreativeType });
});
