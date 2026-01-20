n.d(t, {
    Z: () => s,
    b: () => o,
});
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(991862);
function o(e) {
    let { currencies: t, className: n, children: i } = e;
    return t.length < 2
        ? null
        : (0, r.jsx)("div", {
              className: n,
              children: i,
          });
}
let s = function (e) {
    let { label: t, currencies: n, onChange: o, selectedCurrency: s, disabled: l = !1 } = e;
    if (n.length < 2) return null;
    let c = n.map((e, t) => ({
            id: t.toString(),
            value: e,
            label: "".concat(e.toUpperCase(), " - ").concat((0, a.T)(e)),
        })),
        u = (e) => {
            null != e && o(e);
        };
    return (0, r.jsx)(i.PhF, {
        selectionMode: "single",
        label: t,
        value: s,
        options: c,
        onSelectionChange: u,
        disabled: l,
    });
};
