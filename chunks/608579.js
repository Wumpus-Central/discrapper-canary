t.d(n, {
    Z: function () {
        return y;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    s = t(120356),
    a = t.n(s),
    r = t(119617),
    o = t(442837),
    d = t(570140),
    c = t(100527),
    u = t(906732),
    h = t(597688),
    x = t(987209),
    f = t(563132),
    C = t(409813),
    m = t(791785),
    g = t(961830),
    p = t(742956),
    S = t(346790),
    j = t(49308),
    v = t(117652),
    E = t(126982),
    I = t(981631),
    T = t(302800),
    N = t(215023),
    _ = t(231338),
    M = t(484495);
function y(e) {
    var n;
    let { onClose: t, onComplete: s, onStepChange: y, transitionState: Z, loadId: A, skuId: O, isGift: P = !1, giftRecipient: k, giftMessage: b, giftingOrigin: L, analyticsLocations: G, returnRef: D } = e,
        { analyticsLocations: R } = (0, u.ZP)([...G, c.Z.COLLECTIBLES_PAYMENT_MODAL]),
        B = l.useRef(new r.qA()),
        [F, w] = l.useState(null),
        [H, W] = l.useState(!1),
        U = l.useMemo(() => (0, T.UY)(O), [O]),
        Y = (0, o.Wu)([h.Z], () => h.Z.recommendedGiftSkuIds, []),
        K = null != O ? [O] : Y,
        V = null !== (n = K[0]) && void 0 !== n ? n : null,
        q = null != O && N.Rm.has(O),
        z = l.useCallback(() => {
            W(!0), null == s || s();
        }, [s]),
        J = l.useCallback(
            (e) => {
                W(!1),
                    t(e),
                    d.Z.dispatch({
                        type: 'SKU_PURCHASE_MODAL_CLOSE',
                        error: null
                    });
            },
            [t]
        ),
        Q = l.useMemo(
            () => [
                g.WA,
                ...(P ? [v.Dd] : []),
                S.n,
                ...g.yp,
                g.wo,
                {
                    key: C.h8.CONFIRM,
                    renderStep: (e) =>
                        (0, i.jsx)(j.x, {
                            ...e,
                            confettiCanvas: F,
                            analyticsLocations: R,
                            hideConfetti: null != U
                        }),
                    options: {
                        bodyClassName: M.modalOverrideBody,
                        sliderBodyClassName: M.modalOverrideSliderBody
                    }
                }
            ],
            [R, F, U, P]
        );
    return (0, i.jsxs)(u.Gt, {
        value: R,
        children: [
            (0, i.jsx)(r.O_, {
                ref: w,
                className: M.confettiCanvas,
                environment: B.current
            }),
            null != U &&
                (0, i.jsx)('img', {
                    src: U.imageSrc,
                    className: a()(M.customConfetti, { [M.hidden]: !H }),
                    style: U.style,
                    alt: '',
                    'aria-hidden': !0
                }),
            (0, i.jsx)(f.PaymentContextProvider, {
                loadId: A,
                stepConfigs: Q,
                applicationId: I.XAJ,
                skuIDs: K,
                isGift: P,
                activeSubscription: null,
                purchaseType: _.GZ.ONE_TIME,
                children: (0, i.jsx)(x.KB, {
                    isGift: P,
                    giftRecipient: k,
                    giftMessage: b,
                    giftingOrigin: L,
                    children: (0, i.jsx)(m.PaymentModal, {
                        onClose: J,
                        onComplete: z,
                        applicationId: I.XAJ,
                        skuId: V,
                        initialPlanId: null,
                        analyticsLocations: R,
                        transitionState: Z,
                        renderHeader: (e, n, t) =>
                            P
                                ? (0, i.jsx)(p.Z, {
                                      step: t,
                                      onClose: () => n(!1),
                                      giftingOrigin: L
                                  })
                                : (0, i.jsx)(E.Z, {
                                      step: t,
                                      onClose: () => n(!1)
                                  }),
                        returnRef: D,
                        onStepChange: y,
                        skipConfirm: q,
                        hideShadow: !0
                    })
                })
            })
        ]
    });
}
