n.d(t, { default: () => I }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    o = n(481060),
    s = n(100527),
    c = n(906732),
    a = n(335131),
    u = n(884697),
    d = n(449217),
    f = n(223143),
    p = n(269982),
    m = n(767714),
    g = n(150039),
    h = n(594174),
    x = n(626135),
    b = n(74538),
    j = n(934261),
    y = n(52268),
    P = n(981631),
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
            canUsePremiumCollectibles: d,
            selectedProfileEffect: f,
        } = e,
        g = (0, u.G1)(n);
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsxs)(o.mzw, {
            "data-migration-pending": !0,
            className: v.modalFooter,
            children: [
                (null != i && (d || !g)) || null === f
                    ? (0, r.jsx)(o.Button, {
                          variant: "primary",
                          text: _.intl.string(_.t.Jh8fJz),
                          onClick: l,
                          disabled: a,
                      })
                    : null == i && (d || !g)
                      ? (0, r.jsx)(o.Button, {
                            variant: "primary",
                            text: _.intl.string(_.t.fYfGgK),
                            onClick: () => c(null == f ? void 0 : f.skuId),
                        })
                      : (0, r.jsx)(m.Z, {
                            subscriptionTier: O.Si.TIER_2,
                            showGradient: !d,
                            textOptions: {
                                textOverride: b.ZP.isPremium(t)
                                    ? _.intl.string(_.t.KXLX7l)
                                    : d
                                      ? _.intl.string(_.t.mr4K7D)
                                      : _.intl.string(_.t.pj0XBN),
                            },
                        }),
                !d && g
                    ? (0, r.jsx)(p.Z, {
                          product: n,
                          onClose: s,
                      })
                    : (0, r.jsx)(o.Button, {
                          variant: "secondary",
                          text: _.intl.string(_.t["ETE/oC"]),
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
            initialSelectedProfileEffect: f,
            currentSavedEffect: p,
            analyticsLocations: m,
            onClose: h,
        } = e,
        { pendingProfileEffect: x } = (0, g.xZ)(null == n ? void 0 : n.id),
        [P, O] = i.useMemo(() => {
            let e = (0, u.bl)(l, c);
            return [e.purchased, e.shopPreviews];
        }, [l, c]),
        [C, I] = i.useState(() => (null != f ? f : void 0 !== x ? x : null == p ? null : null != p ? p : null)),
        [S, w] = i.useMemo(() => {
            var e;
            let t = P.find((e) => {
                    let { skuId: t } = e;
                    return t === (null == C ? void 0 : C.skuId);
                }),
                n = null != t || null === C;
            return [
                null !=
                (e =
                    null != t
                        ? t
                        : O.find((e) => {
                              let { skuId: t } = e;
                              return t === (null == C ? void 0 : C.skuId);
                          }))
                    ? e
                    : null,
                n,
            ];
        }, [C, P, O]),
        { product: A, purchase: N } = (0, d.Z)(null == S ? void 0 : S.skuId),
        k = i.useRef(null),
        Z = b.ZP.canUseCollectibles(t),
        D =
            void 0 === x
                ? (null == C ? void 0 : C.skuId) === (null == p ? void 0 : p.skuId)
                : (null == C ? void 0 : C.skuId) === (null == x ? void 0 : x.skuId),
        T = i.useCallback(
            (e) => {
                I(e);
            },
            [I],
        ),
        U = i.useCallback(
            (e) => {
                h(),
                    (0, a.mK)({
                        analyticsLocations: m,
                        analyticsSource: s.Z.EDIT_PROFILE_EFFECT_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [m, h],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(o.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                className: v.modalHeader,
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: "heading-lg/semibold",
                        children: _.intl.string(_.t["/6nv6N"]),
                    }),
                    (0, r.jsx)(o.olH, {
                        "data-migration-pending": !0,
                        className: v.modalCloseButton,
                        onClick: h,
                    }),
                ],
            }),
            (0, r.jsxs)(o.hzk, {
                "data-migration-pending": !0,
                className: v.modalContent,
                children: [
                    (0, r.jsx)(y.Z, {
                        user: t,
                        guild: n,
                        pendingProfileEffect: C,
                        selectedProfileEffectRef: k,
                        onSelect: T,
                        onOpenShop: U,
                    }),
                    (0, r.jsx)(j.Z, {
                        user: t,
                        canApplySelectedChange: w,
                        pendingProfileEffectRecord: S,
                        product: A,
                        purchase: N,
                        guild: n,
                    }),
                ],
            }),
            (0, r.jsx)(E, {
                user: t,
                onApply: () => {
                    (0, g.UK)(C, null == n ? void 0 : n.id), h();
                },
                onClose: h,
                onOpenShop: U,
                product: A,
                purchase: N,
                canUsePremiumCollectibles: Z,
                selectedProfileEffect: C,
                disableApplyButton: D,
            }),
        ],
    });
}
function I(e) {
    let { transitionState: t, analyticsLocations: n, initialSelectedEffect: a, guild: u, onClose: d } = e,
        { isFetching: p, categories: m, purchases: b } = (0, f.ZP)(),
        j = (0, l.e7)([h.default], () => h.default.getCurrentUser()),
        { analyticsLocations: y } = (0, c.ZP)(n, s.Z.EDIT_PROFILE_EFFECT_MODAL),
        O = (0, g.nh)({
            user: j,
            guildId: null == u ? void 0 : u.id,
        });
    return (
        i.useEffect(() => {
            x.default.track(P.rMx.OPEN_MODAL, {
                type: P.jXE.PROFILE_EFFECT_CUSTOMIZATION,
                location_stack: y,
            });
        }, [y]),
        (0, r.jsx)(c.Gt, {
            value: y,
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
                          user: j,
                          guild: u,
                          categories: m,
                          purchases: b,
                          initialSelectedProfileEffect: a,
                          currentSavedEffect: O,
                          onClose: d,
                          analyticsLocations: y,
                      }),
            }),
        })
    );
}
