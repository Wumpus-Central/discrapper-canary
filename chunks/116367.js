n.d(t, { D: () => s });
var r = n(818083),
    i = n(960048);
let a = !1,
    o = (0, r.B)({
        kind: 'user',
        id: '2025-06_qos_heartbeat',
        label: 'Websocket QOS Heartbeat',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Send new QOS Heartbeat',
                config: { enabled: !0 }
            }
        ]
    });
function s() {
    let e = o.getCurrentConfig({ location: '1' }).enabled;
    return e && !a && ((a = !0), i.Z.addBreadcrumb({ message: 'QOS Heartbeat Experiment Enabled' })), e;
}
