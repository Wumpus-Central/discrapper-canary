t.d(r, { uK: () => C, oO: () => T, kb: () => A });
var i = t(477900);
t(582128);
var n = t(503698),
    s = t.n(n),
    a = t(661531),
    l = t(20742),
    c = t(462887),
    o = t(297264),
    d = t(834730),
    u = t(430993),
    m = t(993077),
    p = t(695366),
    x = t(736653),
    h = t(975571),
    j = t(86379),
    f = t(652215),
    g = t(375708),
    N = t(764811);
function v(e) {
    let { className: r } = e,
        t = (0, x.Ay)(),
        n = (0, c.M)(t) ? "/assets/74570649d239edc8.svg" : "/assets/72378d7e29e72358.svg";
    return (0, i.jsxs)("div", {
        className: s()(N.kL, r),
        children: [
            (0, i.jsx)(o.D, { className: N.wx, variant: "heading-xl/semibold", children: g.intl.string(g.t.vwMEHS) }),
            (0, i.jsxs)(d.E, {
                className: N.h_,
                variant: "text-md/normal",
                color: "text-default",
                children: [
                    (0, i.jsx)("p", { children: g.intl.string(g.t.fev8MQ) }),
                    (0, i.jsx)("p", {
                        children: g.intl.format(g.t.IHxEJU, {
                            helpdeskArticle: h.A.getArticleURL(f.MVz.BLOCKED_PAYMENTS),
                        }),
                    }),
                ],
            }),
            (0, i.jsx)("img", { src: n, className: N.j0, alt: "Blocked Payments" }),
        ],
    });
}
function C() {
    return (0, i.jsx)(v, { className: N.W0 });
}
function T() {
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(l.rQ, {}), (0, i.jsx)(u.c, { children: (0, i.jsx)(v, { className: N.yl }) })],
    });
}
function A(e) {
    let { className: r } = e;
    return (0, j.Hp)()
        ? (0, i.jsxs)(m.Z, {
              className: s()(N.ek, r),
              type: m.Z.Types.CUSTOM,
              children: [
                  (0, i.jsx)(p.E, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      className: N.XJ,
                      color: a.A.unsafe_rawColors.YELLOW_300.css,
                  }),
                  (0, i.jsx)(d.E, {
                      variant: "text-sm/normal",
                      children: g.intl.format(g.t.NYkcCh, {
                          helpdeskArticle: h.A.getArticleURL(f.MVz.BLOCKED_PAYMENTS),
                      }),
                  }),
              ],
          })
        : null;
}
