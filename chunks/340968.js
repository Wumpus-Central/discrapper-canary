n.d(t, {
    default: () => _,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(442433),
    c = n(358367),
    a = n(793574),
    o = n(50268),
    s = n(769591),
    u = n(533957),
    b = n(886393),
    d = n(659566),
    p = n(477190),
    O = n(307623),
    y = n(317910),
    f = n(475777),
    A = n(995102),
    g = n(288104),
    j = n(661504),
    E = n(969128),
    h = n(652215),
    v = n(985018);
let _ = (0, c.A)(
    function (e) {
        let { channel: t, guild: n, includeTopic: c = !1, onSelect: a } = e,
            _ = (0, E.A)(t),
            P = (0, A.Ay)(t),
            w = (0, g.A)(t),
            D = (0, b.A)(t),
            x = (0, d.A)(t),
            m = (0, y.A)(t),
            N = (0, f.A)(t, n),
            C = (0, u.A)(t, n),
            I = (0, p.A)(t, n, h.rbe.GUILD_TEXT),
            S = (0, p.A)(t, n, h.rbe.GUILD_VOICE),
            T = (0, O.A)(t),
            G = (0, o.A)({
                id: t.id,
                label: v.intl.string(v.t.gFHI3k),
            }),
            M = (0, s.os)("ChannelTitleContextMenu"),
            L = (0, j.Ay)(t);
        return (0, r.jsxs)(i.W1t, {
            "data-menu-mixed": !0,
            navId: "channel-context",
            onClose: l.Z_,
            "aria-label": v.intl.string(v.t.Xm41aV),
            onSelect: a,
            children: [
                (0, r.jsx)(i.rXV, {
                    children: _,
                }),
                (0, r.jsx)(i.rXV, {
                    children: P,
                }),
                (0, r.jsxs)(i.rXV, {
                    children: [c ? x : M ? L : w, m],
                }),
                (0, r.jsxs)(i.rXV, {
                    children: [N, D, C, I, S],
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
    [a.A.CONTEXT_MENU, a.A.CHANNEL_TITLE_MENU],
);
