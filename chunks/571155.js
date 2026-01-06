n.d(t, { F: () => s });
var r = n(54381);
n(473749);
var i = n(402453),
    a = n(982125),
    o = n(910989);
function s(e) {
    let { checked: t, disabled: n, size: s } = e;
    return (0, i.A)("CheckboxIndicator")
        ? (0, r.jsx)(a.C, {
              checked: t,
              disabled: n,
              displayOnly: !0,
              usageVariant: "indicator",
              "aria-hidden": !0,
          })
        : (0, r.jsx)(o.Ik, {
              value: t,
              disabled: n,
              size: null != s ? s : 20,
          });
}
