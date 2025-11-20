n.d(t, { Z: () => C });
var i = n(54381),
    r = n(473749),
    l = n(772848),
    a = n(793030),
    o = n(835473),
    s = n(688192),
    c = n(390322),
    u = n(626135),
    d = n(164670),
    p = n(81939),
    h = n(851397),
    f = n(582113),
    m = n(981631),
    g = n(388032),
    b = n(842350);
let y = "vc-gifting-".concat((0, l.Z)());
function C(e) {
    var t;
    let { isHovered: n, closePopout: l, onMouseEnter: C, onMouseLeave: v, channel: _ } = e;
    r.useEffect(() => {
        n || l();
    }, [l, n]);
    let x = (0, o.q)(f.t9),
        { loading: j, wishlistItems: O, wishlistItemSkuIds: E } = (0, p.Z)({ guildId: (0, d.ac)() });
    return (
        r.useEffect(() => {
            0 !== E.length &&
                u.default.track(m.rMx.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
                    guild_id: _.guild_id,
                    channel_id: _.id,
                    sku_ids: E,
                });
        }, [_.id, _.guild_id, E]),
        (0, i.jsx)(c.Z, {
            children: (0, i.jsx)(a.VqE, {
                "aria-labelledby": y,
                modal: !1,
                children: (0, i.jsxs)("div", {
                    className: b.container,
                    onMouseEnter: C,
                    onMouseLeave: v,
                    children: [
                        (0, i.jsx)(a.X6q, {
                            className: b.title,
                            variant: "text-lg/bold",
                            color: "text-primary",
                            children: g.intl.string(g.t.xLP3bi),
                        }),
                        (0, i.jsx)(a.xvT, {
                            className: b.subtitle,
                            variant: "text-sm/medium",
                            color: "text-secondary",
                            children: g.intl.format(g.t["+SqhBF"], {
                                applicationName:
                                    null != (t = null == x ? void 0 : x.name) ? t : g.intl.string(g.t["/1hhto"]),
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: b.wishlistItemsContainer,
                            children:
                                j || 0 === O.length
                                    ? (0, i.jsx)(a.$jN, { className: b.loading })
                                    : O.map((e) =>
                                          (0, i.jsx)(
                                              h.Z,
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
