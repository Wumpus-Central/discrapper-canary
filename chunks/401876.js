t.d(n, { Z: () => d });
var l = t(200651),
    i = t(192379),
    r = t(481060),
    a = t(377171),
    s = t(854698),
    o = t(388032),
    c = t(195197);
function d(e) {
    let { startDate: n, recurrenceRule: t, onRecurrenceChange: d } = e,
        u = i.useMemo(() => (0, s.zi)(n, t), [t, n]),
        _ = (0, s.P8)(n),
        h = (e) => e.toString(),
        m = (0, l.jsxs)('div', {
            className: c.title,
            children: [
                o.intl.string(o.t['59TVxM']),
                (0, l.jsx)(r.IGR, {
                    text: o.intl.string(o.t.y2b7CA),
                    color: a.Z.BG_BRAND
                })
            ]
        });
    return (0, l.jsx)(r.xJW, {
        title: m,
        required: !0,
        children: (0, l.jsx)(r.PhF, {
            placeholder: 'gaming',
            options: _,
            select: d,
            serialize: h,
            isSelected: (e) => null != u && h(e) === h(u)
        })
    });
}
