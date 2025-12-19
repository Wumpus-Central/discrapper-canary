n.d(t, {
    B: () => y,
    Z: () => v,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(442837),
    c = n(902704),
    u = n(36563),
    d = n(681715),
    f = n(688192),
    p = n(594174),
    _ = n(823379),
    m = n(851397),
    h = n(474936),
    g = n(268685),
    E = n(388032),
    b = n(264940),
    y = (function (e) {
        return (e.POPULAR = "popular"), (e.WISHLIST = "wishlist"), (e.NO_ICON = "no_icon"), e;
    })({});
let O = 3;
function v(e) {
    let {
            variant: t,
            wishlistItem: n,
            userIds: a,
            guildId: y,
            channelId: v,
            cardSize: S = f.U.SMALL,
            contextContainerClassName: I,
        } = e,
        [T, C] = i.useState(new Set(a));
    i.useEffect(() => {
        C((e) => {
            let t = new Set(a);
            return (0, c.E)(Array.from(e), Array.from(t)) ? e : t;
        });
    }, [a]);
    let A = (0, l.Wu)(
        [p.default],
        () =>
            Array.from(T)
                .map((e) => p.default.getUser(e))
                .filter(_.lm),
        [T],
    );
    return (0, r.jsxs)("div", {
        className: b.container,
        children: [
            "no_icon" === t
                ? null
                : (0, r.jsx)(d.u, {
                      text: "popular" === t ? E.intl.string(E.t["DP0o+u"]) : E.intl.string(E.t["OnWY3/"]),
                      position: "top",
                      children: (0, r.jsx)("div", {
                          className: o()(b.contextContainer, I),
                          children:
                              "popular" === t || 0 === A.length
                                  ? (0, r.jsx)("div", {
                                        className: b.contextIcon,
                                        children: (0, r.jsx)(s.YqE, {
                                            size: "sm",
                                            color: "currentColor",
                                            className: b.fireIcon,
                                        }),
                                    })
                                  : (0, r.jsx)(u.g, {
                                        users: A,
                                        guildId: null != y ? y : void 0,
                                        channelId: null != v ? v : void 0,
                                        maxUsers: O,
                                        size: g.EF.SIZE_20,
                                    }),
                      }),
                  }),
            (0, r.jsx)(m.Z, {
                item: n,
                wishlistId: null,
                isOwner: !1,
                cardSize: S,
                showOverlayButton: !0,
                hideButtonIcon: !0,
                showPrice: !0,
                showIcons: !1,
                giftingOrigin: h.Wt.SHOP_PAGE,
                profileOwner: 1 === A.length ? A[0] : void 0,
                additionalUserIds: A.length > 1 ? A.map((e) => e.id) : void 0,
            }),
        ],
    });
}
