t.d(n, { Z: () => d });
var l = t(200651),
    i = t(192379),
    a = t(481060),
    r = t(377171),
    s = t(854698),
    o = t(388032),
    c = t(195197);
function d(e) {
    let { startDate: n, recurrenceRule: t, onRecurrenceChange: d } = e,
        u = i.useMemo(() => (0, s.zi)(n, t), [t, n]),
        m = (0, s.P8)(n),
        _ = (e) => e.toString(),
        x = (0, l.jsxs)('div', {
            className: c.title,
            children: [
                o.intl.string(o.t['59TVxM']),
                (0, l.jsx)(a.IGR, {
                    text: o.intl.string(o.t.y2b7CA),
                    color: r.Z.BG_BRAND
                })
            ]
        });
    return (0, l.jsx)(a.xJW, {
        title: x,
        required: !0,
        children: (0, l.jsx)(a.PhF, {
            placeholder: 'gaming',
            options: m,
            select: d,
            serialize: _,
            isSelected: (e) => null != u && _(e) === _(u)
        })
    });
}
