i.d(e, { default: () => T });
var l = i(477900);
i(582128);
var t = i(980707),
    r = i(477782),
    a = i(442433),
    s = i(358367),
    d = i(793574),
    c = i(50268),
    o = i(93055),
    h = i(499373),
    u = i(970853),
    A = i(250737),
    x = i(17928),
    j = i(914430),
    g = i(924985),
    b = i(734057),
    p = i(652215),
    C = i(375708),
    X = i(477190),
    v = i(307623),
    f = i(317910),
    m = i(868548),
    _ = i(173522),
    G = i(995102),
    y = i(288104),
    k = i(969128),
    E = i(192308),
    N = i(16236);
function D(n) {
    let e,
        { channel: s, onSelect: d } = n,
        o = (0, m.A)(s),
        x = (0, _.A)(s),
        j = (0, A.A)(s),
        g =
            null == (e = (0, u.A)(s))
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "add-channel-to-category",
                      trailingIndicator: { type: "icon", icon: h.T },
                      label: e.label,
                      action: e.perform,
                  }),
        b = (0, l.jsx)(r.Dr, {
            id: "delete-channel",
            label: C.intl.string(C.t.Jg0R7Q),
            subtext: C.intl.string(C.t["+mNKM9"]),
            color: "danger",
            action: () =>
                (0, E.openModalLazy)(async () => {
                    let { default: n } = await i.e("992085").then(i.bind(i, 703476));
                    return (e) =>
                        (0, l.jsx)(n, {
                            ...e,
                            onConfirm: () => {
                                (e.onClose(), (0, N.fv)(s.id));
                            },
                            channel: s,
                        });
                }),
        }),
        p = (0, c.A)({ id: s.id, label: C.intl.string(C.t["2visC6"]) });
    return (0, l.jsxs)(t.W, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: a.Z_,
        "aria-label": C.intl.string(C.t.Xm41aV),
        onSelect: d,
        children: [
            (0, l.jsx)(r.rX, { children: o }),
            (0, l.jsxs)(r.rX, { children: [g, j] }),
            (0, l.jsx)(r.rX, { children: x }),
            (0, l.jsx)(r.rX, { children: b }),
            (0, l.jsx)(r.rX, { children: p }),
        ],
    });
}
function M(n) {
    let e,
        { channel: i, guild: s, onSelect: d } = n,
        o = (0, m.A)(i),
        h = (0, G.A)(i),
        u =
            ((e = (0, x.bG)([g.A], () => g.A.isCollapsed(i.id), [i.id])),
            (0, l.jsx)(r.sL, {
                id: "collapse-category",
                label: C.intl.string(C.t.SvVRsj),
                action: () => (e ? (0, j.fh)(i.id) : (0, j.Gv)(i.id)),
                checked: e,
            })),
        E = (0, x.bG)([g.A, b.A], () => {
            let n = Object.values(b.A.getMutableBasicGuildChannelsForGuild(i.guild_id)).filter(
                (n) => n.type === p.rbe.GUILD_CATEGORY,
            );
            return 0 === n.length || n.every((n) => g.A.isCollapsed(n.id));
        })
            ? null
            : (0, l.jsx)(r.Dr, {
                  id: "collapse-all-categories",
                  label: C.intl.string(C.t["9dqzUr"]),
                  action: () => (0, j.rZ)(i.guild_id),
              }),
        N = (0, f.A)(i),
        D = (0, A.A)(i),
        M = (0, X.A)(i, s),
        T = (0, v.A)(i),
        I = (0, c.A)({ id: i.id, label: C.intl.string(C.t["2visC6"]) }),
        L = (0, k.A)(i),
        O = (0, y.A)(i),
        R = (0, _.A)(i);
    return (0, l.jsxs)(t.W, {
        "data-menu-migrated-auto": !0,
        navId: "channel-context",
        onClose: a.Z_,
        "aria-label": C.intl.string(C.t.Xm41aV),
        onSelect: d,
        children: [
            (0, l.jsx)(r.rX, { children: o }, "mark-as-read"),
            (0, l.jsxs)(r.rX, { children: [L, u, E] }, "channel-actions"),
            (0, l.jsxs)(r.rX, { children: [h, O] }, "notifications"),
            (0, l.jsx)(r.rX, { children: R }),
            (0, l.jsxs)(r.rX, { children: [N, D, M, T] }, "admin-actions"),
            (0, l.jsx)(r.rX, { children: I }, "developer-actions"),
        ],
    });
}
let T = (0, s.A)(
    function (n) {
        return (0, o.DZ)() ? (0, l.jsx)(D, { ...n }) : (0, l.jsx)(M, { ...n });
    },
    [d.A.CONTEXT_MENU, d.A.CHANNEL_CATEGORY_MENU],
);
