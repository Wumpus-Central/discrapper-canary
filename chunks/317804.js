r.d(n, { default: () => P });
var i = r(477900);
r(582128);
var l = r(980707),
    s = r(477782),
    t = r(442433),
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
function T(e) {
    return e.type !== g.rbe.GUILD_APP
        ? null
        : (0, i.jsx)(s.Dr, { id: "open-chat", label: _.intl.string(_.t.ZXxLQg), action: () => (0, C.A)(e) });
}
var b = r(17928),
    m = r(66834),
    v = r(824492),
    N = r(533957),
    E = r(886393),
    f = r(477190),
    k = r(307623),
    L = r(317910),
    M = r(475777),
    I = r(868548),
    S = r(173522),
    U = r(995102),
    Z = r(288104),
    w = r(969128),
    D = r(146337),
    H = r(660273),
    O = r(804006),
    y = r(704543),
    V = r(57907);
function F(e) {
    let { channel: n, onSelect: r } = e,
        a = (0, I.A)(n),
        c = (0, E.A)(n),
        h = T(n),
        o = (0, j.C)(n),
        p = (0, u.A)(n),
        C = (0, X.A)(n),
        g = (0, S.A)(n),
        b = (0, U.A)(n),
        m = (0, V.A)(n),
        v = n.isThread() ? m : b,
        N = (0, H.A)(n, "Context Menu"),
        f = (0, O.A)(n, "Context Menu"),
        k = (0, A.A)({ id: n.id, label: _.intl.string(_.t.gFHI3k) }),
        L = (0, d.A)(n),
        M = (0, D.A)(n, D._),
        w = (0, x.A)(n, "ChannelListTextChannelContextMenu"),
        y = (0, Z.A)(n);
    return (0, i.jsxs)(l.W, {
        "data-menu-migrated-auto": !0,
        navId: "channel-context",
        onClose: t.Z_,
        "aria-label": _.intl.string(_.t.Xm41aV),
        onSelect: r,
        children: [
            (0, i.jsx)(s.rX, { children: w.remix }),
            (0, i.jsx)(s.rX, { children: a }),
            (0, i.jsxs)(s.rX, { children: [w.edit, w.settings, w.showOverlay] }),
            (0, i.jsxs)(s.rX, { children: [C, g, p] }),
            (0, i.jsxs)(s.rX, { children: [n.isThread() ? N : null, c] }),
            (0, i.jsx)(s.rX, { children: h }),
            (0, i.jsxs)(s.rX, { children: [v, y] }),
            (0, i.jsx)(s.rX, { children: L }),
            (0, i.jsx)(s.rX, { children: M }),
            (0, i.jsxs)(s.rX, { children: [n.isThread() ? f : null, o] }),
            (0, i.jsx)(s.rX, { children: k }),
        ],
    });
}
function G(e) {
    let n,
        { channel: r, guild: a, onSelect: c } = e,
        h = (0, I.A)(r),
        o = (0, E.A)(r),
        X = T(r),
        u = (0, j.z)(r),
        C = (0, j.C)(r),
        g = (0, y.A)(r),
        H = (0, w.A)(r),
        O =
            ((n = (0, b.bG)([v.A], () => v.A.didAgree(r.id))),
            r.isSpoilerChannel() && n
                ? (0, i.jsx)(s.Dr, {
                      id: "clear-spoiler-agree",
                      label: _.intl.string(_.t.ix2UVZ),
                      action: () => m.A.clearSpoilerAgree(r.id),
                  })
                : null),
        V = (0, U.A)(r),
        F = (0, L.A)(r),
        G = (0, M.A)(r, a),
        P = (0, N.A)(r, a),
        W = (0, f.A)(r, a),
        z = (0, k.A)(r),
        Q = (0, A.A)({ id: r.id, label: _.intl.string(_.t.gFHI3k) }),
        q = (0, S.A)(r),
        B = (0, d.A)(r),
        J = (0, D.A)(r, D._),
        K = (0, p.A)(r),
        R = (0, x.A)(r, "ChannelListTextChannelContextMenu"),
        Y = (0, Z.A)(r);
    return (0, i.jsxs)(l.W, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: t.Z_,
        "aria-label": _.intl.string(_.t.Xm41aV),
        onSelect: c,
        children: [
            (0, i.jsx)(s.rX, { children: R.remix }, "conjure-remix"),
            (0, i.jsx)(s.rX, { children: h }, "mark-as-read-or-favorite"),
            (0, i.jsx)(s.rX, { children: u }),
            (0, i.jsxs)(s.rX, { children: [R.edit, R.settings, R.showOverlay] }, "conjure"),
            (0, i.jsxs)(s.rX, { children: [G, K, g, H, o] }, "channel-actions"),
            (0, i.jsx)(s.rX, { children: X }, "app-channel-actions"),
            (0, i.jsxs)(s.rX, { children: [V, Y] }, "notifications"),
            (0, i.jsx)(s.rX, { children: O }, "spoiler"),
            (0, i.jsx)(s.rX, { children: q }),
            (0, i.jsxs)(s.rX, { children: [F, P, W, z] }, "admin-actions"),
            (0, i.jsx)(s.rX, { children: B }),
            (0, i.jsx)(s.rX, { children: J }, "report-app"),
            (0, i.jsx)(s.rX, { children: C }),
            (0, i.jsx)(s.rX, { children: Q }, "developer-actions"),
        ],
    });
}
let P = (0, c.A)(
    (0, a.A)(
        function (e) {
            return (0, o.DZ)() ? (0, i.jsx)(F, { ...e }) : (0, i.jsx)(G, { ...e });
        },
        { object: g.ZSU.CONTEXT_MENU },
    ),
    [h.A.CONTEXT_MENU, h.A.CHANNEL_LIST_TEXT_CHANNEL_MENU],
);
