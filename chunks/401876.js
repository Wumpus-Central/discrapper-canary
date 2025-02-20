r.d(t, { Z: () => d });
var n = r(200651),
    s = r(192379),
    l = r(481060),
    i = r(377171),
    c = r(854698),
    o = r(388032),
    a = r(9763);
function d(e) {
    let { startDate: t, recurrenceRule: r, onRecurrenceChange: d } = e,
        u = s.useMemo(() => (0, c.zi)(t, r), [r, t]),
        x = (0, c.P8)(t),
        j = (e) => e.toString(),
        m = (0, n.jsxs)('div', {
            className: a.title,
            children: [
                o.NW.string(o.t['59TVxM']),
                (0, n.jsx)(l.IGR, {
                    text: o.NW.string(o.t.y2b7CA),
                    color: i.Z.BG_BRAND
                })
            ]
        });
    return (0, n.jsx)(l.xJW, {
        title: m,
        required: !0,
        children: (0, n.jsx)(l.PhF, {
            placeholder: 'gaming',
            options: x,
            select: d,
            serialize: j,
            isSelected: (e) => null != u && j(e) === j(u)
        })
    });
}
