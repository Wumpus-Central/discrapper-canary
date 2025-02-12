n.d(t, { Z: () => d });
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(481060),
    s = n(540059),
    c = n(43014);
function d(e) {
    let { children: t, text: n, color: r, disableWrapper: d = !1, disabled: u = !1, hideOnClick: h = !0, shouldShow: p, forceOpen: m, selected: g = !1, tooltipClass: f, tooltipContentClass: _ } = e,
        v = (0, s.Q3)('ListItemTooltip');
    return (0, i.jsx)(o.ua7, {
        shouldShow: p,
        forceOpen: m,
        spacing: v ? 12 : 20,
        hideOnClick: h,
        text: u ? null : n,
        position: 'right',
        color: r,
        'aria-label': !1,
        tooltipClassName: a()(c.listItemTooltip, f),
        tooltipContentClassName: _,
        children: (e) =>
            d
                ? l.cloneElement(l.Children.only(t), { ...e })
                : (0, i.jsx)('div', {
                      className: a()(c.listItemWrapper, { [c.selected]: g }),
                      ...e,
                      children: t
                  })
    });
}
