n.d(t, { Z: () => s });
var r = n(780384),
    i = n(410030),
    l = n(629935),
    o = n(436952),
    a = n(461762);
function s(e) {
    let t = (0, r.wj)((0, i.ZP)()),
        n = (0, a.Z)(e);
    if (!o.qM.useExperiment({ location: 'chat_wallpaper_color_mix' }).enabled || null == n) return;
    let s = {},
        c = n.primary_color;
    if (null != c) {
        var u, d;
        let e = null != (u = n.token_mix_amount) ? u : 100;
        s = (0, l.W4)({
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
            Object.assign(s, {
                '--mention-foreground': n.link_color,
                '--text-link': n.link_color,
                '--text-link-low-saturation': n.link_color
            }),
        s
    );
}
