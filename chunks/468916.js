n.d(e, { default: () => D });
var i = n(477900);
n(582128);
var l = n(980707),
    s = n(477782),
    t = n(442433),
    a = n(847767),
    d = n(358367),
    c = n(468389),
    A = n(793574),
    h = n(50268),
    o = n(93055),
    x = n(438653),
    j = n(6351),
    X = n(250737),
    p = n(687340),
    u = n(17928),
    g = n(66834),
    _ = n(824492),
    C = n(375708),
    b = n(533957),
    N = n(886393),
    m = n(477190),
    E = n(307623),
    T = n(317910),
    k = n(475777),
    f = n(868548),
    v = n(173522),
    S = n(995102),
    I = n(288104),
    U = n(969128),
    Z = n(342321),
    H = n(704543),
    L = n(57907),
    M = n(652215);
function V(r) {
    let { channel: e, onSelect: n } = r,
        a = (0, f.A)(e),
        d = (0, N.A)(e),
        A = (0, x.C)(e),
        o = (0, X.A)(e),
        p = (0, j.A)(e),
        u = (0, v.A)(e),
        g = (0, S.A)(e),
        _ = (0, L.A)(e),
        b = e.isThread() ? _ : g,
        m = (0, h.A)({ id: e.id, label: C.intl.string(C.t.gFHI3k) }),
        E = (0, c.A)(e),
        T = (0, Z.A)(e, Z._),
        k = (0, I.A)(e);
    return (0, i.jsxs)(l.W, {
        "data-menu-migrated-auto": !0,
        navId: "channel-context",
        onClose: t.Z_,
        "aria-label": C.intl.string(C.t.Xm41aV),
        onSelect: n,
        children: [
            (0, i.jsx)(s.rX, { children: a }),
            (0, i.jsxs)(s.rX, { children: [p, u, o] }),
            (0, i.jsx)(s.rX, { children: d }),
            (0, i.jsxs)(s.rX, { children: [b, k] }),
            (0, i.jsx)(s.rX, { children: E }),
            (0, i.jsx)(s.rX, { children: T }),
            (0, i.jsx)(s.rX, { children: A }),
            (0, i.jsx)(s.rX, { children: m }),
        ],
    });
}
function w(r) {
    let e,
        { channel: n, guild: a, onSelect: d } = r,
        A = (0, f.A)(n),
        o = (0, N.A)(n),
        j = (0, x.z)(n),
        X = (0, x.C)(n),
        L = (0, H.A)(n),
        M = (0, U.A)(n),
        V =
            ((e = (0, u.bG)([_.A], () => _.A.didAgree(n.id))),
            n.isSpoilerChannel() && e
                ? (0, i.jsx)(s.Dr, {
                      id: "clear-spoiler-agree",
                      label: C.intl.string(C.t.ix2UVZ),
                      action: () => g.A.clearSpoilerAgree(n.id),
                  })
                : null),
        w = (0, S.A)(n),
        D = (0, T.A)(n),
        F = (0, k.A)(n, a),
        O = (0, b.A)(n, a),
        W = (0, m.A)(n, a),
        z = (0, E.A)(n),
        G = (0, h.A)({ id: n.id, label: C.intl.string(C.t.gFHI3k) }),
        q = (0, v.A)(n),
        y = (0, c.A)(n),
        B = (0, Z.A)(n, Z._),
        J = (0, p.A)(n),
        K = (0, I.A)(n);
    return (0, i.jsxs)(l.W, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: t.Z_,
        "aria-label": C.intl.string(C.t.Xm41aV),
        onSelect: d,
        children: [
            (0, i.jsx)(s.rX, { children: A }, "mark-as-read-or-favorite"),
            (0, i.jsx)(s.rX, { children: j }),
            (0, i.jsxs)(s.rX, { children: [F, J, L, M, o] }, "channel-actions"),
            (0, i.jsxs)(s.rX, { children: [w, K] }, "notifications"),
            (0, i.jsx)(s.rX, { children: V }, "spoiler"),
            (0, i.jsx)(s.rX, { children: q }),
            (0, i.jsxs)(s.rX, { children: [D, O, W, z] }, "admin-actions"),
            (0, i.jsx)(s.rX, { children: y }),
            (0, i.jsx)(s.rX, { children: B }, "report-app"),
            (0, i.jsx)(s.rX, { children: X }),
            (0, i.jsx)(s.rX, { children: G }, "developer-actions"),
        ],
    });
}
let D = (0, d.A)(
    (0, a.A)(
        function (r) {
            return (0, o.DZ)() ? (0, i.jsx)(V, { ...r }) : (0, i.jsx)(w, { ...r });
        },
        { object: M.ZSU.CONTEXT_MENU },
    ),
    [A.A.CONTEXT_MENU, A.A.CHANNEL_LIST_TEXT_CHANNEL_MENU],
);
