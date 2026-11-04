var i = n(914430),
    r = n(924985),
    a = n(808728),
    s = n(967198),
    l = n(652215);
n.d(
    t,
    {},
    {
        y: {
            binds: ["mod+shift+a"],
            comboKeysBindGlobal: !0,
            action() {
                let e = s.A.getGuildId();
                return (
                    null != e &&
                    (a.A.getChannels(e)[l.rbe.GUILD_CATEGORY].some((e) => {
                        let { channel: t } = e;
                        return "null" !== t.id && !r.A.isCollapsed(t.id);
                    })
                        ? (0, i.rZ)(e)
                        : (0, i.Al)(e),
                    !1)
                );
            },
        },
    },
);
