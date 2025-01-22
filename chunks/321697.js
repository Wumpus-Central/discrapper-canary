n.d(t, {
    r: function () {
        return a;
    }
});
var i = n(481060),
    r = n(560067),
    s = n(675999);
let a = {
    binds: ['mod+shift+n'],
    comboKeysBindGlobal: !0,
    action() {
        (0, i.hasModalOpen)(s.PU)
            ? r.Z.updateCreateGuildModal({
                  slide: s._m.JOIN_GUILD,
                  location: 'Keyboard Shortcut'
              })
            : r.Z.openCreateGuildModal({ location: 'Keyboard Shortcut' });
    }
};
