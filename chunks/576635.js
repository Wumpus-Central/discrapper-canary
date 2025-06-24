n.d(t, { Z: () => f }), n(388685);
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
    let { user: _, displayProfile: p, pendingThemeColors: h, pendingAvatarSrc: m, isPreview: g } = e,
        E = (0, o.ZP)(),
        b = (0, i.e7)([s.Z], () => s.Z.syncProfileThemeWithUserTheme),
        y = null != m ? m : null == _ ? void 0 : _.getAvatarURL(null == p ? void 0 : p.guildId, 80),
        O = (0, c.Sl)(d.Ilk.PRIMARY_530).hex,
        [v, I] = (0, l.Cf)(y, O, !1);
    if (!(null == p ? void 0 : p.canEditThemes) && !g)
        return {
            theme: E,
            primaryColor: null,
            secondaryColor: null
        };
    let T = null == p ? void 0 : p.getPreviewThemeColors(h),
        S = null != (t = null == T ? void 0 : T[0]) ? t : (0, r._i)(v),
        A = null != (n = null == T ? void 0 : T[1]) ? n : (0, r._i)(I),
        N = b ? E : null != (f = (0, u.V3)(S)) ? f : E;
    return (
        N === d.BRd.DARK && (0, a.wj)(E) ? (N = E) : N === d.BRd.DARK && (0, a.ap)(E) && (N = d.BRd.DARKER),
        {
            theme: N,
            primaryColor: S,
            secondaryColor: A
        }
    );
}
