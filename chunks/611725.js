n.d(t, { B: () => o });
var r = n(15729),
    i = n(731965);
let o = (0, r.U)((e) => ({
    activePickerChannelId: null,
    openPickerForChannel: (t) =>
        (0, i.j)(() => {
            e({ activePickerChannelId: t });
        }),
    closePickerForChannel: () =>
        (0, i.j)(() => {
            e({ activePickerChannelId: null });
        })
}));
