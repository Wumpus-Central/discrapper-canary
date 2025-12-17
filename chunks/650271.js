n.d(e, { zn: () => f });
var i = n(657707),
    l = n(93262),
    s = n(990924),
    u = n(509613),
    r = n(970013),
    a = n(313789),
    o = n(526665),
    S = n(620163),
    T = n(501348),
    c = n(658091),
    E = n(601414),
    d = n(157177),
    g = n(781060),
    _ = n(142751),
    I = n(490555),
    N = n(726985),
    A = n(388032);
let O = (0, u.wf)(a.n.APPEARANCE_PANEL, {
        useTitle: () => A.intl.string(A.t["iHH+ky"]),
        initialize: () => {
            s.y.getConfig({ location: "AppearancePane" }).enabled && (0, l.w)();
        },
        buildLayout: () => [_.D, E.l, I.G, d.K, g.t, c.R],
    }),
    C = (0, u.wf)(a.n.APPEARANCE_PANEL, {
        useTitle: () => A.intl.string(A.t["iHH+ky"]),
        StronglyDiscouragedCustomComponent: T.ZP,
        buildLayout: () => [],
    }),
    f = (0, u.m7)(a.n.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => A.intl.string(A.t["iHH+ky"]),
        getLegacySearchKey: () => ((0, o.Gl)("AppearanceSidebarItem") ? void 0 : N.s6.APPEARANCE),
        icon: i.V3v,
        trailing: {
            type: r.W.BADGE_NEW,
            getDismissibleContentTypes: S.$Z,
            stronglyDiscouragedBadgeComponent: S.c$,
        },
        buildLayout: () => ((0, o.Gl)("AppearanceSidebarItem") ? [O] : [C]),
    });
