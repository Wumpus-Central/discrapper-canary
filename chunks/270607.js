var i = n(477900),
    l = n(582128),
    a = n(855986),
    o = n(192308),
    r = n(945810),
    s = n(734066),
    u = n(424739);
function c() {
    (0, o.mM)(async () => {
        let { default: t } = await Promise.all([n.e(669779), n.e(614146)]).then(n.bind(n, 503257));
        return (e) => (0, i.jsx)(t, { ...e });
    });
}
n.d(
    e,
    {},
    {
        B: function (t) {
            let e = !(0, s.Vl)(),
                n = (0, s.W1)() && e,
                i = (0, a.bG)([r.Bt], () => n && (0, u.o)(t), [n, t]);
            return { isLocked: l.useCallback((t) => i && "off" !== t, [i]), openRoadblock: c };
        },
    },
);
