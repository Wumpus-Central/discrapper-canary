"use strict";
n.d(t, { A: () => b });
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
    A = n(317560),
    I = n(533406),
    T = n(788868),
    S = n(699976),
    y = n(985018),
    v = n(526295);
let N = 3,
    C = S.Z.SIZE_90;
function b(e) {
    let {
            sku: t,
            source: n,
            application: s,
            guildId: o,
            showIcons: S,
            channelId: b,
            userIdsForGifting: R,
            userIdsForRecommendation: O,
            style: D,
        } = e,
        [L, w] = i.useState(l().uniq(R)),
        [x, M] = i.useState(!1),
        [P, k] = i.useState(l().uniq(O)),
        { analyticsLocations: U } = (0, _.Ay)(
            d.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD,
            d.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        );
    i.useEffect(() => {
        k((e) => {
            let t = l().uniq(O);
            return (0, c.v)(e, t) ? e : t;
        });
    }, [O]),
        i.useEffect(() => {
            w((e) => {
                let t = l().uniq(R);
                return (0, c.v)(e, t) ? e : t;
            });
        }, [R]);
    let G = (0, u.bG)([E.default], () => (1 === L.length ? E.default.getUser(L[0]) : void 0), [L]),
        F = (0, u.yK)([E.default], () => P.map((e) => E.default.getUser(e)).filter(g.Vq), [P]),
        V = i.useCallback(() => {
            null != s &&
                null != s.guildId &&
                (0, A.R)({
                    skuId: t.id,
                    applicationId: t.applicationId,
                    guildId: s.guildId,
                    isStorefront: !1,
                    analyticsLocations: U,
                });
        }, [t.id, t.applicationId, s, U]),
        B = i.useCallback(() => {
            (0, I.a)(
                t,
                {
                    isGift: !0,
                    giftRecipient: G,
                    additionalUserIds: L.length > 1 ? L : void 0,
                    giftingOrigin: T.vQ.SHOP_PAGE,
                },
                { analyticsLocations: U },
            );
        }, [t, G, L, U]);
    return (0, r.jsxs)("div", {
        className: a()(v.k, D),
        children: [
            (0, r.jsx)(p.A, {
                sku: t,
                user: G,
                spec: C,
                onClick: V,
                cardStyle: v.U,
                onHoverOrFocusChange: M,
                children: (0, r.jsx)(h.lQ, { sku: t, spec: C, onClick: B, isHoveringOrFocusing: x }),
            }),
            S &&
                n === f.uS.WISHLIST &&
                F.length > 0 &&
                (0, r.jsx)(m.Xd, {
                    spec: C,
                    tooltipText: y.intl.string(y.t["OnWY3/"]),
                    users: F,
                    guildId: o ?? void 0,
                    channelId: b ?? void 0,
                    maxUsers: N,
                }),
        ],
    });
}
