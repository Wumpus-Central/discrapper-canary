n.d(t, { A: () => h }), n(938796);
var i = n(665260),
    l = n(417597),
    a = n(761640),
    s = n(734057),
    r = n(309010),
    o = n(473529),
    c = n(813503),
    d = n(652215),
    u = n(746080);
function h(e) {
    let t = (0, l.bG)([s.A, r.A, a.Ay], () => {
            let t = s.A.getChannel(e);
            if (null != t && (0, i.Lt)(t.flags, u.lx.IS_GUILD_RESOURCE_CHANNEL) && (0, c.A)(t, r.A, a.Ay))
                return t.guild_id;
        }),
        n = (0, o.d)(t ?? d.dJq);
    return null != t && n;
}
