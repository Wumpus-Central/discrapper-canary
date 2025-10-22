r.d(t, { default: () => C }), r(388685);
var n = r(951288),
    i = r(647438),
    l = r(442837),
    s = r(481060),
    a = r(100527),
    o = r(906732),
    c = r(335131),
    u = r(884697),
    d = r(449217),
    m = r(223143),
    p = r(311395),
    h = r(269982),
    x = r(767714),
    g = r(369111),
    v = r(594174),
    j = r(626135),
    y = r(74538),
    O = r(240781),
    f = r(818611),
    S = r(981631),
    P = r(474936),
    b = r(388032),
    E = r(88785);
function I(e) {
    let {
            user: t,
            categories: r,
            purchases: l,
            analyticsLocations: o,
            onClose: m,
            initialSelectedDecoration: v,
            isTryItOutFlow: j,
            guild: S,
        } = e,
        {
            pendingAvatarDecoration: I,
            setPendingAvatarDecoration: C,
            savedAvatarDecoration: A,
        } = (0, g.Z)({
            analyticsLocations: o,
            isTryItOut: j,
            guildId: null == S ? void 0 : S.id,
        }),
        [w, T] = i.useState(() => {
            var e;
            return null != v
                ? v
                : void 0 !== I
                  ? I
                  : null == A
                    ? null
                    : null !=
                        (e = (0, u.iC)(l, r).find((e) => {
                            let { skuId: t } = e;
                            return t === A.skuId;
                        }))
                      ? e
                      : null;
        }),
        { product: N, purchase: Z } = (0, d.Z)(null == w ? void 0 : w.skuId),
        D = y.ZP.canUseCollectibles(t),
        _ = i.useRef(null),
        k = (0, p.Z)(o),
        R =
            void 0 === I
                ? (null == w ? void 0 : w.skuId) === (null == A ? void 0 : A.skuId)
                : (null == w ? void 0 : w.skuId) === (null == I ? void 0 : I.skuId),
        L = i.useCallback(
            (e) => {
                m(),
                    (0, c.mK)({
                        analyticsLocations: o,
                        analyticsSource: a.Z.EDIT_AVATAR_DECORATION_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [o, m],
        );
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(s.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                className: E.modalHeader,
                children: [
                    (0, n.jsx)(s.Heading, {
                        variant: "heading-lg/semibold",
                        children: b.intl.string(b.t.HykynS),
                    }),
                    (0, n.jsx)(s.olH, {
                        "data-migration-pending": !0,
                        className: E.modalCloseButton,
                        onClick: m,
                    }),
                ],
            }),
            (0, n.jsxs)(s.hzk, {
                "data-migration-pending": !0,
                className: E.modalContent,
                scrollbarType: "none",
                children: [
                    (0, n.jsx)(f.Z, {
                        user: t,
                        guild: S,
                        pendingAvatarDecoration: w,
                        selectedAvatarDecorationRef: _,
                        onSelect: (e) => {
                            T(e), null != e && k(e);
                        },
                        onOpenShop: L,
                    }),
                    (0, n.jsx)(O.Z, {
                        className: E.modalPreview,
                        user: t,
                        guildId: null == S ? void 0 : S.id,
                        avatarDecorationOverride: w,
                    }),
                ],
            }),
            (0, n.jsxs)(s.mzw, {
                "data-migration-pending": !0,
                className: E.modalFooter,
                children: [
                    (null != Z && (!(0, u.qS)(Z) || D)) || null === w
                        ? (0, n.jsx)(s.Button, {
                              variant: "primary",
                              text: b.intl.string(b.t.Jh8fJz),
                              onClick: () => {
                                  C(w), m();
                              },
                              disabled: R,
                          })
                        : null == Z && (D || !(0, u.G1)(N))
                          ? (0, n.jsx)(s.Button, {
                                variant: "primary",
                                onClick: () => L(null == N ? void 0 : N.skuId),
                                text: b.intl.string(b.t.fYfGgK),
                            })
                          : (0, n.jsx)(x.Z, {
                                subscriptionTier: P.Si.TIER_2,
                                showGradient: !D,
                                textOptions: {
                                    textOverride: y.ZP.isPremium(t)
                                        ? b.intl.string(b.t.KXLX7l)
                                        : D
                                          ? b.intl.string(b.t.mr4K7D)
                                          : b.intl.string(b.t.pj0XBN),
                                },
                            }),
                    !D && (0, u.G1)(N)
                        ? (0, n.jsx)(h.Z, {
                              product: N,
                              onClose: m,
                          })
                        : (0, n.jsx)(s.Button, {
                              variant: "secondary",
                              text: b.intl.string(b.t["ETE/oC"]),
                              onClick: m,
                          }),
                ],
            }),
        ],
    });
}
function C(e) {
    let {
            transitionState: t,
            analyticsLocations: r,
            onClose: c,
            onCloseModal: u,
            initialSelectedDecoration: d,
            isTryItOutFlow: p,
            guild: h,
        } = e,
        x = (0, l.e7)([v.default], () => v.default.getCurrentUser()),
        { analyticsLocations: g } = (0, o.ZP)(r, a.Z.EDIT_AVATAR_DECORATION_MODAL),
        { categories: y, purchases: O, isFetchingCategories: f, isFetchingPurchases: P } = (0, m.ZP)(),
        b = f || (P && 0 === O.size);
    return (
        i.useEffect(() => {
            j.default.track(S.rMx.OPEN_MODAL, {
                type: S.jXE.AVATAR_DECORATION_CUSTOMIZATION,
                location_stack: g,
            });
        }, [g]),
        null == x
            ? null
            : (0, n.jsx)(o.Gt, {
                  value: g,
                  children: (0, n.jsx)(s.Y0X, {
                      transitionState: t,
                      className: E.modal,
                      size: b ? s.CgR.DYNAMIC : s.CgR.MEDIUM,
                      parentComponent: "AvatarDecorationModal",
                      "data-migration-pending": !0,
                      children: b
                          ? (0, n.jsx)(s.$jN, {
                                className: E.spinner,
                                type: s.$jN.Type.SPINNING_CIRCLE,
                            })
                          : (0, n.jsx)(I, {
                                user: x,
                                guild: h,
                                categories: y,
                                purchases: O,
                                analyticsLocations: g,
                                initialSelectedDecoration: d,
                                onClose: () => {
                                    u(), null == c || c();
                                },
                                isTryItOutFlow: p,
                            }),
                  }),
              })
    );
}
