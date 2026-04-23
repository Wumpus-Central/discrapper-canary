n.d(t, { A: () => c });
var i = n(686956),
    l = n(22007),
    a = n(734057),
    s = n(71393),
    r = n(954571),
    o = n(449054),
    d = n(652215);
async function c(e) {
    if (null == e.messageReference) return;
    let t = e.messageReference.guild_id,
        n = e.messageReference.channel_id,
        c = e.messageReference.message_id,
        u = a.A.getChannel(n),
        m = !1;
    if (null == u && null != t && null == s.A.getGuild(t))
        try {
            await (0, o.Z2)(t, { object: d.ZSU.FORWARD_BREADCRUMB }, { shouldNavigate: !1 }),
                (m = !0),
                await (0, i.k)(t),
                (u = a.A.getChannel(n));
        } catch {}
    r.default.track(d.HAw.FORWARD_BREADCRUMB_CLICKED, {
        guild_id: a.A.getBasicChannel(e.channel_id)?.guild_id,
        channel_id: e.channel_id,
        message_id: e.id,
        breadcrumb_guild_id: t,
        breadcrumb_channel_id: n,
        breadcrumb_message_id: c,
        did_lurk: m,
    });
    let _ = m ? n : void 0;
    (0, l.A)(d.BVt.CHANNEL(t, n, c), { welcomeModalChannelId: _ });
}
