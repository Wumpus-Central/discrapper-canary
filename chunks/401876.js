t.d(n, {
    Z: function () {
        return d;
    }
});
var l = t(200651),
    i = t(192379),
    a = t(481060),
    r = t(377171),
    o = t(854698),
    s = t(388032),
    c = t(195197);
function d(e) {
    let { startDate: n, recurrenceRule: t, onRecurrenceChange: d } = e,
        u = i.useMemo(() => (0, o.zi)(n, t), [t, n]),
        m = (0, o.P8)(n),
        x = (e) => e.toString(),
        h = (0, l.jsxs)('div', {
            className: c.title,
            children: [
                s.intl.string(s.t['59TVxM']),
                (0, l.jsx)(a.TextBadge, {
                    text: s.intl.string(s.t.y2b7CA),
                    color: r.Z.BG_BRAND
                })
            ]
        });
    return (0, l.jsx)(a.FormItem, {
        title: h,
        required: !0,
        children: (0, l.jsx)(a.Select, {
            placeholder: 'gaming',
            options: m,
            select: d,
            serialize: x,
            isSelected: (e) => null != u && x(e) === x(u)
        })
    });
}
