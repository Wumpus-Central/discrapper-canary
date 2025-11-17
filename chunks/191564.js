n.d(t, { default: () => S }), n(388685);
var r = n(54381),
    i = n(473749),
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
    h = n(350327),
    x = n(594174),
    y = n(626135),
    b = n(74538),
    j = n(934261),
    O = n(52268),
    P = n(981631),
    v = n(474936),
    _ = n(388032),
    E = n(238983);
function C(e) {
    let {
            user: t,
            product: n,
            purchase: i,
            onApply: l,
            onClose: s,
            onOpenShop: c,
            disableApplyButton: a,
            canUsePremiumCollectibles: d,
            isTryItOut: f,
            selectedProfileEffect: g,
        } = e,
        h = (0, u.G1)(n);
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsxs)(o.mzw, {
            "data-migration-pending": !0,
            className: E.modalFooter,
            children: [
                (null != i && (d || !h)) || null === g || (f && h)
                    ? (0, r.jsx)(o.Button, {
                          variant: "primary",
                          text: _.intl.string(_.t.Jh8fJz),
                          onClick: l,
                          disabled: a,
                      })
                    : null == i && (d || !h)
                      ? (0, r.jsx)(o.Button, {
                            variant: "primary",
                            text: _.intl.string(_.t.fYfGgK),
                            onClick: () => c(null == g ? void 0 : g.skuId),
                        })
                      : (0, r.jsx)(m.Z, {
                            subscriptionTier: v.Si.TIER_2,
                            showGradient: !d,
                            textOptions: {
                                textOverride: b.ZP.isPremium(t)
                                    ? _.intl.string(_.t.KXLX7l)
                                    : d
                                      ? _.intl.string(_.t.mr4K7D)
                                      : _.intl.string(_.t.pj0XBN),
                            },
                        }),
                d || f || !h
                    ? (0, r.jsx)(o.Button, {
                          variant: "secondary",
                          text: _.intl.string(_.t["ETE/oC"]),
                          onClick: s,
                      })
                    : (0, r.jsx)(p.Z, {
                          product: n,
                          onClose: s,
                      }),
            ],
        }),
    });
}
function I(e) {
    let {
            user: t,
            guild: n,
            categories: l,
            purchases: c,
            initialSelectedProfileEffect: f,
            currentSavedEffect: p,
            analyticsLocations: m,
            isTryItOut: x = !1,
            onClose: y,
        } = e,
        { pendingProfileEffect: P } = (0, g.sY)({
            guildId: null == n ? void 0 : n.id,
            isTryItOut: x,
        }),
        [v, I] = i.useMemo(() => {
            let e = (0, u.bl)(l, c);
            return [e.purchased, e.shopPreviews];
        }, [l, c]),
        [S, w] = i.useState(() => (null != f ? f : void 0 !== P ? P : null == p ? null : null != p ? p : null)),
        [A, N] = i.useMemo(() => {
            var e;
            let t = v.find((e) => {
                    let { skuId: t } = e;
                    return t === (null == S ? void 0 : S.skuId);
                }),
                n = null != t || null === S;
            return [
                null !=
                (e =
                    null != t
                        ? t
                        : I.find((e) => {
                              let { skuId: t } = e;
                              return t === (null == S ? void 0 : S.skuId);
                          }))
                    ? e
                    : null,
                n,
            ];
        }, [S, v, I]),
        { product: T, purchase: Z } = (0, d.Z)(null == A ? void 0 : A.skuId),
        k = i.useRef(null),
        D = b.ZP.canUseCollectibles(t),
        U =
            void 0 === P
                ? (null == S ? void 0 : S.skuId) === (null == p ? void 0 : p.skuId)
                : (null == S ? void 0 : S.skuId) === (null == P ? void 0 : P.skuId),
        B = i.useCallback(
            (e) => {
                w(e);
            },
            [w],
        ),
        L = i.useCallback(
            (e) => {
                y(),
                    (0, a.mK)({
                        analyticsLocations: m,
                        analyticsSource: s.Z.EDIT_PROFILE_EFFECT_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [m, y],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(o.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                className: E.modalHeader,
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: "heading-lg/semibold",
                        children: _.intl.string(_.t["/6nv6N"]),
                    }),
                    (0, r.jsx)(o.olH, {
                        "data-migration-pending": !0,
                        className: E.modalCloseButton,
                        onClick: y,
                    }),
                ],
            }),
            (0, r.jsxs)(o.hzk, {
                "data-migration-pending": !0,
                className: E.modalContent,
                children: [
                    (0, r.jsx)(O.Z, {
                        user: t,
                        guild: n,
                        pendingProfileEffect: S,
                        selectedProfileEffectRef: k,
                        isTryItOut: x,
                        onSelect: B,
                        onOpenShop: L,
                    }),
                    (0, r.jsx)(j.Z, {
                        user: t,
                        canApplySelectedChange: N,
                        pendingProfileEffectRecord: A,
                        product: T,
                        purchase: Z,
                        guild: n,
                    }),
                ],
            }),
            (0, r.jsx)(C, {
                user: t,
                onApply: () => {
                    x ? (0, h.Ju)(S) : (0, g.UK)(S, null == n ? void 0 : n.id), y();
                },
                onClose: y,
                onOpenShop: L,
                product: T,
                purchase: Z,
                canUsePremiumCollectibles: D,
                isTryItOut: x,
                selectedProfileEffect: S,
                disableApplyButton: U,
            }),
        ],
    });
}
function S(e) {
    let {
            transitionState: t,
            analyticsLocations: n,
            initialSelectedEffect: a,
            guild: u,
            isTryItOut: d,
            onClose: p,
        } = e,
        { isFetching: m, categories: h, purchases: b } = (0, f.Z)(),
        j = (0, l.e7)([x.default], () => x.default.getCurrentUser()),
        { analyticsLocations: O } = (0, c.ZP)(n, s.Z.EDIT_PROFILE_EFFECT_MODAL),
        v = (0, g.nh)({
            user: j,
            guildId: null == u ? void 0 : u.id,
        });
    return (
        i.useEffect(() => {
            y.default.track(P.rMx.OPEN_MODAL, {
                type: P.jXE.PROFILE_EFFECT_CUSTOMIZATION,
                location_stack: O,
            });
        }, [O]),
        (0, r.jsx)(c.Gt, {
            value: O,
            children: (0, r.jsx)(o.Y0X, {
                transitionState: t,
                className: E.modal,
                size: m ? o.CgR.DYNAMIC : o.CgR.MEDIUM,
                parentComponent: "ProfileEffectModal",
                "data-migration-pending": !0,
                children: m
                    ? (0, r.jsx)(o.$jN, {
                          className: E.spinner,
                          type: o.$jN.Type.SPINNING_CIRCLE,
                      })
                    : (0, r.jsx)(I, {
                          user: j,
                          guild: u,
                          categories: h,
                          purchases: b,
                          initialSelectedProfileEffect: a,
                          currentSavedEffect: v,
                          onClose: p,
                          analyticsLocations: O,
                          isTryItOut: d,
                      }),
            }),
        })
    );
}
