"use strict";
n.d(t, { uK: () => T, oO: () => S, kb: () => y });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(661531),
    o = n(20742),
    l = n(462887),
    u = n(534514),
    c = n(834730),
    d = n(430993),
    _ = n(993077),
    h = n(695366),
    f = n(736653),
    p = n(975571),
    E = n(86379),
    m = n(652215),
    g = n(375708),
    A = n(351818);
function I(e) {
    let { className: t } = e,
        n = (0, f.Ay)(),
        r = (0, l.M)(n) ? "/assets/74570649d239edc8.svg" : "/assets/72378d7e29e72358.svg";
    return (0, i.jsxs)("div", {
        className: s()(A.kL, t),
        children: [
            (0, i.jsx)(u.D, { className: A.wx, variant: "heading-xl/semibold", children: g.intl.string(g.t.vwMEHS) }),
            (0, i.jsxs)(c.E, {
                className: A.h_,
                variant: "text-md/normal",
                color: "text-default",
                children: [
                    (0, i.jsx)("p", { children: g.intl.string(g.t.fev8MQ) }),
                    (0, i.jsx)("p", {
                        children: g.intl.format(g.t.IHxEJU, {
                            helpdeskArticle: p.A.getArticleURL(m.MVz.BLOCKED_PAYMENTS),
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
        children: [(0, i.jsx)(o.rQ, {}), (0, i.jsx)(d.c, { children: (0, i.jsx)(I, { className: A.yl }) })],
    });
}
function y(e) {
    let { className: t } = e;
    return (0, E.Hp)()
        ? (0, i.jsxs)(_.Z, {
              className: s()(A.ek, t),
              type: _.Z.Types.CUSTOM,
              children: [
                  (0, i.jsx)(h.E, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      className: A.XJ,
                      color: a.A.unsafe_rawColors.YELLOW_300.css,
                  }),
                  (0, i.jsx)(c.E, {
                      variant: "text-sm/normal",
                      children: g.intl.format(g.t.NYkcCh, {
                          helpdeskArticle: p.A.getArticleURL(m.MVz.BLOCKED_PAYMENTS),
                      }),
                  }),
              ],
          })
        : null;
}
