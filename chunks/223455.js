n.r(t), n.d(t, { default: () => Z });
var r = n(54381),
    a = n(120356),
    i = n.n(a),
    l = n(512722),
    o = n.n(l),
    s = n(399606),
    c = n(721037),
    d = n(561472),
    u = n(679080),
    m = n(777019),
    p = n(400332),
    h = n(721383),
    f = n(566620),
    y = n(317381),
    g = n(617552),
    v = n(372900),
    E = n(238246),
    b = n(592125),
    D = n(703558),
    P = n(598006),
    j = n(677601),
    x = n(873776);
let C = [u.S, m.O, p.U, h._];
function Z(e) {
    let { windowKey: t, channelId: n } = e,
        a = (0, s.e7)([b.Z], () => b.Z.getChannel(n));
    o()(null != a, "channel cannot be null for popout");
    let l = (0, s.e7)([y.ZP], () => y.ZP.getSelfEmbeddedActivityForChannel(a.id), [a]);
    return (0, r.jsx)(E.Z, {
        withTitleBar: !0,
        keybinds: C,
        windowKey: t,
        title: a.name,
        channelId: a.id,
        onBeforeUnload: (e) => {
            let { e: t, unmountWindow: n } = e;
            if (null != l) {
                let e = (0, f.nJ)(l.applicationId, a.id);
                t.preventDefault(),
                    (0, g.Z)({
                        onConfirm: async () => {
                            await e, n();
                        },
                        usesPopoutContext: !0,
                    });
            } else n();
        },
        children: (0, r.jsx)("div", {
            className: i()("root", x.rootPopout),
            children: (0, r.jsxs)(v.Z.Provider, {
                value: a.guild_id,
                children: [
                    (0, r.jsx)(d.Z, {
                        channel: a,
                        draftType: D.d.ChannelMessage,
                    }),
                    (0, r.jsx)(j.Z, {
                        channel: a,
                        popoutType: P.P.VOICE_UI,
                    }),
                    (0, r.jsx)(c.Z, {
                        popoutWindowKey: t,
                        popoutWindowHasTitleBar: !0,
                    }),
                ],
            }),
        }),
    });
}
