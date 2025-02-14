l.d(n, { Z: () => c });
var t = l(200651),
    i = l(192379),
    a = l(481060),
    r = l(377171),
    s = l(854698),
    o = l(388032),
    d = l(17642);
function c(e) {
    let { startDate: n, recurrenceRule: l, onRecurrenceChange: c } = e,
        u = i.useMemo(() => (0, s.zi)(n, l), [l, n]),
        x = (0, s.P8)(n),
        m = (e) => e.toString(),
        h = (0, t.jsxs)('div', {
            className: d.title,
            children: [
                o.intl.string(o.t['59TVxM']),
                (0, t.jsx)(a.IGR, {
                    text: o.intl.string(o.t.y2b7CA),
                    color: r.Z.BG_BRAND
                })
            ]
        });
    return (0, t.jsx)(a.xJW, {
        title: h,
        required: !0,
        children: (0, t.jsx)(a.PhF, {
            placeholder: 'gaming',
            options: x,
            select: c,
            serialize: m,
            isSelected: (e) => null != u && m(e) === m(u)
        })
    });
}
