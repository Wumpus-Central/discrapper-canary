n.d(t, {
    Z: () => f,
    y: () => d
}),
    n(627341);
var r = n(192379),
    i = n(278074),
    o = n(442837),
    a = n(594174),
    s = n(74538),
    l = n(125900),
    c = n(710111),
    u = n(388032),
    d = (function (e) {
        return (e[(e.JOIN_GUILD = 0)] = 'JOIN_GUILD'), (e[(e.GET_NITRO = 1)] = 'GET_NITRO'), (e[(e.NONE = 2)] = 'NONE'), e;
    })({});
function f(e, t, n, d) {
    let f = e.guildId === c.X8,
        _ = (0, o.e7)([a.default], () => s.ZP.canUseSoundboardEverywhere(a.default.getCurrentUser())),
        p = (0, l.V2)({ location: 'useSoundmojiGuildInfoData' }),
        h = e.guildId !== (null == t ? void 0 : t.guild_id);
    return {
        buttonType: r.useMemo(() => (f || !p ? 2 : p && !_ ? 1 : n || null == d ? 2 : 0), [f, _, p, n, d]),
        description: r.useMemo(() => {
            let e = null != d;
            return (0, i.EQ)({
                hasSoundmojiPermissions: _,
                isInGuild: n,
                isGuildDiscoverable: e,
                isSoundFromDifferentGuild: h,
                canSendSoundmojis: p,
                isDefaultSound: f
            })
                .with({ canSendSoundmojis: !1 }, () => u.NW.string(u.t.x2kyyM))
                .with({ isDefaultSound: !0 }, () => u.NW.string(u.t.AabHen))
                .with(
                    {
                        isInGuild: !1,
                        isGuildDiscoverable: !1
                    },
                    () => u.NW.string(u.t.MRYt09)
                )
                .with(
                    {
                        hasSoundmojiPermissions: !0,
                        isInGuild: !0,
                        isSoundFromDifferentGuild: !1
                    },
                    () => u.NW.string(u.t.p17MQE)
                )
                .with(
                    {
                        hasSoundmojiPermissions: !0,
                        isInGuild: !0,
                        isSoundFromDifferentGuild: !0
                    },
                    () => u.NW.string(u.t.Lkbm5u)
                )
                .with(
                    {
                        hasSoundmojiPermissions: !0,
                        isInGuild: !1,
                        isGuildDiscoverable: !0
                    },
                    () => u.NW.string(u.t.GTJmaW)
                )
                .with(
                    {
                        hasSoundmojiPermissions: !1,
                        isInGuild: !0,
                        isSoundFromDifferentGuild: !1
                    },
                    () => u.NW.string(u.t['sj/imZ'])
                )
                .with(
                    {
                        hasSoundmojiPermissions: !1,
                        isInGuild: !0,
                        isSoundFromDifferentGuild: !0,
                        canSendSoundmojis: !0
                    },
                    () => u.NW.string(u.t['3Ru2//'])
                )
                .with(
                    {
                        hasSoundmojiPermissions: !1,
                        isInGuild: !1,
                        isGuildDiscoverable: !0
                    },
                    () => u.NW.string(u.t.qRkWhY)
                )
                .exhaustive();
        }, [f, d, _, n, h, p])
    };
}
