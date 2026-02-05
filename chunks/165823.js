"use strict";
n.d(t, { Ay: () => U, Kg: () => M, NW: () => D, Ub: () => w, kj: () => k, ot: () => P, v1: () => x, yC: () => L });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(106778),
    l = n(311907),
    u = n(73153),
    c = n(793574),
    d = n(688810),
    _ = n(590180),
    f = n(213530),
    p = n(937008),
    h = n(156312),
    m = n(166532),
    g = n(491057),
    E = n(546042),
    A = n(721252),
    I = n(231018),
    T = n(971456),
    y = n(975189),
    S = n(503516),
    v = n(685944),
    C = n(652215),
    b = n(158216),
    N = n(758836),
    R = n(818348),
    O = n(186319);
let D = (e) => {
        let { analyticsLocations: t } = e,
            { analyticsLocations: n } = (0, d.Ay)([...t, c.A.COLLECTIBLES_PAYMENT_MODAL]);
        return { analyticsLocations: n };
    },
    L = { bodyClassName: O.As, sliderBodyClassName: O.Bz },
    w = (e) => {
        let { skuId: t } = e,
            n = i.useRef(new o.OH()),
            [r, a] = i.useState(null),
            [s, l] = i.useState(!1),
            u = i.useMemo(() => (0, b.AB)({ purchaseType: N.gs.FIAT, skuId: t }), [t]);
        return {
            environment: n,
            confettiCanvas: r,
            setConfettiCanvas: a,
            customConfettiVisible: s,
            setCustomConfettiVisible: l,
            customConfettiDisplayOptions: u,
            hideConfirmStepConfetti: null != u,
        };
    },
    x = (e) => {
        let { skuId: t } = e,
            n = (0, l.yK)([_.A], () => _.A.recommendedGiftSkuIds, []);
        return null != t ? [t] : n;
    },
    P = (e) => {
        let { skuIDs: t, onClose: n, onComplete: r, setCustomConfettiVisible: a } = e,
            s = t[0] ?? null,
            o = i.useCallback(() => {
                a(!0), r?.();
            }, [r, a]);
        return {
            paymentModalSkuId: s,
            paymentModalOnClose: i.useCallback(
                (e) => {
                    a(!1), n(e), u.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
                },
                [n, a],
            ),
            paymentModalOnComplete: o,
        };
    },
    M = (e) => {
        let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: i, customConfettiVisible: a } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.Fk, { ref: n, className: O.Lb, environment: t.current }),
                (0, r.jsx)(f.K, { options: i, className: s()(O.Oh, { [O.R]: !a }) }),
            ],
        });
    },
    k = (e) => {
        let { step: t, onClose: n, isGift: i, giftingOrigin: a } = e;
        return i
            ? (0, r.jsx)(I.A, { step: t, onClose: () => n(!1), giftingOrigin: a })
            : (0, r.jsx)(v.A, { step: t, onClose: () => n(!1) });
    };
function U(e) {
    let {
            onClose: t,
            onComplete: n,
            onStepChange: a,
            transitionState: s,
            loadId: o,
            skuId: l,
            isGift: u = !1,
            giftRecipient: c,
            giftMessage: _,
            giftingOrigin: f,
            analyticsLocations: I,
            returnRef: v,
        } = e,
        { analyticsLocations: b } = D({ analyticsLocations: I }),
        {
            confettiCanvas: N,
            environment: O,
            setConfettiCanvas: U,
            customConfettiVisible: G,
            setCustomConfettiVisible: V,
            customConfettiDisplayOptions: F,
            hideConfirmStepConfetti: B,
        } = w({ skuId: l }),
        j = x({ skuId: l }),
        {
            paymentModalSkuId: H,
            paymentModalOnClose: Y,
            paymentModalOnComplete: W,
        } = P({ onClose: t, onComplete: n, skuIDs: j, setCustomConfettiVisible: V }),
        K = (e, t, n) => (0, r.jsx)(k, { isGift: u, step: n, onClose: t, giftingOrigin: f }),
        z = i.useMemo(
            () => [
                A.kJ,
                ...(u ? [S.gA] : []),
                T.p,
                ...A.hh,
                A.r2,
                {
                    key: m.pn.CONFIRM,
                    renderStep: (e) =>
                        (0, r.jsx)(y.v, { confettiCanvas: N, analyticsLocations: b, hideConfetti: B, ...e }),
                    options: L,
                },
            ],
            [b, N, B, u],
        );
    return (0, r.jsxs)(d.f5, {
        value: b,
        children: [
            (0, r.jsx)(M, {
                environment: O,
                setConfettiCanvas: U,
                customConfettiDisplayOptions: F,
                customConfettiVisible: G,
            }),
            (0, r.jsx)(h.PaymentContextProvider, {
                loadId: o,
                stepConfigs: z,
                applicationId: C.FYj,
                skuIDs: j,
                isGift: u,
                activeSubscription: null,
                purchaseType: R.VV.ONE_TIME,
                excludeSubscriptionPlansBySKU: !0,
                children: (0, r.jsx)(g.Qt, {
                    children: (0, r.jsx)(p.dX, {
                        isGift: u,
                        giftRecipient: c,
                        giftMessage: _,
                        giftingOrigin: f,
                        children: (0, r.jsx)(E.PaymentModal, {
                            skuId: H,
                            onClose: Y,
                            onComplete: W,
                            applicationId: C.FYj,
                            initialPlanId: null,
                            analyticsLocations: b,
                            renderHeader: K,
                            onStepChange: a,
                            hideShadow: !0,
                            transitionState: s,
                            returnRef: v,
                        }),
                    }),
                }),
            }),
        ],
    });
}
