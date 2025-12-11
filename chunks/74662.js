n.d(e, { U: () => O });
var i = n(54381);
n(473749);
var l = n(657707),
    s = n(688465),
    r = n(612659),
    u = n(299886),
    a = n(773275),
    o = n(509613),
    c = n(970013),
    d = n(313789),
    S = n(620163),
    g = n(55467),
    T = n(726985),
    E = n(388032),
    I = n(36385);
let _ = (0, o.wf)(d.n.PRIVATE_BROWSING_PANEL, {
        useTitle: () => E.intl.string(I.default.bU5ANm),
        useBadge: () => (0, i.jsx)(s.Z, {}),
        StronglyDiscouragedCustomComponent: g.R,
        buildLayout: () => [],
    }),
    O = (0, o.m7)(d.n.PRIVATE_BROWSING_SIDEBAR_ITEM, {
        useTitle: () => E.intl.string(I.default.bU5ANm),
        getLegacySearchKey: () => T.s6.PRIVATE_BROWSING_PERK,
        icon: l.enf,
        usePredicate: () => {
            let t = (0, r.m)(),
                { isSupportedPrivateBrowsingPerkPlatform: e, isWeb: n, perkAvailableToUser: i } = (0, a.xf)(),
                { enabled: l } = u.H.useConfig({ location: "private_browsing_perk_settings_page" });
            return l && (e || n) && (!t || i);
        },
        buildLayout: () => [_],
        trailing: {
            type: c.W.BADGE_NEW,
            getDismissibleContentTypes: S._x,
        },
    });
