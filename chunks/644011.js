n.d(t, { Z: () => S });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(442837),
    c = n(681715),
    u = n(835473),
    d = n(688192),
    f = n(602733),
    p = n(594174),
    _ = n(626135),
    m = n(631863),
    h = n(927613),
    g = n(851397),
    E = n(981631),
    b = n(701488),
    y = n(474936),
    O = n(388032),
    v = n(687068);
function S(e) {
    let {
            className: t,
            applicationId: n,
            userIds: a,
            cardSize: S = d.U.SMALL,
            location: I,
            guildId: T,
            channelId: C,
        } = e,
        A = (0, u.q)(n),
        N = (0, m.Z)(A, I),
        P = (0, l.e7)(
            [p.default],
            () => (null != a && 1 === a.length ? p.default.getUser(null == a ? void 0 : a[0]) : void 0),
            [a],
        ),
        R = i.useMemo(() => {
            let e = null != N ? N.getIconURL(b.Si.SMALL) : void 0;
            return null != e
                ? (0, r.jsx)("img", {
                      className: v.applicationIcon,
                      src: e,
                      alt: "",
                  })
                : void 0;
        }, [N]),
        { state: w, recommendations: D } = (0, h.Z)({
            guildId: null == N ? void 0 : N.guildId,
            applicationId: null == N ? void 0 : N.id,
            numWishlistItems: 2,
            location: I,
            includeWishlists: !0,
            userIds: a,
        });
    return (i.useEffect(() => {
        0 !== D.length &&
            _.default.track(E.rMx.COMMERCE_SHOP_GIFTING_BREADCRUMB_VIEWED, {
                guild_id: T,
                channel_id: C,
                sku_ids: D.map((e) => e.skuId),
                location: I,
            });
    }, [T, C, D, I]),
    "loading" === w || 0 === D.length)
        ? null
        : (0, r.jsxs)("div", {
              className: o()(v.container, t),
              children: [
                  (0, r.jsxs)("div", {
                      className: v.header,
                      children: [
                          (0, r.jsx)(s.xvT, {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              children: O.intl.string(O.t.BCi1gT),
                          }),
                          null != R ? R : null,
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: v.items,
                      children: D.map((e) =>
                          (0, r.jsx)(
                              c.i_,
                              {
                                  body: O.intl.string(O.t["4yiU7x"]),
                                  asset: R,
                                  assetSize: f.EU,
                                  position: "top",
                                  asContainer: !0,
                                  delay: f.rq,
                                  children: (0, r.jsx)(g.Z, {
                                      item: e,
                                      wishlistId: null,
                                      isOwner: !1,
                                      cardSize: S,
                                      showOverlayButton: !0,
                                      hideButtonIcon: !0,
                                      showPrice: !0,
                                      showIcons: !1,
                                      giftingOrigin: y.Wt.SHOP_PAGE,
                                      profileOwner: P,
                                  }),
                              },
                              e.skuId,
                          ),
                      ),
                  }),
              ],
          });
}
