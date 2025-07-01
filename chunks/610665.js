(t.d(n, {
    GV: () => m,
    iQ: () => x
}),
    t(539854),
    t(388685),
    t(415506));
var i = t(512722),
    l = t.n(i),
    a = t(333848),
    r = t(706058),
    s = t(131704),
    c = t(592125),
    o = t(430824),
    u = t(482241),
    d = t(765305),
    h = t(981631);
async function v(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        i = [];
    i.push(...t);
    let l = await a.Z.createChannel({
        guildId: e.id,
        type: h.d4z.GUILD_STAGE_VOICE,
        name: n.substring(0, 100),
        permissionOverwrites: i
    });
    if (null == l || 201 !== l.status) throw Error("Can't create channel for event");
    return (0, s.q_)(l.body);
}
async function m(e, n) {
    let { entity_type: t } = e;
    if (t === d.WX.STAGE_INSTANCE) {
        let t = await (function (e, n) {
            let { guild_id: t, channel_id: i } = e,
                l = o.Z.getGuild(t);
            if (null == l) return Promise.resolve(null);
            let a = c.Z.getChannel(i);
            return null == a ? v(l, e.name, n) : Promise.resolve(a);
        })(e, n);
        l()(null != t, 'could not find or create channel');
    }
}
async function x(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { channel_id: t, entity_type: i, name: a, id: s, guild_id: c } = e;
    switch (i) {
        case d.WX.STAGE_INSTANCE:
            (l()(null != t, 'channel_id is required'), await (0, r.me)(t, a, d.j8.GUILD_ONLY, n, s));
            break;
        case d.WX.VOICE:
            (l()(null != t, 'channel_id is required'), await u.Z.startEvent(s, c));
            break;
        case d.WX.EXTERNAL:
            await u.Z.startEvent(s, c);
    }
}
