n.d(t, {
    B: () => v,
    Z: () => I,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(793030),
    u = n(442837),
    d = n(902704),
    f = n(36563),
    p = n(681715),
    _ = n(688192),
    m = n(594174),
    h = n(823379),
    g = n(851397),
    E = n(474936),
    b = n(268685),
    y = n(388032),
    O = n(264940),
    v = (function (e) {
        return (e.POPULAR = "popular"), (e.WISHLIST = "wishlist"), (e.NO_ICON = "no_icon"), e;
    })({});
let S = 3;
function I(e) {
    let {
            variant: t,
            wishlistItem: n,
            guildId: a,
            channelId: s,
            userIdsForGifting: v,
            userIdsForRecommendation: I,
            cardSize: T = _.U.SMALL,
            contextContainerClassName: C,
        } = e,
        [A, N] = i.useState(l().uniq(v)),
        [P, R] = i.useState(l().uniq(I));
    i.useEffect(() => {
        R((e) => {
            let t = l().uniq(I);
            return (0, d.E)(e, t) ? e : t;
        });
    }, [I]),
        i.useEffect(() => {
            N((e) => {
                let t = l().uniq(v);
                return (0, d.E)(e, t) ? e : t;
            });
        }, [v]);
    let w = (0, u.e7)([m.default], () => (1 === A.length ? m.default.getUser(A[0]) : void 0), [A]),
        D = (0, u.Wu)([m.default], () => P.map((e) => m.default.getUser(e)).filter(h.lm), [P]);
    return (0, r.jsxs)("div", {
        className: O.container,
        children: [
            "no_icon" === t
                ? null
                : (0, r.jsx)(p.u, {
                      text: "popular" === t ? y.intl.string(y.t["DP0o+u"]) : y.intl.string(y.t["OnWY3/"]),
                      position: "top",
                      children: (0, r.jsx)("div", {
                          className: o()(O.contextContainer, C),
                          children:
                              "popular" === t || 0 === D.length
                                  ? (0, r.jsx)("div", {
                                        className: O.contextIcon,
                                        children: (0, r.jsx)(c.YqE, {
                                            size: "sm",
                                            color: "currentColor",
                                            className: O.fireIcon,
                                        }),
                                    })
                                  : (0, r.jsx)(f.g, {
                                        users: D,
                                        guildId: null != a ? a : void 0,
                                        channelId: null != s ? s : void 0,
                                        maxUsers: S,
                                        size: b.EF.SIZE_20,
                                    }),
                      }),
                  }),
            (0, r.jsx)(g.Z, {
                item: n,
                wishlistId: null,
                isOwner: !1,
                cardSize: T,
                showOverlayButton: !0,
                hideButtonIcon: !0,
                showPrice: !0,
                showIcons: !1,
                giftingOrigin: E.Wt.SHOP_PAGE,
                profileOwner: w,
                additionalUserIds: A.length > 1 ? A : void 0,
            }),
        ],
    });
}
