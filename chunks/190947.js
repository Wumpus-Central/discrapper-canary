n.d(t, {
    Z: () => s,
    b: () => o
});
var r = n(255367);
n(73800);
var i = n(481060),
    a = n(991862);
function o(e) {
    let { currencies: t, className: n, children: i } = e;
    return t.length < 2
        ? null
        : (0, r.jsx)('div', {
              className: n,
              children: i
          });
}
let s = function (e) {
    let { currencies: t, onChange: n, selectedCurrency: o, className: s, disabled: l = !1 } = e;
    if (t.length < 2) return null;
    let c = t.map((e, t) => ({
            key: t,
            value: e,
            label: ''.concat(e.toUpperCase(), ' - ').concat((0, a.T)(e))
        })),
        u = (e) => {
            null != e && n(e);
        };
    return (0, r.jsx)(i.q4e, {
        value: o,
        options: c,
        onChange: u,
        className: s,
        isDisabled: l
    });
};
