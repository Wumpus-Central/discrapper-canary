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
    let { label: t, currencies: n, onChange: o, selectedCurrency: s, className: l, disabled: c = !1 } = e;
    if (n.length < 2) return null;
    let u = n.map((e, t) => ({
            key: t,
            value: e,
            label: "".concat(e.toUpperCase(), " - ").concat((0, a.T)(e)),
        })),
        d = (e) => {
            null != e && o(e);
        };
    return (0, r.jsx)(i.q4e, {
        label: t,
        value: s,
        options: u,
        onChange: d,
        className: l,
        isDisabled: c,
    });
};
