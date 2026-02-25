"use strict";
n.d(t, { A: () => C });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(311907),
    c = n(52133),
    d = n(793574),
    _ = n(688810),
    f = n(594832),
    p = n(146423),
    h = n(662349),
    m = n(754804),
    E = n(287809),
    g = n(403362),
    A = n(533406),
    I = n(788868),
    T = n(699976),
    S = n(985018),
    y = n(859457);
let v = 3,
    N = T.Z.SIZE_90;
function C(e) {
    let {
            sku: t,
            source: n,
            hideIcon: s,
            guildId: o,
            channelId: T,
            userIdsForGifting: C,
            userIdsForRecommendation: b,
            style: R,
        } = e,
        [O, D] = i.useState(l().uniq(C)),
        [L, w] = i.useState(!1),
        [x, M] = i.useState(l().uniq(b)),
        { analyticsLocations: P } = (0, _.Ay)(
            d.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD,
            d.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        );
    i.useEffect(() => {
        M((e) => {
            let t = l().uniq(b);
            return (0, c.v)(e, t) ? e : t;
        });
    }, [b]),
        i.useEffect(() => {
            D((e) => {
                let t = l().uniq(C);
                return (0, c.v)(e, t) ? e : t;
            });
        }, [C]);
    let k = (0, u.bG)([E.default], () => (1 === O.length ? E.default.getUser(O[0]) : void 0), [O]),
        U = (0, u.yK)([E.default], () => x.map((e) => E.default.getUser(e)).filter(g.Vq), [x]),
        G = i.useCallback(() => {
            (0, A.a)(
                t,
                {
                    isGift: !0,
                    giftRecipient: k,
                    additionalUserIds: O.length > 1 ? O : void 0,
                    giftingOrigin: I.vQ.SHOP_PAGE,
                },
                { analyticsLocations: P },
            );
        }, [t, k, O, P]);
    return (0, r.jsxs)("div", {
        className: a()(y.k, R),
        children: [
            (0, r.jsx)(p.A, {
                sku: t,
                user: k,
                spec: N,
                onClick: G,
                cardStyle: y.U,
                onHoverOrFocusChange: w,
                children: (0, r.jsx)(h.lQ, { sku: t, spec: N, onClick: G, isHoveringOrFocusing: L }),
            }),
            !s &&
                (n === f.uS.POPULAR
                    ? (0, r.jsx)(m.oX, { spec: N, tooltipText: S.intl.string(S.t["DP0o+u"]) })
                    : U.length > 0
                      ? (0, r.jsx)(m.Xd, {
                            spec: N,
                            tooltipText: S.intl.string(S.t["OnWY3/"]),
                            users: U,
                            guildId: o ?? void 0,
                            channelId: T ?? void 0,
                            maxUsers: v,
                        })
                      : null),
        ],
    });
}
