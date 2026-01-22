n.d(t, { A: () => u });
var r = n(686956),
    i = n(22007),
    a = n(734057),
    s = n(71393),
    o = n(954571),
    l = n(449054),
    c = n(652215);
async function u(e) {
    var t;
    if (null == e.messageReference) return;
    let n = e.messageReference.guild_id,
        u = e.messageReference.channel_id,
        d = e.messageReference.message_id,
        f = a.A.getChannel(u),
        p = !1;
    if (null == f && null != n && null == s.A.getGuild(n))
        try {
            await (0, l.Z2)(n, { object: c.ZSU.FORWARD_BREADCRUMB }, { shouldNavigate: !1 }),
                (p = !0),
                await (0, r.k)(n),
                (f = a.A.getChannel(u));
        } catch (e) {}
    o.default.track(c.HAw.FORWARD_BREADCRUMB_CLICKED, {
        guild_id: null == (t = a.A.getBasicChannel(e.channel_id)) ? void 0 : t.guild_id,
        channel_id: e.channel_id,
        message_id: e.id,
        breadcrumb_guild_id: n,
        breadcrumb_channel_id: u,
        breadcrumb_message_id: d,
        did_lurk: p,
    });
    let _ = p ? u : void 0;
    (0, i.A)(c.BVt.CHANNEL(n, u, d), { welcomeModalChannelId: _ });
}
