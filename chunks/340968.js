e.d(t, { default: () => y });
var i = e(627968);
e(64700);
var l = e(397927),
    r = e(442433),
    a = e(358367),
    d = e(793574),
    c = e(50268),
    s = e(769591),
    u = e(533957),
    o = e(886393),
    A = e(659566),
    g = e(477190),
    _ = e(307623),
    E = e(317910),
    p = e(475777),
    h = e(995102),
    b = e(288104),
    C = e(661504),
    v = e(969128),
    f = e(652215),
    x = e(985018);
let y = (0, a.A)(
    function (n) {
        let { channel: t, guild: e, includeTopic: a = !1, onSelect: d } = n,
            y = (0, v.A)(t),
            G = (0, h.A)(t),
            O = (0, b.A)(t),
            m = (0, o.A)(t),
            D = (0, A.A)(t),
            N = (0, E.A)(t),
            T = (0, p.A)(t, e),
            L = (0, u.A)(t, e),
            M = (0, g.A)(t, e, f.rbe.GUILD_TEXT),
            j = (0, g.A)(t, e, f.rbe.GUILD_VOICE),
            I = (0, _.A)(t),
            U = (0, c.A)({ id: t.id, label: x.intl.string(x.t.gFHI3k) }),
            R = (0, s.os)("ChannelTitleContextMenu"),
            S = (0, C.Ay)(t);
        return (0, i.jsxs)(l.W1t, {
            "data-menu-migrated-auto": !0,
            navId: "channel-context",
            onClose: r.Z_,
            "aria-label": x.intl.string(x.t.Xm41aV),
            onSelect: d,
            children: [
                (0, i.jsx)(l.rXV, { children: y }),
                (0, i.jsx)(l.rXV, { children: G }),
                (0, i.jsxs)(l.rXV, { children: [a ? D : R ? S : O, N] }),
                (0, i.jsxs)(l.rXV, { children: [T, m, L, M, j] }),
                (0, i.jsx)(l.rXV, { children: I }),
                (0, i.jsx)(l.rXV, { children: U }),
            ],
        });
    },
    [d.A.CONTEXT_MENU, d.A.CHANNEL_TITLE_MENU],
);
