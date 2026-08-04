r.r(t), r.d(t, { default: () => j });
var n = r(477900),
    i = r(503698),
    a = r.n(i),
    s = r(284009),
    l = r.n(s),
    o = r(702841),
    d = r(197808),
    u = r(738876),
    c = r(877991),
    m = r(332779),
    p = r(274794),
    h = r(28647),
    y = r(795816),
    f = r(933958),
    g = r(47294),
    A = r(47167),
    F = r(386467),
    b = r(979186),
    v = r(734057),
    C = r(31717),
    E = r(309010),
    D = r(164617),
    x = r(540462),
    S = r(732686);
let R = [c.L, m.T, p.w, h.z];
function j(e) {
    let { windowKey: t, channelId: r } = e,
        i = (0, o.bG)([v.A], () => v.A.getChannel(r));
    l()(null != i, "channel cannot be null for popout");
    let s = (0, A.Ay)(i);
    return (0, n.jsx)(b.A, {
        withTitleBar: !0,
        keybinds: R,
        windowKey: t,
        title: s ?? "",
        channelId: i.id,
        onBeforeUnload: function (e) {
            let { e: t, unmountWindow: r } = e;
            if (null == i) return;
            let n = f.Ay.getSelfEmbeddedActivityForChannel(i.id),
                a = E.Ay.getVoiceChannelId() === i.id;
            if (null != n && a) {
                let e = (0, y.od)(n.applicationId, i.id);
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
            className: a()("root", S.M),
            children: (0, n.jsxs)(F.A.Provider, {
                value: i.guild_id,
                children: [
                    (0, n.jsx)(u.A, { channel: i, draftType: C.C.ChannelMessage }),
                    (0, n.jsx)(x.default, { channel: i, popoutType: D.N.VOICE_UI }),
                    (0, n.jsx)(d.A, { popoutWindowKey: t, popoutWindowHasTitleBar: !0 }),
                ],
            }),
        }),
    });
}
