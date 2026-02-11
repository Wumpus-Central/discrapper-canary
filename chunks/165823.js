"use strict";
n.d(t, { Kg: () => S, NW: () => E, Ub: () => I, kj: () => v, ot: () => y, v1: () => T, yC: () => A });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(106778),
    l = n(73153),
    u = n(793574),
    c = n(688810),
    d = n(213530),
    _ = n(231018),
    f = n(685944),
    h = n(158216),
    p = n(758836),
    g = n(186319);
let E = (e) => {
        let { analyticsLocations: t } = e,
            { analyticsLocations: n } = (0, c.Ay)([...t, u.A.COLLECTIBLES_PAYMENT_MODAL]);
        return { analyticsLocations: n };
    },
    A = { bodyClassName: g.As, sliderBodyClassName: g.Bz },
    I = (e) => {
        let { skuId: t } = e,
            n = i.useRef(new o.OH()),
            [r, a] = i.useState(null),
            [s, l] = i.useState(!1),
            u = i.useMemo(() => (0, h.AB)({ purchaseType: p.gs.FIAT, skuId: t }), [t]);
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
    T = (e) => {
        let { skuId: t } = e;
        return null != t ? [t] : [];
    },
    y = (e) => {
        let { skuIDs: t, onClose: n, onComplete: r, setCustomConfettiVisible: a } = e,
            s = t[0] ?? null,
            o = i.useCallback(() => {
                a(!0), r?.();
            }, [r, a]);
        return {
            paymentModalSkuId: s,
            paymentModalOnClose: i.useCallback(
                (e) => {
                    a(!1), n(e), l.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
                },
                [n, a],
            ),
            paymentModalOnComplete: o,
        };
    },
    S = (e) => {
        let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: i, customConfettiVisible: a } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.Fk, { ref: n, className: g.Lb, environment: t.current }),
                (0, r.jsx)(d.K, { options: i, className: s()(g.Oh, { [g.R]: !a }) }),
            ],
        });
    },
    v = (e) => {
        let { step: t, onClose: n, isGift: i } = e;
        return i
            ? (0, r.jsx)(_.A, { step: t, onClose: () => n(!1) })
            : (0, r.jsx)(f.A, { step: t, onClose: () => n(!1) });
    };
