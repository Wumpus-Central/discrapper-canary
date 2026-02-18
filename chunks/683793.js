t.d(s, { A: () => d });
var i = t(627968);
t(64700);
var r = t(582754),
    a = t(421380),
    l = t(397927),
    n = t(736653),
    o = t(985018),
    c = t(250277),
    m = t(492735),
    u = t(350045);
let d = function (e) {
    let { churnUserDiscountOffer: s, onDiscountClaim: t, onContinue: d } = e,
        x = (0, n.Ay)(),
        p = (0, r.Mw)(x) ? m : u;
    return null == s
        ? null
        : (0, i.jsxs)("div", {
              className: c.bR,
              children: [
                  (0, i.jsx)("div", { className: c.v0 }),
                  (0, i.jsx)("div", { className: c.X2 }),
                  (0, i.jsx)("div", {
                      className: c.Dg,
                      children: (0, i.jsxs)("div", {
                          className: c.xt,
                          children: [
                              (0, i.jsx)("img", { alt: "", src: p, className: c.lR }),
                              (0, i.jsxs)("div", {
                                  className: c.t2,
                                  children: [
                                      (0, i.jsx)(l.Text, {
                                          variant: "text-md/medium",
                                          className: c.PU,
                                          children: o.intl.format(o.t["2gem05"], {
                                              percent: s.discount.amount,
                                              numMonths: s.discount.user_usage_limit,
                                          }),
                                      }),
                                      (0, i.jsxs)("div", {
                                          className: c.$t,
                                          children: [
                                              (0, i.jsxs)(l.wLn, {
                                                  "data-migration-pending": !0,
                                                  className: c.Oy,
                                                  innerClassName: c.iO,
                                                  look: a.pR.OUTLINED,
                                                  color: a.XD.CUSTOM,
                                                  onClick: () => t?.(),
                                                  children: [
                                                      (0, i.jsx)(l.tvc, {
                                                          size: "xs",
                                                          color: "currentColor",
                                                          className: c.Fl,
                                                      }),
                                                      (0, i.jsx)(l.Text, {
                                                          variant: "text-sm/semibold",
                                                          className: c.H0,
                                                          children: o.intl.string(o.t.zrCzVB),
                                                      }),
                                                  ],
                                              }),
                                              (0, i.jsx)(l.Button, {
                                                  variant: "primary",
                                                  text: o.intl.string(o.t["3PatSz"]),
                                                  onClick: () => d?.(),
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
