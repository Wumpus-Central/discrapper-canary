n.d(t, { Z: () => g });
var i = n(54381),
    r = n(473749),
    l = n(772848),
    a = n(793030),
    o = n(835473),
    s = n(688192),
    c = n(390322),
    u = n(81939),
    d = n(851397),
    p = n(582113),
    h = n(388032),
    f = n(842350);
let m = "vc-gifting-".concat((0, l.Z)());
function g(e) {
    var t;
    let { isHovered: n, closePopout: l, onMouseEnter: g, onMouseLeave: b } = e;
    r.useEffect(() => {
        n || l();
    }, [l, n]);
    let y = (0, o.q)(p.t9),
        { loading: C, wishlistItems: v } = (0, u.Z)({ guildId: p.ON });
    return (0, i.jsx)(c.Z, {
        children: (0, i.jsx)(a.VqE, {
            "aria-labelledby": m,
            modal: !1,
            children: (0, i.jsxs)("div", {
                className: f.container,
                onMouseEnter: g,
                onMouseLeave: b,
                children: [
                    (0, i.jsx)(a.X6q, {
                        className: f.title,
                        variant: "display-md",
                        color: "text-primary",
                        children: h.intl.string(h.t.xLP3bi),
                    }),
                    (0, i.jsx)(a.xvT, {
                        className: f.subtitle,
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: h.intl.format(h.t["+SqhBF"], {
                            applicationName:
                                null != (t = null == y ? void 0 : y.name) ? t : h.intl.string(h.t["/1hhto"]),
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: f.wishlistItemsContainer,
                        children:
                            C || 0 === v.length
                                ? (0, i.jsx)(a.$jN, { className: f.loading })
                                : v.map((e) =>
                                      (0, i.jsx)(
                                          d.Z,
                                          {
                                              item: e,
                                              wishlistId: null,
                                              isOwner: !1,
                                              cardSize: s.U.SMALL,
                                              showOverlayButton: !0,
                                              hideButtonIcon: !0,
                                              showPrice: !0,
                                          },
                                          e.skuId,
                                      ),
                                  ),
                    }),
                ],
            }),
        }),
    });
}
