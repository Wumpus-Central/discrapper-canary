n.d(l, { Ay: () => h, UX: () => f, dZ: () => S });
var r = n(627968),
    s = n(64700),
    t = n(503698),
    i = n.n(t),
    a = n(284009),
    d = n.n(a),
    o = n(340287),
    c = n(430993),
    u = n(430690),
    p = n(742810),
    N = n(49960),
    A = n(166532),
    E = n(615310),
    m = n(370353);
function h(e) {
    let { header: l, stepProps: n } = (function (e) {
            let { header: l, ...n } = e;
            return { header: l, stepProps: n };
        })(e),
        { step: t, stepConfigs: a } = (0, E.Ay)(),
        {
            setBodyNode: o,
            setFooterNode: h,
            setModalOverlayNode: S,
            setReadySlideId: f,
            isDisplayingWowMomentConfirmation: C,
            unifiedCheckoutFlow: x,
        } = (0, N.P5)(),
        P = a.find((e) => e.key === t);
    s.useEffect(() => {
        S(null);
    }, [t, S]),
        d()(null != P, "Unknown step for current payment flow (PaymentModalStep): step=%s, flow=%s", t, x);
    let j = P?.options?.hideSlider ?? !1,
        _ = P?.options?.hideDefaultModalBody ?? !1,
        y = P?.options?.sliderBodyClassName,
        M = (0, p.D7)({ location: "PaymentModalStep" }),
        R = s.useMemo(() => M && t === A.pn.REVIEW, [M, t]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (P?.options?.renderHeader ?? !0) ? l : null,
            P.renderStep(n),
            null == t || j
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          _
                              ? null
                              : (0, r.jsx)(c.c, {
                                    children: (0, r.jsx)(u.t, {
                                        shouldUseMediaQueriesForSizing: !0,
                                        activeSlide: t,
                                        centered: !1,
                                        onSlideReady: (e) => f(e),
                                        width: "100%",
                                        disableDefaultTransformStyling: R,
                                        overflow: C ? "visible" : void 0,
                                        children: a
                                            .filter((e) => null != e.key)
                                            .map((e) =>
                                                (0, r.jsx)(
                                                    u.q,
                                                    {
                                                        id: e.key,
                                                        children: (0, r.jsx)("form", {
                                                            className: i()(m.OO, { [m.Wq]: R }, y),
                                                            ref: (e) => {
                                                                o(e);
                                                            },
                                                            onSubmit: (e) => e.preventDefault(),
                                                        }),
                                                    },
                                                    e.key,
                                                ),
                                            ),
                                    }),
                                }),
                          (0, r.jsx)("div", { ref: (e) => h(e) }),
                          (0, r.jsx)("div", {
                              ref: (e) => {
                                  S(e);
                              },
                          }),
                      ],
                  }),
        ],
    });
}
function S(e) {
    let { children: l } = e,
        { bodyNode: n } = (0, N.P5)();
    return null == n ? null : o.createPortal(l, n);
}
function f(e) {
    let { children: l } = e,
        { footerNode: n } = (0, N.P5)();
    return null == n ? null : o.createPortal(l, n);
}
