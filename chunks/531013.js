"use strict";
n.d(t, { OV: () => E, Xo: () => g, sZ: () => m });
var r = n(73153),
    i = n(77729),
    s = n(183636),
    a = n(626584),
    o = n(961350),
    l = n(954571),
    u = n(209489),
    c = n(723702),
    d = n(186840),
    _ = n(261811),
    f = n(500496),
    p = n(469177);
let h = new a.A("ConnectionStore"),
    m = new d.A(),
    E = new _.A(m),
    g = new f.A(m);
(m.handleIdentify = () => {
    let e = o.default.getToken();
    if ((h.verbose("handleIdentify called", { hasToken: null != e }), null == e)) return null;
    let t = s.A.getState(),
        n = o.default.getInstallationForTracking();
    return {
        token: e,
        properties: {
            ...l.default.getSuperProperties(),
            client_app_state: t,
            is_fast_connect: !1,
            gateway_connect_reasons: p.L7(),
            ...(null != n ? { installation_id: n } : {}),
        },
        presence: E.getInitialState(),
    };
}),
    (0, c.isDesktop)() &&
        i.A.powerMonitor.on("resume", () => {
            m.expeditedHeartbeat(5e3, "power monitor resumed");
        }),
    u.A.addOfflineCallback(() => {
        m.networkStateChange(15e3, "network detected offline.", !1);
    }),
    u.A.addOnlineCallback(() => {
        m.networkStateChange(5e3, "network detected online.");
    }),
    m.on("disconnect", (e) => {
        let { code: t, reason: n } = e;
        r.h.dispatch({ type: "CONNECTION_CLOSED", code: t, reason: n });
    }),
    m.on("close", (e) => {
        let { code: t, reason: n } = e;
        r.h.dispatch({ type: "CONNECTION_INTERRUPTED", code: t, reason: n });
    });
