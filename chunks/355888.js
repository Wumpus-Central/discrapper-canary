n.d(t, { Z: () => c });
var r = n(442837),
    i = n(780384),
    l = n(410030),
    o = n(629935),
    a = n(436952),
    s = n(411149);
function c(e) {
    let t = (0, i.wj)((0, l.ZP)()),
        {
            primaryColor: n,
            secondaryColor: c,
            tokenMixAmount: u,
            linkColor: d
        } = (0, r.cj)([s.Z], () => {
            var t, n, r, i, l;
            let o = s.Z.getWallpaperById(e);
            return {
                primaryColor: null == o || null == (t = o.default) ? void 0 : t.primary_color,
                secondaryColor: null == o || null == (n = o.default) ? void 0 : n.secondary_color,
                tokenMixAmount: null != (l = null == o || null == (r = o.default) ? void 0 : r.token_mix_amount) ? l : 100,
                linkColor: null == o || null == (i = o.default) ? void 0 : i.link_color
            };
        });
    if (!a.qM.useExperiment({ location: 'chat_wallpaper_color_mix' }).enabled) return;
    let p = {};
    return (
        null != n &&
            (p = (0, o.W4)({
                enabled: !0,
                primaryColor: n,
                secondaryColor: null != c ? c : n,
                isDarkTheme: t,
                baseMixAmount: u,
                textMixAmount: u
            })),
        null != d && ((p['--text-link'] = d), (p['--text-link-low-saturation'] = d)),
        p
    );
}
