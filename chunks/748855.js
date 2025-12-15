n.d(t, { L: () => m }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(692547),
    c = n(681715),
    u = n(481060),
    d = n(106301),
    p = n(388032),
    f = n(227426),
    h = n(564546);
function m(e) {
    let { label: t, icon: n, setStatus: l, isFavorited: m, onFavoriteClick: g } = e,
        [b, C] = r.useState(!1),
        y = (0, o.e7)([d.Z], () => d.Z.getFavoritedStatuses().length >= d.o),
        v = null != g,
        x = r.useCallback(
            (e) => {
                e.stopPropagation(), null == g || g();
            },
            [g],
        ),
        O = m ? u.r7p : u.vxU;
    return (0, i.jsxs)(u.P3F, {
        onClick: l,
        onMouseEnter: () => {
            C(!0);
        },
        onMouseLeave: () => {
            C(!1);
        },
        className: a()(h.item, h.labelContainer, f.container),
        children: [
            (0, i.jsx)("div", { children: n }),
            (0, i.jsx)(u.Text, {
                variant: "text-md/normal",
                className: f.itemText,
                children: t,
            }),
            b &&
                v &&
                (0, i.jsx)(c.u, {
                    text: y && !m ? p.intl.string(p.t.YSDH9n) : void 0,
                    children: (0, i.jsx)(u.P3F, {
                        className: a()(f.centerAlign, f.favoriteIcon),
                        onClick: x,
                        children: (0, i.jsx)(O, {
                            className: f.closeIcon,
                            color: m ? s.Z.colors.ICON_FEEDBACK_WARNING : "currentColor",
                        }),
                    }),
                }),
        ],
    });
}
