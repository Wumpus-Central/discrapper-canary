i.d(t, { A: () => m });
var r = i(317097),
    l = i(311907),
    a = i(374994),
    n = i(462887),
    s = i(736653),
    o = i(775602),
    d = i(654107),
    c = i(543699),
    u = i(837529),
    _ = i(652215);
function m(e) {
    let { user: t, displayProfile: i, pendingThemeColors: m, pendingAvatarSrc: f, isPreview: p, forceUserTheme: A } = e,
        h = (0, s.Ay)(),
        v = (0, u.Wd)(),
        E = (0, l.bG)([o.A], () => o.A.syncProfileThemeWithUserTheme),
        I = f ?? t?.getAvatarURL(i?.guildId, 80),
        x = (0, a.nt)("PRIMARY_530", { saturation: 1 }),
        [y, b] = (0, d.rh)(I, x, !1);
    if (null != v) return v;
    if (!i?.canEditThemes && !p) return { theme: h, primaryColor: null, secondaryColor: null };
    let g = i?.getPreviewThemeColors(m),
        R = g?.[0] ?? (0, r.LX)(y),
        O = g?.[1] ?? (0, r.LX)(b),
        N = E || A ? h : ((0, c.tM)(R) ?? h);
    return (
        N === _.NJ8.DARK && (0, n.M)(h) ? (N = h) : N === _.NJ8.DARK && (0, n.q)(h) && (N = _.NJ8.DARKER),
        { theme: N, primaryColor: R, secondaryColor: O }
    );
}
