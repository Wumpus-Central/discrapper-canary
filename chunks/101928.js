"use strict";
n.d(t, { A: () => f });
var i = n(317097),
    r = n(17928),
    s = n(374994),
    a = n(462887),
    o = n(736653),
    l = n(775602),
    u = n(654107),
    c = n(543699),
    d = n(837529),
    _ = n(652215);
function f(e) {
    let { user: t, displayProfile: n, pendingThemeColors: f, pendingAvatarSrc: h, isPreview: p, forceUserTheme: E } = e,
        m = (0, o.Ay)(),
        g = (0, d.Wd)(),
        A = (0, r.bG)([l.A], () => l.A.syncProfileThemeWithUserTheme),
        I = h ?? t?.getAvatarURL(n?.guildId, 80),
        T = (0, s.nt)("PRIMARY_530", { saturation: 1 }),
        [S, N] = (0, u.rh)(I, T, !1);
    if (null != g) return g;
    if (!n?.canEditThemes && !p) return { theme: m, primaryColor: null, secondaryColor: null };
    let y = n?.getPreviewThemeColors(f),
        C = y?.[0] ?? (0, i.LX)(S),
        v = y?.[1] ?? (0, i.LX)(N),
        O = A || E ? m : ((0, c.tM)(C) ?? m);
    return (
        O === _.NJ8.DARK && (0, a.M)(m) ? (O = m) : O === _.NJ8.DARK && (0, a.q)(m) && (O = _.NJ8.DARKER),
        { theme: O, primaryColor: C, secondaryColor: v }
    );
}
