n.d(l, { Ay: () => h, UX: () => C, dZ: () => f });
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
    N = n(94420),
    A = n(834252),
    E = n(166532),
    m = n(615310),
    S = n(370353);
function h(e) {
    let { header: l, stepProps: n } = (function (e) {
            let { header: l, ...n } = e;
            return { header: l, stepProps: n };
        })(e),
        { step: t, stepConfigs: a } = (0, m.Ay)(),
        {
            setBodyNode: o,
            setFooterNode: h,
            setModalOverlayNode: f,
            isDisplayingWowMomentConfirmation: C,
            unifiedCheckoutFlow: x,
        } = (0, A.P5)(),
        { setReadySlideId: P } = (0, N.t4)((e) => ({ setReadySlideId: e.setReadySlideId })),
        j = a.find((e) => e.key === t);
    s.useEffect(() => {
        f(null);
    }, [t, f]),
        d()(null != j, "Unknown step for current payment flow (PaymentModalStep): step=%s, flow=%s", t, x);
    let y = j?.options?.hideSlider ?? !1,
        R = j?.options?.hideDefaultModalBody ?? !1,
        I = j?.options?.sliderBodyClassName,
        _ = (0, p.D7)({ location: "PaymentModalStep" }),
        M = s.useMemo(() => _ && t === E.pn.REVIEW, [_, t]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (j?.options?.renderHeader ?? !0) ? l : null,
            j.renderStep(n),
            null == t || y
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          R
                              ? null
                              : (0, r.jsx)(c.c, {
                                    children: (0, r.jsx)(u.t, {
                                        shouldUseMediaQueriesForSizing: !0,
                                        activeSlide: t,
                                        centered: !1,
                                        onSlideReady: (e) => P(e),
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
