n.d(t, { B: () => o });
var r = n(230383),
    i = n(731965);
let o = (0, r.U)((e) => ({
    activePickerChannelId: void 0,
    previewWallpaperId: void 0,
    lastShownChatWallpaperPickerType: void 0,
    openPickerForChannel: (t) =>
        (0, i.j)(() => {
            e({ activePickerChannelId: t });
        }),
    closePicker: () =>
        (0, i.j)(() => {
            e({
                activePickerChannelId: void 0,
                previewWallpaperId: void 0
            });
        }),
    setPreviewWallpaperId: (t) =>
        (0, i.j)(() => {
            e({ previewWallpaperId: t });
        }),
    setLastShownChatWallpaperPickerType: (t) =>
        (0, i.j)(() => {
            e({ lastShownChatWallpaperPickerType: t });
        })
}));
