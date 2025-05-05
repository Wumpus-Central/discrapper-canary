r.r(t), r.d(t, { default: () => h });
var n = r(255367);
r(73800);
var a = r(512722),
    i = r.n(a),
    l = r(399606),
    s = r(721037),
    o = r(561472),
    c = r(372900),
    d = r(238246),
    u = r(592125),
    m = r(703558),
    p = r(677601);
function h(e) {
    let { windowKey: t, channelId: r } = e,
        a = (0, l.e7)([u.Z], () => u.Z.getChannel(r));
    return (
        i()(null != a, 'channel cannot be null for popout'),
        (0, n.jsx)(d.Z, {
            withTitleBar: !0,
            windowKey: t,
            title: a.name,
            channelId: a.id,
            children: (0, n.jsxs)(c.Z.Provider, {
                value: a.guild_id,
                children: [
                    (0, n.jsx)(o.Z, {
                        channel: a,
                        draftType: m.d.ChannelMessage
                    }),
                    (0, n.jsx)(p.Z, { channel: a }),
                    (0, n.jsx)(s.Z, { inPopoutWindow: !0 })
                ]
            })
        })
    );
}
