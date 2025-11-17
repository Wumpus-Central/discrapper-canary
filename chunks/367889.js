n.d(e, { F: () => O });
var i = n(54381),
    l = n(657707),
    u = n(793030),
    r = n(692547),
    s = n(160913),
    a = n(813732),
    o = n(509613),
    c = n(28682),
    E = n(313789),
    S = n(726985),
    T = n(388032);
let d = (0, o.x1)(E.n.SUBSCRIPTIONS_PANE, {
        buildLayout: () => [],
        render: a.Z,
    }),
    I = (0, o.wf)(E.n.SUBSCRIPTIONS_PANEL, {
        useTitle: () => T.intl.string(T.t.trSpHX),
        buildLayout: () => [d],
    }),
    O = (0, o.m7)(E.n.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        icon: l.XOf,
        useTitle: () => T.intl.string(T.t.trSpHX),
        getLegacySearchKey: () => S.s6.SUBSCRIPTIONS,
        buildLayout: () => [I],
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
