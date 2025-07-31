(r.d(t, { default: () => I }), r(388685));
var n = r(255367),
    i = r(73800),
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
    g = r(767714),
    h = r(150039),
    b = r(594174),
    j = r(626135),
    y = r(74538),
    x = r(934261),
    v = r(52268),
    O = r(981631),
    P = r(474936),
    _ = r(388032),
    E = r(287975);
function S(e) {
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
                            variant: 'secondary',
                            text: _.intl.string(_.t['ETE/oK']),
                            onClick: s
                        }),
                    (null != i && (!(0, u.qS)(i) || d)) || null === f
                        ? (0, n.jsx)(o.zxk, {
                              variant: 'primary',
                              text: _.intl.string(_.t.Jh8fJy),
                              onClick: l,
                              disabled: a
                          })
                        : d || !(0, u.G1)(r)
                          ? (0, n.jsx)(o.zxk, {
                                variant: 'primary',
                                text: _.intl.string(_.t.fYfGgI),
                                onClick: () => c(null == h ? void 0 : h.skuId)
                            })
                          : (0, n.jsx)(g.Z, {
                                subscriptionTier: P.Si.TIER_2,
                                showGradient: b,
                                textOptions: { textOverride: y.ZP.isPremium(t) ? _.intl.string(_.t.KXLX7u) : b ? _.intl.string(_.t.pj0XBA) : _.intl.string(_.t.mr4K7O) }
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
function C(e) {
    let { user: t, guild: r, categories: l, purchases: c, onClose: f, initialSelectedProfileEffectId: p, currentSavedEffectId: m, analyticsLocations: g } = e,
        { pendingProfileEffectId: b } = (0, h.bd)(r),
        [j, O] = i.useMemo(() => {
            let e = (0, u.bl)(l, c);
            return [e.purchased, e.shopPreviews];
        }, [l, c]),
        [P, C] = i.useState(() => (null != p ? p : void 0 !== b ? b : null == m ? null : null != m ? m : null)),
        [I, w] = i.useMemo(() => {
            var e;
            let t = j.find((e) => (null == e ? void 0 : e.id) === P),
                r = null != t || null === P;
            return [null != (e = null != t ? t : O.find((e) => (null == e ? void 0 : e.id) === P)) ? e : null, r];
        }, [P, j, O]),
        { product: Z, purchase: N } = (0, d.Z)(null == I ? void 0 : I.skuId),
        D = i.useRef(null),
        k = y.ZP.canUseCollectibles(t),
        A = P === (void 0 === b ? (null != m ? m : null) : b),
        T = i.useCallback(
            (e) => {
                C(e);
            },
            [C]
        ),
        R = i.useCallback(
            (e) => {
                (f(),
                    (0, a.mK)({
                        analyticsLocations: g,
                        analyticsSource: s.Z.EDIT_PROFILE_EFFECT_MODAL,
                        initialProductSkuId: e
                    }));
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
                        children: _.intl.string(_.t['/6nv6O'])
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
                    (0, n.jsx)(v.Z, {
                        user: t,
                        guild: r,
                        pendingProfileEffect: P,
                        selectedProfileEffectRef: D,
                        onSelect: T,
                        onOpenShop: R
                    }),
                    (0, n.jsx)(x.Z, {
                        user: t,
                        canApplySelectedChange: w,
                        pendingProfileEffectRecord: I,
                        product: Z,
                        purchase: N,
                        guild: r
                    })
                ]
            }),
            (0, n.jsx)(S, {
                user: t,
                onApply: () => {
                    ((0, h.s6)(P, m, null == r ? void 0 : r.id), f());
                },
                onClose: f,
                onOpenShop: R,
                product: Z,
                purchase: N,
                canUseCollectibles: k,
                selectedProfileEffectId: P,
                selectedProfileEffectItem: I,
                disableApplyButton: A,
                analyticsLocations: g
            })
        ]
    });
}
function I(e) {
    let { transitionState: t, analyticsLocations: r, initialSelectedEffectId: a, guild: u, onClose: d } = e,
        { isFetching: p, categories: m, purchases: g } = (0, f.Z)('ProfileEffectModal'),
        y = (0, l.e7)([b.default], () => b.default.getCurrentUser()),
        { analyticsLocations: x } = (0, c.ZP)(r, s.Z.EDIT_PROFILE_EFFECT_MODAL),
        v = (0, h.Kg)(y, u);
    return (
        i.useEffect(() => {
            j.default.track(O.rMx.OPEN_MODAL, {
                type: O.jXE.PROFILE_EFFECT_CUSTOMIZATION,
                location_stack: x
            });
        }, [x]),
        (0, n.jsx)(c.Gt, {
            value: x,
            children: (0, n.jsx)(o.Y0X, {
                transitionState: t,
                className: E.modal,
                size: p ? o.CgR.DYNAMIC : o.CgR.MEDIUM,
                parentComponent: 'ProfileEffectModal',
                children: p
                    ? (0, n.jsx)(o.$jN, {
                          className: E.spinner,
                          type: o.$jN.Type.SPINNING_CIRCLE
                      })
                    : (0, n.jsx)(C, {
                          user: y,
                          guild: u,
                          categories: m,
                          purchases: g,
                          initialSelectedProfileEffectId: a,
                          currentSavedEffectId: v,
                          onClose: d,
                          analyticsLocations: x
                      })
            })
        })
    );
}
