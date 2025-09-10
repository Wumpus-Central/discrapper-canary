r.d(t, { default: () => Z }), r(388685);
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
    h = r(311395),
    x = r(222062),
    p = r(269982),
    v = r(767714),
    g = r(369111),
    j = r(594174),
    f = r(626135),
    y = r(74538),
    O = r(240781),
    b = r(818611),
    S = r(981631),
    P = r(474936),
    C = r(388032),
    I = r(88785);
function w(e) {
    let {
            user: t,
            categories: r,
            purchases: l,
            analyticsLocations: o,
            onClose: m,
            initialSelectedDecoration: j,
            initialSelectedDecorationId: f,
            isTryItOutFlow: S,
            guild: w,
        } = e,
        {
            pendingAvatarDecoration: Z,
            setPendingAvatarDecoration: E,
            savedAvatarDecoration: N,
        } = (0, g.Z)({
            analyticsLocations: o,
            isTryItOut: S,
            guildId: null == w ? void 0 : w.id,
        }),
        [T, A] = i.useState(() => {
            var e, t;
            if (null != j) return j;
            let n = (0, u.iC)(l, r);
            return null != f
                ? null != (e = n.find((e) => e.id === f))
                    ? e
                    : null
                : void 0 !== Z
                  ? Z
                  : null == N
                    ? null
                    : null !=
                        (t = n.find((e) => {
                            let { skuId: t } = e;
                            return t === N.skuId;
                        }))
                      ? t
                      : null;
        }),
        { product: k, purchase: D } = (0, d.Z)(null == T ? void 0 : T.skuId),
        R = y.ZP.canUseCollectibles(t),
        _ = i.useRef(null),
        M = (0, h.Z)(o),
        z =
            void 0 === Z
                ? (null == T ? void 0 : T.skuId) === (null == N ? void 0 : N.skuId)
                : (null == T ? void 0 : T.skuId) === (null == Z ? void 0 : Z.skuId),
        U = i.useCallback(
            (e) => {
                m(),
                    (0, c.mK)({
                        analyticsLocations: o,
                        analyticsSource: a.Z.EDIT_AVATAR_DECORATION_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [o, m],
        ),
        G = (0, x.M)(),
        F = G && (0, u.G1)(k);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(s.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                className: I.modalHeader,
                children: [
                    (0, n.jsx)(s.X6q, {
                        variant: "heading-lg/semibold",
                        children: C.intl.string(C.t.HykynZ),
                    }),
                    (0, n.jsx)(s.olH, {
                        "data-migration-pending": !0,
                        className: I.modalCloseButton,
                        onClick: m,
                    }),
                ],
            }),
            (0, n.jsxs)(s.hzk, {
                "data-migration-pending": !0,
                className: I.modalContent,
                scrollbarType: "none",
                children: [
                    (0, n.jsx)(b.Z, {
                        user: t,
                        guild: w,
                        pendingAvatarDecoration: T,
                        selectedAvatarDecorationRef: _,
                        onSelect: (e) => {
                            A(e), null != e && M(e);
                        },
                        onOpenShop: U,
                    }),
                    (0, n.jsx)(O.Z, {
                        className: I.modalPreview,
                        user: t,
                        guildId: null == w ? void 0 : w.id,
                        avatarDecorationOverride: T,
                    }),
                ],
            }),
            (0, n.jsxs)(s.mzw, {
                "data-migration-pending": !0,
                className: I.modalFooter,
                children: [
                    (null != D && (!(0, u.qS)(D) || R)) || null === T
                        ? (0, n.jsx)(s.zxk, {
                              variant: "primary",
                              text: C.intl.string(C.t.Jh8fJy),
                              onClick: () => {
                                  E(T), m();
                              },
                              disabled: z,
                          })
                        : null == D && (R || !(0, u.G1)(k))
                          ? (0, n.jsx)(s.zxk, {
                                variant: "primary",
                                onClick: () => U(null == k ? void 0 : k.skuId),
                                text: C.intl.string(C.t.fYfGgI),
                            })
                          : (0, n.jsx)(v.Z, {
                                subscriptionTier: P.Si.TIER_2,
                                showGradient: G,
                                textOptions: {
                                    textOverride: y.ZP.isPremium(t)
                                        ? C.intl.string(C.t.KXLX7u)
                                        : G
                                          ? C.intl.string(C.t.pj0XBA)
                                          : C.intl.string(C.t.mr4K7O),
                                },
                            }),
                    F
                        ? (0, n.jsx)(p.Z, {
                              product: k,
                              onSecondaryClick: m,
                          })
                        : (0, n.jsx)(s.zxk, {
                              variant: "secondary",
                              text: C.intl.string(C.t["ETE/oK"]),
                              onClick: m,
                          }),
                ],
            }),
        ],
    });
}
function Z(e) {
    let {
            transitionState: t,
            analyticsLocations: r,
            onClose: c,
            onCloseModal: u,
            initialSelectedDecoration: d,
            initialSelectedDecorationId: h,
            isTryItOutFlow: x,
            guild: p,
        } = e,
        v = (0, l.e7)([j.default], () => j.default.getCurrentUser()),
        { analyticsLocations: g } = (0, o.ZP)(r, a.Z.EDIT_AVATAR_DECORATION_MODAL),
        { categories: y, purchases: O, isFetchingCategories: b, isFetchingPurchases: P } = (0, m.ZP)(),
        C = b || (P && 0 === O.size);
    return (
        i.useEffect(() => {
            f.default.track(S.rMx.OPEN_MODAL, {
                type: S.jXE.AVATAR_DECORATION_CUSTOMIZATION,
                location_stack: g,
            });
        }, [g]),
        null == v
            ? null
            : (0, n.jsx)(o.Gt, {
                  value: g,
                  children: (0, n.jsx)(s.Y0X, {
                      transitionState: t,
                      className: I.modal,
                      size: C ? s.CgR.DYNAMIC : s.CgR.MEDIUM,
                      parentComponent: "AvatarDecorationModal",
                      "data-migration-pending": !0,
                      children: C
                          ? (0, n.jsx)(s.$jN, {
                                className: I.spinner,
                                type: s.$jN.Type.SPINNING_CIRCLE,
                            })
                          : (0, n.jsx)(w, {
                                user: v,
                                guild: p,
                                categories: y,
                                purchases: O,
                                analyticsLocations: g,
                                initialSelectedDecoration: d,
                                initialSelectedDecorationId: h,
                                onClose: () => {
                                    u(), null == c || c();
                                },
                                isTryItOutFlow: x,
                            }),
                  }),
              })
    );
}
