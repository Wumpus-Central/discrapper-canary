r.d(t, { default: () => eA });
var a,
    n = r(627968),
    l = r(64700),
    s = r(17928),
    i = r(821609),
    o = r(935462),
    c = r(534514),
    u = r(289873),
    d = r(793574),
    A = r(688810),
    p = r(571827),
    m = r(725807),
    v = r(919395),
    h = r(352413),
    g = r(696451),
    f = r(287809),
    _ = r(954571),
    E = r(927578),
    x = r(693477),
    b = r(993408),
    R = r(821701),
    I = r(841702),
    y = r(727170),
    C = r(503698),
    O = r.n(C),
    T = r(735438),
    N = r(778712),
    j = r(834730),
    D = r(702211),
    w = r(773669),
    P = r(290863),
    L = r(58703),
    S = r(536572),
    k = r(162232),
    M = r(985018),
    U = r(304452);
let G = [
        { avatarSize: N._3.SIZE_40, showStatus: !1 },
        { avatarSize: N._3.SIZE_32, showStatus: !1 },
        { avatarSize: N._3.SIZE_40, showStatus: !0 },
        { avatarSize: N._3.SIZE_32, showStatus: !0 },
    ],
    F = (e) => {
        let { purchase: t } = e,
            r = (0, s.bG)([w.default], () => w.default.locale),
            a = (0, b.gA)(t),
            l = null != t.expiresAt ? (0, L.Tf)(Date.now(), t.expiresAt) : null,
            i = (0, S.Sw)(t),
            o = t.purchasedAt.toLocaleDateString(r, { month: "long", year: "numeric" });
        return (0, n.jsxs)("div", {
            className: U.c6,
            children: [
                (0, n.jsx)(j.E, { variant: "text-sm/semibold", color: "text-strong", children: i }),
                null != l &&
                    (0, n.jsx)(j.E, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: M.intl.format(M.t.Io7ozn, { days: l.days.toString() }),
                    }),
                (0, n.jsxs)(j.E, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: [
                        M.intl.format(M.t.gW9R4B, { date: o }),
                        null != t.expiresAt &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)("br", {}),
                                    M.intl.format(M.t.eZSTa5, {
                                        date: t.expiresAt.toLocaleDateString(r, {
                                            minute: "numeric",
                                            hour: "numeric",
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        }),
                                    }),
                                ],
                            }),
                    ],
                }),
                a &&
                    (0, n.jsx)(j.E, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: M.intl.string(M.t.nKdAlO),
                    }),
            ],
        });
    },
    H = (e) => {
        let { user: t, guildId: r, avatarDecoration: a, className: i } = e,
            o = (0, s.bG)([P.A], () => P.A.getStatus(t.id)),
            { product: c, purchase: u } = (0, R.A)(a?.skuId),
            d = E.Ay.canUseCollectibles(t),
            A = null != u ? (0, b.gA)(u) : (0, b.G0)(c),
            p = !d && (0, b.gA)(u),
            m = (0, D.b)(!A || d),
            v = (0, S.Sw)(u),
            h = (0, S.VG)(c),
            g = l.useMemo(
                () =>
                    p
                        ? M.intl.string(M.t["7vkeu5"])
                        : A && d && !m
                          ? M.intl.string(M.t.hmyYK8)
                          : A && !d && m
                            ? M.intl.string(M.t.q0PlFn)
                            : !A || d || m
                              ? M.intl.string(M.t.fEGjVQ)
                              : M.intl.string(M.t["0xs2sA"]),
                [p, A, d, m],
            );
        return null != a && (null == u || p)
            ? (0, n.jsxs)("div", {
                  className: O()(U.kk, U.O7, i),
                  children: [
                      (0, n.jsx)("div", {
                          className: U.Bo,
                          children: (0, n.jsx)(k.A, { user: t, guildId: r, avatarDecorationOverride: a }),
                      }),
                      (0, n.jsxs)("div", {
                          className: U.hx,
                          children: [
                              (0, n.jsx)(j.E, { variant: "text-sm/semibold", children: (0, T.isEmpty)(v) ? h : v }),
                              (0, n.jsx)(j.E, { variant: "text-sm/normal", children: g }),
                          ],
                      }),
                  ],
              })
            : (0, n.jsxs)("div", {
                  className: O()(U.kk, i),
                  children: [
                      (0, n.jsxs)("div", {
                          className: U.$M,
                          children: [
                              (0, n.jsx)("div", {
                                  className: U.TB,
                                  children: (0, n.jsx)(k.A, { user: t, guildId: r, avatarDecorationOverride: a }),
                              }),
                              (0, n.jsx)("div", {
                                  className: U.Kh,
                                  children: G.map((e) => {
                                      let { avatarSize: l, showStatus: s } = e;
                                      return (0, n.jsx)(
                                          "div",
                                          {
                                              className: U.CX,
                                              children: (0, n.jsx)(k.A, {
                                                  user: t,
                                                  guildId: r,
                                                  avatarSize: l,
                                                  avatarDecorationOverride: a,
                                                  status: s ? o : void 0,
                                                  "aria-hidden": !0,
                                              }),
                                          },
                                          `${l}${s}`,
                                      );
                                  }),
                              }),
                          ],
                      }),
                      null != u && (0, n.jsx)(F, { purchase: u }),
                  ],
              });
    };
var V = r(939249),
    z = r(428678),
    B = r(34188),
    K = r(92008),
    Z = r(713517),
    J = r(898461),
    X = r(483968),
    q = r(821956);
r(321073);
var W = r(702841),
    $ = r(590180),
    Y = r(4227),
    Q = (((a = {}).PURCHASE = "purchase"), (a.PREMIUM_PURCHASE = "premium_purchase"), (a.PREVIEW = "preview"), a);
let ee = { skuId: "None" },
    et = { skuId: "Shop" };
var er = r(963977),
    ea = r(510245);
let en = () => 80,
    el = (e) => {
        let { children: t, className: r, onSelect: a, isSelected: l, ...s } = e;
        return (0, n.jsx)(V.D, {
            "aria-pressed": l,
            className: O()(ea.eA, l ? ea.wH : void 0, r),
            ...s,
            onClick: a,
            children: t,
        });
    },
    es = (e) => {
        let {
                user: t,
                avatarDecoration: r,
                innerRef: a,
                section: s,
                canUsePremiumCollectibles: i,
                isSelected: o = !1,
                ...c
            } = e,
            u = l.useRef(null),
            { isHoveringOrFocusing: d } = (0, Z.A)(a ?? u),
            { avatarDecorationSrc: A } = (0, er.A)({
                user: t,
                avatarDecorationOverride: r,
                size: 80,
                onlyAnimateOnHoverOrFocus: !d,
            });
        return (0, n.jsxs)(el, {
            innerRef: a ?? u,
            isSelected: o,
            ...c,
            children: [
                null != A && (0, n.jsx)("img", { className: ea.Pw, src: A, alt: r.label }),
                (0, n.jsx)(X.A, {
                    skuId: r.skuId,
                    canUsePremiumCollectibles: i,
                    isPurchaseSection: s === Q.PURCHASE,
                    isPremiumSection: s === Q.PREMIUM_PURCHASE,
                }),
            ],
        });
    },
    ei = (e) => {
        let {
                user: t,
                guild: r,
                pendingAvatarDecoration: a,
                selectedAvatarDecorationRef: s,
                onSelect: i,
                onOpenShop: o,
            } = e,
            u = (() => {
                let e = (0, W.bG)([Y.A], () => Y.A.purchases),
                    [t, r] = (0, W.yK)([$.A], () => [$.A.categories, $.A.products]);
                return (0, l.useMemo)(() => {
                    let a = (0, b.ps)(e, t).reduce(
                        (t, a) => {
                            let n = e.get(a.skuId);
                            return (
                                (null != n ? (0, b.gA)(n) : (0, b.G0)(r.get(a.skuId)))
                                    ? t.premium_purchase.push(a)
                                    : null != n
                                      ? t.purchase.push(a)
                                      : t.preview.push(a),
                                t
                            );
                        },
                        { purchase: [], premium_purchase: [], preview: [] },
                    );
                    return [
                        {
                            section: "purchase",
                            items: [ee, et, ...a.purchase],
                            height: 12,
                            header: M.intl.string(M.t.VqmVqE),
                        },
                        {
                            section: "premium_purchase",
                            items: a.premium_purchase,
                            height: 12,
                            header: M.intl.string(M.t.TiLCgw),
                        },
                        { section: "preview", items: a.preview, height: 12, header: M.intl.string(M.t["1vbbee"]) },
                    ].filter((e) => {
                        let { items: t } = e;
                        return t.length > 0;
                    });
                }, [t, r, e]);
            })(),
            d = E.Ay.canUseCollectibles(t);
        return (0, n.jsx)(K.f, {
            fade: !0,
            className: ea.p_,
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
            renderItem: (e, l, c, A) => {
                let { section: p, items: m } = u[e],
                    v = m[l];
                if (v === ee)
                    return (0, n.jsxs)(
                        el,
                        {
                            style: { ...c },
                            isSelected: null === a,
                            onSelect: () => i(null),
                            children: [
                                (0, n.jsx)(z.K, { size: "md", color: "currentColor", className: ea.Kk }),
                                (0, n.jsx)(j.E, {
                                    variant: "text-xs/normal",
                                    color: "text-strong",
                                    children: (0, q.uZ)(t, r) ? M.intl.string(M.t.CHf9iJ) : M.intl.string(M.t.PoWNfe),
                                }),
                            ],
                        },
                        A,
                    );
                if (v === et)
                    return (0, n.jsxs)(
                        el,
                        {
                            style: c,
                            onSelect: o,
                            children: [
                                (0, n.jsx)(B.U, {
                                    size: "custom",
                                    width: 23,
                                    height: 23,
                                    color: "currentColor",
                                    className: ea.sV,
                                }),
                                (0, n.jsx)(j.E, {
                                    variant: "text-xs/normal",
                                    color: "text-strong",
                                    children: M.intl.string(M.t.pWG4ze),
                                }),
                            ],
                        },
                        A,
                    );
                if ((0, J.T)(v)) {
                    let e = a?.skuId === v.skuId;
                    return (0, n.jsx)(
                        es,
                        {
                            style: { ...c },
                            user: t,
                            avatarDecoration: v,
                            section: p,
                            innerRef: e ? s : void 0,
                            canUsePremiumCollectibles: d,
                            isSelected: e,
                            onSelect: () => i(v),
                        },
                        A,
                    );
                }
                return null;
            },
            renderSection: (e, t) => {
                let { header: r } = u[e];
                return (0, n.jsx)("div", {
                    className: ea.so,
                    style: { ...t, position: "absolute" },
                    children: (0, n.jsx)(c.D, { variant: "heading-md/semibold", children: r }),
                });
            },
            getSectionHeight: (e) => u[e].height,
            getItemKey: (e, t) => u[e].items[t].skuId,
            getItemHeight: en,
        });
    };
var eo = r(652215),
    ec = r(788868),
    eu = r(556826);
function ed(e) {
    let {
            user: t,
            categories: r,
            purchases: a,
            analyticsLocations: u,
            onClose: A,
            initialSelectedDecoration: f,
            guild: _,
        } = e,
        I = (0, s.bG)([g.Ay], () => (null != _ ? g.Ay.getMember(_.id, t.id) : null)),
        C = null != I ? I.avatarDecoration : t.avatarDecoration,
        { pendingAvatarDecoration: O, setPendingAvatarDecoration: T } = (0, h.A)({
            analyticsLocations: u,
            guildId: _?.id,
        }),
        [N, j] = l.useState(() =>
            null != f
                ? f
                : void 0 !== O
                  ? O
                  : null == C
                    ? null
                    : ((0, b.ps)(a, r).find((e) => {
                          let { skuId: t } = e;
                          return t === C.skuId;
                      }) ?? null),
        ),
        D = (0, v.lw)({
            pendingValue: N,
            userValue: t?.avatarDecoration,
            guildValue: I?.avatarDecoration,
            guildId: _?.id,
        }),
        { product: w, purchase: P } = (0, R.A)(N?.skuId),
        L = null != P ? (0, b.gA)(P) : (0, b.G0)(w),
        S = E.Ay.canUseCollectibles(t),
        k = l.useRef(null),
        U = (0, y.A)(u),
        G = void 0 === O ? N?.skuId === C?.skuId : N?.skuId === O?.skuId,
        F = l.useCallback(
            (e) => {
                A(),
                    (0, x.Cz)({
                        analyticsLocations: u,
                        analyticsSource: d.A.EDIT_AVATAR_DECORATION_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [u, A],
        );
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(o.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: eu.Hc,
                children: [
                    (0, n.jsx)(c.D, { variant: "heading-lg/semibold", children: M.intl.string(M.t.HykynS) }),
                    (0, n.jsx)(o.s_, { "data-migration-pending": !0, className: eu.iT, onClick: A }),
                ],
            }),
            (0, n.jsxs)(o.$m, {
                "data-migration-pending": !0,
                className: eu.jE,
                scrollbarType: "none",
                children: [
                    (0, n.jsx)(ei, {
                        user: t,
                        guild: _,
                        pendingAvatarDecoration: N,
                        selectedAvatarDecorationRef: k,
                        onSelect: (e) => {
                            j(e), null != e && U(e);
                        },
                        onOpenShop: F,
                    }),
                    (0, n.jsx)(H, { className: eu.kk, user: t, guildId: _?.id, avatarDecoration: D }),
                ],
            }),
            (0, n.jsxs)(o.jl, {
                "data-migration-pending": !0,
                className: eu.Hx,
                children: [
                    (null != P && (S || !L)) || null === N
                        ? (0, n.jsx)(i.$, {
                              variant: "primary",
                              text: M.intl.string(M.t.Jh8fJz),
                              onClick: () => {
                                  T(N), A();
                              },
                              disabled: G,
                          })
                        : null == P && (S || !L)
                          ? (0, n.jsx)(i.$, {
                                variant: "primary",
                                onClick: () => F(w?.skuId),
                                text: M.intl.string(M.t.fYfGgK),
                            })
                          : (0, n.jsx)(m.A, {
                                subscriptionTier: ec.pe.TIER_2,
                                showGradient: !S,
                                textOptions: {
                                    textOverride: E.Ay.isPremium(t)
                                        ? M.intl.string(M.t.KXLX7l)
                                        : S
                                          ? M.intl.string(M.t.mr4K7D)
                                          : M.intl.string(M.t.pj0XBN),
                                },
                            }),
                    !S && L
                        ? (0, n.jsx)(p.A, { itemType: P?.type ?? w?.type, onClose: A })
                        : (0, n.jsx)(i.$, { variant: "secondary", text: M.intl.string(M.t["ETE/oC"]), onClick: A }),
                ],
            }),
        ],
    });
}
function eA(e) {
    let {
            transitionState: t,
            analyticsLocations: r,
            onClose: a,
            onCloseModal: i,
            initialSelectedDecoration: c,
            guild: p,
        } = e,
        m = (0, s.bG)([f.default], () => f.default.getCurrentUser()),
        { analyticsLocations: v } = (0, A.Ay)(r, d.A.EDIT_AVATAR_DECORATION_MODAL),
        { categories: h, purchases: g, isFetchingCategories: E, isFetchingPurchases: x } = (0, I.Ay)(),
        b = E || (x && 0 === g.size);
    return (
        l.useEffect(() => {
            _.default.track(eo.HAw.OPEN_MODAL, { type: eo.JJy.AVATAR_DECORATION_CUSTOMIZATION, location_stack: v });
        }, [v]),
        null == m
            ? null
            : (0, n.jsx)(A.f5, {
                  value: v,
                  children: (0, n.jsx)(o.EO, {
                      transitionState: t,
                      className: eu.yl,
                      size: b ? o.rI.DYNAMIC : o.rI.MEDIUM,
                      parentComponent: "AvatarDecorationModal",
                      "data-migration-pending": !0,
                      children: b
                          ? (0, n.jsx)(u.y, { className: eu.u1, type: u.y.Type.SPINNING_CIRCLE })
                          : (0, n.jsx)(ed, {
                                user: m,
                                guild: p,
                                categories: h,
                                purchases: g,
                                analyticsLocations: v,
                                initialSelectedDecoration: c,
                                onClose: () => {
                                    i(), a?.();
                                },
                            }),
                  }),
              })
    );
}
