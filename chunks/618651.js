n.d(t, { D: () => s });
var i = n(562708),
    r = n(390595),
    a = n(183636);
function s() {
    let e = (0, r.Vc)(),
        t = (0, i.getSuperProperties)(),
        n = {},
        s = e?.uuid;
    s !== t?.client_heartbeat_session_id && (n.client_heartbeat_session_id = s);
    let l = a.A.getState();
    l !== t?.client_app_state && (n.client_app_state = l), Object.keys(n).length > 0 && (0, i.extendSuperProperties)(n);
}
