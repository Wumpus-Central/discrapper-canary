i.d(e, { default: () => M });
var l = i(477900);
i(582128);
var t = i(980707),
    a = i(477782),
    r = i(442433),
    s = i(358367),
    d = i(793574),
    c = i(50268),
    o = i(93055),
    h = i(499373),
    u = i(970853),
    A = i(250737),
    x = i(17928),
    g = i(914430),
    j = i(924985),
    b = i(734057),
    p = i(652215),
    C = i(375708),
    v = i(477190),
    X = i(307623),
    f = i(317910),
    m = i(868548),
    _ = i(995102),
    G = i(288104),
    y = i(969128),
    k = i(192308),
    E = i(16236);
function N(n) {
    let e,
        { channel: s, onSelect: d } = n,
        o = (0, m.A)(s),
        x = (0, A.A)(s),
        g =
            null == (e = (0, u.A)(s))
                ? null
                : (0, l.jsx)(a.Dr, {
                      id: "add-channel-to-category",
                      trailingIndicator: { type: "icon", icon: h.T },
                      label: e.label,
                      action: e.perform,
                  }),
        j = (0, l.jsx)(a.Dr, {
            id: "delete-channel",
            label: C.intl.string(C.t.Jg0R7Q),
            subtext: C.intl.string(C.t["+mNKM9"]),
            color: "danger",
            action: () =>
                (0, k.openModalLazy)(async () => {
                    let { default: n } = await i.e("992085").then(i.bind(i, 703476));
                    return (e) =>
                        (0, l.jsx)(n, {
                            ...e,
                            onConfirm: () => {
                                (e.onClose(), (0, E.fv)(s.id));
                            },
                            channel: s,
                        });
                }),
        }),
        b = (0, c.A)({ id: s.id, label: C.intl.string(C.t["2visC6"]) });
    return (0, l.jsxs)(t.W, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: r.Z_,
        "aria-label": C.intl.string(C.t.Xm41aV),
        onSelect: d,
        children: [
            (0, l.jsx)(a.rX, { children: o }),
            (0, l.jsxs)(a.rX, { children: [g, x] }),
            (0, l.jsx)(a.rX, { children: j }),
            (0, l.jsx)(a.rX, { children: b }),
        ],
    });
}
function D(n) {
    let e,
        { channel: i, guild: s, onSelect: d } = n,
        o = (0, m.A)(i),
        h = (0, _.A)(i),
        u =
            ((e = (0, x.bG)([j.A], () => j.A.isCollapsed(i.id), [i.id])),
            (0, l.jsx)(a.sL, {
                id: "collapse-category",
                label: C.intl.string(C.t.SvVRsj),
                action: () => (e ? (0, g.fh)(i.id) : (0, g.Gv)(i.id)),
                checked: e,
            })),
        k = (0, x.bG)([j.A, b.A], () => {
            let n = Object.values(b.A.getMutableBasicGuildChannelsForGuild(i.guild_id)).filter(
                (n) => n.type === p.rbe.GUILD_CATEGORY,
            );
            return 0 === n.length || n.every((n) => j.A.isCollapsed(n.id));
        })
            ? null
            : (0, l.jsx)(a.Dr, {
                  id: "collapse-all-categories",
                  label: C.intl.string(C.t["9dqzUr"]),
                  action: () => (0, g.rZ)(i.guild_id),
              }),
        E = (0, f.A)(i),
        N = (0, A.A)(i),
        D = (0, v.A)(i, s),
        M = (0, X.A)(i),
        T = (0, c.A)({ id: i.id, label: C.intl.string(C.t["2visC6"]) }),
        I = (0, y.A)(i),
        L = (0, G.A)(i);
    return (0, l.jsxs)(t.W, {
        "data-menu-migrated-auto": !0,
        navId: "channel-context",
        onClose: r.Z_,
        "aria-label": C.intl.string(C.t.Xm41aV),
        onSelect: d,
        children: [
            (0, l.jsx)(a.rX, { children: o }, "mark-as-read"),
            (0, l.jsxs)(a.rX, { children: [I, u, k] }, "channel-actions"),
            (0, l.jsxs)(a.rX, { children: [h, L] }, "notifications"),
            (0, l.jsxs)(a.rX, { children: [E, N, D, M] }, "admin-actions"),
            (0, l.jsx)(a.rX, { children: T }, "developer-actions"),
        ],
    });
}
let M = (0, s.A)(
    function (n) {
        return (0, o.DZ)() ? (0, l.jsx)(N, { ...n }) : (0, l.jsx)(D, { ...n });
    },
    [d.A.CONTEXT_MENU, d.A.CHANNEL_CATEGORY_MENU],
);
