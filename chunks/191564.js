n.d(t, { default: () => S }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    o = n(481060),
    s = n(100527),
    c = n(906732),
    a = n(335131),
    u = n(884697),
    d = n(449217),
    f = n(566111),
    p = n(269982),
    m = n(767714),
    g = n(150039),
    h = n(594174),
    x = n(626135),
    b = n(74538),
    y = n(934261),
    P = n(52268),
    j = n(981631),
    O = n(474936),
    _ = n(388032),
    v = n(238983);
function E(e) {
    let {
        user: t,
        product: n,
        purchase: i,
        onApply: l,
        onClose: s,
        onOpenShop: c,
        disableApplyButton: a,
        canUseCollectibles: d,
        selectedProfileEffectId: f,
        selectedProfileEffectItem: g,
    } = e;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsxs)(o.mzw, {
            "data-migration-pending": !0,
            className: v.modalFooter,
            children: [
                (null != i && (!(0, u.qS)(i) || d)) || null === f
                    ? (0, r.jsx)(o.zxk, {
                          variant: "primary",
                          text: _.intl.string(_.t.Jh8fJy),
                          onClick: l,
                          disabled: a,
                      })
                    : null == i && (d || !(0, u.G1)(n))
                      ? (0, r.jsx)(o.zxk, {
                            variant: "primary",
                            text: _.intl.string(_.t.fYfGgI),
                            onClick: () => c(null == g ? void 0 : g.skuId),
                        })
                      : (0, r.jsx)(m.Z, {
                            subscriptionTier: O.Si.TIER_2,
                            showGradient: !d,
                            textOptions: {
                                textOverride: b.ZP.isPremium(t)
                                    ? _.intl.string(_.t.KXLX7u)
                                    : d
                                      ? _.intl.string(_.t.mr4K7O)
                                      : _.intl.string(_.t.pj0XBA),
                            },
                        }),
                !d && (0, u.G1)(n)
                    ? (0, r.jsx)(p.Z, {
                          product: n,
                          onClose: s,
                      })
                    : (0, r.jsx)(o.zxk, {
                          variant: "secondary",
                          text: _.intl.string(_.t["ETE/oK"]),
                          onClick: s,
                      }),
            ],
        }),
    });
}
function C(e) {
    let {
            user: t,
            guild: n,
            categories: l,
            purchases: c,
            onClose: f,
            initialSelectedProfileEffectId: p,
            currentSavedEffectId: m,
            analyticsLocations: h,
        } = e,
        { pendingProfileEffectId: x } = (0, g.bd)(n),
        [j, O] = i.useMemo(() => {
            let e = (0, u.bl)(l, c);
            return [e.purchased, e.shopPreviews];
        }, [l, c]),
        [C, S] = i.useState(() => (null != p ? p : void 0 !== x ? x : null == m ? null : null != m ? m : null)),
        [w, A] = i.useMemo(() => {
            var e;
            let t = j.find((e) => (null == e ? void 0 : e.id) === C),
                n = null != t || null === C;
            return [null != (e = null != t ? t : O.find((e) => (null == e ? void 0 : e.id) === C)) ? e : null, n];
        }, [C, j, O]),
        { product: I, purchase: Z } = (0, d.Z)(null == w ? void 0 : w.skuId),
        N = i.useRef(null),
        D = b.ZP.canUseCollectibles(t),
        T = C === (void 0 === x ? (null != m ? m : null) : x),
        k = i.useCallback(
            (e) => {
                S(e);
            },
            [S],
        ),
        L = i.useCallback(
            (e) => {
                f(),
                    (0, a.mK)({
                        analyticsLocations: h,
                        analyticsSource: s.Z.EDIT_PROFILE_EFFECT_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [h, f],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(o.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                className: v.modalHeader,
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: "heading-lg/semibold",
                        children: _.intl.string(_.t["/6nv6O"]),
                    }),
                    (0, r.jsx)(o.olH, {
                        "data-migration-pending": !0,
                        className: v.modalCloseButton,
                        onClick: f,
                    }),
                ],
            }),
            (0, r.jsxs)(o.hzk, {
                "data-migration-pending": !0,
                className: v.modalContent,
                children: [
                    (0, r.jsx)(P.Z, {
                        user: t,
                        guild: n,
                        pendingProfileEffect: C,
                        selectedProfileEffectRef: N,
                        onSelect: k,
                        onOpenShop: L,
                    }),
                    (0, r.jsx)(y.Z, {
                        user: t,
                        canApplySelectedChange: A,
                        pendingProfileEffectRecord: w,
                        product: I,
                        purchase: Z,
                        guild: n,
                    }),
                ],
            }),
            (0, r.jsx)(E, {
                user: t,
                onApply: () => {
                    (0, g.s6)(C, m, null == n ? void 0 : n.id), f();
                },
                onClose: f,
                onOpenShop: L,
                product: I,
                purchase: Z,
                canUseCollectibles: D,
                selectedProfileEffectId: C,
                selectedProfileEffectItem: w,
                disableApplyButton: T,
                analyticsLocations: h,
            }),
        ],
    });
}
function S(e) {
    let { transitionState: t, analyticsLocations: n, initialSelectedEffectId: a, guild: u, onClose: d } = e,
        { isFetching: p, categories: m, purchases: b } = (0, f.Z)(),
        y = (0, l.e7)([h.default], () => h.default.getCurrentUser()),
        { analyticsLocations: P } = (0, c.ZP)(n, s.Z.EDIT_PROFILE_EFFECT_MODAL),
        O = (0, g.Kg)(y, u);
    return (
        i.useEffect(() => {
            x.default.track(j.rMx.OPEN_MODAL, {
                type: j.jXE.PROFILE_EFFECT_CUSTOMIZATION,
                location_stack: P,
            });
        }, [P]),
        (0, r.jsx)(c.Gt, {
            value: P,
            children: (0, r.jsx)(o.Y0X, {
                transitionState: t,
                className: v.modal,
                size: p ? o.CgR.DYNAMIC : o.CgR.MEDIUM,
                parentComponent: "ProfileEffectModal",
                "data-migration-pending": !0,
                children: p
                    ? (0, r.jsx)(o.$jN, {
                          className: v.spinner,
                          type: o.$jN.Type.SPINNING_CIRCLE,
                      })
                    : (0, r.jsx)(C, {
                          user: y,
                          guild: u,
                          categories: m,
                          purchases: b,
                          initialSelectedProfileEffectId: a,
                          currentSavedEffectId: O,
                          onClose: d,
                          analyticsLocations: P,
                      }),
            }),
        })
    );
}
