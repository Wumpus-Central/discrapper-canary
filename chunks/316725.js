i.r(t), i.d(t, { default: () => Z });
var n = i(477900),
    l = i(582128),
    s = i(503698),
    r = i.n(s),
    a = i(834730),
    u = i(289873),
    d = i(17928),
    o = i(587895),
    c = i(429913),
    I = i(561794),
    g = i(862772),
    p = i(310209),
    h = i(174459),
    S = i(871123),
    f = i(453774),
    m = i(31969),
    x = i(435558),
    _ = i.n(x),
    T = i(52133),
    A = i(793574),
    v = i(688810),
    E = i(661492),
    C = i(212387),
    j = i(662349),
    R = i(532423),
    O = i(287809),
    k = i(403362),
    N = i(317560),
    F = i(99161),
    H = i(202541),
    b = i(699976),
    y = i(375708);
let L = b.Z.SIZE_90;
function G(e) {
    let {
            sku: t,
            source: i,
            application: s,
            guildId: r,
            showIcons: a,
            channelId: u,
            userIdsForGifting: o,
            userIdsForRecommendation: c,
            spec: g = L,
        } = e,
        [p, h] = l.useState(_().uniq(o)),
        [S, f] = l.useState(!1),
        [m, x] = l.useState(_().uniq(c)),
        { analyticsLocations: b } = (0, v.Ay)(
            A.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD,
            A.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        );
    l.useEffect(() => {
        x((e) => {
            let t = _().uniq(c);
            return (0, T.v)(e, t) ? e : t;
        });
    }, [c]),
        l.useEffect(() => {
            h((e) => {
                let t = _().uniq(o);
                return (0, T.v)(e, t) ? e : t;
            });
        }, [o]);
    let G = (0, d.bG)([O.default], () => (1 === p.length ? O.default.getUser(p[0]) : void 0), [p]),
        M = (0, d.yK)([O.default], () => m.map((e) => O.default.getUser(e)).filter(k.Vq), [m]),
        P = l.useCallback(() => {
            null != s &&
                null != s.guildId &&
                (0, N.R)({
                    skuId: t.id,
                    applicationId: t.applicationId,
                    isStorefront: !1,
                    giftRecipient: G,
                    giftingOrigin: H.vQ.SHOP_PAGE,
                    analyticsLocations: b,
                });
        }, [s, t.id, t.applicationId, G, b]),
        w = l.useCallback(() => {
            (0, F.a)(
                t,
                {
                    isGift: !0,
                    giftRecipient: G,
                    additionalUserIds: p.length > 1 ? p : void 0,
                    giftingOrigin: H.vQ.SHOP_PAGE,
                },
                { analyticsLocations: b },
            );
        }, [t, G, p, b]),
        { label: B, icon: U } = (0, j.h)({ wishlistOwner: G, isOwned: !1, shortText: !0 });
    return (0, n.jsxs)(C.A, {
        sku: t,
        user: G,
        spec: g,
        onClick: P,
        "aria-label": y.intl.formatToPlainString(y.t.ZBB4Ty, { productName: (0, E.T)(t) }),
        onHoverOrFocusChange: f,
        children: [
            (0, n.jsx)(j.A, { spec: g, onClick: w, isHoveringOrFocusing: S, label: B, icon: U }),
            a && i === I.uS.WISHLIST && M.length > 0
                ? (0, n.jsx)(R.X, { spec: g, users: M, guildId: r ?? void 0, channelId: u ?? void 0 })
                : null,
        ],
    });
}
var M = i(278416),
    P = i(683063),
    w = i(866665),
    B = i(262427),
    U = i(736033);
function W(e) {
    let {
        className: t,
        Icon: i = M.TagIcon,
        iconSize: l = "xxs",
        gradientColor: s = "green",
        text: u,
        tooltip: d,
        ...o
    } = e;
    function c() {
        return (0, n.jsx)(B.A, {
            className: r()(U.K, t, { [U.e]: null == u }),
            Icon: i,
            iconSize: l,
            gradientColor: s,
            ...o,
            children: null != u && (0, n.jsx)(a.E, { variant: "text-sm/bold", color: "currentColor", children: u }),
        });
    }
    return null != d && "object" == typeof d
        ? (0, n.jsx)(P.u, { assetSize: 48, asContainer: !0, element: "div", ...d, children: c() })
        : null != d && "string" == typeof d
          ? (0, n.jsx)(w.m, { text: d, asContainer: !0, tag: "div", children: c() })
          : c();
}
var q = i(652215),
    D = i(968069);
function Z(e) {
    let {
            className: t,
            applicationId: i,
            userIds: s,
            location: x,
            guildId: _,
            channelId: T,
            numWishlistItems: A = 2,
            cardSpec: v,
        } = e,
        E = (0, c.h)(i),
        C = (0, f.A)(E?.id),
        [j, R] = (0, d.yK)([o.A], () => [o.A.isFetchingApplication(i), o.A.didFetchingApplicationFail(i)]),
        O = null == E && !R,
        k = l.useMemo(() => (C?.id != null ? [C.id] : []), [C]),
        {
            status: N,
            recommendations: F,
            skusToUserAndReason: H,
        } = (0, g.XQ)({ applicationIds: k, numItems: A, userIds: s }),
        b = l.useMemo(() => new Set(s), [s]),
        { hasWishlist: L, hasPopular: M } = l.useMemo(() => (0, S.wH)(F, H, b), [F, H, b]),
        P = l.useMemo(() => {
            let e = L && M;
            return F.map((t) => {
                let i = Object.entries(H[t.id] ?? {})
                    .filter((e) => {
                        let [t, i] = e;
                        return i === p.j.WISHLIST && b.has(t);
                    })
                    .map((e) => {
                        let [t] = e;
                        return t;
                    });
                return (0, n.jsx)(
                    G,
                    {
                        sku: t,
                        source: i.length > 0 ? I.uS.WISHLIST : I.uS.POPULAR,
                        application: C,
                        showIcons: e,
                        guildId: _,
                        channelId: T,
                        userIdsForGifting: s,
                        userIdsForRecommendation: i,
                        spec: v,
                    },
                    t.id,
                );
            });
        }, [L, M, F, H, C, _, T, s, v, b]);
    l.useEffect(() => {
        0 !== F.length &&
            h.default.track(q.HAw.COMMERCE_SHOP_GIFTING_BREADCRUMB_VIEWED, {
                guild_id: _,
                channel_id: T,
                sku_ids: F.map((e) => e.id),
                location: x,
            });
    }, [_, T, F, x]);
    let w = (0, m.F)("storefront_badge", { applicationId: i }),
        B = "loading" === N || j || O;
    return B || 0 !== F.length
        ? (0, n.jsxs)("div", {
              className: r()(D.kL, t),
              children: [
                  (0, n.jsxs)("div", {
                      className: D.wx,
                      children: [
                          (0, n.jsx)(a.E, {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              children: L && !M ? y.intl.string(y.t["7lZ31J"]) : y.intl.string(y.t.BCi1gT),
                          }),
                          null != w && (0, n.jsx)(W, { Icon: w.Icon, text: w.text, tooltip: w.tooltip }),
                      ],
                  }),
                  (0, n.jsx)("div", {
                      className: D.ld,
                      children: B ? (0, n.jsx)(u.y, { type: u.y.Type.SPINNING_CIRCLE, className: D.u1 }) : P,
                  }),
              ],
          })
        : null;
}
