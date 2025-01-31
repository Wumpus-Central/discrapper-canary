n.d(t, { p: () => s });
var i = n(358085);
let s = {
    binds: ['mod+alt+i'],
    comboKeysBindGlobal: !0,
    action(e) {
        if ((0, i.isWeb)() && 'discord.com' === location.host) return e.preventDefault(), e.stopPropagation(), !1;
    }
};
