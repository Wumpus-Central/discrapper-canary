n.d(t, { Z: () => B }), n(47120);
var i = n(200651);
n(192379);
var r = n(319147),
    a = n(306276),
    s = n(510236),
    l = n(133398),
    o = n(722283),
    c = n(298274),
    d = n(569620),
    u = n(16503),
    m = n(64268),
    g = n(697720),
    _ = n(578325),
    p = n(56790),
    f = n(90718),
    h = n(897482),
    x = n(4515),
    E = n(474472),
    C = n(156129),
    b = n(799303),
    v = n(245630),
    T = n(842272),
    N = n(486731),
    I = n(346943),
    R = n(55826),
    j = n(218776),
    S = n(414653),
    A = n(297141),
    P = n(26517),
    Z = n(93125),
    w = n(278583);
let M = new Map([
    ['BG', s],
    ['CZ', c],
    ['HU', h],
    ['RO', P],
    ['SE', Z],
    ['CY', o],
    ['EE', u],
    ['IS', E],
    ['IE', x],
    ['LV', N],
    ['LI', b],
    ['LT', v],
    ['LU', T],
    ['MT', I],
    ['SK', n(814437)],
    ['SI', w],
    ['GR', p],
    ['FI', g],
    ['PT', A],
    ['NO', j],
    ['BE', a],
    ['AT', r],
    ['CH', l],
    ['FR', _],
    ['DE', d],
    ['ES', m],
    ['IT', C],
    ['NL', R],
    ['PL', S],
    ['HR', f]
]);
function B(e) {
    let { className: t, countryCode: n } = e;
    if (null == n || !M.has(n)) return null;
    let r = M.get(n);
    return (0, i.jsx)('img', {
        className: t,
        'aria-hidden': !0,
        alt: 'Wumpus holding a country-specific flag',
        src: r
    });
}
