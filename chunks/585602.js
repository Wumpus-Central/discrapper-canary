n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var r = n(937615),
    a = n(653798),
    s = n(388032);
function o(e) {
    let { invoice: t } = e;
    return t.taxInclusive || t.tax <= 0
        ? null
        : (0, i.jsx)(a.R$, {
              label: s.intl.string(s.t.jiRvCw),
              value: (0, r.T4)(t.tax, t.currency)
          });
}
