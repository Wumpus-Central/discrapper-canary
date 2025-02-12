n.d(t, { default: () => T }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(979554),
    s = n(442837),
    o = n(481060),
    c = n(100527),
    a = n(906732),
    d = n(335131),
    u = n(884697),
    f = n(449217),
    m = n(566111),
    p = n(222062),
    h = n(269982),
    g = n(197115),
    x = n(150039),
    _ = n(594174),
    v = n(626135),
    C = n(74538),
    E = n(934261),
    I = n(52268),
    j = n(981631),
    P = n(474936),
    N = n(388032),
    Z = n(694392);
function S(e) {
    let { user: t, product: n, purchase: l, onApply: s, onClose: a, disableApplyButton: f, canUseCollectibles: m, selectedProfileEffectId: x, selectedProfileEffectItem: _, analyticsLocations: v } = e,
        E = i.useCallback(() => {
            a(),
                (0, d.mK)({
                    analyticsLocations: v,
                    analyticsSource: c.Z.EDIT_PROFILE_EFFECT_MODAL,
                    initialProductSkuId: null != _ ? _.skuId : void 0
                });
        }, [a, v, _]),
        I = (0, p.M)();
    return (0, r.jsxs)(o.mzw, {
        className: Z.modalFooter,
        children: [
            (0, r.jsxs)('div', {
                className: Z.buttonsRight,
                children: [
                    !I &&
                        (0, r.jsx)(o.zxk, {
                            look: o.zxk.Looks.LINK,
                            color: o.zxk.Colors.PRIMARY,
                            onClick: a,
                            children: N.intl.string(N.t['ETE/oK'])
                        }),
                    (null != l && (!(0, u.qS)(l) || m)) || null === x
                        ? (0, r.jsx)(o.zxk, {
                              onClick: s,
                              disabled: f,
                              children: N.intl.string(N.t.d6sv6u)
                          })
                        : m || !(0, u.G1)(n)
                          ? (0, r.jsx)(o.zxk, {
                                onClick: E,
                                children: N.intl.string(N.t.fYfGgI)
                            })
                          : (0, r.jsx)(g.Z, {
                                subscriptionTier: P.Si.TIER_2,
                                showGradient: I,
                                buttonText: C.ZP.isPremium(t) ? N.intl.string(N.t.KXLX7u) : I ? N.intl.string(N.t.pj0XBA) : N.intl.string(N.t.mr4K7O)
                            })
                ]
            }),
            I &&
                (0, u.G1)(n) &&
                (0, r.jsx)(h.Z, {
                    product: n,
                    onSecondaryClick: a
                })
        ]
    });
}
function b(e) {
    let { user: t, guild: n, categories: l, purchases: s, onClose: c, initialSelectedProfileEffectId: a, currentSavedEffectId: d, analyticsLocations: m } = e,
        { pendingProfileEffectId: p } = (0, x.bd)(n),
        [h, g] = i.useMemo(() => {
            let e = (0, u.bl)(l, s);
            return [e.purchased, e.shopPreviews];
        }, [l, s]),
        [_, v] = i.useState(() => (null != a ? a : void 0 !== p ? p : null == d ? null : null != d ? d : null)),
        [j, P] = i.useMemo(() => {
            var e;
            let t = h.find((e) => (null == e ? void 0 : e.id) === _),
                n = null != t || null === _;
            return [null !== (e = null != t ? t : g.find((e) => (null == e ? void 0 : e.id) === _)) && void 0 !== e ? e : null, n];
        }, [_, h, g]),
        { product: b, purchase: T } = (0, f.Z)(null == j ? void 0 : j.skuId),
        k = i.useRef(null),
        A = C.ZP.canUseCollectibles(t),
        B = _ === (void 0 === p ? (null != d ? d : null) : p),
        G = i.useCallback(
            (e) => {
                v(e);
            },
            [v]
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(o.xBx, {
                separator: !1,
                className: Z.modalHeader,
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: 'heading-lg/semibold',
                        children: N.intl.string(N.t.t5SVGR)
                    }),
                    (0, r.jsx)(o.olH, {
                        className: Z.modalCloseButton,
                        onClick: c
                    })
                ]
            }),
            (0, r.jsxs)(o.hzk, {
                className: Z.modalContent,
                children: [
                    (0, r.jsx)(I.Z, {
                        user: t,
                        guild: n,
                        pendingProfileEffect: _,
                        selectedProfileEffectRef: k,
                        onSelect: G,
                        onClose: c
                    }),
                    (0, r.jsx)(E.Z, {
                        user: t,
                        canApplySelectedChange: P,
                        pendingProfileEffectRecord: j,
                        product: b,
                        purchase: T,
                        guild: n
                    })
                ]
            }),
            (0, r.jsx)(S, {
                user: t,
                onApply: () => {
                    (0, x.s6)(_, d, null == n ? void 0 : n.id), c();
                },
                onClose: c,
                product: b,
                purchase: T,
                canUseCollectibles: A,
                selectedProfileEffectId: _,
                selectedProfileEffectItem: j,
                disableApplyButton: B,
                analyticsLocations: m
            })
        ]
    });
}
function T(e) {
    let { transitionState: t, analyticsLocations: n, initialSelectedEffectId: u, guild: f, onClose: p } = e,
        { isFetching: h, categories: g, purchases: C } = (0, m.Z)('ProfileEffectModal'),
        E = (0, s.e7)([_.default], () => _.default.getCurrentUser()),
        { analyticsLocations: I } = (0, a.ZP)(n, c.Z.EDIT_PROFILE_EFFECT_MODAL),
        P = (0, x.Kg)(E, f);
    return (
        i.useEffect(() => {
            v.default.track(j.rMx.OPEN_MODAL, {
                type: j.jXE.PROFILE_EFFECT_CUSTOMIZATION,
                location_stack: I
            });
        }, [I]),
        i.useEffect(
            () => () => {
                (0, d.K$)({
                    categories: [...g.values()],
                    itemTypes: [l.Z.PROFILE_EFFECT]
                });
            },
            [g]
        ),
        (0, r.jsx)(a.Gt, {
            value: I,
            children: (0, r.jsx)(o.Y0X, {
                transitionState: t,
                className: Z.modal,
                size: h ? o.CgR.DYNAMIC : o.CgR.MEDIUM,
                children: h
                    ? (0, r.jsx)(o.$jN, {
                          className: Z.spinner,
                          type: o.$jN.Type.SPINNING_CIRCLE
                      })
                    : (0, r.jsx)(b, {
                          user: E,
                          guild: f,
                          categories: g,
                          purchases: C,
                          initialSelectedProfileEffectId: u,
                          currentSavedEffectId: P,
                          onClose: p,
                          analyticsLocations: I
                      })
            })
        })
    );
}
