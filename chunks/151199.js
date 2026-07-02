n.d(t, { y: () => a });
var i = n(914430),
    l = n(924985),
    s = n(808728),
    r = n(967198),
    o = n(652215);
let a = {
    binds: ["mod+shift+a"],
    comboKeysBindGlobal: !0,
    action() {
        let e = r.A.getGuildId();
        return (
            null != e &&
            (s.Ay.getChannels(e)[o.rbe.GUILD_CATEGORY].some((e) => {
                let { channel: t } = e;
                return "null" !== t.id && !l.A.isCollapsed(t.id);
            })
                ? (0, i.rZ)(e)
                : (0, i.Al)(e),
            !1)
        );
    },
};
