n.d(t, { Z: () => l });
var r = n(780384),
    i = n(410030),
    o = n(629935),
    a = n(436952),
    s = n(461762);
function l(e) {
    let t = (0, r.wj)((0, i.ZP)()),
        n = (0, s.Z)(e);
    if (!a.qM.useExperiment({ location: 'chat_wallpaper_color_mix' }).enabled || null == n) return;
    let l = {},
        c = n.primary_color;
    if (null != c) {
        var u, d;
        let e = null != (u = n.token_mix_amount) ? u : 100;
        l = (0, o.W4)({
            enabled: !0,
            primaryColor: c,
            secondaryColor: null != (d = n.secondary_color) ? d : c,
            isDarkTheme: t,
            baseMixAmount: e,
            textMixAmount: e
        });
    }
    return (
        null != n.link_color &&
            Object.assign(l, {
                '--mention-foreground': n.link_color,
                '--text-link': n.link_color,
                '--text-link-low-saturation': n.link_color
            }),
        l
    );
}
