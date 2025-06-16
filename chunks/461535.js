n.d(e, { Z: () => g }), n(388685);
var i = n(255367);
n(73800);
var r = n(442837),
    l = n(481060),
    a = n(45114),
    o = n(456269),
    c = n(344185),
    s = n(569471),
    u = n(131704),
    d = n(324067),
    f = n(306680),
    b = n(981631),
    h = n(388032);
function g(t) {
    let e = (function (t) {
        let e = (0, o.n2)(t.guild_id, t.id),
            n = (0, r.e7)(
                [f.ZP, d.Z, c.Z, s.Z],
                () => {
                    if (t.isForumPost()) return f.ZP.isForumPostUnread(t.id);
                    if (t.type !== b.d4z.GUILD_CATEGORY) return f.ZP.hasUnreadOrMentions(t.id);
                    {
                        let e = d.Z.getCategories(t.getGuildId());
                        if (null == e[t.id]) return !1;
                        if (
                            e[t.id].some((t) => {
                                let { channel: e } = t;
                                return (0, u.Em)(e.type) && f.ZP.hasUnreadOrMentions(e.id);
                            })
                        )
                            return !0;
                        let n = new Set(e[t.id].map((t) => t.channel.id)),
                            i = c.Z.getThreadsForGuild(t.guild_id);
                        for (let t in i)
                            if (n.has(t)) {
                                for (let e in i[t]) if (s.Z.hasJoined(e) && !s.Z.isMuted(e) && f.ZP.hasUnreadOrMentions(e)) return !0;
                            }
                        return !1;
                    }
                },
                [t]
            );
        return t.isForumLikeChannel() ? e > 0 : n;
    })(t);
    return (0, i.jsx)(l.sNh, {
        id: 'mark-channel-read',
        label: h.intl.string(h.t.e6RscX),
        action: function () {
            (0, a.U6)(t, {
                section: b.jXE.CHANNEL_CONTEXT_MENU,
                object: b.qAy.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: b.Qqv.ACK_MANUAL
            });
        },
        disabled: !e
    });
}
