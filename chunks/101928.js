n.d(r, { A: () => c });
var l = n(317097),
    t = n(17928),
    i = n(374994),
    d = n(462887),
    s = n(736653),
    u = n(775602),
    o = n(654107),
    a = n(543699),
    h = n(837529),
    m = n(652215);
function c(e) {
    let { user: r, displayProfile: n, pendingThemeColors: c, pendingAvatarSrc: v, isPreview: A, forceUserTheme: f } = e,
        R = (0, s.Ay)(),
        p = (0, h.Wd)(),
        y = (0, t.bG)([u.A], () => u.A.syncProfileThemeWithUserTheme),
        C = v ?? r?.getAvatarURL(n?.guildId, 80),
        N = (0, i.nt)("PRIMARY_530", { saturation: 1 }),
        [w, T] = (0, o.rh)(C, N, !1);
    if (null != p) return p;
    if (!n?.canEditThemes && !A) return { theme: R, primaryColor: null, secondaryColor: null };
    let b = n?.getPreviewThemeColors(c),
        O = b?.[0] ?? (0, l.LX)(w),
        j = b?.[1] ?? (0, l.LX)(T),
        x = y || f ? R : ((0, a.tM)(O) ?? R);
    return (
        x === m.NJ8.DARK && (0, d.M)(R) ? (x = R) : x === m.NJ8.DARK && (0, d.q)(R) && (x = m.NJ8.DARKER),
        { theme: x, primaryColor: O, secondaryColor: j }
    );
}
