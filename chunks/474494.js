n.d(t, { Z: () => Z }), n(388685);
var i = n(255367);
n(73800);
var r = n(319147),
    s = n(306276),
    l = n(510236),
    a = n(133398),
    o = n(722283),
    c = n(298274),
    d = n(569620),
    u = n(16503),
    m = n(64268),
    p = n(697720),
    g = n(578325),
    h = n(56790),
    f = n(90718),
    b = n(897482),
    _ = n(4515),
    x = n(474472),
    E = n(156129),
    j = n(799303),
    C = n(245630),
    O = n(842272),
    S = n(486731),
    v = n(346943),
    T = n(55826),
    N = n(218776),
    I = n(414653),
    y = n(297141),
    A = n(26517),
    P = n(93125),
    R = n(278583);
let D = new Map([
    ['BG', l],
    ['CZ', c],
    ['HU', b],
    ['RO', A],
    ['SE', P],
    ['CY', o],
    ['EE', u],
    ['IS', x],
    ['IE', _],
    ['LV', S],
    ['LI', j],
    ['LT', C],
    ['LU', O],
    ['MT', v],
    ['SK', n(814437)],
    ['SI', R],
    ['GR', h],
    ['FI', p],
    ['PT', y],
    ['NO', N],
    ['BE', s],
    ['AT', r],
    ['CH', a],
    ['FR', g],
    ['DE', d],
    ['ES', m],
    ['IT', E],
    ['NL', T],
    ['PL', I],
    ['HR', f]
]);
function Z(e) {
    let { className: t, countryCode: n } = e;
    if (null == n || !D.has(n)) return null;
    let r = D.get(n);
    return (0, i.jsx)('img', {
        className: t,
        'aria-hidden': !0,
        alt: 'Wumpus holding a country-specific flag',
        src: r
    });
}
