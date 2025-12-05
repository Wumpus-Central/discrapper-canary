n.d(e, { F: () => g });
var i = n(54381),
    l = n(657707),
    s = n(793030),
    r = n(692547),
    u = n(160913),
    a = n(813732),
    o = n(509613),
    c = n(28682),
    d = n(313789),
    E = n(726985),
    S = n(388032);
let I = (0, o.x1)(d.n.SUBSCRIPTIONS_PANE, {
        render: a.Z,
        buildLayout: () => [],
    }),
    T = (0, o.wf)(d.n.SUBSCRIPTIONS_PANEL, {
        useTitle: () => S.intl.string(S.t.trSpHX),
        buildLayout: () => [I],
    }),
    g = (0, o.m7)(d.n.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => S.intl.string(S.t.trSpHX),
        getLegacySearchKey: () => E.s6.SUBSCRIPTIONS,
        icon: l.XOf,
        trailing: {
            type: c.PU.STRONGLY_DISCOURAGED_CUSTOM,
            useDecoration: () =>
                (0, u.U)()
                    ? (0, i.jsx)(s.Mgn, {
                          size: "xs",
                          color: r.Z.unsafe_rawColors.YELLOW_300,
                      })
                    : null,
        },
        buildLayout: () => [T],
    });
