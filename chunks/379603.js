s.d(t, { o: () => o });
var r = s(477900);
s(582128);
var n = s(683071),
    a = s(661899),
    i = s(365813);
let l = [];
var c = s(124818);
let u = { info: "info", warning: "warning", critical: "critical" };
function o() {
    let e = (0, a.t4)((e) => {
        var t, s;
        return ((t = e.order), (s = e.checkoutInvoicePreview), (0, i.SB)(t, s)?.payment_notices ?? l);
    });
    return 0 === e.length
        ? null
        : (0, r.jsx)(r.Fragment, {
              children: e.map((e) => {
                  let { code: t, severity: s, message: a } = e;
                  return (0, r.jsx)(
                      "div",
                      { className: c.k, children: (0, r.jsx)(n.w, { type: u[s] ?? "info", children: a }) },
                      t,
                  );
              }),
          });
}
