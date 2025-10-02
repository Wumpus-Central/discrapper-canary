n.d(t, { Z: () => y });
var i = n(951288),
    r = n(657707),
    l = n(793030),
    u = n(692547),
    s = n(160913),
    a = n(813732),
    o = n(509613),
    c = n(28682),
    d = n(313789),
    E = n(726985),
    O = n(388032);
let T = (0, o.x1)(d.n.SUBSCRIPTIONS_PANE, {
        buildLayout: () => [],
        render: a.Z,
    }),
    y = (0, o.wf)(d.n.SUBSCRIPTIONS_PANEL, {
        icon: r.SrA,
        useTitle: () => O.intl.string(O.t.trSpHR),
        buildLayout: () => [T],
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
        legacySearchKey: E.s6.SUBSCRIPTIONS,
    });
