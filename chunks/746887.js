t.d(n, { u: () => a });
var i = t(211739),
    r = t(680089),
    s = t(984933),
    l = t(914010),
    o = t(981631);
let a = {
    binds: ['mod+shift+a'],
    comboKeysBindGlobal: !0,
    action() {
        let e = l.Z.getGuildId();
        return (
            null != e &&
            (s.ZP.getChannels(e)[o.d4z.GUILD_CATEGORY].some((e) => {
                let { channel: n } = e;
                return 'null' !== n.id && !r.Z.isCollapsed(n.id);
            })
                ? (0, i.N5)(e)
                : (0, i.lc)(e),
            !1)
        );
    }
};
