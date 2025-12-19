n.d(t, { Z: () => y }), n(388685);
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
        R = i.useMemo(() => new Set(a), [a]),
        w = i.useMemo(
            () =>
                N.length > 0 &&
                N.every((e) => {
                    var t;
                    return null == (t = P[e.skuId])
                        ? void 0
                        : t.some((e) => e.reason === f.g.WISHLIST && R.has(e.userId));
                }),
            [N, P, R],
        ),
        D = i.useMemo(() => {
            let e = w && 1 === a.length;
            return N.map((t) => {
                var n, i;
                let a =
                    null !=
                    (i =
                        null == (n = P[t.skuId])
                            ? void 0
                            : n
                                  .filter((e) => e.reason === f.g.WISHLIST && R.has(e.userId))
                                  .map((e) => e.userId)
                                  .filter(d.lm))
                        ? i
                        : [];
                return (0, r.jsx)(
                    m.Z,
                    {
                        variant: e ? m.B.NO_ICON : a.length > 0 ? m.B.WISHLIST : m.B.POPULAR,
                        wishlistItem: t,
                        userIds: a,
                        guildId: v,
                        channelId: S,
                        cardSize: y,
                    },
                    t.skuId,
                );
            });
        }, [y, S, v, N, P, w, a, R]);
    i.useEffect(() => {
        0 !== N.length &&
            u.default.track(h.rMx.COMMERCE_SHOP_GIFTING_BREADCRUMB_VIEWED, {
                guild_id: v,
                channel_id: S,
                sku_ids: N.map((e) => e.skuId),
                location: O,
            });
    }, [v, S, N, O]);
    let x = "loading" === A || 0 === N.length;
    return (0, r.jsxs)("div", {
        className: o()(b.container, t),
        children: [
            (0, r.jsxs)("div", {
                className: b.header,
                children: [
                    (0, r.jsx)(s.xvT, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: w ? E.intl.string(E.t["7lZ31J"]) : E.intl.string(E.t.BCi1gT),
                    }),
                    null != C ? C : null,
                ],
            }),
            (0, r.jsx)("div", {
                className: b.items,
                children: x
                    ? (0, r.jsx)(s.$jN, {
                          type: s.$jN.Type.SPINNING_CIRCLE,
                          className: b.spinner,
                      })
                    : D,
            }),
        ],
    });
}
