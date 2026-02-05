"use strict";
n.d(t, { Kg: () => v, NW: () => A, Ub: () => T, kj: () => C, ot: () => S, v1: () => y, yC: () => I });
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
    p = n(231018),
    h = n(685944),
    m = n(158216),
    g = n(758836),
    E = n(186319);
let A = (e) => {
        let { analyticsLocations: t } = e,
            { analyticsLocations: n } = (0, d.Ay)([...t, c.A.COLLECTIBLES_PAYMENT_MODAL]);
        return { analyticsLocations: n };
    },
    I = { bodyClassName: E.As, sliderBodyClassName: E.Bz },
    T = (e) => {
        let { skuId: t } = e,
            n = i.useRef(new o.OH()),
            [r, a] = i.useState(null),
            [s, l] = i.useState(!1),
            u = i.useMemo(() => (0, m.AB)({ purchaseType: g.gs.FIAT, skuId: t }), [t]);
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
    y = (e) => {
        let { skuId: t } = e,
            n = (0, l.yK)([_.A], () => _.A.recommendedGiftSkuIds, []);
        return null != t ? [t] : n;
    },
    S = (e) => {
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
    v = (e) => {
        let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: i, customConfettiVisible: a } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.Fk, { ref: n, className: E.Lb, environment: t.current }),
                (0, r.jsx)(f.K, { options: i, className: s()(E.Oh, { [E.R]: !a }) }),
            ],
        });
    },
    C = (e) => {
        let { step: t, onClose: n, isGift: i, giftingOrigin: a } = e;
        return i
            ? (0, r.jsx)(p.A, { step: t, onClose: () => n(!1), giftingOrigin: a })
            : (0, r.jsx)(h.A, { step: t, onClose: () => n(!1) });
    };
