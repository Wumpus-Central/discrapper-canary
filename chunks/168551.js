n.d(t, {
    PQ: () => u,
    ZP: () => f,
    e3: () => c
}),
    n(47120);
var i = n(192379),
    r = n(691324),
    a = n(442837),
    s = n(780384),
    o = n(514361),
    l = n(629935);
let u = 'data-client-themes',
    c = 'custom-theme-background',
    d = () => {
        let e = (0, a.e7)([o.Z], () => o.Z.gradientPreset);
        return (0, i.useMemo)(() => {
            if (null == e) return null;
            let t = o.Z.getLinearGradient();
            if (null == t) return null;
            let n = r.b[e.colors[0].token].hex,
                i = r.b[e.colors[e.colors.length - 1].token].hex,
                a = (0, l.W4)({
                    enabled: !0,
                    primaryColor: n,
                    secondaryColor: i,
                    isDarkTheme: (0, s.wj)(e.theme)
                }),
                u = '\n      '.concat(
                    Object.entries(a)
                        .map((e) => {
                            let [t, n] = e;
                            return ''.concat(t, ': ').concat(n, ';');
                        })
                        .join('\n'),
                    '\n    '
                );
            return '.'.concat(c, ' {\n      --custom-theme-background: ').concat(t, ';\n      --custom-theme-primary-color: ').concat(n, ';\n      --custom-theme-secondary-color: ').concat(i, ';\n      ').concat(u, '\n    }');
        }, [e]);
    },
    f = () => {
        let e = d();
        return null === e
            ? {
                  clientThemesCSS: '',
                  clientThemesClassName: ''
              }
            : {
                  clientThemesCSS: e,
                  clientThemesClassName: c
              };
    };
