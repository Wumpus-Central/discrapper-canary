r.d(t, { uK: () => v, oO: () => N, kb: () => R });
var i = r(477900);
r(582128);
var n = r(503698),
    s = r.n(n),
    l = r(661531),
    a = r(20742),
    u = r(462887),
    o = r(297264),
    c = r(834730),
    d = r(430993),
    m = r(993077),
    h = r(695366),
    f = r(736653),
    x = r(975571),
    p = r(86379),
    g = r(652215),
    A = r(375708),
    j = r(764811);
function E(e) {
    let { className: t } = e,
        r = (0, f.Ay)(),
        n = (0, u.M)(r) ? "/assets/74570649d239edc8.svg" : "/assets/72378d7e29e72358.svg";
    return (0, i.jsxs)("div", {
        className: s()(j.kL, t),
        children: [
            (0, i.jsx)(o.D, { className: j.wx, variant: "heading-xl/semibold", children: A.intl.string(A.t.vwMEHS) }),
            (0, i.jsxs)(c.E, {
                className: j.h_,
                variant: "text-md/normal",
                color: "text-default",
                children: [
                    (0, i.jsx)("p", { children: A.intl.string(A.t.fev8MQ) }),
                    (0, i.jsx)("p", {
                        children: A.intl.format(A.t.IHxEJU, {
                            helpdeskArticle: x.A.getArticleURL(g.MVz.BLOCKED_PAYMENTS),
                        }),
                    }),
                ],
            }),
            (0, i.jsx)("img", { src: n, className: j.j0, alt: "Blocked Payments" }),
        ],
    });
}
function v() {
    return (0, i.jsx)(E, { className: j.W0 });
}
function N() {
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(a.rQ, {}), (0, i.jsx)(d.c, { children: (0, i.jsx)(E, { className: j.yl }) })],
    });
}
function R(e) {
    let { className: t } = e;
    return (0, p.Hp)()
        ? (0, i.jsxs)(m.Z, {
              className: s()(j.ek, t),
              type: m.Z.Types.CUSTOM,
              children: [
                  (0, i.jsx)(h.E, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      className: j.XJ,
                      color: l.A.unsafe_rawColors.YELLOW_300.css,
                  }),
                  (0, i.jsx)(c.E, {
                      variant: "text-sm/normal",
                      children: A.intl.format(A.t.NYkcCh, {
                          helpdeskArticle: x.A.getArticleURL(g.MVz.BLOCKED_PAYMENTS),
                      }),
                  }),
              ],
          })
        : null;
}
