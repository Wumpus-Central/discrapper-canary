s.d(t, { default: () => el });
var i,
    r = s(627968),
    a = s(64700),
    n = s(17928),
    l = s(821609),
    u = s(935462),
    o = s(534514),
    c = s(289873),
    d = s(793574),
    m = s(688810),
    h = s(571827),
    p = s(725807),
    g = s(919395),
    A = s(352413),
    v = s(696451),
    x = s(287809),
    I = s(174459),
    j = s(428262),
    S = s(859040),
    k = s(993408),
    C = s(821701),
    y = s(841702),
    N = s(727170),
    _ = s(503698),
    E = s.n(_),
    D = s(778712),
    f = s(290863),
    b = s(448429),
    T = s(162232),
    O = s(375708),
    R = s(304452);
let w = [
        { avatarSize: D._3.SIZE_40, showStatus: !1 },
        { avatarSize: D._3.SIZE_32, showStatus: !1 },
        { avatarSize: D._3.SIZE_40, showStatus: !0 },
        { avatarSize: D._3.SIZE_32, showStatus: !0 },
    ],
    P = (e) => {
        let { user: t, guildId: s, avatarDecoration: i, decorationName: a, className: l } = e,
            u = (0, n.bG)([f.A], () => f.A.getStatus(t.id));
        return (0, r.jsxs)("div", {
            className: E()(R.kk, l),
            children: [
                (0, r.jsxs)("div", {
                    className: R.$M,
                    children: [
                        (0, r.jsx)("div", {
                            className: R.TB,
                            children: (0, r.jsx)(T.A, {
                                user: t,
                                guildId: s,
                                avatarDecorationOverride: i,
                                decorationName: a,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: R.Kh,
                            children: w.map((e) => {
                                let { avatarSize: a, showStatus: n } = e;
                                return (0, r.jsx)(
                                    "div",
                                    {
                                        className: R.CX,
                                        children: (0, r.jsx)(T.A, {
                                            user: t,
                                            guildId: s,
                                            avatarSize: a,
                                            avatarDecorationOverride: i,
                                            status: n ? u : void 0,
                                            "aria-hidden": !0,
                                        }),
                                    },
                                    `${a}${n}`,
                                );
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(b.A, {
                    user: t,
                    previewSkuId: i?.skuId,
                    nitroChurnCTA: O.intl.string(O.t["7vkeu5"]),
                    nitroJoinCTA: O.intl.string(O.t.q0PlFn),
                }),
            ],
        });
    };
var M = s(939249),
    z = s(428678),
    H = s(834730),
    U = s(34188),
    G = s(92008),
    V = s(713517),
    K = s(898461),
    L = s(483968),
    $ = s(821956);
s(321073);
var J = s(702841),
    Z = s(590180),
    X = s(4227),
    q = (((i = {}).PURCHASE = "purchase"), (i.PREMIUM_PURCHASE = "premium_purchase"), (i.PREVIEW = "preview"), i);
let F = { skuId: "None" },
    W = { skuId: "Shop" };
var B = s(963977),
    Y = s(510245);
let Q = () => 80,
    ee = (e) => {
        let { children: t, className: s, onSelect: i, isSelected: a, ...n } = e;
        return (0, r.jsx)(M.D, {
            "aria-pressed": a,
            className: E()(Y.eA, a ? Y.wH : void 0, s),
            ...n,
            onClick: i,
            children: t,
        });
    },
    et = (e) => {
        let {
                user: t,
                avatarDecoration: s,
                innerRef: i,
                section: n,
                canUsePremiumCollectibles: l,
                isSelected: u = !1,
                ...o
            } = e,
            c = a.useRef(null),
            { isHoveringOrFocusing: d } = (0, V.A)(i ?? c),
            { avatarDecorationSrc: m } = (0, B.A)({
                user: t,
                avatarDecorationOverride: s,
                size: 80,
                onlyAnimateOnHoverOrFocus: !d,
            });
        return (0, r.jsxs)(ee, {
            innerRef: i ?? c,
            isSelected: u,
            ...o,
            children: [
                null != m && (0, r.jsx)("img", { className: Y.Pw, src: m, alt: s.label }),
                (0, r.jsx)(L.A, {
                    skuId: s.skuId,
                    canUsePremiumCollectibles: l,
                    isPurchaseSection: n === q.PURCHASE,
                    isPremiumSection: n === q.PREMIUM_PURCHASE,
                }),
            ],
        });
    },
    es = (e) => {
        let {
                user: t,
                guild: s,
                pendingAvatarDecoration: i,
                selectedAvatarDecorationRef: n,
                onSelect: l,
                onOpenShop: u,
            } = e,
            c = (() => {
                let e = (0, J.bG)([X.A], () => X.A.purchases),
                    [t, s] = (0, J.yK)([Z.A], () => [Z.A.categories, Z.A.products]);
                return (0, a.useMemo)(() => {
                    let i = (0, k.ps)(e, t).reduce(
                        (t, i) => {
                            let r = e.get(i.skuId);
                            return (
                                (null != r ? (0, k.gA)(r) : (0, k.G0)(s.get(i.skuId)))
                                    ? t.premium_purchase.push(i)
                                    : null != r
                                      ? t.purchase.push(i)
                                      : t.preview.push(i),
                                t
                            );
                        },
                        { purchase: [], premium_purchase: [], preview: [] },
                    );
                    return [
                        {
                            section: "purchase",
                            items: [F, W, ...i.purchase],
                            height: 12,
                            header: O.intl.string(O.t.VqmVqE),
                        },
                        {
                            section: "premium_purchase",
                            items: i.premium_purchase,
                            height: 12,
                            header: O.intl.string(O.t.TiLCgw),
                        },
                        { section: "preview", items: i.preview, height: 12, header: O.intl.string(O.t["1vbbee"]) },
                    ].filter((e) => {
                        let { items: t } = e;
                        return t.length > 0;
                    });
                }, [t, s, e]);
            })(),
            d = j.Ay.canUseCollectibles(t);
        return (0, r.jsx)(G.f, {
            fade: !0,
            className: Y.p_,
            columns: 3,
            sections: c.map((e) => {
                let { items: t } = e;
                return t.length;
            }),
            sectionGutter: 16,
            itemGutter: 12,
            paddingHorizontal: 12,
            paddingVertical: 0,
            removeEdgeItemGutters: !0,
            renderItem: (e, a, o, m) => {
                let { section: h, items: p } = c[e],
                    g = p[a];
                if (g === F)
                    return (0, r.jsxs)(
                        ee,
                        {
                            style: { ...o },
                            isSelected: null === i,
                            onSelect: () => l(null),
                            children: [
                                (0, r.jsx)(z.K, { size: "md", color: "currentColor", className: Y.Kk }),
                                (0, r.jsx)(H.E, {
                                    variant: "text-xs/normal",
                                    color: "text-strong",
                                    children: (0, $.uZ)(t, s) ? O.intl.string(O.t.CHf9iJ) : O.intl.string(O.t.PoWNfe),
                                }),
                            ],
                        },
                        m,
                    );
                if (g === W)
                    return (0, r.jsxs)(
                        ee,
                        {
                            style: o,
                            onSelect: u,
                            children: [
                                (0, r.jsx)(U.U, {
                                    size: "custom",
                                    width: 23,
                                    height: 23,
                                    color: "currentColor",
                                    className: Y.sV,
                                }),
                                (0, r.jsx)(H.E, {
                                    variant: "text-xs/normal",
                                    color: "text-strong",
                                    children: O.intl.string(O.t.pWG4ze),
                                }),
                            ],
                        },
                        m,
                    );
                if ((0, K.T)(g)) {
                    let e = i?.skuId === g.skuId;
                    return (0, r.jsx)(
                        et,
                        {
                            style: { ...o },
                            user: t,
                            avatarDecoration: g,
                            section: h,
                            innerRef: e ? n : void 0,
                            canUsePremiumCollectibles: d,
                            isSelected: e,
                            onSelect: () => l(g),
                        },
                        m,
                    );
                }
                return null;
            },
            renderSection: (e, t) => {
                let { header: s } = c[e];
                return (0, r.jsx)("div", {
                    className: Y.so,
                    style: { ...t, position: "absolute" },
                    children: (0, r.jsx)(o.D, { variant: "heading-md/semibold", children: s }),
                });
            },
            getSectionHeight: (e) => c[e].height,
            getItemKey: (e, t) => c[e].items[t].skuId,
            getItemHeight: Q,
        });
    };
var ei = s(652215),
    er = s(788868),
    ea = s(556826);
function en(e) {
    let {
            user: t,
            categories: s,
            purchases: i,
            analyticsLocations: c,
            onClose: m,
            initialSelectedDecoration: x,
            guild: I,
        } = e,
        y = (0, n.bG)([v.Ay], () => (null != I ? v.Ay.getMember(I.id, t.id) : null)),
        _ = null != y ? y.avatarDecoration : t.avatarDecoration,
        { pendingAvatarDecoration: E, setPendingAvatarDecoration: D } = (0, A.A)({
            analyticsLocations: c,
            guildId: I?.id,
        }),
        [f, b] = a.useState(() =>
            null != x
                ? x
                : void 0 !== E
                  ? E
                  : null == _
                    ? null
                    : ((0, k.ps)(i, s).find((e) => {
                          let { skuId: t } = e;
                          return t === _.skuId;
                      }) ?? null),
        ),
        T = (0, g.lw)({
            pendingValue: f,
            userValue: t?.avatarDecoration,
            guildValue: y?.avatarDecoration,
            guildId: I?.id,
        }),
        { product: R, purchase: w } = (0, C.A)(f?.skuId),
        M = null != w ? (0, k.gA)(w) : (0, k.G0)(R),
        z = j.Ay.canUseCollectibles(t),
        H = a.useRef(null),
        U = (0, N.A)(c),
        G = void 0 === E ? f?.skuId === _?.skuId : f?.skuId === E?.skuId,
        V = a.useCallback(
            (e) => {
                m(),
                    (0, S.Cz)({
                        analyticsLocations: c,
                        analyticsSource: d.A.EDIT_AVATAR_DECORATION_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [c, m],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(u.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: ea.Hc,
                children: [
                    (0, r.jsx)(o.D, { variant: "heading-lg/semibold", children: O.intl.string(O.t.HykynS) }),
                    (0, r.jsx)(u.s_, { "data-migration-pending": !0, className: ea.iT, onClick: m }),
                ],
            }),
            (0, r.jsxs)(u.$m, {
                "data-migration-pending": !0,
                className: ea.jE,
                scrollbarType: "none",
                children: [
                    (0, r.jsx)(es, {
                        user: t,
                        guild: I,
                        pendingAvatarDecoration: f,
                        selectedAvatarDecorationRef: H,
                        onSelect: (e) => {
                            b(e), null != e && U(e);
                        },
                        onOpenShop: V,
                    }),
                    (0, r.jsx)(P, {
                        className: ea.kk,
                        user: t,
                        guildId: I?.id,
                        avatarDecoration: T,
                        decorationName: f?.label ?? null,
                    }),
                ],
            }),
            (0, r.jsxs)(u.jl, {
                "data-migration-pending": !0,
                className: ea.Hx,
                children: [
                    (null != w && (z || !M)) || null === f
                        ? (0, r.jsx)(l.$, {
                              variant: "primary",
                              text: O.intl.string(O.t.Jh8fJz),
                              onClick: () => {
                                  D(f), m();
                              },
                              disabled: G,
                          })
                        : null == w && (z || !M)
                          ? (0, r.jsx)(l.$, {
                                variant: "primary",
                                onClick: () => V(R?.skuId),
                                text: O.intl.string(O.t.fYfGgK),
                            })
                          : (0, r.jsx)(p.A, {
                                subscriptionTier: er.pe.TIER_2,
                                showGradient: !z,
                                textOptions: {
                                    textOverride: j.Ay.isPremium(t)
                                        ? O.intl.string(O.t.KXLX7l)
                                        : z
                                          ? O.intl.string(O.t.mr4K7D)
                                          : O.intl.string(O.t.pj0XBN),
                                },
                            }),
                    !z && M
                        ? (0, r.jsx)(h.A, { itemType: w?.type ?? R?.type, onClose: m })
                        : (0, r.jsx)(l.$, { variant: "secondary", text: O.intl.string(O.t["ETE/oC"]), onClick: m }),
                ],
            }),
        ],
    });
}
function el(e) {
    let {
            transitionState: t,
            analyticsLocations: s,
            onClose: i,
            onCloseModal: l,
            initialSelectedDecoration: o,
            guild: h,
        } = e,
        p = (0, n.bG)([x.default], () => x.default.getCurrentUser()),
        { analyticsLocations: g } = (0, m.Ay)(s, d.A.EDIT_AVATAR_DECORATION_MODAL),
        { categories: A, purchases: v, isFetchingCategories: j, isFetchingPurchases: S } = (0, y.Ay)(),
        k = j || (S && 0 === v.size);
    return (
        a.useEffect(() => {
            I.default.track(ei.HAw.OPEN_MODAL, { type: ei.JJy.AVATAR_DECORATION_CUSTOMIZATION, location_stack: g });
        }, [g]),
        null == p
            ? null
            : (0, r.jsx)(m.f5, {
                  value: g,
                  children: (0, r.jsx)(u.EO, {
                      transitionState: t,
                      className: ea.yl,
                      size: k ? u.rI.DYNAMIC : u.rI.MEDIUM,
                      parentComponent: "AvatarDecorationModal",
                      "data-migration-pending": !0,
                      children: k
                          ? (0, r.jsx)(c.y, { className: ea.u1, type: c.y.Type.SPINNING_CIRCLE })
                          : (0, r.jsx)(en, {
                                user: p,
                                guild: h,
                                categories: A,
                                purchases: v,
                                analyticsLocations: g,
                                initialSelectedDecoration: o,
                                onClose: () => {
                                    l(), i?.();
                                },
                            }),
                  }),
              })
    );
}
