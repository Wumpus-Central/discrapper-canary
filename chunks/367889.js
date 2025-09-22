n.d(t, { Z: () => O });
var r = n(951288),
    i = n(657707),
    l = n(692547),
    o = n(160913),
    s = n(813732),
    a = n(509613),
    u = n(28682),
    c = n(313789),
    d = n(726985),
    f = n(388032);
let g = (0, a.x1)(c.n.SUBSCRIPTIONS_PANE, {
        getLayout: () => [],
        render: s.Z,
    }),
    O = (0, a.wf)(c.n.SUBSCRIPTIONS_PANEL, {
        icon: i.SrA,
        useTitle: () => f.intl.string(f.t.trSpHR),
        getLayout: () => [g],
        trailing: {
            type: u.PU.STRONGLY_DISCOURAGED_CUSTOM,
            useDecoration: () =>
                (0, o.U)()
                    ? (0, r.jsx)(i.Mgn, {
                          size: "xs",
                          color: l.Z.unsafe_rawColors.YELLOW_300,
                      })
                    : null,
        },
        legacySearchKey: d.s6.SUBSCRIPTIONS,
    });
