n.d(t, { Z: () => h });
var a = n(200651),
    r = n(120356),
    l = n.n(r),
    i = n(692547),
    o = n(481060),
    s = n(19391),
    u = n(600243),
    c = n(875425),
    d = n(388032),
    m = n(73711);
function f(e) {
    let { option: t, isSelected: n, onClick: r } = e,
        c = (0, s.Z)(t.value);
    return (0, a.jsx)(o.DY3, {
        text: c,
        children: (0, a.jsx)(o.P3F, {
            onClick: r,
            'aria-pressed': n,
            className: l()(m.customStatusLabelSelectorItem, n && m.customStatusLabelSelectorItemSelected),
            'aria-label': n ? d.NW.formatToPlainString(d.t['+KXSFh'], { label: c }) : d.NW.formatToPlainString(d.t.mDVlTk, { label: c }),
            children: (0, a.jsx)(u.Z, {
                label: t.value,
                size: 'xs',
                color: n ? i.Z.colors.INTERACTIVE_ACTIVE : i.Z.colors.INTERACTIVE_NORMAL,
                className: m.customStatusLabelSelectorItemIcon
            })
        })
    });
}
function h(e) {
    let { currentValue: t, onChange: n } = e;
    return (0, a.jsx)('div', {
        className: m.customStatusLabelSelector,
        children: c.Ub.map((e) =>
            (0, a.jsx)(
                f,
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
