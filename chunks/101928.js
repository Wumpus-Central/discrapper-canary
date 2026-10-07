t.d(r, { A: () => c });
var n = t(317097),
    l = t(17928),
    i = t(374994),
    u = t(462887),
    s = t(736653),
    d = t(775602),
    o = t(654107),
    a = t(543699),
    h = t(837529),
    m = t(652215);
function c(e) {
    let { user: r, displayProfile: t, pendingThemeColors: c, pendingAvatarSrc: A, isPreview: v, forceUserTheme: f } = e,
        y = (0, s.Ay)(),
        p = (0, h.Wd)(),
        C = (0, l.bG)([d.Ay], () => d.Ay.syncProfileThemeWithUserTheme),
        N = A ?? r?.getAvatarURL(t?.guildId, 80),
        T = (0, i.nt)("PRIMARY_530", { saturation: 1 }),
        [b, w] = (0, o.rh)(N, T, !1);
    if (null != p) return p;
    if (!t?.canEditThemes && !v) return { theme: y, primaryColor: null, secondaryColor: null };
    let O = t?.getPreviewThemeColors(c),
        g = O?.[0] ?? (0, n.LX)(b),
        j = O?.[1] ?? (0, n.LX)(w),
        x = C || f ? y : ((0, a.tM)(g) ?? y);
    return (
        x === m.NJ8.ASH && (0, u.M)(y) ? (x = y) : x === m.NJ8.ASH && (0, u.q)(y) && (x = m.NJ8.DARK),
        { theme: x, primaryColor: g, secondaryColor: j }
    );
}
