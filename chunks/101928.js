n.d(r, { A: () => h });
var t = n(317097),
    l = n(17928),
    i = n(374994),
    a = n(462887),
    s = n(736653),
    o = n(775602),
    u = n(654107),
    d = n(543699),
    c = n(837529),
    m = n(652215);
function h(e) {
    let { user: r, displayProfile: n, pendingThemeColors: h, pendingAvatarSrc: f, isPreview: v, forceUserTheme: A } = e,
        C = (0, s.Ay)(),
        y = (0, c.Wd)(),
        p = (0, l.bG)([o.Ay], () => o.Ay.syncProfileThemeWithUserTheme),
        x = f ?? r?.getAvatarURL(n?.guildId, 80),
        N = (0, i.nt)("PRIMARY_530", { saturation: 1 }),
        [R, b] = (0, u.rh)(x, N, !1);
    if (null != y) return y;
    if (!n?.canEditThemes && !v) return { theme: C, primaryColor: null, secondaryColor: null };
    let j = n?.getPreviewThemeColors(h),
        T = j?.[0] ?? (0, t.LX)(R),
        g = j?.[1] ?? (0, t.LX)(b),
        w = p || A ? C : ((0, d.tM)(T) ?? C);
    return (
        w === m.NJ8.DARK && (0, a.M)(C) ? (w = C) : w === m.NJ8.DARK && (0, a.q)(C) && (w = m.NJ8.DARKER),
        { theme: w, primaryColor: T, secondaryColor: g }
    );
}
daryColor: O;
}}
