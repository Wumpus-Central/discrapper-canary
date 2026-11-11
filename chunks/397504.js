var s = i(873298),
    n = i(817281),
    c = i(823459),
    r = i(47671),
    m = i(644235),
    o = i(270746),
    a = i(413599),
    u = i(964404),
    d = i(253932),
    l = i(471865),
    p = i(773527),
    P = i(385803),
    I = i(185928);
i.d(
    t,
    {},
    {
        P: function () {
            (!a.A.isSameAsDeviceThemeEnabled() && (0, p.oB)(r.A.gradientPreset?.id)) ||
                (0, l.fv)({
                    clientTheme: (function () {
                        let e = r.A.gradientPreset;
                        if (a.A.isSameAsDeviceThemeEnabled())
                            return null == e || (0, p.oB)(e.id)
                                ? { theme: a.A.theme }
                                : { theme: e.theme, backgroundGradientPresetId: e.id };
                        if (null != e) return { theme: e.theme, backgroundGradientPresetId: e.id };
                        let { customUserThemeSettings: t } = d.eh.getSetting();
                        return (0, m.lo)(t)
                            ? { theme: a.A.theme, customThemeSettings: t }
                            : u.Ay.useSystemTheme === I.Q_.ON
                              ? { theme: "system" }
                              : { theme: a.A.theme };
                    })(),
                });
        },
        e: function (e, t) {
            let { theme: i, backgroundGradientPresetId: r, customThemeSettings: a } = e,
                u = null != r ? P.ag[r] : null;
            if (null != u) {
                ((0, o.X8)({ isPersisted: !0, analyticsLocations: t, themeName: s.ju[u.id] }),
                    (0, c.bc)(u.id),
                    (0, n.u_)({ backgroundGradientPresetId: u.id, theme: u.theme }));
                return;
            }
            if (((0, c.Py)(), "system" !== i && (0, m.lo)(a))) {
                ((0, o.X8)({ isPersisted: !0, analyticsLocations: t, themeName: "custom theme" }),
                    (0, n.u_)({ theme: i, customUserThemeSettings: a }));
                return;
            }
            ((0, o.X8)({ isPersisted: !0, analyticsLocations: t, themeName: `default ${i}` }), (0, n.u_)({ theme: i }));
        },
    },
);
