var i = n(239266),
    r = n(287809),
    a = n(448645),
    s = n(921894),
    l = n(212739),
    o = n(682901);
function d() {
    let e;
    return ((e = void 0 ?? r.default.getCurrentUser()), (0, a.YE)(e, o.PremiumTypes.TIER_2));
}
let c = {
    [s.W.NITRO]: d,
    [s.W.XBOX]: function () {
        return (0, l.H)(r.default.getCurrentUser());
    },
};
n.d(
    t,
    {},
    {
        CC: d,
        CZ: function () {
            for (let e of Object.values(s.W)) if ("number" == typeof e && c[e]()) return !0;
            return !1;
        },
        J8: function (e) {
            if (null == e) return !0;
            let t = e.next_reward_date;
            return null != t && "" !== t && (0, i.A)(new Date(t));
        },
    },
);
