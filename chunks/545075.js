"use strict";
n.d(t, { uK: () => T, oO: () => S, kb: () => N });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(661531),
    o = n(20742),
    l = n(462887),
    d = n(534514),
    _ = n(834730),
    u = n(430993),
    c = n(359778),
    E = n(695366),
    h = n(736653),
    m = n(975571),
    f = n(86379),
    g = n(652215),
    p = n(985018),
    A = n(351818);
function I(e) {
    let { className: t } = e,
        n = (0, h.Ay)(),
        r = (0, l.M)(n) ? "/assets/74570649d239edc8.svg" : "/assets/72378d7e29e72358.svg";
    return (0, i.jsxs)("div", {
        className: s()(A.kL, t),
        children: [
            (0, i.jsx)(d.D, { className: A.wx, variant: "heading-xl/semibold", children: p.intl.string(p.t.vwMEHS) }),
            (0, i.jsxs)(_.E, {
                className: A.h_,
                variant: "text-md/normal",
                color: "text-default",
                children: [
                    (0, i.jsx)("p", { children: p.intl.string(p.t.fev8MQ) }),
                    (0, i.jsx)("p", {
                        children: p.intl.format(p.t.IHxEJU, {
                            helpdeskArticle: m.A.getArticleURL(g.MVz.BLOCKED_PAYMENTS),
                        }),
                    }),
                ],
            }),
            (0, i.jsx)("img", { src: r, className: A.j0, alt: "Blocked Payments" }),
        ],
    });
}
function T() {
    return (0, i.jsx)(I, { className: A.W0 });
}
function S() {
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(o.rQ, {}), (0, i.jsx)(u.c, { children: (0, i.jsx)(I, { className: A.yl }) })],
    });
}
function N(e) {
    let { className: t } = e;
    return (0, f.Hp)()
        ? (0, i.jsxs)(c.Z, {
              className: s()(A.ek, t),
              type: c.Z.Types.CUSTOM,
              children: [
                  (0, i.jsx)(E.E, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      className: A.XJ,
                      color: a.A.unsafe_rawColors.YELLOW_300.css,
                  }),
                  (0, i.jsx)(_.E, {
                      variant: "text-sm/normal",
                      children: p.intl.format(p.t.NYkcCh, {
                          helpdeskArticle: m.A.getArticleURL(g.MVz.BLOCKED_PAYMENTS),
                      }),
                  }),
              ],
          })
        : null;
}
