n.d(t, { Ay: () => S, UX: () => I, dZ: () => y });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(333007),
    o = n(430993),
    u = n(17928),
    c = n(430690),
    d = n(529427),
    m = n(883645),
    p = n(601194),
    C = n(87725),
    h = n(573359),
    f = n(166532),
    E = n(819252);
function S(e) {
    let { header: t, stepProps: n } = (function (e) {
            let { header: t, ...n } = e;
            return { header: t, stepProps: n };
        })(e),
        { step: r, stepConfigs: s } = (0, m.Ay)(),
        { setBodyNode: S, setFooterNode: y, setModalOverlayNode: I } = (0, p.Gm)(),
        A = (0, u.bG)([h.A], () => h.A.isDisplayingWowMomentConfirmation),
        { setReadySlideId: g, unifiedCheckoutFlow: P } = (0, C.t4)((e) => ({
            setReadySlideId: e.setReadySlideId,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
        })),
        v = s.find((e) => e.key === r);
    if (
        (i.useEffect(() => {
            I(null);
        }, [r, I]),
        null == v)
    )
        throw new d.vd({
            message: "Unknown step for current payment flow (PaymentModalStep)",
            extraSentryInformation: { stepConfig: v, step: r, unifiedCheckoutFlow: P, stepConfigs: s },
        });
    let x = v?.options?.hideSlider ?? !1,
        _ = v?.options?.hideDefaultModalBody ?? !1,
        T = v?.options?.sliderBodyClassName,
        N = r === f.pn.REVIEW,
        b = i.useCallback(
            (e, t) => {
                t === r && S(e);
            },
            [r, S],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (v?.options?.renderHeader ?? !0) ? t : null,
            v.renderStep(n),
            null == r || x
                ? null
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          _
                              ? null
                              : (0, l.jsx)(o.c, {
                                    children: (0, l.jsx)(c.t, {
                                        shouldUseMediaQueriesForSizing: !0,
                                        activeSlide: r,
                                        centered: !1,
                                        onSlideReady: (e) => g(e),
                                        width: "100%",
                                        disableDefaultTransformStyling: N,
                                        overflow: A ? "visible" : void 0,
                                        children: s
                                            .filter((e) => null != e.key)
                                            .map((e) =>
                                                (0, l.jsx)(
                                                    c.q,
                                                    {
                                                        id: e.key,
                                                        children: (0, l.jsx)("form", {
                                                            className: a()(E.OO, { [E.Wq]: N }, T),
                                                            ref: (t) => b(t, e.key),
                                                            onSubmit: (e) => e.preventDefault(),
                                                        }),
                                                    },
                                                    e.key,
                                                ),
                                            ),
                                    }),
                                }),
                          (0, l.jsx)("div", { ref: (e) => y(e) }),
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
function y(e) {
    let { children: t } = e,
        { bodyNode: n } = (0, p.Gm)();
    return null == n ? null : s.createPortal(t, n);
}
function I(e) {
    let { children: t } = e,
        { footerNode: n } = (0, p.Gm)();
    return null == n ? null : s.createPortal(t, n);
}
