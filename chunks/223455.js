n.r(t), n.d(t, { default: () => h });
var r = n(200651);
n(192379);
var a = n(512722),
    i = n.n(a),
    o = n(399606),
    l = n(721037),
    s = n(561472),
    d = n(372900),
    c = n(238246),
    u = n(592125),
    m = n(703558),
    p = n(677601);
function h(e) {
    let { windowKey: t, channelId: n } = e,
        a = (0, o.e7)([u.Z], () => u.Z.getChannel(n));
    return (
        i()(null != a, 'channel cannot be null for popout'),
        (0, r.jsx)(c.Z, {
            withTitleBar: !0,
            windowKey: t,
            title: a.name,
            channelId: a.id,
            children: (0, r.jsxs)(d.Z.Provider, {
                value: a.guild_id,
                children: [
                    (0, r.jsx)(s.Z, {
                        channel: a,
                        draftType: m.d.ChannelMessage
                    }),
                    (0, r.jsx)(p.Z, { channel: a }),
                    (0, r.jsx)(l.Z, { inPopoutWindow: !0 })
                ]
            })
        })
    );
}
