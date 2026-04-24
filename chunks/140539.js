"use strict";
n.r(t), n.d(t, { default: () => D });
var i = n(627968),
    r = n(503698),
    a = n.n(r),
    s = n(284009),
    l = n.n(s),
    o = n(702841),
    d = n(707233),
    c = n(738876),
    u = n(877991),
    m = n(332779),
    p = n(274794),
    _ = n(28647),
    h = n(795816),
    g = n(933958),
    b = n(47294),
    y = n(47167),
    f = n(386467),
    A = n(979186),
    S = n(734057),
    E = n(31717),
    x = n(164617),
    C = n(540462),
    v = n(42182);
let N = [u.L, m.T, p.w, _.z];
function D(e) {
    let { windowKey: t, channelId: n } = e,
        r = (0, o.bG)([S.A], () => S.A.getChannel(n));
    l()(null != r, "channel cannot be null for popout");
    let s = (0, y.Ay)(r),
        u = (0, o.bG)([g.Ay], () => g.Ay.getSelfEmbeddedActivityForChannel(r.id), [r]);
    return (0, i.jsx)(A.A, {
        withTitleBar: !0,
        keybinds: N,
        windowKey: t,
        title: s ?? "",
        channelId: r.id,
        onBeforeUnload: (e) => {
            let { e: t, unmountWindow: n } = e;
            if (null != u) {
                let e = (0, h.od)(u.applicationId, r.id);
                t.preventDefault(),
                    (0, b.A)({
                        onConfirm: async () => {
                            await e, n();
                        },
                        usesPopoutContext: !0,
                    });
            } else n();
        },
        children: (0, i.jsx)("div", {
            className: a()("root", v.M),
            children: (0, i.jsxs)(f.A.Provider, {
                value: r.guild_id,
                children: [
                    (0, i.jsx)(c.A, { channel: r, draftType: E.C.ChannelMessage }),
                    (0, i.jsx)(C.default, { channel: r, popoutType: x.N.VOICE_UI }),
                    (0, i.jsx)(d.A, { popoutWindowKey: t, popoutWindowHasTitleBar: !0 }),
                ],
            }),
        }),
    });
}
