n.d(t, { Z: () => j });
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
    f = n(626135),
    h = n(164670),
    m = n(927613),
    g = n(851397),
    b = n(582113),
    C = n(981631),
    y = n(701488),
    v = n(474936),
    x = n(388032),
    O = n(542519);
let E = "vc-gifting-".concat((0, l.Z)());
function j(e) {
    var t;
    let { isHovered: n, closePopout: l, onMouseEnter: j, onMouseLeave: S, channel: _ } = e;
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
        { state: Z, recommendations: T } = (0, m.Z)({
            guildId: (0, h.ac)(),
            applicationId: b.t9,
            numWishlistItems: m.W,
            userIds: _.recipients,
            location: "Social Layer Gifting Mini Shelf",
            includeWishlists: !0,
        });
    return (
        r.useEffect(() => {
            0 !== T.length &&
                f.default.track(C.rMx.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
                    guild_id: _.guild_id,
                    channel_id: _.id,
                    sku_ids: T.map((e) => e.skuId),
                });
        }, [_.id, _.guild_id, T]),
        (0, i.jsx)(d.Z, {
            children: (0, i.jsx)(a.VqE, {
                "aria-labelledby": E,
                modal: !1,
                children: (0, i.jsxs)("div", {
                    className: O.container,
                    onMouseEnter: j,
                    onMouseLeave: S,
                    children: [
                        (0, i.jsx)(a.X6q, {
                            className: O.title,
                            variant: "text-lg/bold",
                            color: "text-strong",
                            children: x.intl.string(x.t.xLP3bi),
                        }),
                        (0, i.jsx)(a.xvT, {
                            className: O.subtitle,
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: x.intl.format(x.t["+SqhBF"], {
                                applicationName:
                                    null != (t = null == P ? void 0 : P.name) ? t : x.intl.string(x.t["/1hhto"]),
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: O.wishlistItemsContainer,
                            children:
                                "loading" === Z || 0 === T.length
                                    ? (0, i.jsx)(a.$jN, { className: O.loading })
                                    : T.map((e) =>
                                          (0, i.jsx)(
                                              s.i_,
                                              {
                                                  body: x.intl.string(x.t["4yiU7x"]),
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
                                                      giftingOrigin: v.Wt.SHOP_PAGE,
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
