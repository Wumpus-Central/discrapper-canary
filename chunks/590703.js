o.d(t, { Ay: () => g, Gc: () => T.Gc, Vg: () => A });
var r = o(582128),
    l = o(503698),
    s = o.n(l),
    n = o(435558),
    a = o(17928),
    c = o(793943),
    i = o(476931),
    u = o(875317),
    m = o(363195),
    h = o(885386),
    E = o(141343),
    d = o(467135),
    _ = o(147248),
    T = o(153469);
let A = "data-client-themes";
function O(e) {
    return { clientThemesCSS: e, clientThemesClassName: s()(T.Gc, T.hK) };
}
function g() {
    let e,
        t = (0, a.bG)([m.A], () => m.A.theme),
        o = (0, u.Q)(),
        l = r.useMemo(() => {
            if (null == o) return null;
            if ("custom" === o.type) {
                let e = o.customUserThemeSettings,
                    r = e.colors[0];
                return null == r ? null : (0, T.dY)([...(0, i.kI)(r, t)], e.gradientAngle ?? 0, e.baseMix ?? i.BC, t);
            }
            let e = (0, i.oE)(o.preset, t);
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
        g =
            ((e = (0, a.bG)([_.A], () => _.A.gradientPreset)),
            r.useMemo(() => {
                if (null == e) return null;
                let t = _.A.getLinearGradient();
                return null == t ? null : (0, T.hm)(e, t);
            }, [e])),
        M = (function () {
            let e = (0, a.bG)([m.A], () => m.A.theme),
                { colors: t, chassisMixAmount: o, gradientAngle: l, setAll: s } = (0, d.ko)(),
                c = h.eh.useSetting().customUserThemeSettings,
                i = r.useRef(void 0);
            return (
                r.useEffect(() => {
                    (0, n.isEqual)(c, i.current) ||
                        ((i.current = c),
                        s({
                            colors: c?.colors ?? [],
                            gradientAngle: c?.gradientAngle ?? 0,
                            chassisMixAmount: c?.baseMix ?? d.kJ,
                        }));
                }, [c, s]),
                r.useMemo(() => (0 === t.length ? null : (0, T.dY)(t, l, o, e)), [t, o, l, e])
            );
        })(),
        b = (0, c.fy)((e) => e.activePanel === c.HP.CUSTOM_THEME),
        R = (0, c.fy)((e) => e.activePanel === c.HP.CLIENT_THEMES);
    return (function (e) {
        let {
                guildCSS: t,
                guildClassName: o,
                customThemeColorCSS: r,
                backgroundGradientCSS: l,
                isCustomThemePreviewActive: s,
                isClientThemesEditorPreviewActive: n,
                isPerModeThemingActive: a,
                isNitroLocked: c,
            } = e,
            i = a && !c;
        return s && !i && null != r
            ? O(r)
            : n && !i && null != l
              ? { clientThemesCSS: l, clientThemesClassName: T.Gc }
              : null != t
                ? { clientThemesCSS: t, clientThemesClassName: o }
                : null == r || a
                  ? null == l
                      ? { clientThemesCSS: "", clientThemesClassName: "" }
                      : { clientThemesCSS: l, clientThemesClassName: T.Gc }
                  : O(r);
    })({
        guildCSS: l,
        guildClassName: A,
        customThemeColorCSS: M,
        backgroundGradientCSS: g,
        isCustomThemePreviewActive: b,
        isClientThemesEditorPreviewActive: R,
        isPerModeThemingActive: (0, E.V)(),
        isNitroLocked: (0, a.bG)([_.A], () => _.A.isPreview),
    });
}
