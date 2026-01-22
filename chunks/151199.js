n.d(t, {
    y: () => l,
});
var r = n(914430),
    i = n(924985),
    a = n(808728),
    s = n(967198),
    o = n(652215);
let l = {
    binds: ["mod+shift+a"],
    comboKeysBindGlobal: !0,
    action() {
        let e = s.A.getGuildId();
        return (
            null != e &&
            (a.Ay.getChannels(e)[o.rbe.GUILD_CATEGORY].some((e) => {
                let { channel: t } = e;
                return "null" !== t.id && !i.A.isCollapsed(t.id);
            })
                ? (0, r.rZ)(e)
                : (0, r.Al)(e),
            !1)
        );
    },
};
