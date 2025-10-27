t.d(n, { Z: () => v }), t(388685);
var i = t(951288);
t(647438);
var l = t(442837),
    r = t(481060),
    a = t(45114),
    o = t(456269),
    u = t(344185),
    s = t(569471),
    d = t(131704),
    c = t(324067),
    f = t(306680),
    g = t(981631),
    h = t(388032);
function v(e) {
    let n = (function (e) {
        let n = (0, o.n2)(e.guild_id, e.id),
            t = (0, l.e7)([f.ZP, c.Z, u.Z, s.Z], () => {
                if (e.isForumPost()) return f.ZP.isForumPostUnread(e.id);
                if (e.type !== g.d4z.GUILD_CATEGORY) return f.ZP.hasUnreadOrMentions(e.id);
                {
                    let n = c.Z.getCategories(e.getGuildId());
                    if (null == n[e.id]) return !1;
                    if (
                        n[e.id].some((e) => {
                            let { channel: n } = e;
                            return (0, d.Em)(n.type) && f.ZP.hasUnreadOrMentions(n.id);
                        })
                    )
                        return !0;
                    let t = new Set(n[e.id].map((e) => e.channel.id)),
                        i = u.Z.getThreadsForGuild(e.guild_id);
                    for (let e in i)
                        if (t.has(e)) {
                            for (let n in i[e])
                                if (s.Z.hasJoined(n) && !s.Z.isMuted(n) && f.ZP.hasUnreadOrMentions(n)) return !0;
                        }
                    return !1;
                }
            }, [e]);
        return e.isForumLikeChannel() ? n > 0 : t;
    })(e);
    return (0, i.jsx)(r.sNh, {
        id: "mark-channel-read",
        label: h.intl.string(h.t.e6RscS),
        action: function () {
            (0, a.U6)(e, {
                section: g.jXE.CHANNEL_CONTEXT_MENU,
                object: g.qAy.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: g.AnalyticsObjectTypes.ACK_MANUAL,
            });
        },
        disabled: !n,
    });
}
