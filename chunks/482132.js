n.d(t, { Ay: () => y, UX: () => S, dZ: () => I });
var r = n(477900),
    l = n(582128),
    i = n(503698),
    s = n.n(i),
    a = n(333007),
    u = n(17928),
    o = n(430993),
    c = n(430690),
    d = n(71804),
    f = n(883645),
    h = n(601194),
    p = n(642639),
    m = n(573359),
    C = n(166532),
    E = n(819252);
function y(e) {
    let {
            header: t,
            disableDefaultSlideTransformStyling: n,
            stepProps: i,
        } = (function (e) {
            let { header: t, disableDefaultSlideTransformStyling: n, ...r } = e;
            return { header: t, disableDefaultSlideTransformStyling: n, stepProps: r };
        })(e),
        { step: a, stepConfigs: y } = (0, f.Ay)(),
        { setBodyNode: I, setFooterNode: S, setModalOverlayNode: g } = (0, h.Gm)(),
        _ = (0, u.bG)([m.A], () => m.A.isDisplayingWowMomentConfirmation),
        { setReadySlideId: P, unifiedCheckoutFlow: A } = (0, p.t4)((e) => ({
            setReadySlideId: e.setReadySlideId,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
        })),
        x = y.find((e) => e.key === a);
    if (
        (l.useEffect(() => {
            g(null);
        }, [a, g]),
        null == x)
    )
        throw new d.v({
            message: "Unknown step for current payment flow (PaymentModalStep)",
            extraSentryInformation: { stepConfig: x, step: a, unifiedCheckoutFlow: A, stepConfigs: y },
        });
    let v = x?.options?.hideSlider ?? !1,
        R = x?.options?.hideDefaultModalBody ?? !1,
        M = x?.options?.sliderBodyClassName,
        T = a === C.pn.REVIEW,
        L = l.useCallback(
            (e, t) => {
                t === a && I(e);
            },
            [a, I],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (x?.options?.renderHeader ?? !0) ? t : null,
            x.renderStep(i),
            null == a || v
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          R
                              ? null
                              : (0, r.jsx)(o.c, {
                                    children: (0, r.jsx)(c.t, {
                                        shouldUseMediaQueriesForSizing: !0,
                                        activeSlide: a,
                                        centered: !1,
                                        onSlideReady: (e) => P(e),
                                        width: "100%",
                                        disableDefaultTransformStyling: T || n,
                                        overflow: _ ? "visible" : void 0,
                                        children: y
                                            .filter((e) => null != e.key)
                                            .map((e) =>
                                                (0, r.jsx)(
                                                    c.q,
                                                    {
                                                        id: e.key,
                                                        children: (0, r.jsx)("form", {
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
                          (0, r.jsx)("div", { ref: (e) => S(e) }),
                          (0, r.jsx)("div", {
                              ref: (e) => {
                                  g(e);
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
function S(e) {
    let { children: t } = e,
        { footerNode: n } = (0, h.Gm)();
    return null == n ? null : a.createPortal(t, n);
}
