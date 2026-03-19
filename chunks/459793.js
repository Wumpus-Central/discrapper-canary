"use strict";
n.d(t, { kb: () => T, oO: () => I, uK: () => A });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(827734),
    o = n(732955),
    l = n(582754),
    u = n(397927),
    c = n(736653),
    d = n(975571),
    _ = n(86379),
    f = n(652215),
    p = n(985018),
    h = n(808175),
    m = n(270516),
    E = n(480540);
function g(e) {
    let { className: t } = e,
        n = (0, c.Ay)(),
        i = (0, l.Mw)(n) ? m : E;
    return (0, r.jsxs)("div", {
        className: s()(h.kL, t),
        children: [
            (0, r.jsx)(u.Heading, {
                className: h.wx,
                variant: "heading-xl/semibold",
                children: p.intl.string(p.t.vwMEHS),
            }),
            (0, r.jsxs)(u.Text, {
                className: h.h_,
                variant: "text-md/normal",
                color: "text-default",
                children: [
                    (0, r.jsx)("p", { children: p.intl.string(p.t.fev8MQ) }),
                    (0, r.jsx)("p", {
                        children: p.intl.format(p.t.IHxEJU, {
                            helpdeskArticle: d.A.getArticleURL(f.MVz.BLOCKED_PAYMENTS),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("img", { src: i, className: h.j0, alt: "Blocked Payments" }),
        ],
    });
}
function A() {
    return (0, r.jsx)(g, { className: h.W0 });
}
function I() {
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(o.rQ0, {}), (0, r.jsx)(u.cwr, { children: (0, r.jsx)(g, { className: h.yl }) })],
    });
}
function T(e) {
    let { className: t } = e;
    return (0, _.Hp)()
        ? (0, r.jsxs)(u.ZpM, {
              className: s()(h.ek, t),
              type: u.ZpM.Types.CUSTOM,
              children: [
                  (0, r.jsx)(u.EpV, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      className: h.XJ,
                      color: a.A.unsafe_rawColors.YELLOW_300.css,
                  }),
                  (0, r.jsx)(u.Text, {
                      variant: "text-sm/normal",
                      children: p.intl.format(p.t.NYkcCh, {
                          helpdeskArticle: d.A.getArticleURL(f.MVz.BLOCKED_PAYMENTS),
                      }),
                  }),
              ],
          })
        : null;
}
