n.d(t, { u: () => o });
var r = n(211739),
    i = n(680089),
    s = n(984933),
    a = n(914010),
    l = n(981631);
let o = {
    binds: ['mod+shift+a'],
    comboKeysBindGlobal: !0,
    action() {
        let e = a.Z.getGuildId();
        return (
            null != e &&
            (s.ZP.getChannels(e)[l.d4z.GUILD_CATEGORY].some((e) => {
                let { channel: t } = e;
                return 'null' !== t.id && !i.Z.isCollapsed(t.id);
            })
                ? (0, r.N5)(e)
                : (0, r.lc)(e),
            !1)
        );
    }
};
