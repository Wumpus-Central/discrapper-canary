e.d(t, { default: () => N });
var i = e(627968);
e(64700);
var r = e(397927),
    l = e(442433),
    a = e(358367),
    d = e(793574),
    s = e(50268),
    c = e(515610),
    o = e(849867),
    A = e(795144),
    u = e(769591),
    g = e(134725),
    h = e(23724),
    _ = e(477190),
    p = e(307623),
    b = e(317910),
    y = e(848977),
    C = e(995102),
    f = e(288104),
    x = e(661504),
    j = e(969128),
    v = e(90509),
    E = e(985018);
function G(n) {
    let { channel: t, onSelect: e } = n,
        a = (0, y.A)(t),
        d = (0, A.A)(t),
        c = (0, o.A)(t),
        u = (0, v.A)(t),
        g = (0, s.A)({ id: t.id, label: E.intl.string(E.t["2visC6"]) });
    return (0, i.jsxs)(r.W1t, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: l.Z_,
        "aria-label": E.intl.string(E.t.Xm41aV),
        onSelect: e,
        children: [
            (0, i.jsx)(r.rXV, { children: a }),
            (0, i.jsxs)(r.rXV, { children: [c, d] }),
            (0, i.jsx)(r.rXV, { children: u }),
            (0, i.jsx)(r.rXV, { children: g }),
        ],
    });
}
function O(n) {
    let { channel: t, guild: e, onSelect: a } = n,
        d = (0, y.A)(t),
        c = (0, C.A)(t),
        o = (0, f.A)(t),
        v = (0, h.A)(t),
        G = (0, g.A)(t),
        O = (0, b.A)(t),
        N = (0, A.A)(t),
        T = (0, _.A)(t, e),
        m = (0, p.A)(t),
        M = (0, s.A)({ id: t.id, label: E.intl.string(E.t["2visC6"]) }),
        I = (0, j.A)(t),
        U = (0, u.os)("ChannelCategoryNormalMenu"),
        L = (0, x.Ay)(t);
    return (0, i.jsxs)(r.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "channel-context",
        onClose: l.Z_,
        "aria-label": E.intl.string(E.t.Xm41aV),
        onSelect: a,
        children: [
            (0, i.jsx)(r.rXV, { children: d }, "mark-as-read"),
            (0, i.jsxs)(r.rXV, { children: [I, v, G] }, "channel-actions"),
            (0, i.jsxs)(r.rXV, { children: [c, U ? L : o] }, "notifications"),
            (0, i.jsxs)(r.rXV, { children: [O, N, T, m] }, "admin-actions"),
            (0, i.jsx)(r.rXV, { children: M }, "developer-actions"),
        ],
    });
}
let N = (0, a.A)(
    function (n) {
        return (0, c.A)() ? (0, i.jsx)(G, { ...n }) : (0, i.jsx)(O, { ...n });
    },
    [d.A.CONTEXT_MENU, d.A.CHANNEL_CATEGORY_MENU],
);
