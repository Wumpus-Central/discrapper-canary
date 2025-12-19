n.d(e, { U: () => I });
var i = n(54381);
n(473749);
var l = n(657707),
    s = n(688465),
    u = n(612659),
    r = n(299886),
    a = n(773275),
    o = n(509613),
    T = n(970013),
    S = n(313789),
    c = n(620163),
    E = n(888645),
    d = n(388032),
    _ = n(472057);
let g = (0, o.wf)(S.n.PRIVATE_BROWSING_PANEL, {
        useTitle: () => d.intl.string(_.default.bU5ANm),
        useBadge: () => (0, i.jsx)(s.Z, {}),
        buildLayout: () => [E.m],
    }),
    I = (0, o.m7)(S.n.PRIVATE_BROWSING_SIDEBAR_ITEM, {
        useTitle: () => d.intl.string(_.default.bU5ANm),
        icon: l.enf,
        usePredicate: () => {
            let t = (0, u.m)(),
                { isSupportedPrivateBrowsingPerkPlatform: e, isWeb: n, perkAvailableToUser: i } = (0, a.xf)(),
                { enabled: l } = r.H.useConfig({ location: "private_browsing_perk_settings_page" });
            return l && (e || n) && (!t || i);
        },
        buildLayout: () => [g],
        trailing: {
            type: T.W.BADGE_NEW,
            getDismissibleContentTypes: c._x,
        },
    });
