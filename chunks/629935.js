n.d(t, { W4: () => m }), n(47120);
var i = n(688619),
    r = n.n(i);
let a = '--theme-base-color-amount',
    s = '--theme-text-color-amount',
    o = '--theme-base-color-light',
    l = '--theme-text-color-light',
    u = '--theme-base-color-light-hsl',
    c = '--theme-base-color-dark',
    d = '--theme-text-color-dark',
    f = '--theme-base-color-dark-hsl',
    _ = 50,
    p = 38;
function h(e) {
    let { primaryColor: t, secondaryColor: n, isDarkTheme: i } = e,
        a = r()(t),
        s = r()(n),
        [o, l] = a.luminance() > s.luminance() ? [a, s] : [s, a],
        u = l.get('hsl.h');
    (0 === u || Number.isNaN(u)) && (l = o);
    let c = i ? o.set('hsl.s', 1) : l.set('hsl.s', 1),
        d = c.get('hsl.h'),
        f = d >= 200 && d <= 300 ? (i ? 0.8 : 0.25) : i ? 0.95 : 0.15;
    return (
        (c = c.set('hsl.l', f)),
        {
            base: i ? l.set('hsl.s', 1).set('hsl.l', 0.05) : o.set('hsl.s', 1).set('hsl.l', 0.9),
            text: c
        }
    );
}
function m(e) {
    let { enabled: t, primaryColor: n, secondaryColor: i, baseMixAmount: r = _, textMixAmount: m = p } = e,
        { base: E, text: v } = h({
            primaryColor: n,
            secondaryColor: i,
            isDarkTheme: !0
        }),
        { base: y, text: I } = h({
            primaryColor: n,
            secondaryColor: i,
            isDarkTheme: !1
        });
    return {
        [u]: g(y),
        [o]: y.css(),
        [l]: I.css(),
        [f]: g(E),
        [c]: E.css(),
        [d]: v.css(),
        [a]: ''.concat(t ? r : 0, '%'),
        [s]: ''.concat(t ? m : 0, '%'),
        '--bg-overlay-selected': 'unset',
        '--bg-overlay-hover': 'unset',
        '--bg-overlay-active': 'unset'
    };
}
function g(e) {
    let [t, n, i] = e.hsl();
    return ''
        .concat(Number.isNaN(t) ? 0 : t, ' ')
        .concat(100 * n, '% ')
        .concat(100 * i, '%');
}
