n.d(l, { Ay: () => f, UX: () => y, dZ: () => C });
var r = n(627968),
    t = n(64700),
    s = n(503698),
    i = n.n(s),
    a = n(284009),
    d = n.n(a),
    o = n(340287),
    c = n(430993),
    u = n(17928),
    p = n(430690),
    m = n(738909),
    A = n(211159),
    N = n(573359),
    E = n(166532),
    h = n(615310),
    S = n(370353);
function f(e) {
    let { header: l, stepProps: n } = (function (e) {
            let { header: l, ...n } = e;
            return { header: l, stepProps: n };
        })(e),
        { step: s, stepConfigs: a } = (0, h.Ay)(),
        { setBodyNode: o, setFooterNode: f, setModalOverlayNode: C } = (0, m.Gm)(),
        y = (0, u.bG)([N.A], () => N.A.isDisplayingWowMomentConfirmation),
        { setReadySlideId: x, unifiedCheckoutFlow: j } = (0, A.t4)((e) => ({
            setReadySlideId: e.setReadySlideId,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
        })),
        R = a.find((e) => e.key === s);
    t.useEffect(() => {
        C(null);
    }, [s, C]),
        d()(null != R, "Unknown step for current payment flow (PaymentModalStep): step=%s, flow=%s", s, j);
    let I = R?.options?.hideSlider ?? !1,
        P = R?.options?.hideDefaultModalBody ?? !1,
        _ = R?.options?.sliderBodyClassName,
        T = s === E.pn.REVIEW,
        g = t.useCallback(
            (e, l) => {
                l === s && o(e);
            },
            [s, o],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (R?.options?.renderHeader ?? !0) ? l : null,
            R.renderStep(n),
            null == s || I
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          P
                              ? null
                              : (0, r.jsx)(c.c, {
                                    children: (0, r.jsx)(p.t, {
                                        shouldUseMediaQueriesForSizing: !0,
                                        activeSlide: s,
                                        centered: !1,
                                        onSlideReady: (e) => x(e),
                                        width: "100%",
                                        disableDefaultTransformStyling: T,
                                        overflow: y ? "visible" : void 0,
                                        children: a
                                            .filter((e) => null != e.key)
                                            .map((e) =>
                                                (0, r.jsx)(
                                                    p.q,
                                                    {
                                                        id: e.key,
                                                        children: (0, r.jsx)("form", {
                                                            className: i()(S.OO, { [S.Wq]: T }, _),
                                                            ref: (l) => g(l, e.key),
                                                            onSubmit: (e) => e.preventDefault(),
                                                        }),
                                                    },
                                                    e.key,
                                                ),
                                            ),
                                    }),
                                }),
                          (0, r.jsx)("div", { ref: (e) => f(e) }),
                          (0, r.jsx)("div", {
                              ref: (e) => {
                                  C(e);
                              },
                          }),
                      ],
                  }),
        ],
    });
}
function C(e) {
    let { children: l } = e,
        { bodyNode: n } = (0, m.Gm)();
    return null == n ? null : o.createPortal(l, n);
}
function y(e) {
    let { children: l } = e,
        { footerNode: n } = (0, m.Gm)();
    return null == n ? null : o.createPortal(l, n);
}
