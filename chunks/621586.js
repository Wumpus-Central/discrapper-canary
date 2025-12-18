n.d(t, { Z: () => I }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(772848),
    a = n(793030),
    o = n(442837),
    s = n(681715),
    c = n(812206),
    u = n(413523),
    d = n(358221),
    p = n(688192),
    f = n(390322),
    h = n(602733),
    m = n(626135),
    g = n(823379),
    b = n(164670),
    C = n(927613),
    y = n(851397),
    v = n(582113),
    x = n(981631),
    O = n(701488),
    E = n(354459),
    j = n(474936),
    S = n(388032),
    _ = n(542519);
let P = "vc-gifting-".concat((0, l.Z)());
function I(e) {
    var t;
    let { isHovered: n, closePopout: l, onMouseEnter: I, onMouseLeave: Z, channel: T } = e;
    r.useEffect(() => {
        n || l();
    }, [l, n]);
    let N = (0, o.e7)([c.Z], () => c.Z.getApplication(v.t9)),
        A = r.useMemo(() => {
            let e = null != N ? N.getIconURL(O.Si.SMALL) : void 0;
            return null != e && null != N
                ? (0, i.jsx)("img", {
                      src: e,
                      alt: N.name,
                  })
                : null;
        }, [N]),
        [w] = (0, o.e7)(
            [d.Z],
            () => (null != T.id ? [d.Z.getParticipants(T.id), d.Z.getParticipantsVersion(T.id)] : [[], 0]),
            [T.id],
            u.Lc,
        ),
        M = r.useMemo(
            () => Array.from(new Set(w.map((e) => ((0, E.Io)(e) || (0, E._5)(e) ? e.user.id : null)).filter(g.lm))),
            [w],
        ),
        { state: R, recommendations: L } = (0, C.Z)({
            guildId: (0, b.ac)(),
            applicationId: v.t9,
            numWishlistItems: C.W,
            userIds: M,
            location: "Social Layer Gifting Mini Shelf",
            includeWishlists: !0,
        });
    return (
        r.useEffect(() => {
            0 !== L.length &&
                m.default.track(x.rMx.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
                    guild_id: T.guild_id,
                    channel_id: T.id,
                    sku_ids: L.map((e) => e.skuId),
                });
        }, [T.id, T.guild_id, L]),
        (0, i.jsx)(f.Z, {
            children: (0, i.jsx)(a.VqE, {
                "aria-labelledby": P,
                modal: !1,
                children: (0, i.jsxs)("div", {
                    className: _.container,
                    onMouseEnter: I,
                    onMouseLeave: Z,
                    children: [
                        (0, i.jsx)(a.X6q, {
                            className: _.title,
                            variant: "text-lg/bold",
                            color: "text-strong",
                            children: S.intl.string(S.t.xLP3bi),
                        }),
                        (0, i.jsx)(a.xvT, {
                            className: _.subtitle,
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: S.intl.format(S.t["+SqhBF"], {
                                applicationName:
                                    null != (t = null == N ? void 0 : N.name) ? t : S.intl.string(S.t["/1hhto"]),
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: _.wishlistItemsContainer,
                            children:
                                "loading" === R || 0 === L.length
                                    ? (0, i.jsx)(a.$jN, { className: _.loading })
                                    : L.map((e) =>
                                          (0, i.jsx)(
                                              s.i_,
                                              {
                                                  body: S.intl.string(S.t["4yiU7x"]),
                                                  asset: A,
                                                  assetSize: h.EU,
                                                  position: "top",
                                                  asContainer: !0,
                                                  delay: h.rq,
                                                  children: (0, i.jsx)(y.Z, {
                                                      item: e,
                                                      wishlistId: null,
                                                      isOwner: !1,
                                                      cardSize: p.U.SMALL,
                                                      showOverlayButton: !0,
                                                      hideButtonIcon: !0,
                                                      showPrice: !0,
                                                      showIcons: !1,
                                                      giftingOrigin: j.Wt.SHOP_PAGE,
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
