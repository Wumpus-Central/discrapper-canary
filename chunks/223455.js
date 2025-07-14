(r.r(t), r.d(t, { default: () => D }));
var n = r(255367),
    a = r(120356),
    i = r.n(a),
    l = r(512722),
    o = r.n(l),
    s = r(399606),
    c = r(721037),
    d = r(561472),
    u = r(317381),
    m = r(617552),
    p = r(372900),
    h = r(238246),
    y = r(592125),
    f = r(703558),
    g = r(677601),
    v = r(87390);
function D(e) {
    let { windowKey: t, channelId: r } = e,
        a = (0, s.e7)([y.Z], () => y.Z.getChannel(r));
    o()(null != a, 'channel cannot be null for popout');
    let l = (0, s.e7)([u.ZP], () => u.ZP.getSelfEmbeddedActivityForChannel(a.id), [a]);
    return (0, n.jsx)(h.Z, {
        withTitleBar: !0,
        windowKey: t,
        title: a.name,
        channelId: a.id,
        onBeforeUnload: (e) => {
            let { e: t, unmountWindow: r } = e;
            null != l
                ? (t.preventDefault(),
                  (0, m.Z)({
                      onConfirm: () => {
                          r();
                      },
                      usesPopoutContext: !0
                  }))
                : r();
        },
        children: (0, n.jsx)('div', {
            className: i()('root', v.rootPopout),
            children: (0, n.jsxs)(p.Z.Provider, {
                value: a.guild_id,
                children: [
                    (0, n.jsx)(d.Z, {
                        channel: a,
                        draftType: f.d.ChannelMessage
                    }),
                    (0, n.jsx)(g.Z, { channel: a }),
                    (0, n.jsx)(c.Z, { inPopoutWindow: !0 })
                ]
            })
        })
    });
}
