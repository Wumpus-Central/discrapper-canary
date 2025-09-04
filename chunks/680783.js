n.d(t, { Z: () => l });
var r = n(442837),
    i = n(780384),
    a = n(410030),
    o = n(592125),
    s = n(436952);
function l(e) {
    let t = (0, r.e7)([o.Z], () => {
            var t;
            return null == (t = o.Z.getChannel(e)) ? void 0 : t.wallpaper;
        }),
        n = (0, i.wj)((0, a.ZP)()),
        l = (0, s.sQ)({ location: "ChatWallpaperSetSystemMessage" }),
        c = s.qM.useExperiment({ location: "ChatWallpaperSetSystemMessage" });
    if (null != e && void 0 !== t)
        return {
            wallpaperId: t.wallpaperId,
            isViewable: l && (n || c.lightMode),
        };
}
