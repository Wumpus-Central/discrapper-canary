r.d(n, { default: () => P });
var i = r(477900);
r(582128);
var l = r(980707),
    t = r(477782),
    s = r(442433),
    a = r(847767),
    c = r(358367),
    d = r(468389),
    h = r(793574),
    x = r(130332),
    A = r(50268),
    o = r(93055),
    j = r(438653),
    X = r(6351),
    u = r(250737),
    p = r(687340),
    C = r(664699),
    g = r(652215),
    _ = r(105292);
function b(e) {
    return e.type !== g.rbe.GUILD_APP
        ? null
        : (0, i.jsx)(t.Dr, { id: "open-chat", label: _.intl.string(_.t.ZXxLQg), action: () => (0, C.A)(e) });
}
var m = r(17928),
    T = r(66834),
    N = r(824492),
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
function G(e) {
    let { channel: n, onSelect: r } = e,
        a = (0, M.A)(n),
        c = (0, f.A)(n),
        h = b(n),
        o = (0, j.C)(n),
        p = (0, u.A)(n),
        C = (0, X.A)(n),
        g = (0, S.A)(n),
        m = (0, U.A)(n),
        T = (0, F.A)(n),
        N = n.isThread() ? T : m,
        E = (0, V.A)(n, "Context Menu"),
        k = (0, A.A)({ id: n.id, label: _.intl.string(_.t.gFHI3k) }),
        v = (0, d.A)(n),
        L = (0, H.A)(n, H._),
        I = (0, x.A)(n, "ChannelListTextChannelContextMenu"),
        D = (0, Z.A)(n);
    return (0, i.jsxs)(l.W, {
        "data-menu-migrated-auto": !0,
        navId: "channel-context",
        onClose: s.Z_,
        "aria-label": _.intl.string(_.t.Xm41aV),
        onSelect: r,
        children: [
            (0, i.jsx)(t.rX, { children: I.remix }),
            (0, i.jsx)(t.rX, { children: a }),
            (0, i.jsxs)(t.rX, { children: [I.edit, I.settings] }),
            (0, i.jsxs)(t.rX, { children: [C, g, p] }),
            (0, i.jsxs)(t.rX, { children: [n.isThread() ? E : null, c] }),
            (0, i.jsx)(t.rX, { children: h }),
            (0, i.jsxs)(t.rX, { children: [N, D] }),
            (0, i.jsx)(t.rX, { children: v }),
            (0, i.jsx)(t.rX, { children: L }),
            (0, i.jsx)(t.rX, { children: o }),
            (0, i.jsx)(t.rX, { children: k }),
        ],
    });
}
function O(e) {
    let n,
        { channel: r, guild: a, onSelect: c } = e,
        h = (0, M.A)(r),
        o = (0, f.A)(r),
        X = b(r),
        u = (0, j.z)(r),
        C = (0, j.C)(r),
        g = (0, w.A)(r),
        V = (0, D.A)(r),
        F =
            ((n = (0, m.bG)([N.A], () => N.A.didAgree(r.id))),
            r.isSpoilerChannel() && n
                ? (0, i.jsx)(t.Dr, {
                      id: "clear-spoiler-agree",
                      label: _.intl.string(_.t.ix2UVZ),
                      action: () => T.A.clearSpoilerAgree(r.id),
                  })
                : null),
        G = (0, U.A)(r),
        O = (0, L.A)(r),
        P = (0, I.A)(r, a),
        W = (0, E.A)(r, a),
        y = (0, k.A)(r, a),
        z = (0, v.A)(r),
        Q = (0, A.A)({ id: r.id, label: _.intl.string(_.t.gFHI3k) }),
        q = (0, S.A)(r),
        B = (0, d.A)(r),
        J = (0, H.A)(r, H._),
        K = (0, p.A)(r),
        R = (0, x.A)(r, "ChannelListTextChannelContextMenu"),
        Y = (0, Z.A)(r);
    return (0, i.jsxs)(l.W, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: s.Z_,
        "aria-label": _.intl.string(_.t.Xm41aV),
        onSelect: c,
        children: [
            (0, i.jsx)(t.rX, { children: R.remix }, "conjure-remix"),
            (0, i.jsx)(t.rX, { children: h }, "mark-as-read-or-favorite"),
            (0, i.jsx)(t.rX, { children: u }),
            (0, i.jsxs)(t.rX, { children: [R.edit, R.settings] }, "conjure"),
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
        function (e) {
            return (0, o.DZ)() ? (0, i.jsx)(G, { ...e }) : (0, i.jsx)(O, { ...e });
        },
        { object: g.ZSU.CONTEXT_MENU },
    ),
    [h.A.CONTEXT_MENU, h.A.CHANNEL_LIST_TEXT_CHANNEL_MENU],
);
