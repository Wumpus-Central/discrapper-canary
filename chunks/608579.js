r.d(n, {
    Z: function () {
        return D;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(119617),
    c = r(442837),
    d = r(570140),
    f = r(100527),
    p = r(906732),
    h = r(597688),
    _ = r(317951),
    m = r(987209),
    g = r(563132),
    E = r(409813),
    v = r(791785),
    y = r(961830),
    b = r(742956),
    I = r(346790),
    T = r(49308),
    S = r(117652),
    A = r(126982),
    C = r(981631),
    N = r(302800),
    R = r(231338),
    O = r(484495);
function D(e) {
    var n;
    let { onClose: r, onComplete: i, onStepChange: s, transitionState: D, loadId: x, skuId: L, isGift: w = !1, giftRecipient: P, giftMessage: M, giftingOrigin: k, analyticsLocations: U, returnRef: B } = e,
        { analyticsLocations: G } = (0, p.ZP)([...U, f.Z.COLLECTIBLES_PAYMENT_MODAL]),
        Z = o.useRef(new u.qA()),
        [F, V] = o.useState(null),
        [j, H] = o.useState(!1),
        Y = o.useMemo(() => (0, N.UY)(L), [L]),
        W = (0, c.Wu)([h.Z], () => h.Z.recommendedGiftSkuIds, []),
        K = null != L ? [L] : W,
        z = null !== (n = K[0]) && void 0 !== n ? n : null,
        q = null != L && _.Rm.has(L),
        Q = o.useCallback(() => {
            H(!0), null == i || i();
        }, [i]),
        X = o.useCallback(
            (e) => {
                H(!1),
                    r(e),
                    d.Z.dispatch({
                        type: 'SKU_PURCHASE_MODAL_CLOSE',
                        error: null
                    });
            },
            [r]
        ),
        J = (e, n, r) =>
            w
                ? (0, a.jsx)(b.Z, {
                      step: r,
                      onClose: () => n(!1),
                      giftingOrigin: k
                  })
                : (0, a.jsx)(A.Z, {
                      step: r,
                      onClose: () => n(!1)
                  }),
        $ = o.useMemo(
            () => [
                y.WA,
                ...(w ? [S.Dd] : []),
                I.n,
                ...y.yp,
                y.wo,
                {
                    key: E.h8.CONFIRM,
                    renderStep: (e) =>
                        (0, a.jsx)(T.x, {
                            ...e,
                            confettiCanvas: F,
                            analyticsLocations: G,
                            hideConfetti: null != Y
                        }),
                    options: {
                        bodyClassName: O.modalOverrideBody,
                        sliderBodyClassName: O.modalOverrideSliderBody
                    }
                }
            ],
            [G, F, Y, w]
        );
    return (0, a.jsxs)(p.Gt, {
        value: G,
        children: [
            (0, a.jsx)(u.O_, {
                ref: V,
                className: O.confettiCanvas,
                environment: Z.current
            }),
            null != Y &&
                (0, a.jsx)('img', {
                    src: Y.imageSrc,
                    className: l()(O.customConfetti, { [O.hidden]: !j }),
                    style: Y.style,
                    alt: '',
                    'aria-hidden': !0
                }),
            (0, a.jsx)(g.PaymentContextProvider, {
                loadId: x,
                stepConfigs: $,
                applicationId: C.XAJ,
                skuIDs: K,
                isGift: w,
                activeSubscription: null,
                purchaseType: R.GZ.ONE_TIME,
                children: (0, a.jsx)(m.KB, {
                    isGift: w,
                    giftRecipient: P,
                    giftMessage: M,
                    giftingOrigin: k,
                    children: (0, a.jsx)(v.PaymentModal, {
                        onClose: X,
                        onComplete: Q,
                        applicationId: C.XAJ,
                        skuId: z,
                        initialPlanId: null,
                        analyticsLocations: G,
                        transitionState: D,
                        renderHeader: J,
                        returnRef: B,
                        onStepChange: s,
                        skipConfirm: q,
                        hideShadow: !0
                    })
                })
            })
        ]
    });
}
