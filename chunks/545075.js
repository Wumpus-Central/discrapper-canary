t.d(r, { uK: () => g, oO: () => R, kb: () => _ });
var n = t(477900);
t(582128);
var l = t(503698),
    i = t.n(l),
    a = t(661531),
    s = t(20742),
    c = t(462887),
    u = t(297264),
    o = t(834730),
    d = t(430993),
    m = t(993077),
    p = t(695366),
    x = t(736653),
    h = t(975571),
    A = t(86379),
    T = t(652215),
    I = t(105292),
    E = t(764811);
function f(e) {
    let { className: r } = e,
        t = (0, x.Ay)(),
        l = (0, c.M)(t) ? "/assets/74570649d239edc8.svg" : "/assets/72378d7e29e72358.svg";
    return (0, n.jsxs)("div", {
        className: i()(E.kL, r),
        children: [
            (0, n.jsx)(u.D, { className: E.wx, variant: "heading-xl/semibold", children: I.intl.string(I.t.vwMEHS) }),
            (0, n.jsxs)(o.E, {
                className: E.h_,
                variant: "text-md/normal",
                color: "text-default",
                children: [
                    (0, n.jsx)("p", { children: I.intl.string(I.t.fev8MQ) }),
                    (0, n.jsx)("p", {
                        children: I.intl.format(I.t.IHxEJU, {
                            helpdeskArticle: h.A.getArticleURL(T.MVz.BLOCKED_PAYMENTS),
                        }),
                    }),
                ],
            }),
            (0, n.jsx)("img", { src: l, className: E.j0, alt: "Blocked Payments" }),
        ],
    });
}
function g() {
    return (0, n.jsx)(f, { className: E.W0 });
}
function R() {
    return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(s.rQ, {}), (0, n.jsx)(d.c, { children: (0, n.jsx)(f, { className: E.yl }) })],
    });
}
function _(e) {
    let { className: r } = e;
    return (0, A.Hp)()
        ? (0, n.jsxs)(m.Z, {
              className: i()(E.ek, r),
              type: m.Z.Types.CUSTOM,
              children: [
                  (0, n.jsx)(p.E, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      className: E.XJ,
                      color: a.A.unsafe_rawColors.YELLOW_300.css,
                  }),
                  (0, n.jsx)(o.E, {
                      variant: "text-sm/normal",
                      children: I.intl.format(I.t.NYkcCh, {
                          helpdeskArticle: h.A.getArticleURL(T.MVz.BLOCKED_PAYMENTS),
                      }),
                  }),
              ],
          })
        : null;
}
