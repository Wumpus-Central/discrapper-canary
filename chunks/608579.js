t.d(n, {
    Z: function () {
        return y;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    s = t(120356),
    r = t.n(s),
    a = t(119617),
    o = t(442837),
    d = t(570140),
    c = t(100527),
    u = t(906732),
    h = t(597688),
    f = t(317951),
    x = t(987209),
    C = t(563132),
    m = t(409813),
    g = t(791785),
    p = t(961830),
    S = t(742956),
    j = t(346790),
    v = t(49308),
    E = t(117652),
    I = t(126982),
    T = t(981631),
    N = t(302800),
    _ = t(231338),
    M = t(484495);
function y(e) {
    var n;
    let { onClose: t, onComplete: s, onStepChange: y, transitionState: Z, loadId: A, skuId: O, isGift: P = !1, giftRecipient: k, giftMessage: b, giftingOrigin: L, analyticsLocations: D, returnRef: G } = e,
        { analyticsLocations: R } = (0, u.ZP)([...D, c.Z.COLLECTIBLES_PAYMENT_MODAL]),
        B = l.useRef(new a.qA()),
        [F, w] = l.useState(null),
        [H, W] = l.useState(!1),
        U = l.useMemo(() => (0, N.UY)(O), [O]),
        Y = (0, o.Wu)([h.Z], () => h.Z.recommendedGiftSkuIds, []),
        K = null != O ? [O] : Y,
        V = null !== (n = K[0]) && void 0 !== n ? n : null,
        q = null != O && f.Rm.has(O),
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
                p.WA,
                ...(P ? [E.Dd] : []),
                j.n,
                ...p.yp,
                p.wo,
                {
                    key: m.h8.CONFIRM,
                    renderStep: (e) =>
                        (0, i.jsx)(v.x, {
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
            (0, i.jsx)(a.O_, {
                ref: w,
                className: M.confettiCanvas,
                environment: B.current
            }),
            null != U &&
                (0, i.jsx)('img', {
                    src: U.imageSrc,
                    className: r()(M.customConfetti, { [M.hidden]: !H }),
                    style: U.style,
                    alt: '',
                    'aria-hidden': !0
                }),
            (0, i.jsx)(C.PaymentContextProvider, {
                loadId: A,
                stepConfigs: Q,
                applicationId: T.XAJ,
                skuIDs: K,
                isGift: P,
                activeSubscription: null,
                purchaseType: _.GZ.ONE_TIME,
                children: (0, i.jsx)(x.KB, {
                    isGift: P,
                    giftRecipient: k,
                    giftMessage: b,
                    giftingOrigin: L,
                    children: (0, i.jsx)(g.PaymentModal, {
                        onClose: J,
                        onComplete: z,
                        applicationId: T.XAJ,
                        skuId: V,
                        initialPlanId: null,
                        analyticsLocations: R,
                        transitionState: Z,
                        renderHeader: (e, n, t) =>
                            P
                                ? (0, i.jsx)(S.Z, {
                                      step: t,
                                      onClose: () => n(!1),
                                      giftingOrigin: L
                                  })
                                : (0, i.jsx)(I.Z, {
                                      step: t,
                                      onClose: () => n(!1)
                                  }),
                        returnRef: G,
                        onStepChange: y,
                        skipConfirm: q,
                        hideShadow: !0
                    })
                })
            })
        ]
    });
}
