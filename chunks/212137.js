var l = n(65238),
    r = n(5377),
    s = n(248180);
n.d(
    t,
    {},
    {
        RJ: function (e) {
            return (0, r.Tf)(Date.now(), e);
        },
        lF: function (e) {
            let { days: t, hours: n, minutes: l, seconds: r } = e;
            return 0 === t && 0 === n && 0 === l && 0 === r;
        },
        rX: function (e, t) {
            let n = Date.now(),
                r = (0, l.NN)(e),
                a = (0, s.S)(e),
                i = e?.endsAt;
            return null == e ||
                null == t ||
                null == r ||
                r.collectionId !== t ||
                null == a ||
                a <= 0 ||
                null == i ||
                i.getTime() <= n ||
                (null != e.startsAt && e.startsAt.getTime() > n)
                ? null
                : { percentOff: a, endsAt: i, countdownStyle: r.countdownStyle };
        },
        z0: function (e) {
            let { days: t, hours: n, minutes: l, seconds: r } = e;
            return [t, n, l, r].map((e) => e.toString().padStart(2, "0"));
        },
    },
);
