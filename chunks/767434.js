n.d(t, {
    Z: () => f,
    y: () => d,
}),
    n(314940);
var r = n(473749),
    i = n(278074),
    a = n(442837),
    o = n(594174),
    s = n(74538),
    l = n(125900),
    c = n(710111),
    u = n(388032),
    d = (function (e) {
        return (
            (e[(e.JOIN_GUILD = 0)] = "JOIN_GUILD"), (e[(e.GET_NITRO = 1)] = "GET_NITRO"), (e[(e.NONE = 2)] = "NONE"), e
        );
    })({});
function f(e, t, n, d) {
    let f = e.guildId === c.X8,
        p = (0, a.e7)([o.default], () => s.ZP.canUseSoundboardEverywhere(o.default.getCurrentUser())),
        _ = (0, l.V2)({ location: "useSoundmojiGuildInfoData" }),
        m = e.guildId !== (null == t ? void 0 : t.guild_id);
    return {
        buttonType: r.useMemo(() => (f || !_ ? 2 : _ && !p ? 1 : n || null == d ? 2 : 0), [f, p, _, n, d]),
        description: r.useMemo(() => {
            let e = null != d;
            return (0, i.EQ)({
                hasSoundmojiPermissions: p,
                isInGuild: n,
                isGuildDiscoverable: e,
                isSoundFromDifferentGuild: m,
                canSendSoundmojis: _,
                isDefaultSound: f,
            })
                .with({ canSendSoundmojis: !1 }, () => u.intl.string(u.t.x2kyyJ))
                .with({ isDefaultSound: !0 }, () => u.intl.string(u.t.AabHep))
                .with(
                    {
                        isInGuild: !1,
                        isGuildDiscoverable: !1,
                    },
                    () => u.intl.string(u.t.MRYt06),
                )
                .with(
                    {
                        hasSoundmojiPermissions: !0,
                        isInGuild: !0,
                        isSoundFromDifferentGuild: !1,
                    },
                    () => u.intl.string(u.t.p17MQJ),
                )
                .with(
                    {
                        hasSoundmojiPermissions: !0,
                        isInGuild: !0,
                        isSoundFromDifferentGuild: !0,
                    },
                    () => u.intl.string(u.t.Lkbm5s),
                )
                .with(
                    {
                        hasSoundmojiPermissions: !0,
                        isInGuild: !1,
                        isGuildDiscoverable: !0,
                    },
                    () => u.intl.string(u.t.GTJmaS),
                )
                .with(
                    {
                        hasSoundmojiPermissions: !1,
                        isInGuild: !0,
                        isSoundFromDifferentGuild: !1,
                    },
                    () => u.intl.string(u.t["sj/imS"]),
                )
                .with(
                    {
                        hasSoundmojiPermissions: !1,
                        isInGuild: !0,
                        isSoundFromDifferentGuild: !0,
                        canSendSoundmojis: !0,
                    },
                    () => u.intl.string(u.t["3Ru2/x"]),
                )
                .with(
                    {
                        hasSoundmojiPermissions: !1,
                        isInGuild: !1,
                        isGuildDiscoverable: !0,
                    },
                    () => u.intl.string(u.t.qRkWhZ),
                )
                .exhaustive();
        }, [f, d, p, n, m, _]),
    };
}
