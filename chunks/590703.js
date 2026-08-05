"use strict";
n.d(t, { Ay: () => T, Gc: () => I.Gc, Vg: () => f });
var i = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(435558),
    l = n(17928),
    o = n(793943),
    d = n(476931),
    c = n(875317),
    u = n(363195),
    _ = n(617617),
    E = n(141343),
    A = n(467135),
    h = n(147248),
    I = n(153469);
let f = "data-client-themes";
function p(e) {
    return { clientThemesCSS: e, clientThemesClassName: a()(I.Gc, I.hK) };
}
function T() {
    let e,
        t = (0, l.bG)([u.A], () => u.A.theme),
        n = (0, c.Q)(),
        r = i.useMemo(() => {
            if (null == n) return null;
            if ("custom" === n.type) {
                let e = n.customUserThemeSettings,
                    i = e.colors[0];
                return null == i ? null : (0, I.dY)([...(0, d.kI)(i, t)], e.gradientAngle ?? 0, e.baseMix ?? d.BC, t);
            }
            let e = (0, d.oE)(n.preset, t);
            return (0, I.dY)(
                e.colors.map((e) => {
                    let { hex: t } = e;
                    return t;
                }),
                e.angle,
                e.baseMix,
                t,
            );
        }, [n, t]),
        f = i.useMemo(() => (null == n ? "" : a()(I.Gc, I.hK)), [n]),
        T =
            ((e = (0, l.bG)([h.A], () => h.A.gradientPreset)),
            i.useMemo(() => {
                if (null == e) return null;
                let t = h.A.getLinearGradient();
                return null == t ? null : (0, I.hm)(e, t);
            }, [e])),
        m = (function () {
            let e = (0, l.bG)([u.A], () => u.A.theme),
                { colors: t, chassisMixAmount: n, gradientAngle: r, setAll: a } = (0, A.ko)(),
                o = (0, l.bG)([_.A], () => _.A.settings.appearance?.clientThemeSettings?.customUserThemeSettings),
                d = i.useRef(void 0);
            return (
                i.useEffect(() => {
                    (0, s.isEqual)(o, d.current) ||
                        ((d.current = o),
                        a({
                            colors: o?.colors ?? [],
                            gradientAngle: o?.gradientAngle ?? 0,
                            chassisMixAmount: o?.baseMix ?? A.kJ,
                        }));
                }, [o, a]),
                i.useMemo(() => (0 === t.length ? null : (0, I.dY)(t, r, n, e)), [t, n, r, e])
            );
        })(),
        g = (0, o.fy)((e) => e.activePanel === o.HP.CUSTOM_THEME),
        S = (0, o.fy)((e) => e.activePanel === o.HP.CLIENT_THEMES);
    return (function (e) {
        let {
                guildCSS: t,
                guildClassName: n,
                customThemeColorCSS: i,
                backgroundGradientCSS: r,
                isCustomThemePreviewActive: a,
                isClientThemesEditorPreviewActive: s,
                isPerModeThemingActive: l,
                isNitroLocked: o,
            } = e,
            d = l && !o;
        return a && !d && null != i
            ? p(i)
            : s && !d && null != r
              ? { clientThemesCSS: r, clientThemesClassName: I.Gc }
              : null != t
                ? { clientThemesCSS: t, clientThemesClassName: n }
                : null == i || l
                  ? null == r
                      ? { clientThemesCSS: "", clientThemesClassName: "" }
                      : { clientThemesCSS: r, clientThemesClassName: I.Gc }
                  : p(i);
    })({
        guildCSS: r,
        guildClassName: f,
        customThemeColorCSS: m,
        backgroundGradientCSS: T,
        isCustomThemePreviewActive: g,
        isClientThemesEditorPreviewActive: S,
        isPerModeThemingActive: (0, E.V)(),
        isNitroLocked: (0, l.bG)([h.A], () => h.A.isPreview),
    });
}
