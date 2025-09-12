n.d(t, { L: () => p }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(692547),
    s = n(481060),
    c = n(388032),
    u = n(103198),
    d = n(515527);
function p(e) {
    let { label: t, icon: n, isSelected: l = !1, setStatus: p, clearStatus: h } = e,
        [f, m] = i.useState(!1),
        g = f && l,
        b = g ? c.intl.string(c.t.S90Fub) : t,
        y = i.useCallback(() => {
            g ? null == h || h() : p();
        }, [g, h, p]);
    return (0, r.jsxs)(s.P3F, {
        onClick: y,
        onMouseEnter: () => {
            m(!0);
        },
        onMouseLeave: () => {
            m(!1);
        },
        className: a()(d.item, d.labelContainer, u.container, { [u.isSelected]: l }),
        children: [
            n,
            (0, r.jsx)(s.Text, {
                color: g ? "text-danger" : f || l ? "text-primary" : "text-secondary",
                variant: "text-sm/medium",
                className: u.itemText,
                children: b,
            }),
            l &&
                (0, r.jsx)(s.k$p, {
                    className: u.closeIcon,
                    color: g ? o.Z.colors.TEXT_DANGER : void 0,
                }),
        ],
    });
}
