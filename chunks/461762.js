n.d(t, { Z: () => l });
var r = n(442837),
    i = n(780384),
    o = n(410030),
    a = n(436952),
    s = n(411149);
function l(e) {
    let t = a.qM.useExperiment({ location: 'useChatWallpaperVariant' }).enabled,
        n = (0, o.ZP)();
    return (0, r.e7)([s.Z], () => {
        var r, o, a, l;
        let c = s.Z.getWallpaperById(e);
        if (null == c) return;
        let u = c.default;
        if (t && (null == c || null == (r = c.variants) ? void 0 : r.dark) != null) {
            let e = (0, i.ap)(n) ? (null == (o = c.variants) ? void 0 : o.light) : null == (a = c.variants) ? void 0 : a.dark;
            u = null != e ? e : null == (l = c.variants) ? void 0 : l.dark;
        }
        return u;
    });
}
