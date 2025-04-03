n.d(t, { Z: () => u });
var r = n(749210),
    i = n(336197),
    a = n(592125),
    l = n(430824),
    o = n(626135),
    s = n(900849),
    c = n(981631);
async function u(e) {
    var t;
    if (null == e.messageReference) return;
    let n = e.messageReference.guild_id,
        u = e.messageReference.channel_id,
        d = e.messageReference.message_id,
        p = a.Z.getChannel(u),
        m = !1;
    if (null == p && null != n && null == l.Z.getGuild(n))
        try {
            await (0, s.Ub)(n, { object: c.qAy.FORWARD_BREADCRUMB }, { shouldNavigate: !1 }), (m = !0), await (0, r.V)(n), (p = a.Z.getChannel(u));
        } catch (e) {}
    o.default.track(c.rMx.FORWARD_BREADCRUMB_CLICKED, {
        guild_id: null == (t = a.Z.getBasicChannel(e.channel_id)) ? void 0 : t.guild_id,
        channel_id: e.channel_id,
        message_id: e.id,
        breadcrumb_guild_id: n,
        breadcrumb_channel_id: u,
        breadcrumb_message_id: d,
        did_lurk: m
    });
    let f = m ? u : void 0;
    (0, i.Z)(c.Z5c.CHANNEL(n, u, d), { welcomeModalChannelId: f });
}
