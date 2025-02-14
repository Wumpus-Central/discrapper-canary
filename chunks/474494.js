n.d(t, { Z: () => Z }), n(47120);
var i = n(200651);
n(192379);
var s = n(319147),
    r = n(306276),
    l = n(510236),
    a = n(133398),
    o = n(722283),
    c = n(298274),
    d = n(569620),
    u = n(16503),
    m = n(64268),
    g = n(697720),
    h = n(578325),
    x = n(56790),
    _ = n(90718),
    p = n(897482),
    E = n(4515),
    C = n(474472),
    f = n(156129),
    T = n(799303),
    N = n(245630),
    S = n(842272),
    I = n(486731),
    b = n(346943),
    v = n(55826),
    j = n(218776),
    A = n(414653),
    O = n(297141),
    R = n(26517),
    P = n(93125),
    D = n(278583);
let y = new Map([
    ['BG', l],
    ['CZ', c],
    ['HU', p],
    ['RO', R],
    ['SE', P],
    ['CY', o],
    ['EE', u],
    ['IS', C],
    ['IE', E],
    ['LV', I],
    ['LI', T],
    ['LT', N],
    ['LU', S],
    ['MT', b],
    ['SK', n(814437)],
    ['SI', D],
    ['GR', x],
    ['FI', g],
    ['PT', O],
    ['NO', j],
    ['BE', r],
    ['AT', s],
    ['CH', a],
    ['FR', h],
    ['DE', d],
    ['ES', m],
    ['IT', f],
    ['NL', v],
    ['PL', A],
    ['HR', _]
]);
function Z(e) {
    let { className: t, countryCode: n } = e;
    if (null == n || !y.has(n)) return null;
    let s = y.get(n);
    return (0, i.jsx)('img', {
        className: t,
        'aria-hidden': !0,
        alt: 'Wumpus holding a country-specific flag',
        src: s
    });
}
