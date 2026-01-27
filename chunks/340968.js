n.d(t, {
    default: () => _,
});
var r = n(627968);
n(64700);
var i = n(397927),
    c = n(442433),
    l = n(358367),
    o = n(793574),
    a = n(50268),
    s = n(769591),
    u = n(533957),
    b = n(886393),
    d = n(659566),
    p = n(477190),
    y = n(307623),
    O = n(317910),
    A = n(475777),
    f = n(995102),
    g = n(288104),
    j = n(661504),
    E = n(969128),
    h = n(652215),
    v = n(985018);
let _ = (0, l.A)(
    function (e) {
        let { channel: t, guild: n, includeTopic: l = !1, onSelect: o } = e,
            _ = (0, E.A)(t),
            P = (0, f.Ay)(t),
            D = (0, g.A)(t),
            w = (0, b.A)(t),
            m = (0, d.A)(t),
            x = (0, O.A)(t),
            N = (0, A.A)(t, n),
            C = (0, u.A)(t, n),
            I = (0, p.A)(t, n, h.rbe.GUILD_TEXT),
            S = (0, p.A)(t, n, h.rbe.GUILD_VOICE),
            T = (0, y.A)(t),
            G = (0, a.A)({
                id: t.id,
                label: v.intl.string(v.t.gFHI3k),
            }),
            L = (0, s.os)("ChannelTitleContextMenu"),
            M = (0, j.Ay)(t);
        return (0, r.jsxs)(i.W1t, {
            "data-menu-migrated-auto": !0,
            navId: "channel-context",
            onClose: c.Z_,
            "aria-label": v.intl.string(v.t.Xm41aV),
            onSelect: o,
            children: [
                (0, r.jsx)(i.rXV, {
                    children: _,
                }),
                (0, r.jsx)(i.rXV, {
                    children: P,
                }),
                (0, r.jsxs)(i.rXV, {
                    children: [l ? m : L ? M : D, x],
                }),
                (0, r.jsxs)(i.rXV, {
                    children: [N, w, C, I, S],
                }),
                (0, r.jsx)(i.rXV, {
                    children: T,
                }),
                (0, r.jsx)(i.rXV, {
                    children: G,
                }),
            ],
        });
    },
    [o.A.CONTEXT_MENU, o.A.CHANNEL_TITLE_MENU],
);
