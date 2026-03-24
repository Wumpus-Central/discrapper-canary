n.d(t, { z: () => c });
var a = n(768908),
    i = n(790076),
    s = n(224515),
    l = n(682262),
    r = n(531525),
    o = n(652215),
    d = n(985018);
let c = (e) => {
    let { isOverlaySupported: t } = e;
    return Object.freeze({
        [r.H.GUILD_BOOSTING]: {
            section: o.nc_.GUILD_BOOSTING,
            searchableTitles: [d.intl.string(d.t["+CbP2v"])],
            label: d.intl.string(d.t["+CbP2v"]),
            element: s.A,
        },
        [r.H.REGISTERED_GAMES]: {
            section: o.nc_.REGISTERED_GAMES,
            searchableTitles: [d.intl.string(d.t.AVDyEj)],
            label: d.intl.string(d.t.AVDyEj),
            element: a.Ay,
            predicate: () => (0, l.Pi)(),
        },
        [r.H.OVERLAY]: {
            section: o.nc_.OVERLAY,
            searchableTitles: [d.intl.string(d.t["9cb1Uz"]), d.intl.string(d.t.HcoRu0)],
            label: d.intl.string(d.t["9cb1Uz"]),
            element: i.Ay,
            predicate: () => t,
        },
    });
};
