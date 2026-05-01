n.d(t, { z: () => l });
var i = n(192308),
    a = n(587895),
    r = n(626584),
    s = n(92077);
function l(e, t, l) {
    var o;
    let d;
    (o = () => (0, s.NQ)(e, t, l)),
        null == (d = a.A.getApplication(e))
            ? new r.A("DispatchUninstallActionCreators").log(`Application not found for game ${e}`)
            : (0, i.openModalLazy)(async () => {
                  let { default: e } = await n.e("60745").then(n.bind(n, 831120));
                  return (t) => e({ game: d, onConfirmUninstall: o, ...t });
              });
}
