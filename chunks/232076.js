n.d(t, { B: () => m });
var r = n(192379),
    i = n(442837),
    s = n(594174),
    a = n(111361),
    l = n(140465),
    o = n(775412),
    c = n(276444),
    d = n(912244),
    u = n(474936);
let m = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
        m = (0, l.t7)(),
        g = (0, o._O)(),
        { eligibleToFetch: p } = (0, d.N)(e),
        h = p && (null == n ? void 0 : n.verified) === !0 && (0, a.M5)(n, u.p9.TIER_2) && !m && !g;
    r.useEffect(() => {
        h && !t && c.Z.checkAndFetchReferralsRemaining();
    }, [h, t]);
};
