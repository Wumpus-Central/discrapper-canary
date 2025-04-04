n.d(t, { default: () => R }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    s = n(100527),
    l = n(906732),
    c = n(335131),
    u = n(884697),
    d = n(449217),
    f = n(223143),
    _ = n(311395),
    p = n(222062),
    h = n(269982),
    m = n(197115),
    g = n(369111),
    E = n(594174),
    b = n(626135),
    y = n(74538),
    v = n(864106),
    O = n(240781),
    I = n(818611),
    S = n(981631),
    T = n(474936),
    N = n(388032),
    A = n(543901);
function C(e) {
    let { user: t, categories: n, purchases: o, analyticsLocations: l, onClose: f, initialSelectedDecoration: E, initialSelectedDecorationId: b, isTryItOutFlow: S, guild: C } = e,
        {
            pendingAvatarDecoration: R,
            setPendingAvatarDecoration: P,
            savedAvatarDecoration: w
        } = (0, g.Z)({
            analyticsLocations: l,
            isTryItOut: S,
            guildId: null == C ? void 0 : C.id
        }),
        [D, L] = i.useState(() => {
            var e, t;
            if (null != E) return E;
            let r = (0, u.iC)(o, n);
            return null != b ? (null != (e = r.find((e) => e.id === b)) ? e : null) : void 0 !== R ? R : null == w ? null : null != (t = r.find((e) => (0, v.sr)(e, w))) ? t : null;
        }),
        { product: x, purchase: M } = (0, d.Z)(null == D ? void 0 : D.skuId),
        k = y.ZP.canUseCollectibles(t),
        j = i.useRef(null),
        U = (0, _.Z)(l),
        G = (0, v.sr)(D, void 0 === R ? w : R),
        B = (e) => {
            L(e), null != e && U(e);
        },
        F = () => {
            P(D), f();
        },
        V = i.useCallback(
            (e) => {
                f(),
                    (0, c.mK)({
                        analyticsLocations: l,
                        analyticsSource: s.Z.EDIT_AVATAR_DECORATION_MODAL,
                        initialProductSkuId: e
                    });
            },
            [l, f]
        ),
        Z = (0, p.M)(),
        H = () =>
            (null != M && (!(0, u.qS)(M) || k)) || null === D
                ? (0, r.jsx)(a.zxk, {
                      onClick: F,
                      disabled: G,
                      children: N.NW.string(N.t.d6sv6u)
                  })
                : null == M && (k || !(0, u.G1)(x))
                  ? (0, r.jsx)(a.zxk, {
                        className: A.modalFooterShopButton,
                        onClick: () => V(null == x ? void 0 : x.skuId),
                        children: N.NW.string(N.t.fYfGgI)
                    })
                  : (0, r.jsx)(m.Z, {
                        subscriptionTier: T.Si.TIER_2,
                        showGradient: Z,
                        buttonText: y.ZP.isPremium(t) ? N.NW.string(N.t.KXLX7u) : Z ? N.NW.string(N.t.pj0XBA) : N.NW.string(N.t.mr4K7O)
                    });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(a.xBx, {
                separator: !1,
                className: A.modalHeader,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: 'heading-lg/semibold',
                        children: N.NW.string(N.t['Tna/TU'])
                    }),
                    (0, r.jsx)(a.olH, {
                        className: A.modalCloseButton,
                        onClick: f
                    })
                ]
            }),
            (0, r.jsxs)(a.hzk, {
                className: A.modalContent,
                scrollbarType: 'none',
                children: [
                    (0, r.jsx)(I.Z, {
                        user: t,
                        guild: C,
                        pendingAvatarDecoration: D,
                        selectedAvatarDecorationRef: j,
                        onSelect: B,
                        onOpenShop: V
                    }),
                    (0, r.jsx)(O.Z, {
                        className: A.modalPreview,
                        user: t,
                        guildId: null == C ? void 0 : C.id,
                        avatarDecorationOverride: D
                    })
                ]
            }),
            (0, r.jsxs)(a.mzw, {
                children: [
                    (0, r.jsx)('div', { children: H() }),
                    !Z &&
                        (0, r.jsx)(a.zxk, {
                            look: a.zxk.Looks.LINK,
                            color: a.zxk.Colors.PRIMARY,
                            onClick: f,
                            children: N.NW.string(N.t['ETE/oK'])
                        }),
                    Z &&
                        (0, u.G1)(x) &&
                        (0, r.jsx)(h.Z, {
                            product: x,
                            onSecondaryClick: f
                        })
                ]
            })
        ]
    });
}
function R(e) {
    let { transitionState: t, analyticsLocations: n, onClose: c, onCloseModal: u, initialSelectedDecoration: d, initialSelectedDecorationId: _, isTryItOutFlow: p, guild: h } = e,
        m = (0, o.e7)([E.default], () => E.default.getCurrentUser()),
        { analyticsLocations: g } = (0, l.ZP)(n, s.Z.EDIT_AVATAR_DECORATION_MODAL),
        { categories: y, purchases: v, isFetchingCategories: O, isFetchingPurchases: I } = (0, f.ZP)({ location: 'AvatarDecorationModal' }),
        T = O || (I && 0 === v.size),
        N = () => {
            u(), null == c || c();
        };
    return (
        i.useEffect(() => {
            b.default.track(S.rMx.OPEN_MODAL, {
                type: S.jXE.AVATAR_DECORATION_CUSTOMIZATION,
                location_stack: g
            });
        }, [g]),
        null == m
            ? null
            : (0, r.jsx)(l.Gt, {
                  value: g,
                  children: (0, r.jsx)(a.Y0X, {
                      transitionState: t,
                      className: A.modal,
                      size: T ? a.CgR.DYNAMIC : a.CgR.MEDIUM,
                      children: T
                          ? (0, r.jsx)(a.$jN, {
                                className: A.spinner,
                                type: a.$jN.Type.SPINNING_CIRCLE
                            })
                          : (0, r.jsx)(C, {
                                user: m,
                                guild: h,
                                categories: y,
                                purchases: v,
                                analyticsLocations: g,
                                initialSelectedDecoration: d,
                                initialSelectedDecorationId: _,
                                onClose: N,
                                isTryItOutFlow: p
                            })
                  })
              })
    );
}
