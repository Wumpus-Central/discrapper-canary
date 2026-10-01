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
        p = (0, c.Wd)(),
        N = (0, l.bG)([o.Ay], () => o.Ay.syncProfileThemeWithUserTheme),
        x = f ?? r?.getAvatarURL(n?.guildId, 80),
        y = (0, i.nt)("PRIMARY_530", { saturation: 1 }),
        [b, j] = (0, u.rh)(x, y, !1);
    if (null != p) return p;
    if (!n?.canEditThemes && !v) return { theme: C, primaryColor: null, secondaryColor: null };
    let R = n?.getPreviewThemeColors(h),
        T = R?.[0] ?? (0, t.LX)(b),
        g = R?.[1] ?? (0, t.LX)(j),
        w = N || A ? C : ((0, d.tM)(T) ?? C);
    return (
        w === m.NJ8.ASH && (0, a.M)(C) ? (w = C) : w === m.NJ8.ASH && (0, a.q)(C) && (w = m.NJ8.DARK),
        { theme: w, primaryColor: T, secondaryColor: g }
    );
}
