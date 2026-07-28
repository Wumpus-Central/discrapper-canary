n.d(t, { uK: () => A, oO: () => P, kb: () => j });
var r = n(477900);
n(582128);
var i = n(503698),
    l = n.n(i),
    s = n(661531),
    a = n(20742),
    o = n(462887),
    c = n(297264),
    u = n(834730),
    d = n(430993),
    m = n(993077),
    g = n(695366),
    x = n(736653),
    T = n(975571),
    f = n(86379),
    I = n(652215),
    h = n(375708),
    p = n(402322);
function E(e) {
    let { className: t } = e,
        n = (0, x.Ay)(),
        i = (0, o.M)(n) ? "/assets/74570649d239edc8.svg" : "/assets/72378d7e29e72358.svg";
    return (0, r.jsxs)("div", {
        className: l()(p.kL, t),
        children: [
            (0, r.jsx)(c.D, { className: p.wx, variant: "heading-xl/semibold", children: h.intl.string(h.t.vwMEHS) }),
            (0, r.jsxs)(u.E, {
                className: p.h_,
                variant: "text-md/normal",
                color: "text-default",
                children: [
                    (0, r.jsx)("p", { children: h.intl.string(h.t.fev8MQ) }),
                    (0, r.jsx)("p", {
                        children: h.intl.format(h.t.IHxEJU, {
                            helpdeskArticle: T.A.getArticleURL(I.MVz.BLOCKED_PAYMENTS),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("img", { src: i, className: p.j0, alt: "Blocked Payments" }),
        ],
    });
}
function A() {
    return (0, r.jsx)(E, { className: p.W0 });
}
function P() {
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(a.rQ, {}), (0, r.jsx)(d.c, { children: (0, r.jsx)(E, { className: p.yl }) })],
    });
}
function j(e) {
    let { className: t } = e;
    return (0, f.Hp)()
        ? (0, r.jsxs)(m.Z, {
              className: l()(p.ek, t),
              type: m.Z.Types.CUSTOM,
              children: [
                  (0, r.jsx)(g.E, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      className: p.XJ,
                      color: s.A.unsafe_rawColors.YELLOW_300.css,
                  }),
                  (0, r.jsx)(u.E, {
                      variant: "text-sm/normal",
                      children: h.intl.format(h.t.NYkcCh, {
                          helpdeskArticle: T.A.getArticleURL(I.MVz.BLOCKED_PAYMENTS),
                      }),
                  }),
              ],
          })
        : null;
}
