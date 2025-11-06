n.d(e, { o: () => d });
var i = n(951288),
    l = n(657707),
    r = n(509613),
    u = n(313789),
    s = n(443702),
    a = n(726985),
    o = n(388032);
let c = (0, r.x1)(u.n.BILLING_PANE, {
        buildLayout: () => [],
        render: () => (0, i.jsx)(s.Z, {}),
    }),
    E = (0, r.wf)(u.n.BILLING_PANEL, {
        useTitle: () => o.intl.string(o.t.oeUm2s),
        buildLayout: () => [c],
    }),
    d = (0, r.m7)(u.n.BILLING_SIDEBAR_ITEM, {
        icon: l.ciH,
        useTitle: () => o.intl.string(o.t.oeUm2s),
        getLegacySearchKey: () => a.s6.BILLING,
        buildLayout: () => [E],
    });
