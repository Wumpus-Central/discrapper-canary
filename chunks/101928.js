"use strict";
n.d(t, { A: () => E });
var i = n(317097),
    r = n(17928),
    s = n(374994),
    a = n(462887),
    o = n(736653),
    l = n(775602),
    d = n(654107),
    _ = n(543699),
    u = n(837529),
    c = n(652215);
function E(e) {
    let { user: t, displayProfile: n, pendingThemeColors: E, pendingAvatarSrc: h, isPreview: m, forceUserTheme: f } = e,
        g = (0, o.Ay)(),
        p = (0, u.Wd)(),
        A = (0, r.bG)([l.A], () => l.A.syncProfileThemeWithUserTheme),
        I = h ?? t?.getAvatarURL(n?.guildId, 80),
        T = (0, s.nt)("PRIMARY_530", { saturation: 1 }),
        [S, N] = (0, d.rh)(I, T, !1);
    if (null != p) return p;
    if (!n?.canEditThemes && !m) return { theme: g, primaryColor: null, secondaryColor: null };
    let C = n?.getPreviewThemeColors(E),
        R = C?.[0] ?? (0, i.LX)(S),
        O = C?.[1] ?? (0, i.LX)(N),
        y = A || f ? g : ((0, _.tM)(R) ?? g);
    return (
        y === c.NJ8.DARK && (0, a.M)(g) ? (y = g) : y === c.NJ8.DARK && (0, a.q)(g) && (y = c.NJ8.DARKER),
        { theme: y, primaryColor: R, secondaryColor: O }
    );
}
