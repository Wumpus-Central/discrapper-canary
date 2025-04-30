n.d(e, { Z: () => f });
var l = n(200651),
    r = n(120356),
    a = n.n(r),
    i = n(692547),
    o = n(481060),
    s = n(19391),
    u = n(600243),
    c = n(875425),
    d = n(388032),
    m = n(73711);
function h(t) {
    let { option: e, isSelected: n, onClick: r } = t,
        c = (0, s.Z)(e.value);
    return (0, l.jsx)(o.DY3, {
        text: c,
        children: (0, l.jsx)(o.P3F, {
            onClick: r,
            'aria-pressed': n,
            className: a()(m.customStatusLabelSelectorItem, n && m.customStatusLabelSelectorItemSelected),
            'aria-label': n ? d.intl.formatToPlainString(d.t['+KXSFh'], { label: c }) : d.intl.formatToPlainString(d.t.mDVlTk, { label: c }),
            children: (0, l.jsx)(u.Z, {
                label: e.value,
                size: 'xs',
                color: n ? i.Z.colors.INTERACTIVE_ACTIVE : i.Z.colors.INTERACTIVE_NORMAL,
                className: m.customStatusLabelSelectorItemIcon
            })
        })
    });
}
function f(t) {
    let { currentValue: e, onChange: n } = t;
    return (0, l.jsx)('div', {
        className: m.customStatusLabelSelector,
        children: c.Ub.map((t) =>
            (0, l.jsx)(
                h,
                {
                    option: t,
                    isSelected: e === t.value,
                    onClick: () => n(t.value)
                },
                t.value
            )
        )
    });
}
