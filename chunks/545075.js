s.d(t, { uK: () => p, oO: () => x, kb: () => P });
var n = s(627968);
s(64700);
var i = s(503698),
    r = s.n(i),
    l = s(661531),
    a = s(20742),
    o = s(462887),
    d = s(534514),
    c = s(834730),
    u = s(430993),
    A = s(359778),
    h = s(695366),
    f = s(736653),
    _ = s(975571),
    E = s(86379),
    R = s(652215),
    O = s(985018),
    g = s(351818);
function m(e) {
    let { className: t } = e,
        s = (0, f.Ay)(),
        i = (0, o.M)(s) ? "/assets/74570649d239edc8.svg" : "/assets/72378d7e29e72358.svg";
    return (0, n.jsxs)("div", {
        className: r()(g.kL, t),
        children: [
            (0, n.jsx)(d.D, { className: g.wx, variant: "heading-xl/semibold", children: O.intl.string(O.t.vwMEHS) }),
            (0, n.jsxs)(c.E, {
                className: g.h_,
                variant: "text-md/normal",
                color: "text-default",
                children: [
                    (0, n.jsx)("p", { children: O.intl.string(O.t.fev8MQ) }),
                    (0, n.jsx)("p", {
                        children: O.intl.format(O.t.IHxEJU, {
                            helpdeskArticle: _.A.getArticleURL(R.MVz.BLOCKED_PAYMENTS),
                        }),
                    }),
                ],
            }),
            (0, n.jsx)("img", { src: i, className: g.j0, alt: "Blocked Payments" }),
        ],
    });
}
function p() {
    return (0, n.jsx)(m, { className: g.W0 });
}
function x() {
    return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(a.rQ, {}), (0, n.jsx)(u.c, { children: (0, n.jsx)(m, { className: g.yl }) })],
    });
}
function P(e) {
    let { className: t } = e;
    return (0, E.Hp)()
        ? (0, n.jsxs)(A.Z, {
              className: r()(g.ek, t),
              type: A.Z.Types.CUSTOM,
              children: [
                  (0, n.jsx)(h.E, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      className: g.XJ,
                      color: l.A.unsafe_rawColors.YELLOW_300.css,
                  }),
                  (0, n.jsx)(c.E, {
                      variant: "text-sm/normal",
                      children: O.intl.format(O.t.NYkcCh, {
                          helpdeskArticle: _.A.getArticleURL(R.MVz.BLOCKED_PAYMENTS),
                      }),
                  }),
              ],
          })
        : null;
}
