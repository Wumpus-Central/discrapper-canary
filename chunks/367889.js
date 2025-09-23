n.d(t, { Z: () => O });
var r = n(951288),
    i = n(793030),
    l = n(692547),
    o = n(73837),
    s = n(160913),
    a = n(813732),
    u = n(509613),
    c = n(28682),
    d = n(313789),
    f = n(726985),
    g = n(388032);
let y = (0, u.x1)(d.n.SUBSCRIPTIONS_PANE, {
        getLayout: () => [],
        render: a.Z,
    }),
    O = (0, u.wf)(d.n.SUBSCRIPTIONS_PANEL, {
        icon: o.Sr,
        useTitle: () => g.intl.string(g.t.trSpHR),
        getLayout: () => [y],
        trailing: {
            type: c.PU.STRONGLY_DISCOURAGED_CUSTOM,
            useDecoration: () =>
                (0, s.U)()
                    ? (0, r.jsx)(i.Mgn, {
                          size: "xs",
                          color: l.Z.unsafe_rawColors.YELLOW_300,
                      })
                    : null,
        },
        legacySearchKey: f.s6.SUBSCRIPTIONS,
    });
