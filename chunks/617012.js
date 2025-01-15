n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(481060),
    s = n(388032),
    d = n(642987);
let c = [!1, !0];
function u(e) {
    let { isDisabled: t, currentValue: n, onChange: r } = e,
        s = (0, o.useRadioGroup)({
            orientation: 'horizontal',
            isDisabled: t
        }),
        u = l.useCallback(
            (e) => {
                !t && e !== n && r(e);
            },
            [t, n, r]
        );
    return (0, i.jsx)('div', {
        className: a()(d.group, { [d.disabled]: t }),
        ...s,
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
        r = n ? d.allow : d.deny,
        c = n ? o.CheckmarkLargeIcon : o.XSmallIcon,
        u = n ? s.intl.string(s.t.RzDfSk) : s.intl.string(s.t['6639Oz']),
        m = (0, o.useRadioItem)({
            isSelected: t,
            label: u
        });
    return (0, i.jsx)(o.Clickable, {
        className: a()(d.item, r, { [d.selected]: t }),
        onClick: l,
        ...m,
        children: (0, i.jsx)(c, {
            size: 'xs',
            color: 'currentColor'
        })
    });
}
