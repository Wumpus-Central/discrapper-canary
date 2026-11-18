var i = n(287809),
    r = n(448645),
    a = n(921894),
    s = n(212739),
    l = n(682901);
function o() {
    let e;
    return ((e = void 0 ?? i.default.getCurrentUser()), (0, r.YE)(e, l.PremiumTypes.TIER_2));
}
let d = {
    [a.W.NITRO]: o,
    [a.W.XBOX]: function () {
        return (0, s.H)(i.default.getCurrentUser());
    },
};
n.d(
    t,
    {},
    {
        CC: o,
        CZ: function () {
            for (let e of Object.values(a.W)) if ("number" == typeof e && d[e]()) return !0;
            return !1;
        },
        J8: function (e) {
            if (null == e) return !0;
            let t = e.next_reward_date;
            return null != t && "" !== t && new Date(t).getTime() < Date.now();
        },
    },
);
