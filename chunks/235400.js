(n.d(t, { default: () => P }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(755721),
    s = n(481060),
    l = n(100527),
    c = n(906732),
    u = n(335131),
    d = n(884697),
    f = n(449217),
    _ = n(223143),
    p = n(311395),
    h = n(222062),
    m = n(269982),
    g = n(767714),
    E = n(369111),
    b = n(594174),
    y = n(626135),
    O = n(74538),
    v = n(864106),
    I = n(240781),
    T = n(818611),
    S = n(981631),
    A = n(474936),
    N = n(388032),
    C = n(543901);
function R(e) {
    let { user: t, categories: n, purchases: a, analyticsLocations: c, onClose: _, initialSelectedDecoration: b, initialSelectedDecorationId: y, isTryItOutFlow: S, guild: R } = e,
        {
            pendingAvatarDecoration: P,
            setPendingAvatarDecoration: w,
            savedAvatarDecoration: D
        } = (0, E.Z)({
            analyticsLocations: c,
            isTryItOut: S,
            guildId: null == R ? void 0 : R.id
        }),
        [L, x] = i.useState(() => {
            var e, t;
            if (null != b) return b;
            let r = (0, d.iC)(a, n);
            return null != y ? (null != (e = r.find((e) => e.id === y)) ? e : null) : void 0 !== P ? P : null == D ? null : null != (t = r.find((e) => (0, v.sr)(e, D))) ? t : null;
        }),
        { product: M, purchase: k } = (0, f.Z)(null == L ? void 0 : L.skuId),
        j = O.ZP.canUseCollectibles(t),
        U = i.useRef(null),
        G = (0, p.Z)(c),
        B = (0, v.sr)(L, void 0 === P ? D : P),
        V = (e) => {
            (x(e), null != e && G(e));
        },
        F = () => {
            (w(L), _());
        },
        Z = i.useCallback(
            (e) => {
                (_(),
                    (0, u.mK)({
                        analyticsLocations: c,
                        analyticsSource: l.Z.EDIT_AVATAR_DECORATION_MODAL,
                        initialProductSkuId: e
                    }));
            },
            [c, _]
        ),
        H = (0, h.M)(),
        Y = () =>
            (null != k && (!(0, d.qS)(k) || j)) || null === L
                ? (0, r.jsx)(s.zxk, {
                      variant: 'primary',
                      text: N.intl.string(N.t.Jh8fJy),
                      onClick: F,
                      disabled: B
                  })
                : null == k && (j || !(0, d.G1)(M))
                  ? (0, r.jsx)(o.zx, {
                        className: C.modalFooterShopButton,
                        onClick: () => Z(null == M ? void 0 : M.skuId),
                        children: N.intl.string(N.t.fYfGgI)
                    })
                  : (0, r.jsx)(g.Z, {
                        subscriptionTier: A.Si.TIER_2,
                        showGradient: H,
                        textOptions: { textOverride: O.ZP.isPremium(t) ? N.intl.string(N.t.KXLX7u) : H ? N.intl.string(N.t.pj0XBA) : N.intl.string(N.t.mr4K7O) }
                    });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(s.xBx, {
                separator: !1,
                className: C.modalHeader,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: 'heading-lg/semibold',
                        children: N.intl.string(N.t.HykynZ)
                    }),
                    (0, r.jsx)(s.olH, {
                        className: C.modalCloseButton,
                        onClick: _
                    })
                ]
            }),
            (0, r.jsxs)(s.hzk, {
                className: C.modalContent,
                scrollbarType: 'none',
                children: [
                    (0, r.jsx)(T.Z, {
                        user: t,
                        guild: R,
                        pendingAvatarDecoration: L,
                        selectedAvatarDecorationRef: U,
                        onSelect: V,
                        onOpenShop: Z
                    }),
                    (0, r.jsx)(I.Z, {
                        className: C.modalPreview,
                        user: t,
                        guildId: null == R ? void 0 : R.id,
                        avatarDecorationOverride: L
                    })
                ]
            }),
            (0, r.jsxs)(s.mzw, {
                children: [
                    (0, r.jsx)('div', { children: Y() }),
                    !H &&
                        (0, r.jsx)(s.zxk, {
                            variant: 'secondary',
                            text: N.intl.string(N.t['ETE/oK']),
                            onClick: _
                        }),
                    H &&
                        (0, d.G1)(M) &&
                        (0, r.jsx)(m.Z, {
                            product: M,
                            onSecondaryClick: _
                        })
                ]
            })
        ]
    });
}
function P(e) {
    let { transitionState: t, analyticsLocations: n, onClose: o, onCloseModal: u, initialSelectedDecoration: d, initialSelectedDecorationId: f, isTryItOutFlow: p, guild: h } = e,
        m = (0, a.e7)([b.default], () => b.default.getCurrentUser()),
        { analyticsLocations: g } = (0, c.ZP)(n, l.Z.EDIT_AVATAR_DECORATION_MODAL),
        { categories: E, purchases: O, isFetchingCategories: v, isFetchingPurchases: I } = (0, _.ZP)({ location: 'AvatarDecorationModal' }),
        T = v || (I && 0 === O.size),
        A = () => {
            (u(), null == o || o());
        };
    return (
        i.useEffect(() => {
            y.default.track(S.rMx.OPEN_MODAL, {
                type: S.jXE.AVATAR_DECORATION_CUSTOMIZATION,
                location_stack: g
            });
        }, [g]),
        null == m
            ? null
            : (0, r.jsx)(c.Gt, {
                  value: g,
                  children: (0, r.jsx)(s.Y0X, {
                      transitionState: t,
                      className: C.modal,
                      size: T ? s.CgR.DYNAMIC : s.CgR.MEDIUM,
                      parentComponent: 'AvatarDecorationModal',
                      children: T
                          ? (0, r.jsx)(s.$jN, {
                                className: C.spinner,
                                type: s.$jN.Type.SPINNING_CIRCLE
                            })
                          : (0, r.jsx)(R, {
                                user: m,
                                guild: h,
                                categories: E,
                                purchases: O,
                                analyticsLocations: g,
                                initialSelectedDecoration: d,
                                initialSelectedDecorationId: f,
                                onClose: A,
                                isTryItOutFlow: p
                            })
                  })
              })
    );
}
