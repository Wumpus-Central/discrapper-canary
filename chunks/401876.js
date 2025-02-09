t.d(n, { Z: () => c });
var l = t(200651),
    i = t(192379),
    r = t(481060),
    s = t(377171),
    a = t(854698),
    o = t(388032),
    d = t(454567);
function c(e) {
    let { startDate: n, recurrenceRule: t, onRecurrenceChange: c } = e,
        u = i.useMemo(() => (0, a.zi)(n, t), [t, n]),
        x = (0, a.P8)(n),
        h = (e) => e.toString(),
        m = (0, l.jsxs)('div', {
            className: d.title,
            children: [
                o.intl.string(o.t['59TVxM']),
                (0, l.jsx)(r.IGR, {
                    text: o.intl.string(o.t.y2b7CA),
                    color: s.Z.BG_BRAND
                })
            ]
        });
    return (0, l.jsx)(r.xJW, {
        title: m,
        required: !0,
        children: (0, l.jsx)(r.PhF, {
            placeholder: 'gaming',
            options: x,
            select: c,
            serialize: h,
            isSelected: (e) => null != u && h(e) === h(u)
        })
    });
}
