n.d(e, { U: () => _ });
var i = n(54381);
n(473749);
var l = n(657707),
    s = n(688465),
    u = n(612659),
    r = n(299886),
    a = n(773275),
    o = n(509613),
    c = n(970013),
    S = n(313789),
    d = n(620163),
    T = n(888645),
    g = n(388032),
    E = n(665525);
let I = (0, o.wf)(S.n.PRIVATE_BROWSING_PANEL, {
        useTitle: () => g.intl.string(E.default.bU5ANm),
        useBadge: () => (0, i.jsx)(s.Z, {}),
        buildLayout: () => [T.m],
    }),
    _ = (0, o.m7)(S.n.PRIVATE_BROWSING_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(E.default.bU5ANm),
        icon: l.enf,
        usePredicate: () => {
            let t = (0, u.m)(),
                { isSupportedPrivateBrowsingPerkPlatform: e, isWeb: n, perkAvailableToUser: i } = (0, a.xf)(),
                { enabled: l } = r.H.useConfig({ location: "private_browsing_perk_settings_page" });
            return l && (e || n) && (!t || i);
        },
        buildLayout: () => [I],
        trailing: {
            type: c.W.BADGE_NEW,
            getDismissibleContentTypes: d._x,
        },
    });
