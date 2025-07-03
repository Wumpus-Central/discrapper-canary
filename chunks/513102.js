n.d(t, { Z: () => c });
var i = n(255367);
n(73800);
var a = n(481060),
    r = n(456100),
    l = n(749681),
    d = n(258971),
    o = n(49898),
    s = n(388032);
function c(e) {
    let { enabled: t } = r.c.useExperiment({ location: 'useApplicationDirectoryItem' }, { autoTrackExposure: !0 }),
        n = t ? a.iWm : a.jje;
    return (0, i.jsx)(a.sNh, {
        id: 'application-directory',
        label: (0, i.jsx)(i.Fragment, { children: s.intl.string(s.t.AKcFUl) }),
        icon: n,
        action: () => {
            (0, l.transitionToGlobalDiscovery)({
                tab: o.GlobalDiscoveryTab.APPS,
                newSessionState: {
                    entrypoint: { name: d.xF.GUILD_HEADER_POPOUT },
                    guildId: e.id
                }
            });
        }
    });
}
