n.d(t, { Z: () => j }), n(388685);
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
function j(e) {
    var t;
    let {
            onClose: n,
            onComplete: a,
            onStepChange: w,
            transitionState: x,
            loadId: j,
            skuId: M,
            isGift: k = !1,
            giftRecipient: U,
            giftMessage: G,
            giftingOrigin: Z,
            analyticsLocations: B,
            returnRef: F,
        } = e,
        { analyticsLocations: V } = (0, d.ZP)([...B, u.Z.COLLECTIBLES_PAYMENT_MODAL]),
        H = i.useRef(new s.qA()),
        [Y, W] = i.useState(null),
        [K, z] = i.useState(!1),
        q = i.useMemo(
            () =>
                (0, C.UY)({
                    purchaseType: N.o8.FIAT,
                    skuId: M,
                }),
            [M],
        ),
        X = (0, l.Wu)([f.Z], () => f.Z.recommendedGiftSkuIds, []),
        Q = null != M ? [M] : X,
        J = null != (t = Q[0]) ? t : null,
        $ = null != M && _.Rm.has(M),
        ee = i.useCallback(() => {
            z(!0), null == a || a();
        }, [a]),
        et = i.useCallback(
            (e) => {
                z(!1),
                    n(e),
                    c.Z.dispatch({
                        type: "SKU_PURCHASE_MODAL_CLOSE",
                        error: null,
                    });
            },
            [n],
        ),
        en = (e, t, n) =>
            k
                ? (0, r.jsx)(O.Z, {
                      step: n,
                      onClose: () => t(!1),
                      giftingOrigin: Z,
                  })
                : (0, r.jsx)(T.Z, {
                      step: n,
                      onClose: () => t(!1),
                  }),
        er = i.useMemo(
            () => [
                y.WA,
                ...(k ? [I.Dd] : []),
                v.n,
                ...y.yp,
                y.wo,
                {
                    key: g.h8.CONFIRM,
                    renderStep: (e) =>
                        (0, r.jsx)(
                            S.x,
                            L(D({}, e), {
                                confettiCanvas: Y,
                                analyticsLocations: V,
                                hideConfetti: null != q,
                            }),
                        ),
                    options: {
                        bodyClassName: R.modalOverrideBody,
                        sliderBodyClassName: R.modalOverrideSliderBody,
                    },
                },
            ],
            [V, Y, q, k],
        );
    return (0, r.jsxs)(d.Gt, {
        value: V,
        children: [
            (0, r.jsx)(s.O_, {
                ref: W,
                className: R.confettiCanvas,
                environment: H.current,
            }),
            (0, r.jsx)(p.i, {
                options: q,
                className: o()(R.customConfetti, { [R.hidden]: !K }),
            }),
            (0, r.jsx)(h.PaymentContextProvider, {
                loadId: j,
                stepConfigs: er,
                applicationId: A.XAJ,
                skuIDs: Q,
                isGift: k,
                activeSubscription: null,
                purchaseType: P.GZ.ONE_TIME,
                excludeSubscriptionPlansBySKU: !0,
                children: (0, r.jsx)(E.c1, {
                    children: (0, r.jsx)(m.KB, {
                        isGift: k,
                        giftRecipient: U,
                        giftMessage: G,
                        giftingOrigin: Z,
                        children: (0, r.jsx)(b.PaymentModal, {
                            onClose: et,
                            onComplete: ee,
                            applicationId: A.XAJ,
                            skuId: J,
                            initialPlanId: null,
                            analyticsLocations: V,
                            transitionState: x,
                            renderHeader: en,
                            returnRef: F,
                            onStepChange: w,
                            skipConfirm: $,
                            hideShadow: !0,
                        }),
                    }),
                }),
            }),
        ],
    });
}
