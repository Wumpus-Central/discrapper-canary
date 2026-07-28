i.d(n, { default: () => L });
var l = i(627968);
i(64700);
var t = i(980707),
    a = i(477782),
    r = i(442433),
    s = i(358367),
    d = i(793574),
    c = i(50268),
    o = i(281980),
    h = i(323932),
    u = i(250737),
    A = i(769591),
    x = i(17928),
    g = i(914430),
    j = i(924985),
    C = i(734057),
    b = i(652215),
    p = i(375708),
    v = i(477190),
    X = i(307623),
    m = i(317910),
    f = i(848977),
    _ = i(995102),
    G = i(288104),
    y = i(661504),
    N = i(969128),
    k = i(192308),
    E = i(659324);
function M(e) {
    let { channel: n, onSelect: s } = e,
        d = (0, f.A)(n),
        o = (0, u.A)(n),
        A = (0, h.A)(n),
        x = (0, l.jsx)(a.Dr, {
            id: "delete-channel",
            label: p.intl.string(p.t.Jg0R7Q),
            subtext: p.intl.string(p.t["+mNKM9"]),
            color: "danger",
            action: () =>
                (0, k.openModalLazy)(async () => {
                    let { default: e } = await i.e("52210").then(i.bind(i, 862377));
                    return (i) =>
                        (0, l.jsx)(e, {
                            ...i,
                            onConfirm: () => {
                                i.onClose(), (0, E.fv)(n.id);
                            },
                            channel: n,
                        });
                }),
        }),
        g = (0, c.A)({ id: n.id, label: p.intl.string(p.t["2visC6"]) });
    return (0, l.jsxs)(t.W, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: r.Z_,
        "aria-label": p.intl.string(p.t.Xm41aV),
        onSelect: s,
        children: [
            (0, l.jsx)(a.rX, { children: d }),
            (0, l.jsxs)(a.rX, { children: [A, o] }),
            (0, l.jsx)(a.rX, { children: x }),
            (0, l.jsx)(a.rX, { children: g }),
        ],
    });
}
function D(e) {
    let n,
        { channel: i, guild: s, onSelect: d } = e,
        o = (0, f.A)(i),
        h = (0, _.A)(i),
        k = (0, G.A)(i),
        E =
            ((n = (0, x.bG)([j.A], () => j.A.isCollapsed(i.id), [i.id])),
            (0, l.jsx)(a.sL, {
                id: "collapse-category",
                label: p.intl.string(p.t.SvVRsj),
                action: () => (n ? (0, g.fh)(i.id) : (0, g.Gv)(i.id)),
                checked: n,
            })),
        M = (0, x.bG)([j.A, C.A], () => {
            let e = Object.values(C.A.getMutableBasicGuildChannelsForGuild(i.guild_id)).filter(
                (e) => e.type === b.rbe.GUILD_CATEGORY,
            );
            return 0 === e.length || e.every((e) => j.A.isCollapsed(e.id));
        })
            ? null
            : (0, l.jsx)(a.Dr, {
                  id: "collapse-all-categories",
                  label: p.intl.string(p.t["9dqzUr"]),
                  action: () => (0, g.rZ)(i.guild_id),
              }),
        D = (0, m.A)(i),
        L = (0, u.A)(i),
        O = (0, v.A)(i, s),
        R = (0, X.A)(i),
        T = (0, c.A)({ id: i.id, label: p.intl.string(p.t["2visC6"]) }),
        U = (0, N.A)(i),
        Z = (0, A.os)("ChannelCategoryNormalMenu"),
        w = (0, y.Ay)(i);
    return (0, l.jsxs)(t.W, {
        "data-menu-migrated-auto": !0,
        navId: "channel-context",
        onClose: r.Z_,
        "aria-label": p.intl.string(p.t.Xm41aV),
        onSelect: d,
        children: [
            (0, l.jsx)(a.rX, { children: o }, "mark-as-read"),
            (0, l.jsxs)(a.rX, { children: [U, E, M] }, "channel-actions"),
            (0, l.jsxs)(a.rX, { children: [h, Z ? w : k] }, "notifications"),
            (0, l.jsxs)(a.rX, { children: [D, L, O, R] }, "admin-actions"),
            (0, l.jsx)(a.rX, { children: T }, "developer-actions"),
        ],
    });
}
let L = (0, s.A)(
    function (e) {
        return (0, o.DZ)() ? (0, l.jsx)(M, { ...e }) : (0, l.jsx)(D, { ...e });
    },
    [d.A.CONTEXT_MENU, d.A.CHANNEL_CATEGORY_MENU],
);
