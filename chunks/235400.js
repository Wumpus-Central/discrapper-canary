r.d(t, { default: () => E }), r(388685);
var n = r(54381),
    i = r(473749),
    l = r(442837),
    a = r(481060),
    s = r(100527),
    o = r(906732),
    c = r(335131),
    d = r(884697),
    u = r(449217),
    m = r(223143),
    p = r(311395),
    h = r(269982),
    v = r(767714),
    x = r(150039),
    g = r(369111),
    f = r(271383),
    j = r(594174),
    _ = r(626135),
    y = r(74538),
    P = r(240781),
    O = r(818611),
    w = r(981631),
    I = r(474936),
    C = r(388032),
    S = r(88785);
function b(e) {
    let {
            user: t,
            categories: r,
            purchases: o,
            analyticsLocations: m,
            onClose: j,
            initialSelectedDecoration: _,
            isTryItOut: w,
            guild: b,
        } = e,
        E = (0, l.e7)([f.ZP], () => (null != b ? f.ZP.getMember(b.id, t.id) : null)),
        T = null != E ? E.avatarDecoration : t.avatarDecoration,
        { pendingAvatarDecoration: A, setPendingAvatarDecoration: D } = (0, g.Z)({
            analyticsLocations: m,
            isTryItOut: w,
            guildId: null == b ? void 0 : b.id,
        }),
        [Z, N] = i.useState(() => {
            var e;
            return null != _
                ? _
                : void 0 !== A
                  ? A
                  : null == T
                    ? null
                    : null !=
                        (e = (0, d.iC)(o, r).find((e) => {
                            let { skuId: t } = e;
                            return t === T.skuId;
                        }))
                      ? e
                      : null;
        }),
        k = (0, x.Ys)({
            pendingValue: Z,
            userValue: null == t ? void 0 : t.avatarDecoration,
            guildValue: null == E ? void 0 : E.avatarDecoration,
            guildId: null == b ? void 0 : b.id,
        }),
        { product: R, purchase: L } = (0, u.Z)(null == Z ? void 0 : Z.skuId),
        U = (0, d.G1)(R),
        M = y.ZP.canUseCollectibles(t),
        B = i.useRef(null),
        F = (0, p.Z)(m),
        z =
            void 0 === A
                ? (null == Z ? void 0 : Z.skuId) === (null == T ? void 0 : T.skuId)
                : (null == Z ? void 0 : Z.skuId) === (null == A ? void 0 : A.skuId),
        G = i.useCallback(
            (e) => {
                j(),
                    (0, c.mK)({
                        analyticsLocations: m,
                        analyticsSource: s.Z.EDIT_AVATAR_DECORATION_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [m, j],
        );
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(a.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                className: S.modalHeader,
                children: [
                    (0, n.jsx)(a.Heading, {
                        variant: "heading-lg/semibold",
                        children: C.intl.string(C.t.HykynS),
                    }),
                    (0, n.jsx)(a.olH, {
                        "data-migration-pending": !0,
                        className: S.modalCloseButton,
                        onClick: j,
                    }),
                ],
            }),
            (0, n.jsxs)(a.hzk, {
                "data-migration-pending": !0,
                className: S.modalContent,
                scrollbarType: "none",
                children: [
                    (0, n.jsx)(O.Z, {
                        user: t,
                        guild: b,
                        pendingAvatarDecoration: Z,
                        selectedAvatarDecorationRef: B,
                        isTryItOut: w,
                        onSelect: (e) => {
                            N(e), null != e && F(e);
                        },
                        onOpenShop: G,
                    }),
                    (0, n.jsx)(P.Z, {
                        className: S.modalPreview,
                        user: t,
                        guildId: null == b ? void 0 : b.id,
                        avatarDecoration: k,
                    }),
                ],
            }),
            (0, n.jsxs)(a.mzw, {
                "data-migration-pending": !0,
                className: S.modalFooter,
                children: [
                    (null != L && (M || !U)) || null === Z || (w && U)
                        ? (0, n.jsx)(a.Button, {
                              variant: "primary",
                              text: C.intl.string(C.t.Jh8fJz),
                              onClick: () => {
                                  D(Z), j();
                              },
                              disabled: z,
                          })
                        : null == L && (M || !U)
                          ? (0, n.jsx)(a.Button, {
                                variant: "primary",
                                onClick: () => G(null == R ? void 0 : R.skuId),
                                text: C.intl.string(C.t.fYfGgK),
                            })
                          : (0, n.jsx)(v.Z, {
                                subscriptionTier: I.Si.TIER_2,
                                showGradient: !M,
                                textOptions: {
                                    textOverride: y.ZP.isPremium(t)
                                        ? C.intl.string(C.t.KXLX7l)
                                        : M
                                          ? C.intl.string(C.t.mr4K7D)
                                          : C.intl.string(C.t.pj0XBN),
                                },
                            }),
                    M || w || !U
                        ? (0, n.jsx)(a.Button, {
                              variant: "secondary",
                              text: C.intl.string(C.t["ETE/oC"]),
                              onClick: j,
                          })
                        : (0, n.jsx)(h.Z, {
                              product: R,
                              onClose: j,
                          }),
                ],
            }),
        ],
    });
}
function E(e) {
    let {
            transitionState: t,
            analyticsLocations: r,
            onClose: c,
            onCloseModal: d,
            initialSelectedDecoration: u,
            isTryItOut: p,
            guild: h,
        } = e,
        v = (0, l.e7)([j.default], () => j.default.getCurrentUser()),
        { analyticsLocations: x } = (0, o.ZP)(r, s.Z.EDIT_AVATAR_DECORATION_MODAL),
        { categories: g, purchases: f, isFetchingCategories: y, isFetchingPurchases: P } = (0, m.ZP)(),
        O = y || (P && 0 === f.size);
    return (
        i.useEffect(() => {
            _.default.track(w.rMx.OPEN_MODAL, {
                type: w.jXE.AVATAR_DECORATION_CUSTOMIZATION,
                location_stack: x,
            });
        }, [x]),
        null == v
            ? null
            : (0, n.jsx)(o.Gt, {
                  value: x,
                  children: (0, n.jsx)(a.Y0X, {
                      transitionState: t,
                      className: S.modal,
                      size: O ? a.CgR.DYNAMIC : a.CgR.MEDIUM,
                      parentComponent: "AvatarDecorationModal",
                      "data-migration-pending": !0,
                      children: O
                          ? (0, n.jsx)(a.$jN, {
                                className: S.spinner,
                                type: a.$jN.Type.SPINNING_CIRCLE,
                            })
                          : (0, n.jsx)(b, {
                                user: v,
                                guild: h,
                                categories: g,
                                purchases: f,
                                analyticsLocations: x,
                                initialSelectedDecoration: u,
                                onClose: () => {
                                    d(), null == c || c();
                                },
                                isTryItOut: p,
                            }),
                  }),
              })
    );
}
