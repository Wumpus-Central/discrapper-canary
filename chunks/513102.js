n.d(t, { Z: () => d });
var i = n(255367);
n(73800);
var r = n(481060),
    l = n(456100),
    a = n(749681),
    o = n(258971),
    c = n(49898),
    s = n(388032);
function d(e) {
    let { enabled: t } = l.c.useExperiment({ location: 'useApplicationDirectoryItem' }, { autoTrackExposure: !0 }),
        n = t ? r.iWm : r.jje;
    return (0, i.jsx)(r.sNh, {
        id: 'application-directory',
        label: (0, i.jsx)(i.Fragment, { children: s.intl.string(s.t.AKcFUl) }),
        icon: n,
        action: () => {
            (0, a.transitionToGlobalDiscovery)({
                tab: c.GlobalDiscoveryTab.APPS,
                newSessionState: {
                    entrypoint: { name: o.xF.GUILD_HEADER_POPOUT },
                    guildId: e.id
                }
            });
        }
    });
}
