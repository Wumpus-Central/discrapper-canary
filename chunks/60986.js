n.d(t, { K: () => m });
var r = n(255367),
    i = n(73800),
    l = n(481060),
    s = n(37234),
    a = n(749681),
    o = n(258971),
    c = n(49898),
    d = n(388032),
    u = n(544627);
function m(e) {
    let t = i.useCallback(() => {
        ((0, a.transitionToGlobalDiscovery)({
            tab: c.GlobalDiscoveryTab.APPS,
            newSessionState: {
                guildId: e.guildId,
                entrypoint: {
                    name: o.xF.GUILD_SETTINGS,
                    guildSettingsSection: e.section
                }
            }
        }),
            (0, s.xf)());
    }, [e.guildId, e.section]);
    return (0, r.jsxs)(l.P3F, {
        onClick: t,
        className: u.rowContainer,
        children: [
            (0, r.jsx)('div', { children: d.intl.string(d.t.AKcFUl) }),
            (0, r.jsx)(l.rgF, {
                size: 'xs',
                color: 'currentColor',
                className: u.linkIcon
            })
        ]
    });
}
