s.d(t, { i: () => r });
var i = s(582128),
    c = s(17928),
    a = s(287809),
    l = s(526292),
    d = s(89366),
    n = s(851746);
function r() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, c.bG)([a.default], () => a.default.getCurrentUser()),
        s = (0, l.k5)(),
        r = (0, d.QQ)(),
        f = t?.verified === !0 && t.hasPaidTier2Subscription() && !s && !r;
    i.useEffect(() => {
        f && !e && n.A.checkAndFetchReferralsRemaining();
    }, [f, e]);
}
