var s = r(582128),
    a = r(855986),
    f = r(803306),
    l = r(287809),
    h = r(851746);
r.d(
    t,
    {},
    {
        J: function () {
            let e = (0, a.yK)([h.A], () => h.A.getSentUserIds()),
                t = (0, a.yK)([l.default], () => e.map((e) => l.default.getUser(e)).filter((e) => null != e));
            return (
                s.useEffect(() => {
                    e.forEach((e) => {
                        (0, f.wz)(e);
                    });
                }, [e]),
                {
                    referralSentUsers: t,
                    hasSentAllReferrals: 3 === e.length,
                    refreshAt: (0, a.bG)([h.A], () => h.A.getRefreshAt()),
                }
            );
        },
    },
);
