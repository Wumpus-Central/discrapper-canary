n.d(t, {
    PQ: () => m,
    ZP: () => y,
    e3: () => g
}),
    n(388685),
    n(539854);
var r = n(73800),
    i = n(688619),
    a = n.n(i),
    o = n(392711),
    s = n(691324),
    l = n(442837),
    c = n(780384),
    u = n(210887),
    d = n(581883),
    f = n(233398),
    _ = n(514361),
    p = n(629935),
    h = n(803038);
let m = 'data-client-themes',
    g = 'custom-theme-background',
    E = () => {
        let e = (0, l.e7)([_.Z], () => _.Z.gradientPreset);
        return r.useMemo(() => {
            if (null == e) return null;
            let t = _.Z.getLinearGradient();
            if (null == t) return null;
            let n = s.b[e.colors[0].token].hex,
                r = s.b[e.colors[e.colors.length - 1].token].hex,
                i = (0, p.W4)({
                    enabled: !0,
                    primaryColor: n,
                    secondaryColor: r,
                    isDarkTheme: (0, c.wj)(e.theme)
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
            return '.'.concat(g, ' {\n      --custom-theme-background: ').concat(t, ';\n      --custom-theme-primary-color: ').concat(n, ';\n      --custom-theme-secondary-color: ').concat(r, ';\n      ').concat(a, '\n    }');
        }, [e]);
    },
    b = () => {
        let e = h.M.useExperiment({ location: 'RootThemeContextProvider' }).enabled,
            t = (0, l.e7)([u.Z], () => u.Z.theme),
            { colors: n, chassisMixAmount: i, gradientAngle: s, setAll: _ } = (0, f.Ig)(),
            m = (0, l.e7)([d.Z], () => {
                var e, t;
                return null == (t = d.Z.settings.appearance) || null == (e = t.clientThemeSettings) ? void 0 : e.customUserThemeSettings;
            }),
            E = r.useRef(void 0);
        return (
            r.useEffect(() => {
                if (!(0, o.isEqual)(m, E.current)) {
                    var e, t, n;
                    (E.current = m),
                        _({
                            colors: null != (e = null == m ? void 0 : m.colors) ? e : [],
                            gradientAngle: null != (t = null == m ? void 0 : m.gradientAngle) ? t : 0,
                            chassisMixAmount: null != (n = null == m ? void 0 : m.baseMix) ? n : f.BH
                        });
                }
            }, [m, _]),
            r.useMemo(() => {
                if (!e || 0 === n.length) return null;
                let r = n.slice();
                1 === n.length && r.push(n[0]);
                let o = n.map((e) => {
                        let t = a()(e).rgb();
                        return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2];
                    }),
                    l = a()(n[o.indexOf(Math.min(...o))]),
                    u = a()(n[o.indexOf(Math.max(...o))]),
                    d = 'linear-gradient('.concat(s, 'deg, ').concat(r.join(', '), ')'),
                    f = (0, c.wj)(t),
                    _ = a()(u).set('hsl.s', 1).set('hsl.l', 0.9),
                    h = a()(l).set('hsl.s', 1).set('hsl.l', 0.05),
                    m = 100 - i;
                return '.'
                    .concat(g, ' {\n      --custom-theme-background: ')
                    .concat(d, ';\n      --custom-bg-overlay-opacity-chat-base-light: 0.95;\n      --custom-bg-overlay-opacity-floating-base-light: 1.0;\n      --theme-bg-overlay-opacity-mix-amount: ')
                    .concat(((30 + 0.7 * m) / 100).toFixed(2), ';\n      ')
                    .concat(p.LN, ': ')
                    .concat(f ? (25 + 0.35 * m).toFixed(1) : (30 - 0.2 * i).toFixed(1), '%;\n      ')
                    .concat(p.Po, ': ')
                    .concat(_.css(), ';\n      ')
                    .concat(p.ej, ': ')
                    .concat((0, p.dw)(_), ';\n      ')
                    .concat(p.jX, ': ')
                    .concat(h.css(), ';\n      ')
                    .concat(p.i4, ': ')
                    .concat((0, p.dw)(h), ';\n      --theme-border-color-amount: 15%;\n      ')
                    .concat(p.uv, ': ')
                    .concat(
                        a()(u)
                            .set('hsl.l', ((0.05 * m) / 100).toFixed(2))
                            .css(),
                        ';\n      '
                    )
                    .concat(p.Xg, ': ')
                    .concat(
                        a()(l)
                            .set('hsl.l', ((100 - 0.1 * m) / 100).toFixed(2))
                            .css(),
                        ';\n      '
                    )
                    .concat(p.ld, ': ')
                    .concat(f ? 30 : 40, '%;\n      --bg-overlay-selected: unset;\n      --bg-overlay-hover: unset;\n      --bg-overlay-active: unset;\n    }');
            }, [n, i, s, e, t])
        );
    },
    y = () => {
        let e = E(),
            t = b();
        return null != t
            ? {
                  clientThemesCSS: t,
                  clientThemesClassName: g
              }
            : null === e
              ? {
                    clientThemesCSS: '',
                    clientThemesClassName: ''
                }
              : {
                    clientThemesCSS: e,
                    clientThemesClassName: g
                };
    };
