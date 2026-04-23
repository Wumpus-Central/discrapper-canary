t.d(s, { A: () => j });
var r = t(627968);
t(64700);
var a = t(462887),
    i = t(862482),
    l = t(834730),
    n = t(930861),
    o = t(403581),
    c = t(821609),
    m = t(736653),
    u = t(985018),
    d = t(150252),
    x = t(492735),
    p = t(350045);
let j = function (e) {
    let { churnUserDiscountOffer: s, onDiscountClaim: t, onContinue: j } = e,
        f = (0, m.Ay)(),
        A = (0, a.M)(f) ? x : p;
    return null == s
        ? null
        : (0, r.jsxs)("div", {
              className: d.bR,
              children: [
                  (0, r.jsx)("div", { className: d.v0 }),
                  (0, r.jsx)("div", { className: d.X2 }),
                  (0, r.jsx)("div", {
                      className: d.Dg,
                      children: (0, r.jsxs)("div", {
                          className: d.xt,
                          children: [
                              (0, r.jsx)("img", { alt: "", src: A, className: d.lR }),
                              (0, r.jsxs)("div", {
                                  className: d.t2,
                                  children: [
                                      (0, r.jsx)(l.E, {
                                          variant: "text-md/medium",
                                          className: d.PU,
                                          children: u.intl.format(u.t["2gem05"], {
                                              percent: s.discount.amount,
                                              numMonths: s.discount.user_usage_limit,
                                          }),
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: d.$t,
                                          children: [
                                              (0, r.jsxs)(n.wL, {
                                                  "data-migration-pending": !0,
                                                  className: d.Oy,
                                                  innerClassName: d.iO,
                                                  look: i.pR.OUTLINED,
                                                  color: i.XD.CUSTOM,
                                                  onClick: () => t?.(),
                                                  children: [
                                                      (0, r.jsx)(o.t, {
                                                          size: "xs",
                                                          color: "currentColor",
                                                          className: d.Fl,
                                                      }),
                                                      (0, r.jsx)(l.E, {
                                                          variant: "text-sm/semibold",
                                                          className: d.H0,
                                                          children: u.intl.string(u.t.zrCzVB),
                                                      }),
                                                  ],
                                              }),
                                              (0, r.jsx)(c.$, {
                                                  variant: "primary",
                                                  text: u.intl.string(u.t["3PatSz"]),
                                                  onClick: () => j?.(),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  }),
              ],
          });
};
