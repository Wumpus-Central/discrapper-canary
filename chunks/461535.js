(t.d(e, { Z: () => O }), t(388685));
var r = t(255367);
t(73800);
var i = t(442837),
    l = t(481060),
    c = t(45114),
    o = t(456269),
    a = t(344185),
    s = t(569471),
    u = t(131704),
    d = t(324067),
    f = t(306680),
    b = t(981631),
    h = t(388032);
function O(n) {
    let e = (function (n) {
        let e = (0, o.n2)(n.guild_id, n.id),
            t = (0, i.e7)(
                [f.ZP, d.Z, a.Z, s.Z],
                () => {
                    if (n.isForumPost()) return f.ZP.isForumPostUnread(n.id);
                    if (n.type !== b.d4z.GUILD_CATEGORY) return f.ZP.hasUnreadOrMentions(n.id);
                    {
                        let e = d.Z.getCategories(n.getGuildId());
                        if (null == e[n.id]) return !1;
                        if (
                            e[n.id].some((n) => {
                                let { channel: e } = n;
                                return (0, u.Em)(e.type) && f.ZP.hasUnreadOrMentions(e.id);
                            })
                        )
                            return !0;
                        let t = new Set(e[n.id].map((n) => n.channel.id)),
                            r = a.Z.getThreadsForGuild(n.guild_id);
                        for (let n in r)
                            if (t.has(n)) {
                                for (let e in r[n]) if (s.Z.hasJoined(e) && !s.Z.isMuted(e) && f.ZP.hasUnreadOrMentions(e)) return !0;
                            }
                        return !1;
                    }
                },
                [n]
            );
        return n.isForumLikeChannel() ? e > 0 : t;
    })(n);
    return (0, r.jsx)(l.sNh, {
        id: 'mark-channel-read',
        label: h.intl.string(h.t.e6RscX),
        action: function () {
            (0, c.U6)(n, {
                section: b.jXE.CHANNEL_CONTEXT_MENU,
                object: b.qAy.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: b.Qqv.ACK_MANUAL
            });
        },
        disabled: !e
    });
}
