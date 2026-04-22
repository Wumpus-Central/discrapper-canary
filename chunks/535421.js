n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var l = n(284009),
    a = n.n(l),
    s = n(283823),
    r = n(455207),
    o = n(542287),
    d = n(589022),
    c = n(734057),
    u = n(287809),
    m = n(943667);
function _(e, t) {
    if ((0, r.MZ)(t)) return (0, i.jsx)(o.A, {});
    if ((0, m.A)(t)) {
        let n = (t?.author?.username ?? "").split(" ").slice(0, -1).join(" "),
            { guild_id: l } = t.messageReference;
        if (null != l) return (0, i.jsx)(s.default, { setPopoutRef: e.setPopoutRef, guildId: l, name: n });
    }
    if (null != t.interaction && "SENDING" === t.state) return (0, i.jsx)(i.Fragment, {});
    let n = null != t.webhookId ? t.author : (u.default.getUser(t.author.id) ?? t.author);
    a()(null != n, "renderUserGuildPopout: user should never be null");
    let l = u.default.getCurrentUser();
    a()(null != l, "renderUserGuildPopout: currentUser should never be null");
    let _ = c.A.getChannel(t.channel_id);
    return (
        a()(null != _, "renderUserGuildPopout: channel should never be null"),
        (0, i.jsx)(d.A, {
            ...e,
            user: n,
            currentUser: l,
            guildId: _.guild_id,
            channelId: t.channel_id,
            messageId: t.id,
        })
    );
}
