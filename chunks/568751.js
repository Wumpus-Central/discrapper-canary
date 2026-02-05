"use strict";
n.d(t, { A: () => N });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
    u = n(158954),
    c = n(311907),
    d = n(52133),
    _ = n(342952),
    f = n(435371),
    p = n(793574),
    h = n(688810),
    m = n(594832),
    g = n(146423),
    E = n(662349),
    A = n(287809),
    I = n(403362),
    T = n(533406),
    y = n(788868),
    S = n(778712),
    v = n(985018),
    C = n(526295);
let b = 3;
function N(e) {
    let {
            sku: t,
            source: n,
            hideIcon: a,
            guildId: o,
            channelId: N,
            userIdsForGifting: R,
            userIdsForRecommendation: O,
            style: D,
            contextContainerClassName: L,
        } = e,
        [w, x] = i.useState(l().uniq(R)),
        [P, M] = i.useState(!1),
        [k, U] = i.useState(l().uniq(O)),
        { analyticsLocations: G } = (0, h.Ay)(
            p.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD,
            p.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        );
    i.useEffect(() => {
        U((e) => {
            let t = l().uniq(O);
            return (0, d.v)(e, t) ? e : t;
        });
    }, [O]),
        i.useEffect(() => {
            x((e) => {
                let t = l().uniq(R);
                return (0, d.v)(e, t) ? e : t;
            });
        }, [R]);
    let V = (0, c.bG)([A.default], () => (1 === w.length ? A.default.getUser(w[0]) : void 0), [w]),
        F = (0, c.yK)([A.default], () => k.map((e) => A.default.getUser(e)).filter(I.Vq), [k]),
        B = i.useCallback(() => {
            (0, T.a)(
                t,
                {
                    isGift: !0,
                    giftRecipient: V,
                    additionalUserIds: w.length > 1 ? w : void 0,
                    giftingOrigin: y.vQ.SHOP_PAGE,
                },
                { analyticsLocations: G },
            );
        }, [t, V, w, G]);
    return (0, r.jsxs)("div", {
        className: s()(C.kL, D),
        children: [
            (0, r.jsx)(g.A, {
                sku: t,
                user: V,
                onClick: B,
                cardStyle: C.Ui,
                onHoverOrFocusChange: M,
                children: (0, r.jsx)(E.l, { sku: t, onClick: B, isHoveringOrFocusing: P }),
            }),
            !a &&
                (0, r.jsx)(f.m_, {
                    text: n === m.uS.POPULAR ? v.intl.string(v.t["DP0o+u"]) : v.intl.string(v.t["OnWY3/"]),
                    position: "top",
                    children: (0, r.jsx)("div", {
                        className: s()(C.RL, L),
                        children:
                            n === m.uS.POPULAR || 0 === F.length
                                ? (0, r.jsx)("div", {
                                      className: C.fd,
                                      children: (0, r.jsx)(u.Y3C, {
                                          size: "sm",
                                          color: "currentColor",
                                          className: C.I$,
                                      }),
                                  })
                                : (0, r.jsx)(_.I, {
                                      users: F,
                                      guildId: o ?? void 0,
                                      channelId: N ?? void 0,
                                      maxUsers: b,
                                      size: S._3.SIZE_20,
                                  }),
                    }),
                }),
        ],
    });
}
