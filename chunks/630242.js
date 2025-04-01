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
        { activePickerChannelId: n, openPickerForChannel: u, setLastShownChatWallpaperPickerType: d, lastShownChatWallpaperPickerType: f } = (0, l.B)(),
        _ = (0, r.e7)([a.Z], () => a.Z.getCurrentlySelectedChannelId()),
        { canAccessPicker: p } = (0, s.m)({
            location: 'useChatWallpaperPickerConfig',
            selectedChannelId: _
        }),
        h = p && !t,
        [m, g] = (0, o.US)(h ? [i.z.CHAT_WALLPAPERS_PICKER_COACHMARK] : []);
    if (!p) return;
    let E = m === i.z.CHAT_WALLPAPERS_PICKER_COACHMARK;
    if ((E && null != _ && null == n && f !== c.jQ.COACHMARK && u(_), n === _)) {
        let e = E ? c.jQ.COACHMARK : c.jQ.DEFAULT;
        return (
            f !== e && d(e),
            {
                pickerType: e,
                markDismissed: E ? g : void 0
            }
        );
    }
}
