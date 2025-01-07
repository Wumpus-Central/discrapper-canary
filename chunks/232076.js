n.d(t, {
    B: function () {
        return g;
    }
});
var i = n(192379),
    r = n(442837),
    a = n(594174),
    s = n(111361),
    l = n(140465),
    o = n(775412),
    c = n(276444),
    d = n(912244),
    u = n(474936);
let g = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, r.e7)([a.default], () => a.default.getCurrentUser()),
        g = (0, l.t7)(),
        m = (0, o._O)(),
        { eligibleToFetch: f } = (0, d.N)(e),
        p = f && (null == n ? void 0 : n.verified) === !0 && (0, s.M5)(n, u.p9.TIER_2) && !g && !m;
    i.useEffect(() => {
        p && !t && c.Z.checkAndFetchReferralsRemaining();
    }, [p, t]);
};
