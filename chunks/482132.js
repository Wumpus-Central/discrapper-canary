s.d(t, { Ay: () => S, UX: () => v, dZ: () => N });
var i = s(627968),
    n = s(64700),
    a = s(503698),
    l = s.n(a),
    r = s(284009),
    o = s.n(r),
    p = s(340287),
    d = s(430993),
    c = s(430690),
    h = s(742810),
    u = s(156312),
    m = s(166532),
    g = s(615310),
    A = s(370353);
function S(e) {
    let { header: t, stepProps: s } = (function (e) {
            let { header: t, ...s } = e;
            return { header: t, stepProps: s };
        })(e),
        { step: a, stepConfigs: r } = (0, g.Ay)(),
        {
            setBodyNode: p,
            setFooterNode: S,
            setModalOverlayNode: N,
            setReadySlideId: v,
            isDisplayingWowMomentConfirmation: f,
            unifiedCheckoutFlow: E,
        } = (0, u.P5)(),
        x = r.find((e) => e.key === a);
    n.useEffect(() => {
        N(null);
    }, [a, N]),
        o()(null != x, "Unknown step for current payment flow (PaymentModalStep): step=%s, flow=%s", a, E);
    let j = x?.options?.hideSlider ?? !1,
        C = x?.options?.hideDefaultModalBody ?? !1,
        R = x?.options?.sliderBodyClassName,
        P = (0, h.D7)({ location: "PaymentModalStep" }),
        D = n.useMemo(() => P && a === m.pn.REVIEW, [P, a]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (x?.options?.renderHeader ?? !0) ? t : null,
            x.renderStep(s),
            null == a || j
                ? null
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          C
                              ? null
                              : (0, i.jsx)(d.c, {
                                    children: (0, i.jsx)(c.t, {
                                        shouldUseMediaQueriesForSizing: !0,
                                        activeSlide: a,
                                        centered: !1,
                                        onSlideReady: (e) => v(e),
                                        width: "100%",
                                        disableDefaultTransformStyling: D,
                                        overflow: f ? "visible" : void 0,
                                        children: r
                                            .filter((e) => null != e.key)
                                            .map((e) =>
                                                (0, i.jsx)(
                                                    c.q,
                                                    {
                                                        id: e.key,
                                                        children: (0, i.jsx)("form", {
                                                            className: l()(A.OO, { [A.Wq]: D }, R),
                                                            ref: (e) => {
                                                                p(e);
                                                            },
                                                            onSubmit: (e) => e.preventDefault(),
                                                        }),
                                                    },
                                                    e.key,
                                                ),
                                            ),
                                    }),
                                }),
                          (0, i.jsx)("div", { ref: (e) => S(e) }),
                          (0, i.jsx)("div", {
                              ref: (e) => {
                                  N(e);
                              },
                          }),
                      ],
                  }),
        ],
    });
}
function N(e) {
    let { children: t } = e,
        { bodyNode: s } = (0, u.P5)();
    return null == s ? null : p.createPortal(t, s);
}
function v(e) {
    let { children: t } = e,
        { footerNode: s } = (0, u.P5)();
    return null == s ? null : p.createPortal(t, s);
}
