n.d(t, { oO: () => E, uK: () => A, kb: () => v });
var r = n(477900);
n(582128);
var i = n(503698),
    l = n.n(i),
    a = n(646514),
    s = n(20742),
    o = n(462887),
    c = n(534514),
    u = n(834730),
    m = n(430993),
    d = n(993077),
    g = n(695366),
    I = n(736653),
    x = n(975571),
    T = n(86379),
    p = n(652215),
    h = n(792996),
    f = n(764811);
function j(e) {
    let { className: t } = e,
        n = (0, I.Ay)(),
        i = (0, o.M)(n) ? "/assets/74570649d239edc8.svg" : "/assets/72378d7e29e72358.svg";
    return (0, r.jsxs)("div", {
        className: l()(f.kL, t),
        children: [
            (0, r.jsx)(c.D, { className: f.wx, variant: "heading-xl/semibold", children: h.intl.string(h.t.vwMEHS) }),
            (0, r.jsxs)(u.E, {
                className: f.h_,
                variant: "body-md/normal",
                color: "text-default",
                children: [
                    (0, r.jsx)("p", { children: h.intl.string(h.t.fev8MQ) }),
                    (0, r.jsx)("p", {
                        children: h.intl.format(h.t.IHxEJU, {
                            helpdeskArticle: x.A.getArticleURL(p.MVz.BLOCKED_PAYMENTS),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("img", { src: i, className: f.j0, alt: "Blocked Payments" }),
        ],
    });
}
function A() {
    return (0, r.jsx)(j, { className: f.W0 });
}
function E() {
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(s.rQ, {}), (0, r.jsx)(m.c, { children: (0, r.jsx)(j, { className: f.yl }) })],
    });
}
function v(e) {
    let { className: t } = e;
    return (0, T.Hp)()
        ? (0, r.jsxs)(d.Z, {
              className: l()(f.ek, t),
              type: d.Z.Types.CUSTOM,
              children: [
                  (0, r.jsx)(g.CircleErrorIcon, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      className: f.XJ,
                      color: a.A.unsafe_rawColors.YELLOW_300.css,
                  }),
                  (0, r.jsx)(u.E, {
                      variant: "body-sm/normal",
                      children: h.intl.format(h.t.NYkcCh, {
                          helpdeskArticle: x.A.getArticleURL(p.MVz.BLOCKED_PAYMENTS),
                      }),
                  }),
              ],
          })
        : null;
}
