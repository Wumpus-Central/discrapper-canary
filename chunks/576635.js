n.d(t, { Z: () => f }), n(388685);
var r = n(866442),
    i = n(442837),
    a = n(900089),
    o = n(780384),
    s = n(410030),
    l = n(607070),
    c = n(220082),
    u = n(168631),
    d = n(981631);
function f(e) {
    var t, n, f;
    let { user: p, displayProfile: _, pendingThemeColors: m, pendingAvatarSrc: h, isPreview: g, forceUserTheme: E } = e,
        b = (0, s.ZP)(),
        y = (0, i.e7)([l.Z], () => l.Z.syncProfileThemeWithUserTheme),
        O = null != h ? h : null == p ? void 0 : p.getAvatarURL(null == _ ? void 0 : _.guildId, 80),
        v = (0, a.x3)("PRIMARY_530", { saturation: 1 }),
        [S, I] = (0, c.Cf)(O, v, !1);
    if (!(null == _ ? void 0 : _.canEditThemes) && !g)
        return {
            theme: b,
            primaryColor: null,
            secondaryColor: null,
        };
    let T = null == _ ? void 0 : _.getPreviewThemeColors(m),
        C = null != (t = null == T ? void 0 : T[0]) ? t : (0, r._i)(S),
        A = null != (n = null == T ? void 0 : T[1]) ? n : (0, r._i)(I),
        N = y || E ? b : null != (f = (0, u.V3)(C)) ? f : b;
    return (
        N === d.BRd.DARK && (0, o.wj)(b) ? (N = b) : N === d.BRd.DARK && (0, o.ap)(b) && (N = d.BRd.DARKER),
        {
            theme: N,
            primaryColor: C,
            secondaryColor: A,
        }
    );
}
