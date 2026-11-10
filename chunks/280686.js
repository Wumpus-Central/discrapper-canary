n.d(t, { r: () => S });
var i = n(823459),
    s = n(850333),
    r = n(506988),
    l = n(973654),
    a = n(413599),
    c = n(575155),
    o = n(471865),
    u = n(332560),
    d = n(773527),
    m = n(873298),
    h = n(817281),
    g = n(644235),
    f = n(270746),
    p = n(964404),
    A = n(253932),
    x = n(385803),
    v = n(185928),
    y = n(211824);
async function S(e) {
    if (!(await (0, o.Br)(y.vB.CLIENT_THEME))) return !1;
    s.A.isPreview && ((0, i.S8)(), (0, l.XG)());
    let t = a.A.isSameAsDeviceThemeEnabled(),
        n = (0, d.oB)(s.A.gradientPreset?.id);
    return (
        (!!n && !t) ||
        ((!a.A.isSameAsDeviceThemeEnabled() && (0, d.oB)(s.A.gradientPreset?.id)) ||
            (0, o.fv)({
                clientTheme: (function () {
                    let e = s.A.gradientPreset;
                    if (a.A.isSameAsDeviceThemeEnabled())
                        return null == e || (0, d.oB)(e.id)
                            ? { theme: a.A.theme }
                            : { theme: e.theme, backgroundGradientPresetId: e.id };
                    if (null != e) return { theme: e.theme, backgroundGradientPresetId: e.id };
                    let { customUserThemeSettings: t } = A.eh.getSetting();
                    return (0, g.lo)(t)
                        ? { theme: a.A.theme, customThemeSettings: t }
                        : p.Ay.useSystemTheme === v.Q_.ON
                          ? { theme: "system" }
                          : { theme: a.A.theme };
                })(),
            }),
        t && (0, c.i)(),
        !(function (e, t) {
            let { theme: n, backgroundGradientPresetId: s, customThemeSettings: r } = e,
                l = null != s ? x.ag[s] : null;
            if (null != l) {
                ((0, f.X8)({ isPersisted: !0, analyticsLocations: t, themeName: m.ju[l.id] }),
                    (0, i.bc)(l.id),
                    (0, h.u_)({ backgroundGradientPresetId: l.id, theme: l.theme }));
                return;
            }
            if (((0, i.Py)(), "system" !== n && (0, g.lo)(r))) {
                ((0, f.X8)({ isPersisted: !0, analyticsLocations: t, themeName: "custom theme" }),
                    (0, h.u_)({ theme: n, customUserThemeSettings: r }));
                return;
            }
            ((0, f.X8)({ isPersisted: !0, analyticsLocations: t, themeName: `default ${n}` }), (0, h.u_)({ theme: n }));
        })({ theme: x.eJ.theme, backgroundGradientPresetId: x.eJ.id }, e),
        (0, o.VN)(y.vB.CLIENT_THEME),
        !!n ||
            ((0, u.Cy)({
                perks: [y.vB.CLIENT_THEME],
                content: r.uF.CLIENT_THEME_SETTINGS,
                contentSurface: u.rl.THEME_PICKER,
            }),
            !0))
    );
}
