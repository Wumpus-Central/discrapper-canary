n.d(t, { R: () => m }), n(388685);
var r = n(192379),
    i = n(442837),
    a = n(704215),
    o = n(211644),
    s = n(605236),
    l = n(243778),
    c = n(944486),
    u = n(626135),
    d = n(436952),
    f = n(839606),
    _ = n(54480),
    p = n(981631),
    h = n(921944);
function m(e) {
    let { isSettingsOpen: t } = e,
        { activePickerChannelId: n, openPickerForChannel: m, setLastShownChatWallpaperPickerType: g, lastShownChatWallpaperPickerType: E } = (0, f.B)(),
        b = (0, i.e7)([c.Z], () => c.Z.getCurrentlySelectedChannelId()),
        {
            canAccessPicker: y,
            entryPoint: v,
            isChatWallpaperSetterExperimentEnabled: O,
            isDarkTheme: I,
            selectedChannel: S
        } = (0, _.m)({
            location: 'useChatWallpaperPickerConfig',
            selectedChannelId: b
        }),
        T = y && !t,
        [A, N] = (0, l.US)(T ? [a.z.CHAT_WALLPAPERS_DM_LIST_COACHMARK] : [], void 0, !0),
        C = A === a.z.CHAT_WALLPAPERS_DM_LIST_COACHMARK,
        [R, P] = (0, l.US)(C ? [a.z.CHAT_WALLPAPERS_PICKER_COACHMARK] : []),
        w = (0, o.ZP)((e) => e.recentlyShown[0]),
        D = (0, s.wE)(a.z.CHAT_WALLPAPERS_PICKER_COACHMARK);
    if (
        (r.useMemo(() => {
            O &&
                (null == S ? void 0 : S.isChatWallpaperEnabled) === !0 &&
                !D &&
                R !== a.z.CHAT_WALLPAPERS_PICKER_COACHMARK &&
                u.default.track(p.rMx.CHAT_WALLPAPER_PICKER_COACHMARK_NOT_SHOW_REASON, {
                    channel_id: S.id,
                    channel_type: S.type,
                    is_settings_open: t,
                    is_dark_theme: I,
                    is_overseer_dismissible_content_selected: C,
                    last_dismissible_content_winner: null != w ? a.z[w] : 'None'
                });
        }, [O, S, D, R]),
        !y)
    )
        return;
    let L = C && R === a.z.CHAT_WALLPAPERS_PICKER_COACHMARK;
    if ((L && null != b && null == n && E !== f.j.COACHMARK && m(b), n === b)) {
        let e = L ? f.j.COACHMARK : f.j.DEFAULT;
        return (
            E !== e && g(e),
            {
                pickerType: e,
                markDismissed: L
                    ? (e) => {
                          P(e), v === d.FN.TOOLBAR && N(h.L.INDIRECT_ACTION);
                      }
                    : void 0
            }
        );
    }
}
