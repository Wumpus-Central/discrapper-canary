n.d(t, {
    Z: () => o,
    b: () => s
});
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(991862);
function s(e) {
    let { currencies: t, className: n, children: r } = e;
    return t.length < 2
        ? null
        : (0, i.jsx)('div', {
              className: n,
              children: r
          });
}
let o = function (e) {
    let { currencies: t, onChange: n, selectedCurrency: s, className: o, disabled: l = !1 } = e;
    if (t.length < 2) return null;
    let u = t.map((e, t) => ({
            key: t,
            value: e,
            label: ''.concat(e.toUpperCase(), ' - ').concat((0, a.T)(e))
        })),
        c = (e) => {
            null != e && n(e);
        };
    return (0, i.jsx)(r.q4e, {
        value: s,
        options: u,
        onChange: c,
        className: o,
        isDisabled: l
    });
};
