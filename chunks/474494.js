n.d(t, { Z: () => Z }), n(388685);
var r = n(200651);
n(192379);
var i = n(319147),
    s = n(306276),
    a = n(510236),
    l = n(133398),
    o = n(722283),
    c = n(298274),
    d = n(569620),
    u = n(16503),
    m = n(64268),
    g = n(697720),
    p = n(578325),
    h = n(56790),
    f = n(90718),
    b = n(897482),
    _ = n(4515),
    N = n(474472),
    x = n(156129),
    E = n(799303),
    j = n(245630),
    C = n(842272),
    O = n(486731),
    S = n(346943),
    v = n(55826),
    T = n(218776),
    I = n(414653),
    y = n(297141),
    A = n(26517),
    P = n(93125),
    R = n(278583);
let D = new Map([
    ['BG', a],
    ['CZ', c],
    ['HU', b],
    ['RO', A],
    ['SE', P],
    ['CY', o],
    ['EE', u],
    ['IS', N],
    ['IE', _],
    ['LV', O],
    ['LI', E],
    ['LT', j],
    ['LU', C],
    ['MT', S],
    ['SK', n(814437)],
    ['SI', R],
    ['GR', h],
    ['FI', g],
    ['PT', y],
    ['NO', T],
    ['BE', s],
    ['AT', i],
    ['CH', l],
    ['FR', p],
    ['DE', d],
    ['ES', m],
    ['IT', x],
    ['NL', v],
    ['PL', I],
    ['HR', f]
]);
function Z(e) {
    let { className: t, countryCode: n } = e;
    if (null == n || !D.has(n)) return null;
    let i = D.get(n);
    return (0, r.jsx)('img', {
        className: t,
        'aria-hidden': !0,
        alt: 'Wumpus holding a country-specific flag',
        src: i
    });
}
