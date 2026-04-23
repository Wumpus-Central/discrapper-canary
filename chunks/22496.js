i.d(e, { default: () => D });
var t = i(627968);
i(64700);
var l = i(550079),
    a = i(477782),
    r = i(442433),
    d = i(358367),
    c = i(793574),
    o = i(50268),
    u = i(133238),
    s = i(769591),
    A = i(533957),
    _ = i(886393),
    E = i(957565),
    h = i(985018),
    g = i(477190),
    y = i(307623),
    b = i(317910),
    f = i(475777),
    p = i(995102),
    v = i(288104),
    x = i(661504),
    C = i(969128),
    N = i(643111),
    G = i(652215);
let D = (0, d.A)(
    function (n) {
        let { channel: e, guild: i, includeTopic: d = !1, onSelect: c } = n,
            D = (0, N.A)(e),
            j = (0, C.A)(e),
            T = (0, p.A)(e),
            I = (0, v.A)(e),
            L = (0, _.A)(e),
            M = E.p5
                ? (0, t.jsx)(a.Dr, {
                      id: "copy-channel-topic",
                      label: h.intl.string(h.t.Tb3Vst),
                      action: () => (0, E.C)(e.topic),
                  })
                : null,
            m = (0, u.m)(e),
            O = (0, u.y)(e),
            P = (0, b.A)(e),
            U = (0, f.A)(e, i),
            X = (0, A.A)(e, i),
            H = (0, g.A)(e, i, G.rbe.GUILD_TEXT),
            R = (0, g.A)(e, i, G.rbe.GUILD_VOICE),
            w = (0, y.A)(e),
            S = (0, o.A)({ id: e.id, label: h.intl.string(h.t.gFHI3k) }),
            k = (0, s.os)("ChannelTitleContextMenu"),
            V = (0, x.Ay)(e);
        return (0, t.jsxs)(l.W, {
            "data-menu-migrated-auto": !0,
            navId: "channel-context",
            onClose: r.Z_,
            "aria-label": h.intl.string(h.t.Xm41aV),
            onSelect: c,
            children: [
                (0, t.jsxs)(a.rX, { children: [D, j] }),
                (0, t.jsx)(a.rX, { children: T }),
                (0, t.jsx)(a.rX, { children: m }),
                (0, t.jsxs)(a.rX, { children: [d ? M : k ? V : I, P] }),
                (0, t.jsxs)(a.rX, { children: [U, L, X, H, R, w] }),
                (0, t.jsx)(a.rX, { children: O }),
                (0, t.jsx)(a.rX, { children: S }),
            ],
        });
    },
    [c.A.CONTEXT_MENU, c.A.CHANNEL_TITLE_MENU],
);
