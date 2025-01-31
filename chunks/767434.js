n.d(t, {
    Z: () => f,
    y: () => d
}),
    n(627341);
var i = n(192379),
    r = n(278074),
    a = n(442837),
    s = n(594174),
    o = n(74538),
    l = n(125900),
    u = n(710111),
    c = n(388032),
    d = (function (e) {
        return (e[(e.JOIN_GUILD = 0)] = 'JOIN_GUILD'), (e[(e.GET_NITRO = 1)] = 'GET_NITRO'), (e[(e.NONE = 2)] = 'NONE'), e;
    })({});
function f(e, t, n, d) {
    let f = e.guildId === u.X8,
        _ = (0, a.e7)([s.default], () => o.ZP.canUseSoundboardEverywhere(s.default.getCurrentUser())),
        p = (0, l.V2)({ location: 'useSoundmojiGuildInfoData' }),
        h = e.guildId !== (null == t ? void 0 : t.guild_id);
    return {
        buttonType: i.useMemo(() => (f || !p ? 2 : p && !_ ? 1 : n || null == d ? 2 : 0), [f, _, p, n, d]),
        description: i.useMemo(() => {
            let e = null != d;
            return (0, r.EQ)({
                hasSoundmojiPermissions: _,
                isInGuild: n,
                isGuildDiscoverable: e,
                isSoundFromDifferentGuild: h,
                canSendSoundmojis: p,
                isDefaultSound: f
            })
                .with({ canSendSoundmojis: !1 }, () => c.intl.string(c.t.x2kyyM))
                .with({ isDefaultSound: !0 }, () => c.intl.string(c.t.AabHen))
                .with(
                    {
                        isInGuild: !1,
                        isGuildDiscoverable: !1
                    },
                    () => c.intl.string(c.t.MRYt09)
                )
                .with(
                    {
                        hasSoundmojiPermissions: !0,
                        isInGuild: !0,
                        isSoundFromDifferentGuild: !1
                    },
                    () => c.intl.string(c.t.p17MQE)
                )
                .with(
                    {
                        hasSoundmojiPermissions: !0,
                        isInGuild: !0,
                        isSoundFromDifferentGuild: !0
                    },
                    () => c.intl.string(c.t.Lkbm5u)
                )
                .with(
                    {
                        hasSoundmojiPermissions: !0,
                        isInGuild: !1,
                        isGuildDiscoverable: !0
                    },
                    () => c.intl.string(c.t.GTJmaW)
                )
                .with(
                    {
                        hasSoundmojiPermissions: !1,
                        isInGuild: !0,
                        isSoundFromDifferentGuild: !1
                    },
                    () => c.intl.string(c.t['sj/imZ'])
                )
                .with(
                    {
                        hasSoundmojiPermissions: !1,
                        isInGuild: !0,
                        isSoundFromDifferentGuild: !0,
                        canSendSoundmojis: !0
                    },
                    () => c.intl.string(c.t['3Ru2//'])
                )
                .with(
                    {
                        hasSoundmojiPermissions: !1,
                        isInGuild: !1,
                        isGuildDiscoverable: !0
                    },
                    () => c.intl.string(c.t.qRkWhY)
                )
                .exhaustive();
        }, [f, d, _, n, h, p])
    };
}
