"use strict";
n.d(t, { A: () => E });
var i = n(317097),
    r = n(17928),
    a = n(374994),
    s = n(462887),
    l = n(736653),
    o = n(775602),
    d = n(654107),
    c = n(543699),
    u = n(837529),
    _ = n(652215);
function E(e) {
    let { user: t, displayProfile: n, pendingThemeColors: E, pendingAvatarSrc: A, isPreview: h, forceUserTheme: I } = e,
        f = (0, l.Ay)(),
        p = (0, u.Wd)(),
        T = (0, r.bG)([o.Ay], () => o.Ay.syncProfileThemeWithUserTheme),
        m = A ?? t?.getAvatarURL(n?.guildId, 80),
        g = (0, a.nt)("PRIMARY_530", { saturation: 1 }),
        [S, N] = (0, d.rh)(m, g, !1);
    if (null != p) return p;
    if (!n?.canEditThemes && !h) return { theme: f, primaryColor: null, secondaryColor: null };
    let C = n?.getPreviewThemeColors(E),
        R = C?.[0] ?? (0, i.LX)(S),
        O = C?.[1] ?? (0, i.LX)(N),
        L = T || I ? f : ((0, c.tM)(R) ?? f);
    return (
        L === _.NJ8.DARK && (0, s.M)(f) ? (L = f) : L === _.NJ8.DARK && (0, s.q)(f) && (L = _.NJ8.DARKER),
        { theme: L, primaryColor: R, secondaryColor: O }
    );
}
