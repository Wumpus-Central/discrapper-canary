n.d(e, { o: () => E });
var i = n(54381),
    r = n(657707),
    l = n(509613),
    u = n(313789),
    s = n(443702),
    a = n(726985),
    o = n(388032);
let c = (0, l.x1)(u.n.BILLING_PANE, {
        buildLayout: () => [],
        render: () => (0, i.jsx)(s.Z, {}),
    }),
    d = (0, l.wf)(u.n.BILLING_PANEL, {
        useTitle: () => o.intl.string(o.t.oeUm2s),
        buildLayout: () => [c],
    }),
    E = (0, l.m7)(u.n.BILLING_SIDEBAR_ITEM, {
        icon: r.ciH,
        useTitle: () => o.intl.string(o.t.oeUm2s),
        getLegacySearchKey: () => a.s6.BILLING,
        buildLayout: () => [d],
    });
