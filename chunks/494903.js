n.d(t, { B: () => c });
var r = n(477900);
n(582128);
var i = n(683071),
    a = n(123816),
    l = n(740053);
let s = { info: "info", warning: "warning", critical: "critical" },
    u = ["info", "warning", "critical"];
function c() {
    let e = (0, a.t4)((e) => e.getPaymentSourceNotices());
    return 0 === e.length
        ? null
        : (0, r.jsx)("div", {
              className: l.k,
              children: (0, r.jsx)(i.w, {
                  type: s[
                      u[
                          e.reduce((e, t) => {
                              let { severity: n } = t;
                              return Math.max(e, u.indexOf(n));
                          }, 0)
                      ]
                  ],
                  message: e
                      .map((e) => {
                          let { message: t } = e;
                          return t;
                      })
                      .join(" "),
                  role: "status",
              }),
          });
}
