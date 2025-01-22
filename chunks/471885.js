r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(411104);
var a = r(200651);
r(192379);
var o = r(758426),
    s = r(973675),
    l = r(949605),
    u = r(981631);
function c(e) {
    let { tier: n, ...r } = e;
    switch (n) {
        case u.Eu4.NONE:
        case u.Eu4.TIER_1:
            return (0, a.jsx)(o.Z, { ...r });
        case u.Eu4.TIER_2:
            return (0, a.jsx)(s.Z, { ...r });
        case u.Eu4.TIER_3:
            return (0, a.jsx)(l.Z, { ...r });
        default:
            throw Error('Not a valid tier type');
    }
}
