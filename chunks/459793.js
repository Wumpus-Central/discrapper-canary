"use strict";
n.d(t, { kb: () => v, oO: () => N, uK: () => y });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(827734),
    o = n(20742),
    l = n(462887),
    u = n(534514),
    c = n(834730),
    d = n(430993),
    _ = n(359778),
    f = n(695366),
    p = n(736653),
    h = n(975571),
    E = n(86379),
    m = n(652215),
    g = n(985018),
    A = n(351818),
    I = n(270516),
    T = n(480540);
function S(e) {
    let { className: t } = e,
        n = (0, p.Ay)(),
        i = (0, l.M)(n) ? I : T;
    return (0, r.jsxs)("div", {
        className: s()(A.kL, t),
        children: [
            (0, r.jsx)(u.D, { className: A.wx, variant: "heading-xl/semibold", children: g.intl.string(g.t.vwMEHS) }),
            (0, r.jsxs)(c.E, {
                className: A.h_,
                variant: "text-md/normal",
                color: "text-default",
                children: [
                    (0, r.jsx)("p", { children: g.intl.string(g.t.fev8MQ) }),
                    (0, r.jsx)("p", {
                        children: g.intl.format(g.t.IHxEJU, {
                            helpdeskArticle: h.A.getArticleURL(m.MVz.BLOCKED_PAYMENTS),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("img", { src: i, className: A.j0, alt: "Blocked Payments" }),
        ],
    });
}
function y() {
    return (0, r.jsx)(S, { className: A.W0 });
}
function N() {
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(o.rQ, {}), (0, r.jsx)(d.c, { children: (0, r.jsx)(S, { className: A.yl }) })],
    });
}
function v(e) {
    let { className: t } = e;
    return (0, E.Hp)()
        ? (0, r.jsxs)(_.Z, {
              className: s()(A.ek, t),
              type: _.Z.Types.CUSTOM,
              children: [
                  (0, r.jsx)(f.E, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      className: A.XJ,
                      color: a.A.unsafe_rawColors.YELLOW_300.css,
                  }),
                  (0, r.jsx)(c.E, {
                      variant: "text-sm/normal",
                      children: g.intl.format(g.t.NYkcCh, {
                          helpdeskArticle: h.A.getArticleURL(m.MVz.BLOCKED_PAYMENTS),
                      }),
                  }),
              ],
          })
        : null;
}
