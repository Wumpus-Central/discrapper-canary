var i = n(873298),
    s = n(817281),
    r = n(823459),
    l = n(47671),
    a = n(644235),
    c = n(270746),
    o = n(413599),
    u = n(964404),
    d = n(253932),
    m = n(471865),
    h = n(773527),
    g = n(385803),
    f = n(185928);
n.d(
    t,
    {},
    {
        P: function () {
            (!o.A.isSameAsDeviceThemeEnabled() && (0, h.oB)(l.A.gradientPreset?.id)) ||
                (0, m.fv)({
                    clientTheme: (function () {
                        let e = l.A.gradientPreset;
                        if (o.A.isSameAsDeviceThemeEnabled())
                            return null == e || (0, h.oB)(e.id)
                                ? { theme: o.A.theme }
                                : { theme: e.theme, backgroundGradientPresetId: e.id };
                        if (null != e) return { theme: e.theme, backgroundGradientPresetId: e.id };
                        let { customUserThemeSettings: t } = d.eh.getSetting();
                        return (0, a.lo)(t)
                            ? { theme: o.A.theme, customThemeSettings: t }
                            : u.Ay.useSystemTheme === f.Q_.ON
                              ? { theme: "system" }
                              : { theme: o.A.theme };
                    })(),
                });
        },
        e: function (e, t) {
            let { theme: n, backgroundGradientPresetId: l, customThemeSettings: o } = e,
                u = null != l ? g.ag[l] : null;
            if (null != u) {
                ((0, c.X8)({ isPersisted: !0, analyticsLocations: t, themeName: i.ju[u.id] }),
                    (0, r.bc)(u.id),
                    (0, s.u_)({ backgroundGradientPresetId: u.id, theme: u.theme }));
                return;
            }
            if (((0, r.Py)(), "system" !== n && (0, a.lo)(o))) {
                ((0, c.X8)({ isPersisted: !0, analyticsLocations: t, themeName: "custom theme" }),
                    (0, s.u_)({ theme: n, customUserThemeSettings: o }));
                return;
            }
            ((0, c.X8)({ isPersisted: !0, analyticsLocations: t, themeName: `default ${n}` }), (0, s.u_)({ theme: n }));
        },
    },
);
