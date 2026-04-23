"use strict";
n.d(t, { Ay: () => m, UX: () => A, dZ: () => g });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(340287),
    c = n(430993),
    d = n(430690),
    _ = n(742810),
    f = n(156312),
    p = n(166532),
    h = n(615310),
    E = n(370353);
function m(e) {
    let { header: t, stepProps: n } = (function (e) {
            let { header: t, ...n } = e;
            return { header: t, stepProps: n };
        })(e),
        { step: s, stepConfigs: o } = (0, h.Ay)(),
        {
            setBodyNode: u,
            setFooterNode: m,
            setModalOverlayNode: g,
            setReadySlideId: A,
            isDisplayingWowMomentConfirmation: I,
            unifiedCheckoutFlow: T,
        } = (0, f.P5)(),
        S = o.find((e) => e.key === s);
    i.useEffect(() => {
        g(null);
    }, [s, g]),
        l()(null != S, "Unknown step for current payment flow (PaymentModalStep): step=%s, flow=%s", s, T);
    let y = S?.options?.hideSlider ?? !1,
        N = S?.options?.hideDefaultModalBody ?? !1,
        v = S?.options?.sliderBodyClassName,
        C = (0, _.D7)({ location: "PaymentModalStep" }),
        O = i.useMemo(() => C && s === p.pn.REVIEW, [C, s]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (S?.options?.renderHeader ?? !0) ? t : null,
            S.renderStep(n),
            null == s || y
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          N
                              ? null
                              : (0, r.jsx)(c.c, {
                                    children: (0, r.jsx)(d.t, {
                                        shouldUseMediaQueriesForSizing: !0,
                                        activeSlide: s,
                                        centered: !1,
                                        onSlideReady: (e) => A(e),
                                        width: "100%",
                                        disableDefaultTransformStyling: O,
                                        overflow: I ? "visible" : void 0,
                                        children: o
                                            .filter((e) => null != e.key)
                                            .map((e) =>
                                                (0, r.jsx)(
                                                    d.q,
                                                    {
                                                        id: e.key,
                                                        children: (0, r.jsx)("form", {
                                                            className: a()(E.OO, { [E.Wq]: O }, v),
                                                            ref: (e) => {
                                                                u(e);
                                                            },
                                                            onSubmit: (e) => e.preventDefault(),
                                                        }),
                                                    },
                                                    e.key,
                                                ),
                                            ),
                                    }),
                                }),
                          (0, r.jsx)("div", { ref: (e) => m(e) }),
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
function g(e) {
    let { children: t } = e,
        { bodyNode: n } = (0, f.P5)();
    return null == n ? null : u.createPortal(t, n);
}
function A(e) {
    let { children: t } = e,
        { footerNode: n } = (0, f.P5)();
    return null == n ? null : u.createPortal(t, n);
}
