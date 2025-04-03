i.d(n, {
    GV: () => m,
    iQ: () => x
}),
    i(653041),
    i(47120),
    i(411104);
var t = i(512722),
    l = i.n(t),
    a = i(333848),
    r = i(706058),
    s = i(131704),
    c = i(592125),
    o = i(430824),
    u = i(482241),
    d = i(765305),
    h = i(981631);
async function v(e, n) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        t = [];
    t.push(...i);
    let l = await a.Z.createChannel({
        guildId: e.id,
        type: h.d4z.GUILD_STAGE_VOICE,
        name: n.substring(0, 100),
        permissionOverwrites: t
    });
    if (null == l || 201 !== l.status) throw Error("Can't create channel for event");
    return (0, s.q_)(l.body);
}
async function m(e, n) {
    let { entity_type: i } = e;
    if (i === d.WX.STAGE_INSTANCE) {
        let i = await (function (e, n) {
            let { guild_id: i, channel_id: t } = e,
                l = o.Z.getGuild(i);
            if (null == l) return Promise.resolve(null);
            let a = c.Z.getChannel(t);
            return null == a ? v(l, e.name, n) : Promise.resolve(a);
        })(e, n);
        l()(null != i, 'could not find or create channel');
    }
}
async function x(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { channel_id: i, entity_type: t, name: a, id: s, guild_id: c } = e;
    switch (t) {
        case d.WX.STAGE_INSTANCE:
            l()(null != i, 'channel_id is required'), await (0, r.me)(i, a, d.j8.GUILD_ONLY, n, s);
            break;
        case d.WX.VOICE:
            l()(null != i, 'channel_id is required'), await u.Z.startEvent(s, c);
            break;
        case d.WX.EXTERNAL:
            await u.Z.startEvent(s, c);
    }
}
