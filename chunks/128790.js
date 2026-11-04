(i.r(t), i.d(t, { default: () => Z }));
var n = i(477900),
    l = i(582128),
    s = i(503698),
    r = i.n(s),
    a = i(855986),
    u = i(834730),
    d = i(289873),
    o = i(587895),
    c = i(429913),
    I = i(634110),
    g = i(802494),
    p = i(310209),
    h = i(129230),
    f = i(871123),
    S = i(453774),
    m = i(831024),
    _ = i(435558),
    x = i.n(_),
    T = i(52133),
    A = i(793574),
    v = i(688810),
    E = i(661492),
    C = i(146423),
    j = i(662349),
    R = i(532423),
    O = i(287809),
    k = i(403362),
    b = i(317560),
    y = i(306984),
    N = i(682901),
    H = i(699976),
    F = i(792996);
let L = H.Z.SIZE_90;
function G(e) {
    let {
            sku: t,
            source: i,
            application: s,
            guildId: r,
            showIcons: u,
            channelId: d,
            userIdsForGifting: o,
            userIdsForRecommendation: c,
            spec: g = L,
        } = e,
        [p, h] = l.useState(x().uniq(o)),
        [f, S] = l.useState(!1),
        [m, _] = l.useState(x().uniq(c)),
        { analyticsLocations: H } = (0, v.Ay)(
            A.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD,
            A.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        );
    (l.useEffect(() => {
        _((e) => {
            let t = x().uniq(c);
            return (0, T.v)(e, t) ? e : t;
        });
    }, [c]),
        l.useEffect(() => {
            h((e) => {
                let t = x().uniq(o);
                return (0, T.v)(e, t) ? e : t;
            });
        }, [o]));
    let G = (0, a.bG)([O.default], () => (1 === p.length ? O.default.getUser(p[0]) : void 0), [p]),
        M = (0, a.yK)([O.default], () => m.map((e) => O.default.getUser(e)).filter(k.Vq), [m]),
        P = l.useCallback(() => {
            null != s &&
                null != s.guildId &&
                (0, b.R)({
                    skuId: t.id,
                    applicationId: t.applicationId,
                    isStorefront: !1,
                    giftRecipient: G,
                    giftingOrigin: N.vQ.SHOP_PAGE,
                    analyticsLocations: H,
                });
        }, [s, t.id, t.applicationId, G, H]),
        w = l.useCallback(() => {
            (0, y.a)(
                t,
                {
                    isGift: !0,
                    giftRecipient: G,
                    additionalUserIds: p.length > 1 ? p : void 0,
                    giftingOrigin: N.vQ.SHOP_PAGE,
                },
                { analyticsLocations: H },
            );
        }, [t, G, p, H]),
        { label: B, icon: U } = (0, j.h)({ wishlistOwner: G, isOwned: !1, shortText: !0 });
    return (0, n.jsxs)(C.A, {
        sku: t,
        user: G,
        spec: g,
        onClick: P,
        "aria-label": F.intl.formatToPlainString(F.t.ZBB4Ty, { productName: (0, E.T)(t) }),
        onHoverOrFocusChange: S,
        children: [
            (0, n.jsx)(j.A, { spec: g, onClick: w, isHoveringOrFocusing: f, label: B, icon: U }),
            u && i === I.uS.WISHLIST && M.length > 0
                ? (0, n.jsx)(R.X, { spec: g, users: M, guildId: r ?? void 0, channelId: d ?? void 0 })
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
        text: a,
        tooltip: d,
        ...o
    } = e;
    function c() {
        return (0, n.jsx)(B.A, {
            className: r()(U.K, t, { [U.e]: null == a }),
            Icon: i,
            iconSize: l,
            gradientColor: s,
            ...o,
            children: null != a && (0, n.jsx)(u.E, { variant: "body-sm/semibold", color: "currentColor", children: a }),
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
            location: _,
            guildId: x,
            channelId: T,
            numWishlistItems: A = 2,
            cardSpec: v,
        } = e,
        E = (0, c.h)(i),
        C = (0, S.A)(E?.id),
        [j, R] = (0, a.yK)([o.A], () => [o.A.isFetchingApplication(i), o.A.didFetchingApplicationFail(i)]),
        O = null == E && !R,
        k = l.useMemo(() => (C?.id != null ? [C.id] : []), [C]),
        {
            status: b,
            recommendations: y,
            skusToUserAndReason: N,
        } = (0, g.XQ)({ applicationIds: k, numItems: A, userIds: s }),
        H = l.useMemo(() => new Set(s), [s]),
        { hasWishlist: L, hasPopular: M } = l.useMemo(() => (0, f.wH)(y, N, H), [y, N, H]),
        P = l.useMemo(() => {
            let e = L && M;
            return y.map((t) => {
                let i = Object.entries(N[t.id] ?? {})
                    .filter((e) => {
                        let [t, i] = e;
                        return i === p.j.WISHLIST && H.has(t);
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
                        guildId: x,
                        channelId: T,
                        userIdsForGifting: s,
                        userIdsForRecommendation: i,
                        spec: v,
                    },
                    t.id,
                );
            });
        }, [L, M, y, N, C, x, T, s, v, H]);
    l.useEffect(() => {
        0 !== y.length &&
            h.default.track(q.HAw.COMMERCE_SHOP_GIFTING_BREADCRUMB_VIEWED, {
                guild_id: x,
                channel_id: T,
                sku_ids: y.map((e) => e.id),
                location: _,
            });
    }, [x, T, y, _]);
    let w = (0, m.u)({ surface: "storefront_badge", applicationId: i }),
        B = "loading" === b || j || O;
    return B || 0 !== y.length
        ? (0, n.jsxs)("div", {
              className: r()(D.kL, t),
              children: [
                  (0, n.jsxs)("div", {
                      className: D.wx,
                      children: [
                          (0, n.jsx)(u.E, {
                              variant: "body-xs/medium",
                              color: "text-muted",
                              children: L && !M ? F.intl.string(F.t["7lZ31J"]) : F.intl.string(F.t.BCi1gT),
                          }),
                          null != w && (0, n.jsx)(W, { Icon: w.Icon, text: w.text, tooltip: w.tooltip }),
                      ],
                  }),
                  (0, n.jsx)("div", {
                      className: D.ld,
                      children: B ? (0, n.jsx)(d.y, { type: d.y.Type.SPINNING_CIRCLE, className: D.u1 }) : P,
                  }),
              ],
          })
        : null;
}
