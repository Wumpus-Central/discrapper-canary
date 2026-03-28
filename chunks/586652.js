"use strict";
n.d(t, { A: () => d, E: () => c }), n(801541);
var r = n(64700),
    i = n(889137),
    s = n(311907),
    a = n(287809),
    o = n(927578),
    l = n(704591);
n(980504);
var u = n(985018),
    c = (function (e) {
        return (
            (e[(e.JOIN_GUILD = 0)] = "JOIN_GUILD"), (e[(e.GET_NITRO = 1)] = "GET_NITRO"), (e[(e.NONE = 2)] = "NONE"), e
        );
    })({});
function d(e, t, n, c) {
    let d = "0" === e.guildId,
        _ = (0, s.bG)([a.default], () => o.Ay.canUseSoundboardEverywhere(a.default.getCurrentUser())),
        f = (0, l.tj)({ location: "useSoundmojiGuildInfoData" }),
        p = e.guildId !== t?.guild_id;
    return {
        buttonType: r.useMemo(() => (d || !f ? 2 : _ ? (n || null == c ? 2 : 0) : 1), [d, _, f, n, c]),
        description: r.useMemo(() => {
            let e = null != c;
            return (0, i.YW)({
                hasSoundmojiPermissions: _,
                isInGuild: n,
                isGuildDiscoverable: e,
                isSoundFromDifferentGuild: p,
                canSendSoundmojis: f,
                isDefaultSound: d,
            })
                .with({ canSendSoundmojis: !1 }, () => u.intl.string(u.t.x2kyyJ))
                .with({ isDefaultSound: !0 }, () => u.intl.string(u.t.AabHep))
                .with({ isInGuild: !1, isGuildDiscoverable: !1 }, () => u.intl.string(u.t.MRYt06))
                .with({ hasSoundmojiPermissions: !0, isInGuild: !0, isSoundFromDifferentGuild: !1 }, () =>
                    u.intl.string(u.t.p17MQJ),
                )
                .with({ hasSoundmojiPermissions: !0, isInGuild: !0, isSoundFromDifferentGuild: !0 }, () =>
                    u.intl.string(u.t.Lkbm5s),
                )
                .with({ hasSoundmojiPermissions: !0, isInGuild: !1, isGuildDiscoverable: !0 }, () =>
                    u.intl.string(u.t.GTJmaS),
                )
                .with({ hasSoundmojiPermissions: !1, isInGuild: !0, isSoundFromDifferentGuild: !1 }, () =>
                    u.intl.string(u.t["sj/imS"]),
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
                .with({ hasSoundmojiPermissions: !1, isInGuild: !1, isGuildDiscoverable: !0 }, () =>
                    u.intl.string(u.t.qRkWhZ),
                )
                .exhaustive();
        }, [d, c, _, n, p, f]),
    };
}
