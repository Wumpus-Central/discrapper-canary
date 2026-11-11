var i = n(823459),
    r = n(47671),
    c = n(506988),
    d = n(973654),
    s = n(413599),
    u = n(575155),
    a = n(471865),
    l = n(332560),
    E = n(773527),
    T = n(397504),
    h = n(211824),
    o = n(385803);
n.d(
    t,
    {},
    {
        r: async function (e) {
            if (!(await (0, a.Br)(h.vB.CLIENT_THEME))) return !1;
            r.A.isPreview && ((0, i.S8)(), (0, d.XG)());
            let t = s.A.isSameAsDeviceThemeEnabled(),
                n = (0, E.oB)(r.A.gradientPreset?.id);
            return (
                (!!n && !t) ||
                ((0, T.P)(),
                t && (0, u.i)(),
                (0, T.e)({ theme: o.eJ.theme, backgroundGradientPresetId: o.eJ.id }, e),
                (0, a.VN)(h.vB.CLIENT_THEME),
                !!n ||
                    ((0, l.Cy)({
                        perks: [h.vB.CLIENT_THEME],
                        content: c.uF.CLIENT_THEME_SETTINGS,
                        contentSurface: l.rl.THEME_PICKER,
                    }),
                    !0))
            );
        },
    },
);
