n.d(t, {
    Eq: () => s,
    NV: () => o,
    Uw: () => a
});
var i = n(358085),
    r = n(477931);
let a = (e) => {
        var t;
        if (!e.hasPotions()) return !1;
        let n = null !== (t = e.potions) && void 0 !== t ? t : [],
            a = (0, i.isAndroid)();
        return n.some((e) => e.type === r.B.CONFETTI && (!a || null != e.emoji[0].id));
    },
    s = (e) => {
        var t;
        if (e.hasPotions()) return (null !== (t = e.potions) && void 0 !== t ? t : []).find((e) => e.type === r.B.CONFETTI);
    },
    o = (e) =>
        null != e.id
            ? {
                  id: e.id,
                  name: e.name
              }
            : {
                  name: e.optionallyDiverseSequence,
                  id: void 0
              };
