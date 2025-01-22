r.d(n, {
    ML: function () {
        return l;
    },
    nH: function () {
        return u;
    },
    vK: function () {
        return f;
    },
    yV: function () {
        return o;
    }
});
var i = r(180650),
    a = r(921948);
let o = 1060,
    s = 180,
    l = (e) => e * (0, a.Z)(),
    u = function (e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
            { primary: r, secondary: i } = e;
        return 'linear-gradient('.concat(n, 'deg, ').concat(r.toHslString(), ', ').concat(i.toHslString(), ')');
    },
    c = [r(241371), r(448509)],
    d = {
        [''.concat(i.T.FANTASY)]: [r(709393), r(646584)],
        [''.concat(i.T.ANIME)]: [r(647387), r(448509)],
        [''.concat(i.T.BREAKFAST)]: [r(289901), r(402344)],
        [''.concat(i.T.FALL)]: [r(432170), r(15888)],
        [''.concat(i.T.WINTER)]: [r(304088), r(774694)],
        [''.concat(i.T.MONSTERS)]: [r(857578), r(441506)]
    },
    f = (e) => {
        var n;
        return null == e ? c : null !== (n = d[e]) && void 0 !== n ? n : c;
    };
