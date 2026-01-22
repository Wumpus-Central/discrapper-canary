n.r(t), n.d(t, { default: () => F });
var r = n(627968),
    a = n(503698),
    i = n.n(a),
    l = n(284009),
    s = n.n(l),
    o = n(417597),
    d = n(197808),
    c = n(738876),
    u = n(877991),
    m = n(332779),
    p = n(568765),
    y = n(512513),
    h = n(795816),
    g = n(933958),
    A = n(47294),
    f = n(386467),
    v = n(923917),
    b = n(734057),
    C = n(31717),
    E = n(164617),
    x = n(540462),
    D = n(678035);
let R = [u.L, m.T, p.w, y.z];
function F(e) {
    let { windowKey: t, channelId: n } = e,
        a = (0, o.bG)([b.A], () => b.A.getChannel(n));
    s()(null != a, "channel cannot be null for popout");
    let l = (0, o.bG)([g.Ay], () => g.Ay.getSelfEmbeddedActivityForChannel(a.id), [a]);
    return (0, r.jsx)(v.A, {
        withTitleBar: !0,
        keybinds: R,
        windowKey: t,
        title: a.name,
        channelId: a.id,
        onBeforeUnload: (e) => {
            let { e: t, unmountWindow: n } = e;
            if (null != l) {
                let e = (0, h.od)(l.applicationId, a.id);
                t.preventDefault(),
                    (0, A.A)({
                        onConfirm: async () => {
                            await e, n();
                        },
                        usesPopoutContext: !0,
                    });
            } else n();
        },
        children: (0, r.jsx)("div", {
            className: i()("root", D.M),
            children: (0, r.jsxs)(f.A.Provider, {
                value: a.guild_id,
                children: [
                    (0, r.jsx)(c.A, {
                        channel: a,
                        draftType: C.C.ChannelMessage,
                    }),
                    (0, r.jsx)(x.A, {
                        channel: a,
                        popoutType: E.N.VOICE_UI,
                    }),
                    (0, r.jsx)(d.A, {
                        popoutWindowKey: t,
                        popoutWindowHasTitleBar: !0,
                    }),
                ],
            }),
        }),
    });
}
