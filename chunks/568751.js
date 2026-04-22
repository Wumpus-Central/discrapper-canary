a.d(t, { A: () => C });
var n = a(627968),
    r = a(64700),
    i = a(735438),
    l = a.n(i),
    o = a(311907),
    s = a(52133),
    c = a(793574),
    d = a(688810),
    u = a(661492),
    _ = a(594832),
    p = a(146423),
    f = a(121700),
    h = a(662349),
    m = a(754804),
    v = a(287809),
    g = a(403362),
    A = a(317560),
    I = a(533406),
    S = a(788868),
    b = a(699976),
    E = a(985018);
let x = b.Z.SIZE_90;
function C(e) {
    let {
            sku: t,
            source: a,
            application: i,
            guildId: b,
            showIcons: C,
            channelId: T,
            userIdsForGifting: O,
            userIdsForRecommendation: R,
            spec: y = x,
        } = e,
        [w, N] = r.useState(l().uniq(O)),
        [k, L] = r.useState(!1),
        [P, U] = r.useState(l().uniq(R)),
        { analyticsLocations: F } = (0, d.Ay)(
            c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD,
            c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        );
    r.useEffect(() => {
        U((e) => {
            let t = l().uniq(R);
            return (0, s.v)(e, t) ? e : t;
        });
    }, [R]),
        r.useEffect(() => {
            N((e) => {
                let t = l().uniq(O);
                return (0, s.v)(e, t) ? e : t;
            });
        }, [O]);
    let M = (0, o.bG)([v.default], () => (1 === w.length ? v.default.getUser(w[0]) : void 0), [w]),
        H = (0, o.yK)([v.default], () => P.map((e) => v.default.getUser(e)).filter(g.Vq), [P]),
        j = r.useCallback(() => {
            null != i &&
                null != i.guildId &&
                (0, A.R)({
                    skuId: t.id,
                    applicationId: t.applicationId,
                    isStorefront: !1,
                    giftRecipient: M,
                    giftingOrigin: S.vQ.SHOP_PAGE,
                    analyticsLocations: F,
                });
        }, [i, t.id, t.applicationId, M, F]),
        B = r.useCallback(() => {
            (0, I.a)(
                t,
                {
                    isGift: !0,
                    giftRecipient: M,
                    additionalUserIds: w.length > 1 ? w : void 0,
                    giftingOrigin: S.vQ.SHOP_PAGE,
                },
                { analyticsLocations: F },
            );
        }, [t, M, w, F]),
        { label: W, icon: D } = (0, h.h)({ wishlistOwner: M, isOwned: !1, shortText: !0 });
    return (0, n.jsxs)(p.A, {
        sku: t,
        user: M,
        spec: y,
        onClick: j,
        "aria-label": E.intl.formatToPlainString(E.t.ZBB4Ty, { productName: (0, u.TC)(t) }),
        onHoverOrFocusChange: L,
        children: [
            (0, n.jsx)(h.A, { spec: y, onClick: B, isHoveringOrFocusing: k, label: W, icon: D }),
            (0, n.jsx)(f.A, {
                spec: y,
                sku: t,
                isCardHovered: k,
                location: "ContextualSocialLayerSkuItemCard",
                replacedElement:
                    C && a === _.uS.WISHLIST && H.length > 0
                        ? (0, n.jsx)(m.X, { spec: y, users: H, guildId: b ?? void 0, channelId: T ?? void 0 })
                        : null,
            }),
        ],
    });
}
