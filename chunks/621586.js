n.d(t, { Z: () => E });
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
    C = n(981631),
    y = n(701488),
    _ = n(474936),
    v = n(388032),
    O = n(842350);
let x = "vc-gifting-".concat((0, l.Z)());
function E(e) {
    var t;
    let { isHovered: n, closePopout: l, onMouseEnter: E, onMouseLeave: j, channel: S } = e;
    r.useEffect(() => {
        n || l();
    }, [l, n]);
    let P = (0, o.e7)([c.Z], () => c.Z.getApplication(b.t9)),
        I = r.useMemo(() => {
            let e = null != P ? P.getIconURL(y.Si.SMALL) : void 0;
            return null != e && null != P
                ? (0, i.jsx)("img", {
                      src: e,
                      alt: P.name,
                  })
                : null;
        }, [P]),
        {
            loading: Z,
            wishlistItems: T,
            wishlistItemSkuIds: N,
        } = (0, m.Z)({
            guildId: (0, f.ac)(),
            numWishlistItems: m.W,
        });
    return (
        r.useEffect(() => {
            0 !== N.length &&
                h.default.track(C.rMx.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
                    guild_id: S.guild_id,
                    channel_id: S.id,
                    sku_ids: N,
                });
        }, [S.id, S.guild_id, N]),
        (0, i.jsx)(d.Z, {
            children: (0, i.jsx)(a.VqE, {
                "aria-labelledby": x,
                modal: !1,
                children: (0, i.jsxs)("div", {
                    className: O.container,
                    onMouseEnter: E,
                    onMouseLeave: j,
                    children: [
                        (0, i.jsx)(a.X6q, {
                            className: O.title,
                            variant: "text-lg/bold",
                            color: "text-strong",
                            children: v.intl.string(v.t.xLP3bi),
                        }),
                        (0, i.jsx)(a.xvT, {
                            className: O.subtitle,
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: v.intl.format(v.t["+SqhBF"], {
                                applicationName:
                                    null != (t = null == P ? void 0 : P.name) ? t : v.intl.string(v.t["/1hhto"]),
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: O.wishlistItemsContainer,
                            children:
                                Z || 0 === T.length
                                    ? (0, i.jsx)(a.$jN, { className: O.loading })
                                    : T.map((e) =>
                                          (0, i.jsx)(
                                              s.i_,
                                              {
                                                  body: v.intl.string(v.t["4yiU7x"]),
                                                  asset: I,
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
                                                      giftingOrigin: _.Wt.SHOP_PAGE,
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
