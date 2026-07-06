n.d(l, { Ay: () => C, UX: () => y, dZ: () => f });
var r = n(627968),
    t = n(64700),
    s = n(503698),
    i = n.n(s),
    a = n(284009),
    d = n.n(a),
    o = n(340287),
    c = n(430993),
    u = n(17928),
    m = n(430690),
    p = n(21713),
    N = n(650170),
    A = n(573359),
    E = n(166532),
    h = n(615310),
    S = n(370353);
function C(e) {
    let { header: l, stepProps: n } = (function (e) {
            let { header: l, ...n } = e;
            return { header: l, stepProps: n };
        })(e),
        { step: s, stepConfigs: a } = (0, h.Ay)(),
        { setBodyNode: o, setFooterNode: C, setModalOverlayNode: f } = (0, p.Gm)(),
        y = (0, u.bG)([A.A], () => A.A.isDisplayingWowMomentConfirmation),
        { setReadySlideId: _, unifiedCheckoutFlow: x } = (0, N.t4)((e) => ({
            setReadySlideId: e.setReadySlideId,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
        })),
        T = a.find((e) => e.key === s);
    t.useEffect(() => {
        f(null);
    }, [s, f]),
        d()(null != T, "Unknown step for current payment flow (PaymentModalStep): step=%s, flow=%s", s, x);
    let j = T?.options?.hideSlider ?? !1,
        P = T?.options?.hideDefaultModalBody ?? !1,
        R = T?.options?.sliderBodyClassName,
        I = s === E.pn.REVIEW,
        M = t.useCallback(
            (e, l) => {
                l === s && o(e);
            },
            [s, o],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (T?.options?.renderHeader ?? !0) ? l : null,
            T.renderStep(n),
            null == s || j
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          P
                              ? null
                              : (0, r.jsx)(c.c, {
                                    children: (0, r.jsx)(m.t, {
                                        shouldUseMediaQueriesForSizing: !0,
                                        activeSlide: s,
                                        centered: !1,
                                        onSlideReady: (e) => _(e),
                                        width: "100%",
                                        disableDefaultTransformStyling: I,
                                        overflow: y ? "visible" : void 0,
                                        children: a
                                            .filter((e) => null != e.key)
                                            .map((e) =>
                                                (0, r.jsx)(
                                                    m.q,
                                                    {
                                                        id: e.key,
                                                        children: (0, r.jsx)("form", {
                                                            className: i()(S.OO, { [S.Wq]: I }, R),
                                                            ref: (l) => M(l, e.key),
                                                            onSubmit: (e) => e.preventDefault(),
                                                        }),
                                                    },
                                                    e.key,
                                                ),
                                            ),
                                    }),
                                }),
                          (0, r.jsx)("div", { ref: (e) => C(e) }),
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
        { bodyNode: n } = (0, p.Gm)();
    return null == n ? null : o.createPortal(l, n);
}
function y(e) {
    let { children: l } = e,
        { footerNode: n } = (0, p.Gm)();
    return null == n ? null : o.createPortal(l, n);
}
