r.d(t, { uK: () => T, oO: () => I, kb: () => v });
var n = r(477900);
r(582128);
var i = r(503698),
    l = r.n(i),
    s = r(661531),
    a = r(20742),
    o = r(462887),
    u = r(297264),
    c = r(834730),
    d = r(430993),
    m = r(993077),
    x = r(695366),
    p = r(736653),
    h = r(975571),
    f = r(86379),
    g = r(652215),
    A = r(375708),
    j = r(764811);
function E(e) {
    let { className: t } = e,
        r = (0, p.Ay)(),
        i = (0, o.M)(r) ? "/assets/74570649d239edc8.svg" : "/assets/72378d7e29e72358.svg";
    return (0, n.jsxs)("div", {
        className: l()(j.kL, t),
        children: [
            (0, n.jsx)(u.D, { className: j.wx, variant: "heading-xl/semibold", children: A.intl.string(A.t.vwMEHS) }),
            (0, n.jsxs)(c.E, {
                className: j.h_,
                variant: "text-md/normal",
                color: "text-default",
                children: [
                    (0, n.jsx)("p", { children: A.intl.string(A.t.fev8MQ) }),
                    (0, n.jsx)("p", {
                        children: A.intl.format(A.t.IHxEJU, {
                            helpdeskArticle: h.A.getArticleURL(g.MVz.BLOCKED_PAYMENTS),
                        }),
                    }),
                ],
            }),
            (0, n.jsx)("img", { src: i, className: j.j0, alt: "Blocked Payments" }),
        ],
    });
}
function T() {
    return (0, n.jsx)(E, { className: j.W0 });
}
function I() {
    return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(a.rQ, {}), (0, n.jsx)(d.c, { children: (0, n.jsx)(E, { className: j.yl }) })],
    });
}
function v(e) {
    let { className: t } = e;
    return (0, f.Hp)()
        ? (0, n.jsxs)(m.Z, {
              className: l()(j.ek, t),
              type: m.Z.Types.CUSTOM,
              children: [
                  (0, n.jsx)(x.E, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      className: j.XJ,
                      color: s.A.unsafe_rawColors.YELLOW_300.css,
                  }),
                  (0, n.jsx)(c.E, {
                      variant: "text-sm/normal",
                      children: A.intl.format(A.t.NYkcCh, {
                          helpdeskArticle: h.A.getArticleURL(g.MVz.BLOCKED_PAYMENTS),
                      }),
                  }),
              ],
          })
        : null;
}
