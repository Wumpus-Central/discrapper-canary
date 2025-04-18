n.d(t, { m: () => l });
var r = n(442837),
    i = n(780384),
    a = n(410030),
    o = n(592125),
    s = n(436952);
function l(e) {
    let { location: t, selectedChannelId: n } = e,
        { enabled: l, entryPoint: c } = (0, s.sX)({ location: t }),
        u = (0, i.wj)((0, a.ZP)()),
        d = (0, r.e7)([o.Z], () => o.Z.getChannel(n));
    return {
        canAccessPicker: l && u && (null == d ? void 0 : d.isChatWallpaperEnabled) === !0,
        entryPoint: c
    };
}
