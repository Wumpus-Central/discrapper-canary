"use strict";
n.d(t, { m: () => s });
var r = n(76522),
    i = n(652215),
    a = n(985018);
let s = [
    {
        check(e, t, n) {
            if (!n || null == t.getGuildId()) return !1;
            let i = r.A.extractEveryoneRole(e, t);
            if (null == i || !r.A.shouldShowEveryoneGuard(i, t)) return !1;
            let s = r.A.everyoneMemberCount(i, t),
                o = Math.pow(10, Math.floor(Math.log10(s))),
                l = a.t["47E5Rz"];
            return (
                t.isForumPost() ? (l = a.t.sYW2cy) : t.isThread() && (l = a.t["2YaiQ1"]),
                {
                    body: a.intl.formatToPlainString(l, { role: i, count: (Math.trunc(s / o) * o).toLocaleString() }),
                    footer: a.intl.string(a.t.mVyrtu),
                }
            );
        },
        analyticsType: "@Everyone Warning",
        animation: {
            dark: () => n.e("80467").then(n.t.bind(n, 661022, 19)),
            light: () => n.e("92705").then(n.t.bind(n, 111992, 19)),
        },
    },
    { check: (e) => !!i.AKn.test(e) && { body: a.intl.string(a.t.sTwS1a) }, analyticsType: "API Token Warning" },
];
