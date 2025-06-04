n.d(t, {
    Eq: () => o,
    NV: () => s,
    Uw: () => a
});
var r = n(358085),
    i = n(477931);
let a = (e) => {
        var t;
        if (!e.hasPotions()) return !1;
        let n = null != (t = e.potions) ? t : [],
            a = (0, r.isAndroid)();
        return n.some((e) => e.type === i.B.CONFETTI && (!a || null != e.emoji[0].id));
    },
    o = (e) => {
        var t;
        if (e.hasPotions()) return (null != (t = e.potions) ? t : []).find((e) => e.type === i.B.CONFETTI);
    },
    s = (e) =>
        null != e.id
            ? {
                  id: e.id,
                  name: e.name
              }
            : {
                  name: e.optionallyDiverseSequence,
                  id: void 0
              };
