n.d(t, { Z: () => A }), n(361932), n(187205);
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(410030),
    l = n(563132),
    c = n(409813),
    u = n(614223),
    d = n(493572),
    f = n(756896),
    _ = n(589072),
    p = n(104494),
    h = n(573702),
    m = n(474936),
    g = n(491881),
    E = n(236078),
    b = n(278345),
    y = n(895601),
    O = n(381126),
    v = n(997892),
    I = n(234286);
function T(e) {
    let { isOneStepCheckout: t, headerText: n, step: i, filteredBreadcrumbs: a } = e;
    if (t)
        return (0, r.jsx)("div", {
            className: g.oneStepCheckoutTextWrapper,
            children: (0, r.jsx)(o.X6q, {
                variant: "heading-md/bold",
                children: n,
            }),
        });
    let s = a.length > 1;
    return (0, r.jsxs)("div", {
        className: g.headerTextWrapper,
        children: [
            (0, r.jsx)(o.Text, {
                variant: "text-lg/semibold",
                children: n,
            }),
            s &&
                (0, r.jsx)(d.Z, {
                    activeId: i,
                    breadcrumbs: a,
                }),
        ],
    });
}
function S(e) {
    let { isTier2: t } = e,
        n = t ? y : E,
        i = t ? O : b;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("img", {
                src: n,
                alt: "",
                className: g.bigCloud,
            }),
            (0, r.jsx)("img", {
                src: i,
                alt: "",
                className: g.mediumCloud,
            }),
            (0, r.jsx)("img", {
                src: i,
                alt: "",
                className: g.smallCloud,
            }),
        ],
    });
}
let A = function (e) {
    var t, n, i;
    let {
            hideCloseButton: d = !1,
            hideCloseOnFullScreen: E,
            onClose: b,
            upgradeToPremiumType: y,
            isEligibleForTrial: O = !1,
            showTrialBadge: A = !1,
            showDiscountBadge: C = !1,
        } = e,
        N = (0, o.apv)((0, s.ZP)()),
        R = y === m.p9.TIER_2,
        P = (0, u.Fv)(O),
        w = (0, p.Ng)(),
        D = null == w || null == (t = w.discount) ? void 0 : t.amount,
        x = R ? I : v,
        L = R ? _.Z : f.Z,
        {
            step: j,
            breadcrumbs: M,
            startedPaymentFlowWithPaymentSourcesRef: k,
            isDisplayingWowMomentConfirmation: U,
        } = (0, l.JL)();
    if (null == M || 0 === M.length) return null;
    let G = M.flatMap((e) => {
        let t = e.useBreadcrumbLabel(O),
            n = e.sectionHeaderText;
        return null != t
            ? {
                  id: e.id,
                  label: t,
                  sectionHeaderText: n,
              }
            : [];
    });
    if (0 === G.length) return null;
    let B = (G = G.filter((e) => {
            let t = e.id !== c.h8.ADD_PAYMENT_STEPS,
                n = e.id === c.h8.ADD_PAYMENT_STEPS && !k.current;
            return !O || (O && (t || n));
        })).find((e) => e.id === j),
        Z =
            null != (i = null == B || null == (n = B.sectionHeaderText) ? void 0 : n.call(B))
                ? i
                : null == B
                  ? void 0
                  : B.label,
        F = null != Z && null != j,
        V = P && F && j === c.h8.REVIEW,
        H = R ? "nitro-pink" : "nitro-green";
    return U
        ? (0, r.jsx)("div", {
              className: g.container,
              children: (0, r.jsx)(o.$1m, {
                  color: H,
                  className: g.headerContainer,
              }),
          })
        : (0, r.jsxs)("div", {
              className: g.container,
              children: [
                  (0, r.jsxs)(o.$1m, {
                      color: H,
                      className: a()(g.headerContainer, { [g.containerBottomPadding]: !F }),
                      children: [
                          (0, r.jsx)(S, { isTier2: R }),
                          !d &&
                              (0, r.jsx)(o.olH, {
                                  "data-migration-pending": !0,
                                  hideOnFullscreen: E,
                                  onClick: b,
                                  className: g.closeButtonPosition,
                              }),
                          (0, r.jsx)("img", {
                              src: x,
                              alt: "",
                              className: V ? g.bigWumpus : g.wumpus,
                          }),
                          (0, r.jsx)("div", {
                              className: g.textContainer,
                              children: (0, r.jsx)(L, {
                                  color: N ? "black" : "white",
                                  className: g.wordmark,
                              }),
                          }),
                      ],
                  }),
                  (A || C) && (0, r.jsx)(h.Z, { discountAmount: D }),
                  F &&
                      (0, r.jsx)(T, {
                          isOneStepCheckout: P,
                          headerText: Z,
                          step: j,
                          filteredBreadcrumbs: G,
                      }),
                  V &&
                      (0, r.jsx)("div", {
                          className: g.bodyGradientContainer,
                          children: (0, r.jsx)("div", { className: g.bodyGradient }),
                      }),
              ],
          });
};
