n.d(t, { uK: () => P, oO: () => j, kb: () => v });
var r = n(477900);
n(582128);
var l = n(503698),
    i = n.n(l),
    a = n(661531),
    s = n(20742),
    o = n(462887),
    c = n(297264),
    u = n(834730),
    d = n(430993),
    m = n(993077),
    g = n(695366),
    x = n(736653),
    T = n(975571),
    I = n(86379),
    h = n(652215),
    f = n(375708),
    p = n(764811);
function E(e) {
    let { className: t } = e,
        n = (0, x.Ay)(),
        l = (0, o.M)(n) ? "/assets/74570649d239edc8.svg" : "/assets/72378d7e29e72358.svg";
    return (0, r.jsxs)("div", {
        className: i()(p.kL, t),
        children: [
            (0, r.jsx)(c.D, { className: p.wx, variant: "heading-xl/semibold", children: f.intl.string(f.t.vwMEHS) }),
            (0, r.jsxs)(u.E, {
                className: p.h_,
                variant: "text-md/normal",
                color: "text-default",
                children: [
                    (0, r.jsx)("p", { children: f.intl.string(f.t.fev8MQ) }),
                    (0, r.jsx)("p", {
                        children: f.intl.format(f.t.IHxEJU, {
                            helpdeskArticle: T.A.getArticleURL(h.MVz.BLOCKED_PAYMENTS),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("img", { src: l, className: p.j0, alt: "Blocked Payments" }),
        ],
    });
}
function P() {
    return (0, r.jsx)(E, { className: p.W0 });
}
function j() {
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(s.rQ, {}), (0, r.jsx)(d.c, { children: (0, r.jsx)(E, { className: p.yl }) })],
    });
}
function v(e) {
    let { className: t } = e;
    return (0, I.Hp)()
        ? (0, r.jsxs)(m.Z, {
              className: i()(p.ek, t),
              type: m.Z.Types.CUSTOM,
              children: [
                  (0, r.jsx)(g.E, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      className: p.XJ,
                      color: a.A.unsafe_rawColors.YELLOW_300.css,
                  }),
                  (0, r.jsx)(u.E, {
                      variant: "text-sm/normal",
                      children: f.intl.format(f.t.NYkcCh, {
                          helpdeskArticle: T.A.getArticleURL(h.MVz.BLOCKED_PAYMENTS),
                      }),
                  }),
              ],
          })
        : null;
}
