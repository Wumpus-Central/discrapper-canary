e.d(t, { default: () => O });
var i = e(627968);
e(64700);
var r = e(397927),
    l = e(442433),
    a = e(358367),
    d = e(793574),
    s = e(50268),
    c = e(515610),
    A = e(849867),
    o = e(795144),
    u = e(769591),
    g = e(134725),
    h = e(23724),
    _ = e(477190),
    p = e(307623),
    b = e(317910),
    y = e(848977),
    C = e(995102),
    f = e(288104),
    j = e(661504),
    v = e(969128),
    x = e(90509),
    E = e(985018);
function G(n) {
    let { channel: t, onSelect: e } = n,
        a = (0, y.A)(t),
        d = (0, C.Ay)(t),
        c = (0, f.A)(t),
        _ = (0, h.A)(t),
        p = (0, g.A)(t),
        b = (0, o.A)(t),
        v = (0, A.A)(t),
        G = (0, x.A)(t),
        N = (0, s.A)({ id: t.id, label: E.intl.string(E.t["2visC6"]) }),
        O = (0, u.os)("ChannelCategoryFavoritesMenu"),
        T = (0, j.Ay)(t);
    return (0, i.jsxs)(r.W1t, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: l.Z_,
        "aria-label": E.intl.string(E.t.Xm41aV),
        onSelect: e,
        children: [
            (0, i.jsxs)(r.rXV, { children: [a, v, b] }),
            (0, i.jsxs)(r.rXV, { children: [d, O ? T : c] }),
            (0, i.jsxs)(r.rXV, { children: [_, p] }),
            (0, i.jsx)(r.rXV, { children: G }),
            (0, i.jsx)(r.rXV, { children: N }),
        ],
    });
}
function N(n) {
    let { channel: t, guild: e, onSelect: a } = n,
        d = (0, y.A)(t),
        c = (0, C.Ay)(t),
        A = (0, f.A)(t),
        x = (0, h.A)(t),
        G = (0, g.A)(t),
        N = (0, b.A)(t),
        O = (0, o.A)(t),
        T = (0, _.A)(t, e),
        M = (0, p.A)(t),
        m = (0, s.A)({ id: t.id, label: E.intl.string(E.t["2visC6"]) }),
        U = (0, v.A)(t),
        L = (0, u.os)("ChannelCategoryNormalMenu"),
        D = (0, j.Ay)(t);
    return (0, i.jsxs)(r.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "channel-context",
        onClose: l.Z_,
        "aria-label": E.intl.string(E.t.Xm41aV),
        onSelect: a,
        children: [
            (0, i.jsx)(r.rXV, { children: d }, "mark-as-read"),
            (0, i.jsxs)(r.rXV, { children: [U, x, G] }, "channel-actions"),
            (0, i.jsxs)(r.rXV, { children: [c, L ? D : A] }, "notifications"),
            (0, i.jsxs)(r.rXV, { children: [N, O, T, M] }, "admin-actions"),
            (0, i.jsx)(r.rXV, { children: m }, "developer-actions"),
        ],
    });
}
let O = (0, a.A)(
    function (n) {
        return (0, c.A)() ? (0, i.jsx)(G, { ...n }) : (0, i.jsx)(N, { ...n });
    },
    [d.A.CONTEXT_MENU, d.A.CHANNEL_CATEGORY_MENU],
);
