var l = n(288106),
    r = n(65238),
    s = n(5377);
n.d(
    t,
    {},
    {
        RJ: function (e) {
            return (0, s.Tf)(Date.now(), e);
        },
        lF: function (e) {
            let { days: t, hours: n, minutes: l, seconds: r } = e;
            return 0 === t && 0 === n && 0 === l && 0 === r;
        },
        rX: function (e, t) {
            let n = Date.now(),
                s = (0, r.NN)(e),
                a = e?.rewardConfig?.discount,
                i = e?.endsAt;
            return null == e ||
                null == t ||
                null == s ||
                s.collectionId !== t ||
                a?.type !== l.RP.PERCENT ||
                a.amount <= 0 ||
                null == i ||
                i.getTime() <= n ||
                (null != e.startsAt && e.startsAt.getTime() > n)
                ? null
                : { percentOff: a.amount, endsAt: i, countdownStyle: s.countdownStyle };
        },
        z0: function (e) {
            let { days: t, hours: n, minutes: l, seconds: r } = e;
            return [t, n, l, r].map((e) => e.toString().padStart(2, "0"));
        },
    },
);
