t.d(n, { Z: () => p }), t(388685);
var r = t(951288);
t(647438);
var i = t(442837),
    l = t(481060),
    o = t(45114),
    a = t(456269),
    c = t(344185),
    u = t(569471),
    s = t(131704),
    d = t(324067),
    f = t(306680),
    h = t(981631),
    b = t(388032);
function p(e) {
    let n = (function (e) {
        let n = (0, a.n2)(e.guild_id, e.id),
            t = (0, i.e7)([f.ZP, d.Z, c.Z, u.Z], () => {
                if (e.isForumPost()) return f.ZP.isForumPostUnread(e.id);
                if (e.type !== h.d4z.GUILD_CATEGORY) return f.ZP.hasUnreadOrMentions(e.id);
                {
                    let n = d.Z.getCategories(e.getGuildId());
                    if (null == n[e.id]) return !1;
                    if (
                        n[e.id].some((e) => {
                            let { channel: n } = e;
                            return (0, s.Em)(n.type) && f.ZP.hasUnreadOrMentions(n.id);
                        })
                    )
                        return !0;
                    let t = new Set(n[e.id].map((e) => e.channel.id)),
                        r = c.Z.getThreadsForGuild(e.guild_id);
                    for (let e in r)
                        if (t.has(e)) {
                            for (let n in r[e])
                                if (u.Z.hasJoined(n) && !u.Z.isMuted(n) && f.ZP.hasUnreadOrMentions(n)) return !0;
                        }
                    return !1;
                }
            }, [e]);
        return e.isForumLikeChannel() ? n > 0 : t;
    })(e);
    return (0, r.jsx)(l.sNh, {
        id: "mark-channel-read",
        label: b.intl.string(b.t.e6RscX),
        action: function () {
            (0, o.U6)(e, {
                section: h.jXE.CHANNEL_CONTEXT_MENU,
                object: h.qAy.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: h.Qqv.ACK_MANUAL,
            });
        },
        disabled: !n,
    });
}
