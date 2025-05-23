t.d(n, { Z: () => g }), t(388685);
var i = t(255367);
t(73800);
var r = t(442837),
    a = t(481060),
    l = t(45114),
    o = t(456269),
    d = t(344185),
    u = t(569471),
    s = t(131704),
    c = t(324067),
    f = t(306680),
    h = t(981631),
    v = t(388032);
function g(e) {
    let n = (function (e) {
        let n = (0, o.n2)(e.guild_id, e.id),
            t = (0, r.e7)(
                [f.ZP, c.Z, d.Z, u.Z],
                () => {
                    if (e.isForumPost()) return f.ZP.isForumPostUnread(e.id);
                    if (e.type !== h.d4z.GUILD_CATEGORY) return f.ZP.hasUnreadOrMentions(e.id);
                    {
                        let n = c.Z.getCategories(e.getGuildId());
                        if (null == n[e.id]) return !1;
                        if (
                            n[e.id].some((e) => {
                                let { channel: n } = e;
                                return (0, s.Em)(n.type) && f.ZP.hasUnreadOrMentions(n.id);
                            })
                        )
                            return !0;
                        let t = new Set(n[e.id].map((e) => e.channel.id)),
                            i = d.Z.getThreadsForGuild(e.guild_id);
                        for (let e in i)
                            if (t.has(e)) {
                                for (let n in i[e]) if (u.Z.hasJoined(n) && !u.Z.isMuted(n) && f.ZP.hasUnreadOrMentions(n)) return !0;
                            }
                        return !1;
                    }
                },
                [e]
            );
        return e.isForumLikeChannel() ? n > 0 : t;
    })(e);
    return (0, i.jsx)(a.sNh, {
        id: 'mark-channel-read',
        label: v.intl.string(v.t.e6RscX),
        action: function () {
            (0, l.U6)(e);
        },
        disabled: !n
    });
}
