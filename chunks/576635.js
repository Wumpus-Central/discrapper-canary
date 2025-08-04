(n.d(t, { Z: () => f }), n(388685));
var r = n(866442),
    i = n(442837),
    a = n(780384),
    o = n(410030),
    s = n(607070),
    l = n(220082),
    c = n(44315),
    u = n(168631),
    d = n(981631);
function f(e) {
    var t, n, f;
    let { user: _, displayProfile: p, pendingThemeColors: h, pendingAvatarSrc: m, isPreview: g, forceUserTheme: E } = e,
        b = (0, o.ZP)(),
        y = (0, i.e7)([s.Z], () => s.Z.syncProfileThemeWithUserTheme),
        O = null != m ? m : null == _ ? void 0 : _.getAvatarURL(null == p ? void 0 : p.guildId, 80),
        v = (0, c.Sl)(d.Ilk.PRIMARY_530).hex,
        [I, T] = (0, l.Cf)(O, v, !1);
    if (!(null == p ? void 0 : p.canEditThemes) && !g)
        return {
            theme: b,
            primaryColor: null,
            secondaryColor: null
        };
    let S = null == p ? void 0 : p.getPreviewThemeColors(h),
        A = null != (t = null == S ? void 0 : S[0]) ? t : (0, r._i)(I),
        N = null != (n = null == S ? void 0 : S[1]) ? n : (0, r._i)(T),
        C = y || E ? b : null != (f = (0, u.V3)(A)) ? f : b;
    return (
        C === d.BRd.DARK && (0, a.wj)(b) ? (C = b) : C === d.BRd.DARK && (0, a.ap)(b) && (C = d.BRd.DARKER),
        {
            theme: C,
            primaryColor: A,
            secondaryColor: N
        }
    );
}
