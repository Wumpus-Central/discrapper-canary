n.d(e, { ts: () => E });
var i = n(657707),
    l = n(509613),
    s = n(313789),
    r = n(526665),
    u = n(309739),
    a = n(418878),
    o = n(330187),
    c = n(87513),
    d = n(726985),
    T = n(388032);
let g = (0, l.wf)(s.n.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => T.intl.string(T.t.Cq98yL),
        StronglyDiscouragedCustomComponent: u.ZP,
        buildLayout: () => [],
        usePredicate: () => !(0, r.gN)("ActivityPrivacyPanel"),
    }),
    S = (0, l.wf)(s.n.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => T.intl.string(T.t.Cq98yL),
        usePredicate: () => (0, r.gN)("ActivityPrivacyPanel"),
        buildLayout: () => [a.v, o.b, c.o],
    }),
    E = (0, l.m7)(s.n.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => T.intl.string(T.t.Cq98yL),
        getLegacySearchKey: () => ((0, r.Gl)("ActivityPrivacyPanel") ? void 0 : d.s6.ACTIVITY_PRIVACY),
        icon: i.KED,
        buildLayout: () => ((0, r.Gl)("ActivityPrivacyPanel") ? [S] : [g]),
    });
