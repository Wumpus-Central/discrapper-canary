n.d(t, {
    $g: () => M,
    Af: () => j,
    Jb: () => D,
    Kf: () => x,
    ZP: () => G,
    dc: () => L,
    sy: () => k,
    tw: () => U,
}),
    n(388685);
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
    _ = n(987209),
    m = n(563132),
    h = n(409813),
    g = n(107998),
    E = n(791785),
    b = n(961830),
    y = n(742956),
    O = n(346790),
    v = n(49308),
    S = n(117652),
    I = n(126982),
    T = n(981631),
    C = n(302800),
    A = n(215023),
    N = n(231338),
    P = n(867219);
function R(e, t, n) {
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
function w(e) {
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
                R(e, t, n[t]);
            });
    }
    return e;
}
let D = (e) => {
        let { analyticsLocations: t } = e,
            { analyticsLocations: n } = (0, d.ZP)([...t, u.Z.COLLECTIBLES_PAYMENT_MODAL]);
        return { analyticsLocations: n };
    },
    x = {
        bodyClassName: P.modalOverrideBody,
        sliderBodyClassName: P.modalOverrideSliderBody,
    },
    L = (e) => {
        let { skuId: t } = e,
            n = i.useRef(new s.qA()),
            [r, a] = i.useState(null),
            [o, l] = i.useState(!1),
            c = i.useMemo(
                () =>
                    (0, C.UY)({
                        purchaseType: A.o8.FIAT,
                        skuId: t,
                    }),
                [t],
            );
        return {
            environment: n,
            confettiCanvas: r,
            setConfettiCanvas: a,
            customConfettiVisible: o,
            setCustomConfettiVisible: l,
            customConfettiDisplayOptions: c,
            hideConfirmStepConfetti: null != c,
        };
    },
    j = (e) => {
        let { skuId: t } = e,
            n = (0, l.Wu)([f.Z], () => f.Z.recommendedGiftSkuIds, []);
        return null != t ? [t] : n;
    },
    M = (e) => {
        var t;
        let { skuIDs: n, onClose: r, onComplete: a, setCustomConfettiVisible: o } = e,
            s = null != (t = n[0]) ? t : null,
            l = i.useCallback(() => {
                o(!0), null == a || a();
            }, [a, o]);
        return {
            paymentModalSkuId: s,
            paymentModalOnClose: i.useCallback(
                (e) => {
                    o(!1),
                        r(e),
                        c.Z.dispatch({
                            type: "SKU_PURCHASE_MODAL_CLOSE",
                            error: null,
                        });
                },
                [r, o],
            ),
            paymentModalOnComplete: l,
        };
    },
    k = (e) => {
        let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: i, customConfettiVisible: a } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(s.O_, {
                    ref: n,
                    className: P.confettiCanvas,
                    environment: t.current,
                }),
                (0, r.jsx)(p.i, {
                    options: i,
                    className: o()(P.customConfetti, { [P.hidden]: !a }),
                }),
            ],
        });
    },
    U = (e) => {
        let { step: t, onClose: n, isGift: i, giftingOrigin: a } = e;
        return i
            ? (0, r.jsx)(y.Z, {
                  step: t,
                  onClose: () => n(!1),
                  giftingOrigin: a,
              })
            : (0, r.jsx)(I.Z, {
                  step: t,
                  onClose: () => n(!1),
              });
    };
function G(e) {
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
            analyticsLocations: y,
            returnRef: I,
        } = e,
        { analyticsLocations: C } = D({ analyticsLocations: y }),
        {
            confettiCanvas: A,
            environment: P,
            setConfettiCanvas: R,
            customConfettiVisible: G,
            setCustomConfettiVisible: Z,
            customConfettiDisplayOptions: F,
            hideConfirmStepConfetti: B,
        } = L({ skuId: l }),
        V = j({ skuId: l }),
        {
            paymentModalSkuId: H,
            paymentModalOnClose: Y,
            paymentModalOnComplete: W,
        } = M({
            onClose: t,
            onComplete: n,
            skuIDs: V,
            setCustomConfettiVisible: Z,
        }),
        K = (e, t, n) =>
            (0, r.jsx)(U, {
                isGift: c,
                step: n,
                onClose: t,
                giftingOrigin: p,
            }),
        z = i.useMemo(
            () => [
                b.WA,
                ...(c ? [S.Dd] : []),
                O.n,
                ...b.yp,
                b.wo,
                {
                    key: h.h8.CONFIRM,
                    renderStep: (e) =>
                        (0, r.jsx)(
                            v.x,
                            w(
                                {
                                    confettiCanvas: A,
                                    analyticsLocations: C,
                                    hideConfetti: B,
                                },
                                e,
                            ),
                        ),
                    options: x,
                },
            ],
            [C, A, B, c],
        );
    return (0, r.jsxs)(d.Gt, {
        value: C,
        children: [
            (0, r.jsx)(k, {
                environment: P,
                setConfettiCanvas: R,
                customConfettiDisplayOptions: F,
                customConfettiVisible: G,
            }),
            (0, r.jsx)(m.PaymentContextProvider, {
                loadId: s,
                stepConfigs: z,
                applicationId: T.XAJ,
                skuIDs: V,
                isGift: c,
                activeSubscription: null,
                purchaseType: N.GZ.ONE_TIME,
                excludeSubscriptionPlansBySKU: !0,
                children: (0, r.jsx)(g.c1, {
                    children: (0, r.jsx)(_.KB, {
                        isGift: c,
                        giftRecipient: u,
                        giftMessage: f,
                        giftingOrigin: p,
                        children: (0, r.jsx)(E.PaymentModal, {
                            skuId: H,
                            onClose: Y,
                            onComplete: W,
                            applicationId: T.XAJ,
                            initialPlanId: null,
                            analyticsLocations: C,
                            renderHeader: K,
                            onStepChange: a,
                            hideShadow: !0,
                            transitionState: o,
                            returnRef: I,
                        }),
                    }),
                }),
            }),
        ],
    });
}
