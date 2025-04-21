n.d(t, { T: () => a });
var i = n(749681),
    r = n(258971),
    s = n(914010),
    l = n(49898);
let a = {
    binds: ['mod+ctrl+a'],
    comboKeysBindGlobal: !0,
    action() {
        var e;
        let t = null != (e = s.Z.getGuildId()) ? e : void 0;
        (0, i.transitionToGlobalDiscovery)({
            tab: l.GlobalDiscoveryTab.APPS,
            newSessionState: {
                guildId: null != t ? t : null,
                entrypoint: { name: r.xF.KEYBOARD_SHORTCUT }
            }
        });
    }
};
