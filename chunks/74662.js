n.d(e, { U: () => N });
var i = n(54381);
n(473749);
var l = n(657707),
    r = n(688465),
    u = n(612659),
    s = n(953865),
    a = n(299886),
    o = n(509613),
    c = n(28682),
    d = n(313789),
    E = n(620163),
    T = n(55467),
    S = n(726985),
    I = n(388032),
    O = n(163646);
let g = (0, o.x1)(d.n.PRIVATE_BROWSING_PANE, {
        buildLayout: () => [],
        render: () => (0, i.jsx)(T.R, {}),
    }),
    _ = (0, o.wf)(d.n.PRIVATE_BROWSING_PANEL, {
        useTitle: () => I.intl.string(O.default.bU5ANm),
        useBadge: () => (0, i.jsx)(r.Z, {}),
        buildLayout: () => [g],
    }),
    N = (0, o.m7)(d.n.PRIVATE_BROWSING_SIDEBAR_ITEM, {
        icon: l.enf,
        useTitle: () => I.intl.string(O.default.bU5ANm),
        getLegacySearchKey: () => S.s6.PRIVATE_BROWSING_PERK,
        buildLayout: () => [_],
        usePredicate: () => {
            let t = (0, u.m)(),
                { isSupportedPrivateBrowsingPerkPlatform: e, isWeb: n, perkAvailableToUser: i } = (0, s.xf)(),
                { enabled: l } = a.H.useConfig({ location: "private_browsing_perk_settings_page" });
            return l && (e || n) && (!t || i);
        },
        trailing: {
            type: c.PU.BADGE_NEW,
            getDismissibleContentTypes: E._x,
            badgeComponent: E.ec,
        },
    });
