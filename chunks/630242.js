n.d(t, { R: () => d }), n(388685);
var r = n(442837),
    i = n(704215),
    a = n(243778),
    o = n(944486),
    s = n(436952),
    l = n(839606),
    c = n(54480),
    u = n(921944);
function d(e) {
    let { isSettingsOpen: t } = e,
        { activePickerChannelId: n, openPickerForChannel: d, setLastShownChatWallpaperPickerType: f, lastShownChatWallpaperPickerType: _ } = (0, l.B)(),
        p = (0, r.e7)([o.Z], () => o.Z.getCurrentlySelectedChannelId()),
        { canAccessPicker: h, entryPoint: m } = (0, c.m)({
            location: 'useChatWallpaperPickerConfig',
            selectedChannelId: p
        }),
        g = h && !t,
        [E, b] = (0, a.US)(g ? [i.z.CHAT_WALLPAPERS_DM_LIST_COACHMARK] : [], void 0, !0),
        y = E === i.z.CHAT_WALLPAPERS_DM_LIST_COACHMARK,
        [v, O] = (0, a.US)(y ? [i.z.CHAT_WALLPAPERS_PICKER_COACHMARK] : []);
    if (!h) return;
    let I = y && v === i.z.CHAT_WALLPAPERS_PICKER_COACHMARK;
    if ((I && null != p && null == n && _ !== l.j.COACHMARK && d(p), n === p)) {
        let e = I ? l.j.COACHMARK : l.j.DEFAULT;
        return (
            _ !== e && f(e),
            {
                pickerType: e,
                markDismissed: I
                    ? (e) => {
                          O(e), m === s.FN.TOOLBAR && b(u.L.INDIRECT_ACTION);
                      }
                    : void 0
            }
        );
    }
}
