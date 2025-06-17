r.r(t), r.d(t, { default: () => f });
var n = r(255367),
    a = r(512722),
    i = r.n(a),
    l = r(399606),
    s = r(721037),
    o = r(561472),
    c = r(317381),
    d = r(617552),
    u = r(372900),
    m = r(238246),
    p = r(592125),
    h = r(703558),
    y = r(677601);
function f(e) {
    let { windowKey: t, channelId: r } = e,
        a = (0, l.e7)([p.Z], () => p.Z.getChannel(r));
    i()(null != a, 'channel cannot be null for popout');
    let f = (0, l.e7)([c.ZP], () => c.ZP.getCurrentEmbeddedActivity());
    return (0, n.jsx)(m.Z, {
        withTitleBar: !0,
        windowKey: t,
        title: a.name,
        channelId: a.id,
        onBeforeUnload: (e) => {
            let { e: t, unmountWindow: r } = e;
            null != f
                ? (t.preventDefault(),
                  (0, d.Z)({
                      onConfirm: () => {
                          r();
                      },
                      usesPopoutContext: !0
                  }))
                : r();
        },
        children: (0, n.jsxs)(u.Z.Provider, {
            value: a.guild_id,
            children: [
                (0, n.jsx)(o.Z, {
                    channel: a,
                    draftType: h.d.ChannelMessage
                }),
                (0, n.jsx)(y.Z, { channel: a }),
                (0, n.jsx)(s.Z, { inPopoutWindow: !0 })
            ]
        })
    });
}
