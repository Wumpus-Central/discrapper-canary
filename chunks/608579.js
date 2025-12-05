n.d(t, { ZP: () => k }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(921254),
    l = n(442837),
    c = n(570140),
    u = n(100527),
    d = n(906732),
    f = n(597688),
    p = n(197831),
    _ = n(317951),
    m = n(987209),
    h = n(563132),
    g = n(409813),
    E = n(107998),
    b = n(791785),
    y = n(961830),
    O = n(742956),
    v = n(346790),
    S = n(49308),
    I = n(117652),
    T = n(126982),
    A = n(981631),
    C = n(302800),
    N = n(215023),
    P = n(231338),
    R = n(206051);
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
function D(e) {
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
function x(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let j = (e) => {
        var t;
        let { onClose: n, onComplete: r, skuId: a, analyticsLocations: o } = e,
            { analyticsLocations: p } = (0, d.ZP)([...o, u.Z.COLLECTIBLES_PAYMENT_MODAL]),
            m = i.useRef(new s.qA()),
            [h, g] = i.useState(null),
            [E, b] = i.useState(!1),
            y = i.useMemo(
                () =>
                    (0, C.UY)({
                        purchaseType: N.o8.FIAT,
                        skuId: a,
                    }),
                [a],
            ),
            O = (0, l.Wu)([f.Z], () => f.Z.recommendedGiftSkuIds, []),
            v = null != a ? [a] : O,
            S = null != (t = v[0]) ? t : null,
            I = null != a && _.Rm.has(a),
            T = i.useCallback(() => {
                b(!0), null == r || r();
            }, [r]);
        return {
            analyticsLocations: p,
            environment: m,
            confettiCanvas: h,
            setConfettiCanvas: g,
            customConfettiVisible: E,
            customConfettiDisplayOptions: y,
            skuIDs: v,
            paymentModalSkuId: S,
            paymentModalOnClose: i.useCallback(
                (e) => {
                    b(!1),
                        n(e),
                        c.Z.dispatch({
                            type: "SKU_PURCHASE_MODAL_CLOSE",
                            error: null,
                        });
                },
                [n],
            ),
            paymentModalOnComplete: T,
            skipConfirm: I,
        };
    },
    M = (e) => {
        let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: i, customConfettiVisible: a } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(s.O_, {
                    ref: n,
                    className: R.confettiCanvas,
                    environment: t.current,
                }),
                (0, r.jsx)(p.i, {
                    options: i,
                    className: o()(R.customConfetti, { [R.hidden]: !a }),
                }),
            ],
        });
    };
function k(e) {
    let {
            onClose: t,
            onComplete: n,
            onStepChange: a,
            transitionState: o,
            loadId: s,
            skuId: l,
            isGift: c = !1,
            giftRecipient: u,
            giftMessage: f,
            giftingOrigin: p,
            analyticsLocations: _,
            returnRef: C,
        } = e,
        {
            analyticsLocations: N,
            environment: w,
            confettiCanvas: x,
            setConfettiCanvas: k,
            customConfettiVisible: U,
            customConfettiDisplayOptions: G,
            skuIDs: Z,
            paymentModalSkuId: B,
            paymentModalOnClose: F,
            paymentModalOnComplete: V,
            skipConfirm: H,
        } = j({
            onClose: t,
            onComplete: n,
            skuId: l,
            analyticsLocations: _,
        }),
        Y = (e, t, n) =>
            c
                ? (0, r.jsx)(O.Z, {
                      step: n,
                      onClose: () => t(!1),
                      giftingOrigin: p,
                  })
                : (0, r.jsx)(T.Z, {
                      step: n,
                      onClose: () => t(!1),
                  }),
        W = i.useMemo(
            () => [
                y.WA,
                ...(c ? [I.Dd] : []),
                v.n,
                ...y.yp,
                y.wo,
                {
                    key: g.h8.CONFIRM,
                    renderStep: (e) =>
                        (0, r.jsx)(
                            S.x,
                            L(D({}, e), {
                                confettiCanvas: x,
                                analyticsLocations: N,
                                hideConfetti: null != G,
                            }),
                        ),
                    options: {
                        bodyClassName: R.modalOverrideBody,
                        sliderBodyClassName: R.modalOverrideSliderBody,
                    },
                },
            ],
            [N, x, G, c],
        );
    return (0, r.jsxs)(d.Gt, {
        value: N,
        children: [
            (0, r.jsx)(M, {
                environment: w,
                setConfettiCanvas: k,
                customConfettiDisplayOptions: G,
                customConfettiVisible: U,
            }),
            (0, r.jsx)(h.PaymentContextProvider, {
                loadId: s,
                stepConfigs: W,
                applicationId: A.XAJ,
                skuIDs: Z,
                isGift: c,
                activeSubscription: null,
                purchaseType: P.GZ.ONE_TIME,
                excludeSubscriptionPlansBySKU: !0,
                children: (0, r.jsx)(E.c1, {
                    children: (0, r.jsx)(m.KB, {
                        isGift: c,
                        giftRecipient: u,
                        giftMessage: f,
                        giftingOrigin: p,
                        children: (0, r.jsx)(b.PaymentModal, {
                            skuId: B,
                            onClose: F,
                            onComplete: V,
                            applicationId: A.XAJ,
                            initialPlanId: null,
                            analyticsLocations: N,
                            renderHeader: Y,
                            onStepChange: a,
                            skipConfirm: H,
                            hideShadow: !0,
                            transitionState: o,
                            returnRef: C,
                        }),
                    }),
                }),
            }),
        ],
    });
}
