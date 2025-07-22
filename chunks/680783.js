n.d(t, { Z: () => u });
var r = n(442837),
    i = n(780384),
    a = n(410030),
    o = n(592125),
    s = n(436952),
    l = n(839606),
    c = n(373076);
function u(e) {
    let t = (0, r.e7)([o.Z], () => {
            var t;
            return null == (t = o.Z.getChannel(e)) ? void 0 : t.wallpaper;
        }),
        { previewWallpaperId: n, activePickerChannelId: u } = (0, l.B)(),
        d = (0, c.P)(null == t ? void 0 : t.setterId),
        f = (0, i.wj)((0, a.ZP)()),
        _ = (0, s.sQ)({ location: 'ChatWallpaperSetSystemMessage' }),
        p = s.qM.useExperiment({ location: 'ChatWallpaperSetSystemMessage' });
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
                  isViewable: _ && d && (f || p.lightMode)
              }
            : void 0;
}
