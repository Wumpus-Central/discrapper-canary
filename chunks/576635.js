n.d(t, { Z: () => _ }), n(388685);
var r = n(866442),
    i = n(442837),
    a = n(780384),
    o = n(410030),
    s = n(607070),
    l = n(220082),
    c = n(44315),
    u = n(540059),
    d = n(168631),
    f = n(981631);
function _(e) {
    var t, n, _;
    let { user: p, displayProfile: h, pendingThemeColors: m, pendingAvatarSrc: g, isPreview: E } = e,
        b = (0, o.ZP)(),
        y = (0, i.e7)([s.Z], () => s.Z.syncProfileThemeWithUserTheme),
        O = null != g ? g : null == p ? void 0 : p.getAvatarURL(null == h ? void 0 : h.guildId, 80),
        v = (0, c.Sl)(f.Ilk.PRIMARY_530).hex,
        [I, S] = (0, l.Cf)(O, v, !1),
        T = (0, u.Q3)('useProfileTheme');
    if (!(null == h ? void 0 : h.canEditThemes) && !E)
        return {
            theme: b,
            primaryColor: null,
            secondaryColor: null
        };
    let A = null == h ? void 0 : h.getPreviewThemeColors(m),
        N = null != (t = null == A ? void 0 : A[0]) ? t : (0, r._i)(I),
        C = null != (n = null == A ? void 0 : A[1]) ? n : (0, r._i)(S),
        R = y ? b : null != (_ = (0, d.V3)(N)) ? _ : b;
    return (
        T && (R === f.BRd.DARK && (0, a.wj)(b) ? (R = b) : R === f.BRd.DARK && (0, a.ap)(b) && (R = f.BRd.DARKER)),
        {
            theme: R,
            primaryColor: N,
            secondaryColor: C
        }
    );
}
