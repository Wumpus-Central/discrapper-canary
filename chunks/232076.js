n.d(t, { B: () => p });
var i = n(192379),
    r = n(442837),
    s = n(975298),
    l = n(594174),
    a = n(111361),
    o = n(140465),
    c = n(775412),
    d = n(276444),
    u = n(912244),
    m = n(474936);
let p = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, r.e7)([l.default], () => l.default.getCurrentUser()),
        p = (0, o.t7)(),
        g = (0, c._O)(),
        { eligibleToFetch: h } = (0, u.N)(e),
        f = (0, s.Z)(),
        b = h && (null == n ? void 0 : n.verified) === !0 && (0, a.M5)(n, m.p9.TIER_2) && f.fetched && f.fractionalState !== m.a$.FP_ONLY && !p && !g;
    i.useEffect(() => {
        b && !t && d.Z.checkAndFetchReferralsRemaining();
    }, [b, t]);
};
