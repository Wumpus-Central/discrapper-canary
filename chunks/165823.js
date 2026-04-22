n.d(t, { Kg: () => g, NW: () => E, Ub: () => h, ot: () => _, v1: () => f, yC: () => A });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(106778),
    o = n(73153),
    u = n(793574),
    d = n(688810),
    c = n(213530),
    C = n(158216),
    p = n(758836),
    m = n(483764);
let E = (e) => {
        let { analyticsLocations: t } = e,
            { analyticsLocations: n } = (0, d.Ay)([...t, u.A.COLLECTIBLES_PAYMENT_MODAL]);
        return { analyticsLocations: n };
    },
    A = { sliderBodyClassName: m.Bz },
    h = (e) => {
        let { skuId: t } = e,
            n = r.useRef(new a.OH()),
            [l, i] = r.useState(null),
            [s, o] = r.useState(!1),
            u = r.useMemo(() => (0, C.AB)({ purchaseType: p.gs.FIAT, skuId: t }), [t]);
        return {
            environment: n,
            confettiCanvas: l,
            setConfettiCanvas: i,
            customConfettiVisible: s,
            setCustomConfettiVisible: o,
            customConfettiDisplayOptions: u,
            hideConfirmStepConfetti: null != u,
        };
    },
    f = (e) => {
        let { skuId: t } = e;
        return null != t ? [t] : [];
    },
    _ = (e) => {
        let { skuIDs: t, onClose: n, onComplete: l, setCustomConfettiVisible: i } = e,
            s = t[0] ?? null,
            a = r.useCallback(() => {
                i(!0), l?.();
            }, [l, i]);
        return {
            paymentModalSkuId: s,
            paymentModalOnClose: r.useCallback(
                (e) => {
                    i(!1), n(e), o.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
                },
                [n, i],
            ),
            paymentModalOnComplete: a,
        };
    },
    g = (e) => {
        let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: r, customConfettiVisible: i } = e;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(a.Fk, { ref: n, className: m.Lb, environment: t.current }),
                (0, l.jsx)(c.K, { options: r, className: s()(m.Oh, { [m.R]: !i }) }),
            ],
        });
    };
