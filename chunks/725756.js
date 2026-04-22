e.d(t, { default: () => T });
var i = e(627968);
e(64700);
var r = e(861672),
    l = e(477782),
    a = e(442433),
    d = e(358367),
    s = e(793574),
    c = e(50268),
    o = e(93055),
    A = e(849867),
    u = e(795144),
    g = e(769591),
    _ = e(134725),
    h = e(23724),
    b = e(477190),
    y = e(307623),
    C = e(317910),
    f = e(848977),
    x = e(995102),
    p = e(288104),
    j = e(661504),
    v = e(969128),
    E = e(90509),
    G = e(985018);
function N(n) {
    let { channel: t, onSelect: e } = n,
        d = (0, f.A)(t),
        s = (0, u.A)(t),
        o = (0, A.A)(t),
        g = (0, E.A)(t),
        _ = (0, c.A)({ id: t.id, label: G.intl.string(G.t["2visC6"]) });
    return (0, i.jsxs)(r.W, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: a.Z_,
        "aria-label": G.intl.string(G.t.Xm41aV),
        onSelect: e,
        children: [
            (0, i.jsx)(l.rX, { children: d }),
            (0, i.jsxs)(l.rX, { children: [o, s] }),
            (0, i.jsx)(l.rX, { children: g }),
            (0, i.jsx)(l.rX, { children: _ }),
        ],
    });
}
function O(n) {
    let { channel: t, guild: e, onSelect: d } = n,
        s = (0, f.A)(t),
        o = (0, x.A)(t),
        A = (0, p.A)(t),
        E = (0, h.A)(t),
        N = (0, _.A)(t),
        O = (0, C.A)(t),
        T = (0, u.A)(t),
        L = (0, b.A)(t, e),
        M = (0, y.A)(t),
        m = (0, c.A)({ id: t.id, label: G.intl.string(G.t["2visC6"]) }),
        I = (0, v.A)(t),
        U = (0, g.os)("ChannelCategoryNormalMenu"),
        D = (0, j.Ay)(t);
    return (0, i.jsxs)(r.W, {
        "data-menu-migrated-auto": !0,
        navId: "channel-context",
        onClose: a.Z_,
        "aria-label": G.intl.string(G.t.Xm41aV),
        onSelect: d,
        children: [
            (0, i.jsx)(l.rX, { children: s }, "mark-as-read"),
            (0, i.jsxs)(l.rX, { children: [I, E, N] }, "channel-actions"),
            (0, i.jsxs)(l.rX, { children: [o, U ? D : A] }, "notifications"),
            (0, i.jsxs)(l.rX, { children: [O, T, L, M] }, "admin-actions"),
            (0, i.jsx)(l.rX, { children: m }, "developer-actions"),
        ],
    });
}
let T = (0, d.A)(
    function (n) {
        return (0, o.DZ)() ? (0, i.jsx)(N, { ...n }) : (0, i.jsx)(O, { ...n });
    },
    [s.A.CONTEXT_MENU, s.A.CHANNEL_CATEGORY_MENU],
);
