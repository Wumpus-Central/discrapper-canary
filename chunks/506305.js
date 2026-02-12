i.d(e, { p: () => A });
var n = i(311907),
    l = i(955572),
    s = i(775602),
    r = i(419954),
    a = i(780964),
    u = i(358776),
    o = i(840065),
    d = i(652215),
    T = i(985018);
let A = (0, r.zD)(a.X.SYNC_PROFILE_THEMES, {
    useTitle: () =>
        (0, u.bp)("SyncProfileThemes_useTitle") ? T.intl.string(T.t.gAieYA) : T.intl.string(T.t["sSY+mD"]),
    useSubtitle: () =>
        (0, u.bp)("SyncProfileThemes_useSubtitle")
            ? void 0
            : T.intl.format(T.t.u6UjrL, {
                  onThemeClick() {
                      (0, o.openUserSettings)(a.X.APPEARANCE_PANEL, { section: d.nc_.APPEARANCE });
                  },
              }),
    useValue: () => (0, n.bG)([s.A], () => s.A.syncProfileThemeWithUserTheme),
    setValue: () => (0, l.M1)(),
});
