var l = n(462887),
    r = n(817281),
    i = n(47671),
    s = n(644235),
    a = n(773527),
    o = n(973654),
    c = n(413599),
    u = n(185928);
n.d(
    t,
    {},
    {
        V: function (e) {
            if (
                (r.Ay.setShouldSyncAppearanceSettings(!1),
                null == c.A.getSyncedClientTheme(u.Fc.LIGHT) && null == c.A.getSyncedClientTheme(u.Fc.DARK))
            ) {
                let t = c.A.theme,
                    n = null == e ? t : (0, s.Zu)(t),
                    r = (0, l.M)(n) ? u.Fc.DARK : u.Fc.LIGHT,
                    d = i.A.gradientPreset?.id,
                    h = !i.A.isPreview || (0, a.oB)(d) ? d : void 0;
                ((0, o.NA)({ [r]: n }),
                    null != e
                        ? (0, o.qX)(r, { customUserThemeSettings: e })
                        : null != h
                          ? (0, o.qX)(r, { backgroundGradientPresetId: h })
                          : (0, o.qX)(r, { theme: n }));
            }
            ((0, o.ZM)(!0), (0, o.k7)(u.Q_.ON));
        },
        i: function () {
            ((0, o.k7)(u.Q_.OFF), (0, o.ZM)(!1));
        },
    },
);
