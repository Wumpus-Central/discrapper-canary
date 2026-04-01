"use strict";
n.d(t, { Ay: () => g, UX: () => I, dZ: () => A });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(340287),
    c = n(158954),
    d = n(397927),
    _ = n(742810),
    f = n(156312),
    p = n(166532),
    h = n(615310),
    m = n(965057);
function E(e) {
    let { header: t, ...n } = e;
    return { header: t, stepProps: n };
}
function g(e) {
    let { header: t, stepProps: n } = E(e),
        { step: s, stepConfigs: o } = (0, h.Ay)(),
        {
            setBodyNode: u,
            setFooterNode: g,
            setModalOverlayNode: A,
            setReadySlideId: I,
            isDisplayingWowMomentConfirmation: T,
        } = (0, f.P5)(),
        S = o.find((e) => e.key === s);
    i.useEffect(() => {
        A(null);
    }, [s, A]),
        l()(null != S, "Unknown step for current payment flow.");
    let y = S?.options?.hideSlider ?? !1,
        v = S?.options?.hideDefaultModalBody ?? !1,
        N = S?.options?.sliderBodyClassName,
        C = "100%",
        R = (0, _.D7)({ location: "PaymentModalStep" }),
        O = i.useMemo(() => R && s === p.pn.REVIEW, [R, s]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (S?.options?.renderHeader ?? !0) ? t : null,
            S.renderStep(n),
            null == s || y
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          v
                              ? null
                              : (0, r.jsx)(c.cwr, {
                                    children: (0, r.jsx)(d.tN_, {
                                        shouldUseMediaQueriesForSizing: !0,
                                        activeSlide: s,
                                        centered: !1,
                                        onSlideReady: (e) => I(e),
                                        width: C,
                                        disableDefaultTransformStyling: O,
                                        overflow: T ? "visible" : void 0,
                                        children: o
                                            .filter((e) => null != e.key)
                                            .map((e) =>
                                                (0, r.jsx)(
                                                    d.q7S,
                                                    {
                                                        id: e.key,
                                                        children: (0, r.jsx)("form", {
                                                            className: a()(m.OO, { [m.Wq]: O }, N),
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
                          (0, r.jsx)("div", { ref: (e) => g(e) }),
                          (0, r.jsx)("div", {
                              ref: (e) => {
                                  A(e);
                              },
                          }),
                      ],
                  }),
        ],
    });
}
function A(e) {
    let { children: t } = e,
        { bodyNode: n } = (0, f.P5)();
    return null == n ? null : u.createPortal(t, n);
}
function I(e) {
    let { children: t } = e,
        { footerNode: n } = (0, f.P5)();
    return null == n ? null : u.createPortal(t, n);
}
