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
    v = r(74538),
    y = r(934261),
    O = r(52268),
    P = r(981631),
    _ = r(474936),
    N = r(388032),
    E = r(377734);
function C(e) {
    let { user: t, product: r, purchase: i, onApply: o, onClose: l, onOpenShop: c, disableApplyButton: a, canUseCollectibles: u, selectedProfileEffectId: f, selectedProfileEffectItem: p } = e,
        b = (0, m.M)();
    return (0, n.jsxs)(s.mzw, {
        className: E.modalFooter,
        children: [
            (0, n.jsxs)('div', {
                className: E.buttonsRight,
                children: [
                    !b &&
                        (0, n.jsx)(s.zxk, {
                            look: s.zxk.Looks.LINK,
                            color: s.zxk.Colors.PRIMARY,
                            onClick: l,
                            children: N.NW.string(N.t['ETE/oK'])
                        }),
                    (null != i && (!(0, d.qS)(i) || u)) || null === f
                        ? (0, n.jsx)(s.zxk, {
                              onClick: o,
                              disabled: a,
                              children: N.NW.string(N.t.d6sv6u)
                          })
                        : u || !(0, d.G1)(r)
                          ? (0, n.jsx)(s.zxk, {
                                onClick: () => c(null == p ? void 0 : p.skuId),
                                children: N.NW.string(N.t.fYfGgI)
                            })
                          : (0, n.jsx)(h.Z, {
                                subscriptionTier: _.Si.TIER_2,
                                showGradient: b,
                                buttonText: v.ZP.isPremium(t) ? N.NW.string(N.t.KXLX7u) : b ? N.NW.string(N.t.pj0XBA) : N.NW.string(N.t.mr4K7O)
                            })
                ]
            }),
            b &&
                (0, d.G1)(r) &&
                (0, n.jsx)(g.Z, {
                    product: r,
                    onSecondaryClick: l
                })
        ]
    });
}
function I(e) {
    let { user: t, guild: r, categories: o, purchases: l, onClose: a, initialSelectedProfileEffectId: p, currentSavedEffectId: m, analyticsLocations: g } = e,
        { pendingProfileEffectId: h } = (0, b.bd)(r),
        [j, x] = i.useMemo(() => {
            let e = (0, d.bl)(o, l);
            return [e.purchased, e.shopPreviews];
        }, [o, l]),
        [P, _] = i.useState(() => (null != p ? p : void 0 !== h ? h : null == m ? null : null != m ? m : null)),
        [I, S] = i.useMemo(() => {
            var e;
            let t = j.find((e) => (null == e ? void 0 : e.id) === P),
                r = null != t || null === P;
            return [null !== (e = null != t ? t : x.find((e) => (null == e ? void 0 : e.id) === P)) && void 0 !== e ? e : null, r];
        }, [P, j, x]),
        { product: w, purchase: Z } = (0, f.Z)(null == I ? void 0 : I.skuId),
        k = i.useRef(null),
        D = v.ZP.canUseCollectibles(t),
        T = P === (void 0 === h ? (null != m ? m : null) : h),
        A = i.useCallback(
            (e) => {
                _(e);
            },
            [_]
        ),
        B = i.useCallback(
            (e) => {
                a(),
                    (0, u.mK)({
                        analyticsLocations: g,
                        analyticsSource: c.Z.EDIT_PROFILE_EFFECT_MODAL,
                        initialProductSkuId: e
                    });
            },
            [g, a]
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
                        onClick: a
                    })
                ]
            }),
            (0, n.jsxs)(s.hzk, {
                className: E.modalContent,
                children: [
                    (0, n.jsx)(O.Z, {
                        user: t,
                        guild: r,
                        pendingProfileEffect: P,
                        selectedProfileEffectRef: k,
                        onSelect: A,
                        onOpenShop: B
                    }),
                    (0, n.jsx)(y.Z, {
                        user: t,
                        canApplySelectedChange: S,
                        pendingProfileEffectRecord: I,
                        product: w,
                        purchase: Z,
                        guild: r
                    })
                ]
            }),
            (0, n.jsx)(C, {
                user: t,
                onApply: () => {
                    (0, b.s6)(P, m, null == r ? void 0 : r.id), a();
                },
                onClose: a,
                onOpenShop: B,
                product: w,
                purchase: Z,
                canUseCollectibles: D,
                selectedProfileEffectId: P,
                selectedProfileEffectItem: I,
                disableApplyButton: T,
                analyticsLocations: g
            })
        ]
    });
}
function S(e) {
    let { transitionState: t, analyticsLocations: r, initialSelectedEffectId: d, guild: f, onClose: m } = e,
        { isFetching: g, categories: h, purchases: v } = (0, p.Z)('ProfileEffectModal'),
        y = (0, l.e7)([j.default], () => j.default.getCurrentUser()),
        { analyticsLocations: O } = (0, a.ZP)(r, c.Z.EDIT_PROFILE_EFFECT_MODAL),
        _ = (0, b.Kg)(y, f);
    return (
        i.useEffect(() => {
            x.default.track(P.rMx.OPEN_MODAL, {
                type: P.jXE.PROFILE_EFFECT_CUSTOMIZATION,
                location_stack: O
            });
        }, [O]),
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
            value: O,
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
                          user: y,
                          guild: f,
                          categories: h,
                          purchases: v,
                          initialSelectedProfileEffectId: d,
                          currentSavedEffectId: _,
                          onClose: m,
                          analyticsLocations: O
                      })
            })
        })
    );
}
