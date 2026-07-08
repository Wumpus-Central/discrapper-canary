"use strict";
n.d(t, { Ay: () => p, Gc: () => h.Gc, Vg: () => I });
var i = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(735438),
    l = n(17928),
    o = n(793943),
    d = n(476931),
    c = n(875317),
    u = n(363195),
    _ = n(617617),
    E = n(467135),
    A = n(147248),
    h = n(153469);
let I = "data-client-themes";
function f(e) {
    return { clientThemesCSS: e, clientThemesClassName: a()(h.Gc, h.hK) };
}
function p() {
    let e,
        t = (0, l.bG)([u.A], () => u.A.theme),
        n = (0, c.Q)(),
        r = i.useMemo(() => {
            if (null == n) return null;
            if ("custom" === n.type) {
                let e = n.customUserThemeSettings,
                    i = e.colors[0];
                return null == i ? null : (0, h.dY)([...(0, d.kI)(i, t)], e.gradientAngle ?? 0, e.baseMix ?? d.BC, t);
            }
            let e = (0, d.oE)(n.preset, t);
            return (0, h.dY)(
                e.colors.map((e) => {
                    let { hex: t } = e;
                    return t;
                }),
                e.angle,
                e.baseMix,
                t,
            );
        }, [n, t]),
        I = i.useMemo(() => (null == n ? "" : a()(h.Gc, h.hK)), [n]),
        p =
            ((e = (0, l.bG)([A.A], () => A.A.gradientPreset)),
            i.useMemo(() => {
                if (null == e) return null;
                let t = A.A.getLinearGradient();
                return null == t ? null : (0, h.hm)(e, t);
            }, [e])),
        T = (function () {
            let e = (0, l.bG)([u.A], () => u.A.theme),
                { colors: t, chassisMixAmount: n, gradientAngle: r, setAll: a } = (0, E.ko)(),
                o = (0, l.bG)([_.A], () => _.A.settings.appearance?.clientThemeSettings?.customUserThemeSettings),
                d = i.useRef(void 0);
            return (
                i.useEffect(() => {
                    (0, s.isEqual)(o, d.current) ||
                        ((d.current = o),
                        a({
                            colors: o?.colors ?? [],
                            gradientAngle: o?.gradientAngle ?? 0,
                            chassisMixAmount: o?.baseMix ?? E.kJ,
                        }));
                }, [o, a]),
                i.useMemo(() => (0 === t.length ? null : (0, h.dY)(t, r, n, e)), [t, n, r, e])
            );
        })();
    return (function (e) {
        let {
            guildCSS: t,
            guildClassName: n,
            customThemeColorCSS: i,
            backgroundGradientCSS: r,
            isCustomThemePreviewActive: a,
            isClientThemesEditorPreviewActive: s,
        } = e;
        return a && null != i
            ? f(i)
            : s && null != r
              ? { clientThemesCSS: r, clientThemesClassName: h.Gc }
              : null != t
                ? { clientThemesCSS: t, clientThemesClassName: n }
                : null != i
                  ? f(i)
                  : null == r
                    ? { clientThemesCSS: "", clientThemesClassName: "" }
                    : { clientThemesCSS: r, clientThemesClassName: h.Gc };
    })({
        guildCSS: r,
        guildClassName: I,
        customThemeColorCSS: T,
        backgroundGradientCSS: p,
        isCustomThemePreviewActive: (0, o.fy)((e) => e.activePanel === o.HP.CUSTOM_THEME),
        isClientThemesEditorPreviewActive: (0, o.fy)((e) => e.activePanel === o.HP.CLIENT_THEMES),
    });
}
