n.d(t, { A: () => u }), n(938796);
var r = n(665260),
    l = n(417597),
    i = n(734057),
    a = n(220706),
    s = n(473529),
    o = n(652215),
    c = n(746080);
function u(e) {
    let t = (0, l.bG)([i.A, a.A], () => {
            let t = i.A.getChannel(e);
            if (
                null != t &&
                (0, r.Lt)(t.flags, c.lx.IS_GUILD_RESOURCE_CHANNEL) &&
                a.A.getSelectedResourceChannelId(null == t ? void 0 : t.guild_id) === t.id
            )
                return t.guild_id;
        }),
        n = (0, s.d)(null != t ? t : o.dJq);
    return null != t && n;
}
