n.d(t, {
    A: () => T,
}),
    n(114821),
    n(339614);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(156312),
    l = n(166532),
    c = n(800471),
    u = n(109913),
    d = n(422936),
    f = n(179775),
    p = n(788868),
    _ = n(88001),
    h = n(985018),
    m = n(763979),
    g = n(944496),
    E = n(51148),
    b = n(232266),
    y = n(243002),
    O = n(303930),
    A = n(241988);

function v(e) {
    let { isOneStepCheckout: t, headerText: n, step: i, filteredBreadcrumbs: a } = e;
    if (t)
        return (0, r.jsx)("div", {
            className: m.r9,
            children: (0, r.jsx)(s.Heading, {
                variant: "heading-md/bold",
                children: n,
            }),
        });
    let o = a.length > 1;
    return (0, r.jsxs)("div", {
        className: m.go,
        children: [
            (0, r.jsx)(s.Text, {
                variant: "text-lg/semibold",
                children: n,
            }),
            o &&
                (0, r.jsx)(u.A, {
                    activeId: i,
                    breadcrumbs: a,
                }),
        ],
    });
}

function S(e) {
    let { isTier2: t } = e,
        n = t ? b : g,
        i = t ? y : E;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("img", {
                src: n,
                alt: "",
                className: m.mR,
            }),
            (0, r.jsx)("img", {
                src: i,
                alt: "",
                className: m.dz,
            }),
            (0, r.jsx)("img", {
                src: i,
                alt: "",
                className: m.lM,
            }),
        ],
    });
}
let I = (e, t) => (t ? (0, _.DP)() : e ? h.intl.string(h.t.lG6a5x) : h.intl.string(h.t["t9uG/o"])),
    T = function (e) {
        var t, n, i;
        let {
                hideCloseButton: u = !1,
                hideCloseOnFullScreen: _,
                onClose: h,
                upgradeToPremiumType: g,
                isEligibleForTrial: E = !1,
                showTrialBadge: b = !1,
                showDiscountBadge: y = !1,
                isPremiumGroupPurchase: T = !1,
            } = e,
            C = g === p.PremiumTypes.TIER_2,
            N = (0, c.lp)(E),
            R = (0, d.O)(),
            w = null == R || null == (n = R.discount) ? void 0 : n.amount,
            P = C ? A : O,
            {
                step: D,
                breadcrumbs: x,
                startedPaymentFlowWithPaymentSourcesRef: L,
                isDisplayingWowMomentConfirmation: j,
            } = (0, o.P5)();
        if (null == x || 0 === x.length) return null;
        let M = x.flatMap((e) => {
            let t = e.useBreadcrumbLabel(E),
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
                if (T && e.id === l.pn.PLAN_SELECT) return !1;
                let t = e.id !== l.pn.ADD_PAYMENT_STEPS,
                    n = e.id === l.pn.ADD_PAYMENT_STEPS && !L.current;
                return !E || (E && (t || n));
            })).find((e) => e.id === D),
            U =
                null != (t = null == k || null == (i = k.sectionHeaderText) ? void 0 : i.call(k))
                    ? t
                    : null == k
                      ? void 0
                      : k.label,
            G = null != U && null != D,
            V = N && G && D === l.pn.REVIEW,
            F = C ? "nitro-pink" : "nitro-green",
            B = I(C, T);
        return j
            ? (0, r.jsx)("div", {
                  className: m.kL,
                  children: (0, r.jsx)(s.hLv, {
                      color: F,
                      className: m.N1,
                  }),
              })
            : (0, r.jsxs)("div", {
                  className: m.kL,
                  children: [
                      (0, r.jsxs)(s.hLv, {
                          color: F,
                          className: a()(m.N1, {
                              [m.s1]: !G,
                          }),
                          children: [
                              (0, r.jsx)(S, {
                                  isTier2: C,
                              }),
                              !u &&
                                  (0, r.jsx)(s.s_y, {
                                      "data-migration-pending": !0,
                                      hideOnFullscreen: _,
                                      onClick: h,
                                      className: m.Ep,
                                  }),
                              (0, r.jsx)("img", {
                                  src: P,
                                  alt: "",
                                  className: V ? m.i_ : m.kX,
                              }),
                              (0, r.jsxs)("div", {
                                  className: m.FS,
                                  children: [
                                      T &&
                                          (0, r.jsx)("div", {
                                              className: m.$N,
                                              children: (0, r.jsx)(s.Exy, {
                                                  type: "beta",
                                                  variant: "expressive",
                                              }),
                                          }),
                                      (0, r.jsx)(s.Text, {
                                          variant: "display-md",
                                          color: "text-strong",
                                          className: m.cf,
                                          children: B,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      (b || y) &&
                          (0, r.jsx)(f.A, {
                              discountAmount: w,
                          }),
                      G &&
                          (0, r.jsx)(v, {
                              isOneStepCheckout: N,
                              headerText: U,
                              step: D,
                              filteredBreadcrumbs: M,
                          }),
                      V &&
                          (0, r.jsx)("div", {
                              className: m.uo,
                              children: (0, r.jsx)("div", {
                                  className: m.dQ,
                              }),
                          }),
                  ],
              });
    };
