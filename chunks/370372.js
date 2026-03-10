t.d(n, { default: () => j });
var i = t(627968);
t(64700);
var l = t(397927),
    r = t(442433),
    a = t(847767),
    s = t(358367),
    d = t(468389),
    o = t(793574),
    u = t(50268),
    c = t(515610),
    A = t(133238),
    f = t(795144),
    v = t(979807),
    h = t(671470),
    C = t(769591),
    g = t(533957),
    p = t(886393),
    m = t(477190),
    _ = t(307623),
    E = t(317910),
    b = t(475777),
    x = t(848977),
    O = t(995102),
    T = t(288104),
    I = t(661504),
    y = t(969128),
    N = t(652215),
    R = t(985018);
function G(e) {
    let { channel: n, onSelect: t } = e,
        a = (0, x.A)(n),
        s = (0, p.A)(n),
        o = (0, A.m)(n),
        c = (0, A.y)(n),
        g = (0, f.A)(n),
        m = (0, v.A)(n),
        _ = (0, h.A)(n),
        b = (0, O.Ay)(n),
        y = (0, T.A)(n),
        N = (0, E.A)(n),
        G = (0, u.A)({ id: n.id, label: R.intl.string(R.t.gFHI3k) }),
        S = (0, d.A)(n),
        j = (0, I.Ay)(n),
        X = (0, C.os)("ChannelContextFavoritesMenu");
    return (0, i.jsxs)(l.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "channel-context",
        onClose: r.Z_,
        "aria-label": R.intl.string(R.t.Xm41aV),
        onSelect: t,
        children: [
            (0, i.jsx)(l.rXV, { children: a }),
            (0, i.jsx)(l.rXV, { children: m }),
            (0, i.jsxs)(l.rXV, { children: [o, _] }),
            (0, i.jsxs)(l.rXV, { children: [b, X ? j : y] }),
            (0, i.jsx)(l.rXV, { children: g }),
            (0, i.jsx)(l.rXV, { children: N }),
            (0, i.jsx)(l.rXV, { children: S }),
            (0, i.jsx)(l.rXV, { children: c }),
            (0, i.jsx)(l.rXV, { children: s }),
            (0, i.jsx)(l.rXV, { children: G }),
        ],
    });
}
function S(e) {
    let { channel: n, guild: t, onSelect: a } = e,
        s = (0, x.A)(n),
        o = (0, p.A)(n),
        c = (0, A.m)(n),
        f = (0, A.y)(n),
        v = (0, y.A)(n),
        h = (0, O.Ay)(n),
        N = (0, E.A)(n),
        G = (0, b.A)(n, t),
        S = (0, g.A)(n, t),
        j = (0, m.A)(n, t),
        X = (0, _.A)(n),
        U = (0, u.A)({ id: n.id, label: R.intl.string(R.t.gFHI3k) }),
        M = (0, d.A)(n),
        w = (0, T.A)(n),
        L = (0, I.Ay)(n),
        V = (0, C.os)("ChannelContextMenuNormal");
    return (0, i.jsxs)(l.W1t, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: r.Z_,
        "aria-label": R.intl.string(R.t.Xm41aV),
        onSelect: a,
        children: [
            (0, i.jsxs)(l.rXV, { children: [s, c] }, "mark-as-read-or-favorite"),
            (0, i.jsxs)(l.rXV, { children: [G, v, o] }, "channel-actions"),
            (0, i.jsxs)(l.rXV, { children: [h, V ? L : w] }, "notifications"),
            (0, i.jsxs)(l.rXV, { children: [N, S, j, X] }, "admin-actions"),
            (0, i.jsx)(l.rXV, { children: M }),
            (0, i.jsx)(l.rXV, { children: f }),
            (0, i.jsx)(l.rXV, { children: U }, "developer-actions"),
        ],
    });
}
let j = (0, s.A)(
    (0, a.A)(
        function (e) {
            return (0, c.A)() ? (0, i.jsx)(G, { ...e }) : (0, i.jsx)(S, { ...e });
        },
        { object: N.ZSU.CONTEXT_MENU },
    ),
    [o.A.CONTEXT_MENU, o.A.CHANNEL_LIST_TEXT_CHANNEL_MENU],
);
