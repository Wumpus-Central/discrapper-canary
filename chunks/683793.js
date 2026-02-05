"use strict";
n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(582754),
    a = n(421380),
    s = n(397927),
    o = n(736653),
    l = n(985018),
    u = n(250277),
    c = n(492735),
    d = n(350045);
let _ = function (e) {
    let { churnUserDiscountOffer: t, onDiscountClaim: n, onContinue: _ } = e,
        f = (0, o.Ay)(),
        p = (0, i.Mw)(f) ? c : d;
    return null == t
        ? null
        : (0, r.jsxs)("div", {
              className: u.bR,
              children: [
                  (0, r.jsx)("div", { className: u.v0 }),
                  (0, r.jsx)("div", { className: u.X2 }),
                  (0, r.jsx)("div", {
                      className: u.Dg,
                      children: (0, r.jsxs)("div", {
                          className: u.xt,
                          children: [
                              (0, r.jsx)("img", { alt: "", src: p, className: u.lR }),
                              (0, r.jsxs)("div", {
                                  className: u.t2,
                                  children: [
                                      (0, r.jsx)(s.Text, {
                                          variant: "text-md/medium",
                                          className: u.PU,
                                          children: l.intl.format(l.t["2gem05"], {
                                              percent: t.discount.amount,
                                              numMonths: t.discount.user_usage_limit,
                                          }),
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: u.$t,
                                          children: [
                                              (0, r.jsxs)(s.wLn, {
                                                  "data-migration-pending": !0,
                                                  className: u.Oy,
                                                  innerClassName: u.iO,
                                                  look: a.pR.OUTLINED,
                                                  color: a.XD.CUSTOM,
                                                  onClick: () => n?.(),
                                                  children: [
                                                      (0, r.jsx)(s.tvc, {
                                                          size: "xs",
                                                          color: "currentColor",
                                                          className: u.Fl,
                                                      }),
                                                      (0, r.jsx)(s.Text, {
                                                          variant: "text-sm/semibold",
                                                          className: u.H0,
                                                          children: l.intl.string(l.t.zrCzVB),
                                                      }),
                                                  ],
                                              }),
                                              (0, r.jsx)(s.Button, {
                                                  variant: "primary",
                                                  text: l.intl.string(l.t["3PatSz"]),
                                                  onClick: () => _?.(),
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
