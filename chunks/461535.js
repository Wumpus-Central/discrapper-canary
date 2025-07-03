(n.d(t, { Z: () => v }), n(388685));
var i = n(255367);
n(73800);
var r = n(442837),
    l = n(481060),
    a = n(45114),
    o = n(456269),
    s = n(344185),
    d = n(569471),
    u = n(131704),
    c = n(324067),
    f = n(306680),
    h = n(981631),
    g = n(388032);
function v(e) {
    let t = (function (e) {
        let t = (0, o.n2)(e.guild_id, e.id),
            n = (0, r.e7)(
                [f.ZP, c.Z, s.Z, d.Z],
                () => {
                    if (e.isForumPost()) return f.ZP.isForumPostUnread(e.id);
                    if (e.type !== h.d4z.GUILD_CATEGORY) return f.ZP.hasUnreadOrMentions(e.id);
                    {
                        let t = c.Z.getCategories(e.getGuildId());
                        if (null == t[e.id]) return !1;
                        if (
                            t[e.id].some((e) => {
                                let { channel: t } = e;
                                return (0, u.Em)(t.type) && f.ZP.hasUnreadOrMentions(t.id);
                            })
                        )
                            return !0;
                        let n = new Set(t[e.id].map((e) => e.channel.id)),
                            i = s.Z.getThreadsForGuild(e.guild_id);
                        for (let e in i)
                            if (n.has(e)) {
                                for (let t in i[e]) if (d.Z.hasJoined(t) && !d.Z.isMuted(t) && f.ZP.hasUnreadOrMentions(t)) return !0;
                            }
                        return !1;
                    }
                },
                [e]
            );
        return e.isForumLikeChannel() ? t > 0 : n;
    })(e);
    return (0, i.jsx)(l.sNh, {
        id: 'mark-channel-read',
        label: g.intl.string(g.t.e6RscX),
        action: function () {
            (0, a.U6)(e, {
                section: h.jXE.CHANNEL_CONTEXT_MENU,
                object: h.qAy.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: h.Qqv.ACK_MANUAL
            });
        },
        disabled: !t
    });
}
