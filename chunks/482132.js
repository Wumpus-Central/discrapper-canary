"use strict";
n.d(t, { Ay: () => A, UX: () => T, dZ: () => I });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(340287),
    c = n(430993),
    d = n(17928),
    _ = n(430690),
    h = n(21713),
    f = n(46332),
    p = n(573359),
    E = n(166532),
    m = n(615310),
    g = n(650417);
function A(e) {
    let { header: t, stepProps: n } = (function (e) {
            let { header: t, ...n } = e;
            return { header: t, stepProps: n };
        })(e),
        { step: s, stepConfigs: o } = (0, m.Ay)(),
        { setBodyNode: u, setFooterNode: A, setModalOverlayNode: I } = (0, h.Gm)(),
        T = (0, d.bG)([p.A], () => p.A.isDisplayingWowMomentConfirmation),
        { setReadySlideId: S, unifiedCheckoutFlow: y } = (0, f.t4)((e) => ({
            setReadySlideId: e.setReadySlideId,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
        })),
        C = o.find((e) => e.key === s);
    r.useEffect(() => {
        I(null);
    }, [s, I]),
        l()(null != C, "Unknown step for current payment flow (PaymentModalStep): step=%s, flow=%s", s, y);
    let N = C?.options?.hideSlider ?? !1,
        v = C?.options?.hideDefaultModalBody ?? !1,
        R = C?.options?.sliderBodyClassName,
        O = s === E.pn.REVIEW,
        b = r.useCallback(
            (e, t) => {
                t === s && u(e);
            },
            [s, u],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (C?.options?.renderHeader ?? !0) ? t : null,
            C.renderStep(n),
            null == s || N
                ? null
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          v
                              ? null
                              : (0, i.jsx)(c.c, {
                                    children: (0, i.jsx)(_.t, {
                                        shouldUseMediaQueriesForSizing: !0,
                                        activeSlide: s,
                                        centered: !1,
                                        onSlideReady: (e) => S(e),
                                        width: "100%",
                                        disableDefaultTransformStyling: O,
                                        overflow: T ? "visible" : void 0,
                                        children: o
                                            .filter((e) => null != e.key)
                                            .map((e) =>
                                                (0, i.jsx)(
                                                    _.q,
                                                    {
                                                        id: e.key,
                                                        children: (0, i.jsx)("form", {
                                                            className: a()(g.OO, { [g.Wq]: O }, R),
                                                            ref: (t) => b(t, e.key),
                                                            onSubmit: (e) => e.preventDefault(),
                                                        }),
                                                    },
                                                    e.key,
                                                ),
                                            ),
                                    }),
                                }),
                          (0, i.jsx)("div", { ref: (e) => A(e) }),
                          (0, i.jsx)("div", {
                              ref: (e) => {
                                  I(e);
                              },
                          }),
                      ],
                  }),
        ],
    });
}
function I(e) {
    let { children: t } = e,
        { bodyNode: n } = (0, h.Gm)();
    return null == n ? null : u.createPortal(t, n);
}
function T(e) {
    let { children: t } = e,
        { footerNode: n } = (0, h.Gm)();
    return null == n ? null : u.createPortal(t, n);
}
