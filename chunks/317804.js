r.d(e, { default: () => P });
var i = r(477900);
r(582128);
var l = r(980707),
    t = r(477782),
    s = r(442433),
    a = r(847767),
    c = r(358367),
    d = r(468389),
    A = r(793574),
    h = r(316768),
    x = r(50268),
    o = r(93055),
    j = r(438653),
    X = r(6351),
    u = r(250737),
    p = r(687340),
    C = r(664699),
    g = r(652215),
    _ = r(105292);
function b(n) {
    return n.type !== g.rbe.GUILD_APP
        ? null
        : (0, i.jsx)(t.Dr, { id: "open-chat", label: _.intl.string(_.t.ZXxLQg), action: () => (0, C.A)(n) });
}
var T = r(17928),
    N = r(66834),
    m = r(824492),
    E = r(533957),
    f = r(886393),
    k = r(477190),
    v = r(307623),
    L = r(317910),
    I = r(475777),
    M = r(868548),
    S = r(173522),
    U = r(995102),
    Z = r(288104),
    D = r(969128),
    H = r(146337),
    V = r(660273),
    w = r(704543),
    F = r(57907);
function G(n) {
    let { channel: e, onSelect: r } = n,
        a = (0, M.A)(e),
        c = (0, f.A)(e),
        A = b(e),
        o = (0, j.C)(e),
        p = (0, u.A)(e),
        C = (0, X.A)(e),
        g = (0, S.A)(e),
        T = (0, U.A)(e),
        N = (0, F.A)(e),
        m = e.isThread() ? N : T,
        E = (0, V.A)(e, "Context Menu"),
        k = (0, x.A)({ id: e.id, label: _.intl.string(_.t.gFHI3k) }),
        v = (0, d.A)(e),
        L = (0, H.A)(e, H._),
        I = (0, h.A)(e, "ChannelListTextChannelContextMenu"),
        D = (0, Z.A)(e);
    return (0, i.jsxs)(l.W, {
        "data-menu-migrated-auto": !0,
        navId: "channel-context",
        onClose: s.Z_,
        "aria-label": _.intl.string(_.t.Xm41aV),
        onSelect: r,
        children: [
            (0, i.jsx)(t.rX, { children: a }),
            (0, i.jsx)(t.rX, { children: I }),
            (0, i.jsxs)(t.rX, { children: [C, g, p] }),
            (0, i.jsxs)(t.rX, { children: [e.isThread() ? E : null, c] }),
            (0, i.jsx)(t.rX, { children: A }),
            (0, i.jsxs)(t.rX, { children: [m, D] }),
            (0, i.jsx)(t.rX, { children: v }),
            (0, i.jsx)(t.rX, { children: L }),
            (0, i.jsx)(t.rX, { children: o }),
            (0, i.jsx)(t.rX, { children: k }),
        ],
    });
}
function O(n) {
    let e,
        { channel: r, guild: a, onSelect: c } = n,
        A = (0, M.A)(r),
        o = (0, f.A)(r),
        X = b(r),
        u = (0, j.z)(r),
        C = (0, j.C)(r),
        g = (0, w.A)(r),
        V = (0, D.A)(r),
        F =
            ((e = (0, T.bG)([m.A], () => m.A.didAgree(r.id))),
            r.isSpoilerChannel() && e
                ? (0, i.jsx)(t.Dr, {
                      id: "clear-spoiler-agree",
                      label: _.intl.string(_.t.ix2UVZ),
                      action: () => N.A.clearSpoilerAgree(r.id),
                  })
                : null),
        G = (0, U.A)(r),
        O = (0, L.A)(r),
        P = (0, I.A)(r, a),
        W = (0, E.A)(r, a),
        y = (0, k.A)(r, a),
        z = (0, v.A)(r),
        Q = (0, x.A)({ id: r.id, label: _.intl.string(_.t.gFHI3k) }),
        q = (0, S.A)(r),
        B = (0, d.A)(r),
        J = (0, H.A)(r, H._),
        K = (0, p.A)(r),
        R = (0, h.A)(r, "ChannelListTextChannelContextMenu"),
        Y = (0, Z.A)(r);
    return (0, i.jsxs)(l.W, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: s.Z_,
        "aria-label": _.intl.string(_.t.Xm41aV),
        onSelect: c,
        children: [
            (0, i.jsx)(t.rX, { children: A }, "mark-as-read-or-favorite"),
            (0, i.jsx)(t.rX, { children: u }),
            (0, i.jsx)(t.rX, { children: R }, "conjure"),
            (0, i.jsxs)(t.rX, { children: [P, K, g, V, o] }, "channel-actions"),
            (0, i.jsx)(t.rX, { children: X }, "app-channel-actions"),
            (0, i.jsxs)(t.rX, { children: [G, Y] }, "notifications"),
            (0, i.jsx)(t.rX, { children: F }, "spoiler"),
            (0, i.jsx)(t.rX, { children: q }),
            (0, i.jsxs)(t.rX, { children: [O, W, y, z] }, "admin-actions"),
            (0, i.jsx)(t.rX, { children: B }),
            (0, i.jsx)(t.rX, { children: J }, "report-app"),
            (0, i.jsx)(t.rX, { children: C }),
            (0, i.jsx)(t.rX, { children: Q }, "developer-actions"),
        ],
    });
}
let P = (0, c.A)(
    (0, a.A)(
        function (n) {
            return (0, o.DZ)() ? (0, i.jsx)(G, { ...n }) : (0, i.jsx)(O, { ...n });
        },
        { object: g.ZSU.CONTEXT_MENU },
    ),
    [A.A.CONTEXT_MENU, A.A.CHANNEL_LIST_TEXT_CHANNEL_MENU],
);
