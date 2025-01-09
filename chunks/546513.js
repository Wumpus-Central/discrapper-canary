n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var r = n(85960),
    l = n(489776),
    s = n(252121),
    a = n(564488);
function o(e) {
    let { guildId: t, rules: n, triggerType: o, initWithEdit: c } = e,
        { perGuildMaxCount: d } = r.I6[o],
        u = 0 === n.length,
        m = d > n.length && !u;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            u &&
                (0, i.jsx)(s.Z, {
                    guildId: t,
                    triggerType: o
                }),
            n.map((e) =>
                (0, i.jsx)(
                    a.Z,
                    {
                        rule: e,
                        initWithEdit: c
                    },
                    e.id
                )
            ),
            m &&
                (0, i.jsx)(l.Z, {
                    guildId: t,
                    triggerType: o
                })
        ]
    });
}
