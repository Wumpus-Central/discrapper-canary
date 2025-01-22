r.r(n),
    r.d(n, {
        default: function () {
            return x;
        }
    });
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(979554),
    l = r(442837),
    u = r(481060),
    c = r(100527),
    d = r(906732),
    f = r(335131),
    p = r(884697),
    h = r(449217),
    _ = r(223143),
    m = r(311395),
    g = r(222062),
    E = r(269982),
    v = r(197115),
    y = r(369111),
    b = r(594174),
    I = r(626135),
    T = r(74538),
    S = r(864106),
    A = r(240781),
    C = r(818611),
    N = r(981631),
    R = r(474936),
    O = r(388032),
    D = r(152597);
function L(e) {
    let { user: n, categories: r, purchases: i, analyticsLocations: s, onClose: l, initialSelectedDecoration: d, initialSelectedDecorationId: _, isTryItOutFlow: b, guild: I } = e,
        {
            pendingAvatarDecoration: N,
            setPendingAvatarDecoration: L,
            savedAvatarDecoration: x
        } = (0, y.Z)({
            analyticsLocations: s,
            isTryItOut: b,
            guildId: null == I ? void 0 : I.id
        }),
        [w, P] = o.useState(() => {
            var e, n;
            if (null != d) return d;
            let a = (0, p.iC)(i, r);
            return null != _ ? (null !== (e = a.find((e) => e.id === _)) && void 0 !== e ? e : null) : void 0 !== N ? N : null == x ? null : null !== (n = a.find((e) => (0, S.sr)(e, x))) && void 0 !== n ? n : null;
        }),
        { product: M, purchase: k } = (0, h.Z)(null == w ? void 0 : w.skuId),
        U = T.ZP.canUseCollectibles(n),
        B = o.useRef(null),
        G = (0, m.Z)(s),
        Z = (0, S.sr)(w, void 0 === N ? x : N),
        F = (e) => {
            P(e), null != e && G(e);
        },
        V = () => {
            L(w), l();
        },
        j = o.useCallback(
            (e) => {
                l(),
                    (0, f.mK)({
                        analyticsLocations: s,
                        analyticsSource: c.Z.EDIT_AVATAR_DECORATION_MODAL,
                        initialProductSkuId: e
                    });
            },
            [s, l]
        ),
        H = (0, g.M)(),
        Y = () =>
            (null != k && (!(0, p.qS)(k) || U)) || null === w
                ? (0, a.jsx)(u.Button, {
                      onClick: V,
                      disabled: Z,
                      children: O.intl.string(O.t.d6sv6u)
                  })
                : null == k && (U || !(0, p.G1)(M))
                  ? (0, a.jsx)(u.Button, {
                        className: D.modalFooterShopButton,
                        onClick: () => j(null == M ? void 0 : M.skuId),
                        children: O.intl.string(O.t.fYfGgI)
                    })
                  : (0, a.jsx)(v.Z, {
                        subscriptionTier: R.Si.TIER_2,
                        showGradient: H,
                        buttonText: T.ZP.isPremium(n) ? O.intl.string(O.t.KXLX7u) : H ? O.intl.string(O.t.pj0XBA) : O.intl.string(O.t.mr4K7O)
                    });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(u.ModalHeader, {
                separator: !1,
                className: D.modalHeader,
                children: [
                    (0, a.jsx)(u.Heading, {
                        variant: 'heading-lg/semibold',
                        children: O.intl.string(O.t['Tna/TU'])
                    }),
                    (0, a.jsx)(u.ModalCloseButton, {
                        className: D.modalCloseButton,
                        onClick: l
                    })
                ]
            }),
            (0, a.jsxs)(u.ModalContent, {
                className: D.modalContent,
                scrollbarType: 'none',
                children: [
                    (0, a.jsx)(C.Z, {
                        user: n,
                        guild: I,
                        pendingAvatarDecoration: w,
                        selectedAvatarDecorationRef: B,
                        onSelect: F,
                        onOpenShop: j
                    }),
                    (0, a.jsx)(A.Z, {
                        className: D.modalPreview,
                        user: n,
                        guildId: null == I ? void 0 : I.id,
                        avatarDecorationOverride: w
                    })
                ]
            }),
            (0, a.jsxs)(u.ModalFooter, {
                className: D.modalFooter,
                children: [
                    (0, a.jsx)('div', { children: Y() }),
                    !H &&
                        (0, a.jsx)(u.Button, {
                            look: u.Button.Looks.LINK,
                            color: u.Button.Colors.PRIMARY,
                            onClick: l,
                            children: O.intl.string(O.t['ETE/oK'])
                        }),
                    H &&
                        (0, p.G1)(M) &&
                        (0, a.jsx)(E.Z, {
                            product: M,
                            onSecondaryClick: l
                        })
                ]
            })
        ]
    });
}
function x(e) {
    let { transitionState: n, analyticsLocations: r, onClose: i, onCloseModal: p, initialSelectedDecoration: h, initialSelectedDecorationId: m, isTryItOutFlow: g, guild: E } = e,
        v = (0, l.e7)([b.default], () => b.default.getCurrentUser()),
        { analyticsLocations: y } = (0, d.ZP)(r, c.Z.EDIT_AVATAR_DECORATION_MODAL),
        { categories: T, purchases: S, isFetchingCategories: A, isFetchingPurchases: C } = (0, _.ZP)({ location: 'AvatarDecorationModal' }),
        R = A || (C && 0 === S.size),
        O = () => {
            p(), null == i || i();
        };
    return (
        o.useEffect(() => {
            I.default.track(N.rMx.OPEN_MODAL, {
                type: 'Edit Avatar Decoration Modal',
                location_stack: y
            });
        }, [y]),
        o.useEffect(
            () => () => {
                (0, f.K$)({
                    categories: [...T.values()],
                    itemTypes: [s.Z.AVATAR_DECORATION]
                });
            },
            [T]
        ),
        null == v
            ? null
            : (0, a.jsx)(d.Gt, {
                  value: y,
                  children: (0, a.jsx)(u.ModalRoot, {
                      transitionState: n,
                      className: D.modal,
                      size: R ? u.ModalSize.DYNAMIC : u.ModalSize.MEDIUM,
                      children: R
                          ? (0, a.jsx)(u.Spinner, {
                                className: D.spinner,
                                type: u.Spinner.Type.SPINNING_CIRCLE
                            })
                          : (0, a.jsx)(L, {
                                user: v,
                                guild: E,
                                categories: T,
                                purchases: S,
                                analyticsLocations: y,
                                initialSelectedDecoration: h,
                                initialSelectedDecorationId: m,
                                onClose: O,
                                isTryItOutFlow: g
                            })
                  })
              })
    );
}
