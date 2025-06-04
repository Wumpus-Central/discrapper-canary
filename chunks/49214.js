n.d(t, { Z: () => l }), n(539854);
var r = n(900089),
    i = n(607070),
    a = n(540059),
    o = n(12647),
    s = n(358085);
function l(e) {
    if (!__OVERLAY__ && s.isPlatformEmbedded) {
        let t = [],
            n = (0, a.O_)('ThemeStore');
        n && t.push('visual-refresh');
        try {
            let a = (0, r.uJ)(n ? 'BACKGROUND_TERTIARY' : 'BACKGROUND_SECONDARY', {
                theme: e,
                saturation: i.Z.saturation,
                enabledExperiments: t
            });
            o.Z.setApplicationBackgroundColor(a);
        } catch (e) {}
    }
}
