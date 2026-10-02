t.d(r, { uK: () => A, oO: () => E, kb: () => N });
var n = t(477900);
t(582128);
var i = t(503698),
    l = t.n(i),
    a = t(661531),
    s = t(20742),
    o = t(462887),
    c = t(297264),
    d = t(834730),
    u = t(430993),
    m = t(993077),
    x = t(695366),
    p = t(736653),
    h = t(975571),
    g = t(86379),
    j = t(652215),
    f = t(375708),
    T = t(764811);
function I(e) {
    let { className: r } = e,
        t = (0, p.Ay)(),
        i = (0, o.M)(t) ? "/assets/74570649d239edc8.svg" : "/assets/72378d7e29e72358.svg";
    return (0, n.jsxs)("div", {
        className: l()(T.kL, r),
        children: [
            (0, n.jsx)(c.D, { className: T.wx, variant: "heading-xl/semibold", children: f.intl.string(f.t.vwMEHS) }),
            (0, n.jsxs)(d.E, {
                className: T.h_,
                variant: "text-md/normal",
                color: "text-default",
                children: [
                    (0, n.jsx)("p", { children: f.intl.string(f.t.fev8MQ) }),
                    (0, n.jsx)("p", {
                        children: f.intl.format(f.t.IHxEJU, {
                            helpdeskArticle: h.A.getArticleURL(j.MVz.BLOCKED_PAYMENTS),
                        }),
                    }),
                ],
            }),
            (0, n.jsx)("img", { src: i, className: T.j0, alt: "Blocked Payments" }),
        ],
    });
}
function A() {
    return (0, n.jsx)(I, { className: T.W0 });
}
function E() {
    return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(s.rQ, {}), (0, n.jsx)(u.c, { children: (0, n.jsx)(I, { className: T.yl }) })],
    });
}
function N(e) {
    let { className: r } = e;
    return (0, g.Hp)()
        ? (0, n.jsxs)(m.Z, {
              className: l()(T.ek, r),
              type: m.Z.Types.CUSTOM,
              children: [
                  (0, n.jsx)(x.E, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      className: T.XJ,
                      color: a.A.unsafe_rawColors.YELLOW_300.css,
                  }),
                  (0, n.jsx)(d.E, {
                      variant: "text-sm/normal",
                      children: f.intl.format(f.t.NYkcCh, {
                          helpdeskArticle: h.A.getArticleURL(j.MVz.BLOCKED_PAYMENTS),
                      }),
                  }),
              ],
          })
        : null;
}
