"use strict";
n.d(t, { Ay: () => g, Gc: () => p.Gc, Vg: () => E });
var i = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(735438),
    o = n(17928),
    l = n(793943),
    u = n(476931),
    c = n(875317),
    d = n(363195),
    _ = n(617617),
    h = n(467135),
    f = n(47671),
    p = n(153469);
let E = "data-client-themes";
function m(e) {
    return { clientThemesCSS: e, clientThemesClassName: s()(p.Gc, p.hK) };
}
function g() {
    let e,
        t = (0, o.bG)([d.A], () => d.A.theme),
        n = (0, c.Q)(),
        r = i.useMemo(() => {
            if (null == n) return null;
            if ("custom" === n.type) {
                let e = n.customUserThemeSettings,
                    i = e.colors[0];
                return null == i ? null : (0, p.dY)([...(0, u.kI)(i, t)], e.gradientAngle ?? 0, e.baseMix ?? u.BC, t);
            }
            let e = (0, u.oE)(n.preset, t);
            return (0, p.dY)(
                e.colors.map((e) => {
                    let { hex: t } = e;
                    return t;
                }),
                e.angle,
                e.baseMix,
                t,
            );
        }, [n, t]),
        E = i.useMemo(() => (null == n ? "" : s()(p.Gc, p.hK)), [n]),
        g =
            ((e = (0, o.bG)([f.A], () => f.A.gradientPreset)),
            i.useMemo(() => {
                if (null == e) return null;
                let t = f.A.getLinearGradient();
                return null == t ? null : (0, p.hm)(e, t);
            }, [e])),
        A = (function () {
            let e = (0, o.bG)([d.A], () => d.A.theme),
                { colors: t, chassisMixAmount: n, gradientAngle: r, setAll: s } = (0, h.ko)(),
                l = (0, o.bG)([_.A], () => _.A.settings.appearance?.clientThemeSettings?.customUserThemeSettings),
                u = i.useRef(void 0);
            return (
                i.useEffect(() => {
                    (0, a.isEqual)(l, u.current) ||
                        ((u.current = l),
                        s({
                            colors: l?.colors ?? [],
                            gradientAngle: l?.gradientAngle ?? 0,
                            chassisMixAmount: l?.baseMix ?? h.kJ,
                        }));
                }, [l, s]),
                i.useMemo(() => (0 === t.length ? null : (0, p.dY)(t, r, n, e)), [t, n, r, e])
            );
        })();
    return (function (e) {
        let {
            guildCSS: t,
            guildClassName: n,
            customThemeColorCSS: i,
            backgroundGradientCSS: r,
            isCustomThemePreviewActive: s,
            isClientThemesEditorPreviewActive: a,
        } = e;
        return s && null != i
            ? m(i)
            : a && null != r
              ? { clientThemesCSS: r, clientThemesClassName: p.Gc }
              : null != t
                ? { clientThemesCSS: t, clientThemesClassName: n }
                : null != i
                  ? m(i)
                  : null == r
                    ? { clientThemesCSS: "", clientThemesClassName: "" }
                    : { clientThemesCSS: r, clientThemesClassName: p.Gc };
    })({
        guildCSS: r,
        guildClassName: E,
        customThemeColorCSS: A,
        backgroundGradientCSS: g,
        isCustomThemePreviewActive: (0, l.fy)((e) => e.activePanel === l.HP.CUSTOM_THEME),
        isClientThemesEditorPreviewActive: (0, l.fy)((e) => e.activePanel === l.HP.CLIENT_THEMES),
    });
}
