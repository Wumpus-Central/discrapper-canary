n.d(e, { F: () => g });
var i = n(951288),
    l = n(657707),
    r = n(793030),
    u = n(692547),
    s = n(160913),
    a = n(813732),
    o = n(509613),
    c = n(28682),
    E = n(313789),
    d = n(726985),
    S = n(388032);
let T = (0, o.x1)(E.n.SUBSCRIPTIONS_PANE, {
        buildLayout: () => [],
        render: a.Z,
    }),
    O = (0, o.wf)(E.n.SUBSCRIPTIONS_PANEL, {
        useTitle: () => S.intl.string(S.t.trSpHX),
        buildLayout: () => [T],
    }),
    g = (0, o.m7)(E.n.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        icon: l.XOf,
        useTitle: () => S.intl.string(S.t.trSpHX),
        getLegacySearchKey: () => d.s6.SUBSCRIPTIONS,
        buildLayout: () => [O],
        trailing: {
            type: c.PU.STRONGLY_DISCOURAGED_CUSTOM,
            useDecoration: () =>
                (0, s.U)()
                    ? (0, i.jsx)(r.Mgn, {
                          size: "xs",
                          color: u.Z.unsafe_rawColors.YELLOW_300,
                      })
                    : null,
        },
    });
