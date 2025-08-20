n.d(t, { R: () => g }), n(388685);
var r = n(647438),
    i = n(442837),
    a = n(704215),
    o = n(211644),
    s = n(266454),
    l = n(243778),
    c = n(592125),
    u = n(944486),
    d = n(626135),
    f = n(436952),
    _ = n(839606),
    p = n(54480),
    h = n(981631),
    m = n(921944);
function g(e) {
    let { isSettingsOpen: t } = e,
        {
            activePickerChannelId: n,
            openPickerForChannel: g,
            setLastShownChatWallpaperPickerType: E,
            lastShownChatWallpaperPickerType: b,
        } = (0, _.B)(),
        y = (0, i.e7)([u.Z], () => u.Z.getCurrentlySelectedChannelId()),
        { isChatWallpaperEnabled: O, channelType: v } = (0, i.cj)([c.Z], () => {
            let e = c.Z.getChannel(y);
            return {
                isChatWallpaperEnabled: null == e ? void 0 : e.isChatWallpaperEnabled,
                channelType: null == e ? void 0 : e.type,
            };
        }),
        {
            canAccessPicker: I,
            entryPoint: T,
            isChatWallpaperSetterExperimentEnabled: S,
            isDarkTheme: A,
        } = (0, p.m)({
            location: "useChatWallpaperPickerConfig",
            channelId: y,
        }),
        C = I && !t,
        [N, R] = (0, l.US)(C ? [a.z.CHAT_WALLPAPERS_DM_LIST_COACHMARK] : [], void 0, !0),
        P = N === a.z.CHAT_WALLPAPERS_DM_LIST_COACHMARK,
        [w, D] = (0, l.US)(P ? [a.z.CHAT_WALLPAPERS_PICKER_COACHMARK] : []),
        x = (0, o.ZP)((e) => e.recentlyShown[0]),
        L = (0, s.Nj)(a.z.CHAT_WALLPAPERS_PICKER_COACHMARK);
    if (
        (r.useMemo(() => {
            S &&
                !0 === O &&
                !L &&
                w !== a.z.CHAT_WALLPAPERS_PICKER_COACHMARK &&
                d.default.track(h.rMx.CHAT_WALLPAPER_PICKER_COACHMARK_NOT_SHOW_REASON, {
                    channel_id: y,
                    channel_type: v,
                    is_settings_open: t,
                    is_dark_theme: A,
                    is_overseer_dismissible_content_selected: P,
                    last_dismissible_content_winner: null != x ? a.z[x] : "None",
                });
        }, [O, S, v, y, L, w]),
        !I)
    )
        return;
    let j = P && w === a.z.CHAT_WALLPAPERS_PICKER_COACHMARK;
    if ((j && null != y && null == n && b !== _.j.COACHMARK && g(y), n === y)) {
        let e = j ? _.j.COACHMARK : _.j.DEFAULT;
        return (
            b !== e && E(e),
            {
                pickerType: e,
                markDismissed: j
                    ? (e) => {
                          D(e), T === f.FN.TOOLBAR && R(m.L.INDIRECT_ACTION);
                      }
                    : void 0,
            }
        );
    }
}
