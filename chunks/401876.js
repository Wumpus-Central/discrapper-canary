r.d(t, { Z: () => o });
var n = r(200651),
    l = r(192379),
    s = r(481060),
    i = r(854698),
    c = r(388032),
    a = r(888890);
function o(e) {
    let { startDate: t, recurrenceRule: r, onRecurrenceChange: o } = e,
        d = l.useMemo(() => (0, i.zi)(t, r), [r, t]),
        u = (0, i.P8)(t),
        x = (e) => e.toString(),
        j = (0, n.jsx)('div', {
            className: a.title,
            children: c.intl.string(c.t['59TVxM'])
        });
    return (0, n.jsx)(s.xJW, {
        title: j,
        required: !0,
        children: (0, n.jsx)(s.PhF, {
            placeholder: 'gaming',
            options: u,
            select: o,
            serialize: x,
            isSelected: (e) => null != d && x(e) === x(d)
        })
    });
}
