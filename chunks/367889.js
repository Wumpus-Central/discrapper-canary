n.d(e, { F: () => g });
var i = n(54381),
    r = n(657707),
    l = n(793030),
    u = n(692547),
    s = n(160913),
    a = n(813732),
    o = n(509613),
    c = n(28682),
    d = n(313789),
    E = n(726985),
    S = n(388032);
let T = (0, o.x1)(d.n.SUBSCRIPTIONS_PANE, {
        buildLayout: () => [],
        render: a.Z,
    }),
    I = (0, o.wf)(d.n.SUBSCRIPTIONS_PANEL, {
        useTitle: () => S.intl.string(S.t.trSpHX),
        buildLayout: () => [T],
    }),
    g = (0, o.m7)(d.n.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        icon: r.XOf,
        useTitle: () => S.intl.string(S.t.trSpHX),
        getLegacySearchKey: () => E.s6.SUBSCRIPTIONS,
        buildLayout: () => [I],
        trailing: {
            type: c.PU.STRONGLY_DISCOURAGED_CUSTOM,
            useDecoration: () =>
                (0, s.U)()
                    ? (0, i.jsx)(l.Mgn, {
                          size: "xs",
                          color: u.Z.unsafe_rawColors.YELLOW_300,
                      })
                    : null,
        },
    });
