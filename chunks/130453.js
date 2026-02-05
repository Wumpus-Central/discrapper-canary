r.d(t, { default: () => N });
var n = r(627968),
    s = r(64700),
    i = r(311907),
    a = r(397927),
    l = r(793574),
    o = r(688810),
    c = r(979286),
    d = r(993408),
    u = r(821701),
    m = r(841702),
    x = r(727170),
    A = r(571827),
    h = r(465794),
    g = r(919395),
    p = r(352413),
    _ = r(696451),
    v = r(287809),
    j = r(954571),
    y = r(927578),
    I = r(942225),
    f = r(718100),
    C = r(652215),
    T = r(788868),
    E = r(985018),
    S = r(153193);
function k(e) {
    let {
            user: t,
            categories: r,
            purchases: o,
            analyticsLocations: m,
            onClose: v,
            initialSelectedDecoration: j,
            guild: C,
        } = e,
        k = (0, i.bG)([_.Ay], () => (null != C ? _.Ay.getMember(C.id, t.id) : null)),
        N = null != k ? k.avatarDecoration : t.avatarDecoration,
        { pendingAvatarDecoration: O, setPendingAvatarDecoration: P } = (0, p.A)({
            analyticsLocations: m,
            guildId: C?.id,
        }),
        [D, w] = s.useState(() =>
            null != j
                ? j
                : void 0 !== O
                  ? O
                  : null == N
                    ? null
                    : ((0, d.ps)(o, r).find((e) => {
                          let { skuId: t } = e;
                          return t === N.skuId;
                      }) ?? null),
        ),
        b = (0, g.lw)({
            pendingValue: D,
            userValue: t?.avatarDecoration,
            guildValue: k?.avatarDecoration,
            guildId: C?.id,
        }),
        { product: R, purchase: L } = (0, u.A)(D?.skuId),
        M = null != L ? (0, d.gA)(L) : (0, d.G0)(R),
        U = y.Ay.canUseCollectibles(t),
        G = s.useRef(null),
        z = (0, x.A)(m),
        H = void 0 === O ? D?.skuId === N?.skuId : D?.skuId === O?.skuId,
        B = s.useCallback(
            (e) => {
                v(),
                    (0, c.Cz)({
                        analyticsLocations: m,
                        analyticsSource: l.A.EDIT_AVATAR_DECORATION_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [m, v],
        );
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(a.rQ0, {
                "data-migration-pending": !0,
                separator: !1,
                className: S.Hc,
                children: [
                    (0, n.jsx)(a.Heading, { variant: "heading-lg/semibold", children: E.intl.string(E.t.HykynS) }),
                    (0, n.jsx)(a.s_y, { "data-migration-pending": !0, className: S.iT, onClick: v }),
                ],
            }),
            (0, n.jsxs)(a.$mQ, {
                "data-migration-pending": !0,
                className: S.jE,
                scrollbarType: "none",
                children: [
                    (0, n.jsx)(f.A, {
                        user: t,
                        guild: C,
                        pendingAvatarDecoration: D,
                        selectedAvatarDecorationRef: G,
                        onSelect: (e) => {
                            w(e), null != e && z(e);
                        },
                        onOpenShop: B,
                    }),
                    (0, n.jsx)(I.A, { className: S.kk, user: t, guildId: C?.id, avatarDecoration: b }),
                ],
            }),
            (0, n.jsxs)(a.jlY, {
                "data-migration-pending": !0,
                className: S.Hx,
                children: [
                    (null != L && (U || !M)) || null === D
                        ? (0, n.jsx)(a.Button, {
                              variant: "primary",
                              text: E.intl.string(E.t.Jh8fJz),
                              onClick: () => {
                                  P(D), v();
                              },
                              disabled: H,
                          })
                        : null == L && (U || !M)
                          ? (0, n.jsx)(a.Button, {
                                variant: "primary",
                                onClick: () => B(R?.skuId),
                                text: E.intl.string(E.t.fYfGgK),
                            })
                          : (0, n.jsx)(h.A, {
                                subscriptionTier: T.pe.TIER_2,
                                showGradient: !U,
                                textOptions: {
                                    textOverride: y.Ay.isPremium(t)
                                        ? E.intl.string(E.t.KXLX7l)
                                        : U
                                          ? E.intl.string(E.t.mr4K7D)
                                          : E.intl.string(E.t.pj0XBN),
                                },
                            }),
                    !U && M
                        ? (0, n.jsx)(A.A, { itemType: L?.type ?? R?.type, onClose: v })
                        : (0, n.jsx)(a.Button, {
                              variant: "secondary",
                              text: E.intl.string(E.t["ETE/oC"]),
                              onClick: v,
                          }),
                ],
            }),
        ],
    });
}
function N(e) {
    let {
            transitionState: t,
            analyticsLocations: r,
            onClose: c,
            onCloseModal: d,
            initialSelectedDecoration: u,
            guild: x,
        } = e,
        A = (0, i.bG)([v.default], () => v.default.getCurrentUser()),
        { analyticsLocations: h } = (0, o.Ay)(r, l.A.EDIT_AVATAR_DECORATION_MODAL),
        { categories: g, purchases: p, isFetchingCategories: _, isFetchingPurchases: y } = (0, m.Ay)(),
        I = _ || (y && 0 === p.size);
    return (
        s.useEffect(() => {
            j.default.track(C.HAw.OPEN_MODAL, { type: C.JJy.AVATAR_DECORATION_CUSTOMIZATION, location_stack: h });
        }, [h]),
        null == A
            ? null
            : (0, n.jsx)(o.f5, {
                  value: h,
                  children: (0, n.jsx)(a.EOs, {
                      transitionState: t,
                      className: S.yl,
                      size: I ? a.rIJ.DYNAMIC : a.rIJ.MEDIUM,
                      parentComponent: "AvatarDecorationModal",
                      "data-migration-pending": !0,
                      children: I
                          ? (0, n.jsx)(a.y$y, { className: S.u1, type: a.y$y.Type.SPINNING_CIRCLE })
                          : (0, n.jsx)(k, {
                                user: A,
                                guild: x,
                                categories: g,
                                purchases: p,
                                analyticsLocations: h,
                                initialSelectedDecoration: u,
                                onClose: () => {
                                    d(), c?.();
                                },
                            }),
                  }),
              })
    );
}
