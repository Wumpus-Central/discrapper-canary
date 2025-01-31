n.d(t, {
    ML: () => o,
    nH: () => l,
    vK: () => d,
    yV: () => a
});
var i = n(180650),
    r = n(921948);
let a = 1060,
    s = 180,
    o = (e) => e * (0, r.Z)(),
    l = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
            { primary: n, secondary: i } = e;
        return 'linear-gradient('.concat(t, 'deg, ').concat(n.toHslString(), ', ').concat(i.toHslString(), ')');
    },
    u = [n(241371), n(448509)],
    c = {
        [''.concat(i.T.FANTASY)]: [n(709393), n(646584)],
        [''.concat(i.T.ANIME)]: [n(647387), n(448509)],
        [''.concat(i.T.BREAKFAST)]: [n(289901), n(402344)],
        [''.concat(i.T.FALL)]: [n(432170), n(15888)],
        [''.concat(i.T.WINTER)]: [n(304088), n(774694)],
        [''.concat(i.T.MONSTERS)]: [n(857578), n(441506)]
    },
    d = (e) => {
        var t;
        return null == e ? u : null !== (t = c[e]) && void 0 !== t ? t : u;
    };
