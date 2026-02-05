e.d(t, { default: () => N });
var i = e(627968);
e(64700);
var r = e(397927),
    l = e(442433),
    a = e(358367),
    s = e(793574),
    d = e(50268),
    c = e(515610),
    o = e(849867),
    A = e(795144),
    u = e(769591),
    g = e(134725),
    h = e(23724),
    _ = e(477190),
    p = e(307623),
    y = e(317910),
    C = e(848977),
    b = e(995102),
    f = e(288104),
    x = e(661504),
    v = e(969128),
    j = e(90509),
    E = e(985018);
function O(n) {
    let { channel: t, onSelect: e } = n,
        a = (0, C.A)(t),
        s = (0, b.Ay)(t),
        c = (0, f.A)(t),
        _ = (0, h.A)(t),
        p = (0, g.A)(t),
        y = (0, A.A)(t),
        v = (0, o.A)(t),
        O = (0, j.A)(t),
        G = (0, d.A)({ id: t.id, label: E.intl.string(E.t["2visC6"]) }),
        N = (0, u.os)("ChannelCategoryFavoritesMenu"),
        m = (0, x.Ay)(t);
    return (0, i.jsxs)(r.W1t, {
        "data-menu-needs-review": !0,
        navId: "channel-context",
        onClose: l.Z_,
        "aria-label": E.intl.string(E.t.Xm41aV),
        onSelect: e,
        children: [
            (0, i.jsxs)(r.rXV, { children: [a, v, y] }),
            (0, i.jsxs)(r.rXV, { children: [s, N ? m : c] }),
            (0, i.jsxs)(r.rXV, { children: [_, p] }),
            (0, i.jsx)(r.rXV, { children: O }),
            (0, i.jsx)(r.rXV, { children: G }),
        ],
    });
}
function G(n) {
    let { channel: t, guild: e, onSelect: a } = n,
        s = (0, C.A)(t),
        c = (0, b.Ay)(t),
        o = (0, f.A)(t),
        j = (0, h.A)(t),
        O = (0, g.A)(t),
        G = (0, y.A)(t),
        N = (0, A.A)(t),
        m = (0, _.A)(t, e),
        T = (0, p.A)(t),
        M = (0, d.A)({ id: t.id, label: E.intl.string(E.t["2visC6"]) }),
        U = (0, v.A)(t),
        I = (0, u.os)("ChannelCategoryNormalMenu"),
        D = (0, x.Ay)(t);
    return (0, i.jsxs)(r.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "channel-context",
        onClose: l.Z_,
        "aria-label": E.intl.string(E.t.Xm41aV),
        onSelect: a,
        children: [
            (0, i.jsx)(r.rXV, { children: s }, "mark-as-read"),
            (0, i.jsxs)(r.rXV, { children: [U, j, O] }, "channel-actions"),
            (0, i.jsxs)(r.rXV, { children: [c, I ? D : o] }, "notifications"),
            (0, i.jsxs)(r.rXV, { children: [G, N, m, T] }, "admin-actions"),
            (0, i.jsx)(r.rXV, { children: M }, "developer-actions"),
        ],
    });
}
let N = (0, a.A)(
    function (n) {
        return (0, c.A)() ? (0, i.jsx)(O, { ...n }) : (0, i.jsx)(G, { ...n });
    },
    [s.A.CONTEXT_MENU, s.A.CHANNEL_CATEGORY_MENU],
);
