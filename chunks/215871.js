n.d(e, { b: () => N });
var i = n(657707),
    l = n(509613),
    s = n(313789),
    u = n(526665),
    r = n(794704),
    a = n(168308),
    o = n(732120),
    T = n(920819),
    S = n(768381),
    c = n(853111),
    E = n(773458),
    d = n(726985),
    _ = n(388032);
let g = (0, l.wf)(s.n.OVERLAY_PANEL, {
        usePredicate: () => (0, u.gN)("OverlayPanel"),
        useTitle: () => _.intl.string(_.t["9cb1Uz"]),
        buildLayout: () => [c.I, o.K, T.n, E.k, S.N],
    }),
    I = (0, l.wf)(s.n.OVERLAY_PANEL, {
        usePredicate: () => !(0, u.gN)("OverlayPanel"),
        useTitle: () => _.intl.string(_.t["9cb1Uz"]),
        StronglyDiscouragedCustomComponent: r.ZP,
        buildLayout: () => [],
    }),
    N = (0, l.m7)(s.n.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t["9cb1Uz"]),
        icon: i.epB,
        usePredicate: a.bC,
        getLegacySearchKey: () => ((0, u.Gl)("OverlayPanel") ? void 0 : d.s6.OVERLAY),
        buildLayout: () => ((0, u.Gl)("OverlayPanel") ? [g] : [I]),
    });
