r.d(n, {
    b: function () {
        return l;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    o = r(991862);
let s = function (e) {
    let { currencies: n, onChange: r, selectedCurrency: s, className: l, disabled: u = !1 } = e;
    if (n.length < 2) return null;
    let c = n.map((e, n) => ({
            key: n,
            value: e,
            label: ''.concat(e.toUpperCase(), ' - ').concat((0, o.T)(e))
        })),
        d = (e) => {
            null != e && r(e);
        };
    return (0, i.jsx)(a.SingleSelect, {
        value: s,
        options: c,
        onChange: d,
        className: l,
        isDisabled: u
    });
};
function l(e) {
    let { currencies: n, className: r, children: a } = e;
    return n.length < 2
        ? null
        : (0, i.jsx)('div', {
              className: r,
              children: a
          });
}
n.Z = s;
