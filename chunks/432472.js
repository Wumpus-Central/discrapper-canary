t.r(e), t.d(e, { default: () => h });
var i = t(54381);
t(473749);
var l = t(512722),
    a = t.n(l),
    r = t(399606),
    u = t(598006),
    c = t(372900),
    d = t(238246),
    o = t(592125),
    p = t(504185);
function h(n) {
    let { windowKey: e, channelId: t } = n,
        l = (0, r.e7)([o.Z], () => o.Z.getChannel(t));
    return (
        a()(null != l, "channel cannot be null for popout"),
        (0, i.jsx)(d.Z, {
            withTitleBar: !0,
            windowKey: e,
            title: l.name,
            children: (0, i.jsx)(c.Z.Provider, {
                value: l.guild_id,
                children: (0, i.jsx)(p.Z, {
                    channel: l,
                    popoutType: u.P.VOICE_UI,
                }),
            }),
        })
    );
}
