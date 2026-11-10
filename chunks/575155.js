var i = n(462887),
    s = n(817281),
    r = n(850333),
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
                (s.Ay.setShouldSyncAppearanceSettings(!1),
                null == o.A.getSyncedClientTheme(u.Fc.LIGHT) && null == o.A.getSyncedClientTheme(u.Fc.DARK))
            ) {
                let t = o.A.theme,
                    n = null == e ? t : (0, l.Zu)(t),
                    s = (0, i.M)(n) ? u.Fc.DARK : u.Fc.LIGHT,
                    d = r.A.gradientPreset?.id,
                    m = !r.A.isPreview || (0, a.oB)(d) ? d : void 0;
                ((0, c.NA)({ [s]: n }),
                    null != e
                        ? (0, c.qX)(s, { customUserThemeSettings: e })
                        : null != m
                          ? (0, c.qX)(s, { backgroundGradientPresetId: m })
                          : (0, c.qX)(s, { theme: n }));
            }
            ((0, c.ZM)(!0), (0, c.k7)(u.Q_.ON));
        },
        i: function () {
            ((0, c.k7)(u.Q_.OFF), (0, c.ZM)(!1));
        },
    },
);
