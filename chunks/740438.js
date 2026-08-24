l.d(e, { default: () => I });
var i = l(477900);
l(582128);
var t = l(980707),
    a = l(477782),
    r = l(442433),
    s = l(358367),
    d = l(793574),
    c = l(50268),
    o = l(93055),
    h = l(499373),
    u = l(970853),
    A = l(250737),
    g = l(769591),
    x = l(17928),
    j = l(914430),
    b = l(924985),
    C = l(734057),
    p = l(652215),
    m = l(375708),
    v = l(477190),
    X = l(307623),
    f = l(317910),
    _ = l(868548),
    y = l(995102),
    G = l(288104),
    N = l(661504),
    k = l(969128),
    E = l(192308),
    M = l(16236);
function D(n) {
    let e,
        { channel: s, onSelect: d } = n,
        o = (0, _.A)(s),
        g = (0, A.A)(s),
        x =
            null == (e = (0, u.A)(s))
                ? null
                : (0, i.jsx)(a.Dr, {
                      id: "add-channel-to-category",
                      trailingIndicator: { type: "icon", icon: h.T },
                      label: e.label,
                      action: e.perform,
                  }),
        j = (0, i.jsx)(a.Dr, {
            id: "delete-channel",
            label: m.intl.string(m.t.Jg0R7Q),
            subtext: m.intl.string(m.t["+mNKM9"]),
            color: "danger",
            action: () =>
                (0, E.openModalLazy)(async () => {
                    let { default: n } = await l.e("992085").then(l.bind(l, 703476));
                    return (e) =>
                        (0, i.jsx)(n, {
                            ...e,
                            onConfirm: () => {
                                e.onClose(), (0, M.fv)(s.id);
                            },
                            channel: s,
                        });
                }),
        }),
        b = (0, c.A)({ id: s.id, label: m.intl.string(m.t["2visC6"]) });
    return (0, i.jsxs)(t.W, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: r.Z_,
        "aria-label": m.intl.string(m.t.Xm41aV),
        onSelect: d,
        children: [
            (0, i.jsx)(a.rX, { children: o }),
            (0, i.jsxs)(a.rX, { children: [x, g] }),
            (0, i.jsx)(a.rX, { children: j }),
            (0, i.jsx)(a.rX, { children: b }),
        ],
    });
}
function T(n) {
    let e,
        { channel: l, guild: s, onSelect: d } = n,
        o = (0, _.A)(l),
        h = (0, y.A)(l),
        u = (0, G.A)(l),
        E =
            ((e = (0, x.bG)([b.A], () => b.A.isCollapsed(l.id), [l.id])),
            (0, i.jsx)(a.sL, {
                id: "collapse-category",
                label: m.intl.string(m.t.SvVRsj),
                action: () => (e ? (0, j.fh)(l.id) : (0, j.Gv)(l.id)),
                checked: e,
            })),
        M = (0, x.bG)([b.A, C.A], () => {
            let n = Object.values(C.A.getMutableBasicGuildChannelsForGuild(l.guild_id)).filter(
                (n) => n.type === p.rbe.GUILD_CATEGORY,
            );
            return 0 === n.length || n.every((n) => b.A.isCollapsed(n.id));
        })
            ? null
            : (0, i.jsx)(a.Dr, {
                  id: "collapse-all-categories",
                  label: m.intl.string(m.t["9dqzUr"]),
                  action: () => (0, j.rZ)(l.guild_id),
              }),
        D = (0, f.A)(l),
        T = (0, A.A)(l),
        I = (0, v.A)(l, s),
        L = (0, X.A)(l),
        O = (0, c.A)({ id: l.id, label: m.intl.string(m.t["2visC6"]) }),
        R = (0, k.A)(l),
        U = (0, g.os)("ChannelCategoryNormalMenu"),
        Z = (0, N.Ay)(l);
    return (0, i.jsxs)(t.W, {
        "data-menu-migrated-auto": !0,
        navId: "channel-context",
        onClose: r.Z_,
        "aria-label": m.intl.string(m.t.Xm41aV),
        onSelect: d,
        children: [
            (0, i.jsx)(a.rX, { children: o }, "mark-as-read"),
            (0, i.jsxs)(a.rX, { children: [R, E, M] }, "channel-actions"),
            (0, i.jsxs)(a.rX, { children: [h, U ? Z : u] }, "notifications"),
            (0, i.jsxs)(a.rX, { children: [D, T, I, L] }, "admin-actions"),
            (0, i.jsx)(a.rX, { children: O }, "developer-actions"),
        ],
    });
}
let I = (0, s.A)(
    function (n) {
        return (0, o.DZ)() ? (0, i.jsx)(D, { ...n }) : (0, i.jsx)(T, { ...n });
    },
    [d.A.CONTEXT_MENU, d.A.CHANNEL_CATEGORY_MENU],
);
