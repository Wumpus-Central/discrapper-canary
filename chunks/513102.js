n.d(t, { Z: () => s });
var i = n(951288);
n(647438);
var r = n(481060),
    a = n(456100),
    l = n(749681),
    o = n(258971),
    c = n(49898),
    d = n(388032);
function s(e) {
    let { enabled: t } = a.c.useExperiment({ location: "useApplicationDirectoryItem" }, { autoTrackExposure: !0 }),
        n = t ? r.iWm : r.jje;
    return (0, i.jsx)(r.sNh, {
        id: "application-directory",
        label: (0, i.jsx)(i.Fragment, { children: d.intl.string(d.t.AKcFUj) }),
        icon: n,
        action: () => {
            (0, l.transitionToGlobalDiscovery)({
                tab: c.GlobalDiscoveryTab.APPS,
                newSessionState: {
                    entrypoint: { name: o.xF.GUILD_HEADER_POPOUT },
                    guildId: e.id,
                },
            });
        },
    });
}
