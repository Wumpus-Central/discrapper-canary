n.d(t, { Z: () => o });
var l = n(255367),
    r = n(73800),
    i = n(481060),
    s = n(854698),
    a = n(388032),
    c = n(888890);
function o(e) {
    let { startDate: t, recurrenceRule: n, onRecurrenceChange: o } = e,
        d = r.useMemo(() => (0, s.zi)(t, n), [n, t]),
        u = (0, s.P8)(t),
        x = (e) => e.toString(),
        h = (0, l.jsx)('div', {
            className: c.title,
            children: a.intl.string(a.t['59TVxM'])
        });
    return (0, l.jsx)(i.xJW, {
        title: h,
        required: !0,
        children: (0, l.jsx)(i.PhF, {
            placeholder: 'gaming',
            options: u,
            select: o,
            serialize: x,
            isSelected: (e) => null != d && x(e) === x(d)
        })
    });
}
