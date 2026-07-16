n.d(t, { Ay: () => A, UX: () => S, dZ: () => y });
var l = n(627968),
    i = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(340287),
    o = n(430993),
    u = n(17928),
    c = n(430690),
    d = n(529427),
    p = n(21713),
    m = n(6938),
    C = n(573359),
    h = n(166532),
    E = n(615310),
    f = n(370353);
function A(e) {
    let { header: t, stepProps: n } = (function (e) {
            let { header: t, ...n } = e;
            return { header: t, stepProps: n };
        })(e),
        { step: r, stepConfigs: s } = (0, E.Ay)(),
        { setBodyNode: A, setFooterNode: y, setModalOverlayNode: S } = (0, p.Gm)(),
        P = (0, u.bG)([C.A], () => C.A.isDisplayingWowMomentConfirmation),
        { setReadySlideId: I, unifiedCheckoutFlow: _ } = (0, m.t4)((e) => ({
            setReadySlideId: e.setReadySlideId,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
        })),
        T = s.find((e) => e.key === r);
    if (
        (i.useEffect(() => {
            S(null);
        }, [r, S]),
        null == T)
    )
        throw new d.vd({
            message: "Unknown step for current payment flow (PaymentModalStep)",
            extraSentryInformation: { stepConfig: T, step: r, unifiedCheckoutFlow: _, stepConfigs: s },
        });
    let g = T?.options?.hideSlider ?? !1,
        x = T?.options?.hideDefaultModalBody ?? !1,
        v = T?.options?.sliderBodyClassName,
        N = r === h.pn.REVIEW,
        M = i.useCallback(
            (e, t) => {
                t === r && A(e);
            },
            [r, A],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (T?.options?.renderHeader ?? !0) ? t : null,
            T.renderStep(n),
            null == r || g
                ? null
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          x
                              ? null
                              : (0, l.jsx)(o.c, {
                                    children: (0, l.jsx)(c.t, {
                                        shouldUseMediaQueriesForSizing: !0,
                                        activeSlide: r,
                                        centered: !1,
                                        onSlideReady: (e) => I(e),
                                        width: "100%",
                                        disableDefaultTransformStyling: N,
                                        overflow: P ? "visible" : void 0,
                                        children: s
                                            .filter((e) => null != e.key)
                                            .map((e) =>
                                                (0, l.jsx)(
                                                    c.q,
                                                    {
                                                        id: e.key,
                                                        children: (0, l.jsx)("form", {
                                                            className: a()(f.OO, { [f.Wq]: N }, v),
                                                            ref: (t) => M(t, e.key),
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
                                  S(e);
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
function S(e) {
    let { children: t } = e,
        { footerNode: n } = (0, p.Gm)();
    return null == n ? null : s.createPortal(t, n);
}
