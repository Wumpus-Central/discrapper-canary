n.d(t, {
    ML: () => s,
    nH: () => l,
    vK: () => d,
    yV: () => o
});
var r = n(180650),
    i = n(921948);
let o = 1060,
    a = 180,
    s = (e) => e * (0, i.Z)(),
    l = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
            { primary: n, secondary: r } = e;
        return 'linear-gradient('.concat(t, 'deg, ').concat(n.toHslString(), ', ').concat(r.toHslString(), ')');
    },
    c = [n(241371), n(448509)],
    u = {
        [''.concat(r.T.FANTASY)]: [n(709393), n(646584)],
        [''.concat(r.T.ANIME)]: [n(647387), n(448509)],
        [''.concat(r.T.BREAKFAST)]: [n(289901), n(402344)],
        [''.concat(r.T.FALL)]: [n(432170), n(15888)],
        [''.concat(r.T.WINTER)]: [n(304088), n(774694)],
        [''.concat(r.T.MONSTERS)]: [n(857578), n(441506)]
    },
    d = (e) => {
        var t;
        return null == e ? c : null != (t = u[e]) ? t : c;
    };
