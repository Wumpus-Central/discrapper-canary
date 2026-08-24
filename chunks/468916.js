r.d(n, { default: () => y });
var i = r(477900);
r(582128);
var l = r(980707),
    s = r(477782),
    t = r(442433),
    a = r(847767),
    d = r(358367),
    c = r(468389),
    A = r(793574),
    o = r(50268),
    h = r(93055),
    x = r(438653),
    j = r(6351),
    X = r(527835),
    u = r(250737),
    C = r(769591),
    g = r(687340),
    p = r(17928),
    N = r(66834),
    _ = r(824492),
    b = r(375708),
    m = r(533957),
    E = r(886393),
    T = r(477190),
    k = r(307623),
    v = r(317910),
    f = r(475777),
    S = r(868548),
    I = r(995102),
    M = r(288104),
    U = r(661504),
    Z = r(969128),
    H = r(704543),
    F = r(57907),
    L = r(652215);
function V(e) {
    let { channel: n, onSelect: r } = e,
        a = (0, S.A)(n),
        d = (0, E.A)(n),
        A = (0, x.C)(n),
        h = (0, u.A)(n),
        g = (0, j.A)(n),
        p = (0, X.A)(n),
        N = (0, I.A)(n),
        _ = (0, F.A)(n),
        m = n.isThread() ? _ : N,
        T = (0, M.A)(n),
        k = (0, o.A)({ id: n.id, label: b.intl.string(b.t.gFHI3k) }),
        v = (0, c.A)(n),
        f = (0, U.Ay)(n),
        Z = (0, C.os)("ChannelContextFavoritesMenu");
    return (0, i.jsxs)(l.W, {
        "data-menu-migrated-auto": !0,
        navId: "channel-context",
        onClose: t.Z_,
        "aria-label": b.intl.string(b.t.Xm41aV),
        onSelect: r,
        children: [
            (0, i.jsx)(s.rX, { children: a }),
            (0, i.jsxs)(s.rX, { children: [g, p, h] }),
            (0, i.jsx)(s.rX, { children: d }),
            (0, i.jsxs)(s.rX, { children: [m, Z ? f : T] }),
            (0, i.jsx)(s.rX, { children: v }),
            (0, i.jsx)(s.rX, { children: A }),
            (0, i.jsx)(s.rX, { children: k }),
        ],
    });
}
function w(e) {
    let n,
        { channel: r, guild: a, onSelect: d } = e,
        A = (0, S.A)(r),
        h = (0, E.A)(r),
        j = (0, x.z)(r),
        X = (0, x.C)(r),
        u = (0, H.A)(r),
        F = (0, Z.A)(r),
        L =
            ((n = (0, p.bG)([_.A], () => _.A.didAgree(r.id))),
            r.isSpoilerChannel() && n
                ? (0, i.jsx)(s.Dr, {
                      id: "clear-spoiler-agree",
                      label: b.intl.string(b.t.ix2UVZ),
                      action: () => N.A.clearSpoilerAgree(r.id),
                  })
                : null),
        V = (0, I.A)(r),
        w = (0, v.A)(r),
        y = (0, f.A)(r, a),
        D = (0, m.A)(r, a),
        O = (0, T.A)(r, a),
        W = (0, k.A)(r),
        z = (0, o.A)({ id: r.id, label: b.intl.string(b.t.gFHI3k) }),
        G = (0, c.A)(r),
        q = (0, g.A)(r),
        B = (0, M.A)(r),
        J = (0, U.Ay)(r),
        K = (0, C.os)("ChannelContextMenuNormal");
    return (0, i.jsxs)(l.W, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: t.Z_,
        "aria-label": b.intl.string(b.t.Xm41aV),
        onSelect: d,
        children: [
            (0, i.jsx)(s.rX, { children: A }, "mark-as-read-or-favorite"),
            (0, i.jsx)(s.rX, { children: j }),
            (0, i.jsxs)(s.rX, { children: [y, q, u, F, h] }, "channel-actions"),
            (0, i.jsxs)(s.rX, { children: [V, K ? J : B] }, "notifications"),
            (0, i.jsx)(s.rX, { children: L }, "spoiler"),
            (0, i.jsxs)(s.rX, { children: [w, D, O, W] }, "admin-actions"),
            (0, i.jsx)(s.rX, { children: G }),
            (0, i.jsx)(s.rX, { children: X }),
            (0, i.jsx)(s.rX, { children: z }, "developer-actions"),
        ],
    });
}
let y = (0, d.A)(
    (0, a.A)(
        function (e) {
            return (0, h.DZ)() ? (0, i.jsx)(V, { ...e }) : (0, i.jsx)(w, { ...e });
        },
        { object: L.ZSU.CONTEXT_MENU },
    ),
    [A.A.CONTEXT_MENU, A.A.CHANNEL_LIST_TEXT_CHANNEL_MENU],
);
