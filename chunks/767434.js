n.d(t, {
    Z: () => _,
    y: () => d
}),
    n(314940);
var r = n(73800),
    i = n(278074),
    a = n(442837),
    o = n(594174),
    s = n(74538),
    l = n(125900),
    c = n(710111),
    u = n(388032),
    d = (function (e) {
        return (e[(e.JOIN_GUILD = 0)] = 'JOIN_GUILD'), (e[(e.GET_NITRO = 1)] = 'GET_NITRO'), (e[(e.NONE = 2)] = 'NONE'), e;
    })({});
function _(e, t, n, d) {
    let _ = e.guildId === c.X8,
        f = (0, a.e7)([o.default], () => s.ZP.canUseSoundboardEverywhere(o.default.getCurrentUser())),
        p = (0, l.V2)({ location: 'useSoundmojiGuildInfoData' }),
        h = e.guildId !== (null == t ? void 0 : t.guild_id);
    return {
        buttonType: r.useMemo(() => (_ || !p ? 2 : p && !f ? 1 : n || null == d ? 2 : 0), [_, f, p, n, d]),
        description: r.useMemo(() => {
            let e = null != d;
            return (0, i.EQ)({
                hasSoundmojiPermissions: f,
                isInGuild: n,
                isGuildDiscoverable: e,
                isSoundFromDifferentGuild: h,
                canSendSoundmojis: p,
                isDefaultSound: _
            })
                .with({ canSendSoundmojis: !1 }, () => u.intl.string(u.t.x2kyyM))
                .with({ isDefaultSound: !0 }, () => u.intl.string(u.t.AabHen))
                .with(
                    {
                        isInGuild: !1,
                        isGuildDiscoverable: !1
                    },
                    () => u.intl.string(u.t.MRYt09)
                )
                .with(
                    {
                        hasSoundmojiPermissions: !0,
                        isInGuild: !0,
                        isSoundFromDifferentGuild: !1
                    },
                    () => u.intl.string(u.t.p17MQE)
                )
                .with(
                    {
                        hasSoundmojiPermissions: !0,
                        isInGuild: !0,
                        isSoundFromDifferentGuild: !0
                    },
                    () => u.intl.string(u.t.Lkbm5u)
                )
                .with(
                    {
                        hasSoundmojiPermissions: !0,
                        isInGuild: !1,
                        isGuildDiscoverable: !0
                    },
                    () => u.intl.string(u.t.GTJmaW)
                )
                .with(
                    {
                        hasSoundmojiPermissions: !1,
                        isInGuild: !0,
                        isSoundFromDifferentGuild: !1
                    },
                    () => u.intl.string(u.t['sj/imZ'])
                )
                .with(
                    {
                        hasSoundmojiPermissions: !1,
                        isInGuild: !0,
                        isSoundFromDifferentGuild: !0,
                        canSendSoundmojis: !0
                    },
                    () => u.intl.string(u.t['3Ru2//'])
                )
                .with(
                    {
                        hasSoundmojiPermissions: !1,
                        isInGuild: !1,
                        isGuildDiscoverable: !0
                    },
                    () => u.intl.string(u.t.qRkWhY)
                )
                .exhaustive();
        }, [_, d, f, n, h, p])
    };
}
