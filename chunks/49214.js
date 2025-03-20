n.d(t, { Z: () => l }), n(653041);
var r = n(900089),
    i = n(607070),
    o = n(540059),
    a = n(12647),
    s = n(358085);
function l(e) {
    if (!__OVERLAY__ && s.isPlatformEmbedded) {
        let t = [],
            n = (0, o.O_)('ThemeStore');
        n && t.push('visual-refresh');
        try {
            let o = (0, r.uJ)(n ? 'BACKGROUND_TERTIARY' : 'BACKGROUND_SECONDARY', {
                theme: e,
                saturation: i.Z.saturation,
                enabledExperiments: t
            });
            a.Z.setApplicationBackgroundColor(o);
        } catch (e) {}
    }
}
