n.d(e, { b: () => S });
var i = n(657707),
    l = n(509613),
    u = n(313789),
    r = n(327885),
    s = n(168308),
    a = n(726985),
    o = n(388032);
let c = (0, l.x1)(u.n.OVERLAY_PANE, {
        buildLayout: () => [],
        render: r.Z,
    }),
    E = (0, l.wf)(u.n.OVERLAY_PANEL, {
        useTitle: () => o.intl.string(o.t["9cb1Uz"]),
        buildLayout: () => [c],
    }),
    S = (0, l.m7)(u.n.OVERLAY_SIDEBAR_ITEM, {
        icon: i.epB,
        useTitle: () => o.intl.string(o.t["9cb1Uz"]),
        getLegacySearchKey: () => a.s6.OVERLAY,
        usePredicate: s.bC,
        buildLayout: () => [E],
    });
