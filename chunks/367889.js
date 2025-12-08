n.d(e, { F: () => g });
var i = n(54381),
    l = n(657707),
    s = n(793030),
    r = n(692547),
    u = n(160913),
    a = n(813732),
    o = n(509613),
    c = n(970013),
    d = n(313789),
    T = n(726985),
    E = n(388032);
let S = (0, o.x1)(d.n.SUBSCRIPTIONS_PANE, {
        render: a.Z,
        buildLayout: () => [],
    }),
    I = (0, o.wf)(d.n.SUBSCRIPTIONS_PANEL, {
        useTitle: () => E.intl.string(E.t.trSpHX),
        buildLayout: () => [S],
    }),
    g = (0, o.m7)(d.n.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => E.intl.string(E.t.trSpHX),
        getLegacySearchKey: () => T.s6.SUBSCRIPTIONS,
        icon: l.XOf,
        trailing: {
            type: c.W.STRONGLY_DISCOURAGED_CUSTOM,
            useCustomDecoration: () =>
                (0, u.U)()
                    ? (0, i.jsx)(s.Mgn, {
                          size: "xs",
                          color: r.Z.unsafe_rawColors.YELLOW_300,
                      })
                    : null,
        },
        buildLayout: () => [I],
    });
