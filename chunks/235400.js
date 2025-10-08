r.d(t, { default: () => A }), r(388685);
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
function C(e) {
    let {
            user: t,
            categories: r,
            purchases: l,
            analyticsLocations: o,
            onClose: m,
            initialSelectedDecoration: v,
            initialSelectedDecorationId: j,
            isTryItOutFlow: S,
            guild: C,
        } = e,
        {
            pendingAvatarDecoration: A,
            setPendingAvatarDecoration: I,
            savedAvatarDecoration: w,
        } = (0, g.Z)({
            analyticsLocations: o,
            isTryItOut: S,
            guildId: null == C ? void 0 : C.id,
        }),
        [T, N] = i.useState(() => {
            var e, t;
            if (null != v) return v;
            let n = (0, u.iC)(l, r);
            return null != j
                ? null != (e = n.find((e) => e.id === j))
                    ? e
                    : null
                : void 0 !== A
                  ? A
                  : null == w
                    ? null
                    : null !=
                        (t = n.find((e) => {
                            let { skuId: t } = e;
                            return t === w.skuId;
                        }))
                      ? t
                      : null;
        }),
        { product: Z, purchase: D } = (0, d.Z)(null == T ? void 0 : T.skuId),
        _ = y.ZP.canUseCollectibles(t),
        k = i.useRef(null),
        R = (0, p.Z)(o),
        L =
            void 0 === A
                ? (null == T ? void 0 : T.skuId) === (null == w ? void 0 : w.skuId)
                : (null == T ? void 0 : T.skuId) === (null == A ? void 0 : A.skuId),
        M = i.useCallback(
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
                    (0, n.jsx)(s.X6q, {
                        variant: "heading-lg/semibold",
                        children: b.intl.string(b.t.HykynZ),
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
                        guild: C,
                        pendingAvatarDecoration: T,
                        selectedAvatarDecorationRef: k,
                        onSelect: (e) => {
                            N(e), null != e && R(e);
                        },
                        onOpenShop: M,
                    }),
                    (0, n.jsx)(O.Z, {
                        className: E.modalPreview,
                        user: t,
                        guildId: null == C ? void 0 : C.id,
                        avatarDecorationOverride: T,
                    }),
                ],
            }),
            (0, n.jsxs)(s.mzw, {
                "data-migration-pending": !0,
                className: E.modalFooter,
                children: [
                    (null != D && (!(0, u.qS)(D) || _)) || null === T
                        ? (0, n.jsx)(s.zxk, {
                              variant: "primary",
                              text: b.intl.string(b.t.Jh8fJy),
                              onClick: () => {
                                  I(T), m();
                              },
                              disabled: L,
                          })
                        : null == D && (_ || !(0, u.G1)(Z))
                          ? (0, n.jsx)(s.zxk, {
                                variant: "primary",
                                onClick: () => M(null == Z ? void 0 : Z.skuId),
                                text: b.intl.string(b.t.fYfGgI),
                            })
                          : (0, n.jsx)(x.Z, {
                                subscriptionTier: P.Si.TIER_2,
                                showGradient: !_,
                                textOptions: {
                                    textOverride: y.ZP.isPremium(t)
                                        ? b.intl.string(b.t.KXLX7u)
                                        : _
                                          ? b.intl.string(b.t.mr4K7O)
                                          : b.intl.string(b.t.pj0XBA),
                                },
                            }),
                    !_ && (0, u.G1)(Z)
                        ? (0, n.jsx)(h.Z, {
                              product: Z,
                              onClose: m,
                          })
                        : (0, n.jsx)(s.zxk, {
                              variant: "secondary",
                              text: b.intl.string(b.t["ETE/oK"]),
                              onClick: m,
                          }),
                ],
            }),
        ],
    });
}
function A(e) {
    let {
            transitionState: t,
            analyticsLocations: r,
            onClose: c,
            onCloseModal: u,
            initialSelectedDecoration: d,
            initialSelectedDecorationId: p,
            isTryItOutFlow: h,
            guild: x,
        } = e,
        g = (0, l.e7)([v.default], () => v.default.getCurrentUser()),
        { analyticsLocations: y } = (0, o.ZP)(r, a.Z.EDIT_AVATAR_DECORATION_MODAL),
        { categories: O, purchases: f, isFetchingCategories: P, isFetchingPurchases: b } = (0, m.ZP)(),
        A = P || (b && 0 === f.size);
    return (
        i.useEffect(() => {
            j.default.track(S.rMx.OPEN_MODAL, {
                type: S.jXE.AVATAR_DECORATION_CUSTOMIZATION,
                location_stack: y,
            });
        }, [y]),
        null == g
            ? null
            : (0, n.jsx)(o.Gt, {
                  value: y,
                  children: (0, n.jsx)(s.Y0X, {
                      transitionState: t,
                      className: E.modal,
                      size: A ? s.CgR.DYNAMIC : s.CgR.MEDIUM,
                      parentComponent: "AvatarDecorationModal",
                      "data-migration-pending": !0,
                      children: A
                          ? (0, n.jsx)(s.$jN, {
                                className: E.spinner,
                                type: s.$jN.Type.SPINNING_CIRCLE,
                            })
                          : (0, n.jsx)(C, {
                                user: g,
                                guild: x,
                                categories: O,
                                purchases: f,
                                analyticsLocations: y,
                                initialSelectedDecoration: d,
                                initialSelectedDecorationId: p,
                                onClose: () => {
                                    u(), null == c || c();
                                },
                                isTryItOutFlow: h,
                            }),
                  }),
              })
    );
}
