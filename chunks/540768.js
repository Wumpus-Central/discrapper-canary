n.d(t, { u: () => l });
var r = n(211739),
    i = n(680089),
    a = n(984933),
    o = n(914010),
    s = n(981631);
let l = {
    binds: ["mod+shift+a"],
    comboKeysBindGlobal: !0,
    action() {
        let e = o.Z.getGuildId();
        return (
            null != e &&
            (a.ZP.getChannels(e)[s.d4z.GUILD_CATEGORY].some((e) => {
                let { channel: t } = e;
                return "null" !== t.id && !i.Z.isCollapsed(t.id);
            })
                ? (0, r.N5)(e)
                : (0, r.lc)(e),
            !1)
        );
    },
};
