n.d(t, { R: () => d }), n(47120);
var r = n(442837),
    i = n(704215),
    o = n(243778),
    a = n(592125),
    s = n(944486),
    l = n(436952),
    c = n(611725),
    u = n(364203);
function d(e) {
    let { isSettingsOpen: t } = e,
        { activePickerChannelId: n } = (0, c.B)(),
        a = (0, r.e7)([s.Z], () => s.Z.getCurrentlySelectedChannelId()),
        l = f(a) && !t,
        [d, _] = (0, o.US)(l ? [i.z.CHAT_WALLPAPERS_PICKER_COACHMARK] : []),
        p = d === i.z.CHAT_WALLPAPERS_PICKER_COACHMARK;
    if (n === a || p)
        return {
            pickerType: p ? u.jQ.COACHMARK : u.jQ.DEFAULT,
            markDismissed: p ? _ : void 0
        };
}
function f(e) {
    let t = (0, r.e7)([a.Z], () => a.Z.getChannel(e)),
        n = (0, l.sX)({ location: 'useCanShowChatWallpaperCoachmark' }).enabled;
    return null != e && (null == t ? void 0 : t.isChatWallpaperEnabled) === !0 && !!n;
}
