n.d(t, { $: () => s });
var i = n(192308),
    l = n(272613),
    r = n(819638);
let s = {
    binds: ["mod+shift+n"],
    comboKeysBindGlobal: !0,
    action() {
        (0, i.hasModalOpen)(r.fc)
            ? l.A.updateCreateGuildModal({ slide: r.oS.JOIN_GUILD, location: "Keyboard Shortcut" })
            : l.A.openCreateGuildModal({ location: "Keyboard Shortcut" });
    },
};
