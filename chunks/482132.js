"use strict";
n.d(t, { Ay: () => E, UX: () => A, dZ: () => g });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(340287),
    c = n(158954),
    d = n(397927),
    _ = n(608805),
    f = n(156312),
    p = n(166532),
    h = n(804686);
function m(e) {
    let { header: t, ...n } = e;
    return { header: t, stepProps: n };
}
function E(e) {
    let { header: t, stepProps: n } = m(e),
        {
            step: s,
            stepConfigs: o,
            setBodyNode: u,
            setFooterNode: E,
            setModalOverlayNode: g,
            setReadySlideId: A,
            isDisplayingWowMomentConfirmation: I,
        } = (0, f.P5)(),
        T = o.find((e) => e.key === s);
    i.useEffect(() => {
        g(null);
    }, [s, g]),
        l()(null != T, "Unknown step for current payment flow.");
    let S = T?.options?.hideSlider ?? !1,
        y = T?.options?.hideDefaultModalBody ?? !1,
        v = T?.options?.sliderBodyClassName,
        N = "100%",
        C = (0, _.D7)({ location: "PaymentModalStep" }),
        R = i.useMemo(() => C && s === p.pn.REVIEW, [C, s]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (T?.options?.renderHeader ?? !0) ? t : null,
            T.renderStep(n),
            null == s || S
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          y
                              ? null
                              : (0, r.jsx)(c.cwr, {
                                    children: (0, r.jsx)(d.tN_, {
                                        shouldUseMediaQueriesForSizing: !0,
                                        activeSlide: s,
                                        centered: !1,
                                        onSlideReady: (e) => A(e),
                                        width: N,
                                        disableDefaultTransformStyling: R,
                                        overflow: I ? "visible" : void 0,
                                        children: o
                                            .filter((e) => null != e.key)
                                            .map((e) =>
                                                (0, r.jsx)(
                                                    d.q7S,
                                                    {
                                                        id: e.key,
                                                        children: (0, r.jsx)("form", {
                                                            className: a()(h.OO, { [h.Wq]: R }, v),
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
                          (0, r.jsx)("div", { ref: (e) => E(e) }),
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
