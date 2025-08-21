n.d(t, { default: () => N }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(100527),
    l = n(906732),
    c = n(335131),
    u = n(884697),
    d = n(449217),
    f = n(223143),
    _ = n(311395),
    p = n(222062),
    h = n(269982),
    m = n(767714),
    g = n(369111),
    E = n(594174),
    b = n(626135),
    y = n(74538),
    O = n(240781),
    v = n(818611),
    I = n(981631),
    T = n(474936),
    S = n(388032),
    A = n(88785);
function C(e) {
    let {
            user: t,
            categories: n,
            purchases: a,
            analyticsLocations: l,
            onClose: f,
            initialSelectedDecoration: E,
            initialSelectedDecorationId: b,
            isTryItOutFlow: I,
            guild: C,
        } = e,
        {
            pendingAvatarDecoration: N,
            setPendingAvatarDecoration: R,
            savedAvatarDecoration: P,
        } = (0, g.Z)({
            analyticsLocations: l,
            isTryItOut: I,
            guildId: null == C ? void 0 : C.id,
        }),
        [w, D] = i.useState(() => {
            var e, t;
            if (null != E) return E;
            let r = (0, u.iC)(a, n);
            return null != b
                ? null != (e = r.find((e) => e.id === b))
                    ? e
                    : null
                : void 0 !== N
                  ? N
                  : null == P
                    ? null
                    : null !=
                        (t = r.find((e) => {
                            let { skuId: t } = e;
                            return t === P.skuId;
                        }))
                      ? t
                      : null;
        }),
        { product: x, purchase: L } = (0, d.Z)(null == w ? void 0 : w.skuId),
        j = y.ZP.canUseCollectibles(t),
        M = i.useRef(null),
        k = (0, _.Z)(l),
        U =
            void 0 === N
                ? (null == w ? void 0 : w.skuId) === (null == P ? void 0 : P.skuId)
                : (null == w ? void 0 : w.skuId) === (null == N ? void 0 : N.skuId),
        G = (e) => {
            D(e), null != e && k(e);
        },
        B = () => {
            R(w), f();
        },
        Z = i.useCallback(
            (e) => {
                f(),
                    (0, c.mK)({
                        analyticsLocations: l,
                        analyticsSource: s.Z.EDIT_AVATAR_DECORATION_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [l, f],
        ),
        V = (0, p.M)(),
        F = V && (0, u.G1)(x),
        H = () =>
            (null != L && (!(0, u.qS)(L) || j)) || null === w
                ? (0, r.jsx)(o.zxk, {
                      variant: "primary",
                      text: S.intl.string(S.t.Jh8fJy),
                      onClick: B,
                      disabled: U,
                  })
                : null == L && (j || !(0, u.G1)(x))
                  ? (0, r.jsx)(o.zxk, {
                        variant: "primary",
                        onClick: () => Z(null == x ? void 0 : x.skuId),
                        text: S.intl.string(S.t.fYfGgI),
                    })
                  : (0, r.jsx)(m.Z, {
                        subscriptionTier: T.Si.TIER_2,
                        showGradient: V,
                        textOptions: {
                            textOverride: y.ZP.isPremium(t)
                                ? S.intl.string(S.t.KXLX7u)
                                : V
                                  ? S.intl.string(S.t.pj0XBA)
                                  : S.intl.string(S.t.mr4K7O),
                        },
                    });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(o.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                className: A.modalHeader,
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: "heading-lg/semibold",
                        children: S.intl.string(S.t.HykynZ),
                    }),
                    (0, r.jsx)(o.olH, {
                        "data-migration-pending": !0,
                        className: A.modalCloseButton,
                        onClick: f,
                    }),
                ],
            }),
            (0, r.jsxs)(o.hzk, {
                "data-migration-pending": !0,
                className: A.modalContent,
                scrollbarType: "none",
                children: [
                    (0, r.jsx)(v.Z, {
                        user: t,
                        guild: C,
                        pendingAvatarDecoration: w,
                        selectedAvatarDecorationRef: M,
                        onSelect: G,
                        onOpenShop: Z,
                    }),
                    (0, r.jsx)(O.Z, {
                        className: A.modalPreview,
                        user: t,
                        guildId: null == C ? void 0 : C.id,
                        avatarDecorationOverride: w,
                    }),
                ],
            }),
            (0, r.jsxs)(o.mzw, {
                "data-migration-pending": !0,
                className: A.modalFooter,
                children: [
                    H(),
                    F
                        ? (0, r.jsx)(h.Z, {
                              product: x,
                              onSecondaryClick: f,
                          })
                        : (0, r.jsx)(o.zxk, {
                              variant: "secondary",
                              text: S.intl.string(S.t["ETE/oK"]),
                              onClick: f,
                          }),
                ],
            }),
        ],
    });
}
function N(e) {
    let {
            transitionState: t,
            analyticsLocations: n,
            onClose: c,
            onCloseModal: u,
            initialSelectedDecoration: d,
            initialSelectedDecorationId: _,
            isTryItOutFlow: p,
            guild: h,
        } = e,
        m = (0, a.e7)([E.default], () => E.default.getCurrentUser()),
        { analyticsLocations: g } = (0, l.ZP)(n, s.Z.EDIT_AVATAR_DECORATION_MODAL),
        { categories: y, purchases: O, isFetchingCategories: v, isFetchingPurchases: T } = (0, f.ZP)(),
        S = v || (T && 0 === O.size),
        N = () => {
            u(), null == c || c();
        };
    return (
        i.useEffect(() => {
            b.default.track(I.rMx.OPEN_MODAL, {
                type: I.jXE.AVATAR_DECORATION_CUSTOMIZATION,
                location_stack: g,
            });
        }, [g]),
        null == m
            ? null
            : (0, r.jsx)(l.Gt, {
                  value: g,
                  children: (0, r.jsx)(o.Y0X, {
                      transitionState: t,
                      className: A.modal,
                      size: S ? o.CgR.DYNAMIC : o.CgR.MEDIUM,
                      parentComponent: "AvatarDecorationModal",
                      "data-migration-pending": !0,
                      children: S
                          ? (0, r.jsx)(o.$jN, {
                                className: A.spinner,
                                type: o.$jN.Type.SPINNING_CIRCLE,
                            })
                          : (0, r.jsx)(C, {
                                user: m,
                                guild: h,
                                categories: y,
                                purchases: O,
                                analyticsLocations: g,
                                initialSelectedDecoration: d,
                                initialSelectedDecorationId: _,
                                onClose: N,
                                isTryItOutFlow: p,
                            }),
                  }),
              })
    );
}
