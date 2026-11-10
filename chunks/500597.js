t.d(r, { oO: () => j, uK: () => g, kb: () => R });
var n = t(477900);
t(582128);
var l = t(503698),
    i = t.n(l),
    s = t(646514),
    a = t(20742),
    c = t(462887),
    u = t(534514),
    o = t(834730),
    m = t(430993),
    d = t(993077),
    p = t(695366),
    x = t(736653),
    h = t(975571),
    T = t(86379),
    I = t(652215),
    A = t(792996),
    E = t(764811);
function f(e) {
    let { className: r } = e,
        t = (0, x.Ay)(),
        l = (0, c.M)(t) ? "/assets/74570649d239edc8.svg" : "/assets/72378d7e29e72358.svg";
    return (0, n.jsxs)("div", {
        className: i()(E.kL, r),
        children: [
            (0, n.jsx)(u.D, { className: E.wx, variant: "heading-xl/semibold", children: A.intl.string(A.t.vwMEHS) }),
            (0, n.jsxs)(o.E, {
                className: E.h_,
                variant: "body-md/normal",
                color: "text-default",
                children: [
                    (0, n.jsx)("p", { children: A.intl.string(A.t.fev8MQ) }),
                    (0, n.jsx)("p", {
                        children: A.intl.format(A.t.IHxEJU, {
                            helpdeskArticle: h.A.getArticleURL(I.MVz.BLOCKED_PAYMENTS),
                        }),
                    }),
                ],
            }),
            (0, n.jsx)("img", { src: l, className: E.j0, alt: "Blocked Payments" }),
        ],
    });
}
function g() {
    return (0, n.jsx)(f, { className: E.W0 });
}
function j() {
    return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(a.rQ, {}), (0, n.jsx)(m.c, { children: (0, n.jsx)(f, { className: E.yl }) })],
    });
}
function R(e) {
    let { className: r } = e;
    return (0, T.Hp)()
        ? (0, n.jsxs)(d.Z, {
              className: i()(E.ek, r),
              type: d.Z.Types.CUSTOM,
              children: [
                  (0, n.jsx)(p.CircleErrorIcon, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      className: E.XJ,
                      color: s.A.unsafe_rawColors.YELLOW_300.css,
                  }),
                  (0, n.jsx)(o.E, {
                      variant: "body-sm/normal",
                      children: A.intl.format(A.t.NYkcCh, {
                          helpdeskArticle: h.A.getArticleURL(I.MVz.BLOCKED_PAYMENTS),
                      }),
                  }),
              ],
          })
        : null;
}
