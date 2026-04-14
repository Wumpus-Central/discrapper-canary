n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var a = n(284009),
    l = n.n(a),
    s = n(283823),
    r = n(455207),
    o = n(542287),
    d = n(589022),
    c = n(734057),
    u = n(287809),
    _ = n(943667);
function m(e, t) {
    if ((0, r.MZ)(t)) return (0, i.jsx)(o.A, {});
    if ((0, _.A)(t)) {
        let n = (t?.author?.username ?? "").split(" ").slice(0, -1).join(" "),
            { guild_id: a } = t.messageReference;
        if (null != a) return (0, i.jsx)(s.A, { setPopoutRef: e.setPopoutRef, guildId: a, name: n });
    }
    if (null != t.interaction && "SENDING" === t.state) return (0, i.jsx)(i.Fragment, {});
    let n = null != t.webhookId ? t.author : (u.default.getUser(t.author.id) ?? t.author);
    l()(null != n, "renderUserGuildPopout: user should never be null");
    let a = u.default.getCurrentUser();
    l()(null != a, "renderUserGuildPopout: currentUser should never be null");
    let m = c.A.getChannel(t.channel_id);
    return (
        l()(null != m, "renderUserGuildPopout: channel should never be null"),
        (0, i.jsx)(d.A, {
            ...e,
            user: n,
            currentUser: a,
            guildId: m.guild_id,
            channelId: t.channel_id,
            messageId: t.id,
        })
    );
}
