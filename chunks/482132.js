n.d(t, { Ay: () => y, UX: () => g, dZ: () => I });
var l = n(477900),
    r = n(582128),
    i = n(503698),
    s = n.n(i),
    a = n(333007),
    u = n(17928),
    c = n(430993),
    o = n(430690),
    d = n(71804),
    f = n(883645),
    h = n(601194),
    m = n(123816),
    p = n(573359),
    C = n(166532),
    E = n(819252);
function y(e) {
    let {
            header: t,
            disableDefaultSlideTransformStyling: n,
            stepProps: i,
        } = (function (e) {
            let { header: t, disableDefaultSlideTransformStyling: n, ...l } = e;
            return { header: t, disableDefaultSlideTransformStyling: n, stepProps: l };
        })(e),
        { step: a, stepConfigs: y } = (0, f.Ay)(),
        { setBodyNode: I, setFooterNode: g, setModalOverlayNode: S } = (0, h.Gm)(),
        _ = (0, u.bG)([p.A], () => p.A.isDisplayingWowMomentConfirmation),
        { setReadySlideId: x, unifiedCheckoutFlow: P } = (0, m.t4)((e) => ({
            setReadySlideId: e.setReadySlideId,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
        })),
        A = y.find((e) => e.key === a);
    if (
        (r.useEffect(() => {
            S(null);
        }, [a, S]),
        null == A)
    )
        throw new d.v({
            message: "Unknown step for current payment flow (PaymentModalStep)",
            extraSentryInformation: { stepConfig: A, step: a, unifiedCheckoutFlow: P, stepConfigs: y },
        });
    let v = A?.options?.hideSlider ?? !1,
        R = A?.options?.hideDefaultModalBody ?? !1,
        M = A?.options?.sliderBodyClassName,
        T = a === C.pn.REVIEW,
        L = r.useCallback(
            (e, t) => {
                t === a && I(e);
            },
            [a, I],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (A?.options?.renderHeader ?? !0) ? t : null,
            A.renderStep(i),
            null == a || v
                ? null
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          R
                              ? null
                              : (0, l.jsx)(c.c, {
                                    children: (0, l.jsx)(o.t, {
                                        shouldUseMediaQueriesForSizing: !0,
                                        activeSlide: a,
                                        centered: !1,
                                        onSlideReady: (e) => x(e),
                                        width: "100%",
                                        disableDefaultTransformStyling: T || n,
                                        overflow: _ ? "visible" : void 0,
                                        children: y
                                            .filter((e) => null != e.key)
                                            .map((e) =>
                                                (0, l.jsx)(
                                                    o.q,
                                                    {
                                                        id: e.key,
                                                        children: (0, l.jsx)("form", {
                                                            className: s()(E.OO, { [E.Wq]: T }, M),
                                                            ref: (t) => L(t, e.key),
                                                            onSubmit: (e) => e.preventDefault(),
                                                        }),
                                                    },
                                                    e.key,
                                                ),
                                            ),
                                    }),
                                }),
                          (0, l.jsx)("div", { ref: (e) => g(e) }),
                          (0, l.jsx)("div", {
                              ref: (e) => {
                                  S(e);
                              },
                          }),
                      ],
                  }),
        ],
    });
}
function I(e) {
    let { children: t } = e,
        { bodyNode: n } = (0, h.Gm)();
    return null == n ? null : a.createPortal(t, n);
}
function g(e) {
    let { children: t } = e,
        { footerNode: n } = (0, h.Gm)();
    return null == n ? null : a.createPortal(t, n);
}
