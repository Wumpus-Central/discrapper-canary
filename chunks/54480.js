n.d(t, { m: () => l });
var r = n(442837),
    i = n(780384),
    a = n(410030),
    o = n(592125),
    s = n(436952);
function l(e) {
    let { location: t, channelId: n } = e,
        { enabled: l, entryPoint: c } = (0, s.sX)({ location: t }),
        u = s.qM.useExperiment({ location: t }).lightMode,
        d = (0, i.wj)((0, a.ZP)()),
        _ = (0, r.e7)([o.Z], () => o.Z.getChannel(n));
    return {
        canAccessPicker: l && (d || u) && (null == _ ? void 0 : _.isChatWallpaperEnabled) === !0,
        entryPoint: c,
        isChatWallpaperSetterExperimentEnabled: l,
        isDarkTheme: d
    };
}
