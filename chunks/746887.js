n.d(t, { u: () => o });
var i = n(211739),
    r = n(680089),
    s = n(984933),
    l = n(914010),
    a = n(981631);
let o = {
    binds: ['mod+shift+a'],
    comboKeysBindGlobal: !0,
    action() {
        let e = l.Z.getGuildId();
        return (
            null != e &&
            (s.ZP.getChannels(e)[a.d4z.GUILD_CATEGORY].some((e) => {
                let { channel: t } = e;
                return 'null' !== t.id && !r.Z.isCollapsed(t.id);
            })
                ? (0, i.N5)(e)
                : (0, i.lc)(e),
            !1)
        );
    }
};
