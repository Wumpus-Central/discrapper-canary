r.r(t), r.d(t, { default: () => R });
var n = r(627968),
    i = r(503698),
    a = r.n(i),
    o = r(284009),
    l = r.n(o),
    s = r(417597),
    d = r(197808),
    c = r(738876),
    u = r(877991),
    m = r(332779),
    p = r(568765),
    h = r(512513),
    y = r(795816),
    b = r(933958),
    g = r(47294),
    f = r(47167),
    A = r(386467),
    C = r(923917),
    v = r(734057),
    F = r(31717),
    x = r(164617),
    D = r(540462),
    E = r(42182);
let S = [u.L, m.T, p.w, h.z];
function R(e) {
    let { windowKey: t, channelId: r } = e,
        i = (0, s.bG)([v.A], () => v.A.getChannel(r));
    l()(null != i, "channel cannot be null for popout");
    let o = (0, f.Ay)(i),
        u = (0, s.bG)([b.Ay], () => b.Ay.getSelfEmbeddedActivityForChannel(i.id), [i]);
    return (0, n.jsx)(C.A, {
        withTitleBar: !0,
        keybinds: S,
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
            className: a()("root", E.M),
            children: (0, n.jsxs)(A.A.Provider, {
                value: i.guild_id,
                children: [
                    (0, n.jsx)(c.A, { channel: i, draftType: F.C.ChannelMessage }),
                    (0, n.jsx)(D.default, { channel: i, popoutType: x.N.VOICE_UI }),
                    (0, n.jsx)(d.A, { popoutWindowKey: t, popoutWindowHasTitleBar: !0 }),
                ],
            }),
        }),
    });
}
