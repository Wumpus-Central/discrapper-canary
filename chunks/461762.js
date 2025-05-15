n.d(t, { Z: () => l });
var r = n(442837),
    i = n(780384),
    a = n(410030),
    o = n(436952),
    s = n(411149);
function l(e) {
    let t = o.qM.useExperiment({ location: 'useChatWallpaperVariant' }).enabled,
        n = (0, a.ZP)();
    return (0, r.e7)([s.Z], () => {
        var r, a, o, l;
        let c = s.Z.getWallpaperById(e);
        if (null == c) return;
        let u = c.default;
        if (t && (null == c || null == (r = c.variants) ? void 0 : r.dark) != null) {
            let e = (0, i.ap)(n) ? (null == (a = c.variants) ? void 0 : a.light) : null == (o = c.variants) ? void 0 : o.dark;
            u = null != e ? e : null == (l = c.variants) ? void 0 : l.dark;
        }
        return u;
    });
}
