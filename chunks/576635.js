n.d(t, { Z: () => d }), n(47120);
var i = n(866442),
    r = n(442837),
    a = n(410030),
    s = n(607070),
    o = n(220082),
    l = n(44315),
    u = n(168631),
    c = n(981631);
function d(e) {
    var t, n, d;
    let { user: f, displayProfile: _, pendingThemeColors: p, pendingAvatar: h, isPreview: m } = e,
        g = (0, a.ZP)(),
        E = (0, r.e7)([s.Z], () => s.Z.syncProfileThemeWithUserTheme),
        v = null != h ? h : null == f ? void 0 : f.getAvatarURL(null == _ ? void 0 : _.guildId, 80),
        y = (0, l.Sl)(c.Ilk.PRIMARY_530).hex,
        [I, T] = (0, o.Cf)(v, y, !1);
    if (!(null == _ ? void 0 : _.canEditThemes) && !m)
        return {
            theme: g,
            primaryColor: null,
            secondaryColor: null
        };
    let b = null == _ ? void 0 : _.getPreviewThemeColors(p),
        S = null !== (t = null == b ? void 0 : b[0]) && void 0 !== t ? t : (0, i._i)(I),
        A = null !== (n = null == b ? void 0 : b[1]) && void 0 !== n ? n : (0, i._i)(T);
    return {
        theme: E ? g : null !== (d = (0, u.V3)(S)) && void 0 !== d ? d : g,
        primaryColor: S,
        secondaryColor: A
    };
}
