n.d(t, { B: () => g });
var r = n(192379),
    i = n(442837),
    s = n(975298),
    a = n(594174),
    l = n(111361),
    o = n(140465),
    c = n(775412),
    d = n(276444),
    u = n(912244),
    m = n(474936);
let g = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, i.e7)([a.default], () => a.default.getCurrentUser()),
        g = (0, o.t7)(),
        p = (0, c._O)(),
        { eligibleToFetch: h } = (0, u.N)(e),
        f = (0, s.Z)(),
        b = h && (null == n ? void 0 : n.verified) === !0 && (0, l.M5)(n, m.p9.TIER_2) && f.fetched && f.fractionalState !== m.a$.FP_ONLY && !g && !p;
    r.useEffect(() => {
        b && !t && d.Z.checkAndFetchReferralsRemaining();
    }, [b, t]);
};
