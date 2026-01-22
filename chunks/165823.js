n.d(t, {
    Ay: () => G,
    Kg: () => k,
    NW: () => D,
    Ub: () => L,
    kj: () => U,
    ot: () => M,
    v1: () => j,
    yC: () => x,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(106778),
    l = n(311907),
    c = n(73153),
    u = n(793574),
    d = n(688810),
    f = n(590180),
    p = n(213530),
    _ = n(937008),
    h = n(156312),
    m = n(166532),
    g = n(491057),
    E = n(546042),
    b = n(721252),
    y = n(231018),
    O = n(971456),
    A = n(975189),
    v = n(503516),
    S = n(685944),
    I = n(652215),
    T = n(158216),
    C = n(758836),
    N = n(818348),
    R = n(186319);
function w(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                w(e, t, n[t]);
            });
    }
    return e;
}
let D = (e) => {
        let { analyticsLocations: t } = e,
            { analyticsLocations: n } = (0, d.Ay)([...t, u.A.COLLECTIBLES_PAYMENT_MODAL]);
        return { analyticsLocations: n };
    },
    x = {
        bodyClassName: R.As,
        sliderBodyClassName: R.Bz,
    },
    L = (e) => {
        let { skuId: t } = e,
            n = i.useRef(new o.OH()),
            [r, a] = i.useState(null),
            [s, l] = i.useState(!1),
            c = i.useMemo(
                () =>
                    (0, T.AB)({
                        purchaseType: C.gs.FIAT,
                        skuId: t,
                    }),
                [t],
            );
        return {
            environment: n,
            confettiCanvas: r,
            setConfettiCanvas: a,
            customConfettiVisible: s,
            setCustomConfettiVisible: l,
            customConfettiDisplayOptions: c,
            hideConfirmStepConfetti: null != c,
        };
    },
    j = (e) => {
        let { skuId: t } = e,
            n = (0, l.yK)([f.A], () => f.A.recommendedGiftSkuIds, []);
        return null != t ? [t] : n;
    },
    M = (e) => {
        var t;
        let { skuIDs: n, onClose: r, onComplete: a, setCustomConfettiVisible: s } = e,
            o = null != (t = n[0]) ? t : null,
            l = i.useCallback(() => {
                s(!0), null == a || a();
            }, [a, s]);
        return {
            paymentModalSkuId: o,
            paymentModalOnClose: i.useCallback(
                (e) => {
                    s(!1),
                        r(e),
                        c.h.dispatch({
                            type: "SKU_PURCHASE_MODAL_CLOSE",
                            error: null,
                        });
                },
                [r, s],
            ),
            paymentModalOnComplete: l,
        };
    },
    k = (e) => {
        let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: i, customConfettiVisible: a } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.Fk, {
                    ref: n,
                    className: R.Lb,
                    environment: t.current,
                }),
                (0, r.jsx)(p.K, {
                    options: i,
                    className: s()(R.Oh, { [R.R]: !a }),
                }),
            ],
        });
    },
    U = (e) => {
        let { step: t, onClose: n, isGift: i, giftingOrigin: a } = e;
        return i
            ? (0, r.jsx)(y.A, {
                  step: t,
                  onClose: () => n(!1),
                  giftingOrigin: a,
              })
            : (0, r.jsx)(S.A, {
                  step: t,
                  onClose: () => n(!1),
              });
    };
function G(e) {
    let {
            onClose: t,
            onComplete: n,
            onStepChange: a,
            transitionState: s,
            loadId: o,
            skuId: l,
            isGift: c = !1,
            giftRecipient: u,
            giftMessage: f,
            giftingOrigin: p,
            analyticsLocations: y,
            returnRef: S,
        } = e,
        { analyticsLocations: T } = D({ analyticsLocations: y }),
        {
            confettiCanvas: C,
            environment: R,
            setConfettiCanvas: w,
            customConfettiVisible: G,
            setCustomConfettiVisible: V,
            customConfettiDisplayOptions: F,
            hideConfirmStepConfetti: B,
        } = L({ skuId: l }),
        H = j({ skuId: l }),
        {
            paymentModalSkuId: Y,
            paymentModalOnClose: W,
            paymentModalOnComplete: K,
        } = M({
            onClose: t,
            onComplete: n,
            skuIDs: H,
            setCustomConfettiVisible: V,
        }),
        z = (e, t, n) =>
            (0, r.jsx)(U, {
                isGift: c,
                step: n,
                onClose: t,
                giftingOrigin: p,
            }),
        q = i.useMemo(
            () => [
                b.kJ,
                ...(c ? [v.gA] : []),
                O.p,
                ...b.hh,
                b.r2,
                {
                    key: m.pn.CONFIRM,
                    renderStep: (e) =>
                        (0, r.jsx)(
                            A.v,
                            P(
                                {
                                    confettiCanvas: C,
                                    analyticsLocations: T,
                                    hideConfetti: B,
                                },
                                e,
                            ),
                        ),
                    options: x,
                },
            ],
            [T, C, B, c],
        );
    return (0, r.jsxs)(d.f5, {
        value: T,
        children: [
            (0, r.jsx)(k, {
                environment: R,
                setConfettiCanvas: w,
                customConfettiDisplayOptions: F,
                customConfettiVisible: G,
            }),
            (0, r.jsx)(h.PaymentContextProvider, {
                loadId: o,
                stepConfigs: q,
                applicationId: I.FYj,
                skuIDs: H,
                isGift: c,
                activeSubscription: null,
                purchaseType: N.VV.ONE_TIME,
                excludeSubscriptionPlansBySKU: !0,
                children: (0, r.jsx)(g.Qt, {
                    children: (0, r.jsx)(_.dX, {
                        isGift: c,
                        giftRecipient: u,
                        giftMessage: f,
                        giftingOrigin: p,
                        children: (0, r.jsx)(E.PaymentModal, {
                            skuId: Y,
                            onClose: W,
                            onComplete: K,
                            applicationId: I.FYj,
                            initialPlanId: null,
                            analyticsLocations: T,
                            renderHeader: z,
                            onStepChange: a,
                            hideShadow: !0,
                            transitionState: s,
                            returnRef: S,
                        }),
                    }),
                }),
            }),
        ],
    });
}
