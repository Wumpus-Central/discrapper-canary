n.d(t, { Z: () => d });
var i = n(255367);
n(73800);
var a = n(481060),
    r = n(456100),
    l = n(749681),
    o = n(258971),
    s = n(49898),
    c = n(388032);
function d(e) {
    let { enabled: t } = r.c.useExperiment({ location: 'useApplicationDirectoryItem' }, { autoTrackExposure: !0 }),
        n = t ? a.iWm : a.jje;
    return (0, i.jsx)(a.sNh, {
        id: 'application-directory',
        label: (0, i.jsx)(i.Fragment, { children: c.intl.string(c.t.AKcFUl) }),
        icon: n,
        action: () => {
            (0, l.transitionToGlobalDiscovery)({
                tab: s.GlobalDiscoveryTab.APPS,
                newSessionState: {
                    entrypoint: { name: o.xF.GUILD_HEADER_POPOUT },
                    guildId: e.id
                }
            });
        }
    });
}
