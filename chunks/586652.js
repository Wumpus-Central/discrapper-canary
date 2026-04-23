"use strict";
n.d(t, { A: () => _, E: () => d }), n(801541);
var r,
    i = n(64700),
    s = n(889137),
    a = n(311907),
    o = n(287809),
    l = n(927578),
    u = n(704591);
n(980504);
var c = n(985018),
    d =
        (((r = {})[(r.JOIN_GUILD = 0)] = "JOIN_GUILD"),
        (r[(r.GET_NITRO = 1)] = "GET_NITRO"),
        (r[(r.NONE = 2)] = "NONE"),
        r);
function _(e, t, n, r) {
    let d = "0" === e.guildId,
        _ = (0, a.bG)([o.default], () => l.Ay.canUseSoundboardEverywhere(o.default.getCurrentUser())),
        f = (0, u.tj)({ location: "useSoundmojiGuildInfoData" }),
        p = e.guildId !== t?.guild_id;
    return {
        buttonType: i.useMemo(() => (d || !f ? 2 : _ ? (n || null == r ? 2 : 0) : 1), [d, _, f, n, r]),
        description: i.useMemo(() => {
            let e = null != r;
            return (0, s.YW)({
                hasSoundmojiPermissions: _,
                isInGuild: n,
                isGuildDiscoverable: e,
                isSoundFromDifferentGuild: p,
                canSendSoundmojis: f,
                isDefaultSound: d,
            })
                .with({ canSendSoundmojis: !1 }, () => c.intl.string(c.t.x2kyyJ))
                .with({ isDefaultSound: !0 }, () => c.intl.string(c.t.AabHep))
                .with({ isInGuild: !1, isGuildDiscoverable: !1 }, () => c.intl.string(c.t.MRYt06))
                .with({ hasSoundmojiPermissions: !0, isInGuild: !0, isSoundFromDifferentGuild: !1 }, () =>
                    c.intl.string(c.t.p17MQJ),
                )
                .with({ hasSoundmojiPermissions: !0, isInGuild: !0, isSoundFromDifferentGuild: !0 }, () =>
                    c.intl.string(c.t.Lkbm5s),
                )
                .with({ hasSoundmojiPermissions: !0, isInGuild: !1, isGuildDiscoverable: !0 }, () =>
                    c.intl.string(c.t.GTJmaS),
                )
                .with({ hasSoundmojiPermissions: !1, isInGuild: !0, isSoundFromDifferentGuild: !1 }, () =>
                    c.intl.string(c.t["sj/imS"]),
                )
                .with(
                    {
                        hasSoundmojiPermissions: !1,
                        isInGuild: !0,
                        isSoundFromDifferentGuild: !0,
                        canSendSoundmojis: !0,
                    },
                    () => c.intl.string(c.t["3Ru2/x"]),
                )
                .with({ hasSoundmojiPermissions: !1, isInGuild: !1, isGuildDiscoverable: !0 }, () =>
                    c.intl.string(c.t.qRkWhZ),
                )
                .exhaustive();
        }, [d, r, _, n, p, f]),
    };
}
