n.d(t, { default: () => A }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    s = n(100527),
    o = n(906732),
    c = n(335131),
    d = n(884697),
    u = n(449217),
    m = n(223143),
    p = n(311395),
    h = n(269982),
    x = n(767714),
    g = n(150039),
    f = n(369111),
    v = n(271383),
    b = n(594174),
    j = n(626135),
    P = n(74538),
    y = n(240781),
    O = n(818611),
    w = n(981631),
    S = n(474936),
    C = n(388032),
    I = n(258659);
function E(e) {
    let {
            user: t,
            categories: n,
            purchases: o,
            analyticsLocations: m,
            onClose: b,
            initialSelectedDecoration: j,
            guild: w,
        } = e,
        E = (0, l.e7)([v.ZP], () => (null != w ? v.ZP.getMember(w.id, t.id) : null)),
        A = null != E ? E.avatarDecoration : t.avatarDecoration,
        { pendingAvatarDecoration: T, setPendingAvatarDecoration: _ } = (0, f.Z)({
            analyticsLocations: m,
            guildId: null == w ? void 0 : w.id,
        }),
        [D, Z] = i.useState(() => {
            var e;
            return null != j
                ? j
                : void 0 !== T
                  ? T
                  : null == A
                    ? null
                    : null !=
                        (e = (0, d.iC)(o, n).find((e) => {
                            let { skuId: t } = e;
                            return t === A.skuId;
                        }))
                      ? e
                      : null;
        }),
        N = (0, g.Ys)({
            pendingValue: D,
            userValue: null == t ? void 0 : t.avatarDecoration,
            guildValue: null == E ? void 0 : E.avatarDecoration,
            guildId: null == w ? void 0 : w.id,
        }),
        { product: k, purchase: R } = (0, u.Z)(null == D ? void 0 : D.skuId),
        L = null != R ? (0, d.qS)(R) : (0, d.G1)(k),
        U = P.ZP.canUseCollectibles(t),
        M = i.useRef(null),
        B = (0, p.Z)(m),
        F =
            void 0 === T
                ? (null == D ? void 0 : D.skuId) === (null == A ? void 0 : A.skuId)
                : (null == D ? void 0 : D.skuId) === (null == T ? void 0 : T.skuId),
        z = i.useCallback(
            (e) => {
                b(),
                    (0, c.mK)({
                        analyticsLocations: m,
                        analyticsSource: s.Z.EDIT_AVATAR_DECORATION_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [m, b],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(a.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                className: I.modalHeader,
                children: [
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-lg/semibold",
                        children: C.intl.string(C.t.HykynS),
                    }),
                    (0, r.jsx)(a.olH, {
                        "data-migration-pending": !0,
                        className: I.modalCloseButton,
                        onClick: b,
                    }),
                ],
            }),
            (0, r.jsxs)(a.hzk, {
                "data-migration-pending": !0,
                className: I.modalContent,
                scrollbarType: "none",
                children: [
                    (0, r.jsx)(O.Z, {
                        user: t,
                        guild: w,
                        pendingAvatarDecoration: D,
                        selectedAvatarDecorationRef: M,
                        onSelect: (e) => {
                            Z(e), null != e && B(e);
                        },
                        onOpenShop: z,
                    }),
                    (0, r.jsx)(y.Z, {
                        className: I.modalPreview,
                        user: t,
                        guildId: null == w ? void 0 : w.id,
                        avatarDecoration: N,
                    }),
                ],
            }),
            (0, r.jsxs)(a.mzw, {
                "data-migration-pending": !0,
                className: I.modalFooter,
                children: [
                    (null != R && (U || !L)) || null === D
                        ? (0, r.jsx)(a.Button, {
                              variant: "primary",
                              text: C.intl.string(C.t.Jh8fJz),
                              onClick: () => {
                                  _(D), b();
                              },
                              disabled: F,
                          })
                        : null == R && (U || !L)
                          ? (0, r.jsx)(a.Button, {
                                variant: "primary",
                                onClick: () => z(null == k ? void 0 : k.skuId),
                                text: C.intl.string(C.t.fYfGgK),
                            })
                          : (0, r.jsx)(x.Z, {
                                subscriptionTier: S.Si.TIER_2,
                                showGradient: !U,
                                textOptions: {
                                    textOverride: P.ZP.isPremium(t)
                                        ? C.intl.string(C.t.KXLX7l)
                                        : U
                                          ? C.intl.string(C.t.mr4K7D)
                                          : C.intl.string(C.t.pj0XBN),
                                },
                            }),
                    !U && L
                        ? (0, r.jsx)(h.Z, {
                              product: null != R ? R : k,
                              onClose: b,
                          })
                        : (0, r.jsx)(a.Button, {
                              variant: "secondary",
                              text: C.intl.string(C.t["ETE/oC"]),
                              onClick: b,
                          }),
                ],
            }),
        ],
    });
}
function A(e) {
    let {
            transitionState: t,
            analyticsLocations: n,
            onClose: c,
            onCloseModal: d,
            initialSelectedDecoration: u,
            guild: p,
        } = e,
        h = (0, l.e7)([b.default], () => b.default.getCurrentUser()),
        { analyticsLocations: x } = (0, o.ZP)(n, s.Z.EDIT_AVATAR_DECORATION_MODAL),
        { categories: g, purchases: f, isFetchingCategories: v, isFetchingPurchases: P } = (0, m.ZP)(),
        y = v || (P && 0 === f.size);
    return (
        i.useEffect(() => {
            j.default.track(w.rMx.OPEN_MODAL, {
                type: w.jXE.AVATAR_DECORATION_CUSTOMIZATION,
                location_stack: x,
            });
        }, [x]),
        null == h
            ? null
            : (0, r.jsx)(o.Gt, {
                  value: x,
                  children: (0, r.jsx)(a.Y0X, {
                      transitionState: t,
                      className: I.modal,
                      size: y ? a.CgR.DYNAMIC : a.CgR.MEDIUM,
                      parentComponent: "AvatarDecorationModal",
                      "data-migration-pending": !0,
                      children: y
                          ? (0, r.jsx)(a.$jN, {
                                className: I.spinner,
                                type: a.$jN.Type.SPINNING_CIRCLE,
                            })
                          : (0, r.jsx)(E, {
                                user: h,
                                guild: p,
                                categories: g,
                                purchases: f,
                                analyticsLocations: x,
                                initialSelectedDecoration: u,
                                onClose: () => {
                                    d(), null == c || c();
                                },
                            }),
                  }),
              })
    );
}
