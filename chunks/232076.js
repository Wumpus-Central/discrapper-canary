n.d(t, { B: () => m });
var i = n(73800),
    r = n(442837),
    s = n(975298),
    l = n(594174),
    a = n(111361),
    o = n(140465),
    c = n(775412),
    d = n(276444),
    u = n(912244),
    g = n(474936);
let m = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, r.e7)([l.default], () => l.default.getCurrentUser()),
        m = (0, o.t7)(),
        p = (0, c._O)(),
        { eligibleToFetch: h } = (0, u.N)(e),
        f = (0, s.Z)(),
        b = h && (null == n ? void 0 : n.verified) === !0 && (0, a.M5)(n, g.p9.TIER_2) && f.fetched && f.fractionalState !== g.a$.FP_ONLY && !m && !p;
    i.useEffect(() => {
        b && !t && d.Z.checkAndFetchReferralsRemaining();
    }, [b, t]);
};
