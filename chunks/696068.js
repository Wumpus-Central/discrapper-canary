n.d(t, {
    F: function () {
        return h;
    },
    d: function () {
        return g;
    }
}),
    n(653041),
    n(47120);
var i = n(442837),
    a = n(592125),
    l = n(324067),
    s = n(430824),
    c = n(496675),
    o = n(944486),
    r = n(979651),
    d = n(938475),
    u = n(823379),
    p = n(374065),
    f = n(981631);
function m(e, t, n, i, a) {
    let l = (0, p.e4)({
        channelId: e.id,
        ChannelStore: t,
        GuildStore: n,
        PermissionStore: i,
        VoiceStateStore: a
    });
    return (e.type === f.d4z.GUILD_VOICE && l === p.jy.CAN_LAUNCH) || !1;
}
function g(e) {
    var t, n, i;
    let { guildId: p, allowGdmActivityChannelSuggestion: f = !1 } = e;
    if (null == p && !f) return null;
    let g = o.Z.getVoiceChannelId(),
        v = a.Z.getChannel(g);
    if (null != v && (null != v.guild_id || f)) return v.id;
    let h = [];
    for (let e of Object.values(l.Z.getCategories(p)))
        for (let t of e)
            m(t.channel, a.Z, s.Z, c.Z, r.Z) &&
                h.push({
                    channel: t.channel,
                    users: d.ZP.getVoiceStatesForChannel(t.channel).filter(u.lm)
                });
    return null !== (i = null === (n = h.sort((e, t) => (e.users.length > t.users.length ? -1 : 1))[0]) || void 0 === n ? void 0 : null === (t = n.channel) || void 0 === t ? void 0 : t.id) && void 0 !== i ? i : null;
}
function v(e, t) {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n].value.channel.id !== t[n].value.channel.id) return !1;
    return !0;
}
function h(e) {
    return (0, i.e7)(
        [l.Z, a.Z, s.Z, c.Z, r.Z, d.ZP],
        () => {
            if (null == e) return [];
            let t = [];
            return (
                Object.values(l.Z.getCategories(e)).forEach((e) => {
                    e.forEach((e) => {
                        let { channel: n } = e;
                        m(n, a.Z, s.Z, c.Z, r.Z) && t.push(n);
                    });
                }),
                t
                    .map((e) => {
                        let t = d.ZP.getVoiceStatesForChannel(e).filter(u.lm);
                        return {
                            value: {
                                channel: e,
                                users: t
                            },
                            label: e.name
                        };
                    })
                    .sort((e, t) => (e.value.users.length > t.value.users.length ? -1 : 1))
            );
        },
        [e],
        v
    );
}
