n.d(t, { Z: () => N }), n(361932), n(187205);
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(304789),
    s = n(481060),
    l = n(410030),
    c = n(563132),
    u = n(409813),
    d = n(614223),
    f = n(493572),
    _ = n(756896),
    p = n(589072),
    h = n(104494),
    m = n(573702),
    g = n(474936),
    E = n(88784),
    b = n(236078),
    y = n(278345),
    O = n(895601),
    v = n(381126),
    I = n(997892),
    T = n(234286);
function S(e) {
    let { isOneStepCheckout: t, headerText: n, step: i, filteredBreadcrumbs: o } = e;
    if (t)
        return (0, r.jsx)("div", {
            className: E.oneStepCheckoutTextWrapper,
            children: (0, r.jsx)(s.X6q, {
                variant: "heading-md/bold",
                children: n,
            }),
        });
    let a = o.length > 1;
    return (0, r.jsxs)("div", {
        className: E.headerTextWrapper,
        children: [
            (0, r.jsx)(s.Text, {
                variant: "text-lg/semibold",
                children: n,
            }),
            a &&
                (0, r.jsx)(f.Z, {
                    activeId: i,
                    breadcrumbs: o,
                }),
        ],
    });
}
function A(e) {
    let { isTier2: t } = e,
        n = t ? O : b,
        i = t ? v : y;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("img", {
                src: n,
                alt: "",
                className: E.bigCloud,
            }),
            (0, r.jsx)("img", {
                src: i,
                alt: "",
                className: E.mediumCloud,
            }),
            (0, r.jsx)("img", {
                src: i,
                alt: "",
                className: E.smallCloud,
            }),
        ],
    });
}
let N = function (e) {
    var t, n, i;
    let {
            hideCloseButton: f = !1,
            hideCloseOnFullScreen: b,
            onClose: y,
            upgradeToPremiumType: O,
            isEligibleForTrial: v = !1,
            showTrialBadge: N = !1,
            showDiscountBadge: C = !1,
        } = e,
        R = (0, s.apv)((0, l.ZP)()),
        P = O === g.p9.TIER_2,
        w = (0, d.Fv)(v),
        D = (0, h.Ng)(),
        L = null == D || null == (t = D.discount) ? void 0 : t.amount,
        x = P ? T : I,
        M = P ? p.Z : _.Z,
        {
            step: j,
            breadcrumbs: k,
            startedPaymentFlowWithPaymentSourcesRef: U,
            isDisplayingWowMomentConfirmation: G,
        } = (0, c.JL)();
    if (null == k || 0 === k.length) return null;
    let B = k.flatMap((e) => {
        let t = e.useBreadcrumbLabel(v),
            n = e.sectionHeaderText;
        return null != t
            ? {
                  id: e.id,
                  label: t,
                  sectionHeaderText: n,
              }
            : [];
    });
    if (0 === B.length) return null;
    let Z = (B = B.filter((e) => {
            let t = e.id !== u.h8.ADD_PAYMENT_STEPS,
                n = e.id === u.h8.ADD_PAYMENT_STEPS && !U.current;
            return !v || (v && (t || n));
        })).find((e) => e.id === j),
        F =
            null != (i = null == Z || null == (n = Z.sectionHeaderText) ? void 0 : n.call(Z))
                ? i
                : null == Z
                  ? void 0
                  : Z.label,
        V = null != F && null != j,
        H = w && V && j === u.h8.REVIEW,
        Y = P ? "nitro-pink" : "nitro-green";
    return G
        ? (0, r.jsx)("div", {
              className: E.container,
              children: (0, r.jsx)(a.$, {
                  color: Y,
                  className: E.headerContainer,
              }),
          })
        : (0, r.jsxs)("div", {
              className: E.container,
              children: [
                  (0, r.jsxs)(a.$, {
                      color: Y,
                      className: o()(E.headerContainer, { [E.containerBottomPadding]: !V }),
                      children: [
                          (0, r.jsx)(A, { isTier2: P }),
                          !f &&
                              (0, r.jsx)(s.olH, {
                                  "data-migration-pending": !0,
                                  hideOnFullscreen: b,
                                  onClick: y,
                                  className: E.closeButtonPosition,
                              }),
                          (0, r.jsx)("img", {
                              src: x,
                              alt: "",
                              className: H ? E.bigWumpus : E.wumpus,
                          }),
                          (0, r.jsx)("div", {
                              className: E.textContainer,
                              children: (0, r.jsx)(M, {
                                  color: R ? "black" : "white",
                                  className: E.wordmark,
                              }),
                          }),
                      ],
                  }),
                  (N || C) && (0, r.jsx)(m.Z, { discountAmount: L }),
                  V &&
                      (0, r.jsx)(S, {
                          isOneStepCheckout: w,
                          headerText: F,
                          step: j,
                          filteredBreadcrumbs: B,
                      }),
                  H &&
                      (0, r.jsx)("div", {
                          className: E.bodyGradientContainer,
                          children: (0, r.jsx)("div", { className: E.bodyGradient }),
                      }),
              ],
          });
};
