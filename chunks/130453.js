r.d(t, { default: () => T }), r(896048);
var n = r(627968),
    l = r(64700),
    i = r(311907),
    a = r(397927),
    s = r(793574),
    c = r(688810),
    o = r(979286),
    u = r(993408),
    d = r(821701),
    m = r(841702),
    p = r(727170),
    x = r(571827),
    g = r(465794),
    b = r(919395),
    A = r(352413),
    h = r(696451),
    f = r(287809),
    v = r(954571),
    y = r(927578),
    j = r(942225),
    O = r(718100),
    _ = r(652215),
    S = r(788868),
    E = r(985018),
    I = r(153193);
function k(e) {
    var t;
    let {
            user: r,
            categories: c,
            purchases: m,
            analyticsLocations: f,
            onClose: v,
            initialSelectedDecoration: _,
            guild: k,
        } = e,
        T = (0, i.bG)([h.Ay], () => (null != k ? h.Ay.getMember(k.id, r.id) : null)),
        P = null != T ? T.avatarDecoration : r.avatarDecoration,
        { pendingAvatarDecoration: C, setPendingAvatarDecoration: N } = (0, A.A)({
            analyticsLocations: f,
            guildId: null == k ? void 0 : k.id,
        }),
        [w, D] = l.useState(() => {
            var e;
            return null != _
                ? _
                : void 0 !== C
                  ? C
                  : null == P
                    ? null
                    : null !=
                        (e = (0, u.ps)(m, c).find((e) => {
                            let { skuId: t } = e;
                            return t === P.skuId;
                        }))
                      ? e
                      : null;
        }),
        R = (0, b.lw)({
            pendingValue: w,
            userValue: null == r ? void 0 : r.avatarDecoration,
            guildValue: null == T ? void 0 : T.avatarDecoration,
            guildId: null == k ? void 0 : k.id,
        }),
        { product: L, purchase: M } = (0, d.A)(null == w ? void 0 : w.skuId),
        U = null != M ? (0, u.gA)(M) : (0, u.G0)(L),
        G = y.Ay.canUseCollectibles(r),
        z = l.useRef(null),
        H = (0, p.A)(f),
        K =
            void 0 === C
                ? (null == w ? void 0 : w.skuId) === (null == P ? void 0 : P.skuId)
                : (null == w ? void 0 : w.skuId) === (null == C ? void 0 : C.skuId),
        V = l.useCallback(
            (e) => {
                v(),
                    (0, o.Cz)({
                        analyticsLocations: f,
                        analyticsSource: s.A.EDIT_AVATAR_DECORATION_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [f, v],
        );
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(a.rQ0, {
                "data-migration-pending": !0,
                separator: !1,
                className: I.Hc,
                children: [
                    (0, n.jsx)(a.Heading, {
                        variant: "heading-lg/semibold",
                        children: E.intl.string(E.t.HykynS),
                    }),
                    (0, n.jsx)(a.s_y, {
                        "data-migration-pending": !0,
                        className: I.iT,
                        onClick: v,
                    }),
                ],
            }),
            (0, n.jsxs)(a.$mQ, {
                "data-migration-pending": !0,
                className: I.jE,
                scrollbarType: "none",
                children: [
                    (0, n.jsx)(O.A, {
                        user: r,
                        guild: k,
                        pendingAvatarDecoration: w,
                        selectedAvatarDecorationRef: z,
                        onSelect: (e) => {
                            D(e), null != e && H(e);
                        },
                        onOpenShop: V,
                    }),
                    (0, n.jsx)(j.A, {
                        className: I.kk,
                        user: r,
                        guildId: null == k ? void 0 : k.id,
                        avatarDecoration: R,
                    }),
                ],
            }),
            (0, n.jsxs)(a.jlY, {
                "data-migration-pending": !0,
                className: I.Hx,
                children: [
                    (null != M && (G || !U)) || null === w
                        ? (0, n.jsx)(a.Button, {
                              variant: "primary",
                              text: E.intl.string(E.t.Jh8fJz),
                              onClick: () => {
                                  N(w), v();
                              },
                              disabled: K,
                          })
                        : null == M && (G || !U)
                          ? (0, n.jsx)(a.Button, {
                                variant: "primary",
                                onClick: () => V(null == L ? void 0 : L.skuId),
                                text: E.intl.string(E.t.fYfGgK),
                            })
                          : (0, n.jsx)(g.A, {
                                subscriptionTier: S.pe.TIER_2,
                                showGradient: !G,
                                textOptions: {
                                    textOverride: y.Ay.isPremium(r)
                                        ? E.intl.string(E.t.KXLX7l)
                                        : G
                                          ? E.intl.string(E.t.mr4K7D)
                                          : E.intl.string(E.t.pj0XBN),
                                },
                            }),
                    !G && U
                        ? (0, n.jsx)(x.A, {
                              itemType: null != (t = null == M ? void 0 : M.type) ? t : null == L ? void 0 : L.type,
                              onClose: v,
                          })
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
function T(e) {
    let {
            transitionState: t,
            analyticsLocations: r,
            onClose: o,
            onCloseModal: u,
            initialSelectedDecoration: d,
            guild: p,
        } = e,
        x = (0, i.bG)([f.default], () => f.default.getCurrentUser()),
        { analyticsLocations: g } = (0, c.Ay)(r, s.A.EDIT_AVATAR_DECORATION_MODAL),
        { categories: b, purchases: A, isFetchingCategories: h, isFetchingPurchases: y } = (0, m.Ay)(),
        j = h || (y && 0 === A.size);
    return (
        l.useEffect(() => {
            v.default.track(_.HAw.OPEN_MODAL, {
                type: _.JJy.AVATAR_DECORATION_CUSTOMIZATION,
                location_stack: g,
            });
        }, [g]),
        null == x
            ? null
            : (0, n.jsx)(c.f5, {
                  value: g,
                  children: (0, n.jsx)(a.EOs, {
                      transitionState: t,
                      className: I.yl,
                      size: j ? a.rIJ.DYNAMIC : a.rIJ.MEDIUM,
                      parentComponent: "AvatarDecorationModal",
                      "data-migration-pending": !0,
                      children: j
                          ? (0, n.jsx)(a.y$y, {
                                className: I.u1,
                                type: a.y$y.Type.SPINNING_CIRCLE,
                            })
                          : (0, n.jsx)(k, {
                                user: x,
                                guild: p,
                                categories: b,
                                purchases: A,
                                analyticsLocations: g,
                                initialSelectedDecoration: d,
                                onClose: () => {
                                    u(), null == o || o();
                                },
                            }),
                  }),
              })
    );
}
