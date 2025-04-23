n.d(t, { Z: () => o });
var r = n(200651);
n(192379);
var i = n(85960),
    l = n(489776),
    s = n(252121),
    a = n(564488);
function o(e) {
    let { guildId: t, rules: n, triggerType: o, initWithEdit: c } = e,
        { perGuildMaxCount: u } = i.I6[o],
        d = 0 === n.length,
        m = u > n.length && !d;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            d &&
                (0, r.jsx)(s.Z, {
                    guildId: t,
                    triggerType: o
                }),
            n.map((e) =>
                (0, r.jsx)(
                    a.Z,
                    {
                        rule: e,
                        initWithEdit: c
                    },
                    e.id
                )
            ),
            m &&
                (0, r.jsx)(l.Z, {
                    guildId: t,
                    triggerType: o
                })
        ]
    });
}
