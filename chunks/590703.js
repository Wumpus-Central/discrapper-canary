"use strict";
n.d(t, { Ay: () => m, Gc: () => _.Gc, Vg: () => f });
var r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(735438),
    o = n(311907),
    l = n(544028),
    u = n(617617),
    c = n(467135),
    d = n(47671),
    _ = n(153469);
let f = "data-client-themes",
    p = () => {
        let e = (0, o.bG)([d.A], () => d.A.gradientPreset);
        return r.useMemo(() => {
            if (null == e) return null;
            let t = d.A.getLinearGradient();
            return null == t ? null : (0, _.hm)(e, t);
        }, [e]);
    };
function h() {
    let e = (0, o.bG)([l.A], () => l.A.theme),
        { colors: t, chassisMixAmount: n, gradientAngle: i, setAll: a } = (0, c.ko)(),
        d = (0, o.bG)([u.A], () => u.A.settings.appearance?.clientThemeSettings?.customUserThemeSettings),
        f = r.useRef(void 0);
    return (
        r.useEffect(() => {
            (0, s.isEqual)(d, f.current) ||
                ((f.current = d),
                a({
                    colors: d?.colors ?? [],
                    gradientAngle: d?.gradientAngle ?? 0,
                    chassisMixAmount: d?.baseMix ?? c.kJ,
                }));
        }, [d, a]),
        r.useMemo(() => (0 === t.length ? null : (0, _.dY)(t, i, n, e)), [t, n, i, e])
    );
}
function m() {
    let e = p(),
        t = h();
    return null != t
        ? { clientThemesCSS: t, clientThemesClassName: a()(_.Gc, _.hK) }
        : null === e
          ? { clientThemesCSS: "", clientThemesClassName: "" }
          : { clientThemesCSS: e, clientThemesClassName: _.Gc };
}
