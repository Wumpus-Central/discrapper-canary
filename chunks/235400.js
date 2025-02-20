n.d(t, { default: () => P }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(979554),
    a = n(442837),
    s = n(481060),
    l = n(100527),
    c = n(906732),
    u = n(335131),
    d = n(884697),
    f = n(449217),
    p = n(223143),
    _ = n(311395),
    h = n(222062),
    m = n(269982),
    g = n(197115),
    E = n(369111),
    v = n(594174),
    b = n(626135),
    y = n(74538),
    O = n(864106),
    S = n(240781),
    I = n(818611),
    T = n(981631),
    N = n(474936),
    A = n(388032),
    C = n(65321);
function R(e) {
    let { user: t, categories: n, purchases: o, analyticsLocations: a, onClose: c, initialSelectedDecoration: p, initialSelectedDecorationId: v, isTryItOutFlow: b, guild: T } = e,
        {
            pendingAvatarDecoration: R,
            setPendingAvatarDecoration: P,
            savedAvatarDecoration: w
        } = (0, E.Z)({
            analyticsLocations: a,
            isTryItOut: b,
            guildId: null == T ? void 0 : T.id
        }),
        [D, x] = i.useState(() => {
            var e, t;
            if (null != p) return p;
            let r = (0, d.iC)(o, n);
            return null != v ? (null !== (e = r.find((e) => e.id === v)) && void 0 !== e ? e : null) : void 0 !== R ? R : null == w ? null : null !== (t = r.find((e) => (0, O.sr)(e, w))) && void 0 !== t ? t : null;
        }),
        { product: L, purchase: M } = (0, f.Z)(null == D ? void 0 : D.skuId),
        k = y.ZP.canUseCollectibles(t),
        j = i.useRef(null),
        U = (0, _.Z)(a),
        G = (0, O.sr)(D, void 0 === R ? w : R),
        B = (e) => {
            x(e), null != e && U(e);
        },
        Z = () => {
            P(D), c();
        },
        F = i.useCallback(
            (e) => {
                c(),
                    (0, u.mK)({
                        analyticsLocations: a,
                        analyticsSource: l.Z.EDIT_AVATAR_DECORATION_MODAL,
                        initialProductSkuId: e
                    });
            },
            [a, c]
        ),
        V = (0, h.M)(),
        H = () =>
            (null != M && (!(0, d.qS)(M) || k)) || null === D
                ? (0, r.jsx)(s.zxk, {
                      onClick: Z,
                      disabled: G,
                      children: A.NW.string(A.t.d6sv6u)
                  })
                : null == M && (k || !(0, d.G1)(L))
                  ? (0, r.jsx)(s.zxk, {
                        className: C.modalFooterShopButton,
                        onClick: () => F(null == L ? void 0 : L.skuId),
                        children: A.NW.string(A.t.fYfGgI)
                    })
                  : (0, r.jsx)(g.Z, {
                        subscriptionTier: N.Si.TIER_2,
                        showGradient: V,
                        buttonText: y.ZP.isPremium(t) ? A.NW.string(A.t.KXLX7u) : V ? A.NW.string(A.t.pj0XBA) : A.NW.string(A.t.mr4K7O)
                    });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(s.xBx, {
                separator: !1,
                className: C.modalHeader,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: 'heading-lg/semibold',
                        children: A.NW.string(A.t['Tna/TU'])
                    }),
                    (0, r.jsx)(s.olH, {
                        className: C.modalCloseButton,
                        onClick: c
                    })
                ]
            }),
            (0, r.jsxs)(s.hzk, {
                className: C.modalContent,
                scrollbarType: 'none',
                children: [
                    (0, r.jsx)(I.Z, {
                        user: t,
                        guild: T,
                        pendingAvatarDecoration: D,
                        selectedAvatarDecorationRef: j,
                        onSelect: B,
                        onOpenShop: F
                    }),
                    (0, r.jsx)(S.Z, {
                        className: C.modalPreview,
                        user: t,
                        guildId: null == T ? void 0 : T.id,
                        avatarDecorationOverride: D
                    })
                ]
            }),
            (0, r.jsxs)(s.mzw, {
                children: [
                    (0, r.jsx)('div', { children: H() }),
                    !V &&
                        (0, r.jsx)(s.zxk, {
                            look: s.zxk.Looks.LINK,
                            color: s.zxk.Colors.PRIMARY,
                            onClick: c,
                            children: A.NW.string(A.t['ETE/oK'])
                        }),
                    V &&
                        (0, d.G1)(L) &&
                        (0, r.jsx)(m.Z, {
                            product: L,
                            onSecondaryClick: c
                        })
                ]
            })
        ]
    });
}
function P(e) {
    let { transitionState: t, analyticsLocations: n, onClose: d, onCloseModal: f, initialSelectedDecoration: _, initialSelectedDecorationId: h, isTryItOutFlow: m, guild: g } = e,
        E = (0, a.e7)([v.default], () => v.default.getCurrentUser()),
        { analyticsLocations: y } = (0, c.ZP)(n, l.Z.EDIT_AVATAR_DECORATION_MODAL),
        { categories: O, purchases: S, isFetchingCategories: I, isFetchingPurchases: N } = (0, p.ZP)({ location: 'AvatarDecorationModal' }),
        A = I || (N && 0 === S.size),
        P = () => {
            f(), null == d || d();
        };
    return (
        i.useEffect(() => {
            b.default.track(T.rMx.OPEN_MODAL, {
                type: 'Edit Avatar Decoration Modal',
                location_stack: y
            });
        }, [y]),
        i.useEffect(
            () => () => {
                (0, u.K$)({
                    categories: [...O.values()],
                    itemTypes: [o.Z.AVATAR_DECORATION]
                });
            },
            [O]
        ),
        null == E
            ? null
            : (0, r.jsx)(c.Gt, {
                  value: y,
                  children: (0, r.jsx)(s.Y0X, {
                      transitionState: t,
                      className: C.modal,
                      size: A ? s.CgR.DYNAMIC : s.CgR.MEDIUM,
                      children: A
                          ? (0, r.jsx)(s.$jN, {
                                className: C.spinner,
                                type: s.$jN.Type.SPINNING_CIRCLE
                            })
                          : (0, r.jsx)(R, {
                                user: E,
                                guild: g,
                                categories: O,
                                purchases: S,
                                analyticsLocations: y,
                                initialSelectedDecoration: _,
                                initialSelectedDecorationId: h,
                                onClose: P,
                                isTryItOutFlow: m
                            })
                  })
              })
    );
}
