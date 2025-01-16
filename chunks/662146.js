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
    s = n(540059),
    c = n(31847);
function u(e) {
    let { children: t, text: n, color: r, disableWrapper: u = !1, disabled: d = !1, hideOnClick: h = !0, shouldShow: p, forceOpen: m, selected: f = !1, tooltipClass: g, tooltipContentClass: v } = e,
        C = (0, s.Q3)('ListItemTooltip');
    return (0, i.jsx)(o.Tooltip, {
        shouldShow: p,
        forceOpen: m,
        spacing: C ? 12 : 20,
        hideOnClick: h,
        text: d ? null : n,
        position: 'right',
        color: r,
        'aria-label': !1,
        tooltipClassName: a()(c.listItemTooltip, g),
        tooltipContentClassName: v,
        children: (e) =>
            u
                ? l.cloneElement(l.Children.only(t), { ...e })
                : (0, i.jsx)('div', {
                      className: a()(c.listItemWrapper, { [c.selected]: f }),
                      ...e,
                      children: t
                  })
    });
}
