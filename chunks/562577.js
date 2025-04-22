n.d(t, { Z: () => f });
var l = n(200651),
    a = n(120356),
    r = n.n(a),
    i = n(692547),
    o = n(481060),
    s = n(19391),
    u = n(600243),
    c = n(875425),
    d = n(388032),
    m = n(73711);
function h(e) {
    let { option: t, isSelected: n, onClick: a } = e,
        c = (0, s.Z)(t.value);
    return (0, l.jsx)(o.DY3, {
        text: c,
        children: (0, l.jsx)(o.P3F, {
            onClick: a,
            'aria-pressed': n,
            className: r()(m.customStatusLabelSelectorItem, n && m.customStatusLabelSelectorItemSelected),
            'aria-label': n ? d.intl.formatToPlainString(d.t['+KXSFh'], { label: c }) : d.intl.formatToPlainString(d.t.mDVlTk, { label: c }),
            children: (0, l.jsx)(u.Z, {
                label: t.value,
                size: 'xs',
                color: n ? i.Z.colors.INTERACTIVE_ACTIVE : i.Z.colors.INTERACTIVE_NORMAL,
                className: m.customStatusLabelSelectorItemIcon
            })
        })
    });
}
function f(e) {
    let { currentValue: t, onChange: n } = e;
    return (0, l.jsx)('div', {
        className: m.customStatusLabelSelector,
        children: c.Ub.map((e) =>
            (0, l.jsx)(
                h,
                {
                    option: e,
                    isSelected: t === e.value,
                    onClick: () => n(e.value)
                },
                e.value
            )
        )
    });
}
