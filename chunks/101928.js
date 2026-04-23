"use strict";
n.d(t, { A: () => f });
var r = n(317097),
    i = n(311907),
    s = n(374994),
    a = n(462887),
    o = n(736653),
    l = n(775602),
    u = n(654107),
    c = n(543699),
    d = n(837529),
    _ = n(652215);
function f(e) {
    let { user: t, displayProfile: n, pendingThemeColors: f, pendingAvatarSrc: p, isPreview: h, forceUserTheme: E } = e,
        m = (0, o.Ay)(),
        g = (0, d.Wd)(),
        A = (0, i.bG)([l.A], () => l.A.syncProfileThemeWithUserTheme),
        I = p ?? t?.getAvatarURL(n?.guildId, 80),
        T = (0, s.nt)("PRIMARY_530", { saturation: 1 }),
        [S, y] = (0, u.rh)(I, T, !1);
    if (null != g) return g;
    if (!n?.canEditThemes && !h) return { theme: m, primaryColor: null, secondaryColor: null };
    let N = n?.getPreviewThemeColors(f),
        v = N?.[0] ?? (0, r.LX)(S),
        C = N?.[1] ?? (0, r.LX)(y),
        O = A || E ? m : ((0, c.tM)(v) ?? m);
    return (
        O === _.NJ8.DARK && (0, a.M)(m) ? (O = m) : O === _.NJ8.DARK && (0, a.q)(m) && (O = _.NJ8.DARKER),
        { theme: O, primaryColor: v, secondaryColor: C }
    );
}
