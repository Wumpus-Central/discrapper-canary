r.d(n, { default: () => w });
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
    h = r(281980),
    x = r(438653),
    j = r(6351),
    X = r(229327),
    u = r(250737),
    C = r(769591),
    g = r(17928),
    p = r(66834),
    N = r(824492),
    _ = r(375708),
    b = r(533957),
    m = r(886393),
    E = r(477190),
    T = r(307623),
    k = r(317910),
    v = r(475777),
    f = r(848977),
    S = r(995102),
    I = r(288104),
    M = r(661504),
    U = r(969128),
    Z = r(643111),
    H = r(57907),
    F = r(652215);
function L(e) {
    let { channel: n, onSelect: r } = e,
        a = (0, f.A)(n),
        d = (0, m.A)(n),
        A = (0, x.C)(n),
        h = (0, u.A)(n),
        g = (0, j.A)(n),
        p = (0, X.A)(n),
        N = (0, S.A)(n),
        b = (0, H.A)(n),
        E = n.isThread() ? b : N,
        T = (0, I.A)(n),
        k = (0, o.A)({ id: n.id, label: _.intl.string(_.t.gFHI3k) }),
        v = (0, c.A)(n),
        U = (0, M.Ay)(n),
        Z = (0, C.os)("ChannelContextFavoritesMenu");
    return (0, i.jsxs)(l.W, {
        "data-menu-migrated-auto": !0,
        navId: "channel-context",
        onClose: t.Z_,
        "aria-label": _.intl.string(_.t.Xm41aV),
        onSelect: r,
        children: [
            (0, i.jsx)(s.rX, { children: a }),
            (0, i.jsxs)(s.rX, { children: [g, p, h] }),
            (0, i.jsx)(s.rX, { children: d }),
            (0, i.jsxs)(s.rX, { children: [E, Z ? U : T] }),
            (0, i.jsx)(s.rX, { children: v }),
            (0, i.jsx)(s.rX, { children: A }),
            (0, i.jsx)(s.rX, { children: k }),
        ],
    });
}
function V(e) {
    let n,
        { channel: r, guild: a, onSelect: d } = e,
        A = (0, f.A)(r),
        h = (0, m.A)(r),
        j = (0, x.z)(r),
        X = (0, x.C)(r),
        u = (0, Z.A)(r),
        H = (0, U.A)(r),
        F =
            ((n = (0, g.bG)([N.A], () => N.A.didAgree(r.id))),
            r.isSpoilerChannel() && n
                ? (0, i.jsx)(s.Dr, {
                      id: "clear-spoiler-agree",
                      label: _.intl.string(_.t.ix2UVZ),
                      action: () => p.A.clearSpoilerAgree(r.id),
                  })
                : null),
        L = (0, S.A)(r),
        V = (0, k.A)(r),
        w = (0, v.A)(r, a),
        y = (0, b.A)(r, a),
        D = (0, E.A)(r, a),
        O = (0, T.A)(r),
        W = (0, o.A)({ id: r.id, label: _.intl.string(_.t.gFHI3k) }),
        z = (0, c.A)(r),
        G = (0, I.A)(r),
        q = (0, M.Ay)(r),
        B = (0, C.os)("ChannelContextMenuNormal");
    return (0, i.jsxs)(l.W, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: t.Z_,
        "aria-label": _.intl.string(_.t.Xm41aV),
        onSelect: d,
        children: [
            (0, i.jsx)(s.rX, { children: A }, "mark-as-read-or-favorite"),
            (0, i.jsx)(s.rX, { children: j }),
            (0, i.jsxs)(s.rX, { children: [w, u, H, h] }, "channel-actions"),
            (0, i.jsxs)(s.rX, { children: [L, B ? q : G] }, "notifications"),
            (0, i.jsx)(s.rX, { children: F }, "spoiler"),
            (0, i.jsxs)(s.rX, { children: [V, y, D, O] }, "admin-actions"),
            (0, i.jsx)(s.rX, { children: z }),
            (0, i.jsx)(s.rX, { children: X }),
            (0, i.jsx)(s.rX, { children: W }, "developer-actions"),
        ],
    });
}
let w = (0, d.A)(
    (0, a.A)(
        function (e) {
            return (0, h.DZ)() ? (0, i.jsx)(L, { ...e }) : (0, i.jsx)(V, { ...e });
        },
        { object: F.ZSU.CONTEXT_MENU },
    ),
    [A.A.CONTEXT_MENU, A.A.CHANNEL_LIST_TEXT_CHANNEL_MENU],
);
