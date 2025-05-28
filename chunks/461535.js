t.d(e, { Z: () => O }), t(388685);
var r = t(255367);
t(73800);
var i = t(442837),
    l = t(481060),
    a = t(45114),
    c = t(456269),
    o = t(344185),
    s = t(569471),
    u = t(131704),
    d = t(324067),
    f = t(306680),
    h = t(981631),
    b = t(388032);
function O(n) {
    let e = (function (n) {
        let e = (0, c.n2)(n.guild_id, n.id),
            t = (0, i.e7)(
                [f.ZP, d.Z, o.Z, s.Z],
                () => {
                    if (n.isForumPost()) return f.ZP.isForumPostUnread(n.id);
                    if (n.type !== h.d4z.GUILD_CATEGORY) return f.ZP.hasUnreadOrMentions(n.id);
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
                            r = o.Z.getThreadsForGuild(n.guild_id);
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
        label: b.intl.string(b.t.e6RscX),
        action: function () {
            (0, a.U6)(n);
        },
        disabled: !e
    });
}
