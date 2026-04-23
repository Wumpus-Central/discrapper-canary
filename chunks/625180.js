"use strict";
n.d(t, { A: () => c });
var r = n(523527),
    i = n(267102),
    s = n(87001),
    a = n(574172),
    o = n(21515),
    l = n(652215);
async function u(e) {
    let t = (0, i.zd)();
    s.A.getWindowOpen(l.MLl.ACTIVITY_POPOUT) && (0, a.close)(l.MLl.ACTIVITY_POPOUT),
        await o.launchFrame(e),
        t === l.BRT.POPOUT && (0, r.A)();
}
let c = { ...o, launchFrame: u };
