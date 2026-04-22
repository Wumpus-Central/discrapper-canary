"use strict";
n.d(t, { A: () => _ });
var i = n(317097),
    r = n(311907),
    l = n(374994),
    a = n(462887),
    s = n(736653),
    o = n(775602),
    c = n(654107),
    u = n(543699),
    d = n(837529),
    h = n(652215);
function _(e) {
    let { user: t, displayProfile: n, pendingThemeColors: _, pendingAvatarSrc: p, isPreview: A, forceUserTheme: f } = e,
        m = (0, s.Ay)(),
        g = (0, d.Wd)(),
        E = (0, r.bG)([o.A], () => o.A.syncProfileThemeWithUserTheme),
        I = p ?? t?.getAvatarURL(n?.guildId, 80),
        v = (0, l.nt)("PRIMARY_530", { saturation: 1 }),
        [b, S] = (0, c.rh)(I, v, !1);
    if (null != g) return g;
    if (!n?.canEditThemes && !A) return { theme: m, primaryColor: null, secondaryColor: null };
    let T = n?.getPreviewThemeColors(_),
        y = T?.[0] ?? (0, i.LX)(b),
        C = T?.[1] ?? (0, i.LX)(S),
        x = E || f ? m : ((0, u.tM)(y) ?? m);
    return (
        x === h.NJ8.DARK && (0, a.M)(m) ? (x = m) : x === h.NJ8.DARK && (0, a.q)(m) && (x = h.NJ8.DARKER),
        { theme: x, primaryColor: y, secondaryColor: C }
    );
}
