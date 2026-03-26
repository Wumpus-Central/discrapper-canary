r.r(t), r.d(t, { default: () => R });
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
    A = r(933958),
    f = r(47294),
    g = r(386467),
    F = r(923917),
    v = r(734057),
    C = r(31717),
    b = r(164617),
    x = r(540462),
    E = r(78326);
let D = [c.L, m.T, p.w, h.z];
function R(e) {
    let { windowKey: t, channelId: r } = e,
        a = (0, o.bG)([v.A], () => v.A.getChannel(r));
    l()(null != a, "channel cannot be null for popout");
    let s = (0, o.bG)([A.Ay], () => A.Ay.getSelfEmbeddedActivityForChannel(a.id), [a]);
    return (0, n.jsx)(F.A, {
        withTitleBar: !0,
        keybinds: D,
        windowKey: t,
        title: a.name,
        channelId: a.id,
        onBeforeUnload: (e) => {
            let { e: t, unmountWindow: r } = e;
            if (null != s) {
                let e = (0, y.od)(s.applicationId, a.id);
                t.preventDefault(),
                    (0, f.A)({
                        onConfirm: async () => {
                            await e, r();
                        },
                        usesPopoutContext: !0,
                    });
            } else r();
        },
        children: (0, n.jsx)("div", {
            className: i()("root", E.M),
            children: (0, n.jsxs)(g.A.Provider, {
                value: a.guild_id,
                children: [
                    (0, n.jsx)(u.A, { channel: a, draftType: C.C.ChannelMessage }),
                    (0, n.jsx)(x.A, { channel: a, popoutType: b.N.VOICE_UI }),
                    (0, n.jsx)(d.A, { popoutWindowKey: t, popoutWindowHasTitleBar: !0 }),
                ],
            }),
        }),
    });
}
