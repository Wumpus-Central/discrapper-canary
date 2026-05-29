n.d(l, { Ay: () => C, UX: () => y, dZ: () => P });
var r = n(627968),
    s = n(64700),
    t = n(503698),
    i = n.n(t),
    a = n(284009),
    d = n.n(a),
    o = n(340287),
    c = n(430993),
    u = n(17928),
    p = n(430690),
    m = n(742810),
    A = n(722847),
    N = n(573359),
    E = n(768050),
    h = n(166532),
    S = n(615310),
    f = n(370353);
function C(e) {
    let { header: l, stepProps: n } = (function (e) {
            let { header: l, ...n } = e;
            return { header: l, stepProps: n };
        })(e),
        { step: t, stepConfigs: a } = (0, S.Ay)(),
        { setBodyNode: o, setFooterNode: C, setModalOverlayNode: P, unifiedCheckoutFlow: y } = (0, E.P5)(),
        x = (0, u.bG)([N.A], () => N.A.isDisplayingWowMomentConfirmation),
        { setReadySlideId: j } = (0, A.t4)((e) => ({ setReadySlideId: e.setReadySlideId })),
        R = a.find((e) => e.key === t);
    s.useEffect(() => {
        P(null);
    }, [t, P]),
        d()(null != R, "Unknown step for current payment flow (PaymentModalStep): step=%s, flow=%s", t, y);
    let I = R?.options?.hideSlider ?? !1,
        M = R?.options?.hideDefaultModalBody ?? !1,
        _ = R?.options?.sliderBodyClassName,
        D = (0, m.D7)({ location: "PaymentModalStep" }),
        T = s.useMemo(() => D && t === h.pn.REVIEW, [D, t]),
        g = s.useCallback(
            (e, l) => {
                l === t && o(e);
            },
            [t, o],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (R?.options?.renderHeader ?? !0) ? l : null,
            R.renderStep(n),
            null == t || I
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          M
                              ? null
                              : (0, r.jsx)(c.c, {
                                    children: (0, r.jsx)(p.t, {
                                        shouldUseMediaQueriesForSizing: !0,
                                        activeSlide: t,
                                        centered: !1,
                                        onSlideReady: (e) => j(e),
                                        width: "100%",
                                        disableDefaultTransformStyling: T,
                                        overflow: x ? "visible" : void 0,
                                        children: a
                                            .filter((e) => null != e.key)
                                            .map((e) =>
                                                (0, r.jsx)(
                                                    p.q,
                                                    {
                                                        id: e.key,
                                                        children: (0, r.jsx)("form", {
                                                            className: i()(f.OO, { [f.Wq]: T }, _),
                                                            ref: (l) => g(l, e.key),
                                                            onSubmit: (e) => e.preventDefault(),
                                                        }),
                                                    },
                                                    e.key,
                                                ),
                                            ),
                                    }),
                                }),
                          (0, r.jsx)("div", { ref: (e) => C(e) }),
                          (0, r.jsx)("div", {
                              ref: (e) => {
                                  P(e);
                              },
                          }),
                      ],
                  }),
        ],
    });
}
function P(e) {
    let { children: l } = e,
        { bodyNode: n } = (0, E.P5)();
    return null == n ? null : o.createPortal(l, n);
}
function y(e) {
    let { children: l } = e,
        { footerNode: n } = (0, E.P5)();
    return null == n ? null : o.createPortal(l, n);
}
