i.d(t, { default: () => eu });
var s,
    r = i(627968),
    n = i(64700),
    a = i(17928),
    l = i(821609),
    u = i(935462),
    o = i(297264),
    c = i(289873),
    d = i(793574),
    m = i(688810),
    h = i(571827),
    p = i(725807),
    g = i(919395),
    A = i(352413),
    v = i(696451),
    x = i(287809),
    I = i(174459),
    j = i(428262),
    S = i(662388),
    k = i(993408),
    C = i(821701),
    f = i(841702),
    y = i(727170),
    N = i(503698),
    _ = i.n(N),
    E = i(778712),
    D = i(290863),
    b = i(448429),
    T = i(162232),
    O = i(375708),
    R = i(304452);
let w = [
        { avatarSize: E._3.SIZE_40, showStatus: !1 },
        { avatarSize: E._3.SIZE_32, showStatus: !1 },
        { avatarSize: E._3.SIZE_40, showStatus: !0 },
        { avatarSize: E._3.SIZE_32, showStatus: !0 },
    ],
    P = function (e) {
        let { user: t, guildId: i, avatarDecoration: s, decorationName: n, className: l } = e,
            u = (0, a.bG)([D.A], () => D.A.getStatus(t.id));
        return (0, r.jsxs)("div", {
            className: _()(R.kk, l),
            children: [
                (0, r.jsxs)("div", {
                    className: R.$M,
                    children: [
                        (0, r.jsx)("div", {
                            className: R.TB,
                            children: (0, r.jsx)(T.A, {
                                user: t,
                                guildId: i,
                                avatarDecorationOverride: s,
                                decorationName: n,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: R.Kh,
                            children: w.map((e) => {
                                let { avatarSize: n, showStatus: a } = e;
                                return (0, r.jsx)(
                                    "div",
                                    {
                                        className: R.CX,
                                        children: (0, r.jsx)(T.A, {
                                            user: t,
                                            guildId: i,
                                            avatarSize: n,
                                            avatarDecorationOverride: s,
                                            status: a ? u : void 0,
                                            "aria-hidden": !0,
                                        }),
                                    },
                                    `${n}${a}`,
                                );
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(b.A, {
                    user: t,
                    previewSkuId: s?.skuId,
                    nitroChurnCTA: O.intl.string(O.t["7vkeu5"]),
                    nitroJoinCTA: O.intl.string(O.t.q0PlFn),
                }),
            ],
        });
    };
var M = i(939249),
    z = i(428678),
    H = i(834730),
    U = i(34188),
    G = i(92008),
    V = i(713517),
    K = i(898461),
    L = i(483968),
    $ = i(821956);
i(321073);
var J = i(702841),
    Z = i(590180),
    X = i(4227),
    q = (((s = {}).PURCHASE = "purchase"), (s.PREMIUM_PURCHASE = "premium_purchase"), (s.PREVIEW = "preview"), s);
let F = { skuId: "None" },
    W = { skuId: "Shop" },
    B = function () {
        let e = (0, J.bG)([X.A], () => X.A.purchases),
            [t, i] = (0, J.yK)([Z.A], () => [Z.A.categories, Z.A.products]);
        return (0, n.useMemo)(() => {
            let s = (0, k.ps)(e, t).reduce(
                (t, s) => {
                    let r = e.get(s.skuId);
                    return (
                        (null != r ? (0, k.gA)(r) : (0, k.G0)(i.get(s.skuId)))
                            ? t.premium_purchase.push(s)
                            : null != r
                              ? t.purchase.push(s)
                              : t.preview.push(s),
                        t
                    );
                },
                { purchase: [], premium_purchase: [], preview: [] },
            );
            return [
                { section: "purchase", items: [F, W, ...s.purchase], height: 12, header: O.intl.string(O.t.VqmVqE) },
                {
                    section: "premium_purchase",
                    items: s.premium_purchase,
                    height: 12,
                    header: O.intl.string(O.t.TiLCgw),
                },
                { section: "preview", items: s.preview, height: 12, header: O.intl.string(O.t["1vbbee"]) },
            ].filter((e) => {
                let { items: t } = e;
                return t.length > 0;
            });
        }, [t, i, e]);
    };
var Y = i(963977),
    Q = i(510245);
let ee = () => 80;
function et(e) {
    let { children: t, className: i, onSelect: s, isSelected: n, ...a } = e;
    return (0, r.jsx)(M.D, {
        "aria-pressed": n,
        className: _()(Q.eA, n ? Q.wH : void 0, i),
        ...a,
        onClick: s,
        children: t,
    });
}
function ei(e) {
    let {
            user: t,
            avatarDecoration: i,
            innerRef: s,
            section: a,
            canUsePremiumCollectibles: l,
            isSelected: u = !1,
            ...o
        } = e,
        c = n.useRef(null),
        { isHoveringOrFocusing: d } = (0, V.A)(s ?? c),
        { avatarDecorationSrc: m } = (0, Y.A)({
            user: t,
            avatarDecorationOverride: i,
            size: 80,
            onlyAnimateOnHoverOrFocus: !d,
        });
    return (0, r.jsxs)(et, {
        innerRef: s ?? c,
        isSelected: u,
        ...o,
        children: [
            null != m && (0, r.jsx)("img", { className: Q.Pw, src: m, alt: i.label }),
            (0, r.jsx)(L.A, {
                skuId: i.skuId,
                canUsePremiumCollectibles: l,
                isPurchaseSection: a === q.PURCHASE,
                isPremiumSection: a === q.PREMIUM_PURCHASE,
            }),
        ],
    });
}
let es = function (e) {
    let {
            user: t,
            guild: i,
            pendingAvatarDecoration: s,
            selectedAvatarDecorationRef: n,
            onSelect: a,
            onOpenShop: l,
        } = e,
        u = B(),
        c = j.Ay.canUseCollectibles(t);
    return (0, r.jsx)(G.f, {
        fade: !0,
        className: Q.p_,
        columns: 3,
        sections: u.map((e) => {
            let { items: t } = e;
            return t.length;
        }),
        sectionGutter: 16,
        itemGutter: 12,
        paddingHorizontal: 12,
        paddingVertical: 0,
        removeEdgeItemGutters: !0,
        renderItem: (e, o, d, m) => {
            let { section: h, items: p } = u[e],
                g = p[o];
            if (g === F)
                return (0, r.jsxs)(
                    et,
                    {
                        style: { ...d },
                        isSelected: null === s,
                        onSelect: () => a(null),
                        children: [
                            (0, r.jsx)(z.K, { size: "md", color: "currentColor", className: Q.Kk }),
                            (0, r.jsx)(H.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                children: (0, $.uZ)(t, i) ? O.intl.string(O.t.CHf9iJ) : O.intl.string(O.t.PoWNfe),
                            }),
                        ],
                    },
                    m,
                );
            if (g === W)
                return (0, r.jsxs)(
                    et,
                    {
                        style: d,
                        onSelect: l,
                        children: [
                            (0, r.jsx)(U.U, {
                                size: "custom",
                                width: 23,
                                height: 23,
                                color: "currentColor",
                                className: Q.sV,
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
                let e = s?.skuId === g.skuId;
                return (0, r.jsx)(
                    ei,
                    {
                        style: { ...d },
                        user: t,
                        avatarDecoration: g,
                        section: h,
                        innerRef: e ? n : void 0,
                        canUsePremiumCollectibles: c,
                        isSelected: e,
                        onSelect: () => a(g),
                    },
                    m,
                );
            }
            return null;
        },
        renderSection: (e, t) => {
            let { header: i } = u[e];
            return (0, r.jsx)("div", {
                className: Q.so,
                style: { ...t, position: "absolute" },
                children: (0, r.jsx)(o.D, { variant: "heading-md/semibold", children: i }),
            });
        },
        getSectionHeight: (e) => u[e].height,
        getItemKey: (e, t) => u[e].items[t].skuId,
        getItemHeight: ee,
    });
};
var er = i(652215),
    en = i(202541),
    ea = i(556826);
function el(e) {
    let {
            user: t,
            categories: i,
            purchases: s,
            analyticsLocations: c,
            onClose: m,
            initialSelectedDecoration: x,
            guild: I,
        } = e,
        f = (0, a.bG)([v.Ay], () => (null != I ? v.Ay.getMember(I.id, t.id) : null)),
        N = null != f ? f.avatarDecoration : t.avatarDecoration,
        { pendingAvatarDecoration: _, setPendingAvatarDecoration: E } = (0, A.A)({
            analyticsLocations: c,
            guildId: I?.id,
        }),
        [D, b] = n.useState(() =>
            null != x
                ? x
                : void 0 !== _
                  ? _
                  : null == N
                    ? null
                    : ((0, k.ps)(s, i).find((e) => {
                          let { skuId: t } = e;
                          return t === N.skuId;
                      }) ?? null),
        ),
        T = (0, g.lw)({
            pendingValue: D,
            userValue: t?.avatarDecoration,
            guildValue: f?.avatarDecoration,
            guildId: I?.id,
        }),
        { product: R, purchase: w } = (0, C.A)(D?.skuId),
        M = null != w ? (0, k.gA)(w) : (0, k.G0)(R),
        z = j.Ay.canUseCollectibles(t),
        H = n.useRef(null),
        U = (0, y.A)(c),
        G = void 0 === _ ? D?.skuId === N?.skuId : D?.skuId === _?.skuId,
        V = n.useCallback(
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
                        pendingAvatarDecoration: D,
                        selectedAvatarDecorationRef: H,
                        onSelect: function (e) {
                            b(e), null != e && U(e);
                        },
                        onOpenShop: V,
                    }),
                    (0, r.jsx)(P, {
                        className: ea.kk,
                        user: t,
                        guildId: I?.id,
                        avatarDecoration: T,
                        decorationName: D?.label ?? null,
                    }),
                ],
            }),
            (0, r.jsxs)(u.jl, {
                "data-migration-pending": !0,
                className: ea.Hx,
                children: [
                    (null != w && (z || !M)) || null === D
                        ? (0, r.jsx)(l.$, {
                              variant: "primary",
                              text: O.intl.string(O.t.Jh8fJz),
                              onClick: function () {
                                  E(D), m();
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
                                subscriptionTier: en.pe.TIER_2,
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
function eu(e) {
    let {
            transitionState: t,
            analyticsLocations: i,
            onClose: s,
            onCloseModal: l,
            initialSelectedDecoration: o,
            guild: h,
        } = e,
        p = (0, a.bG)([x.default], () => x.default.getCurrentUser()),
        { analyticsLocations: g } = (0, m.Ay)(i, d.A.EDIT_AVATAR_DECORATION_MODAL),
        { categories: A, purchases: v, isFetchingCategories: j, isFetchingPurchases: S } = (0, f.Ay)(),
        k = j || (S && 0 === v.size);
    return (
        n.useEffect(() => {
            I.default.track(er.HAw.OPEN_MODAL, { type: er.JJy.AVATAR_DECORATION_CUSTOMIZATION, location_stack: g });
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
                          : (0, r.jsx)(el, {
                                user: p,
                                guild: h,
                                categories: A,
                                purchases: v,
                                analyticsLocations: g,
                                initialSelectedDecoration: o,
                                onClose: function () {
                                    l(), s?.();
                                },
                            }),
                  }),
              })
    );
}
