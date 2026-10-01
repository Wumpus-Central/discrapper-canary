n.d(t, { Ay: () => I, UX: () => S, dZ: () => y });
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
    m = n(263532),
    C = n(573359),
    p = n(166532),
    E = n(819252);
function I(e) {
    let {
            header: t,
            disableDefaultSlideTransformStyling: n,
            stepProps: i,
        } = (function (e) {
            let { header: t, disableDefaultSlideTransformStyling: n, ...l } = e;
            return { header: t, disableDefaultSlideTransformStyling: n, stepProps: l };
        })(e),
        { step: a, stepConfigs: I } = (0, f.Ay)(),
        { setBodyNode: y, setFooterNode: S, setModalOverlayNode: g } = (0, h.Gm)(),
        _ = (0, u.bG)([C.A], () => C.A.isDisplayingWowMomentConfirmation),
        { setReadySlideId: P, unifiedCheckoutFlow: A } = (0, m.t4)((e) => ({
            setReadySlideId: e.setReadySlideId,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
        })),
        R = I.find((e) => e.key === a);
    if (
        (r.useEffect(() => {
            g(null);
        }, [a, g]),
        null == R)
    )
        throw new d.v({
            message: "Unknown step for current payment flow (PaymentModalStep)",
            extraSentryInformation: { stepConfig: R, step: a, unifiedCheckoutFlow: A, stepConfigs: I },
        });
    let M = R?.options?.hideSlider ?? !1,
        v = R?.options?.hideDefaultModalBody ?? !1,
        T = R?.options?.sliderBodyClassName,
        x = a === p.pn.REVIEW,
        L = r.useCallback(
            (e, t) => {
                t === a && y(e);
            },
            [a, y],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (R?.options?.renderHeader ?? !0) ? t : null,
            R.renderStep(i),
            null == a || M
                ? null
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          v
                              ? null
                              : (0, l.jsx)(c.c, {
                                    children: (0, l.jsx)(o.t, {
                                        shouldUseMediaQueriesForSizing: !0,
                                        activeSlide: a,
                                        centered: !1,
                                        onSlideReady: (e) => P(e),
                                        width: "100%",
                                        disableDefaultTransformStyling: x || n,
                                        overflow: _ ? "visible" : void 0,
                                        children: I.filter((e) => null != e.key).map((e) =>
                                            (0, l.jsx)(
                                                o.q,
                                                {
                                                    id: e.key,
                                                    children: (0, l.jsx)("form", {
                                                        className: s()(E.OO, { [E.Wq]: x }, T),
                                                        ref: (t) => L(t, e.key),
                                                        onSubmit: (e) => e.preventDefault(),
                                                    }),
                                                },
                                                e.key,
                                            ),
                                        ),
                                    }),
                                }),
                          (0, l.jsx)("div", { ref: (e) => S(e) }),
                          (0, l.jsx)("div", {
                              ref: (e) => {
                                  g(e);
                              },
                          }),
                      ],
                  }),
        ],
    });
}
function y(e) {
    let { children: t } = e,
        { bodyNode: n } = (0, h.Gm)();
    return null == n ? null : a.createPortal(t, n);
}
function S(e) {
    let { children: t } = e,
        { footerNode: n } = (0, h.Gm)();
    return null == n ? null : a.createPortal(t, n);
}
