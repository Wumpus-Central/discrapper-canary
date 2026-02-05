t.d(n, { XG: () => v, XV: () => x }), t(321073);
var l = t(284009),
    i = t.n(l),
    s = t(755584),
    a = t(602146),
    r = t(95701),
    c = t(734057),
    o = t(71393),
    d = t(496092),
    u = t(988794),
    h = t(652215);
async function m(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        l = [];
    l.push(...t);
    let i = await s.A.createChannel({
        guildId: e.id,
        type: h.rbe.GUILD_STAGE_VOICE,
        name: n.substring(0, 100),
        permissionOverwrites: l,
    });
    if (null == i || 201 !== i.status) throw Error("Can't create channel for event");
    return (0, r.UE)(i.body);
}
async function x(e, n) {
    let { entity_type: t } = e;
    if (t === u.Ps.STAGE_INSTANCE) {
        let t = await (function (e, n) {
            let { guild_id: t, channel_id: l } = e,
                i = o.A.getGuild(t);
            if (null == i) return Promise.resolve(null);
            let s = c.A.getChannel(l);
            return null == s ? m(i, e.name, n) : Promise.resolve(s);
        })(e, n);
        i()(null != t, "could not find or create channel");
    }
}
async function v(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { channel_id: t, entity_type: l, name: s, id: r, guild_id: c } = e;
    switch (l) {
        case u.Ps.STAGE_INSTANCE:
            i()(null != t, "channel_id is required"), await (0, a.yG)(t, s, u.dD.GUILD_ONLY, n, r);
            break;
        case u.Ps.VOICE:
            i()(null != t, "channel_id is required"), await d.A.startEvent(r, c);
            break;
        case u.Ps.EXTERNAL:
            await d.A.startEvent(r, c);
    }
}
