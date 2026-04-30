r.d(n, { default: () => L });
var i = r(627968);
r(64700);
var l = r(980707),
    s = r(477782),
    t = r(442433),
    a = r(847767),
    d = r(358367),
    c = r(468389),
    A = r(793574),
    o = r(50268),
    h = r(313281),
    x = r(133238),
    j = r(795144),
    X = r(979807),
    u = r(671470),
    C = r(769591),
    g = r(17928),
    p = r(66834),
    m = r(824492),
    N = r(375708),
    _ = r(533957),
    b = r(886393),
    E = r(477190),
    k = r(307623),
    v = r(317910),
    T = r(475777),
    f = r(848977),
    S = r(995102),
    I = r(288104),
    M = r(661504),
    U = r(969128),
    Z = r(643111),
    y = r(652215);
function H(e) {
    let { channel: n, onSelect: r } = e,
        a = (0, f.A)(n),
        d = (0, b.A)(n),
        A = (0, x.y)(n),
        h = (0, j.A)(n),
        g = (0, X.A)(n),
        p = (0, u.A)(n),
        m = (0, S.A)(n),
        _ = (0, I.A)(n),
        E = (0, o.A)({ id: n.id, label: N.intl.string(N.t.gFHI3k) }),
        k = (0, c.A)(n),
        v = (0, M.Ay)(n),
        T = (0, C.os)("ChannelContextFavoritesMenu");
    return (0, i.jsxs)(l.W, {
        "data-menu-migrated-auto": !0,
        navId: "channel-context",
        onClose: t.Z_,
        "aria-label": N.intl.string(N.t.Xm41aV),
        onSelect: r,
        children: [
            (0, i.jsx)(s.rX, { children: a }),
            (0, i.jsxs)(s.rX, { children: [g, p, h] }),
            (0, i.jsx)(s.rX, { children: d }),
            (0, i.jsxs)(s.rX, { children: [m, T ? v : _] }),
            (0, i.jsx)(s.rX, { children: k }),
            (0, i.jsx)(s.rX, { children: A }),
            (0, i.jsx)(s.rX, { children: E }),
        ],
    });
}
function F(e) {
    let n,
        { channel: r, guild: a, onSelect: d } = e,
        A = (0, f.A)(r),
        h = (0, b.A)(r),
        j = (0, x.m)(r),
        X = (0, x.y)(r),
        u = (0, Z.A)(r),
        y = (0, U.A)(r),
        H =
            ((n = (0, g.bG)([m.A], () => m.A.didAgree(r.id))),
            r.isSpoilerChannel() && n
                ? (0, i.jsx)(s.Dr, {
                      id: "clear-spoiler-agree",
                      label: N.intl.string(N.t.ix2UVZ),
                      action: () => p.A.clearSpoilerAgree(r.id),
                  })
                : null),
        F = (0, S.A)(r),
        L = (0, v.A)(r),
        V = (0, T.A)(r, a),
        w = (0, _.A)(r, a),
        D = (0, E.A)(r, a),
        O = (0, k.A)(r),
        W = (0, o.A)({ id: r.id, label: N.intl.string(N.t.gFHI3k) }),
        G = (0, c.A)(r),
        q = (0, I.A)(r),
        z = (0, M.Ay)(r),
        B = (0, C.os)("ChannelContextMenuNormal");
    return (0, i.jsxs)(l.W, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: t.Z_,
        "aria-label": N.intl.string(N.t.Xm41aV),
        onSelect: d,
        children: [
            (0, i.jsx)(s.rX, { children: A }, "mark-as-read-or-favorite"),
            (0, i.jsx)(s.rX, { children: j }),
            (0, i.jsxs)(s.rX, { children: [V, u, y, h] }, "channel-actions"),
            (0, i.jsxs)(s.rX, { children: [F, B ? z : q] }, "notifications"),
            (0, i.jsx)(s.rX, { children: H }, "spoiler"),
            (0, i.jsxs)(s.rX, { children: [L, w, D, O] }, "admin-actions"),
            (0, i.jsx)(s.rX, { children: G }),
            (0, i.jsx)(s.rX, { children: X }),
            (0, i.jsx)(s.rX, { children: W }, "developer-actions"),
        ],
    });
}
let L = (0, d.A)(
    (0, a.A)(
        function (e) {
            return (0, h.DZ)() ? (0, i.jsx)(H, { ...e }) : (0, i.jsx)(F, { ...e });
        },
        { object: y.ZSU.CONTEXT_MENU },
    ),
    [A.A.CONTEXT_MENU, A.A.CHANNEL_LIST_TEXT_CHANNEL_MENU],
);
