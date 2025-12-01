n.d(t, { Z: () => I }), n(361932), n(187205);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(563132),
    l = n(409813),
    c = n(614223),
    u = n(493572),
    d = n(622909),
    f = n(573702),
    p = n(474936),
    _ = n(388032),
    m = n(108626),
    h = n(236078),
    g = n(278345),
    E = n(895601),
    b = n(381126),
    y = n(997892),
    O = n(234286);
function v(e) {
    let { isOneStepCheckout: t, headerText: n, step: i, filteredBreadcrumbs: a } = e;
    if (t)
        return (0, r.jsx)("div", {
            className: m.oneStepCheckoutTextWrapper,
            children: (0, r.jsx)(o.Heading, {
                variant: "heading-md/bold",
                children: n,
            }),
        });
    let s = a.length > 1;
    return (0, r.jsxs)("div", {
        className: m.headerTextWrapper,
        children: [
            (0, r.jsx)(o.Text, {
                variant: "text-lg/semibold",
                children: n,
            }),
            s &&
                (0, r.jsx)(u.Z, {
                    activeId: i,
                    breadcrumbs: a,
                }),
        ],
    });
}
function S(e) {
    let { isTier2: t } = e,
        n = t ? E : h,
        i = t ? b : g;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("img", {
                src: n,
                alt: "",
                className: m.bigCloud,
            }),
            (0, r.jsx)("img", {
                src: i,
                alt: "",
                className: m.mediumCloud,
            }),
            (0, r.jsx)("img", {
                src: i,
                alt: "",
                className: m.smallCloud,
            }),
        ],
    });
}
let I = function (e) {
    var t, n, i;
    let {
            hideCloseButton: u = !1,
            hideCloseOnFullScreen: h,
            onClose: g,
            upgradeToPremiumType: E,
            isEligibleForTrial: b = !1,
            showTrialBadge: I = !1,
            showDiscountBadge: T = !1,
        } = e,
        A = E === p.PremiumTypes.TIER_2,
        C = (0, c.Fv)(b),
        N = (0, d.N)(),
        P = null == N || null == (t = N.discount) ? void 0 : t.amount,
        R = A ? O : y,
        {
            step: w,
            breadcrumbs: D,
            startedPaymentFlowWithPaymentSourcesRef: x,
            isDisplayingWowMomentConfirmation: L,
        } = (0, s.JL)();
    if (null == D || 0 === D.length) return null;
    let j = D.flatMap((e) => {
        let t = e.useBreadcrumbLabel(b),
            n = e.sectionHeaderText;
        return null != t
            ? {
                  id: e.id,
                  label: t,
                  sectionHeaderText: n,
              }
            : [];
    });
    if (0 === j.length) return null;
    let M = (j = j.filter((e) => {
            let t = e.id !== l.h8.ADD_PAYMENT_STEPS,
                n = e.id === l.h8.ADD_PAYMENT_STEPS && !x.current;
            return !b || (b && (t || n));
        })).find((e) => e.id === w),
        k =
            null != (i = null == M || null == (n = M.sectionHeaderText) ? void 0 : n.call(M))
                ? i
                : null == M
                  ? void 0
                  : M.label,
        U = null != k && null != w,
        G = C && U && w === l.h8.REVIEW,
        Z = A ? "nitro-pink" : "nitro-green",
        B = A ? _.intl.string(_.t.lG6a5x) : _.intl.string(_.t["t9uG/o"]);
    return L
        ? (0, r.jsx)("div", {
              className: m.container,
              children: (0, r.jsx)(o.$1m, {
                  color: Z,
                  className: m.headerContainer,
              }),
          })
        : (0, r.jsxs)("div", {
              className: m.container,
              children: [
                  (0, r.jsxs)(o.$1m, {
                      color: Z,
                      className: a()(m.headerContainer, { [m.containerBottomPadding]: !U }),
                      children: [
                          (0, r.jsx)(S, { isTier2: A }),
                          !u &&
                              (0, r.jsx)(o.olH, {
                                  "data-migration-pending": !0,
                                  hideOnFullscreen: h,
                                  onClick: g,
                                  className: m.closeButtonPosition,
                              }),
                          (0, r.jsx)("img", {
                              src: R,
                              alt: "",
                              className: G ? m.bigWumpus : m.wumpus,
                          }),
                          (0, r.jsx)("div", {
                              className: m.textContainer,
                              children: (0, r.jsx)(o.Text, {
                                  variant: "display-md",
                                  color: "header-primary",
                                  className: m.nitroText,
                                  children: B,
                              }),
                          }),
                      ],
                  }),
                  (I || T) && (0, r.jsx)(f.Z, { discountAmount: P }),
                  U &&
                      (0, r.jsx)(v, {
                          isOneStepCheckout: C,
                          headerText: k,
                          step: w,
                          filteredBreadcrumbs: j,
                      }),
                  G &&
                      (0, r.jsx)("div", {
                          className: m.bodyGradientContainer,
                          children: (0, r.jsx)("div", { className: m.bodyGradient }),
                      }),
              ],
          });
};
