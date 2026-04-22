n.d(l, { Ay: () => E, UX: () => S, dZ: () => j });
var r = n(627968),
    s = n(64700),
    t = n(503698),
    i = n.n(t),
    a = n(284009),
    d = n.n(a),
    c = n(340287),
    o = n(430993),
    u = n(430690),
    p = n(742810),
    m = n(156312),
    N = n(166532),
    A = n(615310),
    h = n(370353);
function E(e) {
    let { header: l, stepProps: n } = (function (e) {
            let { header: l, ...n } = e;
            return { header: l, stepProps: n };
        })(e),
        { step: t, stepConfigs: a } = (0, A.Ay)(),
        {
            setBodyNode: c,
            setFooterNode: E,
            setModalOverlayNode: j,
            setReadySlideId: S,
            isDisplayingWowMomentConfirmation: C,
            unifiedCheckoutFlow: f,
        } = (0, m.P5)(),
        x = a.find((e) => e.key === t);
    s.useEffect(() => {
        j(null);
    }, [t, j]),
        d()(null != x, "Unknown step for current payment flow (PaymentModalStep): step=%s, flow=%s", t, f);
    let P = x?.options?.hideSlider ?? !1,
        T = x?.options?.hideDefaultModalBody ?? !1,
        v = x?.options?.sliderBodyClassName,
        y = (0, p.D7)({ location: "PaymentModalStep" }),
        D = s.useMemo(() => y && t === N.pn.REVIEW, [y, t]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (x?.options?.renderHeader ?? !0) ? l : null,
            x.renderStep(n),
            null == t || P
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          T
                              ? null
                              : (0, r.jsx)(o.c, {
                                    children: (0, r.jsx)(u.t, {
                                        shouldUseMediaQueriesForSizing: !0,
                                        activeSlide: t,
                                        centered: !1,
                                        onSlideReady: (e) => S(e),
                                        width: "100%",
                                        disableDefaultTransformStyling: D,
                                        overflow: C ? "visible" : void 0,
                                        children: a
                                            .filter((e) => null != e.key)
                                            .map((e) =>
                                                (0, r.jsx)(
                                                    u.q,
                                                    {
                                                        id: e.key,
                                                        children: (0, r.jsx)("form", {
                                                            className: i()(h.OO, { [h.Wq]: D }, v),
                                                            ref: (e) => {
                                                                c(e);
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
                                  j(e);
                              },
                          }),
                      ],
                  }),
        ],
    });
}
function j(e) {
    let { children: l } = e,
        { bodyNode: n } = (0, m.P5)();
    return null == n ? null : c.createPortal(l, n);
}
function S(e) {
    let { children: l } = e,
        { footerNode: n } = (0, m.P5)();
    return null == n ? null : c.createPortal(l, n);
}
