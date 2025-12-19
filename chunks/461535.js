t.d(n, { Z: () => h }), t(388685);
var i = t(54381);
t(473749);
var l = t(442837),
    r = t(481060),
    a = t(45114),
    o = t(456269),
    u = t(344185),
    c = t(569471),
    s = t(131704),
    d = t(324067),
    f = t(306680),
    g = t(981631),
    v = t(388032);
function h(e) {
    let n = (function (e) {
        let n = (0, o.n2)(e.guild_id, e.id),
            t = (0, l.e7)([f.ZP, d.Z, u.Z, c.Z], () => {
                if (e.isForumPost()) return f.ZP.isForumPostUnread(e.id);
                if (e.type !== g.d4z.GUILD_CATEGORY) return f.ZP.hasUnreadOrMentions(e.id);
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
                        i = u.Z.getThreadsForGuild(e.guild_id);
                    for (let e in i)
                        if (t.has(e)) {
                            for (let n in i[e])
                                if (c.Z.hasJoined(n) && !c.Z.isMuted(n) && f.ZP.hasUnreadOrMentions(n)) return !0;
                        }
                    return !1;
                }
            }, [e]);
        return e.isForumLikeChannel() ? n > 0 : t;
    })(e);
    return (0, i.jsx)(r.sNh, {
        id: "mark-channel-read",
        label: v.intl.string(v.t.e6RscS),
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
