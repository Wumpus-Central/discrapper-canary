var i = n(477900),
    l = n(582128),
    a = n(855986),
    o = n(192308),
    r = n(945810),
    s = n(287809),
    u = n(474090),
    c = n(734066),
    d = n(898105),
    f = n(682901);
function g() {
    (0, o.mM)(async () => {
        let { default: e } = await Promise.all([n.e(669779), n.e(614146)]).then(n.bind(n, 503257));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
n.d(
    t,
    {},
    {
        B: function (e) {
            let t = (0, a.bG)([s.default], () => !(0, u.YE)(s.default.getCurrentUser(), f.PremiumTypes.TIER_2)),
                n = (0, c.W1)() && t,
                i = (0, a.bG)([r.Bt], () => n && (0, d.C)(e).enabled, [n, e]);
            return { isLocked: l.useCallback((e) => i && "off" !== e, [i]), openRoadblock: g };
        },
    },
);
