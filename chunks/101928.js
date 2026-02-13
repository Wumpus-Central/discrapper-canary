"use strict";
n.d(t, { A: () => f });
var r = n(317097),
    i = n(311907),
    a = n(374994),
    s = n(582754),
    o = n(736653),
    l = n(775602),
    u = n(654107),
    c = n(543699),
    d = n(837529),
    _ = n(652215);
function f(e) {
    let { user: t, displayProfile: n, pendingThemeColors: f, pendingAvatarSrc: h, isPreview: p, forceUserTheme: g } = e,
        E = (0, o.Ay)(),
        A = (0, d.Wd)(),
        I = (0, i.bG)([l.A], () => l.A.syncProfileThemeWithUserTheme),
        T = h ?? t?.getAvatarURL(n?.guildId, 80),
        y = (0, a.nt)("PRIMARY_530", { saturation: 1 }),
        [S, v] = (0, u.rh)(T, y, !1);
    if (null != A) return A;
    if (!n?.canEditThemes && !p) return { theme: E, primaryColor: null, secondaryColor: null };
    let C = n?.getPreviewThemeColors(f),
        b = C?.[0] ?? (0, r.LX)(S),
        N = C?.[1] ?? (0, r.LX)(v),
        R = I || g ? E : ((0, c.tM)(b) ?? E);
    return (
        R === _.NJ8.DARK && (0, s.Mw)(E) ? (R = E) : R === _.NJ8.DARK && (0, s.qB)(E) && (R = _.NJ8.DARKER),
        { theme: R, primaryColor: b, secondaryColor: N }
    );
}
