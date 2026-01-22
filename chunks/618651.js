n.d(t, { D: () => s });
var r = n(110259),
    i = n(861638),
    a = n(183636);
function s() {
    let e = (0, i.Vc)(),
        t = (0, r.getSuperProperties)(),
        n = {},
        s = null == e ? void 0 : e.uuid;
    s !== (null == t ? void 0 : t.client_heartbeat_session_id) && (n.client_heartbeat_session_id = s);
    let o = a.A.getState();
    o !== (null == t ? void 0 : t.client_app_state) && (n.client_app_state = o),
        Object.keys(n).length > 0 && (0, r.extendSuperProperties)(n);
}
