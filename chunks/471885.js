n.d(t, { Z: () => l }), n(411104);
var i = n(200651);
n(192379);
var r = n(758426),
    a = n(973675),
    s = n(949605),
    o = n(981631);
function l(e) {
    let { tier: t, ...n } = e;
    switch (t) {
        case o.Eu4.NONE:
        case o.Eu4.TIER_1:
            return (0, i.jsx)(r.Z, { ...n });
        case o.Eu4.TIER_2:
            return (0, i.jsx)(a.Z, { ...n });
        case o.Eu4.TIER_3:
            return (0, i.jsx)(s.Z, { ...n });
        default:
            throw Error('Not a valid tier type');
    }
}
