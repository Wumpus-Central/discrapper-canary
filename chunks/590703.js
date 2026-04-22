"use strict";
n.d(t, { Ay: () => E, Gc: () => _.Gc, Vg: () => f });
var r = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(735438),
    o = n(311907),
    l = n(544028),
    u = n(617617),
    d = n(467135),
    c = n(47671),
    _ = n(153469);
let f = "data-client-themes";
function E() {
    let e,
        t =
            ((e = (0, o.bG)([c.A], () => c.A.gradientPreset)),
            r.useMemo(() => {
                if (null == e) return null;
                let t = c.A.getLinearGradient();
                return null == t ? null : (0, _.hm)(e, t);
            }, [e])),
        n = (function () {
            let e = (0, o.bG)([l.A], () => l.A.theme),
                { colors: t, chassisMixAmount: n, gradientAngle: i, setAll: s } = (0, d.ko)(),
                c = (0, o.bG)([u.A], () => u.A.settings.appearance?.clientThemeSettings?.customUserThemeSettings),
                f = r.useRef(void 0);
            return (
                r.useEffect(() => {
                    (0, a.isEqual)(c, f.current) ||
                        ((f.current = c),
                        s({
                            colors: c?.colors ?? [],
                            gradientAngle: c?.gradientAngle ?? 0,
                            chassisMixAmount: c?.baseMix ?? d.kJ,
                        }));
                }, [c, s]),
                r.useMemo(() => (0 === t.length ? null : (0, _.dY)(t, i, n, e)), [t, n, i, e])
            );
        })();
    return null != n
        ? { clientThemesCSS: n, clientThemesClassName: s()(_.Gc, _.hK) }
        : null === t
          ? { clientThemesCSS: "", clientThemesClassName: "" }
          : { clientThemesCSS: t, clientThemesClassName: _.Gc };
}
