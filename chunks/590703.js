o.d(t, { Ay: () => O, Gc: () => T.Gc, Vg: () => A });
var r = o(582128),
    l = o(503698),
    s = o.n(l),
    n = o(435558),
    a = o(17928),
    i = o(793943),
    c = o(476931),
    u = o(875317),
    m = o(363195),
    h = o(885386),
    d = o(141343),
    E = o(467135),
    _ = o(175734),
    T = o(698387);
let A = "data-client-themes";
function g(e) {
    return { clientThemesCSS: e, clientThemesClassName: s()(T.Gc, T.hK) };
}
function O() {
    let e,
        t = (0, a.bG)([m.A], () => m.A.theme),
        o = (0, u.Q)(),
        l = r.useMemo(() => {
            if (null == o) return null;
            if ("custom" === o.type) {
                let e = o.customUserThemeSettings,
                    r = e.colors[0];
                return null == r ? null : (0, T.dY)([...(0, c.kI)(r, t)], e.gradientAngle ?? 0, e.baseMix ?? c.BC, t);
            }
            let e = (0, c.oE)(o.preset, t);
            return (0, T.dY)(
                e.colors.map((e) => {
                    let { hex: t } = e;
                    return t;
                }),
                e.angle,
                e.baseMix,
                t,
            );
        }, [o, t]),
        A = r.useMemo(() => (null == o ? "" : s()(T.Gc, T.hK)), [o]),
        O =
            ((e = (0, a.bG)([_.A], () => _.A.gradientPreset)),
            r.useMemo(() => {
                if (null == e) return null;
                let t = _.A.getLinearGradient();
                return null == t ? null : (0, T.hm)(e, t);
            }, [e])),
        M = (function () {
            let e = (0, a.bG)([m.A], () => m.A.theme),
                { colors: t, chassisMixAmount: o, gradientAngle: l, setAll: s } = (0, E.ko)(),
                i = h.eh.useSetting().customUserThemeSettings,
                c = r.useRef(void 0);
            return (
                r.useEffect(() => {
                    (0, n.isEqual)(i, c.current) ||
                        ((c.current = i),
                        s({
                            colors: i?.colors ?? [],
                            gradientAngle: i?.gradientAngle ?? 0,
                            chassisMixAmount: i?.baseMix ?? E.kJ,
                        }));
                }, [i, s]),
                r.useMemo(() => (0 === t.length ? null : (0, T.dY)(t, l, o, e)), [t, o, l, e])
            );
        })(),
        b = (0, i.fy)((e) => e.activePanel === i.HP.CUSTOM_THEME),
        R = (0, i.fy)((e) => e.activePanel === i.HP.CLIENT_THEMES);
    return (function (e) {
        let {
                guildCSS: t,
                guildClassName: o,
                customThemeColorCSS: r,
                backgroundGradientCSS: l,
                isCustomThemePreviewActive: s,
                isClientThemesEditorPreviewActive: n,
                isPerModeThemingActive: a,
                isNitroLocked: i,
            } = e,
            c = a && !i;
        return s && !c && null != r
            ? g(r)
            : n && !c && null != l
              ? { clientThemesCSS: l, clientThemesClassName: T.Gc }
              : null != t
                ? { clientThemesCSS: t, clientThemesClassName: o }
                : null == r || a
                  ? null == l
                      ? { clientThemesCSS: "", clientThemesClassName: "" }
                      : { clientThemesCSS: l, clientThemesClassName: T.Gc }
                  : g(r);
    })({
        guildCSS: l,
        guildClassName: A,
        customThemeColorCSS: M,
        backgroundGradientCSS: O,
        isCustomThemePreviewActive: b,
        isClientThemesEditorPreviewActive: R,
        isPerModeThemingActive: (0, d.V)(),
        isNitroLocked: (0, a.bG)([_.A], () => _.A.isPreview),
    });
}
