n.d(t, { $: () => d, y: () => c });
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(104171),
    r = n(652215),
    s = n(985018),
    o = n(27219);
function d(e) {
    let { activityUsers: t, guildId: n, activityText: r } = e;
    return (0, i.jsxs)("div", {
        className: o.i,
        children: [
            (0, i.jsx)(a.Ay, { guildId: n, users: t, max: 6, size: a.DN.SIZE_16 }),
            (0, i.jsx)(l.Text, { variant: "text-xs/normal", color: "none", children: r }),
        ],
    });
}
function c(e) {
    let { activity: t, activityUsersCount: n } = e;
    switch (t?.type) {
        case r.$pd.STREAMING:
            return { text: s.intl.formatToPlainString(s.t.tyCw2q, { count: n }), Icon: l.ofK };
        case r.$pd.LISTENING:
            return { text: s.intl.formatToPlainString(s.t["2l8yka"], { count: n }), Icon: l.T7G };
        default:
            return { text: s.intl.formatToPlainString(s.t.yJj035, { count: n }), Icon: l._xR };
    }
}
