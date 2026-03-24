n.d(t, { zj: () => C }), n(321073);
var a = n(627968),
    i = n(554146),
    s = n(397927),
    l = n(631670),
    r = n(252452),
    o = n(361739),
    d = n(932001),
    c = n(103738),
    u = n(745109),
    m = n(836602),
    h = n(768908),
    x = n(586685),
    p = n(790076),
    g = n(224515),
    _ = n(682262),
    f = n(531525),
    v = n(652215),
    b = n(985018);
let j = () => {
        let e = [];
        return e.push(i.M.DISPLAY_NAME_STYLES_NEW_BADGE), e;
    },
    A = () => {
        let e = j(),
            [t] = (0, d.kn)(e);
        return t === i.M.DISPLAY_NAME_STYLES_NEW_BADGE ? (0, a.jsx)(s.LpS, { text: b.intl.string(b.t.y2b7CA) }) : null;
    },
    C = (e) => {
        let { unseenGiftCount: t, isOverlaySupported: n, paymentsBlocked: i, isEligibleForQuests: s } = e;
        return Object.freeze({
            [f.H.PROFILE_CUSTOMIZATION]: {
                section: v.nc_.PROFILE_CUSTOMIZATION,
                type: o.Py.WIDE,
                searchableTitles: [b.intl.string(b.t["vi7f+q"])],
                label: b.intl.string(b.t["vi7f+q"]),
                ariaLabel: b.intl.string(b.t["vi7f+q"]),
                element: u.A,
                newIndicator: (0, a.jsx)(A, {}),
                newIndicatorDismissibleContentTypes: [...j()],
                notice: { stores: [m.A], element: c.A },
                onSettingsClose: () => {
                    (0, l.F7)(), r.A.clearSubsection(v.nc_.PROFILE_CUSTOMIZATION);
                },
            },
            [f.H.PROFILE_DISPLAY_NAME]: {
                section: v.nc_.PROFILE_CUSTOMIZATION,
                searchableTitles: [b.intl.string(b.t["9AjdkD"])],
                parent: f.H.PROFILE_CUSTOMIZATION,
            },
            [f.H.PROFILE_USER_PROFILE]: {
                section: v.nc_.PROFILE_CUSTOMIZATION,
                searchableTitles: [b.intl.string(b.t["2p07FR"]), b.intl.string(b.t["7vhiqk"])],
                parent: f.H.PROFILE_CUSTOMIZATION,
            },
            [f.H.PROFILE_SERVER_PROFILES]: {
                section: v.nc_.PROFILE_CUSTOMIZATION,
                searchableTitles: [b.intl.string(b.t.kPHroX)],
                parent: f.H.PROFILE_CUSTOMIZATION,
            },
            [f.H.GUILD_BOOSTING]: {
                section: v.nc_.GUILD_BOOSTING,
                searchableTitles: [b.intl.string(b.t["+CbP2v"])],
                label: b.intl.string(b.t["+CbP2v"]),
                element: g.A,
            },
            [f.H.GIFT_INVENTORY]: {
                section: v.nc_.INVENTORY,
                searchableTitles: [b.intl.string(b.t["jcSP+g"])],
                label: b.intl.string(b.t["jcSP+g"]),
                element: x.Ay,
                ariaLabel: b.intl.string(b.t["jcSP+g"]),
                badgeCount: t,
            },
            [f.H.GIFT_CODE_REDEMPTION]: {
                section: v.nc_.INVENTORY,
                searchableTitles: [b.intl.string(b.t["il+VCo"])],
                parent: f.H.GIFT_INVENTORY,
                predicate: () => !i,
            },
            [f.H.GIFT_INVENTORY_QUESTS]: {
                section: v.nc_.INVENTORY,
                searchableTitles: [b.intl.string(b.t.JALI2K)],
                parent: f.H.GIFT_INVENTORY,
                predicate: () => s,
            },
            [f.H.GIFT_INVENTORY_LIST]: {
                section: v.nc_.INVENTORY,
                searchableTitles: [b.intl.string(b.t["9KeUbY"])],
                parent: f.H.GIFT_INVENTORY,
                predicate: () => !i,
            },
            [f.H.GIFT_BLOCKED_PAYMENTS]: {
                section: v.nc_.INVENTORY,
                searchableTitles: [b.intl.string(b.t.vwMEHS)],
                parent: f.H.GIFT_INVENTORY,
                predicate: () => i,
            },
            [f.H.REGISTERED_GAMES]: {
                section: v.nc_.REGISTERED_GAMES,
                searchableTitles: [b.intl.string(b.t.AVDyEj)],
                label: b.intl.string(b.t.AVDyEj),
                element: h.Ay,
                predicate: () => (0, _.Pi)(),
            },
            [f.H.OVERLAY]: {
                section: v.nc_.OVERLAY,
                searchableTitles: [b.intl.string(b.t["9cb1Uz"]), b.intl.string(b.t.HcoRu0)],
                label: b.intl.string(b.t["9cb1Uz"]),
                element: p.Ay,
                predicate: () => n,
            },
        });
    };
