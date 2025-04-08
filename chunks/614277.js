n.d(t, {
    C3: () => E,
    O3: () => b,
    ZP: () => g
});
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(512722),
    l = n.n(s),
    c = n(995295),
    u = n(481060),
    d = n(563132),
    f = n(409813),
    _ = n(249779);
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function m(e) {
    let { header: t, isLargeModal: n } = e;
    return {
        header: t,
        isLargeModal: n,
        stepProps: p(e, ['header', 'isLargeModal'])
    };
}
function g(e) {
    var t, n, o, s, c, p;
    let { header: h, isLargeModal: g, stepProps: E } = m(e),
        { step: b, stepConfigs: y, setBodyNode: v, setFooterNode: O, setModalOverlayNode: I, setReadySlideId: S } = (0, d.JL)(),
        T = y.find((e) => e.key === b);
    i.useEffect(() => {
        I(null);
    }, [b, I]),
        l()(null != T, 'Unknown step for current payment flow.');
    let N = null != (c = null == T || null == (t = T.options) ? void 0 : t.hideSlider) && c,
        A = null == T || null == (n = T.options) ? void 0 : n.bodyClassName,
        C = null == T || null == (o = T.options) ? void 0 : o.sliderBodyClassName;
    return (
        void 0 !== g && g && (C = _.sliderBodyLarge),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null == (p = null == T || null == (s = T.options) ? void 0 : s.renderHeader) || p ? h : null,
                T.renderStep(E),
                null == b || N
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(u.hzk, {
                                  className: a()(A, _.body, _.noRoundedCorners, { [_.reviewStep]: b === f.h8.REVIEW }),
                                  children: (0, r.jsx)(u.MyZ, {
                                      activeSlide: b,
                                      centered: !1,
                                      onSlideReady: (e) => S(e),
                                      width: b === f.h8.ADD_PAYMENT_STEPS ? 408 : void 0,
                                      children: y
                                          .filter((e) => null != e.key)
                                          .map((e) =>
                                              (0, r.jsx)(
                                                  u.Mi4,
                                                  {
                                                      id: e.key,
                                                      children: (0, r.jsx)('form', {
                                                          className: a()(_.sliderBody, C),
                                                          ref: (e) => {
                                                              v(e);
                                                          },
                                                          onSubmit: (e) => e.preventDefault()
                                                      })
                                                  },
                                                  e.key
                                              )
                                          )
                                  })
                              }),
                              (0, r.jsx)('div', { ref: (e) => O(e) }),
                              (0, r.jsx)('div', {
                                  ref: (e) => {
                                      I(e);
                                  }
                              })
                          ]
                      })
            ]
        })
    );
}
function E(e) {
    let { children: t } = e,
        { bodyNode: n } = (0, d.JL)();
    return null == n ? null : c.createPortal(t, n);
}
function b(e) {
    let { children: t } = e,
        { footerNode: n } = (0, d.JL)();
    return null == n ? null : c.createPortal(t, n);
}
