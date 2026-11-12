var i = n(873298),
    r = n(817281),
    a = n(823459),
    s = n(47671),
    l = n(644235),
    o = n(270746),
    d = n(413599),
    c = n(964404),
    u = n(253932),
    _ = n(471865),
    E = n(773527),
    A = n(385803),
    f = n(185928);
n.d(
    t,
    {},
    {
        P: function () {
            (!d.A.isSameAsDeviceThemeEnabled() && (0, E.oB)(s.A.gradientPreset?.id)) ||
                (0, _.fv)({
                    clientTheme: (function () {
                        let e = s.A.gradientPreset;
                        if (d.A.isSameAsDeviceThemeEnabled())
                            return null == e || (0, E.oB)(e.id)
                                ? { theme: d.A.theme }
                                : { theme: e.theme, backgroundGradientPresetId: e.id };
                        if (null != e) return { theme: e.theme, backgroundGradientPresetId: e.id };
                        let { customUserThemeSettings: t } = u.eh.getSetting();
                        return (0, l.lo)(t)
                            ? { theme: d.A.theme, customThemeSettings: t }
                            : c.Ay.useSystemTheme === f.Q_.ON
                              ? { theme: "system" }
                              : { theme: d.A.theme };
                    })(),
                });
        },
        e: function (e, t) {
            let { theme: n, backgroundGradientPresetId: s, customThemeSettings: d } = e,
                c = null != s ? A.ag[s] : null;
            if (null != c) {
                ((0, o.X8)({ isPersisted: !0, analyticsLocations: t, themeName: i.ju[c.id] }),
                    (0, a.bc)(c.id),
                    (0, r.u_)({ backgroundGradientPresetId: c.id, theme: c.theme }));
                return;
            }
            if (((0, a.Py)(), "system" !== n && (0, l.lo)(d))) {
                ((0, o.X8)({ isPersisted: !0, analyticsLocations: t, themeName: "custom theme" }),
                    (0, r.u_)({ theme: n, customUserThemeSettings: d }));
                return;
            }
            ((0, o.X8)({ isPersisted: !0, analyticsLocations: t, themeName: `default ${n}` }), (0, r.u_)({ theme: n }));
        },
    },
);
