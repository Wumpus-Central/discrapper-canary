n.d(t, { p: () => u });
var i = n(311907),
    s = n(955572),
    l = n(775602),
    a = n(419954),
    r = n(780964),
    o = n(358776),
    d = n(840065),
    c = n(985018);
let u = (0, a.zD)(r.X.SYNC_PROFILE_THEMES, {
    useTitle: () =>
        (0, o.bp)("SyncProfileThemes_useTitle") ? c.intl.string(c.t.C00w4l) : c.intl.string(c.t["sSY+mD"]),
    useSubtitle: () =>
        (0, o.bp)("SyncProfileThemes_useSubtitle")
            ? void 0
            : c.intl.format(c.t.u6UjrL, {
                  onThemeClick() {
                      (0, d.openUserSettings)(r.X.APPEARANCE_PANEL);
                  },
              }),
    useValue: () => (0, i.bG)([l.A], () => l.A.syncProfileThemeWithUserTheme),
    setValue: () => (0, s.M1)(),
});
