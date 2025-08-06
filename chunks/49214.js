n.d(t, { Z: () => s });
var r = n(692547),
    i = n(607070),
    o = n(12647),
    a = n(358085);
function s(e) {
    if (!__OVERLAY__ && a.isPlatformEmbedded)
        try {
            let t = r.Z.colors.BACKGROUND_BASE_LOWEST.resolve({
                theme: e,
                saturation: i.Z.saturation
            }).hex();
            o.Z.setApplicationBackgroundColor(t);
        } catch (e) {}
}
