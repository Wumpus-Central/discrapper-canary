t.d(n, { Z: () => j }), t(388685);
var i = t(54381);
t(473749);
var r = t(442837),
    l = t(481060),
    a = t(45114),
    s = t(456269),
    o = t(344185),
    d = t(569471),
    c = t(131704),
    u = t(324067),
    f = t(306680),
    h = t(981631),
    g = t(388032);
function j(e) {
    let n = (function (e) {
        let n = (0, s.n2)(e.guild_id, e.id),
            t = (0, r.e7)([f.ZP, u.Z, o.Z, d.Z], () => {
                if (e.isForumPost()) return f.ZP.isForumPostUnread(e.id);
                if (e.type !== h.d4z.GUILD_CATEGORY) return f.ZP.hasUnreadOrMentions(e.id);
                {
                    let n = u.Z.getCategories(e.getGuildId());
                    if (null == n[e.id]) return !1;
                    if (
                        n[e.id].some((e) => {
                            let { channel: n } = e;
                            return (0, c.Em)(n.type) && f.ZP.hasUnreadOrMentions(n.id);
                        })
                    )
                        return !0;
                    let t = new Set(n[e.id].map((e) => e.channel.id)),
                        i = o.Z.getThreadsForGuild(e.guild_id);
                    for (let e in i)
                        if (t.has(e)) {
                            for (let n in i[e])
                                if (d.Z.hasJoined(n) && !d.Z.isMuted(n) && f.ZP.hasUnreadOrMentions(n)) return !0;
                        }
                    return !1;
                }
            }, [e]);
        return e.isForumLikeChannel() ? n > 0 : t;
    })(e);
    return (0, i.jsx)(l.sNh, {
        id: "mark-channel-read",
        label: g.intl.string(g.t.e6RscS),
        action: function () {
            (0, a.U6)(e, {
                section: h.jXE.CHANNEL_CONTEXT_MENU,
                object: h.qAy.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: h.AnalyticsObjectTypes.ACK_MANUAL,
            });
        },
        disabled: !n,
    });
}
