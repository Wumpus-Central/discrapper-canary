n.d(t, { Z: () => b }), n(47120);
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    l = n(45114),
    o = n(456269),
    d = n(344185),
    u = n(569471),
    s = n(131704),
    c = n(324067),
    f = n(306680),
    h = n(981631),
    v = n(388032);
function b(e) {
    let t = (function (e) {
        let t = (0, o.n2)(e.guild_id, e.id),
            n = (0, r.e7)(
                [f.ZP, c.Z, d.Z, u.Z],
                () => {
                    if (e.isForumPost()) return f.ZP.isForumPostUnread(e.id);
                    if (e.type !== h.d4z.GUILD_CATEGORY) return f.ZP.hasUnreadOrMentions(e.id);
                    {
                        let t = c.Z.getCategories(e.getGuildId());
                        if (null == t[e.id]) return !1;
                        if (
                            t[e.id].some((e) => {
                                let { channel: t } = e;
                                return (0, s.Em)(t.type) && f.ZP.hasUnreadOrMentions(t.id);
                            })
                        )
                            return !0;
                        let n = new Set(t[e.id].map((e) => e.channel.id)),
                            i = d.Z.getThreadsForGuild(e.guild_id);
                        for (let e in i)
                            if (n.has(e)) {
                                for (let t in i[e]) if (u.Z.hasJoined(t) && !u.Z.isMuted(t) && f.ZP.hasUnreadOrMentions(t)) return !0;
                            }
                        return !1;
                    }
                },
                [e]
            );
        return e.isForumLikeChannel() ? t > 0 : n;
    })(e);
    return (0, i.jsx)(a.sNh, {
        id: 'mark-channel-read',
        label: v.NW.string(v.t.e6RscX),
        action: function () {
            (0, l.U6)(e);
        },
        disabled: !t
    });
}
