r.d(t, { Ay: () => b, Gc: () => A.Gc, Vg: () => g });
var o = r(582128),
    l = r(503698),
    s = r.n(l),
    n = r(435558),
    i = r(17928),
    a = r(793943),
    c = r(476931),
    u = r(875317),
    m = r(363195),
    h = r(253932),
    d = r(141343),
    E = r(843010),
    _ = r(467135),
    T = r(147248),
    A = r(698387);
let g = "data-client-themes";
function O(e) {
    return { colors: e?.colors ?? [], gradientAngle: e?.gradientAngle ?? 0, chassisMixAmount: e?.baseMix ?? _.kJ };
}
function M(e) {
    return { clientThemesCSS: e, clientThemesClassName: s()(A.Gc, A.hK) };
}
function b() {
    let e,
        t = (0, i.bG)([m.A], () => m.A.theme),
        r = (0, u.Q)(),
        l = o.useMemo(() => {
            if (null == r) return null;
            if ("custom" === r.type) {
                let e = r.customUserThemeSettings,
                    o = e.colors[0];
                return null == o ? null : (0, A.dY)([...(0, c.kI)(o, t)], e.gradientAngle ?? 0, e.baseMix ?? c.BC, t);
            }
            let e = (0, c.oE)(r.preset, t);
            return (0, A.dY)(
                e.colors.map((e) => {
                    let { hex: t } = e;
                    return t;
                }),
                e.angle,
                e.baseMix,
                t,
            );
        }, [r, t]),
        g = o.useMemo(() => (null == r ? "" : s()(A.Gc, A.hK)), [r]),
        b =
            ((e = (0, i.bG)([T.A], () => T.A.gradientPreset)),
            o.useMemo(() => {
                if (null == e) return null;
                let t = T.A.getLinearGradient();
                return null == t ? null : (0, A.hm)(e, t);
            }, [e])),
        f = (0, E.G)(),
        R = (function (e) {
            let t = (0, i.bG)([m.A], () => m.A.theme),
                { colors: r, chassisMixAmount: l, gradientAngle: s, setAll: a } = (0, _.ko)(),
                c = h.eh.useSetting().customUserThemeSettings,
                u = o.useRef(void 0);
            return (
                o.useEffect(() => {
                    (0, n.isEqual)(c, u.current) || ((u.current = c), a(O(c)));
                }, [c, a]),
                o.useMemo(() => {
                    let {
                        colors: o,
                        chassisMixAmount: n,
                        gradientAngle: i,
                    } = (function (e) {
                        let { draft: t, customThemesSettings: r, isUserSettingsOpen: o } = e;
                        return o ? O(r) : t;
                    })({
                        draft: { colors: r, chassisMixAmount: l, gradientAngle: s },
                        customThemesSettings: c,
                        isUserSettingsOpen: e,
                    });
                    return 0 === o.length ? null : (0, A.dY)(o, i, n, t);
                }, [r, l, s, c, e, t])
            );
        })(f),
        p = (0, a.fy)((e) => e.activePanel === a.HP.CUSTOM_THEME),
        L = (0, a.fy)((e) => e.activePanel === a.HP.CLIENT_THEMES);
    return (function (e) {
        let {
                guildCSS: t,
                guildClassName: r,
                customThemeColorCSS: o,
                backgroundGradientCSS: l,
                isCustomThemePreviewActive: s,
                isClientThemesEditorPreviewActive: n,
                isPerModeThemingActive: i,
                isNitroLocked: a,
                isUserSettingsOpen: c,
            } = e,
            u = !(i && !a) && !c;
        return s && u && null != o
            ? M(o)
            : n && u && null != l
              ? { clientThemesCSS: l, clientThemesClassName: A.Gc }
              : null != t
                ? { clientThemesCSS: t, clientThemesClassName: r }
                : null == o || i
                  ? null == l
                      ? { clientThemesCSS: "", clientThemesClassName: "" }
                      : { clientThemesCSS: l, clientThemesClassName: A.Gc }
                  : M(o);
    })({
        guildCSS: l,
        guildClassName: g,
        customThemeColorCSS: R,
        backgroundGradientCSS: b,
        isCustomThemePreviewActive: p,
        isClientThemesEditorPreviewActive: L,
        isPerModeThemingActive: (0, d.V)(),
        isNitroLocked: (0, i.bG)([T.A], () => T.A.isPreview),
        isUserSettingsOpen: f,
    });
}
