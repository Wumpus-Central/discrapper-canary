"use strict";
n.d(t, { z: () => o });
var i = n(192308),
    r = n(587895),
    s = n(626584),
    a = n(92077);
function o(e, t, o) {
    var l;
    let u;
    (l = () => (0, a.NQ)(e, t, o)),
        null == (u = r.A.getApplication(e))
            ? new s.A("DispatchUninstallActionCreators").log(`Application not found for game ${e}`)
            : (0, i.openModalLazy)(async () => {
                  let { default: e } = await n.e("60745").then(n.bind(n, 831120));
                  return (t) => e({ game: u, onConfirmUninstall: l, ...t });
              });
}
