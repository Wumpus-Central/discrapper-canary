n.d(t, { N: () => o });
var r = n(837057),
    i = n(310419),
    a = n(967198),
    s = n(488995);
let o = {
    binds: ["mod+ctrl+a"],
    comboKeysBindGlobal: !0,
    action() {
        var e;
        let t = null != (e = a.A.getGuildId()) ? e : void 0;
        (0, r.transitionToGlobalDiscovery)({
            tab: s.GlobalDiscoveryTab.APPS,
            newSessionState: {
                guildId: null != t ? t : null,
                entrypoint: { name: i.sW.KEYBOARD_SHORTCUT },
            },
        });
    },
};
