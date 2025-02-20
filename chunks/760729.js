n.d(t, { $: () => a }), n(301563);
var r = n(381129),
    i = n(981631),
    o = n(388032);
let a = [
    {
        check(e, t, n) {
            if (!n || null == t.getGuildId()) return !1;
            let i = r.Z.extractEveryoneRole(e, t);
            if (null == i || !r.Z.shouldShowEveryoneGuard(i, t)) return !1;
            let a = r.Z.everyoneMemberCount(i, t),
                s = Math.pow(10, Math.floor(Math.log10(a))),
                l = o.t['47E5R0'];
            return (
                t.isForumPost() ? (l = o.t.sYW2c3) : t.isThread() && (l = o.t['2YaiQ0']),
                {
                    body: o.NW.formatToPlainString(l, {
                        role: i,
                        count: (Math.trunc(a / s) * s).toLocaleString()
                    }),
                    footer: o.NW.string(o.t.mVyrtr)
                }
            );
        },
        analyticsType: '@Everyone Warning',
        animation: {
            dark: () => n.e('83323').then(n.t.bind(n, 510465, 19)),
            light: () => n.e('36052').then(n.t.bind(n, 570227, 19))
        }
    },
    {
        check: (e) => !!i.Jn9.test(e) && { body: o.NW.string(o.t.sTwS1d) },
        analyticsType: 'API Token Warning'
    }
];
