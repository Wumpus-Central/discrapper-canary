"use strict";
n.d(t, { kb: () => T, oO: () => I, uK: () => A });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(827734),
    o = n(582754),
    l = n(397927),
    u = n(736653),
    c = n(235986),
    d = n(975571),
    _ = n(86379),
    f = n(652215),
    p = n(985018),
    h = n(389797),
    m = n(270516),
    E = n(480540);
function g(e) {
    let { className: t } = e,
        n = (0, u.Ay)(),
        i = (0, o.Mw)(n) ? m : E;
    return (0, r.jsxs)("div", {
        className: s()(h.kL, t),
        children: [
            (0, r.jsx)(l.Heading, {
                className: h.wx,
                variant: "heading-xl/semibold",
                children: p.intl.string(p.t.vwMEHS),
            }),
            (0, r.jsxs)(l.Text, {
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
function I(e) {
    let { onClose: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.rQ0, {
                className: h.Oy,
                justify: c.A.Justify.END,
                "data-migration-pending": !0,
                children: (0, r.jsx)(l.s_y, { onClick: t, "data-migration-pending": !0 }),
            }),
            (0, r.jsx)(l.$mQ, {
                className: h.Gv,
                "data-migration-pending": !0,
                children: (0, r.jsx)(g, { className: h.yl }),
            }),
        ],
    });
}
function T(e) {
    let { className: t } = e;
    return (0, _.Hp)()
        ? (0, r.jsxs)(l.ZpM, {
              className: s()(h.ek, t),
              type: l.ZpM.Types.CUSTOM,
              children: [
                  (0, r.jsx)(l.EpV, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      className: h.XJ,
                      color: a.A.unsafe_rawColors.YELLOW_300.css,
                  }),
                  (0, r.jsx)(l.Text, {
                      variant: "text-sm/normal",
                      children: p.intl.format(p.t.NYkcCh, {
                          helpdeskArticle: d.A.getArticleURL(f.MVz.BLOCKED_PAYMENTS),
                      }),
                  }),
              ],
          })
        : null;
}
