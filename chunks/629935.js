r.d(n, {
    W4: function () {
        return E;
    }
});
var i = r(47120);
var a = r(688619),
    o = r.n(a);
let s = '--theme-base-color-amount',
    l = '--theme-text-color-amount',
    u = '--theme-base-color-light',
    c = '--theme-text-color-light',
    d = '--theme-base-color-light-hsl',
    f = '--theme-base-color-dark',
    p = '--theme-text-color-dark',
    h = '--theme-base-color-dark-hsl',
    _ = 50,
    m = 38;
function g(e) {
    let { primaryColor: n, secondaryColor: r, isDarkTheme: i } = e,
        a = o()(n),
        s = o()(r),
        [l, u] = a.luminance() > s.luminance() ? [a, s] : [s, a],
        c = u.get('hsl.h');
    (0 === c || Number.isNaN(c)) && (u = l);
    let d = i ? l.set('hsl.s', 1) : u.set('hsl.s', 1),
        f = d.get('hsl.h'),
        p = f >= 200 && f <= 300 ? (i ? 0.8 : 0.25) : i ? 0.95 : 0.15;
    return (
        (d = d.set('hsl.l', p)),
        {
            base: i ? u.set('hsl.s', 1).set('hsl.l', 0.05) : l.set('hsl.s', 1).set('hsl.l', 0.9),
            text: d
        }
    );
}
function E(e) {
    let { enabled: n, primaryColor: r, secondaryColor: i, baseMixAmount: a = _, textMixAmount: o = m } = e,
        { base: E, text: y } = g({
            primaryColor: r,
            secondaryColor: i,
            isDarkTheme: !0
        }),
        { base: b, text: I } = g({
            primaryColor: r,
            secondaryColor: i,
            isDarkTheme: !1
        });
    return {
        [d]: v(b),
        [u]: b.css(),
        [c]: I.css(),
        [h]: v(E),
        [f]: E.css(),
        [p]: y.css(),
        [s]: ''.concat(n ? a : 0, '%'),
        [l]: ''.concat(n ? o : 0, '%'),
        '--bg-overlay-selected': 'unset',
        '--bg-overlay-hover': 'unset',
        '--bg-overlay-active': 'unset'
    };
}
function v(e) {
    let [n, r, i] = e.hsl();
    return ''
        .concat(Number.isNaN(n) ? 0 : n, ' ')
        .concat(100 * r, '% ')
        .concat(100 * i, '%');
}
