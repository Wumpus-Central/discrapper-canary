n.d(t, { Ay: () => S, UX: () => I, dZ: () => y });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(333007),
    o = n(430993),
    u = n(17928),
    c = n(430690),
    d = n(529427),
    m = n(883645),
    p = n(601194),
    C = n(721836),
    h = n(573359),
    f = n(166532),
    E = n(819252);
function S(e) {
    let {
            header: t,
            disableDefaultSlideTransformStyling: n,
            stepProps: r,
        } = (function (e) {
            let { header: t, disableDefaultSlideTransformStyling: n, ...l } = e;
            return { header: t, disableDefaultSlideTransformStyling: n, stepProps: l };
        })(e),
        { step: s, stepConfigs: S } = (0, m.Ay)(),
        { setBodyNode: y, setFooterNode: I, setModalOverlayNode: A } = (0, p.Gm)(),
        g = (0, u.bG)([h.A], () => h.A.isDisplayingWowMomentConfirmation),
        { setReadySlideId: P, unifiedCheckoutFlow: v } = (0, C.t4)((e) => ({
            setReadySlideId: e.setReadySlideId,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
        })),
        _ = S.find((e) => e.key === s);
    if (
        (i.useEffect(() => {
            A(null);
        }, [s, A]),
        null == _)
    )
        throw new d.vd({
            message: "Unknown step for current payment flow (PaymentModalStep)",
            extraSentryInformation: { stepConfig: _, step: s, unifiedCheckoutFlow: v, stepConfigs: S },
        });
    let x = _?.options?.hideSlider ?? !1,
        T = _?.options?.hideDefaultModalBody ?? !1,
        N = _?.options?.sliderBodyClassName,
        b = s === f.pn.REVIEW,
        j = i.useCallback(
            (e, t) => {
                t === s && y(e);
            },
            [s, y],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (_?.options?.renderHeader ?? !0) ? t : null,
            _.renderStep(r),
            null == s || x
                ? null
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          T
                              ? null
                              : (0, l.jsx)(o.c, {
                                    children: (0, l.jsx)(c.t, {
                                        shouldUseMediaQueriesForSizing: !0,
                                        activeSlide: s,
                                        centered: !1,
                                        onSlideReady: (e) => P(e),
                                        width: "100%",
                                        disableDefaultTransformStyling: b || n,
                                        overflow: g ? "visible" : void 0,
                                        children: S.filter((e) => null != e.key).map((e) =>
                                            (0, l.jsx)(
                                                c.q,
                                                {
                                                    id: e.key,
                                                    children: (0, l.jsx)("form", {
                                                        className: a()(E.OO, { [E.Wq]: b }, N),
                                                        ref: (t) => j(t, e.key),
                                                        onSubmit: (e) => e.preventDefault(),
                                                    }),
                                                },
                                                e.key,
                                            ),
                                        ),
                                    }),
                                }),
                          (0, l.jsx)("div", { ref: (e) => I(e) }),
                          (0, l.jsx)("div", {
                              ref: (e) => {
                                  A(e);
                              },
                          }),
                      ],
                  }),
        ],
    });
}
function y(e) {
    let { children: t } = e,
        { bodyNode: n } = (0, p.Gm)();
    return null == n ? null : s.createPortal(t, n);
}
function I(e) {
    let { children: t } = e,
        { footerNode: n } = (0, p.Gm)();
    return null == n ? null : s.createPortal(t, n);
}
