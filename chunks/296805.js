n.d(t, {
    T: function () {
        return a;
    }
});
var i = n(132871),
    r = n(147890),
    s = n(914010);
let a = {
    binds: ['mod+ctrl+a'],
    comboKeysBindGlobal: !0,
    action() {
        var e;
        let t = null !== (e = s.Z.getGuildId()) && void 0 !== e ? e : void 0;
        (0, r.dx)({
            guildId: t,
            entrypoint: { name: i.n3.KEYBOARD_SHORTCUT }
        });
    }
};
