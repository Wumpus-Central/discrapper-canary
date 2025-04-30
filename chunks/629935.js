n.d(t, { W4: () => m }), n(388685);
var r = n(688619),
    i = n.n(r);
let a = '--theme-base-color-amount',
    o = '--theme-text-color-amount',
    s = '--theme-base-color-light',
    l = '--theme-text-color-light',
    c = '--theme-base-color-light-hsl',
    u = '--theme-base-color-dark',
    d = '--theme-text-color-dark',
    f = '--theme-base-color-dark-hsl',
    _ = 50,
    p = 38;
function h(e) {
    let { primaryColor: t, secondaryColor: n, isDarkTheme: r } = e,
        a = i()(t),
        o = i()(n),
        [s, l] = a.luminance() > o.luminance() ? [a, o] : [o, a],
        c = l.get('hsl.h');
    (0 === c || Number.isNaN(c)) && (l = s);
    let u = r ? s.set('hsl.s', 1) : l.set('hsl.s', 1),
        d = u.get('hsl.h'),
        f = d >= 200 && d <= 300 ? (r ? 0.8 : 0.25) : r ? 0.95 : 0.15;
    return (
        (u = u.set('hsl.l', f)),
        {
            base: r ? l.set('hsl.s', 1).set('hsl.l', 0.05) : s.set('hsl.s', 1).set('hsl.l', 0.9),
            text: u
        }
    );
}
function m(e) {
    let { enabled: t, primaryColor: n, secondaryColor: r, baseMixAmount: i = _, textMixAmount: m = p } = e,
        { base: E, text: b } = h({
            primaryColor: n,
            secondaryColor: r,
            isDarkTheme: !0
        }),
        { base: y, text: O } = h({
            primaryColor: n,
            secondaryColor: r,
            isDarkTheme: !1
        });
    return {
        [c]: g(y),
        [s]: y.css(),
        [l]: O.css(),
        [f]: g(E),
        [u]: E.css(),
        [d]: b.css(),
        [a]: ''.concat(t ? i : 0, '%'),
        [o]: ''.concat(t ? m : 0, '%'),
        '--bg-overlay-selected': 'unset',
        '--bg-overlay-hover': 'unset',
        '--bg-overlay-active': 'unset'
    };
}
function g(e) {
    let [t, n, r] = e.hsl();
    return ''
        .concat(Number.isNaN(t) ? 0 : t, ' ')
        .concat(100 * n, '% ')
        .concat(100 * r, '%');
}
