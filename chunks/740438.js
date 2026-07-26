t.d(n, { default: () => T });
var i = t(627968),
    l = t(64700),
    a = t(980707),
    r = t(477782),
    s = t(442433),
    d = t(358367),
    c = t(793574),
    o = t(50268),
    u = t(281980),
    h = t(17928),
    A = t(192308),
    g = t(499373),
    x = t(967198),
    b = t(5180),
    j = t(652215),
    C = t(335993),
    p = t(375708),
    _ = t(250737),
    f = t(769591),
    m = t(914430),
    y = t(924985),
    v = t(734057),
    G = t(477190),
    X = t(307623),
    E = t(317910),
    I = t(848977),
    L = t(995102),
    k = t(288104),
    M = t(661504),
    N = t(969128),
    D = t(659324);
function O(e) {
    let n,
        d,
        c,
        { channel: u, onSelect: f } = e,
        m = (0, I.A)(u),
        y = (0, _.A)(u),
        v =
            ((n = (0, h.bG)([x.A], () => x.A.getGuildId())),
            (d = u.type === j.rbe.GUILD_CATEGORY),
            (c = l.useCallback(() => {
                (0, A.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        t.e("73883"),
                        t.e("73216"),
                        t.e("69977"),
                        t.e("74390"),
                        t.e("36946"),
                        t.e("92639"),
                        t.e("90480"),
                        t.e("40963"),
                        t.e("56169"),
                        t.e("30521"),
                    ]).then(t.bind(t, 523200));
                    return (n) => (0, i.jsx)(e, { ...n, parentId: u.id, source: "favorites_add_to_category" });
                });
            }, [u.id])),
            !__OVERLAY__ && (0, b.ai)(n) && d
                ? (0, i.jsx)(r.Dr, {
                      id: "add-channel-to-category",
                      trailingIndicator: { type: "icon", icon: g.T },
                      label: p.intl.string(C.default["1QJmIL"]),
                      action: c,
                  })
                : null),
        G = (0, i.jsx)(r.Dr, {
            id: "delete-channel",
            label: p.intl.string(p.t.Jg0R7Q),
            subtext: p.intl.string(p.t["+mNKM9"]),
            color: "danger",
            action: () =>
                (0, A.openModalLazy)(async () => {
                    let { default: e } = await t.e("52210").then(t.bind(t, 862377));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            onConfirm: () => {
                                n.onClose(), (0, D.fv)(u.id);
                            },
                            channel: u,
                        });
                }),
        }),
        X = (0, o.A)({ id: u.id, label: p.intl.string(p.t["2visC6"]) });
    return (0, i.jsxs)(a.W, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: s.Z_,
        "aria-label": p.intl.string(p.t.Xm41aV),
        onSelect: f,
        children: [
            (0, i.jsx)(r.rX, { children: m }),
            (0, i.jsxs)(r.rX, { children: [v, y] }),
            (0, i.jsx)(r.rX, { children: G }),
            (0, i.jsx)(r.rX, { children: X }),
        ],
    });
}
function R(e) {
    let n,
        { channel: t, guild: l, onSelect: d } = e,
        c = (0, I.A)(t),
        u = (0, L.A)(t),
        A = (0, k.A)(t),
        g =
            ((n = (0, h.bG)([y.A], () => y.A.isCollapsed(t.id), [t.id])),
            (0, i.jsx)(r.sL, {
                id: "collapse-category",
                label: p.intl.string(p.t.SvVRsj),
                action: () => (n ? (0, m.fh)(t.id) : (0, m.Gv)(t.id)),
                checked: n,
            })),
        x = (0, h.bG)([y.A, v.A], () => {
            let e = Object.values(v.A.getMutableBasicGuildChannelsForGuild(t.guild_id)).filter(
                (e) => e.type === j.rbe.GUILD_CATEGORY,
            );
            return 0 === e.length || e.every((e) => y.A.isCollapsed(e.id));
        })
            ? null
            : (0, i.jsx)(r.Dr, {
                  id: "collapse-all-categories",
                  label: p.intl.string(p.t["9dqzUr"]),
                  action: () => (0, m.rZ)(t.guild_id),
              }),
        b = (0, E.A)(t),
        C = (0, _.A)(t),
        D = (0, G.A)(t, l),
        O = (0, X.A)(t),
        R = (0, o.A)({ id: t.id, label: p.intl.string(p.t["2visC6"]) }),
        T = (0, N.A)(t),
        U = (0, f.os)("ChannelCategoryNormalMenu"),
        w = (0, M.Ay)(t);
    return (0, i.jsxs)(a.W, {
        "data-menu-migrated-auto": !0,
        navId: "channel-context",
        onClose: s.Z_,
        "aria-label": p.intl.string(p.t.Xm41aV),
        onSelect: d,
        children: [
            (0, i.jsx)(r.rX, { children: c }, "mark-as-read"),
            (0, i.jsxs)(r.rX, { children: [T, g, x] }, "channel-actions"),
            (0, i.jsxs)(r.rX, { children: [u, U ? w : A] }, "notifications"),
            (0, i.jsxs)(r.rX, { children: [b, C, D, O] }, "admin-actions"),
            (0, i.jsx)(r.rX, { children: R }, "developer-actions"),
        ],
    });
}
let T = (0, d.A)(
    function (e) {
        return (0, u.DZ)() ? (0, i.jsx)(O, { ...e }) : (0, i.jsx)(R, { ...e });
    },
    [c.A.CONTEXT_MENU, c.A.CHANNEL_CATEGORY_MENU],
);
