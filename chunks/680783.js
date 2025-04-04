n.d(t, { Z: () => u });
var r = n(442837),
    i = n(780384),
    o = n(410030),
    a = n(592125),
    s = n(436952),
    l = n(611725),
    c = n(373076);
function u(e) {
    let t = (0, r.e7)([a.Z], () => {
            var t;
            return null == (t = a.Z.getChannel(e)) ? void 0 : t.wallpaper;
        }),
        { previewWallpaperId: n, activePickerChannelId: u } = (0, l.B)(),
        d = (0, c.P)(null == t ? void 0 : t.setterId),
        f = (0, i.wj)((0, o.ZP)()),
        _ = (0, s.sQ)({ location: 'ChatWallpaperSetSystemMessage' });
    return null == e
        ? void 0
        : u === e && void 0 !== n
          ? {
                wallpaperId: n,
                setterId: void 0,
                isPreview: !0,
                isViewable: _
            }
          : void 0 !== t
            ? {
                  wallpaperId: t.wallpaperId,
                  isViewable: _ && d && f
              }
            : void 0;
}
