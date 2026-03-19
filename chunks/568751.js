"use strict";
n.d(t, { A: () => S });
var r = n(627968),
    i = n(64700),
    s = n(735438),
    a = n.n(s),
    o = n(311907),
    l = n(52133),
    u = n(793574),
    c = n(688810),
    d = n(594832),
    _ = n(146423),
    f = n(121700),
    p = n(662349),
    h = n(754804),
    m = n(287809),
    E = n(403362),
    g = n(317560),
    A = n(533406),
    I = n(788868);
let T = n(699976).Z.SIZE_90;
function S(e) {
    let {
            sku: t,
            source: n,
            application: s,
            guildId: S,
            showIcons: y,
            channelId: v,
            userIdsForGifting: N,
            userIdsForRecommendation: C,
            spec: R = T,
        } = e,
        [O, b] = i.useState(a().uniq(N)),
        [D, L] = i.useState(!1),
        [w, M] = i.useState(a().uniq(C)),
        { analyticsLocations: x } = (0, c.Ay)(
            u.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD,
            u.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        );
    i.useEffect(() => {
        M((e) => {
            let t = a().uniq(C);
            return (0, l.v)(e, t) ? e : t;
        });
    }, [C]),
        i.useEffect(() => {
            b((e) => {
                let t = a().uniq(N);
                return (0, l.v)(e, t) ? e : t;
            });
        }, [N]);
    let P = (0, o.bG)([m.default], () => (1 === O.length ? m.default.getUser(O[0]) : void 0), [O]),
        k = (0, o.yK)([m.default], () => w.map((e) => m.default.getUser(e)).filter(E.Vq), [w]),
        U = i.useCallback(() => {
            null != s &&
                null != s.guildId &&
                (0, g.R)({
                    skuId: t.id,
                    applicationId: t.applicationId,
                    guildId: s.guildId,
                    isStorefront: !1,
                    analyticsLocations: x,
                });
        }, [t.id, t.applicationId, s, x]),
        G = i.useCallback(() => {
            (0, A.a)(
                t,
                {
                    isGift: !0,
                    giftRecipient: P,
                    additionalUserIds: O.length > 1 ? O : void 0,
                    giftingOrigin: I.vQ.SHOP_PAGE,
                },
                { analyticsLocations: x },
            );
        }, [t, P, O, x]),
        { label: F, icon: V } = (0, p.h)({
            sku: t,
            wishlistOwner: P,
            isOwned: !1,
            shortText: !0,
            location: "Contextual Social Layer Sku Item Card",
        });
    return (0, r.jsxs)(_.A, {
        sku: t,
        user: P,
        spec: R,
        onClick: U,
        onHoverOrFocusChange: L,
        children: [
            (0, r.jsx)(p.A, { spec: R, onClick: G, isHoveringOrFocusing: D, label: F, icon: V }),
            y &&
                n === d.uS.WISHLIST &&
                k.length > 0 &&
                (0, r.jsx)(h.X, { spec: R, users: k, guildId: S ?? void 0, channelId: v ?? void 0 }),
            (0, r.jsx)(f.A, { spec: R, sku: t, isCardHovered: D, location: "ContextualSocialLayerSkuItemCard" }),
        ],
    });
}
