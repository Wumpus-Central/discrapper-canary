"use strict";
r.d(t, { default: () => L });
var i = r(627968),
    n = r(64700),
    s = r(311907),
    a = r(821609),
    l = r(935462),
    c = r(534514),
    o = r(289873),
    d = r(793574),
    u = r(688810),
    p = r(571827),
    _ = r(725807),
    f = r(919395),
    h = r(84540),
    m = r(287809),
    g = r(954571),
    A = r(927578),
    b = r(979286),
    v = r(993408),
    x = r(821701),
    I = r(841702),
    E = r(618644),
    C = r(788426),
    y = r(652215),
    T = r(788868),
    w = r(985018),
    N = r(289138);
function j(e) {
    let {
            user: t,
            product: r,
            purchase: n,
            onApply: s,
            onClose: c,
            onOpenShop: o,
            disableApplyButton: d,
            canUsePremiumCollectibles: u,
            selectedProfileEffect: f,
        } = e,
        h = null != n ? (0, v.gA)(n) : (0, v.G0)(r);
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)(l.jl, {
            "data-migration-pending": !0,
            className: N.Hx,
            children: [
                (null != n && (u || !h)) || null === f
                    ? (0, i.jsx)(a.$, { variant: "primary", text: w.intl.string(w.t.Jh8fJz), onClick: s, disabled: d })
                    : null == n && (u || !h)
                      ? (0, i.jsx)(a.$, {
                            variant: "primary",
                            text: w.intl.string(w.t.fYfGgK),
                            onClick: () => o(f?.skuId),
                        })
                      : (0, i.jsx)(_.A, {
                            subscriptionTier: T.pe.TIER_2,
                            showGradient: !u,
                            textOptions: {
                                textOverride: A.Ay.isPremium(t)
                                    ? w.intl.string(w.t.KXLX7l)
                                    : u
                                      ? w.intl.string(w.t.mr4K7D)
                                      : w.intl.string(w.t.pj0XBN),
                            },
                        }),
                !u && h
                    ? (0, i.jsx)(p.A, { itemType: n?.type ?? r?.type, onClose: c })
                    : (0, i.jsx)(a.$, { variant: "secondary", text: w.intl.string(w.t["ETE/oC"]), onClick: c }),
            ],
        }),
    });
}
function S(e) {
    let {
            user: t,
            guild: r,
            categories: s,
            purchases: a,
            initialSelectedProfileEffect: o,
            currentSavedEffect: u,
            analyticsLocations: p,
            onClose: _,
        } = e,
        { pendingProfileEffect: m } = (0, f.nZ)(r?.id),
        [g, I] = n.useMemo(() => {
            let e = (0, v.sz)(s, a);
            return [e.purchased, e.shopPreviews];
        }, [s, a]),
        [y, T] = n.useState(() => (null != o ? o : void 0 !== m ? m : null == u ? null : (u ?? null))),
        S = n.useMemo(
            () =>
                g.find((e) => {
                    let { skuId: t } = e;
                    return t === y?.skuId;
                }) ??
                I.find((e) => {
                    let { skuId: t } = e;
                    return t === y?.skuId;
                }) ??
                null,
            [y, g, I],
        ),
        { product: L, purchase: R } = (0, x.A)(S?.skuId),
        O = n.useRef(null),
        P = A.Ay.canUseCollectibles(t),
        M = void 0 === m ? y?.skuId === u?.skuId : y?.skuId === m?.skuId,
        k = n.useCallback(
            (e) => {
                T(e);
            },
            [T],
        ),
        D = n.useCallback(
            (e) => {
                _(),
                    (0, b.Cz)({
                        analyticsLocations: p,
                        analyticsSource: d.A.EDIT_PROFILE_EFFECT_MODAL,
                        initialProductSkuId: e,
                    });
            },
            [p, _],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(l.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: N.Hc,
                children: [
                    (0, i.jsx)(c.D, { variant: "heading-lg/semibold", children: w.intl.string(w.t["/6nv6N"]) }),
                    (0, i.jsx)(l.s_, { "data-migration-pending": !0, className: N.iT, onClick: _ }),
                ],
            }),
            (0, i.jsxs)(l.$m, {
                "data-migration-pending": !0,
                className: N.jE,
                children: [
                    (0, i.jsx)(C.A, {
                        user: t,
                        guild: r,
                        pendingProfileEffect: y,
                        selectedProfileEffectRef: O,
                        onSelect: k,
                        onOpenShop: D,
                    }),
                    (0, i.jsx)(E.A, { user: t, pendingProfileEffectRecord: S, product: L, purchase: R, guild: r }),
                ],
            }),
            (0, i.jsx)(j, {
                user: t,
                onApply: () => {
                    (0, h.p)({ guildId: r?.id, profileEffect: y ?? null }), _();
                },
                onClose: _,
                onOpenShop: D,
                product: L,
                purchase: R,
                canUsePremiumCollectibles: P,
                selectedProfileEffect: y,
                disableApplyButton: M,
            }),
        ],
    });
}
function L(e) {
    let { transitionState: t, analyticsLocations: r, initialSelectedEffect: a, guild: c, onClose: p } = e,
        { isFetching: _, categories: h, purchases: A } = (0, I.Ay)(),
        b = (0, s.bG)([m.default], () => m.default.getCurrentUser()),
        { analyticsLocations: v } = (0, u.Ay)(r, d.A.EDIT_PROFILE_EFFECT_MODAL),
        x = (0, f.N2)({ user: b, guildId: c?.id });
    return (
        n.useEffect(() => {
            g.default.track(y.HAw.OPEN_MODAL, { type: y.JJy.PROFILE_EFFECT_CUSTOMIZATION, location_stack: v });
        }, [v]),
        (0, i.jsx)(u.f5, {
            value: v,
            children: (0, i.jsx)(l.EO, {
                transitionState: t,
                className: N.yl,
                size: _ ? l.rI.DYNAMIC : l.rI.MEDIUM,
                parentComponent: "ProfileEffectModal",
                "data-migration-pending": !0,
                children: _
                    ? (0, i.jsx)(o.y, { className: N.u1, type: o.y.Type.SPINNING_CIRCLE })
                    : (0, i.jsx)(S, {
                          user: b,
                          guild: c,
                          categories: h,
                          purchases: A,
                          initialSelectedProfileEffect: a,
                          currentSavedEffect: x,
                          onClose: p,
                          analyticsLocations: v,
                      }),
            }),
        })
    );
}
