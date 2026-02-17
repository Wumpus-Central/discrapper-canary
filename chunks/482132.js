"use strict";
n.d(t, { Ay: () => p, UX: () => E, dZ: () => g });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    u = n(340287),
    c = n(158954),
    d = n(397927),
    _ = n(156312),
    f = n(804686);
function h(e) {
    let { header: t, isLargeModal: n, ...r } = e;
    return { header: t, isLargeModal: n, stepProps: r };
}
function p(e) {
    let { header: t, stepProps: n } = h(e),
        {
            step: a,
            stepConfigs: o,
            setBodyNode: u,
            setFooterNode: p,
            setModalOverlayNode: g,
            setReadySlideId: E,
            isDisplayingWowMomentConfirmation: A,
        } = (0, _.P5)(),
        I = o.find((e) => e.key === a);
    i.useEffect(() => {
        g(null);
    }, [a, g]),
        l()(null != I, "Unknown step for current payment flow.");
    let T = I?.options?.hideSlider ?? !1,
        y = I?.options?.hideDefaultModalBody ?? !1,
        S = I?.options?.sliderBodyClassName,
        v = "100%";
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (I?.options?.renderHeader ?? !0) ? t : null,
            I.renderStep(n),
            null == a || T
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          y
                              ? null
                              : (0, r.jsx)(c.cwr, {
                                    children: (0, r.jsx)(d.tN_, {
                                        activeSlide: a,
                                        centered: !1,
                                        onSlideReady: (e) => E(e),
                                        width: v,
                                        overflow: A ? "visible" : void 0,
                                        children: o
                                            .filter((e) => null != e.key)
                                            .map((e) =>
                                                (0, r.jsx)(
                                                    d.q7S,
                                                    {
                                                        id: e.key,
                                                        children: (0, r.jsx)("form", {
                                                            className: s()(f.OO, S),
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
                          (0, r.jsx)("div", { ref: (e) => p(e) }),
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
        { bodyNode: n } = (0, _.P5)();
    return null == n ? null : u.createPortal(t, n);
}
function E(e) {
    let { children: t } = e,
        { footerNode: n } = (0, _.P5)();
    return null == n ? null : u.createPortal(t, n);
}
