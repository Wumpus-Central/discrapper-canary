r.r(t), r.d(t, { default: () => Z });
var n = r(951288),
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
    f = r(566620),
    y = r(317381),
    g = r(729200),
    v = r(617552),
    D = r(372900),
    b = r(238246),
    C = r(592125),
    E = r(703558),
    P = r(677601),
    j = r(702511);
let R = [u.S, m.O, p.U, h._];
function Z(e) {
    let { windowKey: t, channelId: r } = e,
        a = (0, s.e7)([C.Z], () => C.Z.getChannel(r));
    o()(null != a, "channel cannot be null for popout");
    let l = (0, s.e7)([y.ZP], () => y.ZP.getSelfEmbeddedActivityForChannel(a.id), [a]);
    return (0, n.jsx)(b.Z, {
        withTitleBar: !0,
        keybinds: R,
        windowKey: t,
        title: a.name,
        channelId: a.id,
        onBeforeUnload: (e) => {
            let { e: t, unmountWindow: r } = e;
            if (null != l) {
                let e = (0, g.g)() ? (0, f.nJ)(l.applicationId, a.id) : Promise.resolve(!0);
                t.preventDefault(),
                    (0, v.Z)({
                        onConfirm: async () => {
                            await e, r();
                        },
                        usesPopoutContext: !0,
                    });
            } else r();
        },
        children: (0, n.jsx)("div", {
            className: i()("root", j.rootPopout),
            children: (0, n.jsxs)(D.Z.Provider, {
                value: a.guild_id,
                children: [
                    (0, n.jsx)(d.Z, {
                        channel: a,
                        draftType: E.d.ChannelMessage,
                    }),
                    (0, n.jsx)(P.Z, { channel: a }),
                    (0, n.jsx)(c.Z, {
                        popoutWindowKey: t,
                        popoutWindowHasTitleBar: !0,
                    }),
                ],
            }),
        }),
    });
}
