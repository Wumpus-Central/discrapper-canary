i.r(t), i.d(t, { default: () => D });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    r = i.n(s),
    u = i(834730),
    a = i(289873),
    d = i(429913),
    o = i(561794),
    c = i(862772),
    I = i(310209),
    g = i(174459),
    p = i(871123),
    h = i(453774),
    S = i(31969),
    f = i(735438),
    x = i.n(f),
    m = i(17928),
    _ = i(52133),
    T = i(793574),
    E = i(688810),
    v = i(661492),
    C = i(212387),
    j = i(662349),
    R = i(532423),
    A = i(287809),
    O = i(403362),
    k = i(317560),
    N = i(533406),
    H = i(788868),
    b = i(699976),
    L = i(375708);
let y = b.Z.SIZE_90;
function F(e) {
    let {
            sku: t,
            source: i,
            application: s,
            guildId: r,
            showIcons: u,
            channelId: a,
            userIdsForGifting: d,
            userIdsForRecommendation: c,
            spec: I = y,
        } = e,
        [g, p] = l.useState(x().uniq(d)),
        [h, S] = l.useState(!1),
        [f, b] = l.useState(x().uniq(c)),
        { analyticsLocations: F } = (0, E.Ay)(
            T.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD,
            T.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        );
    l.useEffect(() => {
        b((e) => {
            let t = x().uniq(c);
            return (0, _.v)(e, t) ? e : t;
        });
    }, [c]),
        l.useEffect(() => {
            p((e) => {
                let t = x().uniq(d);
                return (0, _.v)(e, t) ? e : t;
            });
        }, [d]);
    let G = (0, m.bG)([A.default], () => (1 === g.length ? A.default.getUser(g[0]) : void 0), [g]),
        M = (0, m.yK)([A.default], () => f.map((e) => A.default.getUser(e)).filter(O.Vq), [f]),
        P = l.useCallback(() => {
            null != s &&
                null != s.guildId &&
                (0, k.R)({
                    skuId: t.id,
                    applicationId: t.applicationId,
                    isStorefront: !1,
                    giftRecipient: G,
                    giftingOrigin: H.vQ.SHOP_PAGE,
                    analyticsLocations: F,
                });
        }, [s, t.id, t.applicationId, G, F]),
        w = l.useCallback(() => {
            (0, N.a)(
                t,
                {
                    isGift: !0,
                    giftRecipient: G,
                    additionalUserIds: g.length > 1 ? g : void 0,
                    giftingOrigin: H.vQ.SHOP_PAGE,
                },
                { analyticsLocations: F },
            );
        }, [t, G, g, F]),
        { label: B, icon: U } = (0, j.h)({ wishlistOwner: G, isOwned: !1, shortText: !0 });
    return (0, n.jsxs)(C.A, {
        sku: t,
        user: G,
        spec: I,
        onClick: P,
        "aria-label": L.intl.formatToPlainString(L.t.ZBB4Ty, { productName: (0, v.TC)(t) }),
        onHoverOrFocusChange: S,
        children: [
            (0, n.jsx)(j.A, { spec: I, onClick: w, isHoveringOrFocusing: h, label: B, icon: U }),
            u && i === o.uS.WISHLIST && M.length > 0
                ? (0, n.jsx)(R.X, { spec: I, users: M, guildId: r ?? void 0, channelId: a ?? void 0 })
                : null,
        ],
    });
}
var G = i(278416),
    M = i(459192),
    P = i(990078),
    w = i(262427),
    B = i(500524);
function U(e) {
    let { className: t, Icon: i = G.g, iconSize: l = "xxs", gradientColor: s = "green", text: a, tooltip: d, ...o } = e,
        c = () =>
            (0, n.jsx)(w.A, {
                className: r()(B.K, t, { [B.e]: null == a }),
                Icon: i,
                iconSize: l,
                gradientColor: s,
                ...o,
                children: null != a && (0, n.jsx)(u.E, { variant: "text-sm/bold", color: "currentColor", children: a }),
            });
    return null != d && "object" == typeof d
        ? (0, n.jsx)(M.u, { assetSize: 48, ...d, children: c() })
        : null != d && "string" == typeof d
          ? (0, n.jsx)(P.m, { text: d, children: c() })
          : c();
}
var W = i(652215),
    q = i(499362);
function D(e) {
    let {
            className: t,
            applicationId: i,
            userIds: s,
            location: f,
            guildId: x,
            channelId: m,
            numWishlistItems: _ = 2,
            cardSpec: T,
        } = e,
        E = (0, d.h)(i),
        v = (0, h.A)(E?.id),
        C = l.useMemo(() => (v?.id != null ? [v.id] : []), [v]),
        {
            status: j,
            recommendations: R,
            skusToUserAndReason: A,
        } = (0, c.XQ)({ applicationIds: C, numItems: _, userIds: s }),
        O = l.useMemo(() => new Set(s), [s]),
        { hasWishlist: k, hasPopular: N } = l.useMemo(() => (0, p.wH)(R, A, O), [R, A, O]),
        H = l.useMemo(() => {
            let e = k && N;
            return R.map((t) => {
                let i = Object.entries(A[t.id] ?? {})
                    .filter((e) => {
                        let [t, i] = e;
                        return i === I.j.WISHLIST && O.has(t);
                    })
                    .map((e) => {
                        let [t] = e;
                        return t;
                    });
                return (0, n.jsx)(
                    F,
                    {
                        sku: t,
                        source: i.length > 0 ? o.uS.WISHLIST : o.uS.POPULAR,
                        application: v,
                        showIcons: e,
                        guildId: x,
                        channelId: m,
                        userIdsForGifting: s,
                        userIdsForRecommendation: i,
                        spec: T,
                    },
                    t.id,
                );
            });
        }, [k, N, R, A, v, x, m, s, T, O]);
    l.useEffect(() => {
        0 !== R.length &&
            g.default.track(W.HAw.COMMERCE_SHOP_GIFTING_BREADCRUMB_VIEWED, {
                guild_id: x,
                channel_id: m,
                sku_ids: R.map((e) => e.id),
                location: f,
            });
    }, [x, m, R, f]);
    let b = (0, S.F)("storefront_badge", { applicationId: i }),
        y = "loading" === j || 0 === R.length;
    return "error" === j && 0 === R.length
        ? null
        : (0, n.jsxs)("div", {
              className: r()(q.kL, t),
              children: [
                  (0, n.jsxs)("div", {
                      className: q.wx,
                      children: [
                          (0, n.jsx)(u.E, {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              children: k && !N ? L.intl.string(L.t["7lZ31J"]) : L.intl.string(L.t.BCi1gT),
                          }),
                          null != b && (0, n.jsx)(U, { Icon: b.Icon, text: b.text, tooltip: b.tooltip }),
                      ],
                  }),
                  (0, n.jsx)("div", {
                      className: q.ld,
                      children: y ? (0, n.jsx)(a.y, { type: a.y.Type.SPINNING_CIRCLE, className: q.u1 }) : H,
                  }),
              ],
          });
}
