n.d(t, { R: () => u }), n(47120);
var r = n(442837),
    i = n(704215),
    o = n(243778),
    a = n(592125),
    s = n(944486),
    l = n(611725),
    c = n(364203);
function u(e) {
    let { isSettingsOpen: t } = e,
        { activePickerChannelId: n } = (0, l.B)(),
        a = (0, r.e7)([s.Z], () => s.Z.getCurrentlySelectedChannelId()),
        u = d(a) && !t,
        [f, _] = (0, o.US)(u ? [i.z.CHAT_WALLPAPERS_PICKER_COACHMARK] : []),
        p = f === i.z.CHAT_WALLPAPERS_PICKER_COACHMARK;
    if (n === a || p)
        return {
            pickerType: p ? c.jQ.COACHMARK : c.jQ.DEFAULT,
            markDismissed: p ? _ : void 0
        };
}
function d(e) {
    let t = (0, r.e7)([a.Z], () => a.Z.getChannel(e));
    return null != e && (null == t ? void 0 : t.isChatWallpaperEnabled) === !0;
}
