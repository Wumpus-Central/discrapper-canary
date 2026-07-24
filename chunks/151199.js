n.d(t, { y: () => o });
var i = n(914430),
    l = n(924985),
    r = n(808728),
    s = n(967198),
    a = n(652215);
let o = {
    binds: ["mod+shift+a"],
    comboKeysBindGlobal: !0,
    action() {
        let e = s.A.getGuildId();
        return (
            null != e &&
            (r.Ay.getChannels(e)[a.rbe.GUILD_CATEGORY].some((e) => {
                let { channel: t } = e;
                return "null" !== t.id && !l.A.isCollapsed(t.id);
            })
                ? (0, i.rZ)(e)
                : (0, i.Al)(e),
            !1)
        );
    },
};
