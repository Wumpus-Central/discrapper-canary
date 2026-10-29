i.d(t, { default: () => eu });
var s,
    n = i(477900),
    r = i(582128),
    a = i(17928),
    l = i(935462),
    u = i(821609),
    o = i(297264),
    c = i(289873),
    d = i(793574),
    m = i(688810),
    h = i(571827),
    g = i(919395),
    p = i(352413),
    A = i(696451),
    v = i(287809),
    x = i(174459),
    I = i(24482),
    j = i(815996),
    S = i(993408),
    k = i(821701),
    C = i(841702),
    y = i(727170),
    f = i(907391),
    N = i(503698),
    _ = i.n(N),
    E = i(778712),
    D = i(290863),
    b = i(448429),
    w = i(162232),
    R = i(105292),
    T = i(556421);
let O = [
        { avatarSize: E._3.SIZE_40, showStatus: !1 },
        { avatarSize: E._3.SIZE_32, showStatus: !1 },
        { avatarSize: E._3.SIZE_40, showStatus: !0 },
        { avatarSize: E._3.SIZE_32, showStatus: !0 },
    ],
    P = function (e) {
        let { user: t, guildId: i, avatarDecoration: s, decorationName: r, className: l } = e,
            u = (0, a.bG)([D.A], () => D.A.getStatus(t.id));
        return (0, n.jsxs)("div", {
            className: _()(T.kk, l),
            children: [
                (0, n.jsxs)("div", {
                    className: T.$M,
                    children: [
                        (0, n.jsx)("div", {
                            className: T.TB,
                            children: (0, n.jsx)(w.A, {
                                user: t,
                                guildId: i,
                                avatarDecorationOverride: s,
                                decorationName: r,
                            }),
                        }),
                        (0, n.jsx)("div", {
                            className: T.Kh,
                            children: O.map((e) => {
                                let { avatarSize: r, showStatus: a } = e;
                                return (0, n.jsx)(
                                    "div",
                                    {
                                        className: T.CX,
                                        children: (0, n.jsx)(w.A, {
                                            user: t,
                                            guildId: i,
                                            avatarSize: r,
                                            avatarDecorationOverride: s,
                                            status: a ? u : void 0,
                                            "aria-hidden": !0,
                                        }),
                                    },
                                    `${r}${a}`,
                                );
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)(b.A, {
                    user: t,
                    previewSkuId: s?.skuId,
                    nitroChurnCTA: R.intl.string(R.t["7vkeu5"]),
                    nitroJoinCTA: R.intl.string(R.t.q0PlFn),
                }),
            ],
        });
    };
var H = i(939249),
    M = i(428678),
    z = i(834730),
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
    q = i(341879),
    F = (((s = {}).PURCHASE = "purchase"), (s.PREMIUM_PURCHASE = "premium_purchase"), (s.PREVIEW = "preview"), s);
let W = { skuId: "None" },
    B = { skuId: "Shop" },
    Y = function () {
        let e = (0, J.bG)([X.A], () => X.A.purchases),
            [t, i] = (0, J.yK)([Z.A], () => [Z.A.categories, Z.A.products]),
            s = (0, r.useMemo)(() => {
                let s = (0, S.ps)(e, t).reduce(
                    (t, s) => {
                        let n = e.get(s.skuId);
                        return (
                            (null != n ? (0, S.gA)(n) : (0, S.G0)(i.get(s.skuId)))
                                ? t.premium_purchase.push(s)
                                : null != n
                                  ? t.purchase.push(s)
                                  : t.preview.push(s),
                            t
                        );
                    },
                    { purchase: [], premium_purchase: [], preview: [] },
                );
                return [
                    {
                        section: "purchase",
                        items: [W, B, ...s.purchase],
                        height: 12,
                        header: R.intl.string(R.t.VqmVqE),
                    },
                    {
                        section: "premium_purchase",
                        items: s.premium_purchase,
                        height: 12,
                        header: R.intl.string(R.t.TiLCgw),
                    },
                    { section: "preview", items: s.preview, height: 12, header: R.intl.string(R.t["1vbbee"]) },
                ].filter((e) => {
                    let { items: t } = e;
                    return t.length > 0;
                });
            }, [t, i, e]);
        return (0, q.A)(s, "preview");
    };
var Q = i(215689),
    ee = i(876298);
let et = () => 80;
function ei(e) {
    let { children: t, className: i, onSelect: s, isSelected: r, ...a } = e;
    return (0, n.jsx)(H.D, {
        "aria-pressed": r,
        className: _()(ee.eA, r ? ee.wH : void 0, i),
        ...a,
        onClick: s,
        children: t,
    });
}
function es(e) {
    let {
            user: t,
            avatarDecoration: i,
            innerRef: s,
            section: a,
            canUsePremiumCollectibles: l,
            isSelected: u = !1,
            ...o
        } = e,
        c = r.useRef(null),
        { isHoveringOrFocusing: d } = (0, V.A)(s ?? c),
        { avatarDecorationSrc: m } = (0, Q.A)({
            user: t,
            avatarDecorationOverride: i,
            size: 80,
            onlyAnimateOnHoverOrFocus: !d,
        });
    return (0, n.jsxs)(ei, {
        innerRef: s ?? c,
        isSelected: u,
        ...o,
        children: [
            null != m && (0, n.jsx)("img", { className: ee.Pw, src: m, alt: i.label }),
            (0, n.jsx)(L.A, {
                skuId: i.skuId,
                canUsePremiumCollectibles: l,
                isPurchaseSection: a === F.PURCHASE,
                isPremiumSection: a === F.PREMIUM_PURCHASE,
            }),
        ],
    });
}
let en = function (e) {
    let {
            user: t,
            guild: i,
            pendingAvatarDecoration: s,
            selectedAvatarDecorationRef: r,
            onSelect: a,
            onOpenShop: l,
        } = e,
        u = Y(),
        c = I.Ay.canUseCollectibles(t);
    return (0, n.jsx)(G.f, {
        fade: !0,
        className: ee.p_,
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
            let { section: h, items: g } = u[e],
                p = g[o];
            if (p === W)
                return (0, n.jsxs)(
                    ei,
                    {
                        style: { ...d },
                        isSelected: null === s,
                        onSelect: () => a(null),
                        children: [
                            (0, n.jsx)(M.K, { size: "md", color: "currentColor", className: ee.Kk }),
                            (0, n.jsx)(z.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                children: (0, $.uZ)(t, i) ? R.intl.string(R.t.CHf9iJ) : R.intl.string(R.t.PoWNfe),
                            }),
                        ],
                    },
                    m,
                );
            if (p === B)
                return (0, n.jsxs)(
                    ei,
                    {
                        style: d,
                        onSelect: () => l(),
                        children: [
                            (0, n.jsx)(U.U, {
                                size: "custom",
                                width: 23,
                                height: 23,
                                color: "currentColor",
                                className: ee.sV,
                            }),
                            (0, n.jsx)(z.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                children: R.intl.string(R.t.pWG4ze),
                            }),
                        ],
                    },
                    m,
                );
            if ((0, K.T)(p)) {
                let e = s?.skuId === p.skuId;
                return (0, n.jsx)(
                    es,
                    {
                        style: { ...d },
                        user: t,
                        avatarDecoration: p,
                        section: h,
                        innerRef: e ? r : void 0,
                        canUsePremiumCollectibles: c,
                        isSelected: e,
                        onSelect: () => a(p),
                    },
                    m,
                );
            }
            return null;
        },
        renderSection: (e, t) => {
            let { header: i } = u[e];
            return (0, n.jsx)("div", {
                className: ee.so,
                style: { ...t, position: "absolute" },
                children: (0, n.jsx)(o.D, { variant: "heading-md/semibold", children: i }),
            });
        },
        getSectionHeight: (e) => u[e].height,
        getItemKey: (e, t) => u[e].items[t].skuId,
        getItemHeight: et,
    });
};
var er = i(652215),
    ea = i(806457);
function el(e) {
    let {
            user: t,
            categories: i,
            purchases: s,
            analyticsLocations: c,
            modalHeadingId: m,
            onClose: v,
            initialSelectedDecoration: x,
            guild: C,
        } = e,
        N = (0, a.bG)([A.Ay], () => (null != C ? A.Ay.getMember(C.id, t.id) : null)),
        _ = null != N ? N.avatarDecoration : t.avatarDecoration,
        { pendingAvatarDecoration: E, setPendingAvatarDecoration: D } = (0, p.A)({
            analyticsLocations: c,
            guildId: C?.id,
        }),
        [b, w] = r.useState(() =>
            null != x
                ? x
                : void 0 !== E
                  ? E
                  : null == _
                    ? null
                    : ((0, S.ps)(s, i).find((e) => {
                          let { skuId: t } = e;
                          return t === _.skuId;
                      }) ?? null),
        ),
        T = (0, g.lw)({
            pendingValue: b,
            userValue: t?.avatarDecoration,
            guildValue: N?.avatarDecoration,
            guildId: C?.id,
        }),
        { product: O, purchase: H } = (0, k.A)(b?.skuId),
        M = null != H ? (0, S.gA)(H) : (0, S.G0)(O),
        z = I.Ay.canUseCollectibles(t),
        U = r.useRef(null),
        G = (0, y.A)(c),
        V = void 0 === E ? b?.skuId === _?.skuId : b?.skuId === E?.skuId,
        K = r.useCallback(
            (e) => {
                (v(),
                    (0, j.Cz)({
                        analyticsLocations: c,
                        analyticsSource: d.A.EDIT_AVATAR_DECORATION_MODAL,
                        initialProductSkuId: e,
                    }));
            },
            [c, v],
        );
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(l.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: ea.Hc,
                children: [
                    (0, n.jsx)(o.D, { id: m, variant: "heading-lg/semibold", children: R.intl.string(R.t.HykynS) }),
                    (0, n.jsx)(l.s_, { "data-migration-pending": !0, className: ea.iT, onClick: v }),
                ],
            }),
            (0, n.jsxs)(l.$m, {
                "data-migration-pending": !0,
                className: ea.jE,
                scrollbarType: "none",
                children: [
                    (0, n.jsx)(en, {
                        user: t,
                        guild: C,
                        pendingAvatarDecoration: b,
                        selectedAvatarDecorationRef: U,
                        onSelect: function (e) {
                            (w(e), null != e && G(e));
                        },
                        onOpenShop: K,
                    }),
                    (0, n.jsx)(P, {
                        className: ea.kk,
                        user: t,
                        guildId: C?.id,
                        avatarDecoration: T,
                        decorationName: b?.label ?? null,
                    }),
                ],
            }),
            (0, n.jsxs)(l.jl, {
                "data-migration-pending": !0,
                className: ea.Hx,
                children: [
                    (null != H && (z || !M)) || null === b
                        ? (0, n.jsx)(u.$, {
                              variant: "primary",
                              text: R.intl.string(R.t.Jh8fJz),
                              onClick: function () {
                                  (D(b), v());
                              },
                              disabled: V,
                          })
                        : null == H && (z || !M)
                          ? (0, n.jsx)(u.$, {
                                variant: "primary",
                                onClick: () => K(O?.skuId),
                                text: R.intl.string(R.t.fYfGgK),
                            })
                          : (0, n.jsx)(f.A, {
                                showGradient: !z,
                                text: I.Ay.isPremium(t)
                                    ? R.intl.string(R.t.KXLX7l)
                                    : z
                                      ? R.intl.string(R.t.mr4K7D)
                                      : R.intl.string(R.t.pj0XBN),
                            }),
                    !z && M
                        ? (0, n.jsx)(h.A, { itemType: H?.type ?? O?.type, onClose: v })
                        : (0, n.jsx)(u.$, { variant: "secondary", text: R.intl.string(R.t["ETE/oC"]), onClick: v }),
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
            onCloseModal: u,
            initialSelectedDecoration: o,
            guild: h,
            returnRef: g,
        } = e,
        p = (0, a.bG)([v.default], () => v.default.getCurrentUser()),
        { analyticsLocations: A } = (0, m.Ay)(i, d.A.EDIT_AVATAR_DECORATION_MODAL),
        { categories: I, purchases: j, isFetchingCategories: S, isFetchingPurchases: k } = (0, C.Ay)(),
        y = S || (k && 0 === j.size),
        f = r.useId();
    return (
        r.useEffect(() => {
            x.default.track(er.HAw.OPEN_MODAL, { type: er.JJy.AVATAR_DECORATION_CUSTOMIZATION, location_stack: A });
        }, [A]),
        null == p
            ? null
            : (0, n.jsx)(m.f5, {
                  value: A,
                  children: (0, n.jsx)(l.EO, {
                      transitionState: t,
                      className: ea.yl,
                      size: y ? l.rI.DYNAMIC : l.rI.MEDIUM,
                      parentComponent: "AvatarDecorationModal",
                      returnRef: g,
                      "aria-label": y ? R.intl.string(R.t.HykynS) : void 0,
                      "aria-labelledby": y ? void 0 : f,
                      "data-migration-pending": !0,
                      children: y
                          ? (0, n.jsx)(c.y, { className: ea.u1, type: c.y.Type.SPINNING_CIRCLE })
                          : (0, n.jsx)(el, {
                                user: p,
                                guild: h,
                                categories: I,
                                purchases: j,
                                analyticsLocations: A,
                                modalHeadingId: f,
                                initialSelectedDecoration: o,
                                onClose: function () {
                                    (u(), s?.());
                                },
                            }),
                  }),
              })
    );
}
