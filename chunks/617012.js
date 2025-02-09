n.d(t, { Z: () => u });
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(481060),
    o = n(388032),
    d = n(926247);
let c = [!1, !0];
function u(e) {
    let { isDisabled: t, currentValue: n, onChange: a } = e,
        o = (0, s.arW)({
            orientation: 'horizontal',
            isDisabled: t
        }),
        u = l.useCallback(
            (e) => {
                t || e === n || a(e);
            },
            [t, n, a]
        );
    return (0, i.jsx)('div', {
        className: r()(d.group, { [d.disabled]: t }),
        ...o,
        children: c.map((e) =>
            (0, i.jsx)(
                m,
                {
                    isSelected: n === e,
                    itemValue: e,
                    onClick: () => u(e)
                },
                e.toString()
            )
        )
    });
}
function m(e) {
    let { isSelected: t, itemValue: n, onClick: l } = e,
        a = n ? d.allow : d.deny,
        c = n ? s.dz2 : s.Dio,
        u = n ? o.intl.string(o.t.RzDfSk) : o.intl.string(o.t['6639Oz']),
        m = (0, s.xUy)({
            isSelected: t,
            label: u
        });
    return (0, i.jsx)(s.P3F, {
        className: r()(d.item, a, { [d.selected]: t }),
        onClick: l,
        ...m,
        children: (0, i.jsx)(c, {
            size: 'xs',
            color: 'currentColor'
        })
    });
}
