t.d(e, { default: () => X });
var i = t(627968),
    l = t(64700),
    a = t(550079),
    r = t(477782),
    d = t(442433),
    s = t(358367),
    c = t(793574),
    o = t(50268),
    A = t(313281),
    u = t(17928),
    g = t(192308),
    _ = t(499373),
    h = t(967198),
    b = t(652215),
    y = t(335993),
    C = t(985018),
    x = t(795144),
    p = t(769591),
    f = t(914430),
    j = t(924985),
    E = t(734057),
    G = t(477190),
    v = t(307623),
    N = t(317910),
    O = t(848977),
    T = t(995102),
    L = t(288104),
    M = t(661504),
    m = t(969128),
    I = t(422258);
function U(n) {
    let e,
        s,
        c,
        { channel: A, onSelect: p } = n,
        f = (0, O.A)(A),
        j = (0, x.A)(A),
        E =
            ((e = (0, u.bG)([h.A], () => h.A.getGuildId())),
            (s = A.type === b.rbe.GUILD_CATEGORY),
            (c = l.useCallback(() => {
                (0, g.openModalLazy)(async () => {
                    let { default: n } = await t.e("59839").then(t.bind(t, 889186));
                    return (e) => (0, i.jsx)(n, { ...e, parentId: A.id, source: "favorites_add_to_category" });
                });
            }, [A.id])),
            __OVERLAY__ || e !== b.YYv || !s
                ? null
                : (0, i.jsx)(r.Dr, {
                      id: "add-channel-to-category",
                      trailingIndicator: { type: "icon", icon: _.T },
                      label: C.intl.string(y.default["1QJmIL"]),
                      action: c,
                  })),
        G = (0, i.jsx)(r.Dr, {
            id: "delete-channel",
            label: C.intl.string(C.t.Jg0R7Q),
            subtext: C.intl.string(C.t["+mNKM9"]),
            color: "danger",
            action: () =>
                (0, g.openModalLazy)(async () => {
                    let { default: n } = await t.e("52210").then(t.bind(t, 862377));
                    return (e) =>
                        (0, i.jsx)(n, {
                            ...e,
                            onConfirm: () => {
                                e.onClose(), (0, I.fv)(A.id);
                            },
                            channel: A,
                        });
                }),
        }),
        v = (0, o.A)({ id: A.id, label: C.intl.string(C.t["2visC6"]) });
    return (0, i.jsxs)(a.W, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: d.Z_,
        "aria-label": C.intl.string(C.t.Xm41aV),
        onSelect: p,
        children: [
            (0, i.jsx)(r.rX, { children: f }),
            (0, i.jsxs)(r.rX, { children: [E, j] }),
            (0, i.jsx)(r.rX, { children: G }),
            (0, i.jsx)(r.rX, { children: v }),
        ],
    });
}
function D(n) {
    let e,
        { channel: t, guild: l, onSelect: s } = n,
        c = (0, O.A)(t),
        A = (0, T.A)(t),
        g = (0, L.A)(t),
        _ =
            ((e = (0, u.bG)([j.A], () => j.A.isCollapsed(t.id), [t.id])),
            (0, i.jsx)(r.sL, {
                id: "collapse-category",
                label: C.intl.string(C.t.SvVRsj),
                action: () => (e ? (0, f.fh)(t.id) : (0, f.Gv)(t.id)),
                checked: e,
            })),
        h = (0, u.bG)([j.A, E.A], () => {
            let n = Object.values(E.A.getMutableBasicGuildChannelsForGuild(t.guild_id)).filter(
                (n) => n.type === b.rbe.GUILD_CATEGORY,
            );
            return 0 === n.length || n.every((n) => j.A.isCollapsed(n.id));
        })
            ? null
            : (0, i.jsx)(r.Dr, {
                  id: "collapse-all-categories",
                  label: C.intl.string(C.t["9dqzUr"]),
                  action: () => (0, f.rZ)(t.guild_id),
              }),
        y = (0, N.A)(t),
        I = (0, x.A)(t),
        U = (0, G.A)(t, l),
        D = (0, v.A)(t),
        X = (0, o.A)({ id: t.id, label: C.intl.string(C.t["2visC6"]) }),
        R = (0, m.A)(t),
        Y = (0, p.os)("ChannelCategoryNormalMenu"),
        k = (0, M.Ay)(t);
    return (0, i.jsxs)(a.W, {
        "data-menu-migrated-auto": !0,
        navId: "channel-context",
        onClose: d.Z_,
        "aria-label": C.intl.string(C.t.Xm41aV),
        onSelect: s,
        children: [
            (0, i.jsx)(r.rX, { children: c }, "mark-as-read"),
            (0, i.jsxs)(r.rX, { children: [R, _, h] }, "channel-actions"),
            (0, i.jsxs)(r.rX, { children: [A, Y ? k : g] }, "notifications"),
            (0, i.jsxs)(r.rX, { children: [y, I, U, D] }, "admin-actions"),
            (0, i.jsx)(r.rX, { children: X }, "developer-actions"),
        ],
    });
}
let X = (0, s.A)(
    function (n) {
        return (0, A.DZ)() ? (0, i.jsx)(U, { ...n }) : (0, i.jsx)(D, { ...n });
    },
    [c.A.CONTEXT_MENU, c.A.CHANNEL_CATEGORY_MENU],
);
