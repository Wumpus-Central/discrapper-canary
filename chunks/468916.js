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
    X = n(349807),
    p = n(250737),
    u = n(687340),
    g = n(17928),
    _ = n(66834),
    C = n(824492),
    b = n(375708),
    N = n(533957),
    m = n(886393),
    E = n(477190),
    T = n(307623),
    k = n(317910),
    f = n(475777),
    v = n(868548),
    S = n(995102),
    I = n(288104),
    U = n(969128),
    Z = n(342321),
    H = n(704543),
    L = n(57907),
    M = n(652215);
function V(r) {
    let { channel: e, onSelect: n } = r,
        a = (0, v.A)(e),
        d = (0, m.A)(e),
        A = (0, x.C)(e),
        o = (0, p.A)(e),
        u = (0, j.A)(e),
        g = (0, X.A)(e),
        _ = (0, S.A)(e),
        C = (0, L.A)(e),
        N = e.isThread() ? C : _,
        E = (0, h.A)({ id: e.id, label: b.intl.string(b.t.gFHI3k) }),
        T = (0, c.A)(e),
        k = (0, Z.A)(e, Z._),
        f = (0, I.A)(e);
    return (0, i.jsxs)(l.W, {
        "data-menu-migrated-auto": !0,
        navId: "channel-context",
        onClose: t.Z_,
        "aria-label": b.intl.string(b.t.Xm41aV),
        onSelect: n,
        children: [
            (0, i.jsx)(s.rX, { children: a }),
            (0, i.jsxs)(s.rX, { children: [u, g, o] }),
            (0, i.jsx)(s.rX, { children: d }),
            (0, i.jsxs)(s.rX, { children: [N, f] }),
            (0, i.jsx)(s.rX, { children: T }),
            (0, i.jsx)(s.rX, { children: k }),
            (0, i.jsx)(s.rX, { children: A }),
            (0, i.jsx)(s.rX, { children: E }),
        ],
    });
}
function w(r) {
    let e,
        { channel: n, guild: a, onSelect: d } = r,
        A = (0, v.A)(n),
        o = (0, m.A)(n),
        j = (0, x.z)(n),
        X = (0, x.C)(n),
        p = (0, H.A)(n),
        L = (0, U.A)(n),
        M =
            ((e = (0, g.bG)([C.A], () => C.A.didAgree(n.id))),
            n.isSpoilerChannel() && e
                ? (0, i.jsx)(s.Dr, {
                      id: "clear-spoiler-agree",
                      label: b.intl.string(b.t.ix2UVZ),
                      action: () => _.A.clearSpoilerAgree(n.id),
                  })
                : null),
        V = (0, S.A)(n),
        w = (0, k.A)(n),
        D = (0, f.A)(n, a),
        F = (0, N.A)(n, a),
        O = (0, E.A)(n, a),
        W = (0, T.A)(n),
        z = (0, h.A)({ id: n.id, label: b.intl.string(b.t.gFHI3k) }),
        G = (0, c.A)(n),
        q = (0, Z.A)(n, Z._),
        y = (0, u.A)(n),
        B = (0, I.A)(n);
    return (0, i.jsxs)(l.W, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: t.Z_,
        "aria-label": b.intl.string(b.t.Xm41aV),
        onSelect: d,
        children: [
            (0, i.jsx)(s.rX, { children: A }, "mark-as-read-or-favorite"),
            (0, i.jsx)(s.rX, { children: j }),
            (0, i.jsxs)(s.rX, { children: [D, y, p, L, o] }, "channel-actions"),
            (0, i.jsxs)(s.rX, { children: [V, B] }, "notifications"),
            (0, i.jsx)(s.rX, { children: M }, "spoiler"),
            (0, i.jsxs)(s.rX, { children: [w, F, O, W] }, "admin-actions"),
            (0, i.jsx)(s.rX, { children: G }),
            (0, i.jsx)(s.rX, { children: q }, "report-app"),
            (0, i.jsx)(s.rX, { children: X }),
            (0, i.jsx)(s.rX, { children: z }, "developer-actions"),
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
