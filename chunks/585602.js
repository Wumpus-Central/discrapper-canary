n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(937615),
    o = n(653798),
    a = n(388032);
function s(e) {
    let { invoice: t } = e;
    return t.taxInclusive || t.tax <= 0
        ? null
        : (0, r.jsx)(o.R$, {
              label: a.NW.string(a.t.jiRvCw),
              value: (0, i.T4)(t.tax, t.currency)
          });
}
