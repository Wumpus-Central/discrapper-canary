"use strict";
n.d(t, { A: () => N });
var r = n(627968),
    i = n(64700),
    s = n(735438),
    a = n.n(s),
    o = n(311907),
    l = n(52133),
    u = n(793574),
    c = n(688810),
    d = n(661492),
    _ = n(594832),
    f = n(146423),
    p = n(121700),
    h = n(662349),
    m = n(754804),
    E = n(287809),
    g = n(403362),
    A = n(317560),
    I = n(533406),
    T = n(788868),
    S = n(699976),
    y = n(985018);
let v = S.Z.SIZE_90;
function N(e) {
    let {
            sku: t,
            source: n,
            application: s,
            guildId: S,
            showIcons: N,
            channelId: C,
            userIdsForGifting: R,
            userIdsForRecommendation: O,
            spec: b = v,
        } = e,
        [D, L] = i.useState(a().uniq(R)),
        [w, M] = i.useState(!1),
        [x, P] = i.useState(a().uniq(O)),
        { analyticsLocations: k } = (0, c.Ay)(
            u.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD,
            u.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        );
    i.useEffect(() => {
        P((e) => {
            let t = a().uniq(O);
            return (0, l.v)(e, t) ? e : t;
        });
    }, [O]),
        i.useEffect(() => {
            L((e) => {
                let t = a().uniq(R);
                return (0, l.v)(e, t) ? e : t;
            });
        }, [R]);
    let U = (0, o.bG)([E.default], () => (1 === D.length ? E.default.getUser(D[0]) : void 0), [D]),
        G = (0, o.yK)([E.default], () => x.map((e) => E.default.getUser(e)).filter(g.Vq), [x]),
        F = i.useCallback(() => {
            null != s &&
                null != s.guildId &&
                (0, A.R)({
                    skuId: t.id,
                    applicationId: t.applicationId,
                    guildId: s.guildId,
                    isStorefront: !1,
                    giftRecipient: U,
                    giftingOrigin: T.vQ.SHOP_PAGE,
                    analyticsLocations: k,
                });
        }, [s, t.id, t.applicationId, U, k]),
        V = i.useCallback(() => {
            (0, I.a)(
                t,
                {
                    isGift: !0,
                    giftRecipient: U,
                    additionalUserIds: D.length > 1 ? D : void 0,
                    giftingOrigin: T.vQ.SHOP_PAGE,
                },
                { analyticsLocations: k },
            );
        }, [t, U, D, k]),
        { label: B, icon: H } = (0, h.h)({
            sku: t,
            wishlistOwner: U,
            isOwned: !1,
            shortText: !0,
            location: "Contextual Social Layer Sku Item Card",
        });
    return (0, r.jsxs)(f.A, {
        sku: t,
        user: U,
        spec: b,
        onClick: F,
        "aria-label": y.intl.formatToPlainString(y.t.ZBB4Ty, { productName: (0, d.TC)(t) }),
        onHoverOrFocusChange: M,
        children: [
            (0, r.jsx)(h.A, { spec: b, onClick: V, isHoveringOrFocusing: w, label: B, icon: H }),
            (0, r.jsx)(p.A, {
                spec: b,
                sku: t,
                isCardHovered: w,
                location: "ContextualSocialLayerSkuItemCard",
                replacedElement:
                    N && n === _.uS.WISHLIST && G.length > 0
                        ? (0, r.jsx)(m.X, { spec: b, users: G, guildId: S ?? void 0, channelId: C ?? void 0 })
                        : null,
            }),
        ],
    });
}
