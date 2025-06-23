n.d(t, { Z: () => s });
var r = n(692547),
    i = n(607070),
    a = n(12647),
    o = n(358085);
function s(e) {
    if (!__OVERLAY__ && o.isPlatformEmbedded)
        try {
            let t = r.Z.colors.BACKGROUND_BASE_LOWEST.resolve({
                theme: e,
                saturation: i.Z.saturation
            }).hex();
            a.Z.setApplicationBackgroundColor(t);
        } catch (e) {}
}
