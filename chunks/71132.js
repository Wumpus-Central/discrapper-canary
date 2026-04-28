t.d(n, { default: () => R });
var i = t(627968),
    l = t(64700),
    a = t(550079),
    r = t(477782),
    s = t(442433),
    d = t(358367),
    c = t(793574),
    o = t(50268),
    u = t(313281),
    h = t(17928),
    A = t(192308),
    g = t(499373),
    x = t(967198),
    b = t(652215),
    j = t(335993),
    C = t(985018),
    p = t(795144),
    _ = t(769591),
    f = t(914430),
    m = t(924985),
    v = t(734057),
    y = t(477190),
    G = t(307623),
    X = t(317910),
    E = t(848977),
    I = t(995102),
    L = t(288104),
    k = t(661504),
    M = t(969128),
    N = t(422258);
function D(e) {
    let n,
        d,
        c,
        { channel: u, onSelect: _ } = e,
        f = (0, E.A)(u),
        m = (0, p.A)(u),
        v =
            ((n = (0, h.bG)([x.A], () => x.A.getGuildId())),
            (d = u.type === b.rbe.GUILD_CATEGORY),
            (c = l.useCallback(() => {
                (0, A.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        t.e("24092"),
                        t.e("94494"),
                        t.e("36946"),
                        t.e("92639"),
                        t.e("40963"),
                        t.e("66031"),
                        t.e("59839"),
                    ]).then(t.bind(t, 889186));
                    return (n) => (0, i.jsx)(e, { ...n, parentId: u.id, source: "favorites_add_to_category" });
                });
            }, [u.id])),
            __OVERLAY__ || n !== b.YYv || !d
                ? null
                : (0, i.jsx)(r.Dr, {
                      id: "add-channel-to-category",
                      trailingIndicator: { type: "icon", icon: g.T },
                      label: C.intl.string(j.default["1QJmIL"]),
                      action: c,
                  })),
        y = (0, i.jsx)(r.Dr, {
            id: "delete-channel",
            label: C.intl.string(C.t.Jg0R7Q),
            subtext: C.intl.string(C.t["+mNKM9"]),
            color: "danger",
            action: () =>
                (0, A.openModalLazy)(async () => {
                    let { default: e } = await t.e("52210").then(t.bind(t, 862377));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            onConfirm: () => {
                                n.onClose(), (0, N.fv)(u.id);
                            },
                            channel: u,
                        });
                }),
        }),
        G = (0, o.A)({ id: u.id, label: C.intl.string(C.t["2visC6"]) });
    return (0, i.jsxs)(a.W, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: s.Z_,
        "aria-label": C.intl.string(C.t.Xm41aV),
        onSelect: _,
        children: [
            (0, i.jsx)(r.rX, { children: f }),
            (0, i.jsxs)(r.rX, { children: [v, m] }),
            (0, i.jsx)(r.rX, { children: y }),
            (0, i.jsx)(r.rX, { children: G }),
        ],
    });
}
function O(e) {
    let n,
        { channel: t, guild: l, onSelect: d } = e,
        c = (0, E.A)(t),
        u = (0, I.A)(t),
        A = (0, L.A)(t),
        g =
            ((n = (0, h.bG)([m.A], () => m.A.isCollapsed(t.id), [t.id])),
            (0, i.jsx)(r.sL, {
                id: "collapse-category",
                label: C.intl.string(C.t.SvVRsj),
                action: () => (n ? (0, f.fh)(t.id) : (0, f.Gv)(t.id)),
                checked: n,
            })),
        x = (0, h.bG)([m.A, v.A], () => {
            let e = Object.values(v.A.getMutableBasicGuildChannelsForGuild(t.guild_id)).filter(
                (e) => e.type === b.rbe.GUILD_CATEGORY,
            );
            return 0 === e.length || e.every((e) => m.A.isCollapsed(e.id));
        })
            ? null
            : (0, i.jsx)(r.Dr, {
                  id: "collapse-all-categories",
                  label: C.intl.string(C.t["9dqzUr"]),
                  action: () => (0, f.rZ)(t.guild_id),
              }),
        j = (0, X.A)(t),
        N = (0, p.A)(t),
        D = (0, y.A)(t, l),
        O = (0, G.A)(t),
        R = (0, o.A)({ id: t.id, label: C.intl.string(C.t["2visC6"]) }),
        T = (0, M.A)(t),
        Y = (0, _.os)("ChannelCategoryNormalMenu"),
        U = (0, k.Ay)(t);
    return (0, i.jsxs)(a.W, {
        "data-menu-migrated-auto": !0,
        navId: "channel-context",
        onClose: s.Z_,
        "aria-label": C.intl.string(C.t.Xm41aV),
        onSelect: d,
        children: [
            (0, i.jsx)(r.rX, { children: c }, "mark-as-read"),
            (0, i.jsxs)(r.rX, { children: [T, g, x] }, "channel-actions"),
            (0, i.jsxs)(r.rX, { children: [u, Y ? U : A] }, "notifications"),
            (0, i.jsxs)(r.rX, { children: [j, N, D, O] }, "admin-actions"),
            (0, i.jsx)(r.rX, { children: R }, "developer-actions"),
        ],
    });
}
let R = (0, d.A)(
    function (e) {
        return (0, u.DZ)() ? (0, i.jsx)(D, { ...e }) : (0, i.jsx)(O, { ...e });
    },
    [c.A.CONTEXT_MENU, c.A.CHANNEL_CATEGORY_MENU],
);
