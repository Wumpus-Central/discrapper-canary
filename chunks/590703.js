"use strict";
n.d(t, { Ay: () => h, Gc: () => c.Gc, Vg: () => E });
var i = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(735438),
    o = n(17928),
    l = n(363195),
    d = n(617617),
    _ = n(467135),
    u = n(47671),
    c = n(153469);
let E = "data-client-themes";
function h() {
    let e,
        t =
            ((e = (0, o.bG)([u.A], () => u.A.gradientPreset)),
            i.useMemo(() => {
                if (null == e) return null;
                let t = u.A.getLinearGradient();
                return null == t ? null : (0, c.hm)(e, t);
            }, [e])),
        n = (function () {
            let e = (0, o.bG)([l.A], () => l.A.theme),
                { colors: t, chassisMixAmount: n, gradientAngle: r, setAll: s } = (0, _.ko)(),
                u = (0, o.bG)([d.A], () => d.A.settings.appearance?.clientThemeSettings?.customUserThemeSettings),
                E = i.useRef(void 0);
            return (
                i.useEffect(() => {
                    (0, a.isEqual)(u, E.current) ||
                        ((E.current = u),
                        s({
                            colors: u?.colors ?? [],
                            gradientAngle: u?.gradientAngle ?? 0,
                            chassisMixAmount: u?.baseMix ?? _.kJ,
                        }));
                }, [u, s]),
                i.useMemo(() => (0 === t.length ? null : (0, c.dY)(t, r, n, e)), [t, n, r, e])
            );
        })();
    return null != n
        ? { clientThemesCSS: n, clientThemesClassName: s()(c.Gc, c.hK) }
        : null === t
          ? { clientThemesCSS: "", clientThemesClassName: "" }
          : { clientThemesCSS: t, clientThemesClassName: c.Gc };
}
