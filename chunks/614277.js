t.d(n, {
    C3: function () {
        return _;
    },
    O3: function () {
        return S;
    },
    ZP: function () {
        return m;
    }
});
var o = t(200651),
    l = t(192379),
    i = t(120356),
    r = t.n(i),
    a = t(512722),
    s = t.n(a),
    c = t(995295),
    u = t(481060),
    d = t(563132),
    p = t(409813),
    f = t(631232);
function m(e) {
    var n, t, i, a, c, m;
    let {
            header: _,
            isLargeModal: S,
            isDynamicModal: E,
            stepProps: g
        } = (function (e) {
            let { header: n, isLargeModal: t, isDynamicModal: o, ...l } = e;
            return {
                header: n,
                isLargeModal: t,
                isDynamicModal: o,
                stepProps: l
            };
        })(e),
        { step: h, stepConfigs: P, setBodyNode: T, setFooterNode: I, setModalOverlayNode: b, setReadySlideId: x } = (0, d.usePaymentContext)(),
        C = P.find((e) => e.key === h);
    l.useEffect(() => {
        b(null);
    }, [h, b]),
        s()(null != C, 'Unknown step for current payment flow.');
    let y = null !== (c = null == C ? void 0 : null === (n = C.options) || void 0 === n ? void 0 : n.hideSlider) && void 0 !== c && c,
        N = null == C ? void 0 : null === (t = C.options) || void 0 === t ? void 0 : t.bodyClassName,
        A = null == C ? void 0 : null === (i = C.options) || void 0 === i ? void 0 : i.sliderBodyClassName;
    return (
        void 0 !== S && S ? (A = f.sliderBodyLarge) : E && (A = f.sliderBodyDynamic),
        (0, o.jsxs)(o.Fragment, {
            children: [
                null === (m = null == C ? void 0 : null === (a = C.options) || void 0 === a ? void 0 : a.renderHeader) || void 0 === m || m ? _ : null,
                C.renderStep(g),
                null == h || y
                    ? null
                    : (0, o.jsxs)(o.Fragment, {
                          children: [
                              (0, o.jsx)(u.ModalContent, {
                                  className: r()(N, f.body, {
                                      [f.reviewStep]: h === p.h8.REVIEW,
                                      [f.addPaymentSteps]: h === p.h8.ADD_PAYMENT_STEPS
                                  }),
                                  children: (0, o.jsx)(u.Slides, {
                                      activeSlide: h,
                                      centered: !1,
                                      onSlideReady: (e) => x(e),
                                      width: h === p.h8.ADD_PAYMENT_STEPS ? '100%' : void 0,
                                      children: P.filter((e) => null != e.key).map((e) =>
                                          (0, o.jsx)(
                                              u.Slide,
                                              {
                                                  id: e.key,
                                                  children: (0, o.jsx)('form', {
                                                      className: r()(f.sliderBody, A),
                                                      ref: (e) => T(e),
                                                      onSubmit: (e) => e.preventDefault()
                                                  })
                                              },
                                              e.key
                                          )
                                      )
                                  })
                              }),
                              (0, o.jsx)('div', { ref: (e) => I(e) }),
                              (0, o.jsx)('div', { ref: (e) => b(e) })
                          ]
                      })
            ]
        })
    );
}
function _(e) {
    let { children: n } = e,
        { bodyNode: t } = (0, d.usePaymentContext)();
    return null == t ? null : c.createPortal(n, t);
}
function S(e) {
    let { children: n } = e,
        { footerNode: t } = (0, d.usePaymentContext)();
    return null == t ? null : c.createPortal(n, t);
}
