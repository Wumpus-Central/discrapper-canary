"use strict";
n.d(t, { A: () => T });
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
    f = n(662349),
    p = n(754804),
    h = n(287809),
    m = n(403362),
    E = n(317560),
    g = n(533406),
    A = n(788868);
let I = n(699976).Z.SIZE_90;
function T(e) {
    let {
            sku: t,
            source: n,
            application: s,
            guildId: T,
            showIcons: S,
            channelId: y,
            userIdsForGifting: v,
            userIdsForRecommendation: N,
            spec: C = I,
        } = e,
        [R, O] = i.useState(a().uniq(v)),
        [b, D] = i.useState(!1),
        [L, w] = i.useState(a().uniq(N)),
        { analyticsLocations: M } = (0, c.Ay)(
            u.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD,
            u.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        );
    i.useEffect(() => {
        w((e) => {
            let t = a().uniq(N);
            return (0, l.v)(e, t) ? e : t;
        });
    }, [N]),
        i.useEffect(() => {
            O((e) => {
                let t = a().uniq(v);
                return (0, l.v)(e, t) ? e : t;
            });
        }, [v]);
    let x = (0, o.bG)([h.default], () => (1 === R.length ? h.default.getUser(R[0]) : void 0), [R]),
        P = (0, o.yK)([h.default], () => L.map((e) => h.default.getUser(e)).filter(m.Vq), [L]),
        k = i.useCallback(() => {
            null != s &&
                null != s.guildId &&
                (0, E.R)({
                    skuId: t.id,
                    applicationId: t.applicationId,
                    guildId: s.guildId,
                    isStorefront: !1,
                    analyticsLocations: M,
                });
        }, [t.id, t.applicationId, s, M]),
        U = i.useCallback(() => {
            (0, g.a)(
                t,
                {
                    isGift: !0,
                    giftRecipient: x,
                    additionalUserIds: R.length > 1 ? R : void 0,
                    giftingOrigin: A.vQ.SHOP_PAGE,
                },
                { analyticsLocations: M },
            );
        }, [t, x, R, M]);
    return (0, r.jsxs)(_.A, {
        sku: t,
        user: x,
        spec: C,
        onClick: k,
        onHoverOrFocusChange: D,
        children: [
            (0, r.jsx)(f.lQ, { sku: t, spec: C, onClick: U, isHoveringOrFocusing: b }),
            S &&
                n === d.uS.WISHLIST &&
                P.length > 0 &&
                (0, r.jsx)(p.X, { spec: C, users: P, guildId: T ?? void 0, channelId: y ?? void 0 }),
        ],
    });
}
