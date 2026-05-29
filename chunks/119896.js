"use strict";
n.d(t, { Gc: () => A.Gc, Vg: () => I, Ay: () => S });
var i = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(735438),
    o = n(17928),
    l = n(793943),
    u = n(476931),
    c = n(56562),
    d = n(414133),
    _ = n(617617),
    h = n(71393),
    f = n(967198),
    p = n(652215),
    E = n(363195),
    m = n(467135),
    g = n(47671),
    A = n(153469);
let I = "data-client-themes";
function T(e) {
    return { clientThemesCSS: e, clientThemesClassName: s()(A.Gc, A.hK) };
}
function S() {
    let e,
        t = (0, o.bG)([E.A], () => E.A.theme),
        n = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "useActiveGuildThemeForGuildId",
                n = (0, d.OS)(t),
                r = (0, o.bG)([h.A], () => {
                    if (null == e || !n) return null;
                    let t = h.A.getGuild(e);
                    return null != t && t.features.has(p.GuildFeatures.GUILD_THEME) ? t.guildTheme : null;
                }, [e, n]),
                s = (0, o.bG)(
                    [_.A],
                    () => (null != e && n ? _.A.resolveGuildThemeSourcePreference(e) : c.tI.PERSONAL),
                    [e, n],
                );
            return i.useMemo(
                () =>
                    s === c.tI.PERSONAL
                        ? null
                        : r?.enabled !== !0
                          ? null
                          : (function (e) {
                                var t;
                                if (null == e) return null;
                                let n =
                                    ((t = e.customUserThemeSettings),
                                    t?.colors == null ||
                                    1 !== t.colors.length ||
                                    (null != t.gradientColorStops && t.gradientColorStops.length > 0)
                                        ? null
                                        : { type: "custom", customUserThemeSettings: t });
                                if (null != n) return n;
                                let i = (0, u.Yt)(e.presetId);
                                return null != i ? { type: "preset", preset: i } : null;
                            })(r.themeSettings),
                [r, s],
            );
        })(
            (0, o.bG)([f.A], () => f.A.getGuildId()),
            "useActiveGuildTheme",
        ),
        r = i.useMemo(() => {
            if (null == n) return null;
            if ("custom" === n.type) {
                let e = n.customUserThemeSettings;
                return (0, A.Kl)(e.colors, e.gradientAngle ?? 0, e.baseMix ?? u.BC, t);
            }
            return (0, A.PV)(n.preset, t);
        }, [n, t]),
        I = i.useMemo(() => (null == n ? "" : "custom" === n.type ? s()(A.Gc, A.hK) : A.Gc), [n]),
        S =
            ((e = (0, o.bG)([g.A], () => g.A.gradientPreset)),
            i.useMemo(() => {
                if (null == e) return null;
                let t = g.A.getLinearGradient();
                return null == t ? null : (0, A.hm)(e, t);
            }, [e]));
    return (function (e) {
        let {
            guildCSS: t,
            guildClassName: n,
            customThemeColorCSS: i,
            backgroundGradientCSS: r,
            isCustomThemePreviewActive: s,
        } = e;
        return s && null != i
            ? T(i)
            : null != t
              ? { clientThemesCSS: t, clientThemesClassName: n }
              : null != i
                ? T(i)
                : null == r
                  ? { clientThemesCSS: "", clientThemesClassName: "" }
                  : { clientThemesCSS: r, clientThemesClassName: A.Gc };
    })({
        guildCSS: r,
        guildClassName: I,
        customThemeColorCSS: (function () {
            let e = (0, o.bG)([E.A], () => E.A.theme),
                { colors: t, chassisMixAmount: n, gradientAngle: r, setAll: s } = (0, m.ko)(),
                l = (0, o.bG)([_.A], () => _.A.settings.appearance?.clientThemeSettings?.customUserThemeSettings),
                u = i.useRef(void 0);
            return (
                i.useEffect(() => {
                    (0, a.isEqual)(l, u.current) ||
                        ((u.current = l),
                        s({
                            colors: l?.colors ?? [],
                            gradientAngle: l?.gradientAngle ?? 0,
                            chassisMixAmount: l?.baseMix ?? m.kJ,
                        }));
                }, [l, s]),
                i.useMemo(() => (0 === t.length ? null : (0, A.dY)(t, r, n, e)), [t, n, r, e])
            );
        })(),
        backgroundGradientCSS: S,
        isCustomThemePreviewActive: (0, l.fy)((e) => e.activePanel === l.HP.CUSTOM_THEME),
    });
}
