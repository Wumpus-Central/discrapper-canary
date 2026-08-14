"use strict";
n.d(t, { z: () => l });
var i = n(192308),
    r = n(587895),
    a = n(626584),
    s = n(92077);
function l(e, t, l) {
    var o;
    let d;
    (o = () => (0, s.NQ)(e, t, l)),
        null == (d = r.A.getApplication(e))
            ? new a.A("DispatchUninstallActionCreators").log(`Application not found for game ${e}`)
            : (0, i.openModalLazy)(async () => {
                  let { default: e } = await n.e("760745").then(n.bind(n, 831120));
                  return (t) => e({ game: d, onConfirmUninstall: o, ...t });
              });
}
