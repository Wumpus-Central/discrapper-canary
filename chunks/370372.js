e.d(t, { default: () => U });
var i = e(627968);
e(64700);
var l = e(397927),
    a = e(442433),
    r = e(847767),
    s = e(358367),
    o = e(468389),
    d = e(793574),
    u = e(50268),
    c = e(93055),
    h = e(133238),
    A = e(128001),
    f = e(979807),
    _ = e(671470),
    b = e(769591),
    E = e(533957),
    g = e(886393),
    p = e(477190),
    v = e(307623),
    C = e(317910),
    O = e(475777),
    m = e(848977),
    I = e(995102),
    T = e(288104),
    R = e(661504),
    S = e(969128),
    x = e(704543),
    N = e(652215),
    G = e(985018);
function L(n) {
    let { channel: t, onSelect: e } = n,
        r = (0, m.A)(t),
        s = (0, g.A)(t),
        d = (0, h.y)(t),
        c = (0, A.A)(t),
        E = (0, f.A)(t),
        p = (0, _.A)(t),
        v = (0, I.A)(t),
        C = (0, T.A)(t),
        O = (0, u.A)({ id: t.id, label: G.intl.string(G.t.gFHI3k) }),
        S = (0, o.A)(t),
        x = (0, R.Ay)(t),
        N = (0, b.os)("ChannelContextFavoritesMenu");
    return (0, i.jsxs)(l.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "channel-context",
        onClose: a.Z_,
        "aria-label": G.intl.string(G.t.Xm41aV),
        onSelect: e,
        children: [
            (0, i.jsx)(l.rXV, { children: r }),
            (0, i.jsxs)(l.rXV, { children: [E, p, c] }),
            (0, i.jsx)(l.rXV, { children: s }),
            (0, i.jsxs)(l.rXV, { children: [v, N ? x : C] }),
            (0, i.jsx)(l.rXV, { children: S }),
            (0, i.jsx)(l.rXV, { children: d }),
            (0, i.jsx)(l.rXV, { children: O }),
        ],
    });
}
function y(n) {
    let { channel: t, guild: e, onSelect: r } = n,
        s = (0, m.A)(t),
        d = (0, g.A)(t),
        c = (0, h.m)(t),
        A = (0, h.y)(t),
        f = (0, x.A)(t),
        _ = (0, S.A)(t),
        N = (0, I.A)(t),
        L = (0, C.A)(t),
        y = (0, O.A)(t, e),
        U = (0, E.A)(t, e),
        D = (0, p.A)(t, e),
        j = (0, v.A)(t),
        X = (0, u.A)({ id: t.id, label: G.intl.string(G.t.gFHI3k) }),
        w = (0, o.A)(t),
        V = (0, T.A)(t),
        M = (0, R.Ay)(t),
        F = (0, b.os)("ChannelContextMenuNormal");
    return (0, i.jsxs)(l.W1t, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: a.Z_,
        "aria-label": G.intl.string(G.t.Xm41aV),
        onSelect: r,
        children: [
            (0, i.jsx)(l.rXV, { children: s }, "mark-as-read-or-favorite"),
            (0, i.jsx)(l.rXV, { children: c }),
            (0, i.jsxs)(l.rXV, { children: [y, f, _, d] }, "channel-actions"),
            (0, i.jsxs)(l.rXV, { children: [N, F ? M : V] }, "notifications"),
            (0, i.jsxs)(l.rXV, { children: [L, U, D, j] }, "admin-actions"),
            (0, i.jsx)(l.rXV, { children: w }),
            (0, i.jsx)(l.rXV, { children: A }),
            (0, i.jsx)(l.rXV, { children: X }, "developer-actions"),
        ],
    });
}
let U = (0, s.A)(
    (0, r.A)(
        function (n) {
            return (0, c.DZ)() ? (0, i.jsx)(L, { ...n }) : (0, i.jsx)(y, { ...n });
        },
        { object: N.ZSU.CONTEXT_MENU },
    ),
    [d.A.CONTEXT_MENU, d.A.CHANNEL_LIST_TEXT_CHANNEL_MENU],
);
