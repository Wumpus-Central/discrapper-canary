n.d(t, {
    Ay: () => m,
    Gc: () => f.Gc,
    Vg: () => p,
});
var r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(735438),
    o = n(311907),
    l = n(544028),
    c = n(617617),
    u = n(467135),
    d = n(47671),
    f = n(153469);
let p = "data-client-themes",
    _ = () => {
        let e = (0, o.bG)([d.A], () => d.A.gradientPreset);
        return r.useMemo(() => {
            if (null == e) return null;
            let t = d.A.getLinearGradient();
            return null == t ? null : (0, f.hm)(e, t);
        }, [e]);
    };
function h() {
    let e = (0, o.bG)([l.A], () => l.A.theme),
        { colors: t, chassisMixAmount: n, gradientAngle: i, setAll: a } = (0, u.ko)(),
        d = (0, o.bG)([c.A], () => {
            var e, t;
            return null == (t = c.A.settings.appearance) || null == (e = t.clientThemeSettings)
                ? void 0
                : e.customUserThemeSettings;
        }),
        p = r.useRef(void 0);
    return (
        r.useEffect(() => {
            if (!(0, s.isEqual)(d, p.current)) {
                var e, t, n;
                (p.current = d),
                    a({
                        colors: null != (e = null == d ? void 0 : d.colors) ? e : [],
                        gradientAngle: null != (t = null == d ? void 0 : d.gradientAngle) ? t : 0,
                        chassisMixAmount: null != (n = null == d ? void 0 : d.baseMix) ? n : u.kJ,
                    });
            }
        }, [d, a]),
        r.useMemo(() => (0 === t.length ? null : (0, f.dY)(t, i, n, e)), [t, n, i, e])
    );
}
function m() {
    let e = _(),
        t = h();
    return null != t
        ? {
              clientThemesCSS: t,
              clientThemesClassName: a()(f.Gc, f.hK),
          }
        : null === e
          ? {
                clientThemesCSS: "",
                clientThemesClassName: "",
            }
          : {
                clientThemesCSS: e,
                clientThemesClassName: f.Gc,
            };
}
