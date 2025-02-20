r.d(t, { default: () => S }), r(47120);
var n = r(200651),
    i = r(192379),
    o = r(979554),
    l = r(442837),
    s = r(481060),
    c = r(100527),
    a = r(906732),
    u = r(335131),
    d = r(884697),
    f = r(449217),
    p = r(566111),
    m = r(222062),
    g = r(269982),
    h = r(197115),
    b = r(150039),
    j = r(594174),
    x = r(626135),
    P = r(74538),
    v = r(934261),
    y = r(52268),
    O = r(981631),
    _ = r(474936),
    N = r(388032),
    E = r(650359);
function C(e) {
    let { user: t, product: r, purchase: o, onApply: l, onClose: a, disableApplyButton: f, canUseCollectibles: p, selectedProfileEffectId: b, selectedProfileEffectItem: j, analyticsLocations: x } = e,
        v = i.useCallback(() => {
            a(),
                (0, u.mK)({
                    analyticsLocations: x,
                    analyticsSource: c.Z.EDIT_PROFILE_EFFECT_MODAL,
                    initialProductSkuId: null != j ? j.skuId : void 0
                });
        }, [a, x, j]),
        y = (0, m.M)();
    return (0, n.jsxs)(s.mzw, {
        className: E.modalFooter,
        children: [
            (0, n.jsxs)('div', {
                className: E.buttonsRight,
                children: [
                    !y &&
                        (0, n.jsx)(s.zxk, {
                            look: s.zxk.Looks.LINK,
                            color: s.zxk.Colors.PRIMARY,
                            onClick: a,
                            children: N.NW.string(N.t['ETE/oK'])
                        }),
                    (null != o && (!(0, d.qS)(o) || p)) || null === b
                        ? (0, n.jsx)(s.zxk, {
                              onClick: l,
                              disabled: f,
                              children: N.NW.string(N.t.d6sv6u)
                          })
                        : p || !(0, d.G1)(r)
                          ? (0, n.jsx)(s.zxk, {
                                onClick: v,
                                children: N.NW.string(N.t.fYfGgI)
                            })
                          : (0, n.jsx)(h.Z, {
                                subscriptionTier: _.Si.TIER_2,
                                showGradient: y,
                                buttonText: P.ZP.isPremium(t) ? N.NW.string(N.t.KXLX7u) : y ? N.NW.string(N.t.pj0XBA) : N.NW.string(N.t.mr4K7O)
                            })
                ]
            }),
            y &&
                (0, d.G1)(r) &&
                (0, n.jsx)(g.Z, {
                    product: r,
                    onSecondaryClick: a
                })
        ]
    });
}
function I(e) {
    let { user: t, guild: r, categories: o, purchases: l, onClose: c, initialSelectedProfileEffectId: a, currentSavedEffectId: u, analyticsLocations: p } = e,
        { pendingProfileEffectId: m } = (0, b.bd)(r),
        [g, h] = i.useMemo(() => {
            let e = (0, d.bl)(o, l);
            return [e.purchased, e.shopPreviews];
        }, [o, l]),
        [j, x] = i.useState(() => (null != a ? a : void 0 !== m ? m : null == u ? null : null != u ? u : null)),
        [O, _] = i.useMemo(() => {
            var e;
            let t = g.find((e) => (null == e ? void 0 : e.id) === j),
                r = null != t || null === j;
            return [null !== (e = null != t ? t : h.find((e) => (null == e ? void 0 : e.id) === j)) && void 0 !== e ? e : null, r];
        }, [j, g, h]),
        { product: I, purchase: S } = (0, f.Z)(null == O ? void 0 : O.skuId),
        w = i.useRef(null),
        Z = P.ZP.canUseCollectibles(t),
        k = j === (void 0 === m ? (null != u ? u : null) : m),
        D = i.useCallback(
            (e) => {
                x(e);
            },
            [x]
        );
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(s.xBx, {
                separator: !1,
                className: E.modalHeader,
                children: [
                    (0, n.jsx)(s.X6q, {
                        variant: 'heading-lg/semibold',
                        children: N.NW.string(N.t.t5SVGR)
                    }),
                    (0, n.jsx)(s.olH, {
                        className: E.modalCloseButton,
                        onClick: c
                    })
                ]
            }),
            (0, n.jsxs)(s.hzk, {
                className: E.modalContent,
                children: [
                    (0, n.jsx)(y.Z, {
                        user: t,
                        guild: r,
                        pendingProfileEffect: j,
                        selectedProfileEffectRef: w,
                        onSelect: D,
                        onClose: c
                    }),
                    (0, n.jsx)(v.Z, {
                        user: t,
                        canApplySelectedChange: _,
                        pendingProfileEffectRecord: O,
                        product: I,
                        purchase: S,
                        guild: r
                    })
                ]
            }),
            (0, n.jsx)(C, {
                user: t,
                onApply: () => {
                    (0, b.s6)(j, u, null == r ? void 0 : r.id), c();
                },
                onClose: c,
                product: I,
                purchase: S,
                canUseCollectibles: Z,
                selectedProfileEffectId: j,
                selectedProfileEffectItem: O,
                disableApplyButton: k,
                analyticsLocations: p
            })
        ]
    });
}
function S(e) {
    let { transitionState: t, analyticsLocations: r, initialSelectedEffectId: d, guild: f, onClose: m } = e,
        { isFetching: g, categories: h, purchases: P } = (0, p.Z)('ProfileEffectModal'),
        v = (0, l.e7)([j.default], () => j.default.getCurrentUser()),
        { analyticsLocations: y } = (0, a.ZP)(r, c.Z.EDIT_PROFILE_EFFECT_MODAL),
        _ = (0, b.Kg)(v, f);
    return (
        i.useEffect(() => {
            x.default.track(O.rMx.OPEN_MODAL, {
                type: O.jXE.PROFILE_EFFECT_CUSTOMIZATION,
                location_stack: y
            });
        }, [y]),
        i.useEffect(
            () => () => {
                (0, u.K$)({
                    categories: [...h.values()],
                    itemTypes: [o.Z.PROFILE_EFFECT]
                });
            },
            [h]
        ),
        (0, n.jsx)(a.Gt, {
            value: y,
            children: (0, n.jsx)(s.Y0X, {
                transitionState: t,
                className: E.modal,
                size: g ? s.CgR.DYNAMIC : s.CgR.MEDIUM,
                children: g
                    ? (0, n.jsx)(s.$jN, {
                          className: E.spinner,
                          type: s.$jN.Type.SPINNING_CIRCLE
                      })
                    : (0, n.jsx)(I, {
                          user: v,
                          guild: f,
                          categories: h,
                          purchases: P,
                          initialSelectedProfileEffectId: d,
                          currentSavedEffectId: _,
                          onClose: m,
                          analyticsLocations: y
                      })
            })
        })
    );
}
