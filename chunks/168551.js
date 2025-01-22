r.d(n, {
    PQ: function () {
        return d;
    },
    e3: function () {
        return f;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(691324),
    s = r(442837),
    l = r(780384),
    u = r(514361),
    c = r(629935);
let d = 'data-client-themes',
    f = 'custom-theme-background',
    p = () => {
        let e = (0, s.e7)([u.Z], () => u.Z.gradientPreset);
        return (0, a.useMemo)(() => {
            if (null == e) return null;
            let n = u.Z.getLinearGradient();
            if (null == n) return null;
            let r = o.b[e.colors[0].token].hex,
                i = o.b[e.colors[e.colors.length - 1].token].hex,
                a = (0, c.W4)({
                    enabled: !0,
                    primaryColor: r,
                    secondaryColor: i,
                    isDarkTheme: (0, l.wj)(e.theme)
                }),
                s = '\n      '.concat(
                    Object.entries(a)
                        .map((e) => {
                            let [n, r] = e;
                            return ''.concat(n, ': ').concat(r, ';');
                        })
                        .join('\n'),
                    '\n    '
                );
            return '.'.concat(f, ' {\n      --custom-theme-background: ').concat(n, ';\n      --custom-theme-primary-color: ').concat(r, ';\n      --custom-theme-secondary-color: ').concat(i, ';\n      ').concat(s, '\n    }');
        }, [e]);
    },
    h = () => {
        let e = p();
        return null === e
            ? {
                  clientThemesCSS: '',
                  clientThemesClassName: ''
              }
            : {
                  clientThemesCSS: e,
                  clientThemesClassName: f
              };
    };
n.ZP = h;
