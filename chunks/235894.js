r.d(n, {
    E: function () {
        return s;
    },
    U: function () {
        return a;
    }
});
var i = r(477931);
let a = (e) => {
        var n;
        return !!e.hasPotions() && (null !== (n = e.potions) && void 0 !== n ? n : []).some((e) => e.type === i.B.CONFETTI);
    },
    s = (e) => {
        var n;
        if (!!e.hasPotions()) return (null !== (n = e.potions) && void 0 !== n ? n : []).find((e) => e.type === i.B.CONFETTI);
    };
