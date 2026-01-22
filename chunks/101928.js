n.d(t, {
    A: () => f,
}),
    n(896048);
var r = n(317097),
    i = n(311907),
    a = n(374994),
    s = n(582754),
    o = n(736653),
    l = n(775602),
    c = n(654107),
    u = n(543699),
    d = n(652215);

function f(e) {
    var t, n, f;
    let { user: p, displayProfile: _, pendingThemeColors: h, pendingAvatarSrc: m, isPreview: g, forceUserTheme: E } = e,
        b = (0, o.Ay)(),
        y = (0, i.bG)([l.A], () => l.A.syncProfileThemeWithUserTheme),
        O = null != m ? m : null == p ? void 0 : p.getAvatarURL(null == _ ? void 0 : _.guildId, 80),
        A = (0, a.nt)("PRIMARY_530", {
            saturation: 1,
        }),
        [v, S] = (0, c.rh)(O, A, !1);
    if (!(null == _ ? void 0 : _.canEditThemes) && !g)
        return {
            theme: b,
            primaryColor: null,
            secondaryColor: null,
        };
    let I = null == _ ? void 0 : _.getPreviewThemeColors(h),
        T = null != (t = null == I ? void 0 : I[0]) ? t : (0, r.LX)(v),
        C = null != (n = null == I ? void 0 : I[1]) ? n : (0, r.LX)(S),
        N = y || E ? b : null != (f = (0, u.tM)(T)) ? f : b;
    return (
        N === d.NJ8.DARK && (0, s.Mw)(b) ? (N = b) : N === d.NJ8.DARK && (0, s.qB)(b) && (N = d.NJ8.DARKER),
        {
            theme: N,
            primaryColor: T,
            secondaryColor: C,
        }
    );
}
