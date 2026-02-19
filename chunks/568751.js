"use strict";
n.d(t, { A: () => b });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
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
    E = n(146423),
    g = n(662349),
    A = n(287809),
    I = n(403362),
    T = n(533406),
    S = n(788868),
    y = n(778712),
    v = n(985018),
    N = n(526295);
let C = 3;
function b(e) {
    let {
            sku: t,
            source: n,
            hideIcon: s,
            guildId: o,
            channelId: b,
            userIdsForGifting: R,
            userIdsForRecommendation: O,
            style: D,
            contextContainerClassName: L,
        } = e,
        [w, x] = i.useState(l().uniq(R)),
        [M, P] = i.useState(!1),
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
    let F = (0, c.bG)([A.default], () => (1 === w.length ? A.default.getUser(w[0]) : void 0), [w]),
        V = (0, c.yK)([A.default], () => k.map((e) => A.default.getUser(e)).filter(I.Vq), [k]),
        B = i.useCallback(() => {
            (0, T.a)(
                t,
                {
                    isGift: !0,
                    giftRecipient: F,
                    additionalUserIds: w.length > 1 ? w : void 0,
                    giftingOrigin: S.vQ.SHOP_PAGE,
                },
                { analyticsLocations: G },
            );
        }, [t, F, w, G]);
    return (0, r.jsxs)("div", {
        className: a()(N.kL, D),
        children: [
            (0, r.jsx)(E.Ay, {
                sku: t,
                user: F,
                size: E.yU.SMALL,
                onClick: B,
                cardStyle: N.Ui,
                onHoverOrFocusChange: P,
                children: (0, r.jsx)(g.l, { sku: t, onClick: B, isHoveringOrFocusing: M }),
            }),
            !s &&
                (0, r.jsx)(f.m_, {
                    text: n === m.uS.POPULAR ? v.intl.string(v.t["DP0o+u"]) : v.intl.string(v.t["OnWY3/"]),
                    position: "top",
                    children: (0, r.jsx)("div", {
                        className: a()(N.RL, L),
                        children:
                            n === m.uS.POPULAR || 0 === V.length
                                ? (0, r.jsx)("div", {
                                      className: N.fd,
                                      children: (0, r.jsx)(u.Y3C, {
                                          size: "sm",
                                          color: "currentColor",
                                          className: N.I$,
                                      }),
                                  })
                                : (0, r.jsx)(_.I, {
                                      users: V,
                                      guildId: o ?? void 0,
                                      channelId: b ?? void 0,
                                      maxUsers: C,
                                      size: y._3.SIZE_20,
                                  }),
                    }),
                }),
        ],
    });
}
