n.d(t, { Z: () => p }), n(388685);
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    a = n(45114),
    o = n(456269),
    c = n(344185),
    s = n(569471),
    u = n(131704),
    d = n(324067),
    f = n(306680),
    O = n(981631),
    b = n(388032);
function p(e) {
    let t = (function (e) {
        let t = (0, o.n2)(e.guild_id, e.id),
            n = (0, i.e7)(
                [f.ZP, d.Z, c.Z, s.Z],
                () => {
                    if (e.isForumPost()) return f.ZP.isForumPostUnread(e.id);
                    if (e.type !== O.d4z.GUILD_CATEGORY) return f.ZP.hasUnreadOrMentions(e.id);
                    {
                        let t = d.Z.getCategories(e.getGuildId());
                        if (null == t[e.id]) return !1;
                        if (
                            t[e.id].some((e) => {
                                let { channel: t } = e;
                                return (0, u.Em)(t.type) && f.ZP.hasUnreadOrMentions(t.id);
                            })
                        )
                            return !0;
                        let n = new Set(t[e.id].map((e) => e.channel.id)),
                            r = c.Z.getThreadsForGuild(e.guild_id);
                        for (let e in r)
                            if (n.has(e)) {
                                for (let t in r[e]) if (s.Z.hasJoined(t) && !s.Z.isMuted(t) && f.ZP.hasUnreadOrMentions(t)) return !0;
                            }
                        return !1;
                    }
                },
                [e]
            );
        return e.isForumLikeChannel() ? t > 0 : n;
    })(e);
    return (0, r.jsx)(l.sNh, {
        id: 'mark-channel-read',
        label: b.NW.string(b.t.e6RscX),
        action: function () {
            (0, a.U6)(e);
        },
        disabled: !t
    });
}
