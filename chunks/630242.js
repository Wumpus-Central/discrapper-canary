n.d(t, { R: () => u }), n(47120);
var r = n(442837),
    i = n(704215),
    o = n(243778),
    a = n(944486),
    s = n(54480),
    l = n(611725),
    c = n(364203);
function u(e) {
    let { isSettingsOpen: t } = e,
        { activePickerChannelId: n } = (0, l.B)(),
        u = (0, r.e7)([a.Z], () => a.Z.getCurrentlySelectedChannelId()),
        { canAccessPicker: d } = (0, s.m)({
            location: 'useChatWallpaperPickerConfig',
            selectedChannelId: u
        }),
        f = d && !t,
        [_, p] = (0, o.US)(f ? [i.z.CHAT_WALLPAPERS_PICKER_COACHMARK] : []);
    if (!d) return;
    let h = _ === i.z.CHAT_WALLPAPERS_PICKER_COACHMARK;
    if (n === u || h)
        return {
            pickerType: h ? c.jQ.COACHMARK : c.jQ.DEFAULT,
            markDismissed: h ? p : void 0
        };
}
