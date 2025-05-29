n.d(t, {
    PQ: () => p,
    ZP: () => E,
    e3: () => h
}),
    n(388685),
    n(539854);
var r = n(73800),
    i = n(688619),
    a = n.n(i),
    o = n(691324),
    s = n(442837),
    l = n(780384),
    c = n(210887),
    u = n(233398),
    d = n(514361),
    f = n(629935),
    _ = n(803038);
let p = 'data-client-themes',
    h = 'custom-theme-background',
    m = () => {
        let e = (0, s.e7)([d.Z], () => d.Z.gradientPreset);
        return (0, r.useMemo)(() => {
            if (null == e) return null;
            let t = d.Z.getLinearGradient();
            if (null == t) return null;
            let n = o.b[e.colors[0].token].hex,
                r = o.b[e.colors[e.colors.length - 1].token].hex,
                i = (0, f.W4)({
                    enabled: !0,
                    primaryColor: n,
                    secondaryColor: r,
                    isDarkTheme: (0, l.wj)(e.theme)
                }),
                a = '\n      '.concat(
                    Object.entries(i)
                        .map((e) => {
                            let [t, n] = e;
                            return ''.concat(t, ': ').concat(n, ';');
                        })
                        .join('\n'),
                    '\n    '
                );
            return '.'.concat(h, ' {\n      --custom-theme-background: ').concat(t, ';\n      --custom-theme-primary-color: ').concat(n, ';\n      --custom-theme-secondary-color: ').concat(r, ';\n      ').concat(a, '\n    }');
        }, [e]);
    },
    g = () => {
        let e = _.M.useExperiment({ location: 'RootThemeContextProvider' }).enabled,
            t = (0, s.e7)([c.Z], () => c.Z.theme),
            { colors: n, chassisMixAmount: i, gradientAngle: o } = (0, u.I)();
        return (0, r.useMemo)(() => {
            if (!e || 0 === n.length) return null;
            let r = n.slice();
            1 === n.length && r.push(n[0]);
            let s = n.map((e) => {
                    let t = a()(e).rgb();
                    return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2];
                }),
                c = a()(n[s.indexOf(Math.min(...s))]),
                u = a()(n[s.indexOf(Math.max(...s))]),
                d = 'linear-gradient('.concat(o, 'deg, ').concat(r.join(', '), ')'),
                _ = (0, l.wj)(t),
                p = a()(u).set('hsl.s', 1).set('hsl.l', 0.9),
                m = a()(c).set('hsl.s', 1).set('hsl.l', 0.05);
            return '.'
                .concat(h, ' {\n      --custom-theme-background: ')
                .concat(d, ';\n      --theme-bg-overlay-opacity-mix-amount: ')
                .concat(((30 + 0.7 * i) / 100).toFixed(2), ';\n      ')
                .concat(f.LN, ': ')
                .concat(_ ? (25 + 0.35 * i).toFixed(1) : (30 - 0.2 * i).toFixed(1), '%;\n      ')
                .concat(f.Po, ': ')
                .concat(p.css(), ';\n      ')
                .concat(f.ej, ': ')
                .concat((0, f.dw)(p), ';\n      ')
                .concat(f.jX, ': ')
                .concat(m.css(), ';\n      ')
                .concat(f.i4, ': ')
                .concat((0, f.dw)(m), ';\n      --theme-border-color-amount: 15%;\n      ')
                .concat(f.uv, ': ')
                .concat(
                    a()(u)
                        .set('hsl.l', ((0.05 * i) / 100).toFixed(2))
                        .css(),
                    ';\n      '
                )
                .concat(f.Xg, ': ')
                .concat(
                    a()(c)
                        .set('hsl.l', ((100 - 0.1 * i) / 100).toFixed(2))
                        .css(),
                    ';\n      '
                )
                .concat(f.ld, ': ')
                .concat(_ ? 30 : 40, '%\n    }');
        }, [n, i, o, e, t]);
    },
    E = () => {
        let e = m(),
            t = g();
        return null != t
            ? {
                  clientThemesCSS: t,
                  clientThemesClassName: h
              }
            : null === e
              ? {
                    clientThemesCSS: '',
                    clientThemesClassName: ''
                }
              : {
                    clientThemesCSS: e,
                    clientThemesClassName: h
                };
    };
