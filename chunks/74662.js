n.d(e, { U: () => N });
var i = n(54381);
n(473749);
var r = n(657707),
    l = n(688465),
    s = n(612659),
    u = n(299886),
    a = n(773275),
    o = n(509613),
    c = n(28682),
    d = n(313789),
    E = n(620163),
    S = n(55467),
    T = n(726985),
    I = n(388032),
    g = n(163646);
let O = (0, o.x1)(d.n.PRIVATE_BROWSING_PANE, {
        buildLayout: () => [],
        render: () => (0, i.jsx)(S.R, {}),
    }),
    _ = (0, o.wf)(d.n.PRIVATE_BROWSING_PANEL, {
        useTitle: () => I.intl.string(g.default.bU5ANm),
        useBadge: () => (0, i.jsx)(l.Z, {}),
        buildLayout: () => [O],
    }),
    N = (0, o.m7)(d.n.PRIVATE_BROWSING_SIDEBAR_ITEM, {
        icon: r.enf,
        useTitle: () => I.intl.string(g.default.bU5ANm),
        getLegacySearchKey: () => T.s6.PRIVATE_BROWSING_PERK,
        buildLayout: () => [_],
        usePredicate: () => {
            let t = (0, s.m)(),
                { isSupportedPrivateBrowsingPerkPlatform: e, isWeb: n, perkAvailableToUser: i } = (0, a.xf)(),
                { enabled: r } = u.H.useConfig({ location: "private_browsing_perk_settings_page" });
            return r && (e || n) && (!t || i);
        },
        trailing: {
            type: c.PU.BADGE_NEW,
            getDismissibleContentTypes: E._x,
            badgeComponent: E.ec,
        },
    });
