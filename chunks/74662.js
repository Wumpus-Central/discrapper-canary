n.d(e, { U: () => I });
var i = n(54381);
n(473749);
var l = n(657707),
    s = n(688465),
    u = n(612659),
    r = n(299886),
    a = n(773275),
    o = n(509613),
    S = n(970013),
    T = n(313789),
    c = n(620163),
    E = n(888645),
    d = n(388032),
    g = n(472057);
let _ = (0, o.wf)(T.n.PRIVATE_BROWSING_PANEL, {
        useTitle: () => d.intl.string(g.default.bU5ANm),
        useBadge: () => (0, i.jsx)(s.Z, {}),
        buildLayout: () => [E.m],
    }),
    I = (0, o.m7)(T.n.PRIVATE_BROWSING_SIDEBAR_ITEM, {
        useTitle: () => d.intl.string(g.default.bU5ANm),
        icon: l.enf,
        usePredicate: () => {
            let t = (0, u.m)(),
                { isSupportedPrivateBrowsingPerkPlatform: e, isWeb: n, perkAvailableToUser: i } = (0, a.xf)(),
                { enabled: l } = r.H.useConfig({ location: "private_browsing_perk_settings_page" });
            return l && (e || n) && (!t || i);
        },
        buildLayout: () => [_],
        trailing: {
            type: S.W.BADGE_NEW,
            getDismissibleContentTypes: c._x,
        },
    });
