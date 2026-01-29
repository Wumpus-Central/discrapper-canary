n.d(t, {
    Ay: () => O,
    UX: () => A,
    dZ: () => v,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(284009),
    l = n.n(s),
    c = n(340287),
    u = n(158954),
    d = n(397927),
    f = n(608805),
    p = n(156312),
    _ = n(166532),
    h = n(788868),
    m = n(804686);

function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = E(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function y(e) {
    let { header: t, isLargeModal: n } = e;
    return {
        header: t,
        isLargeModal: n,
        stepProps: g(e, ["header", "isLargeModal"]),
    };
}
let b = (e) => {
    let { shouldUseUnifiedCheckoutModal: t, legacyModalClassName: n, children: i } = e,
        a = t ? u.cwr : d.$mQ;
    return (0, r.jsx)(a, {
        "data-migration-pending": !0,
        className: n,
        children: i,
    });
};

function O(e) {
    var t, n, a, s, c, u;
    let g,
        { header: E, isLargeModal: O, stepProps: v } = y(e),
        {
            step: A,
            stepConfigs: I,
            setBodyNode: S,
            setFooterNode: T,
            setModalOverlayNode: C,
            setReadySlideId: N,
            premiumBrandRefreshBackgroundClassName: w,
            selectedSkuId: R,
            isDisplayingWowMomentConfirmation: P,
            isGift: D,
        } = (0, p.P5)(),
        L = null != R && R in h.WN,
        x = I.find((e) => e.key === A);
    i.useEffect(() => {
        C(null);
    }, [A, C]),
        l()(null != x, "Unknown step for current payment flow.");
    let M = null != (t = null == x || null == (a = x.options) ? void 0 : a.hideSlider) && t,
        j = null == x || null == (s = x.options) ? void 0 : s.bodyClassName,
        k = null == x || null == (c = x.options) ? void 0 : c.sliderBodyClassName;
    void 0 !== O && O && (k = m.nS);
    let { enabled: U } = (0, f.T0)({
            location: "PaymentModalStep",
        }),
        G = U && A === _.pn.REVIEW;
    switch (A) {
        case _.pn.ADD_PAYMENT_STEPS:
            g = 408;
            break;
        case _.pn.REVIEW:
            g = 392;
            break;
        case _.pn.PLAN_SELECT:
            L && !D && (g = "100%");
    }
    return (
        G && (g = "100%"),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null == (n = null == x || null == (u = x.options) ? void 0 : u.renderHeader) || n ? E : null,
                x.renderStep(v),
                null == A || M
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(b, {
                                  shouldUseUnifiedCheckoutModal: G,
                                  legacyModalClassName: o()(j, m.rf, w, {
                                      [m.VR]: A === _.pn.REVIEW,
                                      [m.qO]: A === _.pn.ADD_PAYMENT_STEPS && L,
                                  }),
                                  children: (0, r.jsx)(d.tN_, {
                                      activeSlide: A,
                                      centered: !1,
                                      onSlideReady: (e) => N(e),
                                      width: g,
                                      overflow: P ? "visible" : void 0,
                                      shouldUseMediaQueriesForSizing: !0,
                                      children: I.filter((e) => null != e.key).map((e) =>
                                          (0, r.jsx)(
                                              d.q7S,
                                              {
                                                  id: e.key,
                                                  children: (0, r.jsx)("form", {
                                                      className: o()(m.OO, k),
                                                      ref: (e) => {
                                                          S(e);
                                                      },
                                                      onSubmit: (e) => e.preventDefault(),
                                                  }),
                                              },
                                              e.key,
                                          ),
                                      ),
                                  }),
                              }),
                              (0, r.jsx)("div", {
                                  ref: (e) => T(e),
                              }),
                              (0, r.jsx)("div", {
                                  ref: (e) => {
                                      C(e);
                                  },
                              }),
                          ],
                      }),
            ],
        })
    );
}

function v(e) {
    let { children: t } = e,
        { bodyNode: n } = (0, p.P5)();
    return null == n ? null : c.createPortal(t, n);
}

function A(e) {
    let { children: t } = e,
        { footerNode: n } = (0, p.P5)();
    return null == n ? null : c.createPortal(t, n);
}
