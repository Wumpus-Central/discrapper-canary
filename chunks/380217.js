n.d(e, { o: () => S });
var i = n(54381),
    l = n(657707),
    u = n(509613),
    r = n(313789),
    s = n(443702),
    a = n(726985),
    o = n(388032);
let c = (0, u.x1)(r.n.BILLING_PANE, {
        buildLayout: () => [],
        render: () => (0, i.jsx)(s.Z, {}),
    }),
    E = (0, u.wf)(r.n.BILLING_PANEL, {
        useTitle: () => o.intl.string(o.t.oeUm2s),
        buildLayout: () => [c],
    }),
    S = (0, u.m7)(r.n.BILLING_SIDEBAR_ITEM, {
        icon: l.ciH,
        useTitle: () => o.intl.string(o.t.oeUm2s),
        getLegacySearchKey: () => a.s6.BILLING,
        buildLayout: () => [E],
    });
