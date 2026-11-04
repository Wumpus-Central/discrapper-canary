var i = s(582128),
    c = s(855986),
    a = s(287809),
    d = s(526292),
    l = s(89366),
    n = s(851746);
s.d(
    t,
    {},
    {
        i: function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = (0, c.bG)([a.default], () => a.default.getCurrentUser()),
                s = (0, d.k5)(),
                r = (0, l.QQ)(),
                f = t?.verified === !0 && t.hasPaidTier2Subscription() && !s && !r;
            i.useEffect(() => {
                f && !e && n.A.checkAndFetchReferralsRemaining();
            }, [f, e]);
        },
    },
);
