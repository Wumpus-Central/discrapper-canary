r.r(t), r.d(t, { default: () => S });
var n = r(627968),
    i = r(503698),
    a = r.n(i),
    o = r(284009),
    s = r.n(o),
    l = r(702841),
    d = r(707233),
    c = r(738876),
    u = r(877991),
    m = r(332779),
    p = r(274794),
    h = r(28647),
    y = r(795816),
    b = r(933958),
    g = r(47294),
    f = r(47167),
    C = r(386467),
    A = r(979186),
    F = r(734057),
    x = r(31717),
    _ = r(164617),
    v = r(540462),
    D = r(42182);
let E = [u.L, m.T, p.w, h.z];
function S(e) {
    let { windowKey: t, channelId: r } = e,
        i = (0, l.bG)([F.A], () => F.A.getChannel(r));
    s()(null != i, "channel cannot be null for popout");
    let o = (0, f.Ay)(i),
        u = (0, l.bG)([b.Ay], () => b.Ay.getSelfEmbeddedActivityForChannel(i.id), [i]);
    return (0, n.jsx)(A.A, {
        withTitleBar: !0,
        keybinds: E,
        windowKey: t,
        title: o ?? "",
        channelId: i.id,
        onBeforeUnload: (e) => {
            let { e: t, unmountWindow: r } = e;
            if (null != u) {
                let e = (0, y.od)(u.applicationId, i.id);
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
            className: a()("root", D.M),
            children: (0, n.jsxs)(C.A.Provider, {
                value: i.guild_id,
                children: [
                    (0, n.jsx)(c.A, { channel: i, draftType: x.C.ChannelMessage }),
                    (0, n.jsx)(v.default, { channel: i, popoutType: _.N.VOICE_UI }),
                    (0, n.jsx)(d.A, { popoutWindowKey: t, popoutWindowHasTitleBar: !0 }),
                ],
            }),
        }),
    });
}
