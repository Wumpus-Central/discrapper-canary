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
    f = n(223143),
    p = n(269982),
    m = n(767714),
    g = n(150039),
    b = n(594174),
    x = n(626135),
    h = n(74538),
    j = n(934261),
    y = n(52268),
    P = n(981631),
    v = n(474936),
    O = n(388032),
    E = n(930796);
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
            selectedProfileEffect: f,
        } = e,
        g = null != i ? (0, u.qS)(i) : (0, u.G1)(n);
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsxs)(o.mzw, {
            "data-migration-pending": !0,
            className: E.modalFooter,
            children: [
                (null != i && (d || !g)) || null === f
                    ? (0, r.jsx)(o.Button, {
                          variant: "primary",
                          text: O.intl.string(O.t.Jh8fJz),
                          onClick: l,
                          disabled: a,
                      })
                    : null == i && (d || !g)
                      ? (0, r.jsx)(o.Button, {
                            variant: "primary",
                            text: O.intl.string(O.t.fYfGgK),
                            onClick: () => c(null == f ? void 0 : f.skuId),
                        })
                      : (0, r.jsx)(m.Z, {
                            subscriptionTier: v.Si.TIER_2,
                            showGradient: !d,
                            textOptions: {
                                textOverride: h.ZP.isPremium(t)
                                    ? O.intl.string(O.t.KXLX7l)
                                    : d
                                      ? O.intl.string(O.t.mr4K7D)
                                      : O.intl.string(O.t.pj0XBN),
                            },
                        }),
                !d && g
                    ? (0, r.jsx)(p.Z, {
                          product: null != i ? i : n,
                          onClose: s,
                      })
                    : (0, r.jsx)(o.Button, {
                          variant: "secondary",
                          text: O.intl.string(O.t["ETE/oC"]),
                          onClick: s,
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
            onClose: b,
        } = e,
        { pendingProfileEffect: x } = (0, g.xZ)(null == n ? void 0 : n.id),
        [P, v] = i.useMemo(() => {
            let e = (0, u.bl)(l, c);
            return [e.purchased, e.shopPreviews];
        }, [l, c]),
        [I, S] = i.useState(() => (null != f ? f : void 0 !== x ? x : null == p ? null : null != p ? p : null)),
        w = i.useMemo(() => {
            var e;
            let t = P.find((e) => {
                let { skuId: t } = e;
                return t === (null == I ? void 0 : I.skuId);
            });
            return null !=
                (e =
                    null != t
                        ? t
                        : v.find((e) => {
                              let { skuId: t } = e;
                              return t === (null == I ? void 0 : I.skuId);
                          }))
                ? e
                : null;
        }, [I, P, v]),
        { product: _, purchase: A } = (0, d.Z)(null == w ? void 0 : w.skuId),
        Z = i.useRef(null),
        k = h.ZP.canUseCollectibles(t),
        N =
            void 0 === x
                ? (null == I ? void 0 : I.skuId) === (null == p ? void 0 : p.skuId)
                : (null == I ? void 0 : I.skuId) === (null == x ? void 0 : x.skuId),
        T = i.useCallback(
            (e) => {
                S(e);
            },
            [S],
        ),
        D = i.useCallback(
            (e) => {
                b(),
                    (0, a.mK)({
                        analyticsLocations: m,
                        analyticsSource: s.Z.EDIT_PROFILE_EFFECT_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [m, b],
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
                        children: O.intl.string(O.t["/6nv6N"]),
                    }),
                    (0, r.jsx)(o.olH, {
                        "data-migration-pending": !0,
                        className: E.modalCloseButton,
                        onClick: b,
                    }),
                ],
            }),
            (0, r.jsxs)(o.hzk, {
                "data-migration-pending": !0,
                className: E.modalContent,
                children: [
                    (0, r.jsx)(y.Z, {
                        user: t,
                        guild: n,
                        pendingProfileEffect: I,
                        selectedProfileEffectRef: Z,
                        onSelect: T,
                        onOpenShop: D,
                    }),
                    (0, r.jsx)(j.Z, {
                        user: t,
                        pendingProfileEffectRecord: w,
                        product: _,
                        purchase: A,
                        guild: n,
                    }),
                ],
            }),
            (0, r.jsx)(C, {
                user: t,
                onApply: () => {
                    (0, g.UK)(I, null == n ? void 0 : n.id), b();
                },
                onClose: b,
                onOpenShop: D,
                product: _,
                purchase: A,
                canUsePremiumCollectibles: k,
                selectedProfileEffect: I,
                disableApplyButton: N,
            }),
        ],
    });
}
function S(e) {
    let { transitionState: t, analyticsLocations: n, initialSelectedEffect: a, guild: u, onClose: d } = e,
        { isFetching: p, categories: m, purchases: h } = (0, f.ZP)(),
        j = (0, l.e7)([b.default], () => b.default.getCurrentUser()),
        { analyticsLocations: y } = (0, c.ZP)(n, s.Z.EDIT_PROFILE_EFFECT_MODAL),
        v = (0, g.nh)({
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
                className: E.modal,
                size: p ? o.CgR.DYNAMIC : o.CgR.MEDIUM,
                parentComponent: "ProfileEffectModal",
                "data-migration-pending": !0,
                children: p
                    ? (0, r.jsx)(o.$jN, {
                          className: E.spinner,
                          type: o.$jN.Type.SPINNING_CIRCLE,
                      })
                    : (0, r.jsx)(I, {
                          user: j,
                          guild: u,
                          categories: m,
                          purchases: h,
                          initialSelectedProfileEffect: a,
                          currentSavedEffect: v,
                          onClose: d,
                          analyticsLocations: y,
                      }),
            }),
        })
    );
}
