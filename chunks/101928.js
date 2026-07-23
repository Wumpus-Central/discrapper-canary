n.d(r, { A: () => h });
var t = n(317097),
    l = n(17928),
    i = n(374994),
    a = n(462887),
    o = n(736653),
    s = n(775602),
    u = n(654107),
    d = n(543699),
    c = n(837529),
    m = n(652215);
function h(e) {
    let { user: r, displayProfile: n, pendingThemeColors: h, pendingAvatarSrc: v, isPreview: f, forceUserTheme: C } = e,
        y = (0, o.Ay)(),
        A = (0, c.Wd)(),
        p = (0, l.bG)([s.Ay], () => s.Ay.syncProfileThemeWithUserTheme),
        x = v ?? r?.getAvatarURL(n?.guildId, 80),
        N = (0, i.nt)("PRIMARY_530", { saturation: 1 }),
        [R, b] = (0, u.rh)(x, N, !1);
    if (null != A) return A;
    if (!n?.canEditThemes && !f) return { theme: y, primaryColor: null, secondaryColor: null };
    let j = n?.getPreviewThemeColors(h),
        T = j?.[0] ?? (0, t.LX)(R),
        w = j?.[1] ?? (0, t.LX)(b),
        I = p || C ? y : ((0, d.tM)(T) ?? y);
    return (
        I === m.NJ8.DARK && (0, a.M)(y) ? (I = y) : I === m.NJ8.DARK && (0, a.q)(y) && (I = m.NJ8.DARKER),
        { theme: I, primaryColor: T, secondaryColor: w }
    );
}
