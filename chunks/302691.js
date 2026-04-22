r.d(t, { default: () => S });
var a = r(627968),
    n = r(64700),
    l = r(311907),
    s = r(821609),
    i = r(935462),
    o = r(534514),
    c = r(289873),
    u = r(793574),
    d = r(688810),
    A = r(571827),
    m = r(725807),
    h = r(919395),
    _ = r(352413),
    g = r(696451),
    p = r(287809),
    E = r(954571),
    f = r(927578),
    v = r(979286),
    x = r(993408),
    I = r(821701),
    R = r(841702),
    N = r(727170),
    y = r(911647),
    C = r(557182),
    T = r(652215),
    O = r(788868),
    P = r(985018),
    b = r(556826);
function j(e) {
    let {
            user: t,
            categories: r,
            purchases: c,
            analyticsLocations: d,
            onClose: p,
            initialSelectedDecoration: E,
            guild: R,
        } = e,
        T = (0, l.bG)([g.Ay], () => (null != R ? g.Ay.getMember(R.id, t.id) : null)),
        j = null != T ? T.avatarDecoration : t.avatarDecoration,
        { pendingAvatarDecoration: S, setPendingAvatarDecoration: D } = (0, _.A)({
            analyticsLocations: d,
            guildId: R?.id,
        }),
        [w, L] = n.useState(() =>
            null != E
                ? E
                : void 0 !== S
                  ? S
                  : null == j
                    ? null
                    : ((0, x.ps)(c, r).find((e) => {
                          let { skuId: t } = e;
                          return t === j.skuId;
                      }) ?? null),
        ),
        M = (0, h.lw)({
            pendingValue: w,
            userValue: t?.avatarDecoration,
            guildValue: T?.avatarDecoration,
            guildId: R?.id,
        }),
        { product: k, purchase: U } = (0, I.A)(w?.skuId),
        G = null != U ? (0, x.gA)(U) : (0, x.G0)(k),
        F = f.Ay.canUseCollectibles(t),
        V = n.useRef(null),
        B = (0, N.A)(d),
        z = void 0 === S ? w?.skuId === j?.skuId : w?.skuId === S?.skuId,
        H = n.useCallback(
            (e) => {
                p(),
                    (0, v.Cz)({
                        analyticsLocations: d,
                        analyticsSource: u.A.EDIT_AVATAR_DECORATION_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [d, p],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(i.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: b.Hc,
                children: [
                    (0, a.jsx)(o.D, { variant: "heading-lg/semibold", children: P.intl.string(P.t.HykynS) }),
                    (0, a.jsx)(i.s_, { "data-migration-pending": !0, className: b.iT, onClick: p }),
                ],
            }),
            (0, a.jsxs)(i.$m, {
                "data-migration-pending": !0,
                className: b.jE,
                scrollbarType: "none",
                children: [
                    (0, a.jsx)(C.A, {
                        user: t,
                        guild: R,
                        pendingAvatarDecoration: w,
                        selectedAvatarDecorationRef: V,
                        onSelect: (e) => {
                            L(e), null != e && B(e);
                        },
                        onOpenShop: H,
                    }),
                    (0, a.jsx)(y.A, { className: b.kk, user: t, guildId: R?.id, avatarDecoration: M }),
                ],
            }),
            (0, a.jsxs)(i.jl, {
                "data-migration-pending": !0,
                className: b.Hx,
                children: [
                    (null != U && (F || !G)) || null === w
                        ? (0, a.jsx)(s.$, {
                              variant: "primary",
                              text: P.intl.string(P.t.Jh8fJz),
                              onClick: () => {
                                  D(w), p();
                              },
                              disabled: z,
                          })
                        : null == U && (F || !G)
                          ? (0, a.jsx)(s.$, {
                                variant: "primary",
                                onClick: () => H(k?.skuId),
                                text: P.intl.string(P.t.fYfGgK),
                            })
                          : (0, a.jsx)(m.A, {
                                subscriptionTier: O.pe.TIER_2,
                                showGradient: !F,
                                textOptions: {
                                    textOverride: f.Ay.isPremium(t)
                                        ? P.intl.string(P.t.KXLX7l)
                                        : F
                                          ? P.intl.string(P.t.mr4K7D)
                                          : P.intl.string(P.t.pj0XBN),
                                },
                            }),
                    !F && G
                        ? (0, a.jsx)(A.A, { itemType: U?.type ?? k?.type, onClose: p })
                        : (0, a.jsx)(s.$, { variant: "secondary", text: P.intl.string(P.t["ETE/oC"]), onClick: p }),
                ],
            }),
        ],
    });
}
function S(e) {
    let {
            transitionState: t,
            analyticsLocations: r,
            onClose: s,
            onCloseModal: o,
            initialSelectedDecoration: A,
            guild: m,
        } = e,
        h = (0, l.bG)([p.default], () => p.default.getCurrentUser()),
        { analyticsLocations: _ } = (0, d.Ay)(r, u.A.EDIT_AVATAR_DECORATION_MODAL),
        { categories: g, purchases: f, isFetchingCategories: v, isFetchingPurchases: x } = (0, R.Ay)(),
        I = v || (x && 0 === f.size);
    return (
        n.useEffect(() => {
            E.default.track(T.HAw.OPEN_MODAL, { type: T.JJy.AVATAR_DECORATION_CUSTOMIZATION, location_stack: _ });
        }, [_]),
        null == h
            ? null
            : (0, a.jsx)(d.f5, {
                  value: _,
                  children: (0, a.jsx)(i.EO, {
                      transitionState: t,
                      className: b.yl,
                      size: I ? i.rI.DYNAMIC : i.rI.MEDIUM,
                      parentComponent: "AvatarDecorationModal",
                      "data-migration-pending": !0,
                      children: I
                          ? (0, a.jsx)(c.y, { className: b.u1, type: c.y.Type.SPINNING_CIRCLE })
                          : (0, a.jsx)(j, {
                                user: h,
                                guild: m,
                                categories: g,
                                purchases: f,
                                analyticsLocations: _,
                                initialSelectedDecoration: A,
                                onClose: () => {
                                    o(), s?.();
                                },
                            }),
                  }),
              })
    );
}
