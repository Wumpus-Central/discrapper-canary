n.r(t),
    n.d(t, {
        default: function () {
            return B;
        }
    }),
    n(47120);
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
    C = n(594174),
    I = n(626135),
    v = n(74538),
    E = n(934261),
    P = n(52268),
    _ = n(981631),
    j = n(474936),
    S = n(388032),
    N = n(390153);
function Z(e) {
    let { user: t, product: n, purchase: l, onApply: s, onClose: a, disableApplyButton: f, canUseCollectibles: m, selectedProfileEffectId: x, selectedProfileEffectItem: C, analyticsLocations: I } = e,
        E = i.useCallback(() => {
            a(),
                (0, d.mK)({
                    analyticsLocations: I,
                    analyticsSource: c.Z.EDIT_PROFILE_EFFECT_MODAL,
                    initialProductSkuId: null != C ? C.skuId : void 0
                });
        }, [a, I, C]),
        P = (0, p.M)();
    return (0, r.jsxs)(o.ModalFooter, {
        className: N.modalFooter,
        children: [
            (0, r.jsxs)('div', {
                className: N.buttonsRight,
                children: [
                    !P &&
                        (0, r.jsx)(o.Button, {
                            look: o.Button.Looks.LINK,
                            color: o.Button.Colors.PRIMARY,
                            onClick: a,
                            children: S.intl.string(S.t['ETE/oK'])
                        }),
                    (null != l && (!(0, u.qS)(l) || m)) || null === x
                        ? (0, r.jsx)(o.Button, {
                              onClick: s,
                              disabled: f,
                              children: S.intl.string(S.t.d6sv6u)
                          })
                        : m || !(0, u.G1)(n)
                          ? (0, r.jsx)(o.Button, {
                                onClick: E,
                                children: S.intl.string(S.t.fYfGgI)
                            })
                          : (0, r.jsx)(g.Z, {
                                subscriptionTier: j.Si.TIER_2,
                                showGradient: P,
                                buttonText: v.ZP.isPremium(t) ? S.intl.string(S.t.KXLX7u) : P ? S.intl.string(S.t.pj0XBA) : S.intl.string(S.t.mr4K7O)
                            })
                ]
            }),
            P &&
                (0, u.G1)(n) &&
                (0, r.jsx)(h.Z, {
                    product: n,
                    onSecondaryClick: a
                })
        ]
    });
}
function T(e) {
    let { user: t, guild: n, categories: l, purchases: s, onClose: c, initialSelectedProfileEffectId: a, currentSavedEffectId: d, analyticsLocations: m } = e,
        { pendingProfileEffectId: p } = (0, x.bd)(n),
        [h, g] = i.useMemo(() => {
            let e = (0, u.bl)(l, s);
            return [e.purchased, e.shopPreviews];
        }, [l, s]),
        [C, I] = i.useState(() => (null != a ? a : void 0 !== p ? p : null == d ? null : null != d ? d : null)),
        [_, j] = i.useMemo(() => {
            var e;
            let t = h.find((e) => (null == e ? void 0 : e.id) === C),
                n = null != t || null === C;
            return [null !== (e = null != t ? t : g.find((e) => (null == e ? void 0 : e.id) === C)) && void 0 !== e ? e : null, n];
        }, [C, h, g]),
        { product: T, purchase: B } = (0, f.Z)(null == _ ? void 0 : _.skuId),
        b = i.useRef(null),
        A = v.ZP.canUseCollectibles(t),
        k = C === (void 0 === p ? (null != d ? d : null) : p),
        y = i.useCallback(
            (e) => {
                I(e);
            },
            [I]
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(o.ModalHeader, {
                separator: !1,
                className: N.modalHeader,
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: 'heading-lg/semibold',
                        children: S.intl.string(S.t.t5SVGR)
                    }),
                    (0, r.jsx)(o.ModalCloseButton, {
                        className: N.modalCloseButton,
                        onClick: c
                    })
                ]
            }),
            (0, r.jsxs)(o.ModalContent, {
                className: N.modalContent,
                children: [
                    (0, r.jsx)(P.Z, {
                        user: t,
                        guild: n,
                        pendingProfileEffect: C,
                        selectedProfileEffectRef: b,
                        onSelect: y,
                        onClose: c
                    }),
                    (0, r.jsx)(E.Z, {
                        user: t,
                        canApplySelectedChange: j,
                        pendingProfileEffectRecord: _,
                        product: T,
                        purchase: B,
                        guild: n
                    })
                ]
            }),
            (0, r.jsx)(Z, {
                user: t,
                onApply: () => {
                    (0, x.s6)(C, d, null == n ? void 0 : n.id), c();
                },
                onClose: c,
                product: T,
                purchase: B,
                canUseCollectibles: A,
                selectedProfileEffectId: C,
                selectedProfileEffectItem: _,
                disableApplyButton: k,
                analyticsLocations: m
            })
        ]
    });
}
function B(e) {
    let { transitionState: t, analyticsLocations: n, initialSelectedEffectId: u, guild: f, onClose: p } = e,
        { isFetching: h, categories: g, purchases: v } = (0, m.Z)('ProfileEffectModal'),
        E = (0, s.e7)([C.default], () => C.default.getCurrentUser()),
        { analyticsLocations: P } = (0, a.ZP)(n, c.Z.EDIT_PROFILE_EFFECT_MODAL),
        j = (0, x.Kg)(E, f);
    return (
        i.useEffect(() => {
            I.default.track(_.rMx.OPEN_MODAL, {
                type: _.jXE.PROFILE_EFFECT_CUSTOMIZATION,
                location_stack: P
            });
        }, [P]),
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
            value: P,
            children: (0, r.jsx)(o.ModalRoot, {
                transitionState: t,
                className: N.modal,
                size: h ? o.ModalSize.DYNAMIC : o.ModalSize.MEDIUM,
                children: h
                    ? (0, r.jsx)(o.Spinner, {
                          className: N.spinner,
                          type: o.Spinner.Type.SPINNING_CIRCLE
                      })
                    : (0, r.jsx)(T, {
                          user: E,
                          guild: f,
                          categories: g,
                          purchases: v,
                          initialSelectedProfileEffectId: u,
                          currentSavedEffectId: j,
                          onClose: p,
                          analyticsLocations: P
                      })
            })
        })
    );
}
