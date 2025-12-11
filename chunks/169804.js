n.d(e, { v: () => T });
var i = n(442837),
    l = n(857595),
    s = n(607070),
    u = n(509613),
    r = n(313789),
    a = n(518596),
    o = n(981631),
    c = n(388032);
let T = (0, u.qs)(r.n.SYNC_PROFILE_THEMES, {
    useTitle: () => c.intl.string(c.t["sSY+mD"]),
    useSubtitle: () =>
        c.intl.format(c.t.u6UjrL, {
            onThemeClick() {
                (0, a.openUserSettings)(r.n.APPEARANCE_PANEL, { section: o.oAB.APPEARANCE });
            },
        }),
    useValue: () => (0, i.e7)([s.Z], () => s.Z.syncProfileThemeWithUserTheme),
    setValue: () => (0, l.Uv)(),
});
