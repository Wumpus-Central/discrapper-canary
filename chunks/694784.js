n.d(t, { Z: () => u });
var r = n(749210),
    i = n(336197),
    a = n(592125),
    o = n(430824),
    s = n(626135),
    l = n(900849),
    c = n(981631);
async function u(e) {
    var t;
    if (null == e.messageReference) return;
    let n = e.messageReference.guild_id,
        u = e.messageReference.channel_id,
        d = e.messageReference.message_id,
        f = a.Z.getChannel(u),
        p = !1;
    if (null == f && null != n && null == o.Z.getGuild(n))
        try {
            await (0, l.Ub)(n, { object: c.qAy.FORWARD_BREADCRUMB }, { shouldNavigate: !1 }),
                (p = !0),
                await (0, r.V)(n),
                (f = a.Z.getChannel(u));
        } catch (e) {}
    s.default.track(c.rMx.FORWARD_BREADCRUMB_CLICKED, {
        guild_id: null == (t = a.Z.getBasicChannel(e.channel_id)) ? void 0 : t.guild_id,
        channel_id: e.channel_id,
        message_id: e.id,
        breadcrumb_guild_id: n,
        breadcrumb_channel_id: u,
        breadcrumb_message_id: d,
        did_lurk: p,
    });
    let _ = p ? u : void 0;
    (0, i.Z)(c.Z5c.CHANNEL(n, u, d), { welcomeModalChannelId: _ });
}
