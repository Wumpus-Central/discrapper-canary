"use strict";
n.d(t, { A: () => R });
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
    y = n(699976),
    v = n(778712),
    N = n(985018),
    C = n(526295);
let b = 3;
function R(e) {
    let {
            sku: t,
            source: n,
            hideIcon: s,
            guildId: o,
            channelId: R,
            userIdsForGifting: O,
            userIdsForRecommendation: D,
            style: L,
            contextContainerClassName: w,
        } = e,
        [x, M] = i.useState(l().uniq(O)),
        [P, k] = i.useState(!1),
        [U, G] = i.useState(l().uniq(D)),
        { analyticsLocations: F } = (0, h.Ay)(
            p.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD,
            p.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        );
    i.useEffect(() => {
        G((e) => {
            let t = l().uniq(D);
            return (0, d.v)(e, t) ? e : t;
        });
    }, [D]),
        i.useEffect(() => {
            M((e) => {
                let t = l().uniq(O);
                return (0, d.v)(e, t) ? e : t;
            });
        }, [O]);
    let V = (0, c.bG)([A.default], () => (1 === x.length ? A.default.getUser(x[0]) : void 0), [x]),
        B = (0, c.yK)([A.default], () => U.map((e) => A.default.getUser(e)).filter(I.Vq), [U]),
        H = i.useCallback(() => {
            (0, T.a)(
                t,
                {
                    isGift: !0,
                    giftRecipient: V,
                    additionalUserIds: x.length > 1 ? x : void 0,
                    giftingOrigin: S.vQ.SHOP_PAGE,
                },
                { analyticsLocations: F },
            );
        }, [t, V, x, F]);
    return (0, r.jsxs)("div", {
        className: a()(C.kL, L),
        children: [
            (0, r.jsx)(E.A, {
                sku: t,
                user: V,
                spec: y.Z.SIZE_90,
                onClick: H,
                cardStyle: C.Ui,
                onHoverOrFocusChange: k,
                children: (0, r.jsx)(g.lQ, { sku: t, onClick: H, isHoveringOrFocusing: P }),
            }),
            !s &&
                (0, r.jsx)(f.m_, {
                    text: n === m.uS.POPULAR ? N.intl.string(N.t["DP0o+u"]) : N.intl.string(N.t["OnWY3/"]),
                    position: "top",
                    children: (0, r.jsx)("div", {
                        className: a()(C.RL, w),
                        children:
                            n === m.uS.POPULAR || 0 === B.length
                                ? (0, r.jsx)("div", {
                                      className: C.fd,
                                      children: (0, r.jsx)(u.Y3C, {
                                          size: "sm",
                                          color: "currentColor",
                                          className: C.I$,
                                      }),
                                  })
                                : (0, r.jsx)(_.I, {
                                      users: B,
                                      guildId: o ?? void 0,
                                      channelId: R ?? void 0,
                                      maxUsers: b,
                                      size: v._3.SIZE_20,
                                  }),
                    }),
                }),
        ],
    });
}
