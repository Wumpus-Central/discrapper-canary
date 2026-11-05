var c = i(582128),
    d = i(855986),
    s = i(287809),
    n = i(526292),
    r = i(89366),
    a = i(851746);
i.d(
    t,
    {},
    {
        i: function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = (0, d.bG)([s.default], () => s.default.getCurrentUser()),
                i = (0, n.k5)(),
                f = (0, r.QQ)(),
                b = t?.verified === !0 && t.hasPaidTier2Subscription() && !i && !f;
            c.useEffect(() => {
                b && !e && a.A.checkAndFetchReferralsRemaining();
            }, [b, e]);
        },
    },
);
