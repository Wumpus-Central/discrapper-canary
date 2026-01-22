n.d(t, { A: () => f });
var r = n(627968);
n(64700);
var i = n(582754),
    a = n(421380),
    s = n(397927),
    o = n(736653),
    l = n(985018),
    c = n(250277),
    u = n(492735),
    d = n(350045);
let f = function (e) {
    let { churnUserDiscountOffer: t, onDiscountClaim: n, onContinue: f } = e,
        p = (0, o.Ay)(),
        _ = (0, i.Mw)(p) ? u : d;
    return null == t
        ? null
        : (0, r.jsxs)("div", {
              className: c.bR,
              children: [
                  (0, r.jsx)("div", { className: c.v0 }),
                  (0, r.jsx)("div", { className: c.X2 }),
                  (0, r.jsx)("div", {
                      className: c.Dg,
                      children: (0, r.jsxs)("div", {
                          className: c.xt,
                          children: [
                              (0, r.jsx)("img", {
                                  alt: "",
                                  src: _,
                                  className: c.lR,
                              }),
                              (0, r.jsxs)("div", {
                                  className: c.t2,
                                  children: [
                                      (0, r.jsx)(s.Text, {
                                          variant: "text-md/medium",
                                          className: c.PU,
                                          children: l.intl.format(l.t["2gem05"], {
                                              percent: t.discount.amount,
                                              numMonths: t.discount.user_usage_limit,
                                          }),
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: c.$t,
                                          children: [
                                              (0, r.jsxs)(s.wLn, {
                                                  "data-migration-pending": !0,
                                                  className: c.Oy,
                                                  innerClassName: c.iO,
                                                  look: a.pR.OUTLINED,
                                                  color: a.XD.CUSTOM,
                                                  onClick: () => (null == n ? void 0 : n()),
                                                  children: [
                                                      (0, r.jsx)(s.tvc, {
                                                          size: "xs",
                                                          color: "currentColor",
                                                          className: c.Fl,
                                                      }),
                                                      (0, r.jsx)(s.Text, {
                                                          variant: "text-sm/semibold",
                                                          className: c.H0,
                                                          children: l.intl.string(l.t.zrCzVB),
                                                      }),
                                                  ],
                                              }),
                                              (0, r.jsx)(s.Button, {
                                                  variant: "primary",
                                                  text: l.intl.string(l.t["3PatSz"]),
                                                  onClick: () => (null == f ? void 0 : f()),
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
