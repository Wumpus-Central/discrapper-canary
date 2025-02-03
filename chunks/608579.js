n.d(t, { Z: () => R }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(119617),
    l = n(442837),
    u = n(570140),
    c = n(100527),
    d = n(906732),
    f = n(597688),
    _ = n(317951),
    p = n(987209),
    h = n(563132),
    m = n(409813),
    g = n(791785),
    E = n(961830),
    v = n(742956),
    y = n(346790),
    I = n(49308),
    b = n(117652),
    T = n(126982),
    S = n(981631),
    A = n(302800),
    N = n(231338),
    C = n(484495);
function R(e) {
    var t;
    let { onClose: n, onComplete: a, onStepChange: R, transitionState: O, loadId: D, skuId: x, isGift: L = !1, giftRecipient: P, giftMessage: w, giftingOrigin: M, analyticsLocations: k, returnRef: U } = e,
        { analyticsLocations: G } = (0, d.ZP)([...k, c.Z.COLLECTIBLES_PAYMENT_MODAL]),
        B = r.useRef(new o.qA()),
        [Z, F] = r.useState(null),
        [V, j] = r.useState(!1),
        H = r.useMemo(() => (0, A.UY)(x), [x]),
        Y = (0, l.Wu)([f.Z], () => f.Z.recommendedGiftSkuIds, []),
        W = null != x ? [x] : Y,
        K = null !== (t = W[0]) && void 0 !== t ? t : null,
        z = null != x && _.Rm.has(x),
        q = r.useCallback(() => {
            j(!0), null == a || a();
        }, [a]),
        Q = r.useCallback(
            (e) => {
                j(!1),
                    n(e),
                    u.Z.dispatch({
                        type: 'SKU_PURCHASE_MODAL_CLOSE',
                        error: null
                    });
            },
            [n]
        ),
        X = (e, t, n) =>
            L
                ? (0, i.jsx)(v.Z, {
                      step: n,
                      onClose: () => t(!1),
                      giftingOrigin: M
                  })
                : (0, i.jsx)(T.Z, {
                      step: n,
                      onClose: () => t(!1)
                  }),
        J = r.useMemo(
            () => [
                E.WA,
                ...(L ? [b.Dd] : []),
                y.n,
                ...E.yp,
                E.wo,
                {
                    key: m.h8.CONFIRM,
                    renderStep: (e) =>
                        (0, i.jsx)(I.x, {
                            ...e,
                            confettiCanvas: Z,
                            analyticsLocations: G,
                            hideConfetti: null != H
                        }),
                    options: {
                        bodyClassName: C.modalOverrideBody,
                        sliderBodyClassName: C.modalOverrideSliderBody
                    }
                }
            ],
            [G, Z, H, L]
        );
    return (0, i.jsxs)(d.Gt, {
        value: G,
        children: [
            (0, i.jsx)(o.O_, {
                ref: F,
                className: C.confettiCanvas,
                environment: B.current
            }),
            null != H &&
                (0, i.jsx)('img', {
                    src: H.imageSrc,
                    className: s()(C.customConfetti, { [C.hidden]: !V }),
                    style: H.style,
                    alt: '',
                    'aria-hidden': !0
                }),
            (0, i.jsx)(h.PaymentContextProvider, {
                loadId: D,
                stepConfigs: J,
                applicationId: S.XAJ,
                skuIDs: W,
                isGift: L,
                activeSubscription: null,
                purchaseType: N.GZ.ONE_TIME,
                children: (0, i.jsx)(p.KB, {
                    isGift: L,
                    giftRecipient: P,
                    giftMessage: w,
                    giftingOrigin: M,
                    children: (0, i.jsx)(g.PaymentModal, {
                        onClose: Q,
                        onComplete: q,
                        applicationId: S.XAJ,
                        skuId: K,
                        initialPlanId: null,
                        analyticsLocations: G,
                        transitionState: O,
                        renderHeader: X,
                        returnRef: U,
                        onStepChange: R,
                        skipConfirm: z,
                        hideShadow: !0
                    })
                })
            })
        ]
    });
}
