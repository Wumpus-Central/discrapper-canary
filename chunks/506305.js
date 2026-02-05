i.d(e, { p: () => T });
var n = i(311907),
    l = i(955572),
    s = i(775602),
    r = i(419954),
    a = i(780964),
    u = i(840065),
    o = i(652215),
    d = i(985018);
let T = (0, r.zD)(a.X.SYNC_PROFILE_THEMES, {
    useTitle: () => d.intl.string(d.t["sSY+mD"]),
    useSubtitle: () =>
        d.intl.format(d.t.u6UjrL, {
            onThemeClick() {
                (0, u.openUserSettings)(a.X.APPEARANCE_PANEL, { section: o.nc_.APPEARANCE });
            },
        }),
    useValue: () => (0, n.bG)([s.A], () => s.A.syncProfileThemeWithUserTheme),
    setValue: () => (0, l.M1)(),
});
