n.d(l, { Ay: () => h, UX: () => C, dZ: () => f });
var r = n(627968),
    t = n(64700),
    s = n(503698),
    i = n.n(s),
    a = n(284009),
    d = n.n(a),
    o = n(340287),
    c = n(430993),
    u = n(430690),
    p = n(742810),
    N = n(722847),
    A = n(834252),
    E = n(166532),
    m = n(615310),
    S = n(370353);
function h(e) {
    let { header: l, stepProps: n } = (function (e) {
            let { header: l, ...n } = e;
            return { header: l, stepProps: n };
        })(e),
        { step: s, stepConfigs: a } = (0, m.Ay)(),
        {
            setBodyNode: o,
            setFooterNode: h,
            setModalOverlayNode: f,
            isDisplayingWowMomentConfirmation: C,
            unifiedCheckoutFlow: P,
        } = (0, A.P5)(),
        { setReadySlideId: x } = (0, N.t4)((e) => ({ setReadySlideId: e.setReadySlideId })),
        y = a.find((e) => e.key === s);
    t.useEffect(() => {
        f(null);
    }, [s, f]),
        d()(null != y, "Unknown step for current payment flow (PaymentModalStep): step=%s, flow=%s", s, P);
    let j = y?.options?.hideSlider ?? !1,
        R = y?.options?.hideDefaultModalBody ?? !1,
        I = y?.options?.sliderBodyClassName,
        _ = (0, p.D7)({ location: "PaymentModalStep" }),
        M = t.useMemo(() => _ && s === E.pn.REVIEW, [_, s]),
        T = t.useCallback(
            (e, l) => {
                l === s && o(e);
            },
            [s, o],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (y?.options?.renderHeader ?? !0) ? l : null,
            y.renderStep(n),
            null == s || j
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          R
                              ? null
                              : (0, r.jsx)(c.c, {
                                    children: (0, r.jsx)(u.t, {
                                        shouldUseMediaQueriesForSizing: !0,
                                        activeSlide: s,
                                        centered: !1,
                                        onSlideReady: (e) => x(e),
                                        width: "100%",
                                        disableDefaultTransformStyling: M,
                                        overflow: C ? "visible" : void 0,
                                        children: a
                                            .filter((e) => null != e.key)
                                            .map((e) =>
                                                (0, r.jsx)(
                                                    u.q,
                                                    {
                                                        id: e.key,
                                                        children: (0, r.jsx)("form", {
                                                            className: i()(S.OO, { [S.Wq]: M }, I),
                                                            ref: (l) => T(l, e.key),
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
                                  f(e);
                              },
                          }),
                      ],
                  }),
        ],
    });
}
function f(e) {
    let { children: l } = e,
        { bodyNode: n } = (0, A.P5)();
    return null == n ? null : o.createPortal(l, n);
}
function C(e) {
    let { children: l } = e,
        { footerNode: n } = (0, A.P5)();
    return null == n ? null : o.createPortal(l, n);
}
