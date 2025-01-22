n.d(t, {
    Z: function () {
        return Z;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(319147),
    s = n(306276),
    a = n(510236),
    l = n(133398),
    o = n(722283),
    c = n(298274),
    d = n(569620),
    u = n(16503),
    m = n(64268),
    g = n(697720),
    h = n(578325),
    p = n(56790),
    x = n(90718),
    f = n(897482),
    E = n(4515),
    _ = n(474472),
    C = n(156129),
    T = n(799303),
    S = n(245630),
    b = n(842272),
    I = n(486731),
    N = n(346943),
    v = n(55826),
    A = n(218776),
    j = n(414653),
    O = n(297141),
    R = n(26517),
    P = n(93125),
    D = n(278583),
    y = n(814437);
let B = new Map([
    ['BG', a],
    ['CZ', c],
    ['HU', f],
    ['RO', R],
    ['SE', P],
    ['CY', o],
    ['EE', u],
    ['IS', _],
    ['IE', E],
    ['LV', I],
    ['LI', T],
    ['LT', S],
    ['LU', b],
    ['MT', N],
    ['SK', y],
    ['SI', D],
    ['GR', p],
    ['FI', g],
    ['PT', O],
    ['NO', A],
    ['BE', s],
    ['AT', r],
    ['CH', l],
    ['FR', h],
    ['DE', d],
    ['ES', m],
    ['IT', C],
    ['NL', v],
    ['PL', j],
    ['HR', x]
]);
function Z(e) {
    let { className: t, countryCode: n } = e;
    if (null == n || !B.has(n)) return null;
    let r = B.get(n);
    return (0, i.jsx)('img', {
        className: t,
        'aria-hidden': !0,
        alt: 'Wumpus holding a country-specific flag',
        src: r
    });
}
