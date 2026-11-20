var l = n(823459),
    r = n(47671),
    i = n(506988),
    s = n(973654),
    a = n(413599),
    o = n(575155),
    c = n(471865),
    u = n(332560),
    d = n(189916),
    h = n(397504),
    m = n(211824),
    g = n(385803);
n.d(
    t,
    {},
    {
        r: async function (e) {
            if (!(await (0, c.Br)(m.vB.CLIENT_THEME))) return !1;
            r.A.isPreview && ((0, l.S8)(), (0, s.XG)());
            let t = a.A.isSameAsDeviceThemeEnabled(),
                n = (0, d.oB)(r.A.gradientPreset?.id);
            return (
                (!!n && !t) ||
                ((0, h.P)(),
                t && (0, o.i)(),
                (0, h.e)({ theme: g.eJ.theme, backgroundGradientPresetId: g.eJ.id }, e),
                (0, c.VN)(m.vB.CLIENT_THEME),
                !!n ||
                    ((0, u.Cy)({
                        perks: [m.vB.CLIENT_THEME],
                        content: i.uF.CLIENT_THEME_SETTINGS,
                        contentSurface: u.rl.THEME_PICKER,
                    }),
                    !0))
            );
        },
    },
);
