n.d(t, { B: () => m });
var r = n(647438),
    i = n(442837),
    l = n(975298),
    o = n(594174),
    a = n(111361),
    s = n(140465),
    c = n(775412),
    u = n(276444),
    d = n(912244),
    p = n(474936);
let m = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, i.e7)([o.default], () => o.default.getCurrentUser()),
        m = (0, s.t7)(),
        f = (0, c._O)(),
        { eligibleToFetch: g } = (0, d.N)(e),
        _ = (0, l.Z)(),
        h =
            g &&
            (null == n ? void 0 : n.verified) === !0 &&
            (0, a.M5)(n, p.p9.TIER_2) &&
            _.fetched &&
            _.fractionalState !== p.a$.FP_ONLY &&
            !m &&
            !f;
    r.useEffect(() => {
        h && !t && u.Z.checkAndFetchReferralsRemaining();
    }, [h, t]);
};
