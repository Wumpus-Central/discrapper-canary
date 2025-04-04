n.d(t, { R: () => c }), n(388685);
var r = n(442837),
    i = n(704215),
    o = n(243778),
    a = n(944486),
    s = n(839606),
    l = n(54480);
function c(e) {
    let { isSettingsOpen: t } = e,
        { activePickerChannelId: n, openPickerForChannel: c, setLastShownChatWallpaperPickerType: u, lastShownChatWallpaperPickerType: d } = (0, s.B)(),
        f = (0, r.e7)([a.Z], () => a.Z.getCurrentlySelectedChannelId()),
        { canAccessPicker: _ } = (0, l.m)({
            location: 'useChatWallpaperPickerConfig',
            selectedChannelId: f
        }),
        p = _ && !t,
        [h, m] = (0, o.US)(p ? [i.z.CHAT_WALLPAPERS_PICKER_COACHMARK] : []);
    if (!_) return;
    let g = h === i.z.CHAT_WALLPAPERS_PICKER_COACHMARK;
    if ((g && null != f && null == n && d !== s.j.COACHMARK && c(f), n === f)) {
        let e = g ? s.j.COACHMARK : s.j.DEFAULT;
        return (
            d !== e && u(e),
            {
                pickerType: e,
                markDismissed: g ? m : void 0
            }
        );
    }
}
