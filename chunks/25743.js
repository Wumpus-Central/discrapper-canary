t.d(s, { A: () => F });
var n = t(627968);
t(64700);
var i = t(503698),
    r = t.n(i),
    a = t(17928),
    l = t(297264),
    c = t(315629),
    u = t(935462),
    o = t(508770),
    d = t(6938),
    m = t(166532),
    C = t(615310),
    x = t(800471),
    L = t(834730),
    p = t(147925),
    h = t(375708),
    j = t(89892);
function f(e) {
    let { breadcrumb: s, isActiveBreadcrumb: t, isFinalBreadcrumb: i, separatorClassName: a } = e;
    return (0, n.jsxs)(
        "div",
        {
            "aria-current": t ? "step" : void 0,
            className: r()(j.hj, { [j.jQ]: i }),
            children: [
                (0, n.jsx)(L.E, {
                    variant: "text-sm/medium",
                    color: t ? "text-strong" : "text-muted",
                    children: s.label,
                }),
                i
                    ? null
                    : (0, n.jsx)(p.A, { "aria-hidden": !0, className: r()(j.LJ, a), direction: p.A.Directions.RIGHT }),
            ],
        },
        s.id,
    );
}
let N = function (e) {
    let { breadcrumbs: s, activeId: t, className: i, separatorClassName: a } = e;
    return (0, n.jsx)("nav", {
        "aria-label": h.intl.string(h.t.TfxqUO),
        className: r()(j.jD, i),
        children: s.map((e, i) =>
            (0, n.jsx)(
                f,
                {
                    breadcrumb: e,
                    isActiveBreadcrumb: e.id === t,
                    isFinalBreadcrumb: i === s.length - 1,
                    separatorClassName: a,
                },
                e.id,
            ),
        ),
    });
};
var E = t(573359),
    T = t(422936),
    g = t(234419),
    A = t(795269),
    I = t(202541),
    _ = t(503110);
let v = function (e) {
    let { discountAmount: s } = e,
        t = (0, g.V)(),
        i = null != t && t.trial_id === I.Dw,
        r = h.intl.string(h.t.IBYG5U);
    return (
        void 0 !== s
            ? (r = h.intl.formatToPlainString(h.t.iiLbvu, { percent: s }))
            : i && (r = h.intl.string(h.t.gtNqJQ)),
        (0, n.jsx)("div", { className: _.f, children: (0, n.jsx)(A.R, { text: r }) })
    );
};
var S = t(88001),
    M = t(955212),
    y = t(967744),
    R = t(232266),
    P = t(243002),
    b = t(303930),
    U = t(241988);
function D(e) {
    let { isOneStepCheckout: s, headerText: t, step: i, filteredBreadcrumbs: r } = e;
    if (s)
        return (0, n.jsx)("div", {
            className: M.r9,
            children: (0, n.jsx)(l.D, { variant: "heading-md/bold", children: t }),
        });
    let a = r.length > 1;
    return (0, n.jsxs)("div", {
        className: M.go,
        children: [
            (0, n.jsx)(l.D, { variant: "text-lg/semibold", children: t }),
            a && (0, n.jsx)(N, { activeId: i, breadcrumbs: r }),
        ],
    });
}
function w(e) {
    let { isTier2: s } = e,
        t = s ? P : "/assets/947416a0e8a7172a.svg";
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("img", { src: s ? R : "/assets/792ab98da2b21b02.svg", alt: "", className: M.mR }),
            (0, n.jsx)("img", { src: t, alt: "", className: M.dz }),
            (0, n.jsx)("img", { src: t, alt: "", className: M.lM }),
        ],
    });
}
let F = function (e) {
    let {
            hideCloseButton: s = !1,
            hideCloseOnFullScreen: t,
            onClose: i,
            upgradeToPremiumType: L,
            isEligibleForTrial: p = !1,
            showTrialBadge: j = !1,
            showDiscountBadge: f = !1,
            isPremiumGroupPurchase: N = !1,
            forceBrandRefreshHeader: g = !1,
        } = e,
        A = L === I.PremiumTypes.TIER_2,
        _ = (0, x.lp)(p),
        R = (0, T.O)(),
        P = R?.discount?.amount,
        F = (0, d.t4)((e) => e.startedPaymentFlowWithPaymentSources),
        O = (0, a.bG)([E.A], () => E.A.isDisplayingWowMomentConfirmation),
        { step: k, breadcrumbsData: V } = (0, C.Ay)();
    if (!g && (null == V || 0 === V.length)) return null;
    let H = (V ?? []).flatMap((e) => {
        let s = e.useBreadcrumbLabel(p),
            t = e.sectionHeaderText;
        return null != s ? { id: e.id, label: s, sectionHeaderText: t } : [];
    });
    if (!g && 0 === H.length) return null;
    let B = (H = H.filter((e) => {
            if (N && e.id === m.pn.PLAN_SELECT) return !1;
            let s = e.id !== m.pn.ADD_PAYMENT_STEPS,
                t = e.id === m.pn.ADD_PAYMENT_STEPS && !F;
            return !p || s || t;
        })).find((e) => e.id === k),
        z = B?.sectionHeaderText?.() ?? B?.label,
        W = (null == k || k !== m.pn.PLAN_SELECT) && null != z && null != k,
        G = _ && W && k === m.pn.REVIEW,
        K = A ? "nitro-pink" : "nitro-green",
        Y = N ? (0, S.DP)() : A ? h.intl.string(h.t.lG6a5x) : h.intl.string(h.t["t9uG/o"]),
        Z = M.kL,
        q = r()(M.N1, y.headerGradient);
    return O
        ? (0, n.jsx)("div", { className: Z, children: (0, n.jsx)(c.h, { color: K, className: q }) })
        : (0, n.jsxs)("div", {
              className: Z,
              children: [
                  (0, n.jsxs)(c.h, {
                      color: K,
                      className: r()(q, { [M.s1]: !W }),
                      children: [
                          (0, n.jsx)(w, { isTier2: A }),
                          !s &&
                              (0, n.jsx)(u.s_, {
                                  "data-migration-pending": !0,
                                  hideOnFullscreen: t,
                                  onClick: i,
                                  className: M.Ep,
                              }),
                          (0, n.jsx)("img", { src: A ? U : b, alt: "", className: G ? M.i_ : M.kX }),
                          (0, n.jsxs)("div", {
                              className: M.FS,
                              children: [
                                  N &&
                                      (0, n.jsx)("div", {
                                          className: M.$N,
                                          children: (0, n.jsx)(o.E, { type: "beta", variant: "expressive" }),
                                      }),
                                  (0, n.jsx)(l.D, {
                                      variant: "display-md",
                                      color: "text-strong",
                                      className: M.cf,
                                      children: Y,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (j || f) && (0, n.jsx)(v, { discountAmount: P }),
                  W && (0, n.jsx)(D, { isOneStepCheckout: _, headerText: z, step: k, filteredBreadcrumbs: H }),
              ],
          });
};
