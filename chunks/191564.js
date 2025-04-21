r.d(t, { default: () => S }), r(388685);
var n = r(200651),
    i = r(192379),
    l = r(442837),
    o = r(481060),
    s = r(100527),
    c = r(906732),
    a = r(335131),
    u = r(884697),
    d = r(449217),
    f = r(566111),
    p = r(222062),
    m = r(269982),
    g = r(197115),
    h = r(150039),
    b = r(594174),
    j = r(626135),
    x = r(74538),
    P = r(934261),
    y = r(52268),
    O = r(981631),
    v = r(474936),
    _ = r(388032),
    E = r(287975);
function C(e) {
    let { user: t, product: r, purchase: i, onApply: l, onClose: s, onOpenShop: c, disableApplyButton: a, canUseCollectibles: d, selectedProfileEffectId: f, selectedProfileEffectItem: h } = e,
        b = (0, p.M)();
    return (0, n.jsxs)(o.mzw, {
        className: E.modalFooter,
        children: [
            (0, n.jsxs)('div', {
                className: E.buttonsRight,
                children: [
                    !b &&
                        (0, n.jsx)(o.zxk, {
                            look: o.zxk.Looks.LINK,
                            color: o.zxk.Colors.PRIMARY,
                            onClick: s,
                            children: _.intl.string(_.t['ETE/oK'])
                        }),
                    (null != i && (!(0, u.qS)(i) || d)) || null === f
                        ? (0, n.jsx)(o.zxk, {
                              onClick: l,
                              disabled: a,
                              children: _.intl.string(_.t.d6sv6u)
                          })
                        : d || !(0, u.G1)(r)
                          ? (0, n.jsx)(o.zxk, {
                                onClick: () => c(null == h ? void 0 : h.skuId),
                                children: _.intl.string(_.t.fYfGgI)
                            })
                          : (0, n.jsx)(g.Z, {
                                subscriptionTier: v.Si.TIER_2,
                                showGradient: b,
                                buttonText: x.ZP.isPremium(t) ? _.intl.string(_.t.KXLX7u) : b ? _.intl.string(_.t.pj0XBA) : _.intl.string(_.t.mr4K7O)
                            })
                ]
            }),
            b &&
                (0, u.G1)(r) &&
                (0, n.jsx)(m.Z, {
                    product: r,
                    onSecondaryClick: s
                })
        ]
    });
}
function I(e) {
    let { user: t, guild: r, categories: l, purchases: c, onClose: f, initialSelectedProfileEffectId: p, currentSavedEffectId: m, analyticsLocations: g } = e,
        { pendingProfileEffectId: b } = (0, h.bd)(r),
        [j, O] = i.useMemo(() => {
            let e = (0, u.bl)(l, c);
            return [e.purchased, e.shopPreviews];
        }, [l, c]),
        [v, I] = i.useState(() => (null != p ? p : void 0 !== b ? b : null == m ? null : null != m ? m : null)),
        [S, w] = i.useMemo(() => {
            var e;
            let t = j.find((e) => (null == e ? void 0 : e.id) === v),
                r = null != t || null === v;
            return [null != (e = null != t ? t : O.find((e) => (null == e ? void 0 : e.id) === v)) ? e : null, r];
        }, [v, j, O]),
        { product: N, purchase: Z } = (0, d.Z)(null == S ? void 0 : S.skuId),
        k = i.useRef(null),
        D = x.ZP.canUseCollectibles(t),
        A = v === (void 0 === b ? (null != m ? m : null) : b),
        T = i.useCallback(
            (e) => {
                I(e);
            },
            [I]
        ),
        B = i.useCallback(
            (e) => {
                f(),
                    (0, a.mK)({
                        analyticsLocations: g,
                        analyticsSource: s.Z.EDIT_PROFILE_EFFECT_MODAL,
                        initialProductSkuId: e
                    });
            },
            [g, f]
        );
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(o.xBx, {
                separator: !1,
                className: E.modalHeader,
                children: [
                    (0, n.jsx)(o.X6q, {
                        variant: 'heading-lg/semibold',
                        children: _.intl.string(_.t.t5SVGR)
                    }),
                    (0, n.jsx)(o.olH, {
                        className: E.modalCloseButton,
                        onClick: f
                    })
                ]
            }),
            (0, n.jsxs)(o.hzk, {
                className: E.modalContent,
                children: [
                    (0, n.jsx)(y.Z, {
                        user: t,
                        guild: r,
                        pendingProfileEffect: v,
                        selectedProfileEffectRef: k,
                        onSelect: T,
                        onOpenShop: B
                    }),
                    (0, n.jsx)(P.Z, {
                        user: t,
                        canApplySelectedChange: w,
                        pendingProfileEffectRecord: S,
                        product: N,
                        purchase: Z,
                        guild: r
                    })
                ]
            }),
            (0, n.jsx)(C, {
                user: t,
                onApply: () => {
                    (0, h.s6)(v, m, null == r ? void 0 : r.id), f();
                },
                onClose: f,
                onOpenShop: B,
                product: N,
                purchase: Z,
                canUseCollectibles: D,
                selectedProfileEffectId: v,
                selectedProfileEffectItem: S,
                disableApplyButton: A,
                analyticsLocations: g
            })
        ]
    });
}
function S(e) {
    let { transitionState: t, analyticsLocations: r, initialSelectedEffectId: a, guild: u, onClose: d } = e,
        { isFetching: p, categories: m, purchases: g } = (0, f.Z)('ProfileEffectModal'),
        x = (0, l.e7)([b.default], () => b.default.getCurrentUser()),
        { analyticsLocations: P } = (0, c.ZP)(r, s.Z.EDIT_PROFILE_EFFECT_MODAL),
        y = (0, h.Kg)(x, u);
    return (
        i.useEffect(() => {
            j.default.track(O.rMx.OPEN_MODAL, {
                type: O.jXE.PROFILE_EFFECT_CUSTOMIZATION,
                location_stack: P
            });
        }, [P]),
        (0, n.jsx)(c.Gt, {
            value: P,
            children: (0, n.jsx)(o.Y0X, {
                transitionState: t,
                className: E.modal,
                size: p ? o.CgR.DYNAMIC : o.CgR.MEDIUM,
                children: p
                    ? (0, n.jsx)(o.$jN, {
                          className: E.spinner,
                          type: o.$jN.Type.SPINNING_CIRCLE
                      })
                    : (0, n.jsx)(I, {
                          user: x,
                          guild: u,
                          categories: m,
                          purchases: g,
                          initialSelectedProfileEffectId: a,
                          currentSavedEffectId: y,
                          onClose: d,
                          analyticsLocations: P
                      })
            })
        })
    );
}
