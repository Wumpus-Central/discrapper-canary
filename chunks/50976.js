i.d(t, { default: () => eu });
var n,
    s = i(477900),
    r = i(582128),
    a = i(855986),
    l = i(935462),
    o = i(821609),
    u = i(534514),
    c = i(289873),
    d = i(793574),
    m = i(688810),
    h = i(571827),
    g = i(919395),
    p = i(352413),
    v = i(696451),
    A = i(287809),
    I = i(129230),
    x = i(448645),
    S = i(969935),
    j = i(993408),
    y = i(519707),
    k = i(821701),
    C = i(841702),
    f = i(727170),
    _ = i(907391),
    N = i(503698),
    E = i.n(N),
    D = i(778712),
    b = i(290863),
    w = i(448429),
    R = i(162232),
    T = i(792996),
    O = i(556421);
let P = [
        { avatarSize: D._3.SIZE_40, showStatus: !1 },
        { avatarSize: D._3.SIZE_32, showStatus: !1 },
        { avatarSize: D._3.SIZE_40, showStatus: !0 },
        { avatarSize: D._3.SIZE_32, showStatus: !0 },
    ],
    H = function (e) {
        let { user: t, guildId: i, avatarDecoration: n, decorationName: r, className: l } = e,
            o = (0, a.bG)([b.A], () => b.A.getStatus(t.id));
        return (0, s.jsxs)("div", {
            className: E()(O.kk, l),
            children: [
                (0, s.jsxs)("div", {
                    className: O.$M,
                    children: [
                        (0, s.jsx)("div", {
                            className: O.TB,
                            children: (0, s.jsx)(R.A, {
                                user: t,
                                guildId: i,
                                avatarDecorationOverride: n,
                                decorationName: r,
                            }),
                        }),
                        (0, s.jsx)("div", {
                            className: O.Kh,
                            children: P.map((e) => {
                                let { avatarSize: r, showStatus: a } = e;
                                return (0, s.jsx)(
                                    "div",
                                    {
                                        className: O.CX,
                                        children: (0, s.jsx)(R.A, {
                                            user: t,
                                            guildId: i,
                                            avatarSize: r,
                                            avatarDecorationOverride: n,
                                            status: a ? o : void 0,
                                            "aria-hidden": !0,
                                        }),
                                    },
                                    `${r}${a}`,
                                );
                            }),
                        }),
                    ],
                }),
                (0, s.jsx)(w.A, {
                    user: t,
                    previewSkuId: n?.skuId,
                    nitroChurnCTA: T.intl.string(T.t["7vkeu5"]),
                    nitroJoinCTA: T.intl.string(T.t.q0PlFn),
                }),
            ],
        });
    };
var M = i(939249),
    z = i(428678),
    G = i(834730),
    U = i(34188),
    V = i(297778),
    L = i(713517),
    J = i(898461),
    K = i(483968),
    $ = i(821956);
i(321073);
var Z = i(164636),
    X = i(590180),
    q = i(4227),
    F = i(407528),
    W = (((n = {}).PURCHASE = "purchase"), (n.PREMIUM_PURCHASE = "premium_purchase"), (n.PREVIEW = "preview"), n);
let B = { skuId: "None" },
    Y = { skuId: "Shop" },
    Q = function () {
        let e = (0, Z.bG)([q.A], () => q.A.purchases),
            [t, i] = (0, Z.yK)([X.A], () => [X.A.categories, X.A.products]),
            n = (0, r.useMemo)(() => {
                let n = (0, j.ps)(e, t).reduce(
                    (t, n) => {
                        let s = e.get(n.skuId);
                        return (
                            (null != s ? (0, j.gA)(s) : (0, j.G0)(i.get(n.skuId)))
                                ? t.premium_purchase.push(n)
                                : null != s
                                  ? t.purchase.push(n)
                                  : t.preview.push(n),
                            t
                        );
                    },
                    { purchase: [], premium_purchase: [], preview: [] },
                );
                return [
                    {
                        section: "purchase",
                        items: [B, Y, ...n.purchase],
                        height: 12,
                        header: T.intl.string(T.t.VqmVqE),
                    },
                    {
                        section: "premium_purchase",
                        items: n.premium_purchase,
                        height: 12,
                        header: T.intl.string(T.t.TiLCgw),
                    },
                    { section: "preview", items: n.preview, height: 12, header: T.intl.string(T.t["1vbbee"]) },
                ].filter((e) => {
                    let { items: t } = e;
                    return t.length > 0;
                });
            }, [t, i, e]);
        return (0, F.A)(n, "preview");
    };
var ee = i(215689),
    et = i(876298);
let ei = () => 80;
function en(e) {
    let { children: t, className: i, onSelect: n, isSelected: r, ...a } = e;
    return (0, s.jsx)(M.D, {
        "aria-pressed": r,
        className: E()(et.eA, r ? et.wH : void 0, i),
        ...a,
        onClick: n,
        children: t,
    });
}
function es(e) {
    let {
            user: t,
            avatarDecoration: i,
            innerRef: n,
            section: a,
            canUsePremiumCollectibles: l,
            isSelected: o = !1,
            ...u
        } = e,
        c = r.useRef(null),
        { isHoveringOrFocusing: d } = (0, L.A)(n ?? c),
        { avatarDecorationSrc: m } = (0, ee.A)({
            user: t,
            avatarDecorationOverride: i,
            size: 80,
            onlyAnimateOnHoverOrFocus: !d,
        });
    return (0, s.jsxs)(en, {
        innerRef: n ?? c,
        isSelected: o,
        ...u,
        children: [
            null != m && (0, s.jsx)("img", { className: et.Pw, src: m, alt: i.label }),
            (0, s.jsx)(K.A, {
                skuId: i.skuId,
                canUsePremiumCollectibles: l,
                isPurchaseSection: a === W.PURCHASE,
                isPremiumSection: a === W.PREMIUM_PURCHASE,
            }),
        ],
    });
}
let er = function (e) {
    let {
            user: t,
            guild: i,
            pendingAvatarDecoration: n,
            selectedAvatarDecorationRef: r,
            onSelect: a,
            onOpenShop: l,
        } = e,
        o = Q(),
        c = x.Ay.canUseCollectibles(t);
    return (0, s.jsx)(V.f, {
        fade: !0,
        className: et.p_,
        columns: 3,
        sections: o.map((e) => {
            let { items: t } = e;
            return t.length;
        }),
        sectionGutter: 16,
        itemGutter: 12,
        paddingHorizontal: 12,
        paddingVertical: 0,
        removeEdgeItemGutters: !0,
        renderItem: (e, u, d, m) => {
            let { section: h, items: g } = o[e],
                p = g[u];
            if (p === B)
                return (0, s.jsxs)(
                    en,
                    {
                        style: { ...d },
                        isSelected: null === n,
                        onSelect: () => a(null),
                        children: [
                            (0, s.jsx)(z.DenyIcon, { size: "md", color: "currentColor", className: et.Kk }),
                            (0, s.jsx)(G.E, {
                                variant: "body-xs/normal",
                                color: "text-strong",
                                children: (0, $.uZ)(t, i) ? T.intl.string(T.t.CHf9iJ) : T.intl.string(T.t.PoWNfe),
                            }),
                        ],
                    },
                    m,
                );
            if (p === Y)
                return (0, s.jsxs)(
                    en,
                    {
                        style: d,
                        onSelect: () => l(),
                        children: [
                            (0, s.jsx)(U.ShopIcon, {
                                size: "custom",
                                width: 23,
                                height: 23,
                                color: "currentColor",
                                className: et.sV,
                            }),
                            (0, s.jsx)(G.E, {
                                variant: "body-xs/normal",
                                color: "text-strong",
                                children: T.intl.string(T.t.pWG4ze),
                            }),
                        ],
                    },
                    m,
                );
            if ((0, J.T)(p)) {
                let e = n?.skuId === p.skuId;
                return (0, s.jsx)(
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
            let { header: i } = o[e];
            return (0, s.jsx)("div", {
                className: et.so,
                style: { ...t, position: "absolute" },
                children: (0, s.jsx)(u.D, { variant: "heading-sm/semibold", children: i }),
            });
        },
        getSectionHeight: (e) => o[e].height,
        getItemKey: (e, t) => o[e].items[t].skuId,
        getItemHeight: ei,
    });
};
var ea = i(652215),
    el = i(806457);
function eo(e) {
    let {
            user: t,
            categories: i,
            purchases: n,
            analyticsLocations: c,
            modalHeadingId: m,
            onClose: A,
            initialSelectedDecoration: I,
            retainedSelection: C,
            onSelectionChange: N,
            guild: E,
        } = e,
        D = (0, a.bG)([v.Ay], () => (null != E ? v.Ay.getMember(E.id, t.id) : null)),
        b = null != D ? D.avatarDecoration : t.avatarDecoration,
        { pendingAvatarDecoration: w, setPendingAvatarDecoration: R } = (0, p.A)({
            analyticsLocations: c,
            guildId: E?.id,
        }),
        O = (0, y.J)("avatar_decoration_modal_selection"),
        [P, M] = r.useState(() =>
            O && void 0 !== C
                ? C
                : null != I
                  ? I
                  : void 0 !== w
                    ? w
                    : null == b
                      ? null
                      : ((0, j.ps)(n, i).find((e) => {
                            let { skuId: t } = e;
                            return t === b.skuId;
                        }) ?? null),
        ),
        z = (0, g.lw)({
            pendingValue: P,
            userValue: t?.avatarDecoration,
            guildValue: D?.avatarDecoration,
            guildId: E?.id,
        }),
        { product: G, purchase: U } = (0, k.A)(P?.skuId),
        V = null != U ? (0, j.gA)(U) : (0, j.G0)(G),
        L = x.Ay.canUseCollectibles(t),
        J = r.useRef(null),
        K = (0, f.A)(c),
        $ = void 0 === w ? P?.skuId === b?.skuId : P?.skuId === w?.skuId,
        Z = r.useCallback(
            (e) => {
                (A(),
                    (0, S.Cz)({
                        analyticsLocations: c,
                        analyticsSource: d.A.EDIT_AVATAR_DECORATION_MODAL,
                        initialProductSkuId: e,
                    }));
            },
            [c, A],
        );
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)(l.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: el.Hc,
                children: [
                    (0, s.jsx)(u.D, { id: m, variant: "heading-lg/semibold", children: T.intl.string(T.t.HykynS) }),
                    (0, s.jsx)(l.s_, { "data-migration-pending": !0, className: el.iT, onClick: A }),
                ],
            }),
            (0, s.jsxs)(l.$m, {
                "data-migration-pending": !0,
                className: el.jE,
                scrollbarType: "none",
                children: [
                    (0, s.jsx)(er, {
                        user: t,
                        guild: E,
                        pendingAvatarDecoration: P,
                        selectedAvatarDecorationRef: J,
                        onSelect: function (e) {
                            (M(e), O && N(e), null != e && K(e));
                        },
                        onOpenShop: Z,
                    }),
                    (0, s.jsx)(H, {
                        className: el.kk,
                        user: t,
                        guildId: E?.id,
                        avatarDecoration: z,
                        decorationName: P?.label ?? null,
                    }),
                ],
            }),
            (0, s.jsxs)(l.jl, {
                "data-migration-pending": !0,
                className: el.Hx,
                children: [
                    (null != U && (L || !V)) || null === P
                        ? (0, s.jsx)(o.$, {
                              variant: "primary",
                              text: T.intl.string(T.t.Jh8fJz),
                              onClick: function () {
                                  (R(P), A());
                              },
                              disabled: $,
                          })
                        : null == U && (L || !V)
                          ? (0, s.jsx)(o.$, {
                                variant: "primary",
                                onClick: () => Z(G?.skuId),
                                text: T.intl.string(T.t.fYfGgK),
                            })
                          : (0, s.jsx)(_.A, {
                                showGradient: !L,
                                text: x.Ay.isPremium(t)
                                    ? T.intl.string(T.t.KXLX7l)
                                    : L
                                      ? T.intl.string(T.t.mr4K7D)
                                      : T.intl.string(T.t.pj0XBN),
                            }),
                    !L && V
                        ? (0, s.jsx)(h.A, { itemType: U?.type ?? G?.type, onClose: A })
                        : (0, s.jsx)(o.$, { variant: "secondary", text: T.intl.string(T.t["ETE/oC"]), onClick: A }),
                ],
            }),
        ],
    });
}
function eu(e) {
    let {
            transitionState: t,
            analyticsLocations: i,
            onClose: n,
            onCloseModal: o,
            initialSelectedDecoration: u,
            guild: h,
            returnRef: g,
        } = e,
        [p, v] = r.useState(void 0),
        x = (0, a.bG)([A.default], () => A.default.getCurrentUser()),
        { analyticsLocations: S } = (0, m.Ay)(i, d.A.EDIT_AVATAR_DECORATION_MODAL),
        { categories: j, purchases: y, isFetchingCategories: k, isFetchingPurchases: f } = (0, C.Ay)(),
        _ = k || (f && 0 === y.size),
        N = r.useId();
    return (
        r.useEffect(() => {
            I.default.track(ea.HAw.OPEN_MODAL, { type: ea.JJy.AVATAR_DECORATION_CUSTOMIZATION, location_stack: S });
        }, [S]),
        null == x
            ? null
            : (0, s.jsx)(m.f5, {
                  value: S,
                  children: (0, s.jsx)(l.EO, {
                      transitionState: t,
                      className: el.yl,
                      size: _ ? l.rI.DYNAMIC : l.rI.MEDIUM,
                      parentComponent: "AvatarDecorationModal",
                      returnRef: g,
                      "aria-label": _ ? T.intl.string(T.t.HykynS) : void 0,
                      "aria-labelledby": _ ? void 0 : N,
                      "data-migration-pending": !0,
                      children: _
                          ? (0, s.jsx)(c.y, { className: el.u1, type: c.y.Type.SPINNING_CIRCLE })
                          : (0, s.jsx)(eo, {
                                user: x,
                                guild: h,
                                categories: j,
                                purchases: y,
                                analyticsLocations: S,
                                modalHeadingId: N,
                                initialSelectedDecoration: u,
                                retainedSelection: p,
                                onSelectionChange: v,
                                onClose: function () {
                                    (o(), n?.());
                                },
                            }),
                  }),
              })
    );
}
