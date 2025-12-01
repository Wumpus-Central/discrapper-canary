n.d(t, { B: () => f });
var r = n(473749),
    i = n(442837),
    a = n(975298),
    o = n(594174),
    s = n(111361),
    l = n(140465),
    c = n(775412),
    u = n(276444),
    d = n(474936);
let f = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, i.e7)([o.default], () => o.default.getCurrentUser()),
        n = (0, l.t7)(),
        f = (0, c._O)(),
        p = (0, a.Z)(),
        _ =
            (null == t ? void 0 : t.verified) === !0 &&
            (0, s.M5)(t, d.PremiumTypes.TIER_2) &&
            p.fetched &&
            p.fractionalState !== d.a$.FP_ONLY &&
            !n &&
            !f;
    r.useEffect(() => {
        _ && !e && u.Z.checkAndFetchReferralsRemaining();
    }, [_, e]);
};
