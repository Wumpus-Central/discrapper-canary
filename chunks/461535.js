i.d(e, { Z: () => x }), i(47120);
var t = i(200651);
i(192379);
var l = i(442837),
    r = i(481060),
    a = i(45114),
    d = i(456269),
    s = i(344185),
    o = i(569471),
    c = i(131704),
    u = i(324067),
    h = i(306680),
    Z = i(981631),
    f = i(388032);
function x(n) {
    let e = (function (n) {
        let e = (0, d.n2)(n.guild_id, n.id),
            i = (0, l.e7)(
                [h.ZP, u.Z, s.Z, o.Z],
                () => {
                    if (n.isForumPost()) return h.ZP.isForumPostUnread(n.id);
                    if (n.type !== Z.d4z.GUILD_CATEGORY) return h.ZP.hasUnreadOrMentions(n.id);
                    {
                        let e = u.Z.getCategories(n.getGuildId());
                        if (null == e[n.id]) return !1;
                        if (
                            e[n.id].some((n) => {
                                let { channel: e } = n;
                                return (0, c.Em)(e.type) && h.ZP.hasUnreadOrMentions(e.id);
                            })
                        )
                            return !0;
                        let i = new Set(e[n.id].map((n) => n.channel.id)),
                            t = s.Z.getThreadsForGuild(n.guild_id);
                        for (let n in t)
                            if (i.has(n)) {
                                for (let e in t[n]) if (o.Z.hasJoined(e) && !o.Z.isMuted(e) && h.ZP.hasUnreadOrMentions(e)) return !0;
                            }
                        return !1;
                    }
                },
                [n]
            );
        return n.isForumLikeChannel() ? e > 0 : i;
    })(n);
    return (0, t.jsx)(r.sNh, {
        id: 'mark-channel-read',
        label: f.intl.string(f.t.e6RscX),
        action: function () {
            (0, a.U6)(n);
        },
        disabled: !e
    });
}
