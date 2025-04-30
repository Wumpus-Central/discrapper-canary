n.d(t, {
    Z: () => s,
    b: () => a
});
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(991862);
function a(e) {
    let { currencies: t, className: n, children: i } = e;
    return t.length < 2
        ? null
        : (0, r.jsx)('div', {
              className: n,
              children: i
          });
}
let s = function (e) {
    let { currencies: t, onChange: n, selectedCurrency: a, className: s, disabled: l = !1 } = e;
    if (t.length < 2) return null;
    let c = t.map((e, t) => ({
            key: t,
            value: e,
            label: ''.concat(e.toUpperCase(), ' - ').concat((0, o.T)(e))
        })),
        u = (e) => {
            null != e && n(e);
        };
    return (0, r.jsx)(i.q4e, {
        value: a,
        options: c,
        onChange: u,
        className: s,
        isDisabled: l
    });
};
