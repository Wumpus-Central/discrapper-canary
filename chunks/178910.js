n.d(t, { $: () => m, y: () => _ });
var i = n(627968);
n(64700);
var l = n(834730),
    a = n(500060),
    s = n(432017),
    r = n(687966),
    o = n(104171),
    d = n(652215),
    c = n(985018),
    u = n(695320);
function m(e) {
    let { activityUsers: t, guildId: n, activityText: a } = e;
    return (0, i.jsxs)("div", {
        className: u.i,
        children: [
            (0, i.jsx)(o.Ay, { guildId: n, users: t, max: 6, size: o.DN.SIZE_16 }),
            (0, i.jsx)(l.E, { variant: "text-xs/normal", color: "none", children: a }),
        ],
    });
}
function _(e) {
    let { activity: t, activityUsersCount: n } = e;
    switch (t?.type) {
        case d.$pd.STREAMING:
            return { text: c.intl.formatToPlainString(c.t.tyCw2q, { count: n }), Icon: a.o };
        case d.$pd.LISTENING:
            return { text: c.intl.formatToPlainString(c.t["2l8yka"], { count: n }), Icon: s.T };
        default:
            return { text: c.intl.formatToPlainString(c.t.yJj035, { count: n }), Icon: r._ };
    }
}
