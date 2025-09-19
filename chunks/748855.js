n.d(t, { L: () => d }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(692547),
    s = n(481060),
    c = n(948790),
    u = n(334405);
function d(e) {
    let { label: t, icon: n, isSelected: l = !1, setStatus: d, clearStatus: p, isFavorited: h, onFavoriteClick: f } = e,
        [m, g] = i.useState(!1),
        b = m && l,
        y = null != f,
        _ = i.useCallback(() => {
            b ? null == p || p() : d();
        }, [b, p, d]),
        C = i.useCallback(
            (e) => {
                e.stopPropagation(), null == f || f();
            },
            [f],
        );
    return (0, r.jsxs)(s.P3F, {
        onClick: _,
        onMouseEnter: () => {
            g(!0);
        },
        onMouseLeave: () => {
            g(!1);
        },
        className: a()(u.item, u.labelContainer, c.container, { [c.isSelected]: l }),
        children: [
            n,
            (0, r.jsx)(s.Text, {
                variant: "text-md/normal",
                className: c.itemText,
                children: t,
            }),
            l
                ? (0, r.jsx)(s.k$p, {
                      className: c.closeIcon,
                      color: m ? o.Z.colors.ICON_PRIMARY : o.Z.colors.ICON_SECONDARY,
                  })
                : m &&
                  y &&
                  (0, r.jsx)(s.P3F, {
                      onClick: C,
                      children: (0, r.jsx)(s.r7p, {
                          className: c.closeIcon,
                          color: h ? o.Z.colors.ICON_FEEDBACK_WARNING : void 0,
                      }),
                  }),
        ],
    });
}
