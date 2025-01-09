n.d(t, {
    E: function () {
        return r;
    },
    U: function () {
        return l;
    }
});
var i = n(477931);
let l = (e) => {
        var t;
        return !!e.hasPotions() && (null !== (t = e.potions) && void 0 !== t ? t : []).some((e) => e.type === i.B.CONFETTI);
    },
    r = (e) => {
        var t;
        if (!!e.hasPotions()) return (null !== (t = e.potions) && void 0 !== t ? t : []).find((e) => e.type === i.B.CONFETTI);
    };
