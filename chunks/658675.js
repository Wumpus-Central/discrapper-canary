n.d(t, { P: () => o });
var r = n(627968);
n(64700);
var i = n(460890),
    a = n(568385),
    s = n(27192);
function o(e) {
    let { checked: t, disabled: n, size: o } = e;
    return (0, i.y6)("CheckboxIndicator")
        ? (0, r.jsx)(a.J, {
              checked: t,
              disabled: n,
              displayOnly: !0,
              usageVariant: "indicator",
              "aria-hidden": !0,
          })
        : (0, r.jsx)(s.Lc, {
              value: t,
              disabled: n,
              size: null != o ? o : 20,
          });
}
