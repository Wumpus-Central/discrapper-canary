s.d(t, { default: () => em });
var r,
    i = s(627968),
    n = s(64700),
    a = s(17928),
    l = s(821609),
    c = s(935462),
    o = s(534514),
    u = s(289873),
    d = s(793574),
    m = s(688810),
    h = s(571827),
    x = s(725807),
    g = s(919395),
    p = s(352413),
    A = s(696451),
    v = s(287809),
    j = s(954571),
    I = s(927578),
    S = s(693477),
    y = s(993408),
    k = s(821701),
    E = s(841702),
    C = s(727170),
    N = s(503698),
    f = s.n(N),
    D = s(735438),
    _ = s(778712),
    b = s(834730),
    O = s(702211),
    T = s(773669),
    w = s(290863),
    R = s(58703),
    G = s(536572),
    P = s(162232),
    M = s(985018),
    z = s(304452);
let U = [
        { avatarSize: _._3.SIZE_40, showStatus: !1 },
        { avatarSize: _._3.SIZE_32, showStatus: !1 },
        { avatarSize: _._3.SIZE_40, showStatus: !0 },
        { avatarSize: _._3.SIZE_32, showStatus: !0 },
    ],
    H = (e) => {
        let { purchase: t } = e,
            s = (0, a.bG)([T.default], () => T.default.locale),
            r = (0, y.gA)(t),
            n = null != t.expiresAt ? (0, R.Tf)(Date.now(), t.expiresAt) : null,
            l = (0, G.Sw)(t),
            c = t.purchasedAt.toLocaleDateString(s, { month: "long", year: "numeric" });
        return (0, i.jsxs)("div", {
            className: z.c6,
            children: [
                (0, i.jsx)(b.E, { variant: "text-sm/semibold", color: "text-strong", children: l }),
                null != n &&
                    (0, i.jsx)(b.E, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: M.intl.format(M.t.Io7ozn, { days: n.days.toString() }),
                    }),
                (0, i.jsxs)(b.E, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: [
                        M.intl.format(M.t.gW9R4B, { date: c }),
                        null != t.expiresAt &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("br", {}),
                                    M.intl.format(M.t.eZSTa5, {
                                        date: t.expiresAt.toLocaleDateString(s, {
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
                r &&
                    (0, i.jsx)(b.E, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: M.intl.string(M.t.nKdAlO),
                    }),
            ],
        });
    },
    V = (e) => {
        let { user: t, guildId: s, avatarDecoration: r, className: l } = e,
            c = (0, a.bG)([w.A], () => w.A.getStatus(t.id)),
            { product: o, purchase: u } = (0, k.A)(r?.skuId),
            d = I.Ay.canUseCollectibles(t),
            m = null != u ? (0, y.gA)(u) : (0, y.G0)(o),
            h = !d && (0, y.gA)(u),
            x = (0, O.b)(!m || d),
            g = (0, G.Sw)(u),
            p = (0, G.VG)(o),
            A = n.useMemo(
                () =>
                    h
                        ? M.intl.string(M.t["7vkeu5"])
                        : m && d && !x
                          ? M.intl.string(M.t.hmyYK8)
                          : m && !d && x
                            ? M.intl.string(M.t.q0PlFn)
                            : !m || d || x
                              ? M.intl.string(M.t.fEGjVQ)
                              : M.intl.string(M.t["0xs2sA"]),
                [h, m, d, x],
            );
        return null != r && (null == u || h)
            ? (0, i.jsxs)("div", {
                  className: f()(z.kk, z.O7, l),
                  children: [
                      (0, i.jsx)("div", {
                          className: z.Bo,
                          children: (0, i.jsx)(P.A, { user: t, guildId: s, avatarDecorationOverride: r }),
                      }),
                      (0, i.jsxs)("div", {
                          className: z.hx,
                          children: [
                              (0, i.jsx)(b.E, { variant: "text-sm/semibold", children: (0, D.isEmpty)(g) ? p : g }),
                              (0, i.jsx)(b.E, { variant: "text-sm/normal", children: A }),
                          ],
                      }),
                  ],
              })
            : (0, i.jsxs)("div", {
                  className: f()(z.kk, l),
                  children: [
                      (0, i.jsxs)("div", {
                          className: z.$M,
                          children: [
                              (0, i.jsx)("div", {
                                  className: z.TB,
                                  children: (0, i.jsx)(P.A, { user: t, guildId: s, avatarDecorationOverride: r }),
                              }),
                              (0, i.jsx)("div", {
                                  className: z.Kh,
                                  children: U.map((e) => {
                                      let { avatarSize: n, showStatus: a } = e;
                                      return (0, i.jsx)(
                                          "div",
                                          {
                                              className: z.CX,
                                              children: (0, i.jsx)(P.A, {
                                                  user: t,
                                                  guildId: s,
                                                  avatarSize: n,
                                                  avatarDecorationOverride: r,
                                                  status: a ? c : void 0,
                                                  "aria-hidden": !0,
                                              }),
                                          },
                                          `${n}${a}`,
                                      );
                                  }),
                              }),
                          ],
                      }),
                      null != u && (0, i.jsx)(H, { purchase: u }),
                  ],
              });
    };
var K = s(939249),
    L = s(428678),
    Z = s(34188),
    $ = s(92008),
    J = s(713517),
    B = s(898461),
    F = s(483968),
    W = s(821956);
s(321073);
var X = s(702841),
    q = s(590180),
    Y = s(4227),
    Q = (((r = {}).PURCHASE = "purchase"), (r.PREMIUM_PURCHASE = "premium_purchase"), (r.PREVIEW = "preview"), r);
let ee = { skuId: "None" },
    et = { skuId: "Shop" };
var es = s(963977),
    er = s(510245);
let ei = () => 80,
    en = (e) => {
        let { children: t, className: s, onSelect: r, isSelected: n, ...a } = e;
        return (0, i.jsx)(K.D, {
            "aria-pressed": n,
            className: f()(er.eA, n ? er.wH : void 0, s),
            ...a,
            onClick: r,
            children: t,
        });
    },
    ea = (e) => {
        let {
                user: t,
                avatarDecoration: s,
                innerRef: r,
                section: a,
                canUsePremiumCollectibles: l,
                isSelected: c = !1,
                ...o
            } = e,
            u = n.useRef(null),
            { isHoveringOrFocusing: d } = (0, J.A)(r ?? u),
            { avatarDecorationSrc: m } = (0, es.A)({
                user: t,
                avatarDecorationOverride: s,
                size: 80,
                onlyAnimateOnHoverOrFocus: !d,
            });
        return (0, i.jsxs)(en, {
            innerRef: r ?? u,
            isSelected: c,
            ...o,
            children: [
                null != m && (0, i.jsx)("img", { className: er.Pw, src: m, alt: s.label }),
                (0, i.jsx)(F.A, {
                    skuId: s.skuId,
                    canUsePremiumCollectibles: l,
                    isPurchaseSection: a === Q.PURCHASE,
                    isPremiumSection: a === Q.PREMIUM_PURCHASE,
                }),
            ],
        });
    },
    el = (e) => {
        let {
                user: t,
                guild: s,
                pendingAvatarDecoration: r,
                selectedAvatarDecorationRef: a,
                onSelect: l,
                onOpenShop: c,
            } = e,
            u = (() => {
                let e = (0, X.bG)([Y.A], () => Y.A.purchases),
                    [t, s] = (0, X.yK)([q.A], () => [q.A.categories, q.A.products]);
                return (0, n.useMemo)(() => {
                    let r = (0, y.ps)(e, t).reduce(
                        (t, r) => {
                            let i = e.get(r.skuId);
                            return (
                                (null != i ? (0, y.gA)(i) : (0, y.G0)(s.get(r.skuId)))
                                    ? t.premium_purchase.push(r)
                                    : null != i
                                      ? t.purchase.push(r)
                                      : t.preview.push(r),
                                t
                            );
                        },
                        { purchase: [], premium_purchase: [], preview: [] },
                    );
                    return [
                        {
                            section: "purchase",
                            items: [ee, et, ...r.purchase],
                            height: 12,
                            header: M.intl.string(M.t.VqmVqE),
                        },
                        {
                            section: "premium_purchase",
                            items: r.premium_purchase,
                            height: 12,
                            header: M.intl.string(M.t.TiLCgw),
                        },
                        { section: "preview", items: r.preview, height: 12, header: M.intl.string(M.t["1vbbee"]) },
                    ].filter((e) => {
                        let { items: t } = e;
                        return t.length > 0;
                    });
                }, [t, s, e]);
            })(),
            d = I.Ay.canUseCollectibles(t);
        return (0, i.jsx)($.f, {
            fade: !0,
            className: er.p_,
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
            renderItem: (e, n, o, m) => {
                let { section: h, items: x } = u[e],
                    g = x[n];
                if (g === ee)
                    return (0, i.jsxs)(
                        en,
                        {
                            style: { ...o },
                            isSelected: null === r,
                            onSelect: () => l(null),
                            children: [
                                (0, i.jsx)(L.K, { size: "md", color: "currentColor", className: er.Kk }),
                                (0, i.jsx)(b.E, {
                                    variant: "text-xs/normal",
                                    color: "text-strong",
                                    children: (0, W.uZ)(t, s) ? M.intl.string(M.t.CHf9iJ) : M.intl.string(M.t.PoWNfe),
                                }),
                            ],
                        },
                        m,
                    );
                if (g === et)
                    return (0, i.jsxs)(
                        en,
                        {
                            style: o,
                            onSelect: c,
                            children: [
                                (0, i.jsx)(Z.U, {
                                    size: "custom",
                                    width: 23,
                                    height: 23,
                                    color: "currentColor",
                                    className: er.sV,
                                }),
                                (0, i.jsx)(b.E, {
                                    variant: "text-xs/normal",
                                    color: "text-strong",
                                    children: M.intl.string(M.t.pWG4ze),
                                }),
                            ],
                        },
                        m,
                    );
                if ((0, B.T)(g)) {
                    let e = r?.skuId === g.skuId;
                    return (0, i.jsx)(
                        ea,
                        {
                            style: { ...o },
                            user: t,
                            avatarDecoration: g,
                            section: h,
                            innerRef: e ? a : void 0,
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
                let { header: s } = u[e];
                return (0, i.jsx)("div", {
                    className: er.so,
                    style: { ...t, position: "absolute" },
                    children: (0, i.jsx)(o.D, { variant: "heading-md/semibold", children: s }),
                });
            },
            getSectionHeight: (e) => u[e].height,
            getItemKey: (e, t) => u[e].items[t].skuId,
            getItemHeight: ei,
        });
    };
var ec = s(652215),
    eo = s(788868),
    eu = s(556826);
function ed(e) {
    let {
            user: t,
            categories: s,
            purchases: r,
            analyticsLocations: u,
            onClose: m,
            initialSelectedDecoration: v,
            guild: j,
        } = e,
        E = (0, a.bG)([A.Ay], () => (null != j ? A.Ay.getMember(j.id, t.id) : null)),
        N = null != E ? E.avatarDecoration : t.avatarDecoration,
        { pendingAvatarDecoration: f, setPendingAvatarDecoration: D } = (0, p.A)({
            analyticsLocations: u,
            guildId: j?.id,
        }),
        [_, b] = n.useState(() =>
            null != v
                ? v
                : void 0 !== f
                  ? f
                  : null == N
                    ? null
                    : ((0, y.ps)(r, s).find((e) => {
                          let { skuId: t } = e;
                          return t === N.skuId;
                      }) ?? null),
        ),
        O = (0, g.lw)({
            pendingValue: _,
            userValue: t?.avatarDecoration,
            guildValue: E?.avatarDecoration,
            guildId: j?.id,
        }),
        { product: T, purchase: w } = (0, k.A)(_?.skuId),
        R = null != w ? (0, y.gA)(w) : (0, y.G0)(T),
        G = I.Ay.canUseCollectibles(t),
        P = n.useRef(null),
        z = (0, C.A)(u),
        U = void 0 === f ? _?.skuId === N?.skuId : _?.skuId === f?.skuId,
        H = n.useCallback(
            (e) => {
                m(),
                    (0, S.Cz)({
                        analyticsLocations: u,
                        analyticsSource: d.A.EDIT_AVATAR_DECORATION_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [u, m],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(c.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: eu.Hc,
                children: [
                    (0, i.jsx)(o.D, { variant: "heading-lg/semibold", children: M.intl.string(M.t.HykynS) }),
                    (0, i.jsx)(c.s_, { "data-migration-pending": !0, className: eu.iT, onClick: m }),
                ],
            }),
            (0, i.jsxs)(c.$m, {
                "data-migration-pending": !0,
                className: eu.jE,
                scrollbarType: "none",
                children: [
                    (0, i.jsx)(el, {
                        user: t,
                        guild: j,
                        pendingAvatarDecoration: _,
                        selectedAvatarDecorationRef: P,
                        onSelect: (e) => {
                            b(e), null != e && z(e);
                        },
                        onOpenShop: H,
                    }),
                    (0, i.jsx)(V, { className: eu.kk, user: t, guildId: j?.id, avatarDecoration: O }),
                ],
            }),
            (0, i.jsxs)(c.jl, {
                "data-migration-pending": !0,
                className: eu.Hx,
                children: [
                    (null != w && (G || !R)) || null === _
                        ? (0, i.jsx)(l.$, {
                              variant: "primary",
                              text: M.intl.string(M.t.Jh8fJz),
                              onClick: () => {
                                  D(_), m();
                              },
                              disabled: U,
                          })
                        : null == w && (G || !R)
                          ? (0, i.jsx)(l.$, {
                                variant: "primary",
                                onClick: () => H(T?.skuId),
                                text: M.intl.string(M.t.fYfGgK),
                            })
                          : (0, i.jsx)(x.A, {
                                subscriptionTier: eo.pe.TIER_2,
                                showGradient: !G,
                                textOptions: {
                                    textOverride: I.Ay.isPremium(t)
                                        ? M.intl.string(M.t.KXLX7l)
                                        : G
                                          ? M.intl.string(M.t.mr4K7D)
                                          : M.intl.string(M.t.pj0XBN),
                                },
                            }),
                    !G && R
                        ? (0, i.jsx)(h.A, { itemType: w?.type ?? T?.type, onClose: m })
                        : (0, i.jsx)(l.$, { variant: "secondary", text: M.intl.string(M.t["ETE/oC"]), onClick: m }),
                ],
            }),
        ],
    });
}
function em(e) {
    let {
            transitionState: t,
            analyticsLocations: s,
            onClose: r,
            onCloseModal: l,
            initialSelectedDecoration: o,
            guild: h,
        } = e,
        x = (0, a.bG)([v.default], () => v.default.getCurrentUser()),
        { analyticsLocations: g } = (0, m.Ay)(s, d.A.EDIT_AVATAR_DECORATION_MODAL),
        { categories: p, purchases: A, isFetchingCategories: I, isFetchingPurchases: S } = (0, E.Ay)(),
        y = I || (S && 0 === A.size);
    return (
        n.useEffect(() => {
            j.default.track(ec.HAw.OPEN_MODAL, { type: ec.JJy.AVATAR_DECORATION_CUSTOMIZATION, location_stack: g });
        }, [g]),
        null == x
            ? null
            : (0, i.jsx)(m.f5, {
                  value: g,
                  children: (0, i.jsx)(c.EO, {
                      transitionState: t,
                      className: eu.yl,
                      size: y ? c.rI.DYNAMIC : c.rI.MEDIUM,
                      parentComponent: "AvatarDecorationModal",
                      "data-migration-pending": !0,
                      children: y
                          ? (0, i.jsx)(u.y, { className: eu.u1, type: u.y.Type.SPINNING_CIRCLE })
                          : (0, i.jsx)(ed, {
                                user: x,
                                guild: h,
                                categories: p,
                                purchases: A,
                                analyticsLocations: g,
                                initialSelectedDecoration: o,
                                onClose: () => {
                                    l(), r?.();
                                },
                            }),
                  }),
              })
    );
}
