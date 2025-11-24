n.d(t, { Z: () => s });
var i = n(54381);
n(473749);
var r = n(481060),
    a = n(749681),
    l = n(258971),
    o = n(49898),
    c = n(388032);
function s(e) {
    return (0, i.jsx)(r.sNh, {
        id: "application-directory",
        label: (0, i.jsx)(i.Fragment, { children: c.intl.string(c.t.AKcFUj) }),
        icon: r.jje,
        action: () => {
            (0, a.transitionToGlobalDiscovery)({
                tab: o.GlobalDiscoveryTab.APPS,
                newSessionState: {
                    entrypoint: { name: l.xF.GUILD_HEADER_POPOUT },
                    guildId: e.id,
                },
            });
        },
    });
}
