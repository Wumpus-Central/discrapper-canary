"use strict";
n.d(t, { m: () => a });
var r = n(76522),
    i = n(652215),
    s = n(985018);
let a = [
    {
        check(e, t, n) {
            if (!n || null == t.getGuildId()) return !1;
            let i = r.A.extractEveryoneRole(e, t);
            if (null == i || !r.A.shouldShowEveryoneGuard(i, t)) return !1;
            let a = r.A.everyoneMemberCount(i, t),
                o = Math.pow(10, Math.floor(Math.log10(a))),
                l = s.t["47E5Rz"];
            return (
                t.isForumPost() ? (l = s.t.sYW2cy) : t.isThread() && (l = s.t["2YaiQ1"]),
                {
                    body: s.intl.formatToPlainString(l, { role: i, count: (Math.trunc(a / o) * o).toLocaleString() }),
                    footer: s.intl.string(s.t.mVyrtu),
                }
            );
        },
        analyticsType: "@Everyone Warning",
        animation: {
            dark: () => n.e("80467").then(n.t.bind(n, 661022, 19)),
            light: () => n.e("92705").then(n.t.bind(n, 111992, 19)),
        },
    },
    { check: (e) => !!i.AKn.test(e) && { body: s.intl.string(s.t.sTwS1a) }, analyticsType: "API Token Warning" },
];
