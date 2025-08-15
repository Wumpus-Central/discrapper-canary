n.d(t, { B: () => m });
var r = n(73800),
    i = n(442837),
    l = n(975298),
    a = n(594174),
    o = n(111361),
    s = n(140465),
    c = n(775412),
    u = n(276444),
    d = n(912244),
    p = n(474936);
let m = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, i.e7)([a.default], () => a.default.getCurrentUser()),
        m = (0, s.t7)(),
        f = (0, c._O)(),
        { eligibleToFetch: _ } = (0, d.N)(e),
        g = (0, l.Z)(),
        h =
            _ &&
            (null == n ? void 0 : n.verified) === !0 &&
            (0, o.M5)(n, p.p9.TIER_2) &&
            g.fetched &&
            g.fractionalState !== p.a$.FP_ONLY &&
            !m &&
            !f;
    r.useEffect(() => {
        h && !t && u.Z.checkAndFetchReferralsRemaining();
    }, [h, t]);
};
