r.d(t, { default: () => P });
var s = r(627968),
    i = r(64700),
    n = r(311907),
    a = r(821609),
    l = r(935462),
    o = r(534514),
    c = r(289873),
    d = r(793574),
    u = r(688810),
    m = r(571827),
    A = r(725807),
    h = r(919395),
    x = r(352413),
    g = r(696451),
    p = r(287809),
    _ = r(954571),
    v = r(927578),
    j = r(979286),
    E = r(993408),
    I = r(821701),
    y = r(841702),
    C = r(727170),
    f = r(911647),
    S = r(557182),
    N = r(652215),
    k = r(788868),
    w = r(985018),
    T = r(556826);
function b(e) {
    let {
            user: t,
            categories: r,
            purchases: c,
            analyticsLocations: u,
            onClose: p,
            initialSelectedDecoration: _,
            guild: y,
        } = e,
        N = (0, n.bG)([g.Ay], () => (null != y ? g.Ay.getMember(y.id, t.id) : null)),
        b = null != N ? N.avatarDecoration : t.avatarDecoration,
        { pendingAvatarDecoration: P, setPendingAvatarDecoration: D } = (0, x.A)({
            analyticsLocations: u,
            guildId: y?.id,
        }),
        [O, R] = i.useState(() =>
            null != _
                ? _
                : void 0 !== P
                  ? P
                  : null == b
                    ? null
                    : ((0, E.ps)(c, r).find((e) => {
                          let { skuId: t } = e;
                          return t === b.skuId;
                      }) ?? null),
        ),
        L = (0, h.lw)({
            pendingValue: O,
            userValue: t?.avatarDecoration,
            guildValue: N?.avatarDecoration,
            guildId: y?.id,
        }),
        { product: M, purchase: U } = (0, I.A)(O?.skuId),
        G = null != U ? (0, E.gA)(U) : (0, E.G0)(M),
        z = v.Ay.canUseCollectibles(t),
        H = i.useRef(null),
        F = (0, C.A)(u),
        V = void 0 === P ? O?.skuId === b?.skuId : O?.skuId === P?.skuId,
        K = i.useCallback(
            (e) => {
                p(),
                    (0, j.Cz)({
                        analyticsLocations: u,
                        analyticsSource: d.A.EDIT_AVATAR_DECORATION_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [u, p],
        );
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)(l.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: T.Hc,
                children: [
                    (0, s.jsx)(o.D, { variant: "heading-lg/semibold", children: w.intl.string(w.t.HykynS) }),
                    (0, s.jsx)(l.s_, { "data-migration-pending": !0, className: T.iT, onClick: p }),
                ],
            }),
            (0, s.jsxs)(l.$m, {
                "data-migration-pending": !0,
                className: T.jE,
                scrollbarType: "none",
                children: [
                    (0, s.jsx)(S.A, {
                        user: t,
                        guild: y,
                        pendingAvatarDecoration: O,
                        selectedAvatarDecorationRef: H,
                        onSelect: (e) => {
                            R(e), null != e && F(e);
                        },
                        onOpenShop: K,
                    }),
                    (0, s.jsx)(f.A, { className: T.kk, user: t, guildId: y?.id, avatarDecoration: L }),
                ],
            }),
            (0, s.jsxs)(l.jl, {
                "data-migration-pending": !0,
                className: T.Hx,
                children: [
                    (null != U && (z || !G)) || null === O
                        ? (0, s.jsx)(a.$, {
                              variant: "primary",
                              text: w.intl.string(w.t.Jh8fJz),
                              onClick: () => {
                                  D(O), p();
                              },
                              disabled: V,
                          })
                        : null == U && (z || !G)
                          ? (0, s.jsx)(a.$, {
                                variant: "primary",
                                onClick: () => K(M?.skuId),
                                text: w.intl.string(w.t.fYfGgK),
                            })
                          : (0, s.jsx)(A.A, {
                                subscriptionTier: k.pe.TIER_2,
                                showGradient: !z,
                                textOptions: {
                                    textOverride: v.Ay.isPremium(t)
                                        ? w.intl.string(w.t.KXLX7l)
                                        : z
                                          ? w.intl.string(w.t.mr4K7D)
                                          : w.intl.string(w.t.pj0XBN),
                                },
                            }),
                    !z && G
                        ? (0, s.jsx)(m.A, { itemType: U?.type ?? M?.type, onClose: p })
                        : (0, s.jsx)(a.$, { variant: "secondary", text: w.intl.string(w.t["ETE/oC"]), onClick: p }),
                ],
            }),
        ],
    });
}
function P(e) {
    let {
            transitionState: t,
            analyticsLocations: r,
            onClose: a,
            onCloseModal: o,
            initialSelectedDecoration: m,
            guild: A,
        } = e,
        h = (0, n.bG)([p.default], () => p.default.getCurrentUser()),
        { analyticsLocations: x } = (0, u.Ay)(r, d.A.EDIT_AVATAR_DECORATION_MODAL),
        { categories: g, purchases: v, isFetchingCategories: j, isFetchingPurchases: E } = (0, y.Ay)(),
        I = j || (E && 0 === v.size);
    return (
        i.useEffect(() => {
            _.default.track(N.HAw.OPEN_MODAL, { type: N.JJy.AVATAR_DECORATION_CUSTOMIZATION, location_stack: x });
        }, [x]),
        null == h
            ? null
            : (0, s.jsx)(u.f5, {
                  value: x,
                  children: (0, s.jsx)(l.EO, {
                      transitionState: t,
                      className: T.yl,
                      size: I ? l.rI.DYNAMIC : l.rI.MEDIUM,
                      parentComponent: "AvatarDecorationModal",
                      "data-migration-pending": !0,
                      children: I
                          ? (0, s.jsx)(c.y, { className: T.u1, type: c.y.Type.SPINNING_CIRCLE })
                          : (0, s.jsx)(b, {
                                user: h,
                                guild: A,
                                categories: g,
                                purchases: v,
                                analyticsLocations: x,
                                initialSelectedDecoration: m,
                                onClose: () => {
                                    o(), a?.();
                                },
                            }),
                  }),
              })
    );
}
