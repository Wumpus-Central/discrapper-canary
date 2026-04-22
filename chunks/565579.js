n.d(t, { m: () => i });
var a = n(76522),
    r = n(652215),
    l = n(985018);
let i = [
    {
        check(e, t, n) {
            if (!n || null == t.getGuildId()) return !1;
            let r = a.A.extractEveryoneRole(e, t);
            if (null == r || !a.A.shouldShowEveryoneGuard(r, t)) return !1;
            let i = a.A.everyoneMemberCount(r, t),
                o = Math.pow(10, Math.floor(Math.log10(i))),
                s = l.t["47E5Rz"];
            return (
                t.isForumPost() ? (s = l.t.sYW2cy) : t.isThread() && (s = l.t["2YaiQ1"]),
                {
                    body: l.intl.formatToPlainString(s, { role: r, count: (Math.trunc(i / o) * o).toLocaleString() }),
                    footer: l.intl.string(l.t.mVyrtu),
                }
            );
        },
        analyticsType: "@Everyone Warning",
        animation: {
            dark: () => n.e("2848").then(n.t.bind(n, 661022, 19)),
            light: () => n.e("92705").then(n.t.bind(n, 111992, 19)),
        },
    },
    { check: (e) => !!r.AKn.test(e) && { body: l.intl.string(l.t.sTwS1a) }, analyticsType: "API Token Warning" },
];
