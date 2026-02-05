"use strict";
n.d(t, { A: () => _ });
var r = n(317097),
    i = n(311907),
    a = n(374994),
    s = n(582754),
    o = n(736653),
    l = n(775602),
    u = n(654107),
    c = n(543699),
    d = n(652215);
function _(e) {
    let { user: t, displayProfile: n, pendingThemeColors: _, pendingAvatarSrc: f, isPreview: p, forceUserTheme: h } = e,
        m = (0, o.Ay)(),
        g = (0, i.bG)([l.A], () => l.A.syncProfileThemeWithUserTheme),
        E = f ?? t?.getAvatarURL(n?.guildId, 80),
        A = (0, a.nt)("PRIMARY_530", { saturation: 1 }),
        [I, T] = (0, u.rh)(E, A, !1);
    if (!n?.canEditThemes && !p) return { theme: m, primaryColor: null, secondaryColor: null };
    let y = n?.getPreviewThemeColors(_),
        S = y?.[0] ?? (0, r.LX)(I),
        v = y?.[1] ?? (0, r.LX)(T),
        C = g || h ? m : ((0, c.tM)(S) ?? m);
    return (
        C === d.NJ8.DARK && (0, s.Mw)(m) ? (C = m) : C === d.NJ8.DARK && (0, s.qB)(m) && (C = d.NJ8.DARKER),
        { theme: C, primaryColor: S, secondaryColor: v }
    );
}
