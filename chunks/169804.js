n.d(e, { v: () => S });
var i = n(442837),
    l = n(857595),
    s = n(607070),
    u = n(509613),
    r = n(313789),
    a = n(518596),
    o = n(981631),
    T = n(388032);
let S = (0, u.qs)(r.n.SYNC_PROFILE_THEMES, {
    useTitle: () => T.intl.string(T.t["sSY+mD"]),
    useSubtitle: () =>
        T.intl.format(T.t.u6UjrL, {
            onThemeClick() {
                (0, a.openUserSettings)(r.n.APPEARANCE_PANEL, { section: o.oAB.APPEARANCE });
            },
        }),
    useValue: () => (0, i.e7)([s.Z], () => s.Z.syncProfileThemeWithUserTheme),
    setValue: () => (0, l.Uv)(),
});
