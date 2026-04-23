a.d(t, { A: () => S });
var i = a(627968),
    n = a(64700),
    r = a(735438),
    l = a.n(r),
    s = a(311907),
    o = a(52133),
    _ = a(793574),
    d = a(688810),
    c = a(661492),
    u = a(594832),
    m = a(146423),
    p = a(121700),
    f = a(662349),
    h = a(754804),
    v = a(287809),
    g = a(403362),
    I = a(317560),
    x = a(533406),
    b = a(788868),
    w = a(699976),
    C = a(985018);
let A = w.Z.SIZE_90;
function S(e) {
    let {
            sku: t,
            source: a,
            application: r,
            guildId: w,
            showIcons: S,
            channelId: T,
            userIdsForGifting: y,
            userIdsForRecommendation: E,
            spec: P = A,
        } = e,
        [L, j] = n.useState(l().uniq(y)),
        [k, M] = n.useState(!1),
        [N, R] = n.useState(l().uniq(E)),
        { analyticsLocations: O } = (0, d.Ay)(
            _.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD,
            _.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        );
    n.useEffect(() => {
        R((e) => {
            let t = l().uniq(E);
            return (0, o.v)(e, t) ? e : t;
        });
    }, [E]),
        n.useEffect(() => {
            j((e) => {
                let t = l().uniq(y);
                return (0, o.v)(e, t) ? e : t;
            });
        }, [y]);
    let H = (0, s.bG)([v.default], () => (1 === L.length ? v.default.getUser(L[0]) : void 0), [L]),
        U = (0, s.yK)([v.default], () => N.map((e) => v.default.getUser(e)).filter(g.Vq), [N]),
        B = n.useCallback(() => {
            null != r &&
                null != r.guildId &&
                (0, I.R)({
                    skuId: t.id,
                    applicationId: t.applicationId,
                    isStorefront: !1,
                    giftRecipient: H,
                    giftingOrigin: b.vQ.SHOP_PAGE,
                    analyticsLocations: O,
                });
        }, [r, t.id, t.applicationId, H, O]),
        F = n.useCallback(() => {
            (0, x.a)(
                t,
                {
                    isGift: !0,
                    giftRecipient: H,
                    additionalUserIds: L.length > 1 ? L : void 0,
                    giftingOrigin: b.vQ.SHOP_PAGE,
                },
                { analyticsLocations: O },
            );
        }, [t, H, L, O]),
        { label: G, icon: D } = (0, f.h)({ wishlistOwner: H, isOwned: !1, shortText: !0 });
    return (0, i.jsxs)(m.A, {
        sku: t,
        user: H,
        spec: P,
        onClick: B,
        "aria-label": C.intl.formatToPlainString(C.t.ZBB4Ty, { productName: (0, c.TC)(t) }),
        onHoverOrFocusChange: M,
        children: [
            (0, i.jsx)(f.A, { spec: P, onClick: F, isHoveringOrFocusing: k, label: G, icon: D }),
            (0, i.jsx)(p.A, {
                spec: P,
                sku: t,
                isCardHovered: k,
                location: "ContextualSocialLayerSkuItemCard",
                replacedElement:
                    S && a === u.uS.WISHLIST && U.length > 0
                        ? (0, i.jsx)(h.X, { spec: P, users: U, guildId: w ?? void 0, channelId: T ?? void 0 })
                        : null,
            }),
        ],
    });
}
