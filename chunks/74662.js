n.d(e, { U: () => N });
var i = n(54381);
n(473749);
var l = n(657707),
    s = n(688465),
    r = n(612659),
    u = n(299886),
    a = n(773275),
    o = n(509613),
    c = n(28682),
    d = n(313789),
    E = n(620163),
    S = n(55467),
    I = n(726985),
    T = n(388032),
    g = n(163646);
let _ = (0, o.x1)(d.n.PRIVATE_BROWSING_PANE, {
        render: () => (0, i.jsx)(S.R, {}),
        buildLayout: () => [],
    }),
    O = (0, o.wf)(d.n.PRIVATE_BROWSING_PANEL, {
        useTitle: () => T.intl.string(g.default.bU5ANm),
        useBadge: () => (0, i.jsx)(s.Z, {}),
        buildLayout: () => [_],
    }),
    N = (0, o.m7)(d.n.PRIVATE_BROWSING_SIDEBAR_ITEM, {
        useTitle: () => T.intl.string(g.default.bU5ANm),
        getLegacySearchKey: () => I.s6.PRIVATE_BROWSING_PERK,
        icon: l.enf,
        trailing: {
            type: c.PU.BADGE_NEW,
            getDismissibleContentTypes: E._x,
            badgeComponent: E.ec,
        },
        usePredicate: () => {
            let t = (0, r.m)(),
                { isSupportedPrivateBrowsingPerkPlatform: e, isWeb: n, perkAvailableToUser: i } = (0, a.xf)(),
                { enabled: l } = u.H.useConfig({ location: "private_browsing_perk_settings_page" });
            return l && (e || n) && (!t || i);
        },
        buildLayout: () => [O],
    });
