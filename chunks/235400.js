r.d(t, { default: () => w }), r(388685);
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
    S = r(240781),
    P = r(818611),
    b = r(981631),
    E = r(474936),
    I = r(388032),
    C = r(398726);
function A(e) {
    let {
            user: t,
            categories: r,
            purchases: o,
            analyticsLocations: m,
            onClose: y,
            initialSelectedDecoration: O,
            isTryItOutFlow: b,
            guild: A,
        } = e,
        w = (0, l.e7)([j.ZP], () => (null != A ? j.ZP.getMember(A.id, t.id) : null)),
        T = null != w ? w.avatarDecoration : t.avatarDecoration,
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
                  : null == T
                    ? null
                    : null !=
                        (e = (0, u.iC)(o, r).find((e) => {
                            let { skuId: t } = e;
                            return t === T.skuId;
                        }))
                      ? e
                      : null;
        }),
        k = (0, g.Ys)({
            pendingValue: D,
            userValue: null == t ? void 0 : t.avatarDecoration,
            guildValue: null == w ? void 0 : w.avatarDecoration,
            guildId: null == A ? void 0 : A.id,
        }),
        { product: R, purchase: L } = (0, d.Z)(null == D ? void 0 : D.skuId),
        M = f.ZP.canUseCollectibles(t),
        U = i.useRef(null),
        F = (0, p.Z)(m),
        z =
            void 0 === Z
                ? (null == D ? void 0 : D.skuId) === (null == T ? void 0 : T.skuId)
                : (null == D ? void 0 : D.skuId) === (null == Z ? void 0 : Z.skuId),
        G = i.useCallback(
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
                        children: I.intl.string(I.t.HykynS),
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
                    (0, n.jsx)(P.Z, {
                        user: t,
                        guild: A,
                        pendingAvatarDecoration: D,
                        selectedAvatarDecorationRef: U,
                        onSelect: (e) => {
                            _(e), null != e && F(e);
                        },
                        onOpenShop: G,
                    }),
                    (0, n.jsx)(S.Z, {
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
                    (null != L && (!(0, u.qS)(L) || M)) || null === D
                        ? (0, n.jsx)(s.Button, {
                              variant: "primary",
                              text: I.intl.string(I.t.Jh8fJz),
                              onClick: () => {
                                  N(D), y();
                              },
                              disabled: z,
                          })
                        : null == L && (M || !(0, u.G1)(R))
                          ? (0, n.jsx)(s.Button, {
                                variant: "primary",
                                onClick: () => G(null == R ? void 0 : R.skuId),
                                text: I.intl.string(I.t.fYfGgK),
                            })
                          : (0, n.jsx)(x.Z, {
                                subscriptionTier: E.Si.TIER_2,
                                showGradient: !M,
                                textOptions: {
                                    textOverride: f.ZP.isPremium(t)
                                        ? I.intl.string(I.t.KXLX7l)
                                        : M
                                          ? I.intl.string(I.t.mr4K7D)
                                          : I.intl.string(I.t.pj0XBN),
                                },
                            }),
                    !M && (0, u.G1)(R)
                        ? (0, n.jsx)(h.Z, {
                              product: R,
                              onClose: y,
                          })
                        : (0, n.jsx)(s.Button, {
                              variant: "secondary",
                              text: I.intl.string(I.t["ETE/oC"]),
                              onClick: y,
                          }),
                ],
            }),
        ],
    });
}
function w(e) {
    let {
            transitionState: t,
            analyticsLocations: r,
            onClose: c,
            onCloseModal: u,
            initialSelectedDecoration: d,
            isTryItOutFlow: p,
            guild: h,
        } = e,
        x = (0, l.e7)([y.default], () => y.default.getCurrentUser()),
        { analyticsLocations: g } = (0, o.ZP)(r, a.Z.EDIT_AVATAR_DECORATION_MODAL),
        { categories: v, purchases: j, isFetchingCategories: f, isFetchingPurchases: S } = (0, m.ZP)(),
        P = f || (S && 0 === j.size);
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
                      size: P ? s.CgR.DYNAMIC : s.CgR.MEDIUM,
                      parentComponent: "AvatarDecorationModal",
                      "data-migration-pending": !0,
                      children: P
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
                                isTryItOutFlow: p,
                            }),
                  }),
              })
    );
}
