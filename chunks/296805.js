n.d(t, { T: () => l });
var i = n(749681),
    r = n(258971),
    s = n(914010),
    a = n(49898);
let l = {
    binds: ['mod+ctrl+a'],
    comboKeysBindGlobal: !0,
    action() {
        var e;
        let t = null != (e = s.Z.getGuildId()) ? e : void 0;
        (0, i.transitionToGlobalDiscovery)({
            tab: a.GlobalDiscoveryTab.APPS,
            newSessionState: {
                guildId: null != t ? t : null,
                entrypoint: { name: r.xF.KEYBOARD_SHORTCUT }
            }
        });
    }
};
