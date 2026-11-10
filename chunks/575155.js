var i = n(462887),
    r = n(817281),
    s = n(850333),
    l = n(644235),
    a = n(773527),
    c = n(973654),
    o = n(413599),
    u = n(185928);
n.d(
    t,
    {},
    {
        V: function (e) {
            if (
                (r.Ay.setShouldSyncAppearanceSettings(!1),
                null == o.A.getSyncedClientTheme(u.Fc.LIGHT) && null == o.A.getSyncedClientTheme(u.Fc.DARK))
            ) {
                let t = o.A.theme,
                    n = null == e ? t : (0, l.Zu)(t),
                    r = (0, i.M)(n) ? u.Fc.DARK : u.Fc.LIGHT,
                    d = s.A.gradientPreset?.id,
                    m = !s.A.isPreview || (0, a.oB)(d) ? d : void 0;
                ((0, c.NA)({ [r]: n }),
                    null != e
                        ? (0, c.qX)(r, { customUserThemeSettings: e })
                        : null != m
                          ? (0, c.qX)(r, { backgroundGradientPresetId: m })
                          : (0, c.qX)(r, { theme: n }));
            }
            ((0, c.ZM)(!0), (0, c.k7)(u.Q_.ON));
        },
        i: function () {
            ((0, c.k7)(u.Q_.OFF), (0, c.ZM)(!1));
        },
    },
);
