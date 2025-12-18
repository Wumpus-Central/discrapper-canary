n.d(e, { zn: () => C });
var i = n(657707),
    l = n(93262),
    s = n(509613),
    u = n(970013),
    r = n(313789),
    a = n(526665),
    o = n(620163),
    S = n(501348),
    T = n(658091),
    c = n(601414),
    E = n(157177),
    d = n(781060),
    g = n(142751),
    _ = n(490555),
    I = n(726985),
    N = n(388032);
let A = (0, s.wf)(r.n.APPEARANCE_PANEL, {
        useTitle: () => N.intl.string(N.t["iHH+ky"]),
        initialize: () => {
            (0, l.w)();
        },
        buildLayout: () => [g.D, c.l, _.G, E.K, d.t, T.R],
    }),
    O = (0, s.wf)(r.n.APPEARANCE_PANEL, {
        useTitle: () => N.intl.string(N.t["iHH+ky"]),
        StronglyDiscouragedCustomComponent: S.ZP,
        buildLayout: () => [],
    }),
    C = (0, s.m7)(r.n.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => N.intl.string(N.t["iHH+ky"]),
        getLegacySearchKey: () => ((0, a.Gl)("AppearanceSidebarItem") ? void 0 : I.s6.APPEARANCE),
        icon: i.V3v,
        trailing: {
            type: u.W.BADGE_NEW,
            getDismissibleContentTypes: o.$Z,
            stronglyDiscouragedBadgeComponent: o.c$,
        },
        buildLayout: () => ((0, a.Gl)("AppearanceSidebarItem") ? [A] : [O]),
    });
