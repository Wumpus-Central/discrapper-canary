n.d(t, { default: () => A }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    l = n(481060),
    s = n(100527),
    o = n(906732),
    c = n(335131),
    d = n(884697),
    u = n(449217),
    m = n(223143),
    p = n(311395),
    h = n(269982),
    v = n(767714),
    x = n(150039),
    g = n(369111),
    f = n(271383),
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
    var t;
    let {
            user: n,
            categories: o,
            purchases: m,
            analyticsLocations: b,
            onClose: j,
            initialSelectedDecoration: w,
            guild: E,
        } = e,
        A = (0, a.e7)([f.ZP], () => (null != E ? f.ZP.getMember(E.id, n.id) : null)),
        T = null != A ? A.avatarDecoration : n.avatarDecoration,
        { pendingAvatarDecoration: _, setPendingAvatarDecoration: D } = (0, g.Z)({
            analyticsLocations: b,
            guildId: null == E ? void 0 : E.id,
        }),
        [Z, N] = i.useState(() => {
            var e;
            return null != w
                ? w
                : void 0 !== _
                  ? _
                  : null == T
                    ? null
                    : null !=
                        (e = (0, d.iC)(m, o).find((e) => {
                            let { skuId: t } = e;
                            return t === T.skuId;
                        }))
                      ? e
                      : null;
        }),
        k = (0, x.Ys)({
            pendingValue: Z,
            userValue: null == n ? void 0 : n.avatarDecoration,
            guildValue: null == A ? void 0 : A.avatarDecoration,
            guildId: null == E ? void 0 : E.id,
        }),
        { product: R, purchase: L } = (0, u.Z)(null == Z ? void 0 : Z.skuId),
        U = null != L ? (0, d.qS)(L) : (0, d.G1)(R),
        M = P.ZP.canUseCollectibles(n),
        B = i.useRef(null),
        F = (0, p.Z)(b),
        z =
            void 0 === _
                ? (null == Z ? void 0 : Z.skuId) === (null == T ? void 0 : T.skuId)
                : (null == Z ? void 0 : Z.skuId) === (null == _ ? void 0 : _.skuId),
        G = i.useCallback(
            (e) => {
                j(),
                    (0, c.mK)({
                        analyticsLocations: b,
                        analyticsSource: s.Z.EDIT_AVATAR_DECORATION_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [b, j],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(l.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                className: I.modalHeader,
                children: [
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-lg/semibold",
                        children: C.intl.string(C.t.HykynS),
                    }),
                    (0, r.jsx)(l.olH, {
                        "data-migration-pending": !0,
                        className: I.modalCloseButton,
                        onClick: j,
                    }),
                ],
            }),
            (0, r.jsxs)(l.hzk, {
                "data-migration-pending": !0,
                className: I.modalContent,
                scrollbarType: "none",
                children: [
                    (0, r.jsx)(O.Z, {
                        user: n,
                        guild: E,
                        pendingAvatarDecoration: Z,
                        selectedAvatarDecorationRef: B,
                        onSelect: (e) => {
                            N(e), null != e && F(e);
                        },
                        onOpenShop: G,
                    }),
                    (0, r.jsx)(y.Z, {
                        className: I.modalPreview,
                        user: n,
                        guildId: null == E ? void 0 : E.id,
                        avatarDecoration: k,
                    }),
                ],
            }),
            (0, r.jsxs)(l.mzw, {
                "data-migration-pending": !0,
                className: I.modalFooter,
                children: [
                    (null != L && (M || !U)) || null === Z
                        ? (0, r.jsx)(l.Button, {
                              variant: "primary",
                              text: C.intl.string(C.t.Jh8fJz),
                              onClick: () => {
                                  D(Z), j();
                              },
                              disabled: z,
                          })
                        : null == L && (M || !U)
                          ? (0, r.jsx)(l.Button, {
                                variant: "primary",
                                onClick: () => G(null == R ? void 0 : R.skuId),
                                text: C.intl.string(C.t.fYfGgK),
                            })
                          : (0, r.jsx)(v.Z, {
                                subscriptionTier: S.Si.TIER_2,
                                showGradient: !M,
                                textOptions: {
                                    textOverride: P.ZP.isPremium(n)
                                        ? C.intl.string(C.t.KXLX7l)
                                        : M
                                          ? C.intl.string(C.t.mr4K7D)
                                          : C.intl.string(C.t.pj0XBN),
                                },
                            }),
                    !M && U
                        ? (0, r.jsx)(h.Z, {
                              itemType: null != (t = null == L ? void 0 : L.type) ? t : null == R ? void 0 : R.type,
                              onClose: j,
                          })
                        : (0, r.jsx)(l.Button, {
                              variant: "secondary",
                              text: C.intl.string(C.t["ETE/oC"]),
                              onClick: j,
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
        h = (0, a.e7)([b.default], () => b.default.getCurrentUser()),
        { analyticsLocations: v } = (0, o.ZP)(n, s.Z.EDIT_AVATAR_DECORATION_MODAL),
        { categories: x, purchases: g, isFetchingCategories: f, isFetchingPurchases: P } = (0, m.ZP)(),
        y = f || (P && 0 === g.size);
    return (
        i.useEffect(() => {
            j.default.track(w.rMx.OPEN_MODAL, {
                type: w.jXE.AVATAR_DECORATION_CUSTOMIZATION,
                location_stack: v,
            });
        }, [v]),
        null == h
            ? null
            : (0, r.jsx)(o.Gt, {
                  value: v,
                  children: (0, r.jsx)(l.Y0X, {
                      transitionState: t,
                      className: I.modal,
                      size: y ? l.CgR.DYNAMIC : l.CgR.MEDIUM,
                      parentComponent: "AvatarDecorationModal",
                      "data-migration-pending": !0,
                      children: y
                          ? (0, r.jsx)(l.$jN, {
                                className: I.spinner,
                                type: l.$jN.Type.SPINNING_CIRCLE,
                            })
                          : (0, r.jsx)(E, {
                                user: h,
                                guild: p,
                                categories: x,
                                purchases: g,
                                analyticsLocations: v,
                                initialSelectedDecoration: u,
                                onClose: () => {
                                    d(), null == c || c();
                                },
                            }),
                  }),
              })
    );
}
