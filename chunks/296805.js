n.d(t, { T: () => l });
var r = n(749681),
    i = n(258971),
    s = n(914010),
    a = n(49898);
let l = {
    binds: ['mod+ctrl+a'],
    comboKeysBindGlobal: !0,
    action() {
        var e;
        let t = null !== (e = s.Z.getGuildId()) && void 0 !== e ? e : void 0;
        (0, r.transitionToGlobalDiscovery)({
            tab: a.GlobalDiscoveryTab.APPS,
            newSessionState: {
                guildId: null != t ? t : null,
                entrypoint: { name: i.xF.KEYBOARD_SHORTCUT }
            }
        });
    }
};
