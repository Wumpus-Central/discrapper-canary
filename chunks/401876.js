n.d(t, { Z: () => c });
var l = n(255367),
    r = n(73800),
    i = n(481060),
    a = n(854698),
    s = n(388032),
    d = n(888890);
function c(e) {
    let { startDate: t, recurrenceRule: n, onRecurrenceChange: c } = e,
        u = r.useMemo(() => (0, a.zi)(t, n), [n, t]),
        o = (0, a.P8)(t),
        x = (e) => e.toString(),
        h = (0, l.jsx)('div', {
            className: d.title,
            children: s.intl.string(s.t['59TVxM'])
        });
    return (0, l.jsx)(i.xJW, {
        title: h,
        required: !0,
        children: (0, l.jsx)(i.PhF, {
            placeholder: 'gaming',
            options: o,
            select: c,
            serialize: x,
            isSelected: (e) => null != u && x(e) === x(u)
        })
    });
}
