i.d(e, { p: () => A });
var n = i(311907),
    l = i(955572),
    s = i(775602),
    r = i(419954),
    u = i(780964),
    a = i(840065),
    o = i(652215),
    T = i(985018);
let A = (0, r.zD)(u.X.SYNC_PROFILE_THEMES, {
    useTitle: () => T.intl.string(T.t["sSY+mD"]),
    useSubtitle: () =>
        T.intl.format(T.t.u6UjrL, {
            onThemeClick() {
                (0, a.openUserSettings)(u.X.APPEARANCE_PANEL, { section: o.nc_.APPEARANCE });
            },
        }),
    useValue: () => (0, n.bG)([s.A], () => s.A.syncProfileThemeWithUserTheme),
    setValue: () => (0, l.M1)(),
});
