n.d(t, { Z: () => c });
var r = n(255367),
    l = n(73800),
    i = n(481060),
    a = n(854698),
    s = n(388032),
    d = n(888890);
function c(e) {
    let { startDate: t, recurrenceRule: n, onRecurrenceChange: c } = e,
        o = l.useMemo(() => (0, a.zi)(t, n), [n, t]),
        u = (0, a.P8)(t),
        x = (e) => e.toString(),
        h = (0, r.jsx)('div', {
            className: d.title,
            children: s.intl.string(s.t['59TVxM'])
        });
    return (0, r.jsx)(i.xJW, {
        title: h,
        required: !0,
        children: (0, r.jsx)(i.PhF, {
            placeholder: 'gaming',
            options: u,
            select: c,
            serialize: x,
            isSelected: (e) => null != o && x(e) === x(o)
        })
    });
}
