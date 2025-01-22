r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(47120);
var a = r(866442),
    o = r(442837),
    s = r(410030),
    l = r(607070),
    u = r(220082),
    c = r(44315),
    d = r(168631),
    f = r(981631);
function p(e) {
    var n, r, i;
    let { user: p, displayProfile: h, pendingThemeColors: _, pendingAvatar: m, isPreview: g } = e,
        E = (0, s.ZP)(),
        v = (0, o.e7)([l.Z], () => l.Z.syncProfileThemeWithUserTheme),
        y = null != m ? m : null == p ? void 0 : p.getAvatarURL(null == h ? void 0 : h.guildId, 80),
        b = (0, c.Sl)(f.Ilk.PRIMARY_530).hex,
        [I, T] = (0, u.Cf)(y, b, !1);
    if (!(null == h ? void 0 : h.canEditThemes) && !g)
        return {
            theme: E,
            primaryColor: null,
            secondaryColor: null
        };
    let S = null == h ? void 0 : h.getPreviewThemeColors(_),
        A = null !== (n = null == S ? void 0 : S[0]) && void 0 !== n ? n : (0, a._i)(I),
        C = null !== (r = null == S ? void 0 : S[1]) && void 0 !== r ? r : (0, a._i)(T);
    return {
        theme: v ? E : null !== (i = (0, d.V3)(A)) && void 0 !== i ? i : E,
        primaryColor: A,
        secondaryColor: C
    };
}
