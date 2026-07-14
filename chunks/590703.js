o.d(t, { Ay: () => O, Gc: () => _.Gc, Vg: () => T });
var l = o(64700),
    r = o(503698),
    s = o.n(r),
    n = o(735438),
    a = o(17928),
    c = o(793943),
    i = o(476931),
    u = o(875317),
    m = o(363195),
    h = o(617617),
    E = o(467135),
    d = o(147248),
    _ = o(153469);
let T = "data-client-themes";
function A(e) {
    return { clientThemesCSS: e, clientThemesClassName: s()(_.Gc, _.hK) };
}
function O() {
    let e,
        t = (0, a.bG)([m.A], () => m.A.theme),
        o = (0, u.Q)(),
        r = l.useMemo(() => {
            if (null == o) return null;
            if ("custom" === o.type) {
                let e = o.customUserThemeSettings,
                    l = e.colors[0];
                return null == l ? null : (0, _.dY)([...(0, i.kI)(l, t)], e.gradientAngle ?? 0, e.baseMix ?? i.BC, t);
            }
            let e = (0, i.oE)(o.preset, t);
            return (0, _.dY)(
                e.colors.map((e) => {
                    let { hex: t } = e;
                    return t;
                }),
                e.angle,
                e.baseMix,
                t,
            );
        }, [o, t]),
        T = l.useMemo(() => (null == o ? "" : s()(_.Gc, _.hK)), [o]),
        O =
            ((e = (0, a.bG)([d.A], () => d.A.gradientPreset)),
            l.useMemo(() => {
                if (null == e) return null;
                let t = d.A.getLinearGradient();
                return null == t ? null : (0, _.hm)(e, t);
            }, [e])),
        g = (function () {
            let e = (0, a.bG)([m.A], () => m.A.theme),
                { colors: t, chassisMixAmount: o, gradientAngle: r, setAll: s } = (0, E.ko)(),
                c = (0, a.bG)([h.A], () => h.A.settings.appearance?.clientThemeSettings?.customUserThemeSettings),
                i = l.useRef(void 0);
            return (
                l.useEffect(() => {
                    (0, n.isEqual)(c, i.current) ||
                        ((i.current = c),
                        s({
                            colors: c?.colors ?? [],
                            gradientAngle: c?.gradientAngle ?? 0,
                            chassisMixAmount: c?.baseMix ?? E.kJ,
                        }));
                }, [c, s]),
                l.useMemo(() => (0 === t.length ? null : (0, _.dY)(t, r, o, e)), [t, o, r, e])
            );
        })();
    return (function (e) {
        let {
            guildCSS: t,
            guildClassName: o,
            customThemeColorCSS: l,
            backgroundGradientCSS: r,
            isCustomThemePreviewActive: s,
            isClientThemesEditorPreviewActive: n,
        } = e;
        return s && null != l
            ? A(l)
            : n && null != r
              ? { clientThemesCSS: r, clientThemesClassName: _.Gc }
              : null != t
                ? { clientThemesCSS: t, clientThemesClassName: o }
                : null != l
                  ? A(l)
                  : null == r
                    ? { clientThemesCSS: "", clientThemesClassName: "" }
                    : { clientThemesCSS: r, clientThemesClassName: _.Gc };
    })({
        guildCSS: r,
        guildClassName: T,
        customThemeColorCSS: g,
        backgroundGradientCSS: O,
        isCustomThemePreviewActive: (0, c.fy)((e) => e.activePanel === c.HP.CUSTOM_THEME),
        isClientThemesEditorPreviewActive: (0, c.fy)((e) => e.activePanel === c.HP.CLIENT_THEMES),
    });
}
