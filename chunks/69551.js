i.d(e, { l: () => E });
var n = i(311907),
    l = i(890138),
    s = i(817281),
    r = i(47671),
    a = i(419954),
    u = i(284016),
    o = i(544028),
    d = i(253932),
    A = i(780964),
    T = i(652215),
    S = i(985018);
let E = (0, a.zD)(A.X.DISPLAY_SYNC_THEME, {
    useTitle: () => S.intl.string(S.t["/B+kEV"]),
    useSearchTerms: () => [S.intl.string(S.t.Ksh3ik)],
    useValue: function () {
        return (0, n.bG)([u.A], () => !1 !== u.A.shouldSync("appearance"));
    },
    setValue: function (t) {
        let e = o.A.theme,
            i = r.A.gradientPreset?.id ?? null,
            n = d.eh.getSetting()?.customUserThemeSettings != null;
        (0, l.u)(T.HAw.SYNC_ACROSS_CLIENTS_TOGGLED, {
            is_sync_enabled: t,
            base_theme: e,
            client_theme: i,
            has_custom_theme: n,
        }),
            s.Ay.setShouldSyncAppearanceSettings(t);
    },
});
