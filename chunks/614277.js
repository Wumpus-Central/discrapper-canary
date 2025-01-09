n.d(r, {
    C3: function () {
        return h;
    },
    O3: function () {
        return _;
    },
    ZP: function () {
        return f;
    }
});
var l = n(200651),
    o = n(192379),
    t = n(120356),
    s = n.n(t),
    a = n(512722),
    c = n.n(a),
    i = n(995295),
    d = n(481060),
    u = n(563132),
    p = n(409813),
    m = n(135970);
function f(e) {
    var r, n, t, a, i, f;
    let {
            header: h,
            isLargeModal: _,
            isDynamicModal: x,
            stepProps: N
        } = (function (e) {
            let { header: r, isLargeModal: n, isDynamicModal: l, ...o } = e;
            return {
                header: r,
                isLargeModal: n,
                isDynamicModal: l,
                stepProps: o
            };
        })(e),
        { step: y, stepConfigs: b, setBodyNode: v, setFooterNode: S, setModalOverlayNode: C, setReadySlideId: g } = (0, u.usePaymentContext)(),
        j = b.find((e) => e.key === y);
    o.useEffect(() => {
        C(null);
    }, [y, C]),
        c()(null != j, 'Unknown step for current payment flow.');
    let E = null !== (i = null == j ? void 0 : null === (r = j.options) || void 0 === r ? void 0 : r.hideSlider) && void 0 !== i && i,
        P = null == j ? void 0 : null === (n = j.options) || void 0 === n ? void 0 : n.bodyClassName,
        A = null == j ? void 0 : null === (t = j.options) || void 0 === t ? void 0 : t.sliderBodyClassName;
    return (
        void 0 !== _ && _ ? (A = m.sliderBodyLarge) : x && (A = m.sliderBodyDynamic),
        (0, l.jsxs)(l.Fragment, {
            children: [
                null === (f = null == j ? void 0 : null === (a = j.options) || void 0 === a ? void 0 : a.renderHeader) || void 0 === f || f ? h : null,
                j.renderStep(N),
                null == y || E
                    ? null
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(d.ModalContent, {
                                  className: s()(P, m.body, m.modalContentOverride, y === p.h8.ADD_PAYMENT_STEPS ? m.addPaymentSteps : void 0),
                                  children: (0, l.jsx)(d.Slides, {
                                      activeSlide: y,
                                      centered: !1,
                                      onSlideReady: (e) => g(e),
                                      children: b
                                          .filter((e) => null != e.key)
                                          .map((e) =>
                                              (0, l.jsx)(
                                                  d.Slide,
                                                  {
                                                      id: e.key,
                                                      children: (0, l.jsx)('form', {
                                                          className: s()(m.sliderBody, A),
                                                          ref: (e) => v(e),
                                                          onSubmit: (e) => e.preventDefault()
                                                      })
                                                  },
                                                  e.key
                                              )
                                          )
                                  })
                              }),
                              (0, l.jsx)('div', { ref: (e) => S(e) }),
                              (0, l.jsx)('div', { ref: (e) => C(e) })
                          ]
                      })
            ]
        })
    );
}
function h(e) {
    let { children: r } = e,
        { bodyNode: n } = (0, u.usePaymentContext)();
    return null == n ? null : i.createPortal(r, n);
}
function _(e) {
    let { children: r } = e,
        { footerNode: n } = (0, u.usePaymentContext)();
    return null == n ? null : i.createPortal(r, n);
}
