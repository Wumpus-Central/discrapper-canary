n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var r = n(284009),
    l = n.n(r),
    a = n(283823),
    s = n(455207),
    o = n(542287),
    d = n(589022),
    c = n(734057),
    u = n(287809),
    _ = n(943667);
function m(e, t) {
    if ((0, s.MZ)(t)) return (0, i.jsx)(o.A, {});
    if ((0, _.A)(t)) {
        let n = (t?.author?.username ?? "").split(" ").slice(0, -1).join(" "),
            { guild_id: r } = t.messageReference;
        if (null != r) return (0, i.jsx)(a.A, { setPopoutRef: e.setPopoutRef, guildId: r, name: n });
    }
    if (null != t.interaction && "SENDING" === t.state) return (0, i.jsx)(i.Fragment, {});
    let n = null != t.webhookId ? t.author : (u.default.getUser(t.author.id) ?? t.author);
    l()(null != n, "renderUserGuildPopout: user should never be null");
    let r = u.default.getCurrentUser();
    l()(null != r, "renderUserGuildPopout: currentUser should never be null");
    let m = c.A.getChannel(t.channel_id);
    return (
        l()(null != m, "renderUserGuildPopout: channel should never be null"),
        (0, i.jsx)(d.A, {
            ...e,
            user: n,
            currentUser: r,
            guildId: m.guild_id,
            channelId: t.channel_id,
            messageId: t.id,
        })
    );
}
