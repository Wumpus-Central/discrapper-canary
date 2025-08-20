n.d(t, { T: () => s });
var r = n(749681),
    i = n(258971),
    a = n(914010),
    o = n(49898);
let s = {
    binds: ["mod+ctrl+a"],
    comboKeysBindGlobal: !0,
    action() {
        var e;
        let t = null != (e = a.Z.getGuildId()) ? e : void 0;
        (0, r.transitionToGlobalDiscovery)({
            tab: o.GlobalDiscoveryTab.APPS,
            newSessionState: {
                guildId: null != t ? t : null,
                entrypoint: { name: i.xF.KEYBOARD_SHORTCUT },
            },
        });
    },
};
