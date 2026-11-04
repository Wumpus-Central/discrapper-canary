var s = r(440703),
    n = r(760914),
    i = r(417404);
function l(e) {
    if (null != e) return e > 700 ? n.i2.TIER_4 : e > 200 ? n.i2.TIER_3 : e > 100 ? n.i2.TIER_2 : n.i2.TIER_1;
}
r.d(
    t,
    {},
    {
        Pk: function (e) {
            let t = (0, i.sn)(e);
            if (t?.type === s.l.VIRTUAL_CURRENCY) return l(t.orbQuantity);
        },
        Qn: function (e) {
            return l((0, i._Z)(e));
        },
    },
);
