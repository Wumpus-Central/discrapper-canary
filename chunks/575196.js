(n.d(t, {
    e3: () => l,
    gj: () => O,
    yf: () => v
}),
    n(539854),
    n(388685));
var r = n(688619),
    i = n.n(r),
    a = n(691324),
    o = n(780384),
    s = n(629935);
let l = 'custom-theme-background',
    c = 0.05,
    u = 0.9,
    d = 30,
    f = 0.7,
    _ = 60,
    p = 0.4,
    h = 30,
    m = -0.2,
    g = 30,
    E = 40,
    b = 0.1,
    y = 0.05;
function O(e, t, n, r) {
    let a = e.slice();
    1 === e.length && a.push(e[0]);
    let O = e.map((e) => i()(e).luminance()),
        v = i()(e[O.indexOf(Math.min(...O))]),
        I = i()(e[O.indexOf(Math.max(...O))]),
        T = 'linear-gradient('.concat(t, 'deg, ').concat(a.join(', '), ')'),
        S = (0, o.wj)(r),
        A = {
            light: i()(I).set('hsl.s', 1).set('hsl.l', u),
            dark: i()(v).set('hsl.s', 1).set('hsl.l', c)
        },
        N = 100 - n,
        C = '\n      --custom-theme-background: '.concat(T, ';\n      ', '--custom-background-gradient-chat-opacity-base-light', ': 0.95;\n      ', '--custom-background-gradient-highest-opacity-base-light', ': 1.0;\n      ', '--custom-background-gradient-opacity-mix-amount', ': ').concat(((d + f * N) / 100).toFixed(2), ';\n      ', '--custom-theme-border-color-amount', ': 5%;\n      '),
        R = S
            ? '\n      '
                  .concat(s.Yk.THEME_BASE_MIX_AMOUNT, ': ')
                  .concat(_ + p * N, '%;\n      ')
                  .concat(s.Yk.THEME_TEXT_MIX_AMOUNT, ': ')
                  .concat(g, '%;\n    ')
            : '\n      '
                  .concat(s.Yk.THEME_BASE_MIX_AMOUNT, ': ')
                  .concat(h + m * n, '%;\n      ')
                  .concat(s.Yk.THEME_TEXT_MIX_AMOUNT, ': ')
                  .concat(E, '%;\n    '),
        P = '\n      '
            .concat(s.Yk.DARK_THEME_BASE_COLOR, ': ')
            .concat(A.dark.css(), ';\n      ')
            .concat(s.Yk.DARK_THEME_BASE_COLOR_HSL, ': ')
            .concat((0, s.dw)(A.dark), ';\n      ')
            .concat(s.Yk.DARK_THEME_TEXT_COLOR, ': ')
            .concat(
                i()(v)
                    .set('hsl.l', ((100 - b * N) / 100).toFixed(2))
                    .css(),
                ';\n    '
            ),
        w = '\n      '
            .concat(s.Yk.LIGHT_THEME_BASE_COLOR, ': ')
            .concat(A.light.css(), ';\n      ')
            .concat(s.Yk.LIGHT_THEME_BASE_COLOR_HSL, ': ')
            .concat((0, s.dw)(A.light), ';\n      ')
            .concat(s.Yk.LIGHT_THEME_TEXT_COLOR, ': ')
            .concat(
                i()(I)
                    .set('hsl.l', ((y * N) / 100).toFixed(2))
                    .css(),
                ';\n    '
            );
    return '.'.concat(l, ' {\n      ').concat(C, '\n      ').concat(R, '\n      ').concat(P, '\n      ').concat(w, '\n      }');
}
function v(e, t) {
    let n = a.b[e.colors[0].token].hex,
        r = a.b[e.colors[e.colors.length - 1].token].hex,
        i = (0, s.W4)({
            enabled: !0,
            primaryColor: n,
            secondaryColor: r,
            isDarkTheme: (0, o.wj)(e.theme)
        }),
        c = '\n      '.concat(
            Object.entries(i)
                .map((e) => {
                    let [t, n] = e;
                    return ''.concat(t, ': ').concat(n, ';');
                })
                .join('\n'),
            '\n    '
        );
    return '.'.concat(l, ' {\n      ', '--custom-theme-background', ': ').concat(t, ';\n      ', '--custom-theme-primary-color', ': ').concat(n, ';\n      ', '--custom-theme-secondary-color', ': ').concat(r, ';\n      ').concat(c, '\n    }');
}
