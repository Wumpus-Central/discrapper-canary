n.d(t, { Z: () => M }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(48026),
    l = n(442837),
    c = n(570140),
    u = n(100527),
    d = n(906732),
    f = n(597688),
    _ = n(197831),
    p = n(317951),
    h = n(987209),
    m = n(563132),
    g = n(409813),
    E = n(107998),
    b = n(791785),
    y = n(961830),
    v = n(742956),
    O = n(346790),
    I = n(49308),
    S = n(117652),
    T = n(126982),
    N = n(981631),
    A = n(302800),
    C = n(215023),
    R = n(231338),
    P = n(770977);
function w(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                w(e, t, n[t]);
            });
    }
    return e;
}
function L(e, t) {
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
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : L(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function M(e) {
    var t;
    let { onClose: n, onComplete: o, onStepChange: w, transitionState: L, loadId: M, skuId: k, isGift: j = !1, giftRecipient: U, giftMessage: G, giftingOrigin: B, analyticsLocations: F, returnRef: V } = e,
        { analyticsLocations: Z } = (0, d.ZP)([...F, u.Z.COLLECTIBLES_PAYMENT_MODAL]),
        H = i.useRef(new s.qA()),
        [W, Y] = i.useState(null),
        [K, z] = i.useState(!1),
        q = i.useMemo(
            () =>
                (0, A.UY)({
                    purchaseType: C.o8.FIAT,
                    skuId: k
                }),
            [k]
        ),
        Q = (0, l.Wu)([f.Z], () => f.Z.recommendedGiftSkuIds, []),
        X = null != k ? [k] : Q,
        J = null != (t = X[0]) ? t : null,
        $ = null != k && p.Rm.has(k),
        ee = i.useCallback(() => {
            z(!0), null == o || o();
        }, [o]),
        et = i.useCallback(
            (e) => {
                z(!1),
                    n(e),
                    c.Z.dispatch({
                        type: 'SKU_PURCHASE_MODAL_CLOSE',
                        error: null
                    });
            },
            [n]
        ),
        en = (e, t, n) =>
            j
                ? (0, r.jsx)(v.Z, {
                      step: n,
                      onClose: () => t(!1),
                      giftingOrigin: B
                  })
                : (0, r.jsx)(T.Z, {
                      step: n,
                      onClose: () => t(!1)
                  }),
        er = i.useMemo(
            () => [
                y.WA,
                ...(j ? [S.Dd] : []),
                O.n,
                ...y.yp,
                y.wo,
                {
                    key: g.h8.CONFIRM,
                    renderStep: (e) =>
                        (0, r.jsx)(
                            I.x,
                            x(D({}, e), {
                                confettiCanvas: W,
                                analyticsLocations: Z,
                                hideConfetti: null != q
                            })
                        ),
                    options: {
                        bodyClassName: P.modalOverrideBody,
                        sliderBodyClassName: P.modalOverrideSliderBody
                    }
                }
            ],
            [Z, W, q, j]
        );
    return (0, r.jsxs)(d.Gt, {
        value: Z,
        children: [
            (0, r.jsx)(s.O_, {
                ref: Y,
                className: P.confettiCanvas,
                environment: H.current
            }),
            (0, r.jsx)(_.i, {
                options: q,
                className: a()(P.customConfetti, { [P.hidden]: !K })
            }),
            (0, r.jsx)(m.PaymentContextProvider, {
                loadId: M,
                stepConfigs: er,
                applicationId: N.XAJ,
                skuIDs: X,
                isGift: j,
                activeSubscription: null,
                purchaseType: R.GZ.ONE_TIME,
                children: (0, r.jsx)(E.c1, {
                    children: (0, r.jsx)(h.KB, {
                        isGift: j,
                        giftRecipient: U,
                        giftMessage: G,
                        giftingOrigin: B,
                        children: (0, r.jsx)(b.PaymentModal, {
                            onClose: et,
                            onComplete: ee,
                            applicationId: N.XAJ,
                            skuId: J,
                            initialPlanId: null,
                            analyticsLocations: Z,
                            transitionState: L,
                            renderHeader: en,
                            returnRef: V,
                            onStepChange: w,
                            skipConfirm: $,
                            hideShadow: !0
                        })
                    })
                })
            })
        ]
    });
}
