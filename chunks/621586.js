n.d(t, { Z: () => y });
var i = n(54381),
    r = n(473749),
    l = n(772848),
    a = n(793030),
    o = n(835473),
    s = n(688192),
    c = n(390322),
    u = n(626135),
    d = n(81939),
    p = n(851397),
    h = n(582113),
    f = n(981631),
    m = n(388032),
    g = n(842350);
let b = "vc-gifting-".concat((0, l.Z)());
function y(e) {
    var t;
    let { isHovered: n, closePopout: l, onMouseEnter: y, onMouseLeave: C, channel: v } = e;
    r.useEffect(() => {
        n || l();
    }, [l, n]);
    let _ = (0, o.q)(h.t9),
        { loading: x, wishlistItems: j, wishlistItemSkuIds: O } = (0, d.Z)({ guildId: h.ON });
    return (
        r.useEffect(() => {
            0 !== O.length &&
                u.default.track(f.rMx.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
                    guild_id: v.guild_id,
                    channel_id: v.id,
                    sku_ids: O,
                });
        }, [v.id, v.guild_id, O]),
        (0, i.jsx)(c.Z, {
            children: (0, i.jsx)(a.VqE, {
                "aria-labelledby": b,
                modal: !1,
                children: (0, i.jsxs)("div", {
                    className: g.container,
                    onMouseEnter: y,
                    onMouseLeave: C,
                    children: [
                        (0, i.jsx)(a.X6q, {
                            className: g.title,
                            variant: "display-md",
                            color: "text-primary",
                            children: m.intl.string(m.t.xLP3bi),
                        }),
                        (0, i.jsx)(a.xvT, {
                            className: g.subtitle,
                            variant: "text-sm/medium",
                            color: "text-secondary",
                            children: m.intl.format(m.t["+SqhBF"], {
                                applicationName:
                                    null != (t = null == _ ? void 0 : _.name) ? t : m.intl.string(m.t["/1hhto"]),
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: g.wishlistItemsContainer,
                            children:
                                x || 0 === j.length
                                    ? (0, i.jsx)(a.$jN, { className: g.loading })
                                    : j.map((e) =>
                                          (0, i.jsx)(
                                              p.Z,
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
        })
    );
}
