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
    let { label: t, icon: n, isSelected: l = !1, setStatus: p, clearStatus: h, isFavorited: f, onFavoriteClick: m } = e,
        [g, b] = i.useState(!1),
        y = g && l,
        C = y ? c.intl.string(c.t.S90Fub) : t,
        _ = null != m,
        v = i.useCallback(() => {
            y ? null == h || h() : p();
        }, [y, h, p]),
        x = i.useCallback(
            (e) => {
                e.stopPropagation(), null == m || m();
            },
            [m],
        );
    return (0, r.jsxs)(s.P3F, {
        onClick: v,
        onMouseEnter: () => {
            b(!0);
        },
        onMouseLeave: () => {
            b(!1);
        },
        className: a()(d.item, d.labelContainer, u.container, { [u.isSelected]: l }),
        children: [
            n,
            (0, r.jsx)(s.Text, {
                variant: "text-md/normal",
                className: u.itemText,
                children: C,
            }),
            l
                ? (0, r.jsx)(s.k$p, {
                      className: u.closeIcon,
                      color: g ? o.Z.colors.ICON_PRIMARY : o.Z.colors.ICON_SECONDARY,
                  })
                : g &&
                  _ &&
                  (0, r.jsx)(s.P3F, {
                      onClick: x,
                      children: (0, r.jsx)(s.r7p, {
                          className: u.closeIcon,
                          color: f ? o.Z.colors.ICON_FEEDBACK_WARNING : void 0,
                      }),
                  }),
        ],
    });
}
