n.d(t, { A: () => d }), n(938796);
var i = n(665260),
    l = n(417597),
    s = n(734057),
    a = n(220706),
    r = n(473529),
    o = n(652215),
    c = n(746080);
function d(e) {
    let t = (0, l.bG)([s.A, a.A], () => {
            let t = s.A.getChannel(e);
            if (
                null != t &&
                (0, i.Lt)(t.flags, c.lx.IS_GUILD_RESOURCE_CHANNEL) &&
                a.A.getSelectedResourceChannelId(t?.guild_id) === t.id
            )
                return t.guild_id;
        }),
        n = (0, r.d)(t ?? o.dJq);
    return null != t && n;
}
