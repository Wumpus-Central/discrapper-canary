n.d(t, { B: () => _ });
var r = n(647438),
    i = n(442837),
    a = n(975298),
    o = n(594174),
    s = n(111361),
    l = n(140465),
    c = n(775412),
    u = n(276444),
    d = n(912244),
    f = n(474936);
let _ = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, i.e7)([o.default], () => o.default.getCurrentUser()),
        _ = (0, l.t7)(),
        p = (0, c._O)(),
        { eligibleToFetch: h } = (0, d.N)(e),
        m = (0, a.Z)(),
        g =
            h &&
            (null == n ? void 0 : n.verified) === !0 &&
            (0, s.M5)(n, f.p9.TIER_2) &&
            m.fetched &&
            m.fractionalState !== f.a$.FP_ONLY &&
            !_ &&
            !p;
    r.useEffect(() => {
        g && !t && u.Z.checkAndFetchReferralsRemaining();
    }, [g, t]);
};
