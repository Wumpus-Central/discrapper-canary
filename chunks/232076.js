n.d(t, { B: () => m });
var i = n(192379),
    s = n(442837),
    r = n(594174),
    l = n(111361),
    a = n(140465),
    o = n(775412),
    c = n(276444),
    d = n(912244),
    u = n(474936);
let m = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, s.e7)([r.default], () => r.default.getCurrentUser()),
        m = (0, a.t7)(),
        g = (0, o._O)(),
        { eligibleToFetch: h } = (0, d.N)(e),
        x = h && (null == n ? void 0 : n.verified) === !0 && (0, l.M5)(n, u.p9.TIER_2) && !m && !g;
    i.useEffect(() => {
        x && !t && c.Z.checkAndFetchReferralsRemaining();
    }, [x, t]);
};
