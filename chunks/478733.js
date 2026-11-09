s.d(i, { default: () => el });
var t,
    l = s(477900),
    n = s(582128),
    r = s(855986),
    a = s(935462),
    c = s(821609),
    d = s(534514),
    u = s(289873),
    o = s(793574),
    p = s(688810),
    m = s(571827),
    h = s(725807),
    g = s(919395),
    x = s(84540),
    A = s(696451),
    j = s(287809),
    C = s(129230),
    I = s(722178),
    v = s(429811),
    y = s(993408),
    k = s(821701),
    b = s(841702),
    f = s(836602),
    N = s(448429),
    E = s(130147),
    _ = s(872200),
    w = s(792996),
    P = s(255852);
let S = function (e) {
    let { user: i, guildId: s, nameplate: t } = e,
        n = (0, r.cf)([f.A], () => f.A.getPendingChanges(s)),
        a = null != t ? w.intl.formatToPlainString(w.t["95pCSf"], { a11y_text: t.label }) : w.intl.string(w.t.SZeUdR);
    return (0, l.jsxs)("div", {
        className: P.i1,
        children: [
            (0, l.jsx)("div", {
                className: P.u_,
                role: "img",
                "aria-label": a,
                children: (0, l.jsxs)("div", {
                    className: P.Xp,
                    "aria-hidden": !0,
                    children: [
                        (0, l.jsx)(E._, { width: 124, opacity: 0.9 }),
                        (0, l.jsx)(E._, { width: 124, opacity: 0.9 }),
                        (0, l.jsx)(_.A, { ...n, user: i, guildId: s, nameplate: t, isHighlighted: !0 }),
                        (0, l.jsx)(E._, { width: 124, opacity: 0.9 }),
                        (0, l.jsx)(E._, { width: 124, opacity: 0.9 }),
                    ],
                }),
            }),
            (0, l.jsx)(N.A, {
                user: i,
                previewSkuId: t?.skuId,
                nitroChurnCTA: w.intl.string(w.t.nD78oa),
                nitroJoinCTA: w.intl.string(w.t["07vM9p"]),
            }),
        ],
    });
};
var M = s(503698),
    U = s.n(M),
    H = s(939249),
    T = s(95362),
    R = s(331322),
    D = s(428678),
    L = s(834730),
    O = s(34188),
    G = s(713517),
    z = s(837015),
    J = s(483968);
s(321073);
var V = s(164636),
    X = s(590180),
    B = s(4227),
    K = s(407528),
    W = (((t = {}).PURCHASE = "purchase"), (t.PREMIUM_PURCHASE = "premium_purchase"), (t.PREVIEW = "preview"), t);
let $ = { skuId: "None" },
    F = { skuId: "Shop" },
    Q = function () {
        let e = (0, V.bG)([B.A], () => B.A.purchases),
            [i, s] = (0, V.yK)([X.A], () => [X.A.categories, X.A.products]),
            t = (0, n.useMemo)(() => {
                let t = (0, y.zd)(e, i).reduce(
                    (i, t) => {
                        let l = e.get(t.skuId),
                            n = s.get(t.skuId),
                            r = null != l ? (0, y.gA)(l) : (0, y.G0)(n),
                            a = n?.isCategoryReward ?? !1;
                        return (
                            r ? i.premium_purchase.push(t) : null != l ? i.purchase.push(t) : a || i.preview.push(t), i
                        );
                    },
                    { purchase: [], premium_purchase: [], preview: [] },
                );
                return [
                    {
                        section: "purchase",
                        items: [$, F, ...t.purchase],
                        height: 12,
                        header: w.intl.string(w.t.WfGV52),
                    },
                    {
                        section: "premium_purchase",
                        items: t.premium_purchase,
                        height: 12,
                        header: w.intl.string(w.t.TiLCgw),
                    },
                    { section: "preview", items: t.preview, height: 12, header: w.intl.string(w.t["1vbbee"]) },
                ].filter((e) => {
                    let { items: i } = e;
                    return i.length > 0;
                });
            }, [i, s, e]);
        return (0, K.A)(t, "preview");
    };
var Y = s(710590);
function Z(e) {
    let { currentUser: i, nameplate: s, section: t, canUsePremiumCollectibles: r, isSelected: a, onClick: c } = e,
        d = (0, n.useRef)(null),
        { isHoveringOrFocusing: u } = (0, G.A)(d);
    return (0, l.jsxs)(H.D, {
        innerRef: d,
        "aria-pressed": a,
        "aria-label": s.label ?? w.intl.string(w.t.x5CoXR),
        className: Y.Hj,
        onClick: c,
        children: [
            (0, l.jsx)(_.A, { nameplate: s, user: i, showPlaceholderUser: !0, isHighlighted: u }),
            (0, l.jsx)("div", { className: U()(Y.t1, { [Y.wH]: a }) }),
            (0, l.jsx)(J.A, {
                isPurchaseSection: t === W.PURCHASE,
                isPremiumSection: t === W.PREMIUM_PURCHASE,
                canUsePremiumCollectibles: r,
                skuId: s.skuId,
            }),
        ],
    });
}
let q = function (e) {
    let { currentUser: i, selectedNameplate: s, guildId: t, onSelect: n, onOpenShop: r } = e,
        a = I.Ay.canUseCollectibles(i),
        c = Q();
    return (0, l.jsx)(T.d_, {
        className: Y.pf,
        children: c.map((e) =>
            (0, l.jsxs)(
                R.B,
                {
                    gap: 4,
                    children: [
                        (0, l.jsx)(d.D, { variant: "body-md/medium", children: e.header }),
                        e.section === W.PURCHASE &&
                            (0, l.jsxs)("div", {
                                className: Y.VQ,
                                children: [
                                    (0, l.jsxs)(H.D, {
                                        "aria-pressed": null == s,
                                        className: U()(Y.H5, { [Y.wH]: null == s }),
                                        onClick: () => n(null),
                                        children: [
                                            (0, l.jsx)(D.DenyIcon, { size: "md", color: "currentColor" }),
                                            (0, l.jsx)(L.E, {
                                                variant: "body-xs/normal",
                                                children:
                                                    null != t ? w.intl.string(w.t.CHf9iJ) : w.intl.string(w.t.PoWNfe),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(H.D, {
                                        className: Y.H5,
                                        onClick: () => r(),
                                        children: [
                                            (0, l.jsx)(O.ShopIcon, { size: "md", color: "currentColor" }),
                                            (0, l.jsx)(L.E, {
                                                variant: "body-xs/normal",
                                                children: w.intl.string(w.t.pWG4ze),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        (0, l.jsx)("div", {
                            className: Y.p_,
                            children: e.items
                                .filter(z.F)
                                .map((t) =>
                                    (0, l.jsx)(
                                        Z,
                                        {
                                            currentUser: i,
                                            nameplate: t,
                                            section: e.section,
                                            canUsePremiumCollectibles: a,
                                            isSelected: s?.skuId === t.skuId,
                                            onClick: () => n(t),
                                        },
                                        t.skuId,
                                    ),
                                ),
                        }),
                    ],
                },
                e.section,
            ),
        ),
    });
};
var ee = s(652215),
    ei = s(682901),
    es = s(379842);
function et(e) {
    let {
            currentUser: i,
            categories: s,
            purchases: t,
            analyticsLocations: u,
            modalHeadingId: p,
            onClose: j,
            guildId: C,
            initialSelectedNameplate: b,
        } = e,
        f = (0, r.bG)([A.Ay], () => (null != C && null != i ? A.Ay.getMember(C, i.id) : null)),
        N = null != f ? f.collectibles?.nameplate : i.collectibles?.nameplate,
        { pendingNameplate: E } = (0, g.rv)(i, C),
        [_, P] = (0, n.useState)(() =>
            null != b
                ? b
                : void 0 !== E
                  ? E
                  : null == N
                    ? null
                    : ((0, y.zd)(t, s).find((e) => {
                          let { skuId: i } = e;
                          return i === N.skuId;
                      }) ?? null),
        ),
        M = (0, g.lw)({
            pendingValue: _,
            userValue: i?.collectibles?.nameplate,
            guildValue: f?.collectibles?.nameplate,
            guildId: C,
        }),
        { product: U, purchase: H } = (0, k.A)(_?.skuId),
        T = null != H ? (0, y.gA)(H) : (0, y.G0)(U),
        R = I.Ay.canUseCollectibles(i),
        D = void 0 === E ? _?.skuId === N?.skuId : _?.skuId === E?.skuId,
        L = (0, n.useCallback)(
            (e) => {
                (j(),
                    (0, v.Cz)({
                        analyticsLocations: u,
                        analyticsSource: o.A.EDIT_NAMEPLATE_MODAL,
                        initialProductSkuId: e,
                    }));
            },
            [u, j],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(a.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: es.wx,
                children: [
                    (0, l.jsx)(d.D, { id: p, variant: "heading-lg/semibold", children: w.intl.string(w.t.BwdeM1) }),
                    (0, l.jsx)(a.s_, { "data-migration-pending": !0, className: es.b, onClick: j }),
                ],
            }),
            (0, l.jsxs)(a.$m, {
                "data-migration-pending": !0,
                className: es.Qs,
                scrollbarType: "none",
                children: [
                    (0, l.jsx)(q, { currentUser: i, selectedNameplate: _, guildId: C, onSelect: P, onOpenShop: L }),
                    (0, l.jsx)(S, { user: i, guildId: C, nameplate: M }),
                ],
            }),
            (0, l.jsxs)(a.jl, {
                "data-migration-pending": !0,
                className: es.Hx,
                children: [
                    (null != H && (!T || R)) || null === _
                        ? (0, l.jsx)(c.$, {
                              variant: "primary",
                              text: w.intl.string(w.t.Jh8fJz),
                              onClick: function () {
                                  ((0, x.p)({ guildId: C, nameplate: _ }), j());
                              },
                              disabled: D,
                          })
                        : null == H && (R || !T)
                          ? (0, l.jsx)(c.$, {
                                variant: "primary",
                                onClick: () => L(U?.skuId),
                                text: w.intl.string(w.t.fYfGgK),
                            })
                          : (0, l.jsx)(h.A, {
                                subscriptionTier: ei.pe.TIER_2,
                                showGradient: !R,
                                textOptions: {
                                    textOverride: I.Ay.isPremium(i)
                                        ? w.intl.string(w.t.KXLX7l)
                                        : R
                                          ? w.intl.string(w.t.mr4K7D)
                                          : w.intl.string(w.t.pj0XBN),
                                },
                            }),
                    !R && T
                        ? (0, l.jsx)(m.A, { itemType: H?.type ?? U?.type, onClose: j })
                        : (0, l.jsx)(c.$, { variant: "secondary", text: w.intl.string(w.t["ETE/oC"]), onClick: j }),
                ],
            }),
        ],
    });
}
function el(e) {
    let {
            transitionState: i,
            analyticsLocations: s,
            onClose: t,
            guildId: c,
            initialSelectedNameplate: d,
            returnRef: m,
        } = e,
        h = (0, r.bG)([j.default], () => j.default.getCurrentUser()),
        { analyticsLocations: g } = (0, p.Ay)(s, o.A.EDIT_NAMEPLATE_MODAL),
        { categories: x, purchases: A, isFetchingCategories: I, isFetchingPurchases: v } = (0, b.Ay)(),
        y = I || (v && 0 === A.size),
        k = (0, n.useId)();
    return ((0, n.useEffect)(() => {
        C.default.track(ee.HAw.OPEN_MODAL, { type: ee.JJy.NAMEPLATE_CUSTOMIZATION, location_stack: g });
    }, [g]),
    null == h)
        ? null
        : (0, l.jsx)(p.f5, {
              value: g,
              children: (0, l.jsx)(a.EO, {
                  transitionState: i,
                  size: y ? a.rI.DYNAMIC : a.rI.MEDIUM,
                  parentComponent: "NameplateModal",
                  "aria-label": y ? w.intl.string(w.t.BwdeM1) : void 0,
                  "aria-labelledby": y ? void 0 : k,
                  returnRef: m,
                  "data-migration-pending": !0,
                  children: y
                      ? (0, l.jsx)(u.y, { className: es.u1, type: u.y.Type.SPINNING_CIRCLE })
                      : (0, l.jsx)(et, {
                            currentUser: h,
                            categories: x,
                            purchases: A,
                            analyticsLocations: g,
                            modalHeadingId: k,
                            guildId: c,
                            initialSelectedNameplate: d,
                            onClose: t,
                        }),
              }),
          });
}
