n.d(r, { A: () => c });
var l = n(317097),
    t = n(17928),
    i = n(374994),
    o = n(462887),
    u = n(736653),
    d = n(775602),
    s = n(654107),
    a = n(543699),
    h = n(837529),
    m = n(652215);
function c(e) {
    let { user: r, displayProfile: n, pendingThemeColors: c, pendingAvatarSrc: v, isPreview: A, forceUserTheme: f } = e,
        y = (0, u.Ay)(),
        C = (0, h.Wd)(),
        p = (0, t.bG)([d.A], () => d.A.syncProfileThemeWithUserTheme),
        R = v ?? r?.getAvatarURL(n?.guildId, 80),
        T = (0, i.nt)("PRIMARY_530", { saturation: 1 }),
        [N, w] = (0, s.rh)(R, T, !1);
    if (null != C) return C;
    if (!n?.canEditThemes && !A) return { theme: y, primaryColor: null, secondaryColor: null };
    let x = n?.getPreviewThemeColors(c),
        b = x?.[0] ?? (0, l.LX)(N),
        j = x?.[1] ?? (0, l.LX)(w),
        O = p || f ? y : ((0, a.tM)(b) ?? y);
    return (
        O === m.NJ8.DARK && (0, o.M)(y) ? (O = y) : O === m.NJ8.DARK && (0, o.q)(y) && (O = m.NJ8.DARKER),
        { theme: O, primaryColor: b, secondaryColor: j }
    );
}
