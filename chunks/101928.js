n.d(t, { A: () => h });
var i = n(317097),
    r = n(17928),
    a = n(374994),
    l = n(462887),
    o = n(736653),
    s = n(775602),
    c = n(654107),
    d = n(543699),
    u = n(837529),
    _ = n(652215);
function h(e) {
    let { user: t, displayProfile: n, pendingThemeColors: h, pendingAvatarSrc: p, isPreview: f, forceUserTheme: m } = e,
        A = (0, o.Ay)(),
        g = (0, u.Wd)(),
        b = (0, r.bG)([s.A], () => s.A.syncProfileThemeWithUserTheme),
        y = p ?? t?.getAvatarURL(n?.guildId, 80),
        E = (0, a.nt)("PRIMARY_530", { saturation: 1 }),
        [v, S] = (0, c.rh)(y, E, !1);
    if (null != g) return g;
    if (!n?.canEditThemes && !f) return { theme: A, primaryColor: null, secondaryColor: null };
    let I = n?.getPreviewThemeColors(h),
        T = I?.[0] ?? (0, i.LX)(v),
        C = I?.[1] ?? (0, i.LX)(S),
        x = b || m ? A : ((0, d.tM)(T) ?? A);
    return (
        x === _.NJ8.DARK && (0, l.M)(A) ? (x = A) : x === _.NJ8.DARK && (0, l.q)(A) && (x = _.NJ8.DARKER),
        { theme: x, primaryColor: T, secondaryColor: C }
    );
}
