n.d(t, { N: () => l });
var i = n(837057),
    s = n(310419),
    r = n(967198),
    a = n(488995);
let l = {
    binds: ["mod+ctrl+a"],
    comboKeysBindGlobal: !0,
    action() {
        let e = r.A.getGuildId() ?? void 0;
        (0, i.transitionToGlobalDiscovery)({
            tab: a.GlobalDiscoveryTab.APPS,
            newSessionState: { guildId: e ?? null, entrypoint: { name: s.sW.KEYBOARD_SHORTCUT } },
        });
    },
};
