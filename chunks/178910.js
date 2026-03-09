n.d(t, { $: () => d, y: () => c });
var i = n(627968);
n(64700);
var r = n(397927),
    l = n(104171),
    a = n(652215),
    s = n(985018),
    o = n(958505);
function d(e) {
    let { activityUsers: t, guildId: n, activityText: a } = e;
    return (0, i.jsxs)("div", {
        className: o.i,
        children: [
            (0, i.jsx)(l.Ay, { guildId: n, users: t, max: 6, size: l.DN.SIZE_16 }),
            (0, i.jsx)(r.Text, { variant: "text-xs/normal", color: "none", children: a }),
        ],
    });
}
function c(e) {
    let { activity: t, activityUsersCount: n } = e;
    switch (t?.type) {
        case a.$pd.STREAMING:
            return { text: s.intl.formatToPlainString(s.t.tyCw2q, { count: n }), Icon: r.ofK };
        case a.$pd.LISTENING:
            return { text: s.intl.formatToPlainString(s.t["2l8yka"], { count: n }), Icon: r.T7G };
        default:
            return { text: s.intl.formatToPlainString(s.t.yJj035, { count: n }), Icon: r._xR };
    }
}
