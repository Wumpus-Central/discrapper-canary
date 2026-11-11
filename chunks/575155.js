var i = n(462887),
    r = n(817281),
    c = n(47671),
    d = n(644235),
    s = n(773527),
    u = n(973654),
    a = n(413599),
    l = n(185928);
n.d(
    t,
    {},
    {
        V: function (e) {
            if (
                (r.Ay.setShouldSyncAppearanceSettings(!1),
                null == a.A.getSyncedClientTheme(l.Fc.LIGHT) && null == a.A.getSyncedClientTheme(l.Fc.DARK))
            ) {
                let t = a.A.theme,
                    n = null == e ? t : (0, d.Zu)(t),
                    r = (0, i.M)(n) ? l.Fc.DARK : l.Fc.LIGHT,
                    E = c.A.gradientPreset?.id,
                    T = !c.A.isPreview || (0, s.oB)(E) ? E : void 0;
                ((0, u.NA)({ [r]: n }),
                    null != e
                        ? (0, u.qX)(r, { customUserThemeSettings: e })
                        : null != T
                          ? (0, u.qX)(r, { backgroundGradientPresetId: T })
                          : (0, u.qX)(r, { theme: n }));
            }
            ((0, u.ZM)(!0), (0, u.k7)(l.Q_.ON));
        },
        i: function () {
            ((0, u.k7)(l.Q_.OFF), (0, u.ZM)(!1));
        },
    },
);
