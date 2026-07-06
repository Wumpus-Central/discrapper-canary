n.d(t, { kb: () => v, oO: () => P, uK: () => _ });
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(661531),
    a = n(20742),
    o = n(462887),
    c = n(534514),
    u = n(834730),
    m = n(430993),
    d = n(993077),
    g = n(695366),
    x = n(736653),
    T = n(975571),
    I = n(86379),
    p = n(652215),
    h = n(375708),
    f = n(351818),
    j = n(270516),
    A = n(480540);
function E(e) {
    let { className: t } = e,
        n = (0, x.Ay)(),
        i = (0, o.M)(n) ? j : A;
    return (0, r.jsxs)("div", {
        className: l()(f.kL, t),
        children: [
            (0, r.jsx)(c.D, { className: f.wx, variant: "heading-xl/semibold", children: h.intl.string(h.t.vwMEHS) }),
            (0, r.jsxs)(u.E, {
                className: f.h_,
                variant: "text-md/normal",
                color: "text-default",
                children: [
                    (0, r.jsx)("p", { children: h.intl.string(h.t.fev8MQ) }),
                    (0, r.jsx)("p", {
                        children: h.intl.format(h.t.IHxEJU, {
                            helpdeskArticle: T.A.getArticleURL(p.MVz.BLOCKED_PAYMENTS),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("img", { src: i, className: f.j0, alt: "Blocked Payments" }),
        ],
    });
}
function _() {
    return (0, r.jsx)(E, { className: f.W0 });
}
function P() {
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(a.rQ, {}), (0, r.jsx)(m.c, { children: (0, r.jsx)(E, { className: f.yl }) })],
    });
}
function v(e) {
    let { className: t } = e;
    return (0, I.Hp)()
        ? (0, r.jsxs)(d.Z, {
              className: l()(f.ek, t),
              type: d.Z.Types.CUSTOM,
              children: [
                  (0, r.jsx)(g.E, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      className: f.XJ,
                      color: s.A.unsafe_rawColors.YELLOW_300.css,
                  }),
                  (0, r.jsx)(u.E, {
                      variant: "text-sm/normal",
                      children: h.intl.format(h.t.NYkcCh, {
                          helpdeskArticle: T.A.getArticleURL(p.MVz.BLOCKED_PAYMENTS),
                      }),
                  }),
              ],
          })
        : null;
}
