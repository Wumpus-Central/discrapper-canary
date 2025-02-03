n.d(t, { default: () => D }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(979554),
    s = n(442837),
    o = n(481060),
    l = n(100527),
    u = n(906732),
    c = n(335131),
    d = n(884697),
    f = n(449217),
    _ = n(223143),
    p = n(311395),
    h = n(222062),
    m = n(269982),
    g = n(197115),
    E = n(369111),
    v = n(594174),
    y = n(626135),
    I = n(74538),
    b = n(864106),
    T = n(240781),
    S = n(818611),
    A = n(981631),
    N = n(474936),
    C = n(388032),
    R = n(152597);
function O(e) {
    let { user: t, categories: n, purchases: a, analyticsLocations: s, onClose: u, initialSelectedDecoration: _, initialSelectedDecorationId: v, isTryItOutFlow: y, guild: A } = e,
        {
            pendingAvatarDecoration: O,
            setPendingAvatarDecoration: D,
            savedAvatarDecoration: x
        } = (0, E.Z)({
            analyticsLocations: s,
            isTryItOut: y,
            guildId: null == A ? void 0 : A.id
        }),
        [L, P] = r.useState(() => {
            var e, t;
            if (null != _) return _;
            let i = (0, d.iC)(a, n);
            return null != v ? (null !== (e = i.find((e) => e.id === v)) && void 0 !== e ? e : null) : void 0 !== O ? O : null == x ? null : null !== (t = i.find((e) => (0, b.sr)(e, x))) && void 0 !== t ? t : null;
        }),
        { product: w, purchase: M } = (0, f.Z)(null == L ? void 0 : L.skuId),
        k = I.ZP.canUseCollectibles(t),
        U = r.useRef(null),
        G = (0, p.Z)(s),
        B = (0, b.sr)(L, void 0 === O ? x : O),
        Z = (e) => {
            P(e), null != e && G(e);
        },
        F = () => {
            D(L), u();
        },
        V = r.useCallback(
            (e) => {
                u(),
                    (0, c.mK)({
                        analyticsLocations: s,
                        analyticsSource: l.Z.EDIT_AVATAR_DECORATION_MODAL,
                        initialProductSkuId: e
                    });
            },
            [s, u]
        ),
        j = (0, h.M)(),
        H = () =>
            (null != M && (!(0, d.qS)(M) || k)) || null === L
                ? (0, i.jsx)(o.zxk, {
                      onClick: F,
                      disabled: B,
                      children: C.intl.string(C.t.d6sv6u)
                  })
                : null == M && (k || !(0, d.G1)(w))
                  ? (0, i.jsx)(o.zxk, {
                        className: R.modalFooterShopButton,
                        onClick: () => V(null == w ? void 0 : w.skuId),
                        children: C.intl.string(C.t.fYfGgI)
                    })
                  : (0, i.jsx)(g.Z, {
                        subscriptionTier: N.Si.TIER_2,
                        showGradient: j,
                        buttonText: I.ZP.isPremium(t) ? C.intl.string(C.t.KXLX7u) : j ? C.intl.string(C.t.pj0XBA) : C.intl.string(C.t.mr4K7O)
                    });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(o.xBx, {
                separator: !1,
                className: R.modalHeader,
                children: [
                    (0, i.jsx)(o.X6q, {
                        variant: 'heading-lg/semibold',
                        children: C.intl.string(C.t['Tna/TU'])
                    }),
                    (0, i.jsx)(o.olH, {
                        className: R.modalCloseButton,
                        onClick: u
                    })
                ]
            }),
            (0, i.jsxs)(o.hzk, {
                className: R.modalContent,
                scrollbarType: 'none',
                children: [
                    (0, i.jsx)(S.Z, {
                        user: t,
                        guild: A,
                        pendingAvatarDecoration: L,
                        selectedAvatarDecorationRef: U,
                        onSelect: Z,
                        onOpenShop: V
                    }),
                    (0, i.jsx)(T.Z, {
                        className: R.modalPreview,
                        user: t,
                        guildId: null == A ? void 0 : A.id,
                        avatarDecorationOverride: L
                    })
                ]
            }),
            (0, i.jsxs)(o.mzw, {
                className: R.modalFooter,
                children: [
                    (0, i.jsx)('div', { children: H() }),
                    !j &&
                        (0, i.jsx)(o.zxk, {
                            look: o.zxk.Looks.LINK,
                            color: o.zxk.Colors.PRIMARY,
                            onClick: u,
                            children: C.intl.string(C.t['ETE/oK'])
                        }),
                    j &&
                        (0, d.G1)(w) &&
                        (0, i.jsx)(m.Z, {
                            product: w,
                            onSecondaryClick: u
                        })
                ]
            })
        ]
    });
}
function D(e) {
    let { transitionState: t, analyticsLocations: n, onClose: d, onCloseModal: f, initialSelectedDecoration: p, initialSelectedDecorationId: h, isTryItOutFlow: m, guild: g } = e,
        E = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
        { analyticsLocations: I } = (0, u.ZP)(n, l.Z.EDIT_AVATAR_DECORATION_MODAL),
        { categories: b, purchases: T, isFetchingCategories: S, isFetchingPurchases: N } = (0, _.ZP)({ location: 'AvatarDecorationModal' }),
        C = S || (N && 0 === T.size),
        D = () => {
            f(), null == d || d();
        };
    return (
        r.useEffect(() => {
            y.default.track(A.rMx.OPEN_MODAL, {
                type: 'Edit Avatar Decoration Modal',
                location_stack: I
            });
        }, [I]),
        r.useEffect(
            () => () => {
                (0, c.K$)({
                    categories: [...b.values()],
                    itemTypes: [a.Z.AVATAR_DECORATION]
                });
            },
            [b]
        ),
        null == E
            ? null
            : (0, i.jsx)(u.Gt, {
                  value: I,
                  children: (0, i.jsx)(o.Y0X, {
                      transitionState: t,
                      className: R.modal,
                      size: C ? o.CgR.DYNAMIC : o.CgR.MEDIUM,
                      children: C
                          ? (0, i.jsx)(o.$jN, {
                                className: R.spinner,
                                type: o.$jN.Type.SPINNING_CIRCLE
                            })
                          : (0, i.jsx)(O, {
                                user: E,
                                guild: g,
                                categories: b,
                                purchases: T,
                                analyticsLocations: I,
                                initialSelectedDecoration: p,
                                initialSelectedDecorationId: h,
                                onClose: D,
                                isTryItOutFlow: m
                            })
                  })
              })
    );
}
