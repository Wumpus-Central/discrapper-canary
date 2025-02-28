n.d(t, { Z: () => L }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(119617),
    l = n(442837),
    c = n(570140),
    u = n(100527),
    d = n(906732),
    f = n(597688),
    _ = n(317951),
    p = n(987209),
    h = n(563132),
    g = n(409813),
    m = n(107998),
    E = n(791785),
    v = n(961830),
    b = n(742956),
    y = n(346790),
    O = n(49308),
    S = n(117652),
    I = n(126982),
    T = n(981631),
    N = n(302800),
    A = n(231338),
    C = n(509827);
function R(e, t, n) {
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
function P(e) {
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
                R(e, t, n[t]);
            });
    }
    return e;
}
function D(e, t) {
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
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : D(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function L(e) {
    var t;
    let { onClose: n, onComplete: o, onStepChange: R, transitionState: D, loadId: L, skuId: x, isGift: M = !1, giftRecipient: k, giftMessage: j, giftingOrigin: U, analyticsLocations: G, returnRef: B } = e,
        { analyticsLocations: V } = (0, d.ZP)([...G, u.Z.COLLECTIBLES_PAYMENT_MODAL]),
        F = i.useRef(new s.qA()),
        [Z, H] = i.useState(null),
        [W, Y] = i.useState(!1),
        K = i.useMemo(() => (0, N.UY)(x), [x]),
        z = (0, l.Wu)([f.Z], () => f.Z.recommendedGiftSkuIds, []),
        q = null != x ? [x] : z,
        Q = null !== (t = q[0]) && void 0 !== t ? t : null,
        X = null != x && _.Rm.has(x),
        J = i.useCallback(() => {
            Y(!0), null == o || o();
        }, [o]),
        $ = i.useCallback(
            (e) => {
                Y(!1),
                    n(e),
                    c.Z.dispatch({
                        type: 'SKU_PURCHASE_MODAL_CLOSE',
                        error: null
                    });
            },
            [n]
        ),
        ee = (e, t, n) =>
            M
                ? (0, r.jsx)(b.Z, {
                      step: n,
                      onClose: () => t(!1),
                      giftingOrigin: U
                  })
                : (0, r.jsx)(I.Z, {
                      step: n,
                      onClose: () => t(!1)
                  }),
        et = i.useMemo(
            () => [
                v.WA,
                ...(M ? [S.Dd] : []),
                y.n,
                ...v.yp,
                v.wo,
                {
                    key: g.h8.CONFIRM,
                    renderStep: (e) =>
                        (0, r.jsx)(
                            O.x,
                            w(P({}, e), {
                                confettiCanvas: Z,
                                analyticsLocations: V,
                                hideConfetti: null != K
                            })
                        ),
                    options: {
                        bodyClassName: C.modalOverrideBody,
                        sliderBodyClassName: C.modalOverrideSliderBody
                    }
                }
            ],
            [V, Z, K, M]
        );
    return (0, r.jsxs)(d.Gt, {
        value: V,
        children: [
            (0, r.jsx)(s.O_, {
                ref: H,
                className: C.confettiCanvas,
                environment: F.current
            }),
            null != K &&
                (0, r.jsx)('img', {
                    src: K.imageSrc,
                    className: a()(C.customConfetti, { [C.hidden]: !W }),
                    style: K.style,
                    alt: '',
                    'aria-hidden': !0
                }),
            (0, r.jsx)(h.PaymentContextProvider, {
                loadId: L,
                stepConfigs: et,
                applicationId: T.XAJ,
                skuIDs: q,
                isGift: M,
                activeSubscription: null,
                purchaseType: A.GZ.ONE_TIME,
                children: (0, r.jsx)(m.c1, {
                    children: (0, r.jsx)(p.KB, {
                        isGift: M,
                        giftRecipient: k,
                        giftMessage: j,
                        giftingOrigin: U,
                        children: (0, r.jsx)(E.PaymentModal, {
                            onClose: $,
                            onComplete: J,
                            applicationId: T.XAJ,
                            skuId: Q,
                            initialPlanId: null,
                            analyticsLocations: V,
                            transitionState: D,
                            renderHeader: ee,
                            returnRef: B,
                            onStepChange: R,
                            skipConfirm: X,
                            hideShadow: !0
                        })
                    })
                })
            })
        ]
    });
}
