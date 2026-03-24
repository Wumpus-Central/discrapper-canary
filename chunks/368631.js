n.d(t, { z: () => u });
var a = n(768908),
    i = n(586685),
    s = n(790076),
    l = n(224515),
    r = n(682262),
    o = n(531525),
    d = n(652215),
    c = n(985018);
let u = (e) => {
    let { unseenGiftCount: t, isOverlaySupported: n, paymentsBlocked: u, isEligibleForQuests: m } = e;
    return Object.freeze({
        [o.H.GUILD_BOOSTING]: {
            section: d.nc_.GUILD_BOOSTING,
            searchableTitles: [c.intl.string(c.t["+CbP2v"])],
            label: c.intl.string(c.t["+CbP2v"]),
            element: l.A,
        },
        [o.H.GIFT_INVENTORY]: {
            section: d.nc_.INVENTORY,
            searchableTitles: [c.intl.string(c.t["jcSP+g"])],
            label: c.intl.string(c.t["jcSP+g"]),
            element: i.Ay,
            ariaLabel: c.intl.string(c.t["jcSP+g"]),
            badgeCount: t,
        },
        [o.H.GIFT_CODE_REDEMPTION]: {
            section: d.nc_.INVENTORY,
            searchableTitles: [c.intl.string(c.t["il+VCo"])],
            parent: o.H.GIFT_INVENTORY,
            predicate: () => !u,
        },
        [o.H.GIFT_INVENTORY_QUESTS]: {
            section: d.nc_.INVENTORY,
            searchableTitles: [c.intl.string(c.t.JALI2K)],
            parent: o.H.GIFT_INVENTORY,
            predicate: () => m,
        },
        [o.H.GIFT_INVENTORY_LIST]: {
            section: d.nc_.INVENTORY,
            searchableTitles: [c.intl.string(c.t["9KeUbY"])],
            parent: o.H.GIFT_INVENTORY,
            predicate: () => !u,
        },
        [o.H.GIFT_BLOCKED_PAYMENTS]: {
            section: d.nc_.INVENTORY,
            searchableTitles: [c.intl.string(c.t.vwMEHS)],
            parent: o.H.GIFT_INVENTORY,
            predicate: () => u,
        },
        [o.H.REGISTERED_GAMES]: {
            section: d.nc_.REGISTERED_GAMES,
            searchableTitles: [c.intl.string(c.t.AVDyEj)],
            label: c.intl.string(c.t.AVDyEj),
            element: a.Ay,
            predicate: () => (0, r.Pi)(),
        },
        [o.H.OVERLAY]: {
            section: d.nc_.OVERLAY,
            searchableTitles: [c.intl.string(c.t["9cb1Uz"]), c.intl.string(c.t.HcoRu0)],
            label: c.intl.string(c.t["9cb1Uz"]),
            element: s.Ay,
            predicate: () => n,
        },
    });
};
