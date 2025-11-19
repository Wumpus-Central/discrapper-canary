n.d(t, { Z: () => T }), n(361932), n(187205);
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
    _ = n(474936),
    p = n(388032),
    h = n(108626),
    m = n(236078),
    g = n(278345),
    E = n(895601),
    b = n(381126),
    y = n(997892),
    O = n(234286);
function v(e) {
    let { isOneStepCheckout: t, headerText: n, step: i, filteredBreadcrumbs: a } = e;
    if (t)
        return (0, r.jsx)("div", {
            className: h.oneStepCheckoutTextWrapper,
            children: (0, r.jsx)(o.Heading, {
                variant: "heading-md/bold",
                children: n,
            }),
        });
    let s = a.length > 1;
    return (0, r.jsxs)("div", {
        className: h.headerTextWrapper,
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
function I(e) {
    let { isTier2: t } = e,
        n = t ? E : m,
        i = t ? b : g;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("img", {
                src: n,
                alt: "",
                className: h.bigCloud,
            }),
            (0, r.jsx)("img", {
                src: i,
                alt: "",
                className: h.mediumCloud,
            }),
            (0, r.jsx)("img", {
                src: i,
                alt: "",
                className: h.smallCloud,
            }),
        ],
    });
}
let T = function (e) {
    var t, n, i;
    let {
            hideCloseButton: u = !1,
            hideCloseOnFullScreen: m,
            onClose: g,
            upgradeToPremiumType: E,
            isEligibleForTrial: b = !1,
            showTrialBadge: T = !1,
            showDiscountBadge: S = !1,
        } = e,
        A = E === _.PremiumTypes.TIER_2,
        C = (0, c.Fv)(b),
        N = (0, d.N)(),
        R = null == N || null == (t = N.discount) ? void 0 : t.amount,
        P = A ? O : y,
        {
            step: D,
            breadcrumbs: w,
            startedPaymentFlowWithPaymentSourcesRef: L,
            isDisplayingWowMomentConfirmation: x,
        } = (0, s.JL)();
    if (null == w || 0 === w.length) return null;
    let M = w.flatMap((e) => {
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
    if (0 === M.length) return null;
    let k = (M = M.filter((e) => {
            let t = e.id !== l.h8.ADD_PAYMENT_STEPS,
                n = e.id === l.h8.ADD_PAYMENT_STEPS && !L.current;
            return !b || (b && (t || n));
        })).find((e) => e.id === D),
        j =
            null != (i = null == k || null == (n = k.sectionHeaderText) ? void 0 : n.call(k))
                ? i
                : null == k
                  ? void 0
                  : k.label,
        U = null != j && null != D,
        G = C && U && D === l.h8.REVIEW,
        B = A ? "nitro-pink" : "nitro-green",
        Z = A ? p.intl.string(p.t.lG6a5x) : p.intl.string(p.t["t9uG/o"]);
    return x
        ? (0, r.jsx)("div", {
              className: h.container,
              children: (0, r.jsx)(o.$1m, {
                  color: B,
                  className: h.headerContainer,
              }),
          })
        : (0, r.jsxs)("div", {
              className: h.container,
              children: [
                  (0, r.jsxs)(o.$1m, {
                      color: B,
                      className: a()(h.headerContainer, { [h.containerBottomPadding]: !U }),
                      children: [
                          (0, r.jsx)(I, { isTier2: A }),
                          !u &&
                              (0, r.jsx)(o.olH, {
                                  "data-migration-pending": !0,
                                  hideOnFullscreen: m,
                                  onClick: g,
                                  className: h.closeButtonPosition,
                              }),
                          (0, r.jsx)("img", {
                              src: P,
                              alt: "",
                              className: G ? h.bigWumpus : h.wumpus,
                          }),
                          (0, r.jsx)("div", {
                              className: h.textContainer,
                              children: (0, r.jsx)(o.Text, {
                                  variant: "display-md",
                                  color: "header-primary",
                                  className: h.nitroText,
                                  children: Z,
                              }),
                          }),
                      ],
                  }),
                  (T || S) && (0, r.jsx)(f.Z, { discountAmount: R }),
                  U &&
                      (0, r.jsx)(v, {
                          isOneStepCheckout: C,
                          headerText: j,
                          step: D,
                          filteredBreadcrumbs: M,
                      }),
                  G &&
                      (0, r.jsx)("div", {
                          className: h.bodyGradientContainer,
                          children: (0, r.jsx)("div", { className: h.bodyGradient }),
                      }),
              ],
          });
};
