n.d(t, {
    A: () => C,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(735438),
    l = n.n(s),
    c = n(158954),
    u = n(311907),
    d = n(52133),
    f = n(342952),
    p = n(435371),
    _ = n(793574),
    h = n(688810),
    m = n(594832),
    g = n(146423),
    E = n(662349),
    y = n(287809),
    b = n(403362),
    O = n(533406),
    v = n(788868),
    A = n(778712),
    I = n(985018),
    S = n(526295);
let T = 3;

function C(e) {
    let {
            sku: t,
            source: n,
            hideIcon: a,
            guildId: s,
            channelId: C,
            userIdsForGifting: N,
            userIdsForRecommendation: w,
            style: R,
            contextContainerClassName: P,
        } = e,
        [D, L] = i.useState(l().uniq(N)),
        [x, M] = i.useState(!1),
        [j, k] = i.useState(l().uniq(w)),
        { analyticsLocations: U } = (0, h.Ay)(
            _.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD,
            _.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        );
    i.useEffect(() => {
        k((e) => {
            let t = l().uniq(w);
            return (0, d.v)(e, t) ? e : t;
        });
    }, [w]),
        i.useEffect(() => {
            L((e) => {
                let t = l().uniq(N);
                return (0, d.v)(e, t) ? e : t;
            });
        }, [N]);
    let G = (0, u.bG)([y.default], () => (1 === D.length ? y.default.getUser(D[0]) : void 0), [D]),
        F = (0, u.yK)([y.default], () => j.map((e) => y.default.getUser(e)).filter(b.Vq), [j]),
        V = i.useCallback(() => {
            (0, O.a)(
                t,
                {
                    isGift: !0,
                    giftRecipient: G,
                    additionalUserIds: D.length > 1 ? D : void 0,
                    giftingOrigin: v.vQ.SHOP_PAGE,
                },
                {
                    analyticsLocations: U,
                },
            );
        }, [t, G, D, U]);
    return (0, r.jsxs)("div", {
        className: o()(S.kL, R),
        children: [
            (0, r.jsx)(g.A, {
                sku: t,
                user: G,
                onClick: V,
                cardStyle: S.Ui,
                onHoverOrFocusChange: M,
                children: (0, r.jsx)(E.l, {
                    sku: t,
                    onClick: V,
                    isHoveringOrFocusing: x,
                }),
            }),
            !a &&
                (0, r.jsx)(p.m_, {
                    text: n === m.uS.POPULAR ? I.intl.string(I.t["DP0o+u"]) : I.intl.string(I.t["OnWY3/"]),
                    position: "top",
                    children: (0, r.jsx)("div", {
                        className: o()(S.RL, P),
                        children:
                            n === m.uS.POPULAR || 0 === F.length
                                ? (0, r.jsx)("div", {
                                      className: S.fd,
                                      children: (0, r.jsx)(c.Y3C, {
                                          size: "sm",
                                          color: "currentColor",
                                          className: S.I$,
                                      }),
                                  })
                                : (0, r.jsx)(f.I, {
                                      users: F,
                                      guildId: null != s ? s : void 0,
                                      channelId: null != C ? C : void 0,
                                      maxUsers: T,
                                      size: A._3.SIZE_20,
                                  }),
                    }),
                }),
        ],
    });
}
