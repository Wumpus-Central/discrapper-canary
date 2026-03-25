n.d(t, { z: () => o });
var a = n(790076),
    i = n(224515),
    s = n(531525),
    l = n(652215),
    r = n(985018);
let o = (e) => {
    let { isOverlaySupported: t } = e;
    return Object.freeze({
        [s.H.GUILD_BOOSTING]: {
            section: l.nc_.GUILD_BOOSTING,
            searchableTitles: [r.intl.string(r.t["+CbP2v"])],
            label: r.intl.string(r.t["+CbP2v"]),
            element: i.A,
        },
        [s.H.OVERLAY]: {
            section: l.nc_.OVERLAY,
            searchableTitles: [r.intl.string(r.t["9cb1Uz"]), r.intl.string(r.t.HcoRu0)],
            label: r.intl.string(r.t["9cb1Uz"]),
            element: a.Ay,
            predicate: () => t,
        },
    });
};
