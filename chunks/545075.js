r.d(t, { uK: () => E, oO: () => R, kb: () => A });
var s = r(477900);
r(582128);
var i = r(503698),
    l = r.n(i),
    n = r(661531),
    a = r(20742),
    c = r(462887),
    u = r(297264),
    d = r(834730),
    o = r(430993),
    m = r(993077),
    h = r(695366),
    x = r(736653),
    p = r(975571),
    f = r(86379),
    g = r(652215),
    j = r(375708),
    v = r(764811);
function N(e) {
    let { className: t } = e,
        r = (0, x.Ay)(),
        i = (0, c.M)(r) ? "/assets/74570649d239edc8.svg" : "/assets/72378d7e29e72358.svg";
    return (0, s.jsxs)("div", {
        className: l()(v.kL, t),
        children: [
            (0, s.jsx)(u.D, { className: v.wx, variant: "heading-xl/semibold", children: j.intl.string(j.t.vwMEHS) }),
            (0, s.jsxs)(d.E, {
                className: v.h_,
                variant: "text-md/normal",
                color: "text-default",
                children: [
                    (0, s.jsx)("p", { children: j.intl.string(j.t.fev8MQ) }),
                    (0, s.jsx)("p", {
                        children: j.intl.format(j.t.IHxEJU, {
                            helpdeskArticle: p.A.getArticleURL(g.MVz.BLOCKED_PAYMENTS),
                        }),
                    }),
                ],
            }),
            (0, s.jsx)("img", { src: i, className: v.j0, alt: "Blocked Payments" }),
        ],
    });
}
function E() {
    return (0, s.jsx)(N, { className: v.W0 });
}
function R() {
    return (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(a.rQ, {}), (0, s.jsx)(o.c, { children: (0, s.jsx)(N, { className: v.yl }) })],
    });
}
function A(e) {
    let { className: t } = e;
    return (0, f.Hp)()
        ? (0, s.jsxs)(m.Z, {
              className: l()(v.ek, t),
              type: m.Z.Types.CUSTOM,
              children: [
                  (0, s.jsx)(h.E, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      className: v.XJ,
                      color: n.A.unsafe_rawColors.YELLOW_300.css,
                  }),
                  (0, s.jsx)(d.E, {
                      variant: "text-sm/normal",
                      children: j.intl.format(j.t.NYkcCh, {
                          helpdeskArticle: p.A.getArticleURL(g.MVz.BLOCKED_PAYMENTS),
                      }),
                  }),
              ],
          })
        : null;
}
