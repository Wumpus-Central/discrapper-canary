n.d(t, { z: () => s });
var i = n(192308),
    r = n(587895),
    a = n(626584),
    l = n(92077);
function s(e, t, s) {
    var o;
    let d;
    (o = () => (0, l.NQ)(e, t, s)),
        null == (d = r.A.getApplication(e))
            ? new a.A("DispatchUninstallActionCreators").log(`Application not found for game ${e}`)
            : (0, i.openModalLazy)(async () => {
                  let { default: e } = await n.e("60745").then(n.bind(n, 831120));
                  return (t) => e({ game: d, onConfirmUninstall: o, ...t });
              });
}
