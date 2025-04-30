n.d(t, { Z: () => s });
var r = n(255367);
n(73800);
var i = n(937615),
    a = n(811334),
    o = n(388032);
function s(e) {
    let { invoice: t } = e;
    return t.taxInclusive || t.tax <= 0
        ? null
        : (0, r.jsx)(a.B1, {
              label: o.intl.string(o.t.jiRvCw),
              value: (0, i.T4)(t.tax, t.currency)
          });
}
