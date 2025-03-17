n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(456100),
    l = n(749681),
    o = n(258971),
    c = n(49898),
    s = n(388032);
function d(e) {
    let { enabled: t } = a.c.useExperiment({ location: 'useApplicationDirectoryItem' }, { autoTrackExposure: !0 }),
        n = t ? r.iWm : r.jje;
    return (0, i.jsx)(r.sNh, {
        id: 'application-directory',
        label: (0, i.jsx)(i.Fragment, { children: s.NW.string(s.t.AKcFUl) }),
        icon: n,
        action: () => {
            (0, l.transitionToGlobalDiscovery)({
                tab: c.GlobalDiscoveryTab.APPS,
                newSessionState: {
                    entrypoint: { name: o.xF.GUILD_HEADER_POPOUT },
                    guildId: e.id
                }
            });
        }
    });
}
