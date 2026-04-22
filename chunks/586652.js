"use strict";
n.d(t, { A: () => h, E: () => d }), n(801541);
var i,
    l = n(64700),
    s = n(889137),
    r = n(311907),
    a = n(287809),
    o = n(927578),
    c = n(704591);
n(980504);
var u = n(985018),
    d =
        (((i = {})[(i.JOIN_GUILD = 0)] = "JOIN_GUILD"),
        (i[(i.GET_NITRO = 1)] = "GET_NITRO"),
        (i[(i.NONE = 2)] = "NONE"),
        i);
function h(e, t, n, i) {
    let d = "0" === e.guildId,
        h = (0, r.bG)([a.default], () => o.Ay.canUseSoundboardEverywhere(a.default.getCurrentUser())),
        m = (0, c.tj)({ location: "useSoundmojiGuildInfoData" }),
        p = e.guildId !== t?.guild_id;
    return {
        buttonType: l.useMemo(() => (d || !m ? 2 : h ? (n || null == i ? 2 : 0) : 1), [d, h, m, n, i]),
        description: l.useMemo(() => {
            let e = null != i;
            return (0, s.YW)({
                hasSoundmojiPermissions: h,
                isInGuild: n,
                isGuildDiscoverable: e,
                isSoundFromDifferentGuild: p,
                canSendSoundmojis: m,
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
        }, [d, i, h, n, p, m]),
    };
}
