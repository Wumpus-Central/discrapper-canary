r.d(t, { default: () => N });
var s = r(627968),
    i = r(64700),
    n = r(311907),
    l = r(397927),
    a = r(793574),
    o = r(688810),
    c = r(571827),
    d = r(465794),
    u = r(919395),
    m = r(352413),
    x = r(696451),
    A = r(287809),
    h = r(954571),
    g = r(927578),
    _ = r(979286),
    p = r(993408),
    v = r(821701),
    j = r(841702),
    y = r(727170),
    I = r(911647),
    C = r(557182),
    E = r(652215),
    S = r(788868),
    T = r(985018),
    f = r(812167);
function k(e) {
    let {
            user: t,
            categories: r,
            purchases: o,
            analyticsLocations: A,
            onClose: h,
            initialSelectedDecoration: j,
            guild: E,
        } = e,
        k = (0, n.bG)([x.Ay], () => (null != E ? x.Ay.getMember(E.id, t.id) : null)),
        N = null != k ? k.avatarDecoration : t.avatarDecoration,
        { pendingAvatarDecoration: P, setPendingAvatarDecoration: O } = (0, m.A)({
            analyticsLocations: A,
            guildId: E?.id,
        }),
        [b, w] = i.useState(() =>
            null != j
                ? j
                : void 0 !== P
                  ? P
                  : null == N
                    ? null
                    : ((0, p.ps)(o, r).find((e) => {
                          let { skuId: t } = e;
                          return t === N.skuId;
                      }) ?? null),
        ),
        D = (0, u.lw)({
            pendingValue: b,
            userValue: t?.avatarDecoration,
            guildValue: k?.avatarDecoration,
            guildId: E?.id,
        }),
        { product: R, purchase: L } = (0, v.A)(b?.skuId),
        M = null != L ? (0, p.gA)(L) : (0, p.G0)(R),
        U = g.Ay.canUseCollectibles(t),
        G = i.useRef(null),
        z = (0, y.A)(A),
        H = void 0 === P ? b?.skuId === N?.skuId : b?.skuId === P?.skuId,
        B = i.useCallback(
            (e) => {
                h(),
                    (0, _.Cz)({
                        analyticsLocations: A,
                        analyticsSource: a.A.EDIT_AVATAR_DECORATION_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [A, h],
        );
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)(l.rQ0, {
                "data-migration-pending": !0,
                separator: !1,
                className: f.Hc,
                children: [
                    (0, s.jsx)(l.Heading, { variant: "heading-lg/semibold", children: T.intl.string(T.t.HykynS) }),
                    (0, s.jsx)(l.s_y, { "data-migration-pending": !0, className: f.iT, onClick: h }),
                ],
            }),
            (0, s.jsxs)(l.$mQ, {
                "data-migration-pending": !0,
                className: f.jE,
                scrollbarType: "none",
                children: [
                    (0, s.jsx)(C.A, {
                        user: t,
                        guild: E,
                        pendingAvatarDecoration: b,
                        selectedAvatarDecorationRef: G,
                        onSelect: (e) => {
                            w(e), null != e && z(e);
                        },
                        onOpenShop: B,
                    }),
                    (0, s.jsx)(I.A, { className: f.kk, user: t, guildId: E?.id, avatarDecoration: D }),
                ],
            }),
            (0, s.jsxs)(l.jlY, {
                "data-migration-pending": !0,
                className: f.Hx,
                children: [
                    (null != L && (U || !M)) || null === b
                        ? (0, s.jsx)(l.Button, {
                              variant: "primary",
                              text: T.intl.string(T.t.Jh8fJz),
                              onClick: () => {
                                  O(b), h();
                              },
                              disabled: H,
                          })
                        : null == L && (U || !M)
                          ? (0, s.jsx)(l.Button, {
                                variant: "primary",
                                onClick: () => B(R?.skuId),
                                text: T.intl.string(T.t.fYfGgK),
                            })
                          : (0, s.jsx)(d.A, {
                                subscriptionTier: S.pe.TIER_2,
                                showGradient: !U,
                                textOptions: {
                                    textOverride: g.Ay.isPremium(t)
                                        ? T.intl.string(T.t.KXLX7l)
                                        : U
                                          ? T.intl.string(T.t.mr4K7D)
                                          : T.intl.string(T.t.pj0XBN),
                                },
                            }),
                    !U && M
                        ? (0, s.jsx)(c.A, { itemType: L?.type ?? R?.type, onClose: h })
                        : (0, s.jsx)(l.Button, {
                              variant: "secondary",
                              text: T.intl.string(T.t["ETE/oC"]),
                              onClick: h,
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
            guild: m,
        } = e,
        x = (0, n.bG)([A.default], () => A.default.getCurrentUser()),
        { analyticsLocations: g } = (0, o.Ay)(r, a.A.EDIT_AVATAR_DECORATION_MODAL),
        { categories: _, purchases: p, isFetchingCategories: v, isFetchingPurchases: y } = (0, j.Ay)(),
        I = v || (y && 0 === p.size);
    return (
        i.useEffect(() => {
            h.default.track(E.HAw.OPEN_MODAL, { type: E.JJy.AVATAR_DECORATION_CUSTOMIZATION, location_stack: g });
        }, [g]),
        null == x
            ? null
            : (0, s.jsx)(o.f5, {
                  value: g,
                  children: (0, s.jsx)(l.EOs, {
                      transitionState: t,
                      className: f.yl,
                      size: I ? l.rIJ.DYNAMIC : l.rIJ.MEDIUM,
                      parentComponent: "AvatarDecorationModal",
                      "data-migration-pending": !0,
                      children: I
                          ? (0, s.jsx)(l.y$y, { className: f.u1, type: l.y$y.Type.SPINNING_CIRCLE })
                          : (0, s.jsx)(k, {
                                user: x,
                                guild: m,
                                categories: _,
                                purchases: p,
                                analyticsLocations: g,
                                initialSelectedDecoration: u,
                                onClose: () => {
                                    d(), c?.();
                                },
                            }),
                  }),
              })
    );
}
