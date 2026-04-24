r.d(t, { default: () => em });
var s,
    i = r(627968),
    a = r(64700),
    n = r(17928),
    l = r(821609),
    o = r(935462),
    c = r(534514),
    d = r(289873),
    u = r(793574),
    m = r(688810),
    h = r(571827),
    x = r(725807),
    A = r(919395),
    g = r(352413),
    p = r(696451),
    _ = r(287809),
    v = r(954571),
    j = r(927578),
    E = r(29292),
    I = r(993408),
    y = r(821701),
    C = r(841702),
    f = r(727170),
    S = r(503698),
    N = r.n(S),
    k = r(735438),
    T = r(778712),
    b = r(834730),
    w = r(702211),
    D = r(773669),
    O = r(290863),
    P = r(58703),
    R = r(536572),
    L = r(162232),
    M = r(985018),
    U = r(304452);
let G = [
        { avatarSize: T._3.SIZE_40, showStatus: !1 },
        { avatarSize: T._3.SIZE_32, showStatus: !1 },
        { avatarSize: T._3.SIZE_40, showStatus: !0 },
        { avatarSize: T._3.SIZE_32, showStatus: !0 },
    ],
    z = (e) => {
        let { purchase: t } = e,
            r = (0, n.bG)([D.default], () => D.default.locale),
            s = (0, I.gA)(t),
            a = null != t.expiresAt ? (0, P.Tf)(Date.now(), t.expiresAt) : null,
            l = (0, R.Sw)(t),
            o = t.purchasedAt.toLocaleDateString(r, { month: "long", year: "numeric" });
        return (0, i.jsxs)("div", {
            className: U.c6,
            children: [
                (0, i.jsx)(b.E, { variant: "text-sm/semibold", color: "text-strong", children: l }),
                null != a &&
                    (0, i.jsx)(b.E, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: M.intl.format(M.t.Io7ozn, { days: a.days.toString() }),
                    }),
                (0, i.jsxs)(b.E, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: [
                        M.intl.format(M.t.gW9R4B, { date: o }),
                        null != t.expiresAt &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("br", {}),
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
                s &&
                    (0, i.jsx)(b.E, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: M.intl.string(M.t.nKdAlO),
                    }),
            ],
        });
    },
    H = (e) => {
        let { user: t, guildId: r, avatarDecoration: s, className: l } = e,
            o = (0, n.bG)([O.A], () => O.A.getStatus(t.id)),
            { product: c, purchase: d } = (0, y.A)(s?.skuId),
            u = j.Ay.canUseCollectibles(t),
            m = null != d ? (0, I.gA)(d) : (0, I.G0)(c),
            h = !u && (0, I.gA)(d),
            x = (0, w.b)(!m || u),
            A = (0, R.Sw)(d),
            g = (0, R.VG)(c),
            p = a.useMemo(
                () =>
                    h
                        ? M.intl.string(M.t["7vkeu5"])
                        : m && u && !x
                          ? M.intl.string(M.t.hmyYK8)
                          : m && !u && x
                            ? M.intl.string(M.t.q0PlFn)
                            : !m || u || x
                              ? M.intl.string(M.t.fEGjVQ)
                              : M.intl.string(M.t["0xs2sA"]),
                [h, m, u, x],
            );
        return null != s && (null == d || h)
            ? (0, i.jsxs)("div", {
                  className: N()(U.kk, U.O7, l),
                  children: [
                      (0, i.jsx)("div", {
                          className: U.Bo,
                          children: (0, i.jsx)(L.A, { user: t, guildId: r, avatarDecorationOverride: s }),
                      }),
                      (0, i.jsxs)("div", {
                          className: U.hx,
                          children: [
                              (0, i.jsx)(b.E, { variant: "text-sm/semibold", children: (0, k.isEmpty)(A) ? g : A }),
                              (0, i.jsx)(b.E, { variant: "text-sm/normal", children: p }),
                          ],
                      }),
                  ],
              })
            : (0, i.jsxs)("div", {
                  className: N()(U.kk, l),
                  children: [
                      (0, i.jsxs)("div", {
                          className: U.$M,
                          children: [
                              (0, i.jsx)("div", {
                                  className: U.TB,
                                  children: (0, i.jsx)(L.A, { user: t, guildId: r, avatarDecorationOverride: s }),
                              }),
                              (0, i.jsx)("div", {
                                  className: U.Kh,
                                  children: G.map((e) => {
                                      let { avatarSize: a, showStatus: n } = e;
                                      return (0, i.jsx)(
                                          "div",
                                          {
                                              className: U.CX,
                                              children: (0, i.jsx)(L.A, {
                                                  user: t,
                                                  guildId: r,
                                                  avatarSize: a,
                                                  avatarDecorationOverride: s,
                                                  status: n ? o : void 0,
                                                  "aria-hidden": !0,
                                              }),
                                          },
                                          `${a}${n}`,
                                      );
                                  }),
                              }),
                          ],
                      }),
                      null != d && (0, i.jsx)(z, { purchase: d }),
                  ],
              });
    };
var F = r(939249),
    V = r(428678),
    K = r(34188),
    B = r(92008),
    Z = r(713517),
    J = r(898461),
    X = r(483968),
    $ = r(821956);
r(321073);
var W = r(702841),
    q = r(590180),
    Y = r(4227),
    Q = (((s = {}).PURCHASE = "purchase"), (s.PREMIUM_PURCHASE = "premium_purchase"), (s.PREVIEW = "preview"), s);
let ee = { skuId: "None" },
    et = { skuId: "Shop" };
var er = r(963977),
    es = r(510245);
let ei = () => 80,
    ea = (e) => {
        let { children: t, className: r, onSelect: s, isSelected: a, ...n } = e;
        return (0, i.jsx)(F.D, {
            "aria-pressed": a,
            className: N()(es.eA, a ? es.wH : void 0, r),
            ...n,
            onClick: s,
            children: t,
        });
    },
    en = (e) => {
        let {
                user: t,
                avatarDecoration: r,
                innerRef: s,
                section: n,
                canUsePremiumCollectibles: l,
                isSelected: o = !1,
                ...c
            } = e,
            d = a.useRef(null),
            { isHoveringOrFocusing: u } = (0, Z.A)(s ?? d),
            { avatarDecorationSrc: m } = (0, er.A)({
                user: t,
                avatarDecorationOverride: r,
                size: 80,
                onlyAnimateOnHoverOrFocus: !u,
            });
        return (0, i.jsxs)(ea, {
            innerRef: s ?? d,
            isSelected: o,
            ...c,
            children: [
                null != m && (0, i.jsx)("img", { className: es.Pw, src: m, alt: r.label }),
                (0, i.jsx)(X.A, {
                    skuId: r.skuId,
                    canUsePremiumCollectibles: l,
                    isPurchaseSection: n === Q.PURCHASE,
                    isPremiumSection: n === Q.PREMIUM_PURCHASE,
                }),
            ],
        });
    },
    el = (e) => {
        let {
                user: t,
                guild: r,
                pendingAvatarDecoration: s,
                selectedAvatarDecorationRef: n,
                onSelect: l,
                onOpenShop: o,
            } = e,
            d = (() => {
                let e = (0, W.bG)([Y.A], () => Y.A.purchases),
                    [t, r] = (0, W.yK)([q.A], () => [q.A.categories, q.A.products]);
                return (0, a.useMemo)(() => {
                    let s = (0, I.ps)(e, t).reduce(
                        (t, s) => {
                            let i = e.get(s.skuId);
                            return (
                                (null != i ? (0, I.gA)(i) : (0, I.G0)(r.get(s.skuId)))
                                    ? t.premium_purchase.push(s)
                                    : null != i
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
                            items: [ee, et, ...s.purchase],
                            height: 12,
                            header: M.intl.string(M.t.VqmVqE),
                        },
                        {
                            section: "premium_purchase",
                            items: s.premium_purchase,
                            height: 12,
                            header: M.intl.string(M.t.TiLCgw),
                        },
                        { section: "preview", items: s.preview, height: 12, header: M.intl.string(M.t["1vbbee"]) },
                    ].filter((e) => {
                        let { items: t } = e;
                        return t.length > 0;
                    });
                }, [t, r, e]);
            })(),
            u = j.Ay.canUseCollectibles(t);
        return (0, i.jsx)(B.f, {
            fade: !0,
            className: es.p_,
            columns: 3,
            sections: d.map((e) => {
                let { items: t } = e;
                return t.length;
            }),
            sectionGutter: 16,
            itemGutter: 12,
            paddingHorizontal: 12,
            paddingVertical: 0,
            removeEdgeItemGutters: !0,
            renderItem: (e, a, c, m) => {
                let { section: h, items: x } = d[e],
                    A = x[a];
                if (A === ee)
                    return (0, i.jsxs)(
                        ea,
                        {
                            style: { ...c },
                            isSelected: null === s,
                            onSelect: () => l(null),
                            children: [
                                (0, i.jsx)(V.K, { size: "md", color: "currentColor", className: es.Kk }),
                                (0, i.jsx)(b.E, {
                                    variant: "text-xs/normal",
                                    color: "text-strong",
                                    children: (0, $.uZ)(t, r) ? M.intl.string(M.t.CHf9iJ) : M.intl.string(M.t.PoWNfe),
                                }),
                            ],
                        },
                        m,
                    );
                if (A === et)
                    return (0, i.jsxs)(
                        ea,
                        {
                            style: c,
                            onSelect: o,
                            children: [
                                (0, i.jsx)(K.U, {
                                    size: "custom",
                                    width: 23,
                                    height: 23,
                                    color: "currentColor",
                                    className: es.sV,
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
                if ((0, J.T)(A)) {
                    let e = s?.skuId === A.skuId;
                    return (0, i.jsx)(
                        en,
                        {
                            style: { ...c },
                            user: t,
                            avatarDecoration: A,
                            section: h,
                            innerRef: e ? n : void 0,
                            canUsePremiumCollectibles: u,
                            isSelected: e,
                            onSelect: () => l(A),
                        },
                        m,
                    );
                }
                return null;
            },
            renderSection: (e, t) => {
                let { header: r } = d[e];
                return (0, i.jsx)("div", {
                    className: es.so,
                    style: { ...t, position: "absolute" },
                    children: (0, i.jsx)(c.D, { variant: "heading-md/semibold", children: r }),
                });
            },
            getSectionHeight: (e) => d[e].height,
            getItemKey: (e, t) => d[e].items[t].skuId,
            getItemHeight: ei,
        });
    };
var eo = r(652215),
    ec = r(788868),
    ed = r(556826);
function eu(e) {
    let {
            user: t,
            categories: r,
            purchases: s,
            analyticsLocations: d,
            onClose: m,
            initialSelectedDecoration: _,
            guild: v,
        } = e,
        C = (0, n.bG)([p.Ay], () => (null != v ? p.Ay.getMember(v.id, t.id) : null)),
        S = null != C ? C.avatarDecoration : t.avatarDecoration,
        { pendingAvatarDecoration: N, setPendingAvatarDecoration: k } = (0, g.A)({
            analyticsLocations: d,
            guildId: v?.id,
        }),
        [T, b] = a.useState(() =>
            null != _
                ? _
                : void 0 !== N
                  ? N
                  : null == S
                    ? null
                    : ((0, I.ps)(s, r).find((e) => {
                          let { skuId: t } = e;
                          return t === S.skuId;
                      }) ?? null),
        ),
        w = (0, A.lw)({
            pendingValue: T,
            userValue: t?.avatarDecoration,
            guildValue: C?.avatarDecoration,
            guildId: v?.id,
        }),
        { product: D, purchase: O } = (0, y.A)(T?.skuId),
        P = null != O ? (0, I.gA)(O) : (0, I.G0)(D),
        R = j.Ay.canUseCollectibles(t),
        L = a.useRef(null),
        U = (0, f.A)(d),
        G = void 0 === N ? T?.skuId === S?.skuId : T?.skuId === N?.skuId,
        z = a.useCallback(
            (e) => {
                m(),
                    (0, E.Cz)({
                        analyticsLocations: d,
                        analyticsSource: u.A.EDIT_AVATAR_DECORATION_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [d, m],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(o.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: ed.Hc,
                children: [
                    (0, i.jsx)(c.D, { variant: "heading-lg/semibold", children: M.intl.string(M.t.HykynS) }),
                    (0, i.jsx)(o.s_, { "data-migration-pending": !0, className: ed.iT, onClick: m }),
                ],
            }),
            (0, i.jsxs)(o.$m, {
                "data-migration-pending": !0,
                className: ed.jE,
                scrollbarType: "none",
                children: [
                    (0, i.jsx)(el, {
                        user: t,
                        guild: v,
                        pendingAvatarDecoration: T,
                        selectedAvatarDecorationRef: L,
                        onSelect: (e) => {
                            b(e), null != e && U(e);
                        },
                        onOpenShop: z,
                    }),
                    (0, i.jsx)(H, { className: ed.kk, user: t, guildId: v?.id, avatarDecoration: w }),
                ],
            }),
            (0, i.jsxs)(o.jl, {
                "data-migration-pending": !0,
                className: ed.Hx,
                children: [
                    (null != O && (R || !P)) || null === T
                        ? (0, i.jsx)(l.$, {
                              variant: "primary",
                              text: M.intl.string(M.t.Jh8fJz),
                              onClick: () => {
                                  k(T), m();
                              },
                              disabled: G,
                          })
                        : null == O && (R || !P)
                          ? (0, i.jsx)(l.$, {
                                variant: "primary",
                                onClick: () => z(D?.skuId),
                                text: M.intl.string(M.t.fYfGgK),
                            })
                          : (0, i.jsx)(x.A, {
                                subscriptionTier: ec.pe.TIER_2,
                                showGradient: !R,
                                textOptions: {
                                    textOverride: j.Ay.isPremium(t)
                                        ? M.intl.string(M.t.KXLX7l)
                                        : R
                                          ? M.intl.string(M.t.mr4K7D)
                                          : M.intl.string(M.t.pj0XBN),
                                },
                            }),
                    !R && P
                        ? (0, i.jsx)(h.A, { itemType: O?.type ?? D?.type, onClose: m })
                        : (0, i.jsx)(l.$, { variant: "secondary", text: M.intl.string(M.t["ETE/oC"]), onClick: m }),
                ],
            }),
        ],
    });
}
function em(e) {
    let {
            transitionState: t,
            analyticsLocations: r,
            onClose: s,
            onCloseModal: l,
            initialSelectedDecoration: c,
            guild: h,
        } = e,
        x = (0, n.bG)([_.default], () => _.default.getCurrentUser()),
        { analyticsLocations: A } = (0, m.Ay)(r, u.A.EDIT_AVATAR_DECORATION_MODAL),
        { categories: g, purchases: p, isFetchingCategories: j, isFetchingPurchases: E } = (0, C.Ay)(),
        I = j || (E && 0 === p.size);
    return (
        a.useEffect(() => {
            v.default.track(eo.HAw.OPEN_MODAL, { type: eo.JJy.AVATAR_DECORATION_CUSTOMIZATION, location_stack: A });
        }, [A]),
        null == x
            ? null
            : (0, i.jsx)(m.f5, {
                  value: A,
                  children: (0, i.jsx)(o.EO, {
                      transitionState: t,
                      className: ed.yl,
                      size: I ? o.rI.DYNAMIC : o.rI.MEDIUM,
                      parentComponent: "AvatarDecorationModal",
                      "data-migration-pending": !0,
                      children: I
                          ? (0, i.jsx)(d.y, { className: ed.u1, type: d.y.Type.SPINNING_CIRCLE })
                          : (0, i.jsx)(eu, {
                                user: x,
                                guild: h,
                                categories: g,
                                purchases: p,
                                analyticsLocations: A,
                                initialSelectedDecoration: c,
                                onClose: () => {
                                    l(), s?.();
                                },
                            }),
                  }),
              })
    );
}
