n.d(e, { a: () => S });
var i = n(54381),
    l = n(657707),
    u = n(509613),
    r = n(313789),
    s = n(649157),
    a = n(726985),
    o = n(388032);
let c = (0, u.x1)(r.n.LOCALE_PANE, {
        buildLayout: () => [],
        render: () => (0, i.jsx)(s.Z, {}),
    }),
    E = (0, u.wf)(r.n.LOCALE_PANEL, {
        useTitle: () => o.intl.string(o.t.IHMsPn),
        buildLayout: () => [c],
    }),
    S = (0, u.m7)(r.n.LOCALE_SIDEBAR_ITEM, {
        icon: l.os0,
        useTitle: () => o.intl.string(o.t.IHMsPn),
        getLegacySearchKey: () => a.s6.LANGUAGE,
        buildLayout: () => [E],
    });
