t.d(n, { default: () => j });
var i = t(627968);
t(64700);
var a = t(397927),
    l = t(442433),
    r = t(847767),
    d = t(358367),
    s = t(468389),
    o = t(793574),
    u = t(50268),
    c = t(515610),
    A = t(133238),
    f = t(795144),
    v = t(979807),
    h = t(671470),
    C = t(769591),
    g = t(533957),
    _ = t(886393),
    p = t(477190),
    m = t(307623),
    E = t(317910),
    b = t(475777),
    x = t(848977),
    T = t(995102),
    O = t(288104),
    I = t(661504),
    N = t(969128),
    R = t(652215),
    y = t(985018);
function G(e) {
    let { channel: n, onSelect: t } = e,
        r = (0, x.A)(n),
        d = (0, _.A)(n),
        o = (0, A.m)(n),
        c = (0, A.y)(n),
        g = (0, f.A)(n),
        p = (0, v.A)(n),
        m = (0, h.A)(n),
        b = (0, T.Ay)(n),
        N = (0, O.A)(n),
        R = (0, E.A)(n),
        G = (0, u.A)({ id: n.id, label: y.intl.string(y.t.gFHI3k) }),
        S = (0, s.A)(n),
        j = (0, I.Ay)(n),
        U = (0, C.os)("ChannelContextFavoritesMenu");
    return (0, i.jsxs)(a.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "channel-context",
        onClose: l.Z_,
        "aria-label": y.intl.string(y.t.Xm41aV),
        onSelect: t,
        children: [
            (0, i.jsx)(a.rXV, { children: r }),
            (0, i.jsxs)(a.rXV, { children: [p, m, g, o] }),
            (0, i.jsxs)(a.rXV, { children: [b, U ? j : N] }),
            (0, i.jsx)(a.rXV, { children: R }),
            (0, i.jsx)(a.rXV, { children: S }),
            (0, i.jsx)(a.rXV, { children: c }),
            (0, i.jsx)(a.rXV, { children: d }),
            (0, i.jsx)(a.rXV, { children: G }),
        ],
    });
}
function S(e) {
    let { channel: n, guild: t, onSelect: r } = e,
        d = (0, x.A)(n),
        o = (0, _.A)(n),
        c = (0, A.m)(n),
        f = (0, A.y)(n),
        v = (0, N.A)(n),
        h = (0, T.Ay)(n),
        R = (0, E.A)(n),
        G = (0, b.A)(n, t),
        S = (0, g.A)(n, t),
        j = (0, p.A)(n, t),
        U = (0, m.A)(n),
        X = (0, u.A)({ id: n.id, label: y.intl.string(y.t.gFHI3k) }),
        L = (0, s.A)(n),
        M = (0, O.A)(n),
        F = (0, I.Ay)(n),
        Y = (0, C.os)("ChannelContextMenuNormal");
    return (0, i.jsxs)(a.W1t, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: l.Z_,
        "aria-label": y.intl.string(y.t.Xm41aV),
        onSelect: r,
        children: [
            (0, i.jsxs)(a.rXV, { children: [d, c] }, "mark-as-read-or-favorite"),
            (0, i.jsxs)(a.rXV, { children: [G, v, o] }, "channel-actions"),
            (0, i.jsxs)(a.rXV, { children: [h, Y ? F : M] }, "notifications"),
            (0, i.jsxs)(a.rXV, { children: [R, S, j, U] }, "admin-actions"),
            (0, i.jsx)(a.rXV, { children: L }),
            (0, i.jsx)(a.rXV, { children: f }),
            (0, i.jsx)(a.rXV, { children: X }, "developer-actions"),
        ],
    });
}
let j = (0, d.A)(
    (0, r.A)(
        function (e) {
            return (0, c.A)() ? (0, i.jsx)(G, { ...e }) : (0, i.jsx)(S, { ...e });
        },
        { object: R.ZSU.CONTEXT_MENU },
    ),
    [o.A.CONTEXT_MENU, o.A.CHANNEL_LIST_TEXT_CHANNEL_MENU],
);
