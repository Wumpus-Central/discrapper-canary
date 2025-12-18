n.d(t, { Z: () => y });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(835473),
    c = n(688192),
    u = n(626135),
    d = n(823379),
    f = n(187233),
    p = n(631863),
    _ = n(927613),
    m = n(550642),
    h = n(981631),
    g = n(701488),
    E = n(388032),
    b = n(687068);
function y(e) {
    let {
            className: t,
            applicationId: n,
            userIds: a,
            cardSize: y = c.U.SMALL,
            location: O,
            guildId: v,
            channelId: S,
        } = e,
        I = (0, l.q)(n),
        T = (0, p.Z)(I, O),
        C = i.useMemo(() => {
            let e = null != T ? T.getIconURL(g.Si.SMALL) : void 0;
            return null != e
                ? (0, r.jsx)("img", {
                      className: b.applicationIcon,
                      src: e,
                      alt: "",
                  })
                : void 0;
        }, [T]),
        {
            state: A,
            recommendations: N,
            skuIdToUserIdsReasons: P,
        } = (0, _.Z)({
            guildId: null == T ? void 0 : T.guildId,
            applicationId: null == T ? void 0 : T.id,
            numWishlistItems: 2,
            location: O,
            includeWishlists: !0,
            userIds: a,
        }),
        R = i.useMemo(
            () =>
                N.map((e) => {
                    var t, n;
                    let i =
                        null !=
                        (n =
                            null == (t = P[e.skuId])
                                ? void 0
                                : t
                                      .filter((e) => e.reason === f.g.WISHLIST)
                                      .map((e) => e.userId)
                                      .filter(d.lm))
                            ? n
                            : [];
                    return (0, r.jsx)(
                        m.Z,
                        {
                            variant: i.length > 0 ? m.B.WISHLIST : m.B.POPULAR,
                            wishlistItem: e,
                            userIds: i,
                            guildId: v,
                            channelId: S,
                            cardSize: y,
                        },
                        e.skuId,
                    );
                }),
            [y, S, v, N, P],
        );
    return (i.useEffect(() => {
        0 !== N.length &&
            u.default.track(h.rMx.COMMERCE_SHOP_GIFTING_BREADCRUMB_VIEWED, {
                guild_id: v,
                channel_id: S,
                sku_ids: N.map((e) => e.skuId),
                location: O,
            });
    }, [v, S, N, O]),
    "loading" === A || 0 === N.length)
        ? null
        : (0, r.jsxs)("div", {
              className: o()(b.container, t),
              children: [
                  (0, r.jsxs)("div", {
                      className: b.header,
                      children: [
                          (0, r.jsx)(s.xvT, {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              children: E.intl.string(E.t.BCi1gT),
                          }),
                          null != C ? C : null,
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: b.items,
                      children: R,
                  }),
              ],
          });
}
