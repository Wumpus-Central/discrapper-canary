i.d(n, {
    GV: () => x,
    iQ: () => m
}),
    i(653041),
    i(47120),
    i(411104);
var l = i(512722),
    t = i.n(l),
    a = i(333848),
    s = i(706058),
    r = i(131704),
    c = i(592125),
    o = i(430824),
    d = i(482241),
    u = i(765305),
    h = i(981631);
async function v(e, n) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        l = [];
    l.push(...i);
    let t = await a.Z.createChannel({
        guildId: e.id,
        type: h.d4z.GUILD_STAGE_VOICE,
        name: n.substring(0, 100),
        permissionOverwrites: l
    });
    if (null == t || 201 !== t.status) throw Error("Can't create channel for event");
    return (0, r.q_)(t.body);
}
async function x(e, n) {
    let { entity_type: i } = e;
    if (i === u.WX.STAGE_INSTANCE) {
        let i = await (function (e, n) {
            let { guild_id: i, channel_id: l } = e,
                t = o.Z.getGuild(i);
            if (null == t) return Promise.resolve(null);
            let a = c.Z.getChannel(l);
            return null == a ? v(t, e.name, n) : Promise.resolve(a);
        })(e, n);
        t()(null != i, 'could not find or create channel');
    }
}
async function m(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { channel_id: i, entity_type: l, name: a, id: r, guild_id: c } = e;
    switch (l) {
        case u.WX.STAGE_INSTANCE:
            t()(null != i, 'channel_id is required'), await (0, s.me)(i, a, u.j8.GUILD_ONLY, n, r);
            break;
        case u.WX.VOICE:
            t()(null != i, 'channel_id is required'), await d.Z.startEvent(r, c);
            break;
        case u.WX.EXTERNAL:
            await d.Z.startEvent(r, c);
    }
}
