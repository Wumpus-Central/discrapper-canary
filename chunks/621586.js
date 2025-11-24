n.d(t, { Z: () => O });
var i = n(54381),
    r = n(473749),
    l = n(772848),
    a = n(793030),
    o = n(442837),
    s = n(681715),
    c = n(812206),
    u = n(688192),
    d = n(390322),
    p = n(602733),
    h = n(626135),
    f = n(164670),
    m = n(81939),
    g = n(851397),
    b = n(582113),
    y = n(981631),
    C = n(701488),
    v = n(388032),
    _ = n(842350);
let x = "vc-gifting-".concat((0, l.Z)());
function O(e) {
    var t;
    let { isHovered: n, closePopout: l, onMouseEnter: O, onMouseLeave: j, channel: E } = e;
    r.useEffect(() => {
        n || l();
    }, [l, n]);
    let S = (0, o.e7)([c.Z], () => c.Z.getApplication(b.t9)),
        P = r.useMemo(() => {
            let e = null != S ? S.getIconURL(C.Si.SMALL) : void 0;
            return null != e && null != S
                ? (0, i.jsx)("img", {
                      src: e,
                      alt: S.name,
                  })
                : null;
        }, [S]),
        {
            loading: I,
            wishlistItems: Z,
            wishlistItemSkuIds: T,
        } = (0, m.Z)({
            guildId: (0, f.ac)(),
            numWishlistItems: m.W,
        });
    return (
        r.useEffect(() => {
            0 !== T.length &&
                h.default.track(y.rMx.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
                    guild_id: E.guild_id,
                    channel_id: E.id,
                    sku_ids: T,
                });
        }, [E.id, E.guild_id, T]),
        (0, i.jsx)(d.Z, {
            children: (0, i.jsx)(a.VqE, {
                "aria-labelledby": x,
                modal: !1,
                children: (0, i.jsxs)("div", {
                    className: _.container,
                    onMouseEnter: O,
                    onMouseLeave: j,
                    children: [
                        (0, i.jsx)(a.X6q, {
                            className: _.title,
                            variant: "text-lg/bold",
                            color: "text-primary",
                            children: v.intl.string(v.t.xLP3bi),
                        }),
                        (0, i.jsx)(a.xvT, {
                            className: _.subtitle,
                            variant: "text-sm/medium",
                            color: "text-secondary",
                            children: v.intl.format(v.t["+SqhBF"], {
                                applicationName:
                                    null != (t = null == S ? void 0 : S.name) ? t : v.intl.string(v.t["/1hhto"]),
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: _.wishlistItemsContainer,
                            children:
                                I || 0 === Z.length
                                    ? (0, i.jsx)(a.$jN, { className: _.loading })
                                    : Z.map((e) =>
                                          (0, i.jsx)(
                                              s.i_,
                                              {
                                                  body: v.intl.string(v.t["4yiU7x"]),
                                                  asset: P,
                                                  assetSize: p.EU,
                                                  position: "top",
                                                  asContainer: !0,
                                                  delay: p.rq,
                                                  children: (0, i.jsx)(g.Z, {
                                                      item: e,
                                                      wishlistId: null,
                                                      isOwner: !1,
                                                      cardSize: u.U.SMALL,
                                                      showOverlayButton: !0,
                                                      hideButtonIcon: !0,
                                                      showPrice: !0,
                                                      showIcons: !1,
                                                  }),
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
