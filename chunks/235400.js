n.d(t, { default: () => R }), n(388685);
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
    O = n(864106),
    v = n(240781),
    I = n(818611),
    T = n(981631),
    S = n(474936),
    A = n(388032),
    C = n(88785);
function N(e) {
    let {
            user: t,
            categories: n,
            purchases: a,
            analyticsLocations: l,
            onClose: f,
            initialSelectedDecoration: E,
            initialSelectedDecorationId: b,
            isTryItOutFlow: T,
            guild: N,
        } = e,
        {
            pendingAvatarDecoration: R,
            setPendingAvatarDecoration: P,
            savedAvatarDecoration: w,
        } = (0, g.Z)({
            analyticsLocations: l,
            isTryItOut: T,
            guildId: null == N ? void 0 : N.id,
        }),
        [D, x] = i.useState(() => {
            var e, t;
            if (null != E) return E;
            let r = (0, u.iC)(a, n);
            return null != b
                ? null != (e = r.find((e) => e.id === b))
                    ? e
                    : null
                : void 0 !== R
                  ? R
                  : null == w
                    ? null
                    : null != (t = r.find((e) => (0, O.sr)(e, w)))
                      ? t
                      : null;
        }),
        { product: L, purchase: j } = (0, d.Z)(null == D ? void 0 : D.skuId),
        M = y.ZP.canUseCollectibles(t),
        k = i.useRef(null),
        U = (0, _.Z)(l),
        G = (0, O.sr)(D, void 0 === R ? w : R),
        B = (e) => {
            x(e), null != e && U(e);
        },
        Z = () => {
            P(D), f();
        },
        V = i.useCallback(
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
        F = (0, p.M)(),
        H = F && (0, u.G1)(L),
        Y = () =>
            (null != j && (!(0, u.qS)(j) || M)) || null === D
                ? (0, r.jsx)(o.zxk, {
                      variant: "primary",
                      text: A.intl.string(A.t.Jh8fJy),
                      onClick: Z,
                      disabled: G,
                  })
                : null == j && (M || !(0, u.G1)(L))
                  ? (0, r.jsx)(o.zxk, {
                        variant: "primary",
                        onClick: () => V(null == L ? void 0 : L.skuId),
                        text: A.intl.string(A.t.fYfGgI),
                    })
                  : (0, r.jsx)(m.Z, {
                        subscriptionTier: S.Si.TIER_2,
                        showGradient: F,
                        textOptions: {
                            textOverride: y.ZP.isPremium(t)
                                ? A.intl.string(A.t.KXLX7u)
                                : F
                                  ? A.intl.string(A.t.pj0XBA)
                                  : A.intl.string(A.t.mr4K7O),
                        },
                    });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(o.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                className: C.modalHeader,
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: "heading-lg/semibold",
                        children: A.intl.string(A.t.HykynZ),
                    }),
                    (0, r.jsx)(o.olH, {
                        "data-migration-pending": !0,
                        className: C.modalCloseButton,
                        onClick: f,
                    }),
                ],
            }),
            (0, r.jsxs)(o.hzk, {
                "data-migration-pending": !0,
                className: C.modalContent,
                scrollbarType: "none",
                children: [
                    (0, r.jsx)(I.Z, {
                        user: t,
                        guild: N,
                        pendingAvatarDecoration: D,
                        selectedAvatarDecorationRef: k,
                        onSelect: B,
                        onOpenShop: V,
                    }),
                    (0, r.jsx)(v.Z, {
                        className: C.modalPreview,
                        user: t,
                        guildId: null == N ? void 0 : N.id,
                        avatarDecorationOverride: D,
                    }),
                ],
            }),
            (0, r.jsxs)(o.mzw, {
                "data-migration-pending": !0,
                className: C.modalFooter,
                children: [
                    Y(),
                    H
                        ? (0, r.jsx)(h.Z, {
                              product: L,
                              onSecondaryClick: f,
                          })
                        : (0, r.jsx)(o.zxk, {
                              variant: "secondary",
                              text: A.intl.string(A.t["ETE/oK"]),
                              onClick: f,
                          }),
                ],
            }),
        ],
    });
}
function R(e) {
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
        { categories: y, purchases: O, isFetchingCategories: v, isFetchingPurchases: I } = (0, f.ZP)(),
        S = v || (I && 0 === O.size),
        A = () => {
            u(), null == c || c();
        };
    return (
        i.useEffect(() => {
            b.default.track(T.rMx.OPEN_MODAL, {
                type: T.jXE.AVATAR_DECORATION_CUSTOMIZATION,
                location_stack: g,
            });
        }, [g]),
        null == m
            ? null
            : (0, r.jsx)(l.Gt, {
                  value: g,
                  children: (0, r.jsx)(o.Y0X, {
                      transitionState: t,
                      className: C.modal,
                      size: S ? o.CgR.DYNAMIC : o.CgR.MEDIUM,
                      parentComponent: "AvatarDecorationModal",
                      "data-migration-pending": !0,
                      children: S
                          ? (0, r.jsx)(o.$jN, {
                                className: C.spinner,
                                type: o.$jN.Type.SPINNING_CIRCLE,
                            })
                          : (0, r.jsx)(N, {
                                user: m,
                                guild: h,
                                categories: y,
                                purchases: O,
                                analyticsLocations: g,
                                initialSelectedDecoration: d,
                                initialSelectedDecorationId: _,
                                onClose: A,
                                isTryItOutFlow: p,
                            }),
                  }),
              })
    );
}
