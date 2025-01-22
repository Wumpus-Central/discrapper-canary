r.d(n, {
    C3: function () {
        return g;
    },
    O3: function () {
        return E;
    },
    ZP: function () {
        return m;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(512722),
    u = r.n(l),
    c = r(995295),
    d = r(481060),
    f = r(563132),
    p = r(409813),
    h = r(135970);
function _(e) {
    let { header: n, isLargeModal: r, isDynamicModal: i, ...a } = e;
    return {
        header: n,
        isLargeModal: r,
        isDynamicModal: i,
        stepProps: a
    };
}
function m(e) {
    var n, r, o, l, c, m;
    let { header: g, isLargeModal: E, isDynamicModal: v, stepProps: y } = _(e),
        { step: b, stepConfigs: I, setBodyNode: T, setFooterNode: S, setModalOverlayNode: A, setReadySlideId: C } = (0, f.usePaymentContext)(),
        N = I.find((e) => e.key === b);
    a.useEffect(() => {
        A(null);
    }, [b, A]),
        u()(null != N, 'Unknown step for current payment flow.');
    let R = null !== (c = null == N ? void 0 : null === (n = N.options) || void 0 === n ? void 0 : n.hideSlider) && void 0 !== c && c,
        O = null == N ? void 0 : null === (r = N.options) || void 0 === r ? void 0 : r.bodyClassName,
        D = null == N ? void 0 : null === (o = N.options) || void 0 === o ? void 0 : o.sliderBodyClassName;
    return (
        void 0 !== E && E ? (D = h.sliderBodyLarge) : v && (D = h.sliderBodyDynamic),
        (0, i.jsxs)(i.Fragment, {
            children: [
                null === (m = null == N ? void 0 : null === (l = N.options) || void 0 === l ? void 0 : l.renderHeader) || void 0 === m || m ? g : null,
                N.renderStep(y),
                null == b || R
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(d.ModalContent, {
                                  className: s()(O, h.body, {
                                      [h.reviewStep]: b === p.h8.REVIEW,
                                      [h.addPaymentSteps]: b === p.h8.ADD_PAYMENT_STEPS
                                  }),
                                  children: (0, i.jsx)(d.Slides, {
                                      activeSlide: b,
                                      centered: !1,
                                      onSlideReady: (e) => C(e),
                                      width: b === p.h8.ADD_PAYMENT_STEPS ? 408 : void 0,
                                      children: I.filter((e) => null != e.key).map((e) =>
                                          (0, i.jsx)(
                                              d.Slide,
                                              {
                                                  id: e.key,
                                                  children: (0, i.jsx)('form', {
                                                      className: s()(h.sliderBody, D),
                                                      ref: (e) => T(e),
                                                      onSubmit: (e) => e.preventDefault()
                                                  })
                                              },
                                              e.key
                                          )
                                      )
                                  })
                              }),
                              (0, i.jsx)('div', { ref: (e) => S(e) }),
                              (0, i.jsx)('div', { ref: (e) => A(e) })
                          ]
                      })
            ]
        })
    );
}
function g(e) {
    let { children: n } = e,
        { bodyNode: r } = (0, f.usePaymentContext)();
    return null == r ? null : c.createPortal(n, r);
}
function E(e) {
    let { children: n } = e,
        { footerNode: r } = (0, f.usePaymentContext)();
    return null == r ? null : c.createPortal(n, r);
}
