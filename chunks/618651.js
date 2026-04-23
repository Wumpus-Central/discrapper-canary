"use strict";
n.d(t, { D: () => a });
var r = n(110259),
    i = n(861638),
    s = n(183636);
function a() {
    let e = (0, i.Vc)(),
        t = (0, r.getSuperProperties)(),
        n = {},
        a = e?.uuid;
    a !== t?.client_heartbeat_session_id && (n.client_heartbeat_session_id = a);
    let o = s.A.getState();
    o !== t?.client_app_state && (n.client_app_state = o), Object.keys(n).length > 0 && (0, r.extendSuperProperties)(n);
}
