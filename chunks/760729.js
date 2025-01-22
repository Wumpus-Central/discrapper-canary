r.d(n, {
    $: function () {
        return s;
    }
});
var i = r(381129),
    a = r(981631),
    o = r(388032);
let s = [
    {
        check(e, n, r) {
            if (!r || null == n.getGuildId()) return !1;
            let a = i.Z.extractEveryoneRole(e, n);
            if (null == a || !i.Z.shouldShowEveryoneGuard(a, n)) return !1;
            let s = i.Z.everyoneMemberCount(a, n),
                l = Math.pow(10, Math.floor(Math.log10(s))),
                u = o.t['47E5R0'];
            return (
                n.isForumPost() ? (u = o.t.sYW2c3) : n.isThread() && (u = o.t['2YaiQ0']),
                {
                    body: o.intl.formatToPlainString(u, {
                        role: a,
                        count: (Math.trunc(s / l) * l).toLocaleString()
                    }),
                    footer: o.intl.string(o.t.mVyrtr)
                }
            );
        },
        analyticsType: '@Everyone Warning',
        animation: {
            dark: () => r.e('83323').then(r.t.bind(r, 510465, 19)),
            light: () => r.e('36052').then(r.t.bind(r, 570227, 19))
        }
    },
    {
        check: (e) => !!a.Jn9.test(e) && { body: o.intl.string(o.t.sTwS1d) },
        analyticsType: 'API Token Warning'
    }
];
