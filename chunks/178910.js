n.d(t, { $: () => _, y: () => m });
var i = n(627968);
n(64700);
var l = n(834730),
    a = n(500060),
    r = n(432017),
    s = n(687966),
    o = n(104171),
    c = n(652215),
    d = n(985018),
    u = n(695320);
function _(e) {
    let { activityUsers: t, guildId: n, activityText: a } = e;
    return (0, i.jsxs)("div", {
        className: u.i,
        children: [
            (0, i.jsx)(o.Ay, { guildId: n, users: t, max: 6, size: o.DN.SIZE_16 }),
            (0, i.jsx)(l.E, { variant: "text-xs/normal", color: "none", children: a }),
        ],
    });
}
function m(e) {
    let { activity: t, activityUsersCount: n } = e;
    switch (t?.type) {
        case c.$pd.STREAMING:
            return { text: d.intl.formatToPlainString(d.t.tyCw2q, { count: n }), Icon: a.o };
        case c.$pd.LISTENING:
            return { text: d.intl.formatToPlainString(d.t["2l8yka"], { count: n }), Icon: r.T };
        default:
            return { text: d.intl.formatToPlainString(d.t.yJj035, { count: n }), Icon: s._ };
    }
}
