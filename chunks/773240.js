var i = n(535229),
    r = n(526162),
    a = n(270746),
    s = n(973654),
    l = n(413599),
    o = n(859034),
    d = n(287809),
    c = n(448645);
n(471865);
var u = n(739776),
    _ = n(773527),
    E = n(858412),
    A = n(114862),
    f = n(397504),
    h = n(211824);
function I(e, t) {
    let { previousPerkValues: n, analyticsLocations: r } = t;
    switch (e) {
        case h.vB.CLIENT_THEME:
            if ((0, o.v)()) {
                for (let e of (0, E.U0)()) {
                    let t = l.A.themePreferenceForSystemTheme(e);
                    ((0, s.qX)(e, { theme: t }),
                        (0, a.X8)({ isPersisted: !0, analyticsLocations: r, themeName: `${e}-mode-${t}` }));
                }
                return Promise.resolve(!0);
            }
            return ((0, f.e)(n.clientTheme ?? h.I$, r), Promise.resolve(!0));
        case h.vB.APP_ICON:
            return ((0, i.C)(n.appIconId ?? h.u), Promise.resolve(!0));
        case h.vB.DISPLAY_NAME_STYLE: {
            let e = d.default.getCurrentUser();
            return (0, A.F)(
                (0, _.Qv)({
                    currentDisplayNameStyles: e?.displayNameStyles,
                    previousDisplayNameStyles: n.displayNameStyles,
                    canUsePremiumProfileCustomization: c.Ay.canUsePremiumProfileCustomization(e),
                }),
            );
        }
    }
}
n.d(
    t,
    {},
    {
        ZG: I,
        d_: async function (e) {
            let t = { previousPerkValues: u.A.previousPerkValues, analyticsLocations: e },
                n = d.default.getCurrentUser()?.premiumType,
                i = {
                    [h.vB.CLIENT_THEME]: (0, E.qi)(),
                    [h.vB.DISPLAY_NAME_STYLE]: (0, E.Yx)(),
                    [h.vB.APP_ICON]: (0, _.z9)(r.A.getCurrentDesktopIcon()),
                };
            return (
                await Promise.all(
                    Object.values(h.vB)
                        .filter((e) => i[e] && (0, _.YY)(e, n))
                        .map((e) => I(e, t)),
                )
            ).every(Boolean);
        },
    },
);
