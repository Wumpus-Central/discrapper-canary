n.d(t, {
    $: () => c,
    y: () => u,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(104171),
    s = n(652215),
    o = n(985018),
    l = n(958505);

function c(e) {
    let { activityUsers: t, guildId: n, activityText: s } = e;
    return (0, r.jsxs)("div", {
        className: l.i,
        children: [
            (0, r.jsx)(a.Ay, {
                guildId: n,
                users: t,
                max: 6,
                size: a.DN.SIZE_16,
            }),
            (0, r.jsx)(i.Text, {
                variant: "text-xs/normal",
                color: "none",
                children: s,
            }),
        ],
    });
}

function u(e) {
    let { activity: t, activityUsersCount: n } = e;
    switch (null == t ? void 0 : t.type) {
        case s.$pd.STREAMING:
            return {
                text: o.intl.formatToPlainString(o.t.tyCw2q, {
                    count: n,
                }),
                Icon: i.ofK,
            };
        case s.$pd.LISTENING:
            return {
                text: o.intl.formatToPlainString(o.t["2l8yka"], {
                    count: n,
                }),
                Icon: i.T7G,
            };
        default:
            return {
                text: o.intl.formatToPlainString(o.t.yJj035, {
                    count: n,
                }),
                Icon: i._xR,
            };
    }
}
