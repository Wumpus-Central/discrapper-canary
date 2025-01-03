s.d(t, {
    B: function () {
        return p;
    }
});
var n = s(192379),
    r = s(442837),
    i = s(594174),
    a = s(111361),
    o = s(140465),
    l = s(775412),
    c = s(276444),
    u = s(912244),
    d = s(474936);
let p = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        s = (0, r.e7)([i.default], () => i.default.getCurrentUser()),
        p = (0, o.t7)(),
        f = (0, l._O)(),
        { eligibleToFetch: x } = (0, u.N)(e),
        g = x && (null == s ? void 0 : s.verified) === !0 && (0, a.M5)(s, d.p9.TIER_2) && !p && !f;
    n.useEffect(() => {
        g && !t && c.Z.checkAndFetchReferralsRemaining();
    }, [g, t]);
};
