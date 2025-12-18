n.d(t, {
    B: () => E,
    Z: () => y,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(442837),
    s = n(902704),
    l = n(36563),
    c = n(681715),
    u = n(688192),
    d = n(594174),
    f = n(823379),
    p = n(851397),
    _ = n(474936),
    m = n(268685),
    h = n(388032),
    g = n(264940),
    E = (function (e) {
        return (e.POPULAR = "popular"), (e.WISHLIST = "wishlist"), e;
    })({});
let b = 3;
function y(e) {
    let { variant: t, wishlistItem: n, userIds: E, guildId: y, channelId: O, cardSize: v = u.U.SMALL } = e,
        [S, I] = i.useState(new Set(E));
    i.useEffect(() => {
        I((e) => {
            let t = new Set(E);
            return (0, s.E)(Array.from(e), Array.from(t)) ? e : t;
        });
    }, [E]);
    let T = (0, o.Wu)(
        [d.default],
        () =>
            Array.from(S)
                .map((e) => d.default.getUser(e))
                .filter(f.lm),
        [S],
    );
    return (0, r.jsxs)("div", {
        className: g.container,
        children: [
            (0, r.jsx)(c.u, {
                text: "popular" === t ? h.intl.string(h.t["DP0o+u"]) : h.intl.string(h.t["OnWY3/"]),
                position: "top",
                children: (0, r.jsx)("div", {
                    className: g.contextContainer,
                    children:
                        "popular" === t || 0 === T.length
                            ? (0, r.jsx)("div", {
                                  className: g.contextIcon,
                                  children: (0, r.jsx)(a.YqE, {
                                      size: "sm",
                                      color: "currentColor",
                                  }),
                              })
                            : (0, r.jsx)(l.g, {
                                  users: T,
                                  guildId: null != y ? y : void 0,
                                  channelId: null != O ? O : void 0,
                                  maxUsers: b,
                                  size: m.EF.SIZE_20,
                              }),
                }),
            }),
            (0, r.jsx)(p.Z, {
                item: n,
                wishlistId: null,
                isOwner: !1,
                cardSize: v,
                showOverlayButton: !0,
                hideButtonIcon: !0,
                showPrice: !0,
                showIcons: !1,
                giftingOrigin: _.Wt.SHOP_PAGE,
                profileOwner: 1 === T.length ? T[0] : void 0,
                additionalUserIds: T.length > 1 ? T.map((e) => e.id) : void 0,
            }),
        ],
    });
}
