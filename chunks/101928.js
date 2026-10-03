t.d(r, { A: () => c });
var n = t(317097),
    l = t(17928),
    i = t(374994),
    u = t(462887),
    o = t(736653),
    s = t(775602),
    d = t(654107),
    a = t(543699),
    m = t(837529),
    h = t(652215);
function c(e) {
    let { user: r, displayProfile: t, pendingThemeColors: c, pendingAvatarSrc: A, isPreview: f, forceUserTheme: v } = e,
        y = (0, o.Ay)(),
        C = (0, m.Wd)(),
        p = (0, l.bG)([s.Ay], () => s.Ay.syncProfileThemeWithUserTheme),
        T = A ?? r?.getAvatarURL(t?.guildId, 80),
        N = (0, i.nt)("PRIMARY_530", { saturation: 1 }),
        [w, x] = (0, d.rh)(T, N, !1);
    if (null != C) return C;
    if (!t?.canEditThemes && !f) return { theme: y, primaryColor: null, secondaryColor: null };
    let b = t?.getPreviewThemeColors(c),
        P = b?.[0] ?? (0, n.LX)(w),
        j = b?.[1] ?? (0, n.LX)(x),
        O = p || v ? y : ((0, a.tM)(P) ?? y);
    return (
        O === h.NJ8.ASH && (0, u.M)(y) ? (O = y) : O === h.NJ8.ASH && (0, u.q)(y) && (O = h.NJ8.DARK),
        { theme: O, primaryColor: P, secondaryColor: j }
    );
}
