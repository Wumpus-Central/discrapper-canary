n.d(e, { U: () => N });
var i = n(54381);
n(473749);
var l = n(657707),
    s = n(688465),
    u = n(612659),
    r = n(299886),
    a = n(773275),
    o = n(509613),
    c = n(970013),
    d = n(313789),
    S = n(620163),
    T = n(55467),
    E = n(726985),
    g = n(388032),
    I = n(237396);
let _ = (0, o.x1)(d.n.PRIVATE_BROWSING_PANE, {
        StronglyDiscouragedCustomComponent: T.R,
        buildLayout: () => [],
    }),
    O = (0, o.wf)(d.n.PRIVATE_BROWSING_PANEL, {
        useTitle: () => g.intl.string(I.default.bU5ANm),
        useBadge: () => (0, i.jsx)(s.Z, {}),
        buildLayout: () => [_],
    }),
    N = (0, o.m7)(d.n.PRIVATE_BROWSING_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(I.default.bU5ANm),
        getLegacySearchKey: () => E.s6.PRIVATE_BROWSING_PERK,
        icon: l.enf,
        usePredicate: () => {
            let t = (0, u.m)(),
                { isSupportedPrivateBrowsingPerkPlatform: e, isWeb: n, perkAvailableToUser: i } = (0, a.xf)(),
                { enabled: l } = r.H.useConfig({ location: "private_browsing_perk_settings_page" });
            return l && (e || n) && (!t || i);
        },
        buildLayout: () => [O],
        trailing: {
            type: c.W.BADGE_NEW,
            getDismissibleContentTypes: S._x,
            stronglyDiscouragedBadgeComponent: S.ec,
        },
    });
