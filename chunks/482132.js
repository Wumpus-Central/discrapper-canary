n.d(t, { Ay: () => y, UX: () => g, dZ: () => _ });
var l = n(477900),
    r = n(582128),
    i = n(503698),
    a = n.n(i),
    s = n(333007),
    u = n(17928),
    c = n(430993),
    o = n(430690),
    d = n(71804),
    f = n(883645),
    h = n(601194),
    m = n(912195),
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
        { step: s, stepConfigs: y } = (0, f.Ay)(),
        { setBodyNode: _, setFooterNode: g, setModalOverlayNode: I } = (0, h.Gm)(),
        S = (0, u.bG)([p.A], () => p.A.isDisplayingWowMomentConfirmation),
        { setReadySlideId: A, unifiedCheckoutFlow: x } = (0, m.t4)((e) => ({
            setReadySlideId: e.setReadySlideId,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
        })),
        P = y.find((e) => e.key === s);
    if (
        (r.useEffect(() => {
            I(null);
        }, [s, I]),
        null == P)
    )
        throw new d.v({
            message: "Unknown step for current payment flow (PaymentModalStep)",
            extraSentryInformation: { stepConfig: P, step: s, unifiedCheckoutFlow: x, stepConfigs: y },
        });
    let v = P?.options?.hideSlider ?? !1,
        R = P?.options?.hideDefaultModalBody ?? !1,
        M = P?.options?.sliderBodyClassName,
        T = s === C.pn.REVIEW,
        L = r.useCallback(
            (e, t) => {
                t === s && _(e);
            },
            [s, _],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (P?.options?.renderHeader ?? !0) ? t : null,
            P.renderStep(i),
            null == s || v
                ? null
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          R
                              ? null
                              : (0, l.jsx)(c.c, {
                                    children: (0, l.jsx)(o.t, {
                                        shouldUseMediaQueriesForSizing: !0,
                                        activeSlide: s,
                                        centered: !1,
                                        onSlideReady: (e) => A(e),
                                        width: "100%",
                                        disableDefaultTransformStyling: T || n,
                                        overflow: S ? "visible" : void 0,
                                        children: y
                                            .filter((e) => null != e.key)
                                            .map((e) =>
                                                (0, l.jsx)(
                                                    o.q,
                                                    {
                                                        id: e.key,
                                                        children: (0, l.jsx)("form", {
                                                            className: a()(E.OO, { [E.Wq]: T }, M),
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
                                  I(e);
                              },
                          }),
                      ],
                  }),
        ],
    });
}
function _(e) {
    let { children: t } = e,
        { bodyNode: n } = (0, h.Gm)();
    return null == n ? null : s.createPortal(t, n);
}
function g(e) {
    let { children: t } = e,
        { footerNode: n } = (0, h.Gm)();
    return null == n ? null : s.createPortal(t, n);
}
