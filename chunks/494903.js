s.d(t, { B: () => u });
var r = s(477900);
s(582128);
var n = s(683071),
    a = s(642639),
    i = s(740053);
let l = { info: "info", warning: "warning", critical: "critical" },
    c = ["info", "warning", "critical"];
function u() {
    let e = (0, a.t4)((e) => e.getPaymentSourceNotices());
    return 0 === e.length
        ? null
        : (0, r.jsx)("div", {
              className: i.k,
              children: (0, r.jsx)(n.w, {
                  type: l[
                      c[
                          e.reduce((e, t) => {
                              let { severity: s } = t;
                              return Math.max(e, c.indexOf(s));
                          }, 0)
                      ]
                  ],
                  children: e
                      .map((e) => {
                          let { message: t } = e;
                          return t;
                      })
                      .join(" "),
              }),
          });
}
