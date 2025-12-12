n.d(t, { default: () => E }), n(388685);
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
    v = n(150039),
    g = n(369111),
    f = n(271383),
    j = n(594174),
    _ = n(626135),
    P = n(74538),
    O = n(240781),
    w = n(818611),
    y = n(981631),
    C = n(474936),
    S = n(388032),
    I = n(88785);
function b(e) {
    let {
            user: t,
            categories: n,
            purchases: o,
            analyticsLocations: m,
            onClose: j,
            initialSelectedDecoration: _,
            guild: y,
        } = e,
        b = (0, l.e7)([f.ZP], () => (null != y ? f.ZP.getMember(y.id, t.id) : null)),
        E = null != b ? b.avatarDecoration : t.avatarDecoration,
        { pendingAvatarDecoration: A, setPendingAvatarDecoration: T } = (0, g.Z)({
            analyticsLocations: m,
            guildId: null == y ? void 0 : y.id,
        }),
        [D, Z] = i.useState(() => {
            var e;
            return null != _
                ? _
                : void 0 !== A
                  ? A
                  : null == E
                    ? null
                    : null !=
                        (e = (0, d.iC)(o, n).find((e) => {
                            let { skuId: t } = e;
                            return t === E.skuId;
                        }))
                      ? e
                      : null;
        }),
        N = (0, v.Ys)({
            pendingValue: D,
            userValue: null == t ? void 0 : t.avatarDecoration,
            guildValue: null == b ? void 0 : b.avatarDecoration,
            guildId: null == y ? void 0 : y.id,
        }),
        { product: k, purchase: R } = (0, u.Z)(null == D ? void 0 : D.skuId),
        L = (0, d.G1)(k),
        U = P.ZP.canUseCollectibles(t),
        M = i.useRef(null),
        B = (0, p.Z)(m),
        F =
            void 0 === A
                ? (null == D ? void 0 : D.skuId) === (null == E ? void 0 : E.skuId)
                : (null == D ? void 0 : D.skuId) === (null == A ? void 0 : A.skuId),
        z = i.useCallback(
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
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(a.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                className: I.modalHeader,
                children: [
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-lg/semibold",
                        children: S.intl.string(S.t.HykynS),
                    }),
                    (0, r.jsx)(a.olH, {
                        "data-migration-pending": !0,
                        className: I.modalCloseButton,
                        onClick: j,
                    }),
                ],
            }),
            (0, r.jsxs)(a.hzk, {
                "data-migration-pending": !0,
                className: I.modalContent,
                scrollbarType: "none",
                children: [
                    (0, r.jsx)(w.Z, {
                        user: t,
                        guild: y,
                        pendingAvatarDecoration: D,
                        selectedAvatarDecorationRef: M,
                        onSelect: (e) => {
                            Z(e), null != e && B(e);
                        },
                        onOpenShop: z,
                    }),
                    (0, r.jsx)(O.Z, {
                        className: I.modalPreview,
                        user: t,
                        guildId: null == y ? void 0 : y.id,
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
                              text: S.intl.string(S.t.Jh8fJz),
                              onClick: () => {
                                  T(D), j();
                              },
                              disabled: F,
                          })
                        : null == R && (U || !L)
                          ? (0, r.jsx)(a.Button, {
                                variant: "primary",
                                onClick: () => z(null == k ? void 0 : k.skuId),
                                text: S.intl.string(S.t.fYfGgK),
                            })
                          : (0, r.jsx)(x.Z, {
                                subscriptionTier: C.Si.TIER_2,
                                showGradient: !U,
                                textOptions: {
                                    textOverride: P.ZP.isPremium(t)
                                        ? S.intl.string(S.t.KXLX7l)
                                        : U
                                          ? S.intl.string(S.t.mr4K7D)
                                          : S.intl.string(S.t.pj0XBN),
                                },
                            }),
                    !U && L
                        ? (0, r.jsx)(h.Z, {
                              product: k,
                              onClose: j,
                          })
                        : (0, r.jsx)(a.Button, {
                              variant: "secondary",
                              text: S.intl.string(S.t["ETE/oC"]),
                              onClick: j,
                          }),
                ],
            }),
        ],
    });
}
function E(e) {
    let {
            transitionState: t,
            analyticsLocations: n,
            onClose: c,
            onCloseModal: d,
            initialSelectedDecoration: u,
            guild: p,
        } = e,
        h = (0, l.e7)([j.default], () => j.default.getCurrentUser()),
        { analyticsLocations: x } = (0, o.ZP)(n, s.Z.EDIT_AVATAR_DECORATION_MODAL),
        { categories: v, purchases: g, isFetchingCategories: f, isFetchingPurchases: P } = (0, m.ZP)(),
        O = f || (P && 0 === g.size);
    return (
        i.useEffect(() => {
            _.default.track(y.rMx.OPEN_MODAL, {
                type: y.jXE.AVATAR_DECORATION_CUSTOMIZATION,
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
                      size: O ? a.CgR.DYNAMIC : a.CgR.MEDIUM,
                      parentComponent: "AvatarDecorationModal",
                      "data-migration-pending": !0,
                      children: O
                          ? (0, r.jsx)(a.$jN, {
                                className: I.spinner,
                                type: a.$jN.Type.SPINNING_CIRCLE,
                            })
                          : (0, r.jsx)(b, {
                                user: h,
                                guild: p,
                                categories: v,
                                purchases: g,
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
