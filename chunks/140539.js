r.r(t), r.d(t, { default: () => F });
var n = r(627968),
    a = r(503698),
    i = r.n(a),
    s = r(284009),
    l = r.n(s),
    o = r(417597),
    d = r(197808),
    c = r(738876),
    u = r(877991),
    m = r(332779),
    p = r(568765),
    y = r(512513),
    h = r(795816),
    A = r(933958),
    g = r(47294),
    f = r(386467),
    v = r(923917),
    C = r(734057),
    x = r(31717),
    E = r(164617),
    D = r(540462),
    b = r(678035);
let R = [u.L, m.T, p.w, y.z];
function F(e) {
    let { windowKey: t, channelId: r } = e,
        a = (0, o.bG)([C.A], () => C.A.getChannel(r));
    l()(null != a, "channel cannot be null for popout");
    let s = (0, o.bG)([A.Ay], () => A.Ay.getSelfEmbeddedActivityForChannel(a.id), [a]);
    return (0, n.jsx)(v.A, {
        withTitleBar: !0,
        keybinds: R,
        windowKey: t,
        title: a.name,
        channelId: a.id,
        onBeforeUnload: (e) => {
            let { e: t, unmountWindow: r } = e;
            if (null != s) {
                let e = (0, h.od)(s.applicationId, a.id);
                t.preventDefault(),
                    (0, g.A)({
                        onConfirm: async () => {
                            await e, r();
                        },
                        usesPopoutContext: !0,
                    });
            } else r();
        },
        children: (0, n.jsx)("div", {
            className: i()("root", b.M),
            children: (0, n.jsxs)(f.A.Provider, {
                value: a.guild_id,
                children: [
                    (0, n.jsx)(c.A, { channel: a, draftType: x.C.ChannelMessage }),
                    (0, n.jsx)(D.A, { channel: a, popoutType: E.N.VOICE_UI }),
                    (0, n.jsx)(d.A, { popoutWindowKey: t, popoutWindowHasTitleBar: !0 }),
                ],
            }),
        }),
    });
}
