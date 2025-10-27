n.d(e, { F: () => S });
var i = n(951288),
    l = n(657707),
    u = n(793030),
    r = n(692547),
    s = n(160913),
    a = n(813732),
    o = n(509613),
    c = n(28682),
    E = n(313789),
    d = n(726985),
    T = n(388032);
let I = (0, o.x1)(E.n.SUBSCRIPTIONS_PANE, {
        buildLayout: () => [],
        render: a.Z,
    }),
    O = (0, o.wf)(E.n.SUBSCRIPTIONS_PANEL, {
        useTitle: () => T.intl.string(T.t.trSpHX),
        buildLayout: () => [I],
    }),
    S = (0, o.m7)(E.n.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        icon: l.XOf,
        useTitle: () => T.intl.string(T.t.trSpHX),
        legacySearchKey: d.s6.SUBSCRIPTIONS,
        buildLayout: () => [O],
        trailing: {
            type: c.PU.STRONGLY_DISCOURAGED_CUSTOM,
            useDecoration: () =>
                (0, s.U)()
                    ? (0, i.jsx)(u.Mgn, {
                          size: "xs",
                          color: r.Z.unsafe_rawColors.YELLOW_300,
                      })
                    : null,
        },
    });
