n.d(t, { A: () => u }), n(938796);
var i = n(665260),
    l = n(702841),
    s = n(761640),
    a = n(734057),
    r = n(309010),
    o = n(473529),
    c = n(746080),
    d = n(652215);
function u(e) {
    let t = (0, l.bG)([a.A, r.A, s.Ay], () => {
            let t = a.A.getChannel(e);
            if (
                null != t &&
                (0, i.Lt)(t.flags, c.lx.IS_GUILD_RESOURCE_CHANNEL) &&
                (function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.Ay,
                        i = e.guild_id;
                    return (
                        t.getChannelId(i) === c.VV.GUILD_HOME && n.getCurrentSidebarChannelId(c.VV.GUILD_HOME) === e.id
                    );
                })(t, r.A, s.Ay)
            )
                return t.guild_id;
        }),
        n = (0, o.d)(t ?? d.dJq);
    return null != t && n;
}
