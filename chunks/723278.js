n.d(t, {
    L: () => f,
    N: () => u,
});
var r = n(627968),
    i = n(397927),
    l = n(398590),
    s = n(837057),
    a = n(310419),
    c = n(488995),
    o = n(985018),
    d = n(885680);
function u(e) {
    let { guildId: t, section: n } = e;
    (0, s.transitionToGlobalDiscovery)({
        tab: c.GlobalDiscoveryTab.APPS,
        newSessionState: {
            guildId: t,
            entrypoint: {
                name: a.sW.GUILD_SETTINGS,
                guildSettingsSection: n,
            },
        },
    }),
        (0, l.jH)();
}
function f() {
    return (0, r.jsxs)("div", {
        className: d.q,
        children: [
            (0, r.jsx)("div", { children: o.intl.string(o.t.AKcFUj) }),
            (0, r.jsx)(i.tfB, {
                size: "xs",
                color: "currentColor",
                className: d.w,
            }),
        ],
    });
}
