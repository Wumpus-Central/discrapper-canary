(e.d(n, { Z: () => g }), e(388685));
var i = e(255367);
e(73800);
var r = e(442837),
    l = e(481060),
    a = e(45114),
    o = e(456269),
    s = e(344185),
    d = e(569471),
    u = e(131704),
    c = e(324067),
    f = e(306680),
    h = e(981631),
    v = e(388032);
function g(t) {
    let n = (function (t) {
        let n = (0, o.n2)(t.guild_id, t.id),
            e = (0, r.e7)(
                [f.ZP, c.Z, s.Z, d.Z],
                () => {
                    if (t.isForumPost()) return f.ZP.isForumPostUnread(t.id);
                    if (t.type !== h.d4z.GUILD_CATEGORY) return f.ZP.hasUnreadOrMentions(t.id);
                    {
                        let n = c.Z.getCategories(t.getGuildId());
                        if (null == n[t.id]) return !1;
                        if (
                            n[t.id].some((t) => {
                                let { channel: n } = t;
                                return (0, u.Em)(n.type) && f.ZP.hasUnreadOrMentions(n.id);
                            })
                        )
                            return !0;
                        let e = new Set(n[t.id].map((t) => t.channel.id)),
                            i = s.Z.getThreadsForGuild(t.guild_id);
                        for (let t in i)
                            if (e.has(t)) {
                                for (let n in i[t]) if (d.Z.hasJoined(n) && !d.Z.isMuted(n) && f.ZP.hasUnreadOrMentions(n)) return !0;
                            }
                        return !1;
                    }
                },
                [t]
            );
        return t.isForumLikeChannel() ? n > 0 : e;
    })(t);
    return (0, i.jsx)(l.sNh, {
        id: 'mark-channel-read',
        label: v.intl.string(v.t.e6RscX),
        action: function () {
            (0, a.U6)(t, {
                section: h.jXE.CHANNEL_CONTEXT_MENU,
                object: h.qAy.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: h.Qqv.ACK_MANUAL
            });
        },
        disabled: !n
    });
}
