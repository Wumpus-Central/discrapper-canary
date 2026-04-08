"use strict";
n.d(t, { L: () => m, N: () => u });
var i = n(627968),
    s = n(397927),
    l = n(398590),
    r = n(837057),
    a = n(310419),
    o = n(488995),
    d = n(985018),
    c = n(171790);
function u(e) {
    let { guildId: t, section: n } = e;
    (0, r.transitionToGlobalDiscovery)({
        tab: o.GlobalDiscoveryTab.APPS,
        newSessionState: { guildId: t, entrypoint: { name: a.sW.GUILD_SETTINGS, guildSettingsSection: n } },
    }),
        (0, l.jH)();
}
function m() {
    return (0, i.jsxs)("div", {
        className: c.q,
        children: [
            (0, i.jsx)("div", { children: d.intl.string(d.t.AKcFUj) }),
            (0, i.jsx)(s.tfB, { size: "xs", color: "currentColor", className: c.w }),
        ],
    });
}
