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
    m = n(639792);
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
            unifiedCheckoutFlow: S,
        } = (0, f.P5)(),
        y = o.find((e) => e.key === s);
    i.useEffect(() => {
        A(null);
    }, [s, A]),
        l()(null != y, "Unknown step for current payment flow (PaymentModalStep): step=%s, flow=%s", s, S);
    let v = y?.options?.hideSlider ?? !1,
        N = y?.options?.hideDefaultModalBody ?? !1,
        C = y?.options?.sliderBodyClassName,
        R = "100%",
        O = (0, _.D7)({ location: "PaymentModalStep" }),
        b = i.useMemo(() => O && s === p.pn.REVIEW, [O, s]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (y?.options?.renderHeader ?? !0) ? t : null,
            y.renderStep(n),
            null == s || v
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          N
                              ? null
                              : (0, r.jsx)(c.cwr, {
                                    children: (0, r.jsx)(d.tN_, {
                                        shouldUseMediaQueriesForSizing: !0,
                                        activeSlide: s,
                                        centered: !1,
                                        onSlideReady: (e) => I(e),
                                        width: R,
                                        disableDefaultTransformStyling: b,
                                        overflow: T ? "visible" : void 0,
                                        children: o
                                            .filter((e) => null != e.key)
                                            .map((e) =>
                                                (0, r.jsx)(
                                                    d.q7S,
                                                    {
                                                        id: e.key,
                                                        children: (0, r.jsx)("form", {
                                                            className: a()(m.OO, { [m.Wq]: b }, C),
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
