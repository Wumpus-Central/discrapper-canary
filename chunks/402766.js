n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(411104);
var i = n(200651);
n(192379);
var r = n(67523),
    l = n(865267),
    s = n(125664),
    a = n(981631);
function o(e) {
    let { tier: t, ...n } = e;
    switch (t) {
        case a.Eu4.TIER_1:
            return (0, i.jsx)(r.Z, { ...n });
        case a.Eu4.TIER_2:
            return (0, i.jsx)(l.Z, { ...n });
        case a.Eu4.TIER_3:
            return (0, i.jsx)(s.Z, { ...n });
        case a.Eu4.NONE:
            return null;
        default:
            throw Error('Not a valid tier type');
    }
}
