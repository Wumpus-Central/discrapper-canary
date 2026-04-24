s.d(n, { A: () => O });
var t = s(627968);
s(64700);
var r = s(503698),
    i = s.n(r),
    l = s(534514),
    a = s(834730),
    c = s(315629),
    u = s(935462),
    d = s(508770),
    o = s(742810),
    L = s(584160),
    C = s(156312),
    m = s(166532),
    h = s(615310),
    x = s(800471),
    p = s(147925),
    g = s(89892);
function f(e) {
    let { breadcrumb: n, isActiveBreadcrumb: s, isFinalBreadcrumb: r, separatorClassName: l } = e;
    return (0, t.jsxs)(
        "div",
        {
            className: i()(g.hj, { [g.jQ]: r }),
            children: [
                (0, t.jsx)(a.E, {
                    variant: "text-sm/medium",
                    color: s ? "text-strong" : "text-muted",
                    children: n.label,
                }),
                r ? null : (0, t.jsx)(p.A, { className: i()(g.LJ, l), direction: p.A.Directions.RIGHT }),
            ],
        },
        n.id,
    );
}
let E = function (e) {
    let { breadcrumbs: n, activeId: s, className: r, separatorClassName: l } = e;
    return (0, t.jsx)("div", {
        className: i()(g.jD, r),
        children: n.map((e, r) =>
            (0, t.jsx)(
                f,
                {
                    breadcrumb: e,
                    isActiveBreadcrumb: e.id === s,
                    isFinalBreadcrumb: r === n.length - 1,
                    separatorClassName: l,
                },
                e.id,
            ),
        ),
    });
};
var S = s(422936),
    N = s(234419),
    T = s(795269),
    v = s(788868),
    j = s(985018),
    A = s(503110);
let I = (e) => {
    let { discountAmount: n } = e,
        s = (0, N.V)(),
        r = null != s && s.trial_id === v.Dw,
        i = j.intl.string(j.t.IBYG5U);
    return (
        void 0 !== n
            ? (i = j.intl.formatToPlainString(j.t.iiLbvu, { percent: n }))
            : r && (i = j.intl.string(j.t.gtNqJQ)),
        (0, t.jsx)("div", { className: A.f, children: (0, t.jsx)(T.R, { text: i }) })
    );
};
var P = s(88001),
    R = s(955212),
    M = s(967744),
    _ = s(232266),
    y = s(243002),
    b = s(303930),
    F = s(241988);
function D(e) {
    let { isOneStepCheckout: n, headerText: s, step: r, filteredBreadcrumbs: i } = e;
    if (n)
        return (0, t.jsx)("div", {
            className: R.r9,
            children: (0, t.jsx)(l.D, { variant: "heading-md/bold", children: s }),
        });
    let c = i.length > 1;
    return (0, t.jsxs)("div", {
        className: R.go,
        children: [
            (0, t.jsx)(a.E, { variant: "text-lg/semibold", children: s }),
            c && (0, t.jsx)(E, { activeId: r, breadcrumbs: i }),
        ],
    });
}
function w(e) {
    let { isTier2: n } = e,
        s = n ? y : "/assets/947416a0e8a7172a.svg";
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)("img", { src: n ? _ : "/assets/792ab98da2b21b02.svg", alt: "", className: R.mR }),
            (0, t.jsx)("img", { src: s, alt: "", className: R.dz }),
            (0, t.jsx)("img", { src: s, alt: "", className: R.lM }),
        ],
    });
}
let O = function (e) {
    let {
            hideCloseButton: n = !1,
            hideCloseOnFullScreen: s,
            onClose: r,
            upgradeToPremiumType: l,
            isEligibleForTrial: p = !1,
            showTrialBadge: g = !1,
            showDiscountBadge: f = !1,
            isPremiumGroupPurchase: E = !1,
            forceBrandRefreshHeader: N = !1,
        } = e,
        T = l === v.PremiumTypes.TIER_2,
        A = (0, x.lp)(p),
        _ = (0, S.O)(),
        y = _?.discount?.amount,
        { startedPaymentFlowWithPaymentSourcesRef: O, isDisplayingWowMomentConfirmation: B } = (0, C.P5)(),
        { step: H, breadcrumbsData: U } = (0, h.Ay)(),
        k = (0, o.D7)({ location: "PremiumPaymentHeader" });
    if (!N && (null == U || 0 === U.length)) return null;
    let G = (U ?? []).flatMap((e) => {
        let n = e.useBreadcrumbLabel(p),
            s = e.sectionHeaderText;
        return null != n ? { id: e.id, label: n, sectionHeaderText: s } : [];
    });
    if (!N && 0 === G.length) return null;
    let z = (G = G.filter((e) => {
            if (E && e.id === m.pn.PLAN_SELECT) return !1;
            let n = e.id !== m.pn.ADD_PAYMENT_STEPS,
                s = e.id === m.pn.ADD_PAYMENT_STEPS && !O.current;
            return !p || n || s;
        })).find((e) => e.id === H),
        Y = z?.sectionHeaderText?.() ?? z?.label,
        W = !(k && null != H && L.M.includes(H)) && null != Y && null != H,
        q = A && W && H === m.pn.REVIEW,
        V = T ? "nitro-pink" : "nitro-green",
        J = E ? (0, P.DP)() : T ? j.intl.string(j.t.lG6a5x) : j.intl.string(j.t["t9uG/o"]),
        Q = R.kL,
        Z = i()(R.N1, M.headerGradient);
    return B
        ? (0, t.jsx)("div", { className: Q, children: (0, t.jsx)(c.h, { color: V, className: Z }) })
        : (0, t.jsxs)("div", {
              className: Q,
              children: [
                  (0, t.jsxs)(c.h, {
                      color: V,
                      className: i()(Z, { [R.s1]: !W }),
                      children: [
                          (0, t.jsx)(w, { isTier2: T }),
                          !n &&
                              (0, t.jsx)(u.s_, {
                                  "data-migration-pending": !0,
                                  hideOnFullscreen: s,
                                  onClick: r,
                                  className: R.Ep,
                              }),
                          (0, t.jsx)("img", { src: T ? F : b, alt: "", className: q ? R.i_ : R.kX }),
                          (0, t.jsxs)("div", {
                              className: R.FS,
                              children: [
                                  E &&
                                      (0, t.jsx)("div", {
                                          className: R.$N,
                                          children: (0, t.jsx)(d.E, { type: "beta", variant: "expressive" }),
                                      }),
                                  (0, t.jsx)(a.E, {
                                      variant: "display-md",
                                      color: "text-strong",
                                      className: R.cf,
                                      children: J,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (g || f) && (0, t.jsx)(I, { discountAmount: y }),
                  W && (0, t.jsx)(D, { isOneStepCheckout: A, headerText: Y, step: H, filteredBreadcrumbs: G }),
              ],
          });
};
