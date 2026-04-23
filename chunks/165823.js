"use strict";
n.d(t, { Kg: () => I, NW: () => h, Ub: () => m, ot: () => A, v1: () => g, yC: () => E });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(106778),
    l = n(73153),
    u = n(793574),
    c = n(688810),
    d = n(213530),
    _ = n(158216),
    f = n(758836),
    p = n(483764);
let h = (e) => {
        let { analyticsLocations: t } = e,
            { analyticsLocations: n } = (0, c.Ay)([...t, u.A.COLLECTIBLES_PAYMENT_MODAL]);
        return { analyticsLocations: n };
    },
    E = { sliderBodyClassName: p.Bz },
    m = (e) => {
        let { skuId: t } = e,
            n = i.useRef(new o.OH()),
            [r, s] = i.useState(null),
            [a, l] = i.useState(!1),
            u = i.useMemo(() => (0, _.AB)({ purchaseType: f.gs.FIAT, skuId: t }), [t]);
        return {
            environment: n,
            confettiCanvas: r,
            setConfettiCanvas: s,
            customConfettiVisible: a,
            setCustomConfettiVisible: l,
            customConfettiDisplayOptions: u,
            hideConfirmStepConfetti: null != u,
        };
    },
    g = (e) => {
        let { skuId: t } = e;
        return null != t ? [t] : [];
    },
    A = (e) => {
        let { skuIDs: t, onClose: n, onComplete: r, setCustomConfettiVisible: s } = e,
            a = t[0] ?? null,
            o = i.useCallback(() => {
                s(!0), r?.();
            }, [r, s]);
        return {
            paymentModalSkuId: a,
            paymentModalOnClose: i.useCallback(
                (e) => {
                    s(!1), n(e), l.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
                },
                [n, s],
            ),
            paymentModalOnComplete: o,
        };
    },
    I = (e) => {
        let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: i, customConfettiVisible: s } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.Fk, { ref: n, className: p.Lb, environment: t.current }),
                (0, r.jsx)(d.K, { options: i, className: a()(p.Oh, { [p.R]: !s }) }),
            ],
        });
    };
