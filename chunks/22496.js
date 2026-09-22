e.d(r, { default: () => g });
var i = e(477900);
e(582128);
var t = e(980707),
    l = e(477782),
    s = e(442433),
    c = e(358367),
    a = e(793574),
    d = e(50268),
    A = e(438653),
    h = e(533957),
    o = e(886393),
    p = e(957565),
    u = e(375708),
    x = e(477190),
    X = e(307623),
    j = e(317910),
    b = e(475777),
    C = e(995102),
    _ = e(288104),
    E = e(969128),
    T = e(704543),
    I = e(652215);
let g = (0, c.A)(
    function (n) {
        let { channel: r, guild: e, includeTopic: c = !1, onSelect: a } = n,
            g = (0, T.A)(r),
            k = (0, E.A)(r),
            N = (0, C.A)(r),
            L = (0, o.A)(r),
            U = p.p5
                ? (0, i.jsx)(l.Dr, {
                      id: "copy-channel-topic",
                      label: u.intl.string(u.t.Tb3Vst),
                      action: () => (0, p.C)(r.topic),
                  })
                : null,
            m = (0, A.z)(r),
            v = (0, A.C)(r),
            D = (0, j.A)(r),
            V = (0, b.A)(r, e),
            f = (0, h.A)(r, e),
            w = (0, x.A)(r, e, I.rbe.GUILD_TEXT),
            G = (0, x.A)(r, e, I.rbe.GUILD_VOICE),
            H = (0, X.A)(r),
            M = (0, d.A)({ id: r.id, label: u.intl.string(u.t.gFHI3k) }),
            O = (0, _.A)(r);
        return (0, i.jsxs)(t.W, {
            "data-menu-migrated-auto": !0,
            navId: "channel-context",
            onClose: s.Z_,
            "aria-label": u.intl.string(u.t.Xm41aV),
            onSelect: a,
            children: [
                (0, i.jsxs)(l.rX, { children: [g, k] }),
                (0, i.jsx)(l.rX, { children: N }),
                (0, i.jsx)(l.rX, { children: m }),
                (0, i.jsxs)(l.rX, { children: [c ? U : O, D] }),
                (0, i.jsxs)(l.rX, { children: [V, L, f, w, G, H] }),
                (0, i.jsx)(l.rX, { children: v }),
                (0, i.jsx)(l.rX, { children: M }),
            ],
        });
    },
    [a.A.CONTEXT_MENU, a.A.CHANNEL_TITLE_MENU],
);
