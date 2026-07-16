n.r(t), n.d(t, { default: () => D });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(834730),
    u = n(289873),
    d = n(429913),
    o = n(561794),
    c = n(862772),
    I = n(310209),
    g = n(174459),
    p = n(871123),
    h = n(453774),
    S = n(31969),
    f = n(435558),
    m = n.n(f),
    x = n(17928),
    _ = n(52133),
    T = n(793574),
    v = n(688810),
    E = n(661492),
    C = n(212387),
    j = n(662349),
    R = n(532423),
    A = n(287809),
    O = n(403362),
    k = n(317560),
    N = n(99161),
    H = n(202541),
    b = n(699976),
    L = n(375708);
let y = b.Z.SIZE_90;
function F(e) {
    let {
            sku: t,
            source: n,
            application: s,
            guildId: r,
            showIcons: a,
            channelId: u,
            userIdsForGifting: d,
            userIdsForRecommendation: c,
            spec: I = y,
        } = e,
        [g, p] = l.useState(m().uniq(d)),
        [h, S] = l.useState(!1),
        [f, b] = l.useState(m().uniq(c)),
        { analyticsLocations: F } = (0, v.Ay)(
            T.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD,
            T.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        );
    l.useEffect(() => {
        b((e) => {
            let t = m().uniq(c);
            return (0, _.v)(e, t) ? e : t;
        });
    }, [c]),
        l.useEffect(() => {
            p((e) => {
                let t = m().uniq(d);
                return (0, _.v)(e, t) ? e : t;
            });
        }, [d]);
    let G = (0, x.bG)([A.default], () => (1 === g.length ? A.default.getUser(g[0]) : void 0), [g]),
        M = (0, x.yK)([A.default], () => f.map((e) => A.default.getUser(e)).filter(O.Vq), [f]),
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
    return (0, i.jsxs)(C.A, {
        sku: t,
        user: G,
        spec: I,
        onClick: P,
        "aria-label": L.intl.formatToPlainString(L.t.ZBB4Ty, { productName: (0, E.T)(t) }),
        onHoverOrFocusChange: S,
        children: [
            (0, i.jsx)(j.A, { spec: I, onClick: w, isHoveringOrFocusing: h, label: B, icon: U }),
            a && n === o.uS.WISHLIST && M.length > 0
                ? (0, i.jsx)(R.X, { spec: I, users: M, guildId: r ?? void 0, channelId: u ?? void 0 })
                : null,
        ],
    });
}
var G = n(278416),
    M = n(459192),
    P = n(866665),
    w = n(262427),
    B = n(500524);
function U(e) {
    let { className: t, Icon: n = G.g, iconSize: l = "xxs", gradientColor: s = "green", text: u, tooltip: d, ...o } = e;
    function c() {
        return (0, i.jsx)(w.A, {
            className: r()(B.K, t, { [B.e]: null == u }),
            Icon: n,
            iconSize: l,
            gradientColor: s,
            ...o,
            children: null != u && (0, i.jsx)(a.E, { variant: "text-sm/bold", color: "currentColor", children: u }),
        });
    }
    return null != d && "object" == typeof d
        ? (0, i.jsx)(M.u, { assetSize: 48, asContainer: !0, element: "div", ...d, children: c() })
        : null != d && "string" == typeof d
          ? (0, i.jsx)(P.m, { text: d, asContainer: !0, tag: "div", children: c() })
          : c();
}
var W = n(652215),
    q = n(499362);
function D(e) {
    let {
            className: t,
            applicationId: n,
            userIds: s,
            location: f,
            guildId: m,
            channelId: x,
            numWishlistItems: _ = 2,
            cardSpec: T,
        } = e,
        v = (0, d.h)(n),
        E = (0, h.A)(v?.id),
        C = l.useMemo(() => (E?.id != null ? [E.id] : []), [E]),
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
                let n = Object.entries(A[t.id] ?? {})
                    .filter((e) => {
                        let [t, n] = e;
                        return n === I.j.WISHLIST && O.has(t);
                    })
                    .map((e) => {
                        let [t] = e;
                        return t;
                    });
                return (0, i.jsx)(
                    F,
                    {
                        sku: t,
                        source: n.length > 0 ? o.uS.WISHLIST : o.uS.POPULAR,
                        application: E,
                        showIcons: e,
                        guildId: m,
                        channelId: x,
                        userIdsForGifting: s,
                        userIdsForRecommendation: n,
                        spec: T,
                    },
                    t.id,
                );
            });
        }, [k, N, R, A, E, m, x, s, T, O]);
    l.useEffect(() => {
        0 !== R.length &&
            g.default.track(W.HAw.COMMERCE_SHOP_GIFTING_BREADCRUMB_VIEWED, {
                guild_id: m,
                channel_id: x,
                sku_ids: R.map((e) => e.id),
                location: f,
            });
    }, [m, x, R, f]);
    let b = (0, S.F)("storefront_badge", { applicationId: n }),
        y = "loading" === j || 0 === R.length;
    return "error" === j && 0 === R.length
        ? null
        : (0, i.jsxs)("div", {
              className: r()(q.kL, t),
              children: [
                  (0, i.jsxs)("div", {
                      className: q.wx,
                      children: [
                          (0, i.jsx)(a.E, {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              children: k && !N ? L.intl.string(L.t["7lZ31J"]) : L.intl.string(L.t.BCi1gT),
                          }),
                          null != b && (0, i.jsx)(U, { Icon: b.Icon, text: b.text, tooltip: b.tooltip }),
                      ],
                  }),
                  (0, i.jsx)("div", {
                      className: q.ld,
                      children: y ? (0, i.jsx)(u.y, { type: u.y.Type.SPINNING_CIRCLE, className: q.u1 }) : H,
                  }),
              ],
          });
}
