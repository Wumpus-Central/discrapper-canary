t.d(n, { Z: () => p }), t(47120);
var r = t(200651);
t(192379);
var i = t(442837),
    a = t(481060),
    o = t(45114),
    l = t(456269),
    d = t(344185),
    c = t(569471),
    s = t(131704),
    u = t(324067),
    f = t(306680),
    h = t(981631),
    v = t(388032);
function p(e) {
    let n = (function (e) {
        let n = (0, l.n2)(e.guild_id, e.id),
            t = (0, i.e7)(
                [f.ZP, u.Z, d.Z, c.Z],
                () => {
                    if (e.isForumPost()) return f.ZP.isForumPostUnread(e.id);
                    if (e.type !== h.d4z.GUILD_CATEGORY) return f.ZP.hasUnreadOrMentions(e.id);
                    {
                        let n = u.Z.getCategories(e.getGuildId());
                        if (null == n[e.id]) return !1;
                        if (
                            n[e.id].some((e) => {
                                let { channel: n } = e;
                                return (0, s.Em)(n.type) && f.ZP.hasUnreadOrMentions(n.id);
                            })
                        )
                            return !0;
                        let t = new Set(n[e.id].map((e) => e.channel.id)),
                            r = d.Z.getThreadsForGuild(e.guild_id);
                        for (let e in r)
                            if (t.has(e)) {
                                for (let n in r[e]) if (c.Z.hasJoined(n) && !c.Z.isMuted(n) && f.ZP.hasUnreadOrMentions(n)) return !0;
                            }
                        return !1;
                    }
                },
                [e]
            );
        return e.isForumLikeChannel() ? n > 0 : t;
    })(e);
    return (0, r.jsx)(a.sNh, {
        id: 'mark-channel-read',
        label: v.NW.string(v.t.e6RscX),
        action: function () {
            (0, o.U6)(e);
        },
        disabled: !n
    });
}
