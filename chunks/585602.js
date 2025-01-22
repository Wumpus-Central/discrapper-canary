r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(200651);
r(192379);
var a = r(937615),
    o = r(653798),
    s = r(388032);
function l(e) {
    let { invoice: n } = e;
    return n.taxInclusive || n.tax <= 0
        ? null
        : (0, i.jsx)(o.R$, {
              label: s.intl.string(s.t.jiRvCw),
              value: (0, a.T4)(n.tax, n.currency)
          });
}
