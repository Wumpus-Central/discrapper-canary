r.r(t), r.d(t, { default: () => S });
var n = r(627968),
    a = r(503698),
    i = r.n(a),
    s = r(284009),
    l = r.n(s),
    o = r(417597),
    d = r(197808),
    u = r(738876),
    c = r(877991),
    m = r(332779),
    p = r(568765),
    h = r(512513),
    y = r(795816),
    f = r(933958),
    A = r(47294),
    g = r(47167),
    F = r(386467),
    v = r(923917),
    C = r(734057),
    b = r(31717),
    E = r(164617),
    x = r(540462),
    D = r(43061);
let R = [c.L, m.T, p.w, h.z];
function S(e) {
    let { windowKey: t, channelId: r } = e,
        a = (0, o.bG)([C.A], () => C.A.getChannel(r));
    l()(null != a, "channel cannot be null for popout");
    let s = (0, g.Ay)(a),
        c = (0, o.bG)([f.Ay], () => f.Ay.getSelfEmbeddedActivityForChannel(a.id), [a]);
    return (0, n.jsx)(v.A, {
        withTitleBar: !0,
        keybinds: R,
        windowKey: t,
        title: s ?? "",
        channelId: a.id,
        onBeforeUnload: (e) => {
            let { e: t, unmountWindow: r } = e;
            if (null != c) {
                let e = (0, y.od)(c.applicationId, a.id);
                t.preventDefault(),
                    (0, A.A)({
                        onConfirm: async () => {
                            await e, r();
                        },
                        usesPopoutContext: !0,
                    });
            } else r();
        },
        children: (0, n.jsx)("div", {
            className: i()("root", D.M),
            children: (0, n.jsxs)(F.A.Provider, {
                value: a.guild_id,
                children: [
                    (0, n.jsx)(u.A, { channel: a, draftType: b.C.ChannelMessage }),
                    (0, n.jsx)(x.A, { channel: a, popoutType: E.N.VOICE_UI }),
                    (0, n.jsx)(d.A, { popoutWindowKey: t, popoutWindowHasTitleBar: !0 }),
                ],
            }),
        }),
    });
}
