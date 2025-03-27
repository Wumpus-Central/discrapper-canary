n.d(t, { m: () => l });
var r = n(442837),
    i = n(780384),
    o = n(410030),
    a = n(592125),
    s = n(436952);
function l(e) {
    let { location: t, selectedChannelId: n } = e,
        { enabled: l, entryPoint: c } = (0, s.sX)({ location: t }),
        u = (0, i.wj)((0, o.ZP)()),
        d = (0, r.e7)([a.Z], () => a.Z.getChannel(n));
    return {
        canAccessPicker: l && u && (null == d ? void 0 : d.isChatWallpaperEnabled) === !0,
        entryPoint: c
    };
}
