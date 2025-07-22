(r.r(t), r.d(t, { default: () => j }));
var n = r(255367),
    a = r(120356),
    i = r.n(a),
    l = r(512722),
    o = r.n(l),
    s = r(399606),
    c = r(721037),
    d = r(561472),
    u = r(679080),
    m = r(777019),
    p = r(400332),
    h = r(721383),
    y = r(317381),
    f = r(617552),
    g = r(372900),
    v = r(238246),
    D = r(592125),
    b = r(703558),
    C = r(677601),
    E = r(87390);
let P = [u.S, m.O, p.U, h._];
function j(e) {
    let { windowKey: t, channelId: r } = e,
        a = (0, s.e7)([D.Z], () => D.Z.getChannel(r));
    o()(null != a, 'channel cannot be null for popout');
    let l = (0, s.e7)([y.ZP], () => y.ZP.getSelfEmbeddedActivityForChannel(a.id), [a]);
    return (0, n.jsx)(v.Z, {
        withTitleBar: !0,
        keybinds: P,
        windowKey: t,
        title: a.name,
        channelId: a.id,
        onBeforeUnload: (e) => {
            let { e: t, unmountWindow: r } = e;
            null != l
                ? (t.preventDefault(),
                  (0, f.Z)({
                      onConfirm: () => {
                          r();
                      },
                      usesPopoutContext: !0
                  }))
                : r();
        },
        children: (0, n.jsx)('div', {
            className: i()('root', E.rootPopout),
            children: (0, n.jsxs)(g.Z.Provider, {
                value: a.guild_id,
                children: [
                    (0, n.jsx)(d.Z, {
                        channel: a,
                        draftType: b.d.ChannelMessage
                    }),
                    (0, n.jsx)(C.Z, { channel: a }),
                    (0, n.jsx)(c.Z, {
                        popoutWindowKey: t,
                        popoutWindowHasTitleBar: !0
                    })
                ]
            })
        })
    });
}
