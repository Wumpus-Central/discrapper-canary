t.d(e, { default: () => N });
var r = t(477900);
t(582128);
var i = t(980707),
    l = t(477782),
    s = t(442433),
    a = t(358367),
    c = t(793574),
    d = t(50268),
    A = t(438653),
    h = t(769591),
    o = t(533957),
    p = t(886393),
    u = t(957565),
    x = t(375708),
    C = t(477190),
    X = t(307623),
    j = t(317910),
    b = t(475777),
    T = t(995102),
    _ = t(288104),
    E = t(661504),
    I = t(969128),
    g = t(643111),
    k = t(652215);
let N = (0, a.A)(
    function (n) {
        let { channel: e, guild: t, includeTopic: a = !1, onSelect: c } = n,
            N = (0, g.A)(e),
            L = (0, I.A)(e),
            U = (0, T.A)(e),
            m = (0, _.A)(e),
            v = (0, p.A)(e),
            D = u.p5
                ? (0, r.jsx)(l.Dr, {
                      id: "copy-channel-topic",
                      label: x.intl.string(x.t.Tb3Vst),
                      action: () => (0, u.C)(e.topic),
                  })
                : null,
            M = (0, A.z)(e),
            V = (0, A.C)(e),
            f = (0, j.A)(e),
            w = (0, b.A)(e, t),
            y = (0, o.A)(e, t),
            G = (0, C.A)(e, t, k.rbe.GUILD_TEXT),
            H = (0, C.A)(e, t, k.rbe.GUILD_VOICE),
            O = (0, X.A)(e),
            z = (0, d.A)({ id: e.id, label: x.intl.string(x.t.gFHI3k) }),
            F = (0, h.os)("ChannelTitleContextMenu"),
            S = (0, E.Ay)(e);
        return (0, r.jsxs)(i.W, {
            "data-menu-migrated-auto": !0,
            navId: "channel-context",
            onClose: s.Z_,
            "aria-label": x.intl.string(x.t.Xm41aV),
            onSelect: c,
            children: [
                (0, r.jsxs)(l.rX, { children: [N, L] }),
                (0, r.jsx)(l.rX, { children: U }),
                (0, r.jsx)(l.rX, { children: M }),
                (0, r.jsxs)(l.rX, { children: [a ? D : F ? S : m, f] }),
                (0, r.jsxs)(l.rX, { children: [w, v, y, G, H, O] }),
                (0, r.jsx)(l.rX, { children: V }),
                (0, r.jsx)(l.rX, { children: z }),
            ],
        });
    },
    [c.A.CONTEXT_MENU, c.A.CHANNEL_TITLE_MENU],
);
