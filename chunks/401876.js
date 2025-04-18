r.d(t, { Z: () => o });
var n = r(200651),
    s = r(192379),
    l = r(481060),
    i = r(854698),
    c = r(388032),
    a = r(888890);
function o(e) {
    let { startDate: t, recurrenceRule: r, onRecurrenceChange: o } = e,
        d = s.useMemo(() => (0, i.zi)(t, r), [r, t]),
        u = (0, i.P8)(t),
        x = (e) => e.toString(),
        j = (0, n.jsx)('div', {
            className: a.title,
            children: c.NW.string(c.t['59TVxM'])
        });
    return (0, n.jsx)(l.xJW, {
        title: j,
        required: !0,
        children: (0, n.jsx)(l.PhF, {
            placeholder: 'gaming',
            options: u,
            select: o,
            serialize: x,
            isSelected: (e) => null != d && x(e) === x(d)
        })
    });
}
