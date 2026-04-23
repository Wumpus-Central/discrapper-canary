n.d(t, { default: () => X });
var l = n(627968);
n(64700);
var r = n(550079),
    i = n(477782),
    a = n(442433),
    u = n(847767),
    s = n(358367),
    o = n(468389),
    d = n(793574),
    c = n(50268),
    E = n(313281),
    _ = n(133238),
    A = n(795144),
    h = n(979807),
    N = n(671470),
    T = n(769591),
    S = n(17928),
    C = n(686956),
    f = n(824492),
    I = n(985018),
    m = n(533957),
    g = n(886393),
    p = n(477190),
    L = n(307623),
    v = n(317910),
    y = n(475777),
    j = n(848977),
    H = n(995102),
    b = n(288104),
    O = n(661504),
    G = n(969128),
    x = n(643111),
    M = n(652215);
function R(e) {
    let { channel: t, onSelect: n } = e,
        u = (0, j.A)(t),
        s = (0, g.A)(t),
        d = (0, _.y)(t),
        E = (0, A.A)(t),
        S = (0, h.A)(t),
        C = (0, N.A)(t),
        f = (0, H.A)(t),
        m = (0, b.A)(t),
        p = (0, c.A)({ id: t.id, label: I.intl.string(I.t.gFHI3k) }),
        L = (0, o.A)(t),
        v = (0, O.Ay)(t),
        y = (0, T.os)("ChannelContextFavoritesMenu");
    return (0, l.jsxs)(r.W, {
        "data-menu-migrated-auto": !0,
        navId: "channel-context",
        onClose: a.Z_,
        "aria-label": I.intl.string(I.t.Xm41aV),
        onSelect: n,
        children: [
            (0, l.jsx)(i.rX, { children: u }),
            (0, l.jsxs)(i.rX, { children: [S, C, E] }),
            (0, l.jsx)(i.rX, { children: s }),
            (0, l.jsxs)(i.rX, { children: [f, y ? v : m] }),
            (0, l.jsx)(i.rX, { children: L }),
            (0, l.jsx)(i.rX, { children: d }),
            (0, l.jsx)(i.rX, { children: p }),
        ],
    });
}
function U(e) {
    let t,
        { channel: n, guild: u, onSelect: s } = e,
        d = (0, j.A)(n),
        E = (0, g.A)(n),
        A = (0, _.m)(n),
        h = (0, _.y)(n),
        N = (0, x.A)(n),
        M = (0, G.A)(n),
        R =
            ((t = (0, S.bG)([f.A], () => f.A.didAgree(n.id))),
            n.isSpoilerChannel() && t
                ? (0, l.jsx)(i.Dr, {
                      id: "clear-spoiler-agree",
                      label: I.intl.string(I.t.ix2UVZ),
                      action: () => C.A.clearSpoilerAgree(n.id),
                  })
                : null),
        U = (0, H.A)(n),
        X = (0, v.A)(n),
        D = (0, y.A)(n, u),
        w = (0, m.A)(n, u),
        P = (0, p.A)(n, u),
        V = (0, L.A)(n),
        B = (0, c.A)({ id: n.id, label: I.intl.string(I.t.gFHI3k) }),
        F = (0, o.A)(n),
        W = (0, b.A)(n),
        k = (0, O.Ay)(n),
        Z = (0, T.os)("ChannelContextMenuNormal");
    return (0, l.jsxs)(r.W, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: a.Z_,
        "aria-label": I.intl.string(I.t.Xm41aV),
        onSelect: s,
        children: [
            (0, l.jsx)(i.rX, { children: d }, "mark-as-read-or-favorite"),
            (0, l.jsx)(i.rX, { children: A }),
            (0, l.jsxs)(i.rX, { children: [D, N, M, E] }, "channel-actions"),
            (0, l.jsxs)(i.rX, { children: [U, Z ? k : W] }, "notifications"),
            (0, l.jsx)(i.rX, { children: R }, "spoiler"),
            (0, l.jsxs)(i.rX, { children: [X, w, P, V] }, "admin-actions"),
            (0, l.jsx)(i.rX, { children: F }),
            (0, l.jsx)(i.rX, { children: h }),
            (0, l.jsx)(i.rX, { children: B }, "developer-actions"),
        ],
    });
}
let X = (0, s.A)(
    (0, u.A)(
        function (e) {
            return (0, E.DZ)() ? (0, l.jsx)(R, { ...e }) : (0, l.jsx)(U, { ...e });
        },
        { object: M.ZSU.CONTEXT_MENU },
    ),
    [d.A.CONTEXT_MENU, d.A.CHANNEL_LIST_TEXT_CHANNEL_MENU],
);
