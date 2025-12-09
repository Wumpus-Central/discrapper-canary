n.d(t, { ZP: () => Z }), n(388685);
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
function D(e, t, n) {
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
                D(e, t, n[t]);
            });
    }
    return e;
}
let x = (e) => {
        let { analyticsLocations: t } = e,
            { analyticsLocations: n } = (0, d.ZP)([...t, u.Z.COLLECTIBLES_PAYMENT_MODAL]);
        return { analyticsLocations: n };
    },
    L = {
        bodyClassName: R.modalOverrideBody,
        sliderBodyClassName: R.modalOverrideSliderBody,
    },
    j = (e) => {
        let { skuId: t } = e,
            n = i.useRef(new s.qA()),
            [r, a] = i.useState(null),
            [o, l] = i.useState(!1),
            c = i.useMemo(
                () =>
                    (0, C.UY)({
                        purchaseType: N.o8.FIAT,
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
    M = (e) => {
        let { skuId: t } = e,
            n = (0, l.Wu)([f.Z], () => f.Z.recommendedGiftSkuIds, []);
        return {
            skuIDs: null != t ? [t] : n,
            skipConfirm: null != t && _.Rm.has(t),
        };
    },
    k = (e) => {
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
    U = (e) => {
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
    },
    G = (e) => {
        let { step: t, onClose: n, isGift: i, giftingOrigin: a } = e;
        return i
            ? (0, r.jsx)(O.Z, {
                  step: t,
                  onClose: () => n(!1),
                  giftingOrigin: a,
              })
            : (0, r.jsx)(T.Z, {
                  step: t,
                  onClose: () => n(!1),
              });
    };
function Z(e) {
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
            returnRef: O,
        } = e,
        { analyticsLocations: T } = x({ analyticsLocations: _ }),
        {
            confettiCanvas: C,
            environment: N,
            setConfettiCanvas: R,
            customConfettiVisible: D,
            setCustomConfettiVisible: Z,
            customConfettiDisplayOptions: B,
            hideConfirmStepConfetti: F,
        } = j({ skuId: l }),
        { skuIDs: V, skipConfirm: H } = M({ skuId: l }),
        {
            paymentModalSkuId: Y,
            paymentModalOnClose: W,
            paymentModalOnComplete: K,
        } = k({
            onClose: t,
            onComplete: n,
            skuIDs: V,
            setCustomConfettiVisible: Z,
        }),
        z = (e, t, n) =>
            (0, r.jsx)(G, {
                isGift: c,
                step: n,
                onClose: t,
                giftingOrigin: p,
            }),
        q = i.useMemo(
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
                            w(
                                {
                                    confettiCanvas: C,
                                    analyticsLocations: T,
                                    hideConfetti: F,
                                },
                                e,
                            ),
                        ),
                    options: L,
                },
            ],
            [T, C, F, c],
        );
    return (0, r.jsxs)(d.Gt, {
        value: T,
        children: [
            (0, r.jsx)(U, {
                environment: N,
                setConfettiCanvas: R,
                customConfettiDisplayOptions: B,
                customConfettiVisible: D,
            }),
            (0, r.jsx)(h.PaymentContextProvider, {
                loadId: s,
                stepConfigs: q,
                applicationId: A.XAJ,
                skuIDs: V,
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
                            skuId: Y,
                            onClose: W,
                            onComplete: K,
                            applicationId: A.XAJ,
                            initialPlanId: null,
                            analyticsLocations: T,
                            renderHeader: z,
                            onStepChange: a,
                            skipConfirm: H,
                            hideShadow: !0,
                            transitionState: o,
                            returnRef: O,
                        }),
                    }),
                }),
            }),
        ],
    });
}
