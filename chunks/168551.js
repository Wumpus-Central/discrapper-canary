n.d(t, {
    PQ: () => c,
    ZP: () => f,
    e3: () => u
}),
    n(47120);
var r = n(192379),
    i = n(691324),
    o = n(442837),
    a = n(780384),
    s = n(514361),
    l = n(629935);
let c = 'data-client-themes',
    u = 'custom-theme-background',
    d = () => {
        let e = (0, o.e7)([s.Z], () => s.Z.gradientPreset);
        return (0, r.useMemo)(() => {
            if (null == e) return null;
            let t = s.Z.getLinearGradient();
            if (null == t) return null;
            let n = i.b[e.colors[0].token].hex,
                r = i.b[e.colors[e.colors.length - 1].token].hex,
                o = (0, l.W4)({
                    enabled: !0,
                    primaryColor: n,
                    secondaryColor: r,
                    isDarkTheme: (0, a.wj)(e.theme)
                }),
                c = '\n      '.concat(
                    Object.entries(o)
                        .map((e) => {
                            let [t, n] = e;
                            return ''.concat(t, ': ').concat(n, ';');
                        })
                        .join('\n'),
                    '\n    '
                );
            return '.'.concat(u, ' {\n      --custom-theme-background: ').concat(t, ';\n      --custom-theme-primary-color: ').concat(n, ';\n      --custom-theme-secondary-color: ').concat(r, ';\n      ').concat(c, '\n    }');
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
                  clientThemesClassName: u
              };
    };
