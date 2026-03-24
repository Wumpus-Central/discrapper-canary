n.d(t, { zj: () => T }), n(321073);
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
    h = n(517235),
    x = n(768908),
    p = n(586685),
    g = n(790076),
    _ = n(224515),
    f = n(682262),
    v = n(531525),
    b = n(652215),
    j = n(985018);
let A = () => {
        let e = [];
        return e.push(i.M.DISPLAY_NAME_STYLES_NEW_BADGE), e;
    },
    C = () => {
        let e = A(),
            [t] = (0, d.kn)(e);
        return t === i.M.DISPLAY_NAME_STYLES_NEW_BADGE ? (0, a.jsx)(s.LpS, { text: j.intl.string(j.t.y2b7CA) }) : null;
    },
    T = (e) => {
        let { unseenGiftCount: t, isOverlaySupported: n, paymentsBlocked: i, isEligibleForQuests: s } = e;
        return Object.freeze({
            [v.H.PROFILE_CUSTOMIZATION]: {
                section: b.nc_.PROFILE_CUSTOMIZATION,
                type: o.Py.WIDE,
                searchableTitles: [j.intl.string(j.t["vi7f+q"])],
                label: j.intl.string(j.t["vi7f+q"]),
                ariaLabel: j.intl.string(j.t["vi7f+q"]),
                element: u.A,
                newIndicator: (0, a.jsx)(C, {}),
                newIndicatorDismissibleContentTypes: [...A()],
                notice: { stores: [m.A], element: c.A },
                onSettingsClose: () => {
                    (0, l.F7)(), r.A.clearSubsection(b.nc_.PROFILE_CUSTOMIZATION);
                },
            },
            [v.H.PROFILE_DISPLAY_NAME]: {
                section: b.nc_.PROFILE_CUSTOMIZATION,
                searchableTitles: [j.intl.string(j.t["9AjdkD"])],
                parent: v.H.PROFILE_CUSTOMIZATION,
            },
            [v.H.PROFILE_USER_PROFILE]: {
                section: b.nc_.PROFILE_CUSTOMIZATION,
                searchableTitles: [j.intl.string(j.t["2p07FR"]), j.intl.string(j.t["7vhiqk"])],
                parent: v.H.PROFILE_CUSTOMIZATION,
            },
            [v.H.PROFILE_SERVER_PROFILES]: {
                section: b.nc_.PROFILE_CUSTOMIZATION,
                searchableTitles: [j.intl.string(j.t.kPHroX)],
                parent: v.H.PROFILE_CUSTOMIZATION,
            },
            [v.H.PREMIUM]: {
                section: b.nc_.PREMIUM,
                ariaLabel: j.intl.string(j.t.Ipxkog),
                searchableTitles: [j.intl.string(j.t.Ipxkog)],
                label: j.intl.string(j.t.Ipxkog),
                element: h.A,
            },
            [v.H.GUILD_BOOSTING]: {
                section: b.nc_.GUILD_BOOSTING,
                searchableTitles: [j.intl.string(j.t["+CbP2v"])],
                label: j.intl.string(j.t["+CbP2v"]),
                element: _.A,
            },
            [v.H.GIFT_INVENTORY]: {
                section: b.nc_.INVENTORY,
                searchableTitles: [j.intl.string(j.t["jcSP+g"])],
                label: j.intl.string(j.t["jcSP+g"]),
                element: p.Ay,
                ariaLabel: j.intl.string(j.t["jcSP+g"]),
                badgeCount: t,
            },
            [v.H.GIFT_CODE_REDEMPTION]: {
                section: b.nc_.INVENTORY,
                searchableTitles: [j.intl.string(j.t["il+VCo"])],
                parent: v.H.GIFT_INVENTORY,
                predicate: () => !i,
            },
            [v.H.GIFT_INVENTORY_QUESTS]: {
                section: b.nc_.INVENTORY,
                searchableTitles: [j.intl.string(j.t.JALI2K)],
                parent: v.H.GIFT_INVENTORY,
                predicate: () => s,
            },
            [v.H.GIFT_INVENTORY_LIST]: {
                section: b.nc_.INVENTORY,
                searchableTitles: [j.intl.string(j.t["9KeUbY"])],
                parent: v.H.GIFT_INVENTORY,
                predicate: () => !i,
            },
            [v.H.GIFT_BLOCKED_PAYMENTS]: {
                section: b.nc_.INVENTORY,
                searchableTitles: [j.intl.string(j.t.vwMEHS)],
                parent: v.H.GIFT_INVENTORY,
                predicate: () => i,
            },
            [v.H.REGISTERED_GAMES]: {
                section: b.nc_.REGISTERED_GAMES,
                searchableTitles: [j.intl.string(j.t.AVDyEj)],
                label: j.intl.string(j.t.AVDyEj),
                element: x.Ay,
                predicate: () => (0, f.Pi)(),
            },
            [v.H.OVERLAY]: {
                section: b.nc_.OVERLAY,
                searchableTitles: [j.intl.string(j.t["9cb1Uz"]), j.intl.string(j.t.HcoRu0)],
                label: j.intl.string(j.t["9cb1Uz"]),
                element: g.Ay,
                predicate: () => n,
            },
        });
    };
