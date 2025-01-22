n.d(t, {
    p: function () {
        return r;
    }
});
var i = n(358085);
let r = {
    binds: ['mod+alt+i'],
    comboKeysBindGlobal: !0,
    action(e) {
        if ((0, i.isWeb)() && 'discord.com' === location.host) return e.preventDefault(), e.stopPropagation(), !1;
    }
};
