n.d(t, { $: () => d, y: () => c });
var i = n(627968);
n(64700);
var r = n(397927),
    a = n(104171),
    l = n(652215),
    s = n(985018),
    o = n(958505);
function d(e) {
    let { activityUsers: t, guildId: n, activityText: l } = e;
    return (0, i.jsxs)("div", {
        className: o.i,
        children: [
            (0, i.jsx)(a.Ay, { guildId: n, users: t, max: 6, size: a.DN.SIZE_16 }),
            (0, i.jsx)(r.Text, { variant: "text-xs/normal", color: "none", children: l }),
        ],
    });
}
function c(e) {
    let { activity: t, activityUsersCount: n } = e;
    switch (t?.type) {
        case l.$pd.STREAMING:
            return { text: s.intl.formatToPlainString(s.t.tyCw2q, { count: n }), Icon: r.ofK };
        case l.$pd.LISTENING:
            return { text: s.intl.formatToPlainString(s.t["2l8yka"], { count: n }), Icon: r.T7G };
        default:
            return { text: s.intl.formatToPlainString(s.t.yJj035, { count: n }), Icon: r._xR };
    }
}
