n.d(t, { p: () => i });
var r = n(358085);
let i = {
    binds: ['mod+alt+i'],
    comboKeysBindGlobal: !0,
    action(e) {
        if ((0, r.isWeb)() && 'discord.com' === location.host) return e.preventDefault(), e.stopPropagation(), !1;
    }
};
