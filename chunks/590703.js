"use strict";
n.d(t, { Ay: () => f, Gc: () => _.Gc, Vg: () => h });
var i = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(735438),
    o = n(17928),
    l = n(363195),
    u = n(617617),
    c = n(467135),
    d = n(47671),
    _ = n(153469);
let h = "data-client-themes";
function f() {
    let e,
        t =
            ((e = (0, o.bG)([d.A], () => d.A.gradientPreset)),
            i.useMemo(() => {
                if (null == e) return null;
                let t = d.A.getLinearGradient();
                return null == t ? null : (0, _.hm)(e, t);
            }, [e])),
        n = (function () {
            let e = (0, o.bG)([l.A], () => l.A.theme),
                { colors: t, chassisMixAmount: n, gradientAngle: r, setAll: s } = (0, c.ko)(),
                d = (0, o.bG)([u.A], () => u.A.settings.appearance?.clientThemeSettings?.customUserThemeSettings),
                h = i.useRef(void 0);
            return (
                i.useEffect(() => {
                    (0, a.isEqual)(d, h.current) ||
                        ((h.current = d),
                        s({
                            colors: d?.colors ?? [],
                            gradientAngle: d?.gradientAngle ?? 0,
                            chassisMixAmount: d?.baseMix ?? c.kJ,
                        }));
                }, [d, s]),
                i.useMemo(() => (0 === t.length ? null : (0, _.dY)(t, r, n, e)), [t, n, r, e])
            );
        })();
    return null != n
        ? { clientThemesCSS: n, clientThemesClassName: s()(_.Gc, _.hK) }
        : null === t
          ? { clientThemesCSS: "", clientThemesClassName: "" }
          : { clientThemesCSS: t, clientThemesClassName: _.Gc };
}
