n.d(t, { Z: () => o });
var r = n(200651);
n(192379);
var i = n(85960),
    s = n(489776),
    a = n(252121),
    l = n(564488);
function o(e) {
    let { guildId: t, rules: n, triggerType: o, initWithEdit: c } = e,
        { perGuildMaxCount: d } = i.I6[o],
        u = 0 === n.length,
        m = d > n.length && !u;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            u &&
                (0, r.jsx)(a.Z, {
                    guildId: t,
                    triggerType: o
                }),
            n.map((e) =>
                (0, r.jsx)(
                    l.Z,
                    {
                        rule: e,
                        initWithEdit: c
                    },
                    e.id
                )
            ),
            m &&
                (0, r.jsx)(s.Z, {
                    guildId: t,
                    triggerType: o
                })
        ]
    });
}
