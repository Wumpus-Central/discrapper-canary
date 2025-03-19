n.d(t, { Z: () => a });
var r = n(442837),
    i = n(592125),
    o = n(611725);
function a(e) {
    let t = (0, r.e7)([i.Z], () => {
            var t;
            return null === (t = i.Z.getChannel(e)) || void 0 === t ? void 0 : t.wallpaper;
        }),
        { previewWallpaperId: n, activePickerChannelId: a } = (0, o.B)();
    return null == e
        ? void 0
        : a === e && void 0 !== n
          ? {
                wallpaperId: n,
                setterId: void 0,
                isPreview: !0
            }
          : t;
}
