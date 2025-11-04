r.d(t, { default: () => T }), r(388685);
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
    g = r(150039),
    v = r(369111),
    j = r(271383),
    y = r(594174),
    O = r(626135),
    f = r(74538),
    P = r(240781),
    S = r(818611),
    b = r(981631),
    I = r(474936),
    E = r(388032),
    C = r(88785);
function A(e) {
    let {
            user: t,
            categories: r,
            purchases: o,
            analyticsLocations: m,
            onClose: y,
            initialSelectedDecoration: O,
            isTryItOut: b,
            guild: A,
        } = e,
        T = (0, l.e7)([j.ZP], () => (null != A ? j.ZP.getMember(A.id, t.id) : null)),
        w = null != T ? T.avatarDecoration : t.avatarDecoration,
        { pendingAvatarDecoration: Z, setPendingAvatarDecoration: N } = (0, v.Z)({
            analyticsLocations: m,
            isTryItOut: b,
            guildId: null == A ? void 0 : A.id,
        }),
        [D, _] = i.useState(() => {
            var e;
            return null != O
                ? O
                : void 0 !== Z
                  ? Z
                  : null == w
                    ? null
                    : null !=
                        (e = (0, u.iC)(o, r).find((e) => {
                            let { skuId: t } = e;
                            return t === w.skuId;
                        }))
                      ? e
                      : null;
        }),
        k = (0, g.Ys)({
            pendingValue: D,
            userValue: null == t ? void 0 : t.avatarDecoration,
            guildValue: null == T ? void 0 : T.avatarDecoration,
            guildId: null == A ? void 0 : A.id,
        }),
        { product: R, purchase: L } = (0, d.Z)(null == D ? void 0 : D.skuId),
        M = (0, u.G1)(R),
        U = f.ZP.canUseCollectibles(t),
        z = i.useRef(null),
        F = (0, p.Z)(m),
        G =
            void 0 === Z
                ? (null == D ? void 0 : D.skuId) === (null == w ? void 0 : w.skuId)
                : (null == D ? void 0 : D.skuId) === (null == Z ? void 0 : Z.skuId),
        B = i.useCallback(
            (e) => {
                y(),
                    (0, c.mK)({
                        analyticsLocations: m,
                        analyticsSource: a.Z.EDIT_AVATAR_DECORATION_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [m, y],
        );
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(s.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                className: C.modalHeader,
                children: [
                    (0, n.jsx)(s.Heading, {
                        variant: "heading-lg/semibold",
                        children: E.intl.string(E.t.HykynS),
                    }),
                    (0, n.jsx)(s.olH, {
                        "data-migration-pending": !0,
                        className: C.modalCloseButton,
                        onClick: y,
                    }),
                ],
            }),
            (0, n.jsxs)(s.hzk, {
                "data-migration-pending": !0,
                className: C.modalContent,
                scrollbarType: "none",
                children: [
                    (0, n.jsx)(S.Z, {
                        user: t,
                        guild: A,
                        pendingAvatarDecoration: D,
                        selectedAvatarDecorationRef: z,
                        isTryItOut: b,
                        onSelect: (e) => {
                            _(e), null != e && F(e);
                        },
                        onOpenShop: B,
                    }),
                    (0, n.jsx)(P.Z, {
                        className: C.modalPreview,
                        user: t,
                        guildId: null == A ? void 0 : A.id,
                        avatarDecoration: k,
                    }),
                ],
            }),
            (0, n.jsxs)(s.mzw, {
                "data-migration-pending": !0,
                className: C.modalFooter,
                children: [
                    (null != L && (U || !M)) || null === D || (b && M)
                        ? (0, n.jsx)(s.Button, {
                              variant: "primary",
                              text: E.intl.string(E.t.Jh8fJz),
                              onClick: () => {
                                  N(D), y();
                              },
                              disabled: G,
                          })
                        : null == L && (U || !M)
                          ? (0, n.jsx)(s.Button, {
                                variant: "primary",
                                onClick: () => B(null == R ? void 0 : R.skuId),
                                text: E.intl.string(E.t.fYfGgK),
                            })
                          : (0, n.jsx)(x.Z, {
                                subscriptionTier: I.Si.TIER_2,
                                showGradient: !U,
                                textOptions: {
                                    textOverride: f.ZP.isPremium(t)
                                        ? E.intl.string(E.t.KXLX7l)
                                        : U
                                          ? E.intl.string(E.t.mr4K7D)
                                          : E.intl.string(E.t.pj0XBN),
                                },
                            }),
                    U || b || !M
                        ? (0, n.jsx)(s.Button, {
                              variant: "secondary",
                              text: E.intl.string(E.t["ETE/oC"]),
                              onClick: y,
                          })
                        : (0, n.jsx)(h.Z, {
                              product: R,
                              onClose: y,
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
            onClose: c,
            onCloseModal: u,
            initialSelectedDecoration: d,
            isTryItOut: p,
            guild: h,
        } = e,
        x = (0, l.e7)([y.default], () => y.default.getCurrentUser()),
        { analyticsLocations: g } = (0, o.ZP)(r, a.Z.EDIT_AVATAR_DECORATION_MODAL),
        { categories: v, purchases: j, isFetchingCategories: f, isFetchingPurchases: P } = (0, m.ZP)(),
        S = f || (P && 0 === j.size);
    return (
        i.useEffect(() => {
            O.default.track(b.rMx.OPEN_MODAL, {
                type: b.jXE.AVATAR_DECORATION_CUSTOMIZATION,
                location_stack: g,
            });
        }, [g]),
        null == x
            ? null
            : (0, n.jsx)(o.Gt, {
                  value: g,
                  children: (0, n.jsx)(s.Y0X, {
                      transitionState: t,
                      className: C.modal,
                      size: S ? s.CgR.DYNAMIC : s.CgR.MEDIUM,
                      parentComponent: "AvatarDecorationModal",
                      "data-migration-pending": !0,
                      children: S
                          ? (0, n.jsx)(s.$jN, {
                                className: C.spinner,
                                type: s.$jN.Type.SPINNING_CIRCLE,
                            })
                          : (0, n.jsx)(A, {
                                user: x,
                                guild: h,
                                categories: v,
                                purchases: j,
                                analyticsLocations: g,
                                initialSelectedDecoration: d,
                                onClose: () => {
                                    u(), null == c || c();
                                },
                                isTryItOut: p,
                            }),
                  }),
              })
    );
}
