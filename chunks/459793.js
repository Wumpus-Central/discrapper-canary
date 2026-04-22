n.d(t, { kb: () => N, oO: () => T, uK: () => x });
var l = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    r = n(827734),
    s = n(20742),
    o = n(462887),
    u = n(534514),
    c = n(834730),
    d = n(430993),
    p = n(359778),
    m = n(695366),
    h = n(736653),
    A = n(975571),
    _ = n(86379),
    C = n(652215),
    E = n(985018),
    y = n(351818),
    f = n(270516),
    P = n(480540);
function S(e) {
    let { className: t } = e,
        n = (0, h.Ay)(),
        i = (0, o.M)(n) ? f : P;
    return (0, l.jsxs)("div", {
        className: a()(y.kL, t),
        children: [
            (0, l.jsx)(u.D, { className: y.wx, variant: "heading-xl/semibold", children: E.intl.string(E.t.vwMEHS) }),
            (0, l.jsxs)(c.E, {
                className: y.h_,
                variant: "text-md/normal",
                color: "text-default",
                children: [
                    (0, l.jsx)("p", { children: E.intl.string(E.t.fev8MQ) }),
                    (0, l.jsx)("p", {
                        children: E.intl.format(E.t.IHxEJU, {
                            helpdeskArticle: A.A.getArticleURL(C.MVz.BLOCKED_PAYMENTS),
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("img", { src: i, className: y.j0, alt: "Blocked Payments" }),
        ],
    });
}
function x() {
    return (0, l.jsx)(S, { className: y.W0 });
}
function T() {
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(s.rQ, {}), (0, l.jsx)(d.c, { children: (0, l.jsx)(S, { className: y.yl }) })],
    });
}
function N(e) {
    let { className: t } = e;
    return (0, _.Hp)()
        ? (0, l.jsxs)(p.Z, {
              className: a()(y.ek, t),
              type: p.Z.Types.CUSTOM,
              children: [
                  (0, l.jsx)(m.E, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      className: y.XJ,
                      color: r.A.unsafe_rawColors.YELLOW_300.css,
                  }),
                  (0, l.jsx)(c.E, {
                      variant: "text-sm/normal",
                      children: E.intl.format(E.t.NYkcCh, {
                          helpdeskArticle: A.A.getArticleURL(C.MVz.BLOCKED_PAYMENTS),
                      }),
                  }),
              ],
          })
        : null;
}
