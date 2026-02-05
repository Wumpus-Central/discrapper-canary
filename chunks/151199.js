n.d(t, { y: () => o });
var i = n(914430),
    s = n(924985),
    r = n(808728),
    a = n(967198),
    l = n(652215);
let o = {
    binds: ["mod+shift+a"],
    comboKeysBindGlobal: !0,
    action() {
        let e = a.A.getGuildId();
        return (
            null != e &&
            (r.Ay.getChannels(e)[l.rbe.GUILD_CATEGORY].some((e) => {
                let { channel: t } = e;
                return "null" !== t.id && !s.A.isCollapsed(t.id);
            })
                ? (0, i.rZ)(e)
                : (0, i.Al)(e),
            !1)
        );
    },
};
