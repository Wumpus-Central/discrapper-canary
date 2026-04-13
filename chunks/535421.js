n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var l = n(284009),
    s = n.n(l),
    r = n(283823),
    a = n(455207),
    o = n(542287),
    d = n(589022),
    c = n(734057),
    u = n(287809),
    m = n(943667);
function _(e, t) {
    if ((0, a.MZ)(t)) return (0, i.jsx)(o.A, {});
    if ((0, m.A)(t)) {
        let n = (t?.author?.username ?? "").split(" ").slice(0, -1).join(" "),
            { guild_id: l } = t.messageReference;
        if (null != l) return (0, i.jsx)(r.A, { setPopoutRef: e.setPopoutRef, guildId: l, name: n });
    }
    if (null != t.interaction && "SENDING" === t.state) return (0, i.jsx)(i.Fragment, {});
    let n = null != t.webhookId ? t.author : (u.default.getUser(t.author.id) ?? t.author);
    s()(null != n, "renderUserGuildPopout: user should never be null");
    let l = u.default.getCurrentUser();
    s()(null != l, "renderUserGuildPopout: currentUser should never be null");
    let _ = c.A.getChannel(t.channel_id);
    return (
        s()(null != _, "renderUserGuildPopout: channel should never be null"),
        (0, i.jsx)(d.default, {
            ...e,
            user: n,
            currentUser: l,
            guildId: _.guild_id,
            channelId: t.channel_id,
            messageId: t.id,
        })
    );
}
