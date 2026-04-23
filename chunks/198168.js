n.d(t, { N: () => o });
var i = n(837057),
    l = n(310419),
    r = n(967198),
    s = n(488995);
let o = {
    binds: ["mod+ctrl+a"],
    comboKeysBindGlobal: !0,
    action() {
        let e = r.A.getGuildId() ?? void 0;
        (0, i.transitionToGlobalDiscovery)({
            tab: s.GlobalDiscoveryTab.APPS,
            newSessionState: { guildId: e ?? null, entrypoint: { name: l.sW.KEYBOARD_SHORTCUT } },
        });
    },
};
