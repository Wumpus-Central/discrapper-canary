n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(749210),
    r = n(336197),
    l = n(592125),
    a = n(430824),
    o = n(626135),
    s = n(900849),
    c = n(981631);
async function u(e) {
    var t;
    if (null == e.messageReference) return;
    let n = e.messageReference.guild_id,
        u = e.messageReference.channel_id,
        d = e.messageReference.message_id,
        m = l.Z.getChannel(u),
        h = !1;
    if (null == m && null != n && null == a.Z.getGuild(n))
        try {
            await (0, s.Ub)(n, { object: c.qAy.FORWARD_BREADCRUMB }, { shouldNavigate: !1 }), (h = !0), await (0, i.V)(n), (m = l.Z.getChannel(u));
        } catch {}
    o.default.track(c.rMx.FORWARD_BREADCRUMB_CLICKED, {
        guild_id: null === (t = l.Z.getBasicChannel(e.channel_id)) || void 0 === t ? void 0 : t.guild_id,
        channel_id: e.channel_id,
        message_id: e.id,
        breadcrumb_guild_id: n,
        breadcrumb_channel_id: u,
        breadcrumb_message_id: d,
        did_lurk: h
    });
    let f = h ? u : void 0;
    (0, r.Z)(c.Z5c.CHANNEL(n, u, d), { welcomeModalChannelId: f });
}
